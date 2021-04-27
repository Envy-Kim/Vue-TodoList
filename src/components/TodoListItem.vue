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
    <button class="destroy" @click="modalActive = true"></button>

    <!-- modal -->
    <todo-modal
      v-show="modalActive"
      @close="modalActive = false">
      <p>정말로 삭제하시겠어요?</p>
      <button 
        @click="removeTodo(item)"
      >OK</button>
    </todo-modal>
  </div>
</template>

<script>
import TodoCheckbox from "@/components/TodoCheckbox"
import TodoModal from '@/components/TodoModal'

export default {
  name: "TodoListItem",
  components: {TodoCheckbox, TodoModal},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalActive: false,
    }
  },
  methods: {
    removeTodo(item) {
      this.$store.dispatch('Todo/removeTodo', item)      
      this.modalActive = false
    },
    toggleCompleted(item) {
      this.$store.dispatch('Todo/toggleTodo', item)
    },
  }
}
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  padding: 0.5rem 0;
  border-bottom: 1px solid #fff;

  &:last-child {
    border-bottom: none;
  }

  .save-time {
    display: inline-block;
    margin-top: 0.3rem;
    font-size: 0.6rem;
  }

  .destroy {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 0;
    transform: translateY(-50%) rotate(45deg);

    &:after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: linear-gradient(#ee5753, #ee5753), linear-gradient(#ee5753, #ee5753);
      background-position: center;
      background-size: 50% 2px, 2px 50%;
      background-repeat: no-repeat;
    }
  }
}

// modal 
.modal-content {
  p {
    padding: 15px 0 30px;
    font-size: 16px;
    text-align: center;
  }
  button {
    display: block;
    margin: 0 auto;
    width: 75px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    background-color: #ee5753;
    border-radius: 10px;
  }  
}
</style>