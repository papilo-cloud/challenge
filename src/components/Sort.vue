<template>
  <div class="sort" v-if="$store.state.show2">
    <div class="bdy">
      <label for="i">
        <input type="radio" name="cat1" @change="prices" id="i">Highest price
        <span></span>
      </label>
      <label for="x">
        <input type="radio" name="cat1" @change="views" id="x">Most views
        <span></span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // picks: 'all',
    }
  },
  methods: {
     prices() {
        const len = this.$store.getters.getProducts
        len.sort(function (a, b) {
          return b.price.usd - a.price.usd;
        });
      },
      views() {
        const lens = this.$store.getters.getProducts
        lens.sort(function (a, b) {
          return b.views - a.views;
        });
        console.log(lens)
      }
  },
  mounted() {
    // const items = this.$store.getters.getProducts
    // items.sort(function (a, b) {
    //   return b.price.usd - a.price.usd;
    // });
  }
}
</script>
<style scoped>
  .sort{
    position: absolute;
    /* padding: 20px; */
    background: white;
    z-index: 1;
    right: 8px;
    top: 230px;
    border-radius: 10px;
    box-shadow: 3px 3px 20px #ccc;
  }
  .sort .bdy{
    padding: 20px;
    position: relative;
  }
  .bdy label{
    position: relative;
    display: block;
    margin-bottom: 1em;
    padding-left: 40px;
    cursor: pointer;
  }
  .bdy label:nth-child(2){
    margin-bottom: 0;
  }
  label input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  .bdy label span{
    width: 20px;
    height: 20px;
    border-radius: 10%;
    position: absolute;
    background: #ccc;
    left: 0;
    top: 0;
    /* border:1px solid #5362d3; */
  }
  
  .bdy label input:checked ~ span::after{
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    left: 7px;
    border-bottom:2px solid #2c3e50;
    border-right: 2px solid #2c3e50;
    transform: rotate(40deg);
  }
  @media screen and (min-width: 1000px) {
    .sort{
    right: 4.4em;
    }
  }
  
</style>