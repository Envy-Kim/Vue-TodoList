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
        v-show="modalActive === true"
        :width="(($device.windows) ? 15 : 60)"
        :unit="'%'"
        @close="modalActive = false">
      <p>내용을 입력해주세요.</p>
      <button @click="modalActive = false">확인</button>
    </todo-modal>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoButton from '@/components/TodoButton'
import TodoModal from '@/components/TodoModal'

export default {
  name: "TodoAdd",
  components: {TodoInput, TodoButton, TodoModal},
  data() {
    return {
      text: '',
      modalActive: {
        type: Boolean,
        default: false,
      },
      isClear: {
        type: Boolean,
        default: false,
      },
    }
  },
  methods: {
    listAdd: function () {
      if(this.text.trim() === '') {
        this.text = ''
        this.modalActive = true
      } else {
        let todo = {
          title: this.text,
          completed: false,
          created_at: this.$moment()
        }
        this.$store.dispatch('Todo/addTodo', todo)
        this.text = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
/* input area */
.todo-add {
  position: relative;

  .button {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
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