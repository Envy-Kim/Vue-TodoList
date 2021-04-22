import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import checkLocalStorage from "@/router/middleware/localStorages";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
    /**
     * beforEnter : 컴포넌트들을 랜더링하는 라우트 앞에 호출됨.
     * 이 가드가 호출 뙬 때 아직 생성되지 않았기 때문에 'this' 컴포넌트 인스턴스에 접근할 수 없음.
     */
    beforeEnter: checkLocalStorage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
