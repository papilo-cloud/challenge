<template>
  <div class="aucbdy">
    <p>top bid from popular creators</p>
    <div class="bom">
      <div class="img" v-for="(img, i) in slider.bids " :key="i">
        <div class="likees">
        <div class="like"></div>
          <div class="imgs">
            <img :src="img.url" :alt="img.name">
          </div>
        <h4>{{img.name}}</h4>
        </div>
        <ul>
        <li> Creator: <span>{{img.creator}}</span></li>
        <li> Date: <span>{{img.date.day}}/0{{img.date.month}}/{{img.date.year}}/</span></li>
        <li> Highest bid: <span>{{img.bid.highest.eth}}</span></li>
      </ul>
      <div>
        <p>
          <span>Current bid</span>
          {{img.bid.current.eth}}
        </p>
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
    padding: 17px;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-columns: 0vw; */
  }
  .img{
    position: relative;
    width: 100%;
  }
  .img .likees{
    position: relative;
    border: 1px solid #000;
    border-radius: 20px;
    height: 50vh;
    margin: 0;
    padding: 0;
  }
   .likees h4{
    position: absolute;
    padding: 0;
    margin: 20px;
    bottom: 0;
    display: inline-block;
  }
  .imgs {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height:35vh;
    /* background: saddlebrown; */
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
    padding: 0;
  }
  ul li {
    margin-bottom: 20px;
  }

</style> 