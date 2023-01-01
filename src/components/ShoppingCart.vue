<template>
  <div class="shopping">
   <div class="cart" v-for="cart in carts" :key="cart.id" v-if="carts.length">
    <div class="image">
      <div class="img">
        <img :src="cart.url" alt="cart.name">
      </div>
      <div class="text">
        <p><i>{{ cart.category }}</i></p>
        <p class="name">{{ cart.name }}</p>
        <p>{{ cart.creator }}</p>
        <p>{{ cart.size.ft }}</p>
        <p><button @click="itemNumDel(cart.id)">-</button>{{ cart.item }} <button @click="itemNumAdd(cart.id)">+</button></p>
      </div>
    </div>
    <div class="msg">
      <button @click="deleteCart(cart.id)">X</button>
      <p>${{ cart.price.usd }}</p>
    </div>

  </div>
  <div v-else class="empty">
   <h2> Nothing in the cart</h2>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      carts: this.$store.getters.getCart
    }
  },
  mounted() {
    // console.log(this.carts);
  },
  methods: {
    deleteCart(data){
      this.$store.dispatch('deleteCart', data)
      console.log(data);
    },
    // Methods for adding and deleting the number of items in the cart respectively
    itemNumAdd(id){
      this.$store.dispatch('addItemsNum', id)
    },
    itemNumDel(id){
      this.$store.dispatch('delItemsNum',id)
    }
  }
}
</script>

<style scoped>
  .shopping{
    margin-top: 7em;
    position: relative;
    font-size: 14px;
  }
  .shopping .cart{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 14px 7px;
    display: flex;
    justify-content: space-between;
  }
  .cart .image{
    position: relative;
    /* flex: 2; */
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .cart .image .img{
    position: relative;
    width: 100%;
    height: 20vh;
    border-radius: 7px;
    overflow: hidden;
  }
  .cart .image .img img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .cart .image .text{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
  }
  .cart .image .text .name{
    font-weight: bold;
    font-size: 14px;
  }
  .cart .image .text p:nth-child(5) button{
    background: #ccc;
    padding: 4px 8px;
    border-radius: 3px;
  }
  .cart .msg{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .cart .msg button{
    padding: 10px;
    background: #ccc;
  }
  .cart .msg p{
    font-size: 14px;
    font-weight: bold;
  }
  .empty{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
  }
@media screen and (min-width: 767px) {
  .cart .image .text p:nth-child(1){
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .cart .image .text p:nth-child(3), .cart .image .text p:nth-child(4){
    display: none;
  }
}
    h1{
        margin-top: 12em;
        z-index: 10000;
    }
</style>