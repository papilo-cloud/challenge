<template>
  <section class="slide">
    <p>Here's an overiew of products actively on auction, explore! </p>
    <Splide :options="options" class="splide">
      <SplideSlide v-for="(img, i) in sliders.carousel" :key="i">
        <img :src="img.url" :alt="img.id">
      </SplideSlide>
    </Splide>
  </section>
</template>

<script>
import imgs from '../jsons/carousel.json'
import '@splidejs/vue-splide/css';

export default {
  data() {
    return {
      sliders: imgs,
      options: {
        rewind: true,
        gap : '1rem',
        // height : '18rem',
        autoplay:true ,
        pagination: true ,
        drag: true,
        type: 'loop',
        perPage: 3,
        interval: 2000,
        // pauseOnHover: true,
        // isNavigation: true,
        breakpoints: {
          1000: {
            perPage: 2
          }
        },

      }
    };
  },
  mounted() {
    // console.log(this.sliders)
  }
} 
</script>

<style scoped>
.slide{
  /* display: none; */
}
img{
    height: 230px;
    width: 100%;
    z-index: 1;
  }
  .splide{
    z-index: 10000;
  }
  .slide{
    margin-bottom: 3em;
  }
  .slide p{
    padding: 0 7px;
    margin-bottom: 2em;
    font-weight: 600;
  }
@media screen and (min-width: 608px) {
  .slide{
    display: unset;
  }
}
</style>