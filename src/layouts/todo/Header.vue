<template>
  <header>
    <h1>Kyoungsik's Childern</h1>
    <span class="date">{{ today }}</span>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 오늘 날짜를 moment를 이용해서 가져와 월/일 (요일) 포멧으로 변환
      today: this.$moment().format('MM/DD (ddd)'),
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;

  h1 {
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px gray;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .date {
    font-size: 0.8rem;
  }
}
</style>