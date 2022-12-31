<template>
  <header class="head">
    <div class="menu">
     <button class="btn" @click="butn1">
      <img src="../assets/icon-menu.svg" alt="menu">
     </button>
    </div>
    <div class="logo">
      <h2>ARTSY.</h2> 
    </div>
    <nav class="mobile">
      <div class="mob">
        <h2>ARTSY.</h2>
        <button class="cancel" @click="butn2">
          X
        </button>
      </div> 
      <ul @click="butn2"> 
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/marketplace">Marketplace</router-link>
        </li>
        <li>
          <router-link to="/auctions">Auctions</router-link>
        </li>
        <li>
          <router-link to="/drops">Drops</router-link> 
        </li>
      </ul> 
    </nav>
    <ul class="icons">
          <li><img src="../assets/icon-search.svg" alt="search"></li>
        <li>
          <router-link to="/marketplace/Cart/all/shopping">
            <img src="../assets/icon-cart.svg" alt="cart">
          </router-link>
        </li>
        <li>B</li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    // const x = DocumentTimeline
  },
  methods: {
    butn1() {
      document.getElementsByClassName('mobile')[0].classList.add('show')
    },
    butn2() {
      document.getElementsByClassName('mobile')[0].classList.remove('show')
}
  }
}
</script>

<style scoped>
  .head{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0; 
    padding: 20px;
    background: white;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    z-index: 10000000;
  }
  .head .logo{
    flex: 1;
  }
  .head .menu{
    flex: 1;
  }
  .mobile{
    position: relative;
    z-index: 1000;
  }
  .mobile a {
    position: relative;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    /* z-index: 100; */
  }
  .mobile ul{
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none; 
  }
  .mobile ul li {
    margin-right: 20px;
  }
  .mobile a.router-link-exact-active::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 1.1px;
    left: 0;
    bottom: -4px;
    background: #2c3e50;
  }
  .icons{
    position: relative;
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .icons li img{
    width: 20px;
  }
  /* .mobile a {
    color: #42b983;
  } */

@media screen and (max-width: 767px) {
  .mobile{
    /* display: none; */
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    left: -100%;
    background: #fff;
    padding: 20px 30px;
    text-align: left;
    transition: .3s;
  }
  .mobile .mob{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
  }
  .mob h2{
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  .mobile .cancel{
    font-size: 30px;
  }
  .mobile ul{
    flex-direction: column;
  }
  .mobile ul li {
    margin-right: 0;
    margin-bottom: 2em;
  }
  .icons li:nth-child(3){
    display: none;
  }
  .show{
    left: 0;
  }
}
@media screen and (min-width: 768px) {
  .menu{
    display: none;
  }
  .mobile .mob{
    display: none;
  }
}


</style>