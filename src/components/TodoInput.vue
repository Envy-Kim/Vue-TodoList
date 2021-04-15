<template>
  <div>
    <input 
      :type="type"
      :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px 18px;
  font-size: 15px;
  border-radius: 50px;
  background-color: rgba(255,255,255,.5);
  box-shadow: 0 10px 10px rgba(0,0,0,.2);
  &::placeholder {
    font-size: 14px;
    color: #fff;
  }
}
</style>