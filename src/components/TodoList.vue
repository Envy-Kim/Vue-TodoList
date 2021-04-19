<template>
  <div class="todo-list">
    <div v-if="list.length>0">
      <TodoListItem v-for="(item, key) in list"
                    :key="key"
                    :item="item" />
    </div>
    <div v-else>
      데이터가 없습니다.
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
name: "TodoList",
  components: { TodoListItem },
  props: {
    list: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-list {
  width: 100%;
}
</style>