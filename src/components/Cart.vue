<template>
  <div class="cont">
    <nav>
      <ul>
        <li><router-link to="/marketplace/Cart/all/shopping">Shopping cart</router-link></li>
        <li><router-link to="/marketplace/Cart/all/shipping">Shipping details</router-link></li>
        <li><router-link to="/marketplace/Cart/all/payment">Payment details</router-link></li>
      </ul>
    </nav>
    <div class="mobile">
      <button>Shop</button>
      <button>Schedule</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
  },
  mounted(){
    const x = this.$store.getters.getCart
    // console.log(x);
    // console.log(x.length);
  }
} 
</script>

<style scoped>
.cont{
  position: relative;
  margin-top: 7em;
  padding: 20px 7px;
  width: 100%;
  /* padding-top: 10px; */
  text-align: left;
}
a{
  text-decoration: none;
  color: inherit;
}
.cont ul{
  position: relative;
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.cont .mobile{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background: #000;
  width: 200px;
  border-radius: 49px;
}
.mobile button{
  background: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 12px;
}
.mobile button:nth-child(2){
  background: none;
  color: white;
  margin-left: 2em;
  padding: 10px 0;
}
@media screen and (max-width: 767px) {
    nav{
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
   .mobile{
    display: none;
   }
  }
  @media screen and (min-width: 1000px) {
    .seriesview{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>