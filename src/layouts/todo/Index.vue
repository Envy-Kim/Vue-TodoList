<template>
  <div id="wrap">
    <base-header></base-header>
    <slot></slot>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '@/layouts/todo/Header'
import BaseFooter from '@/layouts/todo/Footer'

export default {
  name: "Index",
  components: {BaseHeader, BaseFooter}
}
</script>

<style lang="scss" scoped>
#wrap {
  position:relative;
  overflow-y:auto;
  height: 100vh;
  padding-bottom:3rem;
  background: linear-gradient(-45deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>