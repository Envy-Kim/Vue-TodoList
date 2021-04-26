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
        listSelect: [
            {option: "최신순", type: "orderDesc", selected: false},
            {option: "오래된순", type: "orderAsc", selected: true},
        ],
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
        getTodoSelect(state) {
            return state.listSelect
        },
    },
    mutations: {
        setFilter(state, filter) {
            state.listFilter = filter
        },
        setTodoList(state, todoList) {
            state.list = todoList
        },
        setSelect(state, todoSelect) {
            localStorage.setItem("todo-select", JSON.stringify(state.listSelect))
            state.listSelect = todoSelect
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
        orderByDateAsc(state, selectIndex) {
            state.list.sort(function (a, b) {
                // 오름차순
                return a.created_at < b.created_at
                    ? -1
                    : a.created_at > b.created_at
                        ? 1
                        : 0
            })
            for (let i = 0; i < state.listSelect.length; i++) {
                if (selectIndex === i) {
                    state.listSelect[i].selected = true
                } else {
                    state.listSelect[i].selected = false
                }
            }
            localStorage.setItem("todo-select", JSON.stringify(state.listSelect))
        },
        orderByDateDesc(state, selectIndex) {
            state.list.sort(function (a, b) {
                // 내립차순
                return a.created_at > b.created_at
                    ? -1
                    : a.created_at < b.created_at
                        ? 1
                        : 0
            })
            for (let i = 0; i < state.listSelect.length; i++) {
                if (selectIndex === i) {
                    state.listSelect[i].selected = true
                } else {
                    state.listSelect[i].selected = false
                }
            }
            localStorage.setItem("todo-select", JSON.stringify(state.listSelect))
        },
        addTodo(state, item) {
            state.list.push(item)
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

        setSelect({commit}, selectList) {
            commit("setSelect", selectList)
        },

        // 날짜 정렬(오름차순) // action을 사용하지 않고 getter에 만들어서 호출하는 방법도 있음
        orderByDateAsc({commit}, selectIndex) {
            commit("orderByDateAsc", selectIndex)
        },

        // 날짜 정렬(내림차순)
        orderByDateDesc({commit}, selectIndex) {
            commit("orderByDateDesc", selectIndex)
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
