<template>
  <div class="detailed">
    <div class="detail" v-for="detail in detailed" :key="detail.id">
      <div class="pic">
          <img :src="detail.url" :alt="detail.name">
      </div>
      <div class="txt">
        <div class="mes">
          <p>{{ detail.name }}</p>
          <p class="p1">${{ detail.price.usd }}</p>
          <p class="p2"><img src="../assets/Ethereum.png" alt="Ethereum">{{ detail.price.eth }}</p>
        </div>
        <div class="name">
          <p>Creator: <span>{{ detail.creator }}</span></p>
          <p>{{ detail.origin }}</p>
          <p>Total views:  {{ detail.views}}K </p>
        </div>
        <div class="bun">
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
        <div class="add">
        <router-link :to="{ name: 'Cart', params: { name: detail.name } }">
          <button>Add to cart</button>
        </router-link>
          <button>
            <span></span>
          </button>
        </div>
        <div class="desc">
          <div class="bunn">
            <button @click="shows"><span>Description</span> <img src="../assets/icon-arrow-down.svg" alt="arrow"></button>
            <div class="lorem">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum nesciunt dolorem,
                 laborum saepe asperiores. Ratione,
                 ut animi, ipsam blanditiis aliquid veritatis fugit natus totam sint ex veniam, eveniet nam.
                </p>
            </div>
          </div>
          <div class="bunn">
            <button><span>Listings</span> <img src="../assets/icon-arrow-down.svg" alt="arrow"></button>
            <div></div>
          </div>
          <div class="bunn">
            <button><span>Status</span> <img src="../assets/icon-arrow-down.svg" alt="arrow"></button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <h3>More from this collection</h3>
    <div class="collection">
      <cat />
    </div>
  </div>
</template>

<script>
import Cat from './Cat.vue'
export default {
  components: { Cat },
  data() { 
    return{
      detailedImg:[],
      id:this.$route.params.name,
    }
  },
  computed: {
    detailed() {
      const detail =  this.$store.getters.getProducts.filter( x => x.name == this.id)
      console.log(detail)
      return detail
    }
  },
  methods: {
    shows() {
      document.getElementsByClassName('lorem')[0].classList.toggle('show')
      // console.log(x.className)
    }
  }
} 
</script>

<style scoped>
  .detailed{
    position: relative;
    width: 100%;
    margin-top: 4.99em;
    padding: 7px;
  }
  .detailed h3{
    margin-bottom: 2em;
  }
  .detail{
    position: relative;
    display: grid;
    width: 100%;
    margin: 0;
    padding: 0;
    /* min-height: 100vh; */
    /* border: 0vh; */
    padding: 20px 14px;
    margin-bottom: 4em;
  }
  .detail::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: #2c3e50;
  }
  .detail .pic{
    position: relative;
    width: 100%;
    height: 60vh;
  }
  .detail .pic img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
  }
  .detail .txt{
    position: relative;
    padding: 20px 0;
  }
  .txt .mes{
    position: relative;
    display: flex;
    padding: 0;
    width: 100%;
    margin-bottom: 1.2em;
    align-items: center;
    justify-content: space-between;
  }
  .detail .txt .mes .p2{
    display: flex;
    width: 100px;
    justify-content: center;
    align-items: center;
  }
  .detail .txt .mes .p2 img{
    width: 30px;
    transform: rotate(49deg);
  }
  .txt .name, .txt .bun, .txt .add, .txt .bun{
    position: relative;
    margin-bottom: 1.2em;
    width: 100%;
  }
  .txt .name p {
    margin-bottom: 1em;
  }
  .txt .name p:nth-child(1) span{
    color: #1439a0;
    text-transform: capitalize;
  }

  .txt .bun button{
    font-size: 22px;
    padding: 7px 14px;
    background: #ccc;
    border-radius: 7px;
  }
  .txt .bun span{
    margin: 0 10px;
  }
  .txt .add{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .txt .add button{
    padding: 13px 40px;
    background: #1439a0;
    color: white;
    border: none;
    /* font-size: 17px; */
    border-radius: 4px;
    margin-right: 20px;
  }
  .txt .add button:nth-child(1){
    padding: 20px 34px ;
  }
  /* Styling of the heart shape */
.add button span{
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  background: #ccc;
  transform: rotate(45deg);
}
.add button span::after , .add button span::before{
  position: absolute;
  content: '';
  width: 24px;
  height: 24px;
  background: #ccc; 
  border-radius: 50%;
}
.add button span::after{
  top: -9px;
}

.add button span::before{
  left: -9px;
}
  .txt .add button:nth-child(2){
    background: unset;
    border: 2px solid #ccc;
    color: #2c3e50;
    margin-right: 0;
  }
  .txt .mes p:nth-child(1){
    text-transform: uppercase;
  }
  .desc{
    position: relative;
    margin: 0;
    margin-bottom: 1em;
  }
  .desc .bunn{
    padding: 10px 0;
    border-bottom: 1px solid #2c3e50;
  }
  .desc .bunn button{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 15px;
    letter-spacing: .7px;
    margin-bottom: 1em;
  }
  .bunn button:hover .bunn img{
    transform: rotate(47deg);
  }
   .bunn img{
    width: 14px;
  }
  .desc {
    /* display: none; */
    line-height: 24px;
  }
  .lorem{
    display: none;
  }
  .show{
    display: block;
  }
@media screen and (min-width: 768px) {
  .detail{
    grid-template-columns: 1fr 1.2fr;
    gap: 1em;
  }
  .detail .txt{
    padding: 0;
  }
  .detail .pic{
    height: 70vh;
  }
  .detail .txt .mes .p1{
    display: none;
  }
  .detail .txt .mes p{
    font-weight: 600;
  }

}
@media screen and (max-width: 768px) {
  .detail .txt .mes .p2{
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .detailed{
    padding: 20px 4em;
  }
}

</style>