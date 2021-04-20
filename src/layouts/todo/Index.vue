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
  components: { BaseHeader, BaseFooter}
}
</script>

<style lang="scss" scoped>
#wrap {
  height: 100vh;
  background: linear-gradient(-90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>