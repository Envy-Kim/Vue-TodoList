<template>
  <base-layout>

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

    <TodoSelect/>
    <todo-list>
      <todo-list-item>
        내용
      </todo-list-item>
    </todo-list>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'
import TodoListItem from '@/components/TodoListItem'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoInput, TodoButton, TodoSelect, TodoList, TodoListItem
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