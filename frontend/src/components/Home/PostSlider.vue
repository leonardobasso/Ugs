<template>
  <swiper
    :slides-per-view="4"
    :space-between="20"
    :options="swiperOptions"

    >
    <swiper-slide v-for="posts in APIData" :key="posts.slug">
      <img class="card-img-top" v-bind:src=posts.image alt="Card image cap">
      <hgroup class="text">
        <router-link to="/single"> <h3>{{posts.title}}</h3> </router-link>
        <p>{{posts.desc.substring(0,80)+".." }}</p>
     </hgroup>
    </swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
  import { Swiper, SwiperSlide,  } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/navigation/navigation.scss';
  import { getAPI } from '../../api'
  // Swiper Plugins
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  export default {
    data () {
      return { // Retourn the API Dates
        APIData: [],
        swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 2,       
         spaceBetween: 50     
      },   
  
      771: {       
         slidesPerView: 4,       
         spaceBetween: 30     
      } 
   }   
        }
      }
    },

    components: {
      Swiper,
      SwiperSlide,
    },
    
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  // Connect to API
   created () {
      getAPI.get(`blog/api/list/last`)
        .then(response => {
          // console.log('Post API has recieved data')
          this.APIData = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
  };
</script>

<style lang="sass" scoped>

.swiper-container
    background: linear-gradient(to top left, #BF092D, #8D0923)
    height: 80vh
    padding: 3rem
    .read-more
        padding: 20px
        color: #fff
        float: right
    .swiper-wrapper
        .swiper-slide
            background-color: #fff
            border-radius: 5px
            .text
                padding: 1rem
                h3
                    background: linear-gradient(to top left, #BF092D, #8D0923)
                    -webkit-background-clip: text
                    -webkit-text-fill-color: transparent
            img
                margin: auto
                display: block
                width: 100%
                height: 45% 
                border-radius: 5px 5px 0px 0px
</style>