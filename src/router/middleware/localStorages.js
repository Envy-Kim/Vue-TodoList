import store from "@/store/index"

export function checkLocalStorages(to, from, next) {
    if (localStorage.getItem("userId")) {
        store.dispatch("Todo/setUserId", localStorage.getItem("userId"))
    } else {
        store.dispatch("Todo/getUserId")
    }

    if (localStorage.getItem("todo-filter")) {
        store.dispatch("Todo/setFilter", localStorage.getItem("todo-filter"))
    }
    if (localStorage.getItem("todo-orderby")) {
        store.dispatch("Todo/setOrderBy", localStorage.getItem("todo-orderby"))
    }

    store.dispatch("Todo/getTodoList")

    next()
}
