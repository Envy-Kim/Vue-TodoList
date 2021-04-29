export default {
    namespaced: true,
    state: {
        /**
         * list: [{
         *     title: String,
         *     completed: Boolean,
         *     created_at: Date
         * }]
         */
        list: [],
        listFilter: "all",
        orderBy: "desc",
    },
    getters: {
        getTodoList(state) {
            let todoList = state.list

            if (state.listFilter === "active") {
                todoList = state.list.filter((item) => !item.completed)
            } else if (state.listFilter === "completed") {
                todoList = state.list.filter((item) => item.completed)
            }

            return todoList
        },
        getCountAllList(state) {
            return state.list.length
        },
        getCountCompletedList(state) {
            return state.list.filter((item) => item.completed).length
        },
    },
    mutations: {
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
            if (index > -1) state.list[index].completed = todo.completed
        },
        removeTodo(state, todo) {
            const index = state.list.indexOf(todo)
            if (index > -1) state.list.splice(index, 1)
        },
        listClearAll(state) {
            state.list.splice(0)
        },
        listSort(state) {
            if(state.list.length > 0) {
                console.log('sort mutation')
                if(state.orderBy === 'asc') {
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
                localStorage.setItem("todo-list", JSON.stringify(state.list))
            }
        },
        addTodo(state, item) {
            if (state.orderBy === "asc") {
                state.list.unshift(item)
            } else {
                state.list.push(item)
            }
        },
    },
    actions: {
        setFilter({commit}, filter) {
            commit("setFilter", filter)
            localStorage.setItem("todo-filter", filter)
        },

        setTodoList({commit}, todoList) {
            commit("setTodoList", todoList)
        },

        setOrderBy({commit}, item) {
            // 정렬값 저장
            commit("setOrderBy", item)
            // 리스트 정렬
            commit('listSort')

            localStorage.setItem("todo-orderby", item)
        },

        // 데이터 추가
        addTodo({commit}, item) {
            commit("addTodo", item)
        },

        // 전체 삭제.
        clearAll({commit}) {
            commit("listClearAll")
        },

        // list item 하나에 대한 삭제
        removeTodo({commit}, todo) {
            commit("removeTodo", todo)
        },

        // 리스트 아이템 토글
        toggleTodo({commit}, todo) {
            commit("toggleTodo", todo)
        },
    },
}
