<template lang="pug">
TopImage
#left
  LeftMenu
#right
  DigitNumber(data="0")
  DigitNumber(data="1")
  DigitNumber(data="2")
  DigitNumber(data="3")
  DigitNumber(data="4")
  DigitNumber(data="5")
  DigitNumber(data="6")
  DigitNumber(data="7")
  DigitNumber(data="8")
  DigitNumber(data="9")
</template>

<!-- 加上setup可以省略很多寫法，且不用寫return -->
<script setup>
// 引用元件
import TopImage from './components/TopImage.vue'
import LeftMenu from './components/LeftMenu.vue'
import DigitNumber from './components/DigitNumber.vue'

</script>

<style scoped lang="sass">
#left
  width: 215px
  height: calc( 768px - 20px - 65px )
  float: left

#right
  width: 770px
  height: calc( 768px - 20px - 65px )
  float: right
</style>
