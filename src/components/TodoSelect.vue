<template>
  <div class="order-select">
    <select @input="change">
      <option
          v-for="(item, index) in options"
          :key="index"
          :value="item.value"
          :selected="(item.value === value)"
      >{{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TodoSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.order-select {
  text-align: right;
  padding: 10px 0;

  select {
    width: 100px;
    padding: 5px;
    border: 1px solid #ddd;
    background: #fff url("~@/assets/images/icon_arrow.svg") calc(100% - 5px) 5px no-repeat;
    background-size: 15px 15px;
    border-radius: 5px;
    font-size: 14px;
  }
}
</style>
