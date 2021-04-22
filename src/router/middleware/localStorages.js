import store from '@/store/index';

const localStorages = function (to, from, next) {
    if(localStorage.getItem('todo-filter')) {
        store.dispatch('setFilter', localStorage.getItem('todo-filter'))
    }
    if(localStorage.getItem('todo-list')) {
        store.dispatch('setTodoList', JSON.parse(localStorage.getItem('todo-list')))
    }
    next();
};

export default localStorages