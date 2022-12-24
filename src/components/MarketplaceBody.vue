<template>
  <div class="main-bdy">
      <div class="results"><p>see 1 - 7 of 17 results</p> <button>sort by</button></div>
    <div class="main">
      <div class="pic" v-for="product in products.products" :key="product.id">
        <div class="img">
          <img :src="product.url" :alt="product.id">
        </div>
        <div class="msg">
          <p>{{ product.name }}</p>
          <p>${{ product.price.usd}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { 
 
  data() {
    return {
      products: this.$store.getters.getProducts
    };
  },
};
</script>
<style scoped>
  .main-bdy{
    position: relative;
    padding: 7px;
    margin: 0;
  }
  .results{
    position: relative;
    margin-bottom: 4.9em;
    width: 100%;
    box-shadow: 3px 3px 18px #ccc;
    border-radius: 7px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .results button{
    padding: 10px 24px;
    border: 1px solid #ccc;
    border-radius: 7px;
  }
  .main{
    position: relative;
    display: grid;
    gap: 2em;
    width: 100%;
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
}
@media screen and (min-width: 768px) {
  .main{
    gap: 3em;
  }
}
</style>