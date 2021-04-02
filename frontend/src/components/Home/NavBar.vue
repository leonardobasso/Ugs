<template>
    <nav class="navbar">
        <p class="logo">Ugs</p>
        <ul>
            <li class="link"><router-link to="/">Home</router-link></li>
            <li class="link"><router-link to="/articoli">Article</router-link></li>
            <li class="link"><a href="">link</a></li>
            <li class="link"><a href="">link</a></li>
        </ul>
    </nav>

</template>
<script>
export default {
  name: 'NavBar',
}
</script>
<style lang="sass">
.navbar
    display: flex
    justify-content: space-around
    padding: 1.2rem
    background: linear-gradient(to top left, #BF092D, #8D0923)
    width: 100%
    .logo
        color: #fff
    ul
        li
            display: inline-block
            a
                text-decoration: none
                padding: 20px
                color: #fff
</style>