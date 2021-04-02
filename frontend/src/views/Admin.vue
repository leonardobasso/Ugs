<template>
  <main>
    <SideBar></SideBar>
    <h1>Admin</h1>
  </main>
</template>

<script>
// Imports
import SideBar from '../components/Admin/Sidebar.vue'
// Datas
export default {
  name: 'Admin', // Nome view
  // Componenti 
  components: { 
      'SideBar': SideBar
  },
}
</script>

<style lang="sass" scoped>
main
  display: flex
</style>

