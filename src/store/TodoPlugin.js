export const TodoPlugin = store => {
    // 저장소가 초기화 될 때 불립니다.
    store.subscribe((mutation, state) => {
        // 매 변이시마다 불립니다.
        // 변이는 { type, payload } 포맷으로 제공됩니다.

        if (mutation.type === "Todo/setUserId") {
            localStorage.setItem("userId", state.Todo.userId)
        }

        if (mutation.type === "Todo/setFilter") {
            localStorage.setItem("todo-filter", state.Todo.listFilter)
        }

        if (mutation.type === "Todo/setOrderBy") {
            localStorage.setItem("todo-orderby", state.Todo.orderBy)
        }
    })

    let axiosAction = ['Todo/addTodo', 'Todo/removeTodo', 'Todo/toggleTodo', 'Todo/clearAll', 'Todo/getTodoList']

    store.subscribeAction({
        before(action, state) {
            if(axiosAction.includes(action.type)) {
                console.log(action.type)
                console.log(state.Todo.loadingState)
                store.commit('Todo/setLoadingState', true)
            }
        },
        after(action, state) {
            if(axiosAction.includes(action.type)) {
                console.log(action.type)
                console.log(state.Todo.loadingState)
                setTimeout(()=>{
                    store.commit('Todo/setLoadingState', false);
                }, 300);
            }
        }
    })
}