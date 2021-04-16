<template>
  <div id="wrap">
    <base-header></base-header>
    <div class="top">
      <p class="time-text">Good morning! afternoon! evening! night!</p>
      <p class="tasks-count">
        <span><em>2</em>/4</span> 완료!
      </p>
    </div>
    <slot></slot>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '@/layouts/todo/Header'
import BaseFooter from '@/layouts/todo/Footer'

export default {
  name: "Index",
  components: { BaseHeader, BaseFooter}
}
</script>

<style lang="scss" scoped>
#wrap{
  height:100vh;
  background: linear-gradient(-90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  .top{
    padding:0 1rem;
    color:#fff;
    .time-text{
      margin-top:3rem;
      font-size:0.8rem;
    }
    .tasks-count{
      margin:3rem 0 2rem;
      font-size:1rem;
      line-height:1.5;
      span{
        color:rgba(255,255,255,0.5);
        font-size:2.5rem;
        letter-spacing:0.3rem;
        em{
          color:rgba(255,255,255,1);
        }
      }
    }
  }
 
}
</style>