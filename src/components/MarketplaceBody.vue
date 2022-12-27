<template>
  <div class="main-bdy">
      <div class="results">
        <button @click="() => {$store.state.show1 = !$store.state.show1}">filters <img src="../assets/icon-arrow-down.svg" alt=""></button>
        <p>Showing 1 - {{ myProducts.length }} of {{$store.getters.getProducts.length}}</p> 
        <button @click="() => {$store.state.show2 = !$store.state.show2}">sort by <img src="../assets/icon-arrow-down.svg" alt=""></button>
      </div>
    <div class="main">
      <div class="pic" v-for="product in myProducts" :key="product.id">
        <div class="img">
          <router-link :to="{ name: 'ProductDetails', params: { name: product.name } }">
            <img :src="product.url" :alt="product.id">
          </router-link>
        </div>
        <div class="msg">
          <p>{{ product.name }}</p>
          <p>${{ product.price.usd}}</p>
        </div>
      </div>
    </div>
    <div class="bun">
      <button @click="seeMore(8)">See more</button>
    </div>
  </div>
</template>
<script>
import NewsLetter from './NewsLetter.vue';
export default {
  components: { NewsLetter }, 
 
  data() {
    return {
      more: 3,
      // products: this.$store.getters.getProducts.products.slice(0,this.more),
    };
  },
  computed: {
    myProducts() {
      return this.$store.getters.getProducts.slice(0,this.more)
    }
  },
  methods: {
      seeMore(pos) {
        const len = this.$store.getters.getProducts.length
        const sub = len - this.myProducts.length 
        if(sub < 4){
          return  this.more += sub;
        }
        if(this.more == len){
          const dell = document.getElementsByClassName('bun')[0].classList.add('del')
        }
        return  this.more += 4;
      },
  },
  mounted() {
    const len = this.$store.getters.getProducts
   
    // len.sort(function (a, b) {
		// 	let A = a.name
		// 	let B = b.name;
		// 	if (A < B) {
		// 		return -1;
		// 	}
		// 	if (A > B) {
		// 		return 1;
		// 	}
		// 	return 0;
		// });
		// console.log(len)
		// console.log(items)
  }
 
};
</script>
<style scoped>
  .main-bdy{
    position: relative;
    padding: 7px;
    margin: 0;
  }
  .main-bdy .bun{
    position: relative;
    width: 100%;
    text-align: center;
    margin: 2em 0;
  }
  .bun button{
    padding: 12px 24px;
    border: 2px solid #ccc;
    border-radius: 7px;
    font-size: 17px;
  }
  .del{
    display: none;
  }
  .results{
    position: relative;
    margin-bottom: 4.9em;
    width: 100%;
    box-shadow: 3px 3px 18px #ccc;
    border-radius: 7px;
    padding: 10px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .results button{
    padding: 10px 14px;
    border-radius: 7px;
    text-transform: capitalize;
  }
  .results button img{
    margin-left: 10px;
  }
  .main{
    position: relative;
    display: grid;
    gap: 2em;
    width: 100%;
    margin-bottom: 4em;
  }
  .main .pic{
    position: relative;
    width: 100%;
    height: 49vh;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 0;
    box-shadow: 3px 3px 18px #ccc;
  }
  .main .pic .img{
    position: relative;
    width: 100%;
    height: calc(42vh - 20px);
    border-radius: 10px;
    overflow: hidden;
  }
  .main .pic .img img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .main .pic .msg{
    /* background: blue; */
    /* height: 7vh; */
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    bottom: 0;
  }
  @media screen and (min-width: 568px) {
  .main {
    grid-template-columns: 1fr 1fr ;
    gap: 3em;
  }
}
@media screen and (max-width: 1000px) {
 .results p{
  position: absolute;
  /* transform: translateX(-50%); */
  left: 0;
  top: -30px;
 }
}
@media screen and (min-width: 768px) {
  .main {
    grid-template-columns: 1fr 1fr 1fr ;
  }
  .main .pic{
    height: 53vh;
  }
  .main .pic .msg{
    flex-direction: column;
    text-align: left;
    align-items: unset;
    padding-top: 4px;
    font-size: 17px;
    gap: 1em;
  }
  .main .pic .msg p:nth-child(2){
    font-weight: 600;
  }
  .results{
    padding: 10px 24px;
  }
  .results button{
    border: 1px solid #ccc;
  }
  
}

@media screen and (min-width: 1000px) {
  .main{
    gap: 3em;
  }
  .results button:nth-child(1){
    display: none;
  }
}

</style>