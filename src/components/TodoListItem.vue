<template>
  <div class="todo">
    <div class="view" :class="{completed: item.completed}">
      <TodoCheckbox
          :label="item.title"
          v-model="item.completed"
          @input="toggleCompleted(item)"
      />
      <span>{{ $moment(item.created_at).format('MM/DD HH:mm:ss(ddd)') }}</span>
    </div>
    <button class="destroy" @click="removeTodo(item)"></button>
  </div>
</template>

<script>
import TodoCheckbox from "@/components/TodoCheckbox"

export default {
  name: "TodoListItem",
  components: {TodoCheckbox},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTodo(item) {
      this.$store.dispatch('clear', item)
    },
    toggleCompleted(item) {
      this.$store.dispatch('toggleTodo', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  font-size: 24px;
  border: 1px solid #ededed;
  background-color: #ffffff;

  .view {
    color: #7d7d7d;
    font-size: 16px;
  }

  .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #de6f6f;

    &::after {
      content: 'x'
    }

    &:hover {
      color: #f31919;
    }
  }

  &:hover {
    .destroy {
      display: block;
    }
  }
}
</style>