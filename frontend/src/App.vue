<template>
<router-view></router-view>
</template>
<script>
</script>
<style lang="sass">
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap')

// Style
*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: Work Sans
    list-style: none
    text-decoration: none

html, body
    width: 100%
    height: 100%
    background-color: #eee

h1
    font-size: 43px
    letter-spacing: 1.5px

img
    object-fit: cover
    background-repeat: no-repeat

.swiper-slide
    height: 65vh

.swiper-button-prev, .swiper-button-next
    color: #fff !important
.swiper-pagination-bullet-active
    background: #fff !important
</style>
