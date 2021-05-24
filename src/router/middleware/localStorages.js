import store from "@/store/index"

export function checkLocalStorages(to, from, next) {
    /**
     * todo : userId 검토 필요. 브라우저 또는 디바이스의 고유값(uuid)으로 하려했으나 숫자값만 허용되어 검토 필요.
     */
    let userId = 2 // 임시 사용
    store.dispatch("Todo/getTodoList", userId)

    if (localStorage.getItem("todo-filter")) {
        store.dispatch("Todo/setFilter", localStorage.getItem("todo-filter"))
    }
    if (localStorage.getItem("todo-orderby")) {
        store.dispatch("Todo/setOrderBy", localStorage.getItem("todo-orderby"))
    }
    next()
}
