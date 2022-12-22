<template>
  <div class="news">
   <main>
      <h2>NewsLetter</h2>
      <p>Subscribe to get daily updates on new drops and exciting deals</p>
      <div>
        <input type="text">
        <input type="button" value="subscribe">
      </div>
   </main>
   <footer>
        <!-- r t t g f v  -->
      <div class="desk">
        <h2>ARTSY.</h2>
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
        <ul>
          <li>Blog</li>
          <li>Wallets</li>
          <li>rates</li>
          <li>High bids</li>

        </ul>
      </div>
      <div class="main">
        <p>reach us</p>
        <ul>
          <li> <img src="../assets/icon-email.svg" alt="email">  artsystudios@gmail.com</li>
          <li> <img src="../assets/icon-location.svg" alt="location"> Lagos Nigeria</li>
        </ul>
      </div>
      <div class="foot">
        <p>Artsystudios 2022. All rights reserved.</p>
      </div>
   </footer>
  </div>
</template>
<script>
export default {

 data() {
   return {
   };
 },
};
</script>
<style scoped>
  .news{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 7px;
  }
  .news main{
    position: relative;
    text-align: left;
    line-height: 34px;
    padding: 1.8em 0;
  }
  .news main h2{
    font-size: 22px;
    text-transform: uppercase;
    font-weight: lighter;
  }
  .news main input{
    width: 100%;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;
  }
  .news main input[type="button"]{
    width: 149px;
    background: #000;
    color: white;
    text-transform: uppercase;
  }
  .news footer{
    position: relative;
    padding-bottom: 3em;
  }
  .news footer .desk{
    display: none;
  }
  .news footer .foot {
    text-transform: capitalize;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    margin-top: 3em;
  }
  .news footer .foot p{
    text-transform: capitalize;
  }
 
  @media screen and (min-width: 768px) {
    .news main {
      border: 1px solid;
      text-align: center;
      padding: 1.8em;
      margin-bottom: 3em;
    }
    .news main input{
      margin-right: 12px;
      width: 300px;
    }
    .news footer{
      display: flex;
      justify-content: space-evenly;
      padding-right: 2em;
    }
    .news footer .desk{
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
    }
    .news footer .main ul li {
      display: flex;
      gap: 10px;
    }
  }
  .main p{
    text-transform: uppercase;
    margin-bottom: 1em;
  }
   ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
   ul li{
    margin-bottom: 1.2em;
  }
  @media screen and (min-width: 1000px) {
    .news{
      padding: 0 4.9em;
    }
  }
</style>