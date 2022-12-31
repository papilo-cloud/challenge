<template>
  <div class="auction">
    <div class="cont" v-for="slide in auction" :key="slide.id">
      <!-- The main image section -->
      <div class="image">
        <div>
          <span>X</span><span>live</span>
        </div>
        <img :src="slide.url" alt="">
        <h2>Current bid ${{ slide.bid }}</h2>
        <p>Tag: {{ slide.tag }}</p>
      </div>
      <!-- The chat section -->
      <div class="bid">
        <div class="img" v-for="bid in slide.bids" :key="bid.name">
          <img :src="bid.pic" :alt="bid.name">
          <div>
            <span>{{ bid.name }}</span>
            <span>{{ bid.comment }}</span>
          </div>
        </div>
        <div class="input">
          <p>
            creator: Stormi Rylie
          </p>
          <div>
            <div class="srch">
              <span>Place a bid...</span>
            </div>
            <div class="heart">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="upcoming">
      <p>
        <span>
          See upcoming drops
        </span> 
        <span> 
          <router-link to="/drops">&rarr;</router-link>
        </span>
      </p>
    </div>
  </div>  
</template> 

<script>  
import imgs from '../jsons/auction.json'

export default {
 
  data(){
    return{
      slide: imgs,
    }
  },
  computed: {
    auction() {
      return this.slide.products.filter(x => x.id == this.$route.params.name)
    }
  }
}

</script>

<style scoped> 
  .auction{
    position: relative;
    width: 100%;
    margin-top: 5em;
    padding: 14px;
  }
  .cont{
    position: relative;
    display: grid;
    border: 2px solid #ccc;
    padding: 0;
    margin: 0;
    margin-bottom: 1em;
  }
  .cont .image{
    position: relative;
    width: 100%;
    height: 80vh;
    margin: 0;
    /* margin-bottom: 1em; */
    padding: 0;
    background: rgba(9, 3, 66, 0.5);
  }
  .cont .image > div{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }
  .cont .image > div span:nth-child(1){
    padding: 4px 8px;
    background: #aaa;
    color: #fff;
    border-radius: 50%;
  }
  .cont .image > div span:nth-child(2){
    padding: 4px 8px;
    background: rgb(18, 18, 204);
    color: #fff;
    border-radius: 4px;
    letter-spacing: .7px;
  }
  .cont .image img{
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .cont .image h2{
    background: rgba(0, 0, 0, 0.2);
    padding: 0;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .cont .image p{
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    bottom: 2em;
    left: 2em;
    color: #fff;
  }
  .cont .bid{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .cont .bid .img{
    position: relative;
    display: flex;
    gap: 1em;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 1em;
    width: 100%;
  }
  .cont .bid .img > div{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cont .bid .img img{
    position: relative;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .input{
    position: relative;
    width: 100%;
    margin-top: 2em;
  }
  .input p{
    margin-bottom: 10px;
    color: #bbb;
  }
  .input > div{
    display: flex;
    justify-content: space-between;
  }
  .input .srch{
    width: 70%;
    padding: 15px 20px;
    border: 1.2px solid #bbb;
    border-radius: 30px;
    display: flex;
    align-items: center;
  }

  /*  style for the heart shape */

  .input .heart{
    position: relative;
    width: 60px;
    height: 60px; 
    /* padding: 3px; */
    border: 1px solid #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .input .heart span{
  position: relative;
  display: inline-flex;
  width: 22px;
  height: 22px;
  background: rgb(212, 19, 19);
  transform: rotate(45deg);
}
.input .heart span::after , .input .heart span::before{
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  background: rgb(212, 19, 19); 
  border-radius: 50%;
}
.input .heart span::after{
  top: -9px;
}

.input .heart span::before{
  left: -9px;
}
.upcoming{
  position: relative;
  margin-bottom: 3em;
}
.upcoming p{
  font-size: 19px;
  font-weight: bold;
}
.upcoming p span:nth-child(2){
  padding: 12px 10px;
  border: 2px solid #bbb;
  border-radius: 50%;
  margin-left: 14px;
}
.upcoming p a{
  text-decoration: none;
  font-size: 30px;
}
@media screen and (max-width:767px) {
  .cont .image h2{
    font-size: 18px;
    left: 44%;
    top: 30%;
    transform: translateX(-50%);
  }
  .cont .image p{
    top: 20px;
    left: 12px;
    bottom: unset;
  }
  .cont .image > div{
    justify-content: flex-end;
    gap: 5px;
  }
  .cont .bid{
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    height: unset;
    padding: 20px;
  }
  .cont .bid .img{
    color: #fff;
    font-size: 12px;
  }
  .cont .bid .img:nth-child(1), .cont .bid .img:nth-child(2){
    display: none;
  }
  .cont .bid .img:nth-child(3){
    opacity: .2;
  }
  .cont .bid .img:nth-child(4){
    opacity: .5;
  }
  .cont .bid .img img{
    width: 30px;
    height: 30px;
    border: 1px solid rgb(18, 18, 204);
  }
  .cont .bid .img > div{
    gap: 5px;
    letter-spacing: .7px;
  }
  .input .srch{
    padding: 10px;
    color: #ccc;
    font-size: 12px;
  }
  .input .heart{
    width: 40px;
    height: 40px;
    background: #bbb;
  }
  .input .heart span{
    width: 15px;
    height: 15px;
  }
.input .heart span::after , .input .heart span::before{
  width: 15px;
  height: 15px;
}
.input .heart span::after{
  top: -7px;
}

.input .heart span::before{
  left: -7px;
}
.input p{
  display: none;
}
.upcoming p{
  font-size: 14px;
}

}
  @media screen and (min-width: 768px) {
    .cont{
      grid-template-columns: 1fr 1fr;
    }
    .cont .image{
    height: 100%;
    margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1000px) {
    .auction{
      padding: 14px 4em;
    }
  }
</style> 