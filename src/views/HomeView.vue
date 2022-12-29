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
    <slider-desk />
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
          <button><img src="../assets/icon-arrow-left.svg" alt="left"></button>
          <button><img src="../assets/icon-arrow-right.svg" alt="right"></button>
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
    <div class="week">
      <div class="msg">
        <h2>top creators of the week</h2>
        <ul>
          <li>editorials</li>
          <li>fashion</li>
          <li>lifestyle</li>
          <li>blueprint</li>
        </ul>
      </div>
      <div class="text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nemo non ad officiis quasi qui reprehenderit aliquam suscipit sunt,
          error obcaecati molestias distinctio dolorem officia earum
          eveniet dicta numquam fugit dignissimos.
          amet consectetur adipisicing elit.
          Nemo non ad officiis quasi qui reprehenderit aliquam suscipit sunt,
          error obcaecati molestias distinctio dolorem officia earum
          eveniet dicta numquam fugit dignissimos.
        </p>
       
      </div>
      
      <!-- for the image animation -->
      <div class="circa">
        <h2>Circa <br> <span>1985</span></h2>
      </div>
    </div>
    <news-letter />
  </div>
</template>

<script>
// @ is an alias to /src

import Main from '@/components/Main.vue';
import Slider from '../components/Slider.vue';
import NewsLetter from '../components/NewsLetter.vue';
import SliderDesk from '../components/SliderDesk.vue';

export default {
    name: "HomeView",
    components: { Main, Slider, NewsLetter, SliderDesk },
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
    background: red;
  }
  .bottom .pic img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bottom .pic .mes{
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
    margin-bottom: 2em;
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
  .week{
    position: relative;
    background: #bbb;
    width: 100%;
    border: 0vh;
    height: 70vh;
    padding: 20px;
    margin-bottom: 2em;
  }
  .week .msg{
    margin-bottom: 2em;
  }
  .week .msg h2{
    text-transform: uppercase;
  }
  .week .msg ul{
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 24px;
    padding-left: 17px;
  }
  .week .msg ul li{
    position: relative;
    font-size: 12px;
    text-transform: capitalize;
  }
  .week .text{
    position: relative;
    width: 100%;
    margin: 0;
  }
  
  .week .circa{
    position: absolute;
    height: 37vh;
    width: 300px;
    bottom: 0;
    left: 49%;
    transform: translateX(-49%);
    background-image: url('../assets/Rectangle299.png');
    /* background-position-x: 0;
    background-position-y: 0; */
    background-repeat: no-repeat;
    background-size: cover;
    animation: anim 24s linear infinite;
  }

  @keyframes anim{
    0%{background-image: url('../assets/Rectangle299.png');}
    33.33%{background-image: url('../assets/Rectangle300.png'); }
    66.66%{background-image: url('../assets/Rectangle301.png'); }

  }
  .week .circa h2{
    position: absolute;
    /* right: -20px; */
    right: 0;
    bottom: 49px;
    font-size: 37px;
    color: #222;
    text-transform: uppercase;
    z-index: -1;
  }
  .week .circa h2 span{
    text-decoration: line-through;
    font-size: 2em;
  }
 
  
@media screen and (max-width: 767px) {
  .bottom .desk{
    display: none;
  }
  .week .msg ul li::before{
    position: absolute;
    content: '';
    left: -14px;
    width: 8px;
    height: 8px;
    bottom: 4px;
    background: #222;
    border-radius: 49.99%;
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
  .week{
    height: 70vh;
  }
  
  .week .msg{
    display: flex;
    justify-content: space-between;
  }
  .week .msg ul{
    flex-direction: column;
    gap: 12px;
  }
  .week .msg ul li{
    font-size: unset;
  }
  .week .msg ul::before, .week .msg ul::after{
    position: absolute;
    content: '';
    width: 4.9px;
    height: 100%;
    background: #888;
    border-radius: 10px;
    left: 0;
  }
  .week .msg ul::after{
    height: 30px;
    bottom: 0;
    background: #222;
  }
  .week .circa{
    height: 49vh;
    width: 400px;
  }
  .week .circa h2{
    right: -40%;
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
  .week .pics{
    height: 64vh;
    width: 600px;
  }
  .week .pics h2{
    right: -40%;
  }
}
</style>
 