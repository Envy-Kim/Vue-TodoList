<template>
  <div class="todo">
    <div class="view" :class="{completed: item.completed}">
      <TodoCheckbox
          :label="item.title"
          v-model="item.completed"
          @input="toggleCompleted(item)"
      />
      <span class="save-time">{{ $moment(item.created_at).format('MM/DD HH:mm:ss(ddd)') }}</span>
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
      this.$store.dispatch('removeTodo', item)
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
  padding:0.5rem 0;
  border-bottom:1px solid #fff;
  &:last-child{
    border-bottom:none;
  }
  .save-time{
    display:inline-block;
    margin-top:0.3rem;
    font-size:0.6rem;
  }

  .destroy {
    position: absolute;
    top:50%;
    right:0;
    padding:0;
    transform:translateY(-50%) rotate(45deg);
    &:after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: linear-gradient(#ee5753, #ee5753), linear-gradient(#ee5753, #ee5753);
      background-position: center;
      background-size: 50% 2px,2px 50%;
      background-repeat: no-repeat;
    }
  }
}
</style>