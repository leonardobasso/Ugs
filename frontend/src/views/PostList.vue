<template>
    <NavBar></NavBar>
    <Header> </Header>
    <List></List>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
import List from '../components/PostList/List.vue'
import Header from '../components/PostList/Header.vue'
export default {
        components: {
        'NavBar': NavBar,
        'List': List,
        'Header': Header,
        },
    }   
</script>

<style lang="sass" >
</style>