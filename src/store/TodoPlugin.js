

export const TodoPlugin = store => {
    // 저장소가 초기화 될 때 불립니다.
    store.subscribe((mutation, state) => {
        // 매 변이시마다 불립니다.
        // 변이는 { type, payload } 포맷으로 제공됩니다.

        // todo에 대한 mutation type 배열
        const todoMutations = ['Todo/addTodo', 'Todo/removeTodo', 'Todo/toggleTodo', 'Todo/orderByDateAsc', 'Todo/orderByDateDesc']

        if(todoMutations.includes(mutation.type)) {
            localStorage.setItem("todo-list", JSON.stringify(state.Todo.list))
        }

        if(mutation.type === 'Todo/listClearAll') {
            localStorage.removeItem("todo-list")
        }
    })
}