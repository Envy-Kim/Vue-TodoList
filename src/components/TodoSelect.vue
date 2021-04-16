<template>
  <div>
    <select>
      <option>선택</option>
    </select>
  </div>
</template>

<script>
export default {
name: "TodoSelect"
}
</script>

<style lang="scss" scoped>
select {
     width:100px;
     padding:5px;
     border:1px solid #ddd;
     background: #fff url('~@/assets/images/icon_arrow.svg') calc(100% - 5px) 5px no-repeat;
     background-size:15px 15px;
     border-radius:5px;
     font-size:14px;
}
</style>