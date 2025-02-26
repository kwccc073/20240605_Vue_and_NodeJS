<template>
  <!-- 因為頁面上會放好幾個svg，所以不能用id，改用class -->
  <svg
    version="1.1"
    class="number"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="318.1px"
    height="520.604px"
    viewBox="0 0 318.1 520.604"
    enable-background="new 0 0 318.1 520.604"
    xml:space="preserve"
  >
  <!-- :class="{ class名稱: 判斷的條件) }" -->
    <rect
      class="number-A"
      :class="{ active: '02356789'.includes(data) }"
      x="0.996"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="316.108"
      height="15.437"
    />
    <rect
      class="number-B"
      :class="{ active: '045689'.includes(data) }"
      x="0"
      y="26.497"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="20.134"
      height="220.805"
    />
    <rect
      class="number-C"
      :class="{ active: '01234789'.includes(data) }"
      x="295.974"
      y="26.497"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="20.133"
      height="220.805"
    />
    <rect
      class="number-D"
      :class="{ active: '2345689'.includes(data) }"
      y="255.047"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="316.107"
      height="15.437"
    />
    <rect
      class="number-E"
      :class="{ active: '0268'.includes(data) }"
      x="0"
      y="278.504"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="20.134"
      height="220.805"
    />
    <rect
      class="number-F"
      :class="{ active: '013456789'.includes(data) }"
      x="297.967"
      y="278.503"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="20.133"
      height="220.806"
    />
    <rect
      class="number-G"
      :class="{ active: '0235689'.includes(data) }"
      x="0.996"
      y="505.168"
      fill="#E60012"
      stroke="#231815"
      stroke-miterlimit="10"
      width="316.108"
      height="15.437"
    />
  </svg>
</template>

<script setup>
// 因為用setup，所以用defineProps()（不用setup要用export default（要寫很多東西））
// 從外部接收叫data的資料（用來判斷哪幾條線要顯示）
defineProps(["data"]); // defineProps 只接受陣列或物件所以要用[]包起來，用{}的話可以定義該資料的格式等等東西
</script>

<style scoped lang="sass">
.number
    margin: 10px
rect
    // fill是SVG專用的CSS樣式
    fill: transparent
    // class有active的時候才會是紅色
    &.active
        fill: #E60012
</style>
