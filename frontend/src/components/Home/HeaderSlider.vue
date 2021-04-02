<template>
  <swiper
    :slides-per-view="1"
    :space-between="5"
    :loop = "true"
    navigation
    :pagination="{ clickable: true }"
    :autoplay = "{delay: 10000, disableOnInteraction: false,}"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="image in Images">
         <img v-bind:src=image> 
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

  // Swiper Plugins
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  export default {

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

    data() {
        return {
            Images: ["https://source.unsplash.com/1600x900/?politic", "https://source.unsplash.com/1600x900/?nature"]
        }
    },
  };
</script>

<style lang="sass" scoped>

.swiper-wrapper
    .swiper-slide
        h1, p
            display: inline
            position: absolute
            padding: 8rem
            margin: -2rem
            color: #fff
            z-index: 100
        h1
            font-style: italic
        p
            width: 80%
            margin-top: 50px
            letter-spacing: 1.1px
        img
            height: 80vh
            width: 100%
            flex-shrink: 0
            filter: brightness(30%)
</style>