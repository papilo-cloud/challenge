<template>
  <header class="head">
    <div class="menu">
     <button class="btn" @click="butn1">
      <img src="../assets/icon-menu.svg" alt="menu">
     </button>
    </div>
    <div class="lo">
      <h2>ARTSY.</h2> 
    </div>
    <nav class="mobile">
      <div class="mob">
        <h2>ARTSY.</h2>
        <button class="cancel" @click="butn2">
          X
        </button>
      </div> 
      <ul>
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
    <div class="icons">
      <button><img src="../assets/icon-search.svg" alt="search"></button>
      <button><img src="../assets/icon-cart.svg" alt="cart"></button>
    </div>
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
    justify-content: space-between;
    align-items: center;
    z-index: 10000000;
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
  ul li {
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
  /* .mobile a {
    color: #42b983;
  } */

@media screen and (max-width: 768px) {
  .mobile{
    /* display: none; */
    position: fixed;
    width: 80%;
    top: 0;
    height: 100%;
    left: -100%;
    background: plum;
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
  ul li {
    margin-right: 0;
    margin-bottom: 2em;
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