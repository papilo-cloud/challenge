<template>
  <header class="head">
    <div class="menu">
     <button class="btn" @click="butn1">
      |||
     </button>
    </div>
    <div class="lo">
      ARTSY.
    </div>
    <nav class="mobile">
      <div>
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
      A B C
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
    /* background: orangered; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile{
    position: relative;
    z-index: 1000;
  }
  .mobile a {
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

@media screen and (max-width: 770px) {
  .mobile{
    /* display: none; */
    position: fixed;
    width: 80%;
    top: 0;
    height: 100%;
    left: -100%;
    background: plum;
    /* z-index: 100000; */
    padding: 20px;
    text-align: left;
    transition: .3s;
  }
  .mobile .cancel{
    margin-bottom: 30px;
  }
  .mobile ul{
    flex-direction: column;
  }
  ul li {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .show{
    left: 0;
  }
}
@media screen and (min-width: 770px) {
  .menu{
    display: none;
  }
  .mobile .cancel{
    display: none;
  }
}


</style>