<template>

  <NavBar></NavBar>
  <HeaderSlider></HeaderSlider>
  <HomeInfo></HomeInfo>
  <PostSlider></PostSlider>

</template>

<script>
// Imports
import NavBar from '../components/Home/NavBar.vue'
import HeaderSlider from '../components/Home/HeaderSlider.vue'
import HomeInfo from '../components/Home/Info.vue'
import PostSlider from '../components/Home/PostSlider.vue'

// Datas
export default {
  name: 'Home', // Nome view
  // Componenti 
  components: { 
    "NavBar": NavBar,
    "HeaderSlider": HeaderSlider,
    "HomeInfo": HomeInfo,
    "PostSlider": PostSlider,
  },
}
</script>

<style>
</style>
