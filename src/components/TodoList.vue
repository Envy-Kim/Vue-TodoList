<template>
  <div class="todo-list">
    <div v-if="list.length > 0">
      <TodoListItem v-for="(item, key) in list" :key="key" :item="item" />
    </div>
    <div class="nodata" v-else>
      <p>데이터가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem"

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
  background: rgba(255, 255, 255, 0.5);
  margin: 1rem;
  padding: 0.5rem;

  .nodata {
    padding: 1rem 0;
    text-align: center;

    p {
      font-size: 0.8rem;
    }
  }
}
</style>
