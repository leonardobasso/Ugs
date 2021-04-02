<template>
    <nav>
        <div class="menu"><span></span></div>
        <ul>
            <li><router-link to="/admin"><p><ion-icon name="home-sharp"></ion-icon> Admin</p></router-link></li>
            <li><router-link to="/admin/article"><p><ion-icon name="create-sharp"></ion-icon> Articoli</p></router-link></li>
            <li><a href="" class="link"><p><ion-icon name="list-sharp"></ion-icon> Categorie</p></a></li>
            <li><a href="" class="link"><p><ion-icon name="people-sharp"></ion-icon> Utenti</p></a></li>
            <li><a href="" class="link"><p>lorem</p></a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'SideBar',
      components: {
  },
}
</script>
<style lang="sass" scoped>

nav
    width: 20vw
    height: auto
    min-height: 100vh
    background-color: #171717
    padding: 2rem
    position: relative
    ul
        display: flex
        flex-direction: column
        height: 100%
        li
            a
                p
                    justify-content: center
                    padding-top: 1rem
                    padding-bottom: 1rem
                    color: #fff
                    &:hover
                        transform: translateX(1rem)
                        transition: .3s ease-out
    .menu
        margin-bottom: 2rem
        cursor: pointer
        span
            right: 15%
            background-color: #fff
            width: 22px
            height: 2px
            border-radius: 25px
            transition: .5s 
            position: absolute
            &::before, &::after
                background-color: #fff
                content: ''
                width: 20px
                height: 2px
                position: absolute
                border-radius: 25px
                transition: .5s 
            &::before
                transform: translateY(-8px)
            &::after
                transform: translateY(8px)


</style>