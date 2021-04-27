import Vue from 'vue'
import Vuex from 'vuex'

import TodoList from '@/store/modules/TodoList'
import {TodoPlugin} from '@/store/TodoPlugin'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        // namespace 사용시 module을
        Todo: TodoList
    },
    plugins: [TodoPlugin] // todolist에 대한 localStorage 처리를 담당하는 plugin
})
