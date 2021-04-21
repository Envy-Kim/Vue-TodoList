import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Todo from '@/store/modules/TodoList'

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Todo: Todo
    }
})
