// todo: 추후에 localStorage에서 가져오도록 수정 필요
let todoList = [
    {
        title: '리스트 컴포넌트 만들기',
        created_at: '2021-04-18 15:00:00',
        completed: false,
    },
    {
        title: 'vue todo 리스트 구조설계',
        created_at: '2021-04-14 20:00:00',
        completed: true,
    },
    {
        title: 'Vuex 적용',
        created_at: '2021-04-19 12:00:00',
        completed: false,
    },
]


export default {
    state: {
        list: todoList,
        // localStorage에 리스트 필터가 존재하면 가져오고 없을 경우의 기본값은 all
        listFilter: localStorage.getItem('todo-filter') ? localStorage.getItem('todo-filter') : 'all'
        // 날짜 정렬에 사용할 변수를 만들어주세요. 자료형: string, 값: desc(내림차순), asc(오름차순)
    },
    getters: {
        getTodoList(state) {
            let todoList = state.list

            if(state.listFilter === 'active') {
                todoList = state.list.filter(item => !item.completed)
            } else if(state.listFilter === 'completed') {
                todoList = state.list.filter(item => item.completed)
            }

            return todoList
        },
    },
    mutations: {
        setFilter(state, filter) {
            state.listFilter = filter
        },
    },
    actions: {
        setFilter({commit}, filter) {
            commit('setFilter', filter)
            localStorage.setItem('todo-filter', filter)
        },

        // 날짜 정렬시 호출할 action을 만들어주세요.
        orderByAsc() {
        },
        orderByDesc() {
        },

        // 데이터 추가
        addTodo() {
        },

        // 전체 삭제.
        clearAll() {
        },

        // list item 하나에 대한 삭제
        clear() {
        },
    },
}