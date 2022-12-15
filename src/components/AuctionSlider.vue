<template>
  <div>
    <h1>Hello Woldee</h1>
    <div v-for="(img, i) in slider.products " :key="i">
      <img :src="img.url" :alt="img.id">
    </div>
  </div>
</template>

<script>
import imgs from '../jsons/auction.json'
export default {
  data() {
    return  {
      slider: imgs
    }
  },
  mounted() {
    console.log(this.slider.bids)
  }
}
</script>
 
<style>
</style>