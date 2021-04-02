<template>
    
    <header>
        <img src="https://images.unsplash.com/photo-1556875701-2258f919c7bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="">
        <hgroup>
            <h1>Il Giornalino di Ugs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fuga repellendus non eligendi id asperiores voluptate possimus iste nesciunt animi! Iure numquam rem error voluptatibus porro accusamus minima velit assumenda!</p>
            <br>
            <a href="#">Partecipa ora!</a>
        </hgroup>
    </header>
    
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style lang="sass" scoped>

header
    width: 100%
    height: 70vh
    position: relative
    img
        filter: brightness(30%)
        width: 100%
        height: 70vh
    hgroup
        position: absolute
        top: 0%
        color: #fff
        padding: 5.5rem
        *
            padding: 1rem
        p
            width: 60%
        a
            background: linear-gradient(to top left, #BF092D, #8D0923)
            color: #fff
            padding: .7rem
            border-radius: 5px
            margin: 1rem
            font-size: 18px

// Responsive
@media screen and ( max-width: 960px )
    header
        height: 80vh
        img
            height: 80vh
        hgroup
            p
                width: 90%

@media screen and ( max-width: 480px )
    header
        height: 80vh
        img
            height: 80vh
        hgroup
            padding: 1rem
            top: 5%
            letter-spacing: 1.5px
            *
                padding: 0.5rem
            p
                width: 90%
            a
                margin: 0.5rem
            h1
                font-size: 40px
            


            
    
</style>