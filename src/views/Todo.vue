<template>
  <base-layout>
    <!-- 상단 정보 Start -->
    <div class="top">
      <p class="time-text">{{ message }}</p>
      <p class="tasks-count" v-if="todoList.length>0">
        <span><em>{{ todoListCompleted }}</em>/{{ todoListAll }}</span> 완료!
      </p>
      <p class="tasks-count" v-else>LET'S GO TODO :)</p>
      <TodoAdd />
    </div>
    <!-- 상단 정보 End -->

    <!-- list에 대한 컨트롤 부분 (s) : 추후 컴포넌트로 뺄지 고민 중 -->
    <div class="btn-box">
      <TodoSelect />
      <div class="filter-box">
        <button @click="setFilter('all')" :class="{active: listFilter === 'all'}">All</button>
        <button @click="setFilter('active')" :class="{active: listFilter === 'active'}">Active</button>
        <button @click="setFilter('completed')" :class="{active: listFilter === 'completed'}">Completed</button>
      </div>
      <div class="btn-del">
        <button @click="listClearAll">Clear All</button>
      </div>
    </div>
    <!-- list에 대한 컨트롤 부분 (e) -->

    <TodoList :list="todoList"/>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/todo/Index'
import TodoAdd from '@/components/TodoAdd'
import TodoSelect from '@/components/TodoSelect'
import TodoList from '@/components/TodoList'

export default {
  name: "Todo",
  components: {
    BaseLayout, TodoAdd, TodoSelect, TodoList
  },
  data() {
    return {
      am: 'Good morning!',
      pm: 'Good afternoon!',
      listFilter: this.$store.state.Todo.listFilter,
    }
  },
  computed: {
    todoList() {
      return this.$store.getters["Todo/getTodoList"]
    },
    todoListAll() {
      return this.$store.getters["Todo/getCountAllList"]
    },
    todoListCompleted() {
      return this.$store.getters["Todo/getCountCompletedList"]
    },
    message() {
      const now = this.$moment().format('A');
      if (now === '오전') {
        return this.am
      } else {
        return this.pm
      }
    }
  },
  methods: {
    setFilter(newFilter) {
      this.listFilter = newFilter
      this.$store.dispatch('Todo/setFilter', newFilter)
    },
    listClearAll() {
      this.$store.dispatch('Todo/clearAll')
    },
  },
  mounted() {
    // console.log('Todo modal 상태', this.$store.state.Todo.modal);
  }
}
</script>

<style lang="scss" scoped>
.top {
  padding: 0 1rem;
  color: #fff;

  .time-text {
    text-align:right;
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
.btn-box{
  padding:0 1rem;
  .filter-box{
    button{
      padding:0.5rem;
      margin-right:0.5rem;
      color:#fff;
      border-radius:10px;
      text-transform:uppercase;
      &.active{
        background-color: rgba(255,255,255,.5);
        box-shadow: 0 10px 10px rgba(0,0,0,.1);
      }
      &:last-child{
        margin-right:0;
      }
    }
  }
  .btn-del{
    text-align:right;
    button{
      padding:0.5rem;
      font-size:0.8rem;
      color:rgba(238,87,83,.8);
      text-decoration:underline;
      text-transform:uppercase;
    }
  }
}

</style>