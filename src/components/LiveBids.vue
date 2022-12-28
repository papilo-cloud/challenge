<template>
  <div class="auction">
    <div class="refs" v-for="slide in auction" :key="slide.id">
      <div class="pic">
        <span>X</span>
        <img :src="slide.url" alt="">
      </div>
    </div>
  </div>  
</template> 

<script>  
import imgs from '../jsons/auction.json'

export default {
 
  data(){
    return{
      slide: imgs,
    }
  }, mounted() {
      console.log(this.$route.params.name,);    
      console.log(this.slide.products.filter(x => x.id == this.$route.params.name));    
  },
  computed: {
    auction() {
      return this.slide.products.filter(x => x.id == this.$route.params.name)
    }
  }
}

</script>

<style scoped> 
  .auction{
    position: relative;
    width: 100%;
    margin-top: 4.99em;
  }
  .refs{
    position: relative;
    display: grid;
  }
  .refs .pic{
    position: relative;
    width: 100%;
    /* border: 0vh; */
    height: 40vh;
    padding: 0;
  }
  .refs .pic img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    .refs{
      grid-template-columns: 1fr 1fr;
    }
    .refs .pic{
    height: 70vh;
    }
  }
  @media screen and (min-width: 1000px) {

  }
</style> 