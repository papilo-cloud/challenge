<template>
  <section class="slide">
    <Splide :options="options" class="splide">
      <SplideSlide v-for="(img, i) in sliders" :key="i">
        <div class="pic">
          <div class="like">
            <span></span>
          </div>
          <div class="img">
          <!-- <router-link :to="{ name: 'ProductDetails', params: { name: img.name } }"> -->
            <img :src="img.url" :alt="img.id">
          <!-- </router-link> -->
          </div>
          <p><span>{{ img.name }}</span><span><img src="../assets/Ethereum.png" alt="ehe"> {{ img.price.eth }}</span></p>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script>
// import imgs from '../jsons/carousel.json'
import '@splidejs/vue-splide/css';

export default {
  data() {
    return {
      sliders: this.$store.getters.getProduct.products.slice(0,7),
      options: {
        // rewind: true,
        gap : '1rem',
        // height : '18rem',
        // autoplay:true ,
        // pagination: true ,
        drag: true,
        type: 'slide',
        perPage: 3,
        interval: 2000,
        // pauseOnHover: true,
        // isNavigation: true,
        breakpoints: {
          554: {
            perPage: 1
          },
          768: {
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
.pic{
  position: relative;
  height: 310px;
  width: 100%;
  border: 1px solid #ccc;
}
.pic .like{
  position: relative;
  width: 100%;
  padding: 0 20px;
  padding-top: 8px;
  display: flex;
  justify-content: flex-end;
}

/* Styling of the heart shape */
.like span{
  position: relative;
  width: 15px;
  height: 15px;
  background: #ccc;
  transform: rotate(45deg);
}
.like span::after , .like span::before{
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  background: #ccc; 
  border-radius: 50%;
}
.like span::after{
  top: -7px;
}

.like span::before{
  left: -7px;
}
.pic .img{
  position: relative;
  width: 100%;
  padding: 10px;
}
.img img{
    height: 230px;
    width: 100%;
    z-index: 1;
  }
  .pic p{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
  }
  .pic p span img{
    width: 22px;
    transform: rotate(47deg);
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