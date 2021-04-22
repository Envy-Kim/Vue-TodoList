<template>
  <footer>
    <p>Made by 김경식, 김유빈, 김효영, 이초이</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  background:rgba(255, 255, 255, 0.5);
  padding:1rem;
  p{
    font-size:0.8rem;
    text-align:center;
    color:#fff;
  }
}
</style>