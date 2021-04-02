<template>
    <main>
        <section v-for="posts in APIData" :key="posts.slug">
            <header>
                <img :src="posts.image" alt="">
                <small>{{ posts.author }}</small>
                <router-link to="/single"> <h3>{{posts.title}}</h3> </router-link>
            </header>
            <article class="text">
                <p>{{posts.desc.substring(0,80)+".." }}</p>
                <footer>
                    <hr>
                    <router-link to="#">Leggi di più</router-link>
                </footer>
            </article>
        </section>
    </main>
</template>
<script>
import { getAPI } from '../../api'
export default {
    data () {
        return{
            APIData: []
        }
    },
    name: 'List',
    // Connect to API
   created () {
      getAPI.get('blog/api/list',)
        .then(response => {
        //   console.log('Post API has recieved data')
          this.APIData = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
}
</script>
<style lang="sass" scoped>
main
    margin: 5.5rem
    margin-top: 3rem
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-auto-rows: auto
    grid-gap: 2.5rem
    section
        background-color: #fff
        border-radius: 5px
        header
            position: relative
            h3, small
                position: absolute
                color: #fff
            h3
                letter-spacing: 1.5px
                bottom: 1rem
                left: 1rem
            small
                top: 1rem
                left: 1rem
            img
                width: 100%
                height: 28vh
                filter: brightness(30%) 
                border-radius: 5px 5px 0 0
        article
            display: flex
            flex-direction: column
            height: 30vh
            padding: 1rem
            p
                flex: 1
            footer
                flex: none
                a
                    background: linear-gradient(to top left, #BF092D, #8D0923)
                    -webkit-background-clip: text
                    -webkit-text-fill-color: transparent
                hr
                    opacity: 20%
// Responsive
@media screen and ( max-width: 960px )
    main
        grid-template-columns: repeat(2, 1fr)
        margin: 2rem
@media screen and ( max-width: 480px )
    main
        grid-template-columns: repeat(1, 1fr)

</style>