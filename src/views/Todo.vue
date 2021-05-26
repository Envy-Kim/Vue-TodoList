<template>
  <base-layout>
    <!-- 상단 정보 Start -->
    <div class="top">
      <p class="time-text">{{ message }}</p>
      <p class="tasks-count" v-if="todoList.length>0">
        <span><em>{{ todoListCompleted }}</em>/{{ todoListAll }}</span> 완료!
      </p>
      <p class="tasks-count" v-else>LET'S GO TODO :)</p>
      <TodoAdd/>
    </div>
    <!-- 상단 정보 End -->

    <!-- list에 대한 컨트롤 부분 (s) -->
    <div class="btn-box">
      <TodoSelect :options="options"
                  v-model="orderBy"
      />

      <div class="filter-box">
        <button @click="setFilter('all')" :class="{active: listFilter === 'all'}">All</button>
        <button @click="setFilter('active')" :class="{active: listFilter === 'active'}">Active</button>
        <button @click="setFilter('completed')" :class="{active: listFilter === 'completed'}">Completed</button>
      </div>
      <div class="btn-del">
        <button @click="modalActive = true">Clear All</button>
      </div>
    </div>
    <!-- list에 대한 컨트롤 부분 (e) -->

    <TodoList :list="todoList"/>

    <!-- modal -->
    <todo-modal
        v-show="modalActive"
        @close="modalActive = false">
      <p>전부 삭제하시겠어요?</p>
      <div class="btn-wrap">
        <div class="btn-group">
          <button @click="listClearAll()">Delete</button>
          <button @click="modalActive = false">Cancel</button>
        </div>
      </div>
    </todo-modal>

    <!-- Spinner -->
    <Spinner/>

  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoAdd from '@/components/TodoAdd'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'
import TodoModal from '@/components/TodoModal'
import Spinner from '@/components/Spinner'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoAdd, TodoSelect, TodoList, TodoModal, Spinner
  },
  data() {
    return {
      am: 'Good morning!',
      pm: 'Good afternoon!',
      modalActive: false,
      options: [
        {
          label: "최신순",
          value: "desc",
        },
        {
          label: "오래된순",
          value: "asc",
        }
      ],
    }
  },
  computed: {
    listFilter() {
      return this.$store.state.Todo.listFilter
    },
    orderBy: {
      get() {
        return this.$store.state.Todo.orderBy
      },
      set(newValue) {
        this.$store.dispatch('Todo/setOrderBy', newValue)
      }
    },
    todoList() {
      /**
       * module에 namespace를 주기 전 getters 사용
       * this.$store.getters.getTodoList
       *
       * namespace 추가 후
       * this.$store.getters["Todo/getTodoList"]
       */
      return this.$store.getters["Todo/getTodoList"]
    },
    todoListAll() {
      return this.$store.getters["Todo/getCountAllList"]
    },
    todoListCompleted() {
      return this.$store.getters["Todo/getCountCompletedList"]
    },
    message() {
      const now = this.$moment().format('A')
      if (now === '오전') {
        return this.am
      } else {
        return this.pm
      }
    },
  },
  methods: {
    setFilter(newFilter) {
      this.$store.dispatch('Todo/setFilter', newFilter)
    },
    listClearAll() {
      this.$store.dispatch('Todo/clearAll')
      this.modalActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
.top {
  padding: 0 1rem;
  color: #fff;

  .time-text {
    text-align: right;
  }

  .tasks-count {
    margin: 3rem 0 2rem;
    font-size: 1rem;
    line-height: 1.5;

    span {
      color: rgba(255, 255, 255, 0.5);
      font-size: 2.5rem;
      letter-spacing: 0.3rem;

      em {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}

.btn-box {
  padding: 0 1rem;

  .filter-box {
    button {
      padding: 0.5rem;
      margin-right: 0.5rem;
      color: #fff;
      border-radius: 10px;
      text-transform: uppercase;

      &.active {
        background-color: rgba(255, 255, 255, .5);
        box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .btn-del {
    text-align: right;

    button {
      padding: 0.5rem;
      font-size: 0.8rem;
      color: rgba(238, 87, 83, .8);
      text-decoration: underline;
      text-transform: uppercase;
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

  .btn-wrap {
    display: flex;
    justify-content: center;

    .btn-group {
      display: flex;

      button {
        margin: 0 8px;
      }
    }
  }
}
</style>