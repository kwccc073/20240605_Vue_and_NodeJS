<template lang="pug">
#menu
    h1 社團介紹
    ul
        li(v-for="club in clubs" :key="club") {{ club }}
</template>

//
setup表示裡面都是setup的東西，可以省略很多東西，參考筆記：https://hackmd.io/wc1oexPaTD6QmgJJpNBloQ?both
<script setup>
const clubs = ["吉他社", "熱舞社", "棒球社", "羽球社", "足球社", "童軍社"];
</script>

// scoped 表示只會套用到這個元件
<style scoped lang="sass">
#menu
    width: 100%
    height: calc( 100% - 25px )
    text-align: center

    h1
        font-family: 標楷體
        display: inline-block
        border-bottom: 1px solid black
        color: #f0f
        font-size: 24px
    ul
        // 去掉原點
        list-style: none
        padding: 0
    li
        width: 100%
        height: 40px
        line-height: 40px
        font-size: 16px
        text-align: center
        //  @ 作為路徑前綴是為了簡化導入路徑、保持一致性和提高可維護性
        background: url(@/assets/menu1.png)
        background-repeat: no-repeat
        background-position: center
        &:hover
            background-image: url(@/assets/menu2.png)
</style>
