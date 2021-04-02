<template>
    <main>
        <section v-for="posts in APIData" :key="posts.slug">
            <header>
                <img :src="posts.image" alt="">
            </header>
            <article class="text">
                <h3>{{ posts.title }}</h3> 
                <small>{{ posts.category}}</small>
                <p>{{posts.desc.substring(0,80)+".." }}</p>
                <small>{{posts.slug}}</small>
                <footer>
                    <router-link :to="{ name: 'AdminEditArticle', params: {Postslug: posts.slug } }" class="edit"> Edit </router-link>
                    <router-link to="#" class="remove">Delete</router-link>
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
            APIData: [],
        }
    },
    name: 'List',
    // Connect to API
   created () {
      getAPI.get(`blog/api/list`)
        .then(response => {
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
    margin-top: 1rem
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 2.5rem
    section
        background-color: #c4c4c4c4
        border-radius: 5px
        header
            position: relative
            small
                top: 1rem
                left: 1rem
            img
                width: 100%
                height: 20vh
                border-radius: 5px 5px 0 0
        article
            display: flex
            flex-direction: column
            height: 30vh
            padding: 1rem
            p
                flex: 1
            h3
                letter-spacing: 1.5px
            footer
                display: flex
                justify-content: space-between
                *
                    border-radius: 25px
                    padding: .3rem
                .edit
                    color: #000ACC
                    border: 1px solid #000ACC
                .remove
                    color: #AF1C1C
                    border: 1px solid #AF1C1C
                            
// Responsive
@media screen and ( max-width: 960px )
    main
        grid-template-columns: repeat(2, 1fr)
        margin: 2rem
@media screen and ( max-width: 480px )
    main
        grid-template-columns: repeat(1, 1fr)

</style>