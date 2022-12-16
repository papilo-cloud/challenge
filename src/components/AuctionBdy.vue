<template>
  <div class="aucbdy">
    <p>top bid from popular creators</p>
    <div class="bom">
      <div class="image-box" v-for="(img, i) in slider.bids " :key="i">
        <div class="image">
          <div class="like">
          </div>
          <div class="imgs">
            <img :src="img.url" :alt="img.name">
          </div>
          <div class="names">
            <h4>{{img.name}}</h4>
            <h4 class="highest-mobile">{{img.bid.highest.eth}}</h4>
          </div>
        </div>
        <ul>
          <li> Creator: <span>{{img.creator}}</span></li>
          <li> Date: <span>{{img.date.day}}/0{{img.date.month}}/{{img.date.year}}</span></li>
          <li class="highest-desk"> Highest bid: <span>{{img.bid.highest.eth}}</span></li>
        </ul>
        <div class="bid">
          <p>
            <span>Current bid</span>
            {{img.bid.current.eth}} ETH
          </p>
          <button>Place bid</button>
        </div>
      </div>
       
    </div>
  </div>
</template>

<script>
import imgs from '../jsons/auction.json'
// import {  } from "module";
export default {
  data() {
    return  {
      slider: imgs
    }
  },
}
</script>

<style scoped>
  .aucbdy{
    position: relative;
    width: 100%;
    padding: 0;
  }
  .bom{
    position: relative;
    display: grid;
    /* grid-template-columns: 0vw; */
  }
  .image-box{
    position: relative;
    width: 100%;
    padding: 7px;
    margin-bottom: 2em;
  }
  .image-box .image{
    position: relative;
    /* border: 1px solid #000; */
    box-shadow: 1px 1px 7px rgba(170, 168, 168, 0.4),
    -1px -1px 7px rgba(170, 168, 168, 0.4);
    border-radius: 20px;
    height: 50vh;
    margin: 0;
    padding: 0 20px;
    margin-bottom: 2em;
    width: 100%;
  }
  .image .names{
    position: relative;
    padding: 10px 0;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    bottom: 10px;
    margin-top: 9vh;
  }
  
   .imgs {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    /* margin-top: 7.7vh; */
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    height:35vh;
  }
  .imgs img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
  }
  ul{
    position: relative;
    list-style: none;
    margin: 0;
    padding: 20px;
  }
  ul li {
    margin-bottom: 20px;
  }
  ul li:nth-child(1) span{
    color: rgba(0, 0, 249, 0.7);
  }
  ul span{
    font-weight: 600;
  }
   .highest-desk{
    display: none;
  }
  .bid{
    position: relative;
    padding: 8px 20px;
    border-radius: 10px;
    background: rgba(170, 168, 168, 0.2);
    /* background: indigo; */
    /* z-index: 1000; */
    min-height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bid p{
    line-height: 34px;
    font-size: 19px;
    display: flex;
    flex-direction: column;
  }
  .bid p span{
    font-size: 14px;
  }
  .bid button{
    background: rgba(0, 0, 208, 0.8);
    padding: 12px 28px;
    color: white;
  }

@media screen and (min-width: 768px) {
  .aucbdy{
    padding: 3em;
  }
  .bom
  {
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
  }
  .names .highest-mobile{
    display: none;
  }
  .highest-desk{
    display: unset;
  }
}
</style> 