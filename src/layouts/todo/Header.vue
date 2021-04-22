<template>
  <header>
    <h1>Kyoungsik's Childern</h1>
    <div class="today">
      <span class="year">{{ year }}</span>
      <span class="month-day">
        {{ month }}.{{ day }}
        <span class="date">{{ date }}</span>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 오늘 날짜를 moment를 이용해서 가져와 월/일 (요일) 포멧으로 변환
      year: this.$moment().format('YYYY'),
      month: this.$moment().format('MM'),
      day: this.$moment().format('DD'),
      date: this.$moment().format('ddd'),
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 1rem;
  color: #fff;
  h1 {
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px gray;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  .today {
    margin-top:3rem;
    line-height:1.3;
    .year{
      display:block;
      font-size:0.8rem;
      opacity:0.6;
    }
    .month-day{
      font-size:1.8rem;
      .date{
        font-size:0.8rem;
      }
    }
  }
}
</style>