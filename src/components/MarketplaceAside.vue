<template>
  <div class="aside" :class="{'side':$store.state.show1}" >
    <div class="inp">
      <button><img src="../assets/icon-search.svg" alt=""> Search</button>
    </div>
    <div class="filter">
      <p>filters</p>
      <div class="dsk">
        <button @click="open(0)" class="arrow"> By Category <img src="../assets/icon-arrow-down.svg" alt="arrow-down"></button>

       <div  class="asses category">
        <label for="all">
            <input type="radio" name="category" v-model="pick" value="all" id="all"> all
            <span></span>
          </label>
        <div v-for="(category, i) in categories" :key="i">
          <label :for="i">
            <input type="radio" name="category" v-model="pick" :value="category" :id="i"> {{ category }}
            <span></span>
          </label>
        </div>
       </div>
       
      </div>
      <div class="dsk">
        <button @click="open(1)" class="arrow">By Price <img src="../assets/icon-arrow-down.svg" alt="arrow-down"></button>
        <div  class="asses price">
          <label for="all">
            <input type="radio" name="bunn" v-model="pick" value="all" id="all"> all
            <!-- <span></span> -->
          </label>
        <div v-for="(price, i) in prices" :key="i">
          <label :for="price">
            <input type="radio" name="bunn" v-model="pick" :value="price" :id="price"> {{ price }}
            <!-- <span></span> -->
          </label>
        </div>
        </div>
      </div>
      <div class="dsk">
        <button @click="open(2)" class="arrow">By Artist <img src="../assets/icon-arrow-down.svg" alt="arrow-down"></button>
        <div  class="asses artist">
        <div v-for="(artist, x) in artists" :key="x">
          <label :for="artist">
            <input type="radio" name="bun" v-model="pick" :value="artist" :id="artist"> {{ artist }}
            <span></span>
          </label>
        </div>
        </div>
      </div>
      <div class="dsk">
        <button @click="open(3)" class="arrow">By year <img src="../assets/icon-arrow-down.svg" alt="arrow-down"></button>
          <div  class="asses year">
            <div v-for="(year, j ) in years" :key="j">
              <label :for="year">
                <input type="radio" name="bunn" v-model="pick" :value="year" :id="year"> {{ year }}
                <span></span>
              </label>
            </div>
          </div>
          <!-- <product-details /> -->
      </div>
    </div>
        <!-- r t t g f v  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      pick: 'all',
    }
  },

  computed: {
    categories() {
      const category = this.$store.getters.getProduct
      const x = category.map(cat => cat.category)
      const xx = [...new Set(x)]
      return xx
    },
    artists(){
      const artist = this.$store.getters.getProduct
      const y = artist.map(cat => cat.creator)
      const yy = [...new Set(y)]
      return yy

    },
    years() {
      this.$store.state.pick = this.pick
      const year = this.$store.getters.getProduct
      const x = year.map(cat => cat.year)
      const xx = [...new Set(x)]
      return xx
    },
    prices() {
      const price = this.$store.getters.getProduct
      const x = price.map(cat => cat.price.usd)
      const xx = [...new Set(x)]
      return xx
    }
  },
  methods: {
    open(idx) {
      const element = document.getElementsByClassName('arrow')
      element[idx].nextSibling.classList.toggle('bom')   
      element[idx].lastChild.classList.toggle('show')

    }
  }
}
</script>
  <style scoped>
  .aside{
    position: relative;
    padding: 20px;
    width: 100%;
    margin: 0;
    /* min-height: 100vh; */
  }
  .filter{
    position: relative;
    padding-right: 20px;
  }
  .filter p{
    position: relative;
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 2em;
  }
  .aside p::after{
    position: absolute;
    content: '';
    left: 0;
    bottom: -10px;
    width: 80%;
    height: 3px;
    background: #2c3e50;
  }
  .bom{
    display: none;
  }
  .dsk .arrow{
    margin-bottom: 2em;
    font-weight: 600;
    z-index: 1;
  }
  .dsk .arrow img{
    margin-left: 1em;
    /* transform: rotate(180deg); */
    /* transform: rotateX(0); */
  }
  .show{
    transform: rotate(180deg);
  }
  .asses{
      position: relative;
      transition: .4s;
      z-index: 1;
      margin-bottom: 2em;
    }
    .category label{
      padding-left: 40px;
    }
    .asses label{
      position: relative;
      cursor: pointer;
      display: block;
      margin-bottom: 10px;
    }
    label input{
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }
    .category label span{
      width: 20px;
      height: 20px;
      border-radius: 10%;
      position: absolute;
      background: #ccc;
      left: 0;
      top: 0;
      /* border:1px solid #5362d3; */
    }
   
    .category label input:checked ~ span::after{
      content: '';
      position: absolute;
      width: 4px;
      height: 12px;
      left: 7px;
      border-bottom:2px solid #2c3e50;
      border-right: 2px solid #2c3e50;
      transform: rotate(40deg);
    }
    .year label input:checked ~ span::after, .artist label input:checked ~ span::after{
      content: '';
      position: absolute;
      width: 40%;
      height: 2px;
      left: 0;
      bottom: -4px;
      background: #2c3e50;
      /* transform: rotate(40deg); */
    }
  @media screen and (max-width: 1000px) {
    .aside{
      position: absolute;
      width: 200px;
      background: white;
      min-height: 0;
      border-radius: 10px;
      box-shadow: 3px 3px 20px #ccc;
      /* padding: 20px; */
      display: none;
      z-index: 1;
      left: 8px;
      top: 230px;
      /* transition: .4s; */
    }
    .side{
      display: unset;
    }
    .asd{
      padding: 20px;
    }
    .aside .inp, .aside .filter p{
      display: none;
    }
  }
  
  @media screen and (min-width: 1000px) {
  .aside {
    display: unset;
  }
  .aside .inp{
    position: relative;
    width: 100%;
    padding-right: 24px;
    margin-bottom: 4.9em;
  }
  .aside .inp button{
    background: #ccc;
    padding: 12px;
    width: 100%;
    border-radius: 7px;
    text-align: left;
    font-size: 14px;
  }
  .aside .inp button img{
    width: 14px;
   margin-right: 12px;
  }
}
  </style>