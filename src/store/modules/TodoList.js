export default {
    state: {
        // 로컬 스토리지가 todolist가 있을 경우 가져와서 json pasing을 진행 없을 경우, 기본값은 빈 배열
        list: localStorage.getItem('todo-list')
            ? JSON.parse(localStorage.getItem('todo-list'))
            : [],

        // 로컬 스토리지에 리스트 필터가 존재하면 가져오고 없을 경우의 기본값은 all
        listFilter: localStorage.getItem("todo-filter")
            ? localStorage.getItem("todo-filter")
            : "all",
    },
    getters: {
        getTodoList(state) {
            let todoList = state.list

            if (state.listFilter === "active") {
                todoList = state.list.filter(item => !item.completed)
            } else if (state.listFilter === "completed") {
                todoList = state.list.filter(item => item.completed)
            }

            return todoList
        },
        getTodoListAll(state) {
            return state.list.length
        },
        getTodoListCompleted(state) {
            return state.list.filter(item => item.completed).length
        }
    },
    mutations: {
        setFilter(state, filter) {
            state.listFilter = filter
        },
        toggleTodo(state, todo) {
            const index = state.list.indexOf(todo);
            if (index > -1) {
                state.list[index].completed = todo.completed
                localStorage.setItem('todo-list', JSON.stringify(state.list))
            }
        },
        removeTodo(state, todo) {
            const index = state.list.indexOf(todo)
            if (index > -1) {
                state.list.splice(index, 1)
                localStorage.setItem('todo-list', JSON.stringify(state.list))
            }
        },
        listClearAll(state) {
            state.list.splice(0)
            localStorage.clear()
        },
        orderByDateAsc(state) {
            state.list.sort(function (a, b) {
                // 오름차순
                return a.created_at < b.created_at
                    ? -1
                    : a.created_at > b.created_at
                        ? 1
                        : 0
            })
        },
        orderByDateDesc(state) {
            state.list.sort(function (a, b) {
                // 내립차순
                return a.created_at > b.created_at
                    ? -1
                    : a.created_at < b.created_at
                        ? 1
                        : 0
            })
        },
        addTodo(state, item) {
            state.list.push(item)
            // todolist 객체를 문자열로 만들어 로컬 스토리지에 저장
            localStorage.setItem('todo-list', JSON.stringify(state.list))
        }
    },
    actions: {
        setFilter({commit}, filter) {
            commit("setFilter", filter)
            localStorage.setItem("todo-filter", filter)
        },

        // 날짜 정렬(오름차순) // action을 사용하지 않고 getter에 만들어서 호출하는 방법도 있음
        orderByDateAsc({commit}) {
            commit("orderByDateAsc")
        },

        // 날짜 정렬(내림차순)
        orderByDateDesc({commit}) {
            commit("orderByDateDesc")
        },

        // 데이터 추가
        addTodo({commit}, item) {
            commit('addTodo', item)
        },

        // 전체 삭제.
        clearAll({commit}) {
            commit("listClearAll")
        },

        // list item 하나에 대한 삭제
        clear({commit}, todo) {
            commit("removeTodo", todo)
        },

        // 리스트 아이템 토글
        toggleTodo({commit}, todo) {
            commit("toggleTodo", todo)
        },
    },
}
