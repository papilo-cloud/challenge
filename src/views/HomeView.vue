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
      <p class="desk">
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
      <div class="desk">
        <div class="slide"><span>slide</span></div>
        <div class="but">
          <button>l</button>
          <button>r</button>
        </div>
      </div>
        <!-- r t t g f v  -->
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
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(39, 87%, 65%));
  }
  .bottom .pic{
    position: relative;
    width: 100%;
    height: 49vh;
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
    font-size: 12px;
    font-weight: lighter;

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
@media screen and (max-width: 768px) {
  .bottom .desk{
    display: none;
  }
}
</style>
 