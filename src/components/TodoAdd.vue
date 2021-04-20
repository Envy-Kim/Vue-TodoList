<template>
  <div class="todo-add">
    <TodoInput
      v-model="text"
      type="text"
      placeholder="Please enter text here"/>
    <todo-button
      @click.native="listAdd">
      <img src="@/assets/images/btn_go.png" alt="">
    </todo-button>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'

export default {
  name: "TodoAdd",
  components: { TodoInput, TodoButton },
  props: {

  },
  data() {
    return {
      text: null
    }
  },
  methods: {
    listAdd: function () {
      if( this.text === null ) {
        alert('텍스트를 입력해주세요.')
      } else {
        console.log('text ::', this.text);
        let todo = {
          title: this.text,
          completed: false,
          // moment 시간 가공해주기
          created_at: this.$moment()
        }
        this.$store.dispatch('addTodo', todo);
        this.text = '';
      }
    }
  },
  
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