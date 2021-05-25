import {axiosDefault} from '@/store/api/BaseAxios'

export default {
    namespaced: true,
    state: {
        /**
         * list: [{
         *     id: Number, // 각 todoslit의 id(할일 아이디) : device의 고유번호를 넣어주면 됨. axios get 테스트 시에는 1을 사용
         *     text: String, // 할일 내용, 기존의 title
         *     state: Number, // 상태값(1: 미완료, 2: 완료)
         *     created_at: String, // 생성일시(format: 2021-05-13 08:57:55)
         *     updated_at: String, // 수정일시(format: 2021-05-13 09:06:16)
         * }]
         */
        list: [],
        userId: 1,
        listFilter: "all",
        orderBy: "desc",
    },
    getters: {
        getTodoList(state) {
            let todoList = state.list

            if (state.listFilter === "active") {
                todoList = state.list.filter((item) => item.state === 1)
            } else if (state.listFilter === "completed") {
                todoList = state.list.filter((item) => item.state === 2)
            }

            return todoList
        },
        getCountAllList(state) {
            return state.list.length
        },
        getCountCompletedList(state) {
            return state.list.filter((item) => item.state === 2).length
        },
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
        setFilter(state, filter) {
            state.listFilter = filter
        },
        setTodoList(state, todoList) {
            state.list = todoList
        },
        setOrderBy(state, orderBy) {
            state.orderBy = orderBy
        },
        toggleTodo(state, todo) {
            const index = state.list.indexOf(todo)
            if (index > -1) state.list[index].state = todo.state
        },
        removeTodo(state, todo) {
            const index = state.list.indexOf(todo)
            if (index > -1) state.list.splice(index, 1)
        },
        listClearAll(state) {
            state.list.splice(0)
        },
        listSort(state) {
            if (state.list.length > 0) {
                if (state.orderBy === 'asc') {
                    console.log('sort asc')
                    state.list.sort(function (a, b) {
                        return new Date(a.created_at) - new Date(b.created_at)
                    })
                } else {
                    console.log('sort desc')
                    state.list.sort(function (a, b) {
                        return new Date(b.created_at) - new Date(a.created_at)
                    })
                }
            }
        },
        addTodo(state, item) {
            if (state.orderBy === "desc") {
                state.list.unshift(item)
            } else {
                state.list.push(item)
            }
        },
    },
    actions: {
        setUserId({commit}, userId) {
            commit("setUserId", userId)
        },

        setFilter({commit}, filter) {
            commit("setFilter", filter)
        },

        async getUserId({commit}) {
            return await axiosDefault()
                .post("/api/v1/user")
                .catch((err) => {
                    // handle error
                    console.log("error :: " + err)
                })
                .then((res) => {
                    console.log("post userId 생성 :: " + res.message)
                    commit("setUserId", res.data.user_id)
                })
        },

        async getTodoList({commit, state}) {
            return await axiosDefault()
                .get(`/api/v1/todos/${state.userId}`)
                .catch((err) => {
                    // handle error
                    console.log("error :: " + err)
                })
                .then((res) => {
                    console.log("get todoList 조회 :: " + res.success)
                    commit("setTodoList", res.data)
                    commit("listSort")
                })
        },

        setOrderBy({commit}, item) {
            // 정렬값 저장
            commit("setOrderBy", item)
            // 리스트 정렬
            commit('listSort')

            localStorage.setItem("todo-orderby", item)
        },

        // 데이터 추가
        // eslint-disable-next-line no-unused-vars
        async addTodo({commit, state}, item) {
            await axiosDefault()
                .post(`/api/v1/todos/${state.userId}`, item)
                .catch((err) => {
                    // handle error
                    console.log("error :: " + err)
                })
                .then((res) => {
                    console.log("post 추가 :: " + res.message)
                    /*
                    created_at 값이 서버에서 생성되는 값과 클라이언트에서 만들어지는 값이 달라서
                    commit을 사용하지 않고 데이터를 다시 가져옴.
                     */
                    //commit("addTodo", item)
                    this.dispatch('Todo/getTodoList')
                })
        },

        // 전체 삭제.
        async clearAll({commit, state}) {
            for (const item of state.list) {
                await axiosDefault()
                    .delete(`/api/v1/todos/${item.id}`)
                    .catch((err) => {
                        // handle error
                        console.log("error :: " + err)
                    })
                    .then((res) => {
                        console.log("delete 삭제 :: " + res.message)
                    })
            }
            commit("listClearAll")
        },

        // list item 하나에 대한 삭제
        async removeTodo({commit}, todo) {
            await axiosDefault()
                .delete(`/api/v1/todos/${todo.id}`)
                .catch((err) => {
                    // handle error
                    console.log("error :: " + err)
                })
                .then((res) => {
                    console.log("delete 삭제 :: " + res.message)
                    commit("removeTodo", todo)
                })
        },

        // 리스트 아이템 토글
        // eslint-disable-next-line no-unused-vars
        async toggleTodo({commit}, todo) {
            return await axiosDefault()
                .patch(`/api/v1/todos/${todo.id}`, todo)
                .catch((err) => {
                    // handle error
                    console.log("error :: " + err)
                })
                .then((res) => {
                    console.log("patch 토글 :: " + res.message)
                    commit("toggleTodo", todo)
                })
        },
    },
}
