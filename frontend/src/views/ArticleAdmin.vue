<template>
  <main class="main">
    <SideBar></SideBar>
    <section class="section">
        <hgroup>
            <router-link :to="{ name: 'NewArticle' }" class="btn-addpost"> Add Post</router-link>
            <a href="#" class="User-Name"><ion-icon name="person-circle-sharp"></ion-icon> User</a>
        </hgroup>
        <ArticleList></ArticleList>
    </section>
  </main>
</template>

<script>
// Imports
import SideBar from '../components/Admin/Sidebar.vue'
import ArticleList from '../components/Admin/ArticleList.vue'
// Datas
export default {
  name: 'Admin', // Nome view
  // Componenti 
  components: { 
      'SideBar': SideBar,
      'ArticleList': ArticleList
  },
}
</script>

<style lang="sass" scoped>
.main
    background-color: #fff
    display: flex
    .section
        width: 80vw
        hgroup
            padding: 2rem 
            display: flex
            justify-content: space-between
            .usericon
    .btn-addpost
        background-color: #000ACC
        color: #fff
        padding: .5rem
        border-radius: 5px
    .User-Name
        color: #171717
</style>
