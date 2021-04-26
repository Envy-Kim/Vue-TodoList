<template>
  <input 
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :class="{'active' : active}"
    @focus="active = true"
    @blur="active = false"
    @input="change">
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      active: false
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  methods: {
    change: function($event) {
      this.$emit('input', $event.target.value)
    },
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
  transition: all .3s;
  &::placeholder {
    font-size: 14px;
    color: #fff;
  }
  &.active {
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
  }
}
</style>