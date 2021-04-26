<template>
  <div class="todo-add">
    <TodoInput
      v-model="text"
      type="text"
      placeholder="Please enter text here"
      @keyup.enter.native="listAdd"/>
    <todo-button
      @click.native="listAdd">
      <img src="@/assets/images/btn_go.png" alt="">
    </todo-button>

    <!-- modal -->
    <todo-modal
      v-show="modalOpen"
      @close="modalClose">
      내용을 입력해주세요.
    </todo-modal>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'
import TodoModal from '@/components/TodoModal'

export default {
  name: "TodoAdd",
  components: { TodoInput, TodoButton, TodoModal },
  props: {

  },
  data() {
    return {
      text: null,
      modalOpen: this.$store.state.Todo.modal
    }
  },
  methods: {
    listAdd: function () {
      if( this.text === null ) {
        this.$store.dispatch('Todo/modalOpen');
      } else {
        let todo = {
          title: this.text,
          completed: false,
          created_at: this.$moment()
        }
        this.$store.dispatch('Todo/addTodo', todo)
        this.text = null
      }
    },
    modalClose() {
      this.modalOpen = false
    }
  },  
  mounted() {
    console.log('todoadd 상태', this.$store.state.Todo.modal)
  }
}
</script>

<style lang="scss" scoped>
/* input area */
.todo-add {
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