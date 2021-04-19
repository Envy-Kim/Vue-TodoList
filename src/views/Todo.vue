<template>
  <base-layout>
    <!-- 상단 정보 Start -->
    <div class="top">
      <p class="time-text">Good morning! afternoon! evening! night!</p>
      <p class="tasks-count">
        <span><em>2</em>/4</span> 완료!
      </p>
    </div>
    <!-- 상단 정보 End -->

    <!-- input box(s) -->
    <div class="input-box">
      <TodoInput
      type="text"
      placeholder="Please enter text here"/>
      <todo-button>
        <img src="@/assets/images/btn_go.png" alt="">
      </todo-button>
    </div>
    <!-- input box(e) -->

    <!-- list에 대한 컨트롤 부분 (s) : 추후 컴포넌트로 뺄지 고민 중 -->
    <div>
      <TodoSelect/>
      <button @click="setFilter('all')">All</button>
      <button @click="setFilter('active')">Active</button>
      <button @click="setFilter('completed')">Completed</button>
      <button @click="listClearAll">Clear All</button>
    </div>
    <!-- list에 대한 컨트롤 부분 (e) -->

    <TodoList :list="todoList" />
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoInput, TodoButton, TodoSelect, TodoList
  },
  data() {
    return {
      listFilter: this.$store.state.Todo.listFilter
    }
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodoList
    }
  },
  methods: {
    setFilter(newFilter) {
      this.listFilter = newFilter
      this.$store.dispatch('setFilter', newFilter)
    },
    listClearAll() {
      alert('전체 삭제 기능 추가 예정')
    }
  }
}
</script>

<style lang="scss" scoped>

/* input area */
.input-box {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
  }
}

</style>