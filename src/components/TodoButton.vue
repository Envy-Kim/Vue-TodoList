<template>
  <button>
    버튼
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TodoButton",
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
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s ease-out;
  img {
    transition: all 0.3s ease-out;
  }
  &:hover {
    img {
      transform: translateX(3px);
    }    
  }
}
</style>