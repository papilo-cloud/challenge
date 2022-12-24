<template>
  <div class="home">
    <div class="head">
      <h1>
        Photography is poetry and beautiful untold stories
      </h1>
      <p>
        flip through more than 10,000 vintage shots old Photography, historic 
        images and capture seamlessly in one place. register to get top 
        access.
      </p>
    </div> 
    <slider />
    <Main />
    <div class="bottom">
      <p class="desk desk1">
        See upcoming auctions and exhibitions
      </p>
      <div class="pic">
        <img src="../assets/pics.jpg" alt="pics">
      
        <div class="mes">
          <div>
            <h3><span></span> monalisa redefined in style</h3>
            <p><span>01</span> starts on : 08:00 gts. monday </p>
            <p>get exclusive viewing of contemporay art and connect with investors and 
              auctioners
              across the world bringing their highes and lowest bids.
            </p>
          </div>
          <div class="more">
            <a href="#">See more</a>
            <button>Set a reminder</button>
          </div>
        </div>
      </div>
      <div class="desk desk2">
        <div class="slide"><span></span></div>
        <div class="but">
          <button>l</button>
          <button>r</button>
        </div>
      </div>
    </div>
    <div class="exp">
      <p>
        <span>
          Explore Marketplace
        </span> 
        <span>
          <router-link to="/marketplace">&rarr;</router-link>
        </span>
      </p>
      <p>
        <span>
          See Auctions
        </span>
        <span>
          <router-link to="/auctions">&rarr;</router-link>
        </span>
      </p>
    </div>
    <news-letter />
  </div>
</template>

<script>
// @ is an alias to /src

import Main from '@/components/Main.vue';
import Slider from '../components/Slider.vue';
import NewsLetter from '../components/NewsLetter.vue';

export default {
    name: "HomeView",
    components: { Main, Slider, NewsLetter },
}
</script>
<style scoped>
  .home{
    margin-top: 4em;
    z-index: -1;
  }
  .head{
    position: relative;
    text-align: center;
    padding: 30px;
    line-height: 28px;
    z-index: -1;
  }
  .head h1{
    line-height: 1.49em;
  }
  .bottom{
    position: relative;
    width: 100%;
    height: 59vh;
    padding: 20px;
    padding-bottom: 30px;
    margin-bottom: 3em;
    overflow: hidden;
    z-index: -1;
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(39, 87%, 65%));
  }
  .bottom .pic{
    position: relative;
    width: 100%;
    height: 100%;
    
  }
  .pic img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .pic .mes{
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-transform: uppercase;
    padding: 0 7px 7px 2.49em;
    color: rgba(252, 252, 252, 0.7);
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    letter-spacing: 1px;
  }
  .pic .mes p{
    font-size: 13px;
  }
  .pic .mes h3{
    position: relative;
    padding: 0;
    margin: 0;
    margin: 10px 0;
  }
  .pic .mes h3 span{
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    display: inline-block;
    border-radius: 49.9px;
    left: -1.4em;
  }
  .pic .mes p {
    position: relative;
    margin-bottom: 10px;
  }
  .pic .mes p span{
    position: absolute;
    font-size: 34px;
    font-weight: bold;
    left: -1.2em;
  }
  .pic .mes .more{
    align-self: flex-end;
    display: flex;
    gap: 2em;
  }
  .pic .mes .more a{
    text-transform: initial;
    color: rgba(252, 252, 252, 0.7);
  }
  .pic .mes .more button{
    border: 1px solid white;
    padding: 12px;
    color: rgba(252, 252, 252, 0.7);
    border-radius: 8px;
  }
  .bottom .desk1{
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    /* margin-bottom: -30px; */
    font-size: 28px;
    text-align: center;
    padding-bottom: 20px;
    color: white;
  }
  .bottom .desk1::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    left: 0;
    background: rgba(252, 252, 252, 0.7);
    bottom: 12px;
  }
  .bottom .desk2{
    padding: 1px 0;
    padding: 1% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom .desk2 .slide{
    position: relative;
    width: 300px;
    height: 7px;
    background: rgba(252, 252, 252, 0.4);
    border-radius: 20px;
    overflow: hidden;
  }
  .desk2 .slide span{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 17%;
    height: 100%;
    background: white;
    border-radius: 20px;
  }
  .desk2 .but{
    width: 120px;
    display: flex;
    justify-content: space-between;
  }
  .desk2 .but button{
    background: rgba(252, 252, 252, 0.7);
    padding: 18px 22px;
    box-shadow: 2px 2px 9px #444;
    border-radius: 49.9%;
  }
  .exp{
    position: relative;
    width: 100%;
    /* padding: 20px 7px; */
  } 
  .exp a{
    color: inherit;
    text-decoration: none;
    color: rgb(0, 0, 255);
    font-size: 34px;
    font-weight: 700;
  }
  .exp p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    border-top: 2px solid #ccc;
    padding: .7em 7px;
  }
  .exp p span:nth-child(2){
    display: inline-block;
    padding: 10px 12px;
    border: 2px solid #ccc;
    border-radius: 49.99%;
  }
  .exp p:nth-child(2){
    border-bottom: 2px solid #ccc;
  }
  
@media screen and (max-width: 768px) {
  .bottom .desk{
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .bottom{
    padding: 3em;
    padding-top: 1.7em;
    height: 70vh;
  }
  .bottom .pic{
    height: 80%;
  }
  .pic .mes{
    flex-direction: row;
    align-items: flex-end;
    gap: 1em;
    padding: 0 1em 3em 3em;
  }
  .pic .mes .more{
    width: 440px;
    gap: 1em;
    align-items: center;
  }
  .exp{
    margin-bottom: 3em;
  }
  .exp p{
    padding: 1em 2em;
  }
}
@media screen and (min-width: 1000px) {
  .bottom{
    padding: 4.99em;
    padding-top: 2.7em;
    height: 90vh;
  }
  .bottom .pic{
    height: 87%;
  }
  .exp p{
    padding: 1em 3em;
  }
}
</style>
 