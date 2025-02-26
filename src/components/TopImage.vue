// lang="pug"表示使用pug語法
<template lang="pug">
#top
    // @ =>src資料夾
    img(src="@/assets/logo.png")
</template>

// scoped表示只套用在這個元件
<style scoped lang="sass">
#top
    width: 1000px
    height: 65px
    img
        width: 994px
        height: 60px
</style>
