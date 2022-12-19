<template>
  <section class="slide">
    <p>Here's an overiew of products actively on auction, explore! </p>
  <Splide :options="options" class="splide">
    <SplideSlide v-for="(img, i) in slider.products " :key="i">
      <img :src="img.url" :alt="img.id">
    </SplideSlide>
  </Splide>
  </section>
</template>

<script>
import imgs from '../jsons/auction.json'
import '@splidejs/vue-splide/css';
import { SplideSlide } from '@splidejs/vue-splide';
export default {
    data() {
        return {
            slider: imgs,
            options: {
              rewind: true,
              gap : '1rem',
              // height : '18rem',
              start: 1,
              // autoplay:true ,
              pagination: false ,
              drag: true,
              type: 'loop',
              perPage: 2,
              interval: 2000,
              // pauseOnHover: true,
              // isNavigation: true,
              breakpoints: {
                768: {
                  perPage: 1
                }
              },

            }
        };
    },
    mounted() {
        console.log(this.slider.bids);
    },
    components: { SplideSlide }
}
</script>
 
<style scoped>

  img{
    height: 200px;
    width: 100%;
    z-index: -1;
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
  @media screen and (min-width: 768px) {
    .slide{
      padding: 0 3em;
    }
     img{
      height: 249px;
    }
  }
</style>
<!-- 
<template>
  <div class="wrapper">
    <h2 id="basic-example-heading">Basic</h2>

    <Splide
      aria-labelledby="basic-example-heading"
      v-if="enabled"
      :options="options"
    >
      <SplideSlide v-for="slide in slider.products" :key="slide.id">
        <img :src="slide.url" :alt="slide.id">
      </SplideSlide>
    </Splide>

    <button @click="enabled = ! enabled">
      {{ enabled ? 'Hide Slider' : 'Show Slider' }}
    </button>
  </div>
</template>

<script>
import '@splidejs/vue-splide/css';
// import { Splide as Core } from '@splidejs/splide';
// import { Splide, SplideSlide } from '@splidejs/vue-splide'
// import { defineComponent, ref } from 'vue';
// import { generateSlides } from '../utils';
import imgs from '../jsons/auction.json'

export default{
  data() {
    return  {
      slider: imgs,
      enabled: true,
      options: {
      rewind : true,
      perPage: 2,
      gap    : '1rem',
      height : '18rem',
      breakpoints: {
        1000: {
          perPage: 1,
        },
      },
    }
    }
  },
  // setup() {
  //   const slides = generateSlides();
  //   const enabled         = ref( true );
  //   const onSplideMounted = ( splide ) => console.log( splide.length );
  //   const onSplideMove    = ( splide, index ) => console.log( 'move to', index );
  //   return {
  //     slides,
  //     options,
  //     onSplideMounted,
  //     onSplideMove,
  //     enabled,
  //   }
  // },
} ;
</script> -->