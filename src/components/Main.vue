<template>
  <div class="bdy">
    <div class="h2">
     <h2>Featured  products</h2>
    </div>
    <div class="main main1" v-for="category in categories" :key="category.id">

      <div class="imgs">
        <router-link :to="{ name: 'ProductDetails', params: { name: category.name } }">
          <img :src="category.url" :alt="category.id">
          <div class="oppac">
            <h2>{{ category.name }}</h2>
            <button>&rarr;</button>
          </div>
        </router-link>
      </div>

      <div class="exp">
        <h2>{{ category.name }}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
        <div class="bom">
           <div class="image">
            <div class="img">
              <img src="../assets/ian-dooley.jpg" alt="dooley">
              <img src="../assets/michael.jpg" alt="michael">
              <img src="../assets/matheus-ferrero.jpg" alt="matheus">
              <img src="../assets/joseph-gonzalez.jpg" alt="gonzalez">
              <img src="../assets/christopher.jpg" alt="christopher">

            </div>
            <h3> 64 major creators</h3>
           </div>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  },
  computed: {
    categories() {
      const category = this.$store.getters.getProduct.featured_products
      // const x = category.map(cat => cat.category)
      // const xx = [...new Set(x)]
      return category
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bdy {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
}

.main{
  position: relative;
  display: grid;
  width: 100%;
  padding: 17px;
}
.main .imgs{
  position: relative;
  width: 100%;
  height: 253px;
}
.main .imgs .oppac{
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    width: 100%;
    height: 100%;
    /* padding-right: 7em; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    transition: .3s;
  }
  .oppac h2{
    color: white;
    text-transform: capitalize;
  }
  .oppac button{
    border: 1px solid #ccc;
    padding: 14px 17px;
    font-size: 24px;
    color: white;
    border-radius: 49.99%;
  }
.imgs img{
  position: absolute;
  left: 0; 
  bottom: 0;
  width: 100%;
  height: 100%;
}
.bdy .h2{
  padding: 17px;
}
.bdy .exp h2{
  margin-bottom: 1.8em;
  text-transform: capitalize;
}
.main .exp p{
  margin-bottom: 2em;
  line-height: 24px;
  letter-spacing: .7px;
}
.exp .bom{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bom .image{
  position: relative;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* .bom .i */
.bom .image .img{
  position: relative;
  height: 40px;
  width: 150px;
}
.bom .image .img img{
  position: absolute;
  width: 40px;
  height: 100%;
  /* object-fit: contain; */
  border-radius: 49.99%;
  border: 1px solid #ccc;
}
.bom .image .img img:nth-child(5){
  left: 88px;
}
.bom .image .img img:nth-child(4){
  left: 67px;
}
.bom .image .img img:nth-child(3){
  left: 44px;
}
.bom .image .img img:nth-child(2){
  left: 22px;
}
.exp .bom span{
  border-radius: 49.99%;
  padding: 20px 22px;
  border: 1px solid #333;
  font-size: 24px;
  font-weight: 700;
}
@media screen and (max-width: 768px) {
  .bdy .exp h2{
    display: none;
  } 
  .exp .bom span{
    display: none;
  }
  .bom .image{
  border-bottom: 1px solid #000;
    padding-bottom: 1em;
  }
}
@media screen and (min-width: 768px) {
  .bdy{
    padding: 3em;
  }
  .main .imgs .oppac{
    display: none;
  }
  .main .imgs:hover .oppac{
    display: flex;
  }
  .main{
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    grid-template-rows: 1fr;
    padding: 3em 0;
  }
  
  .bdy .h2{
    position: relative;
    padding: 17px 0;
  }
  .bdy .h2::before,  .main::before{
    position: absolute; 
    content: '';
    width: 100%;
    height: 1px;
    background: #2c3e50;
    bottom: 0;
    left: 0;
  }
}
@media screen and (min-width: 1000px) {
  .main{
    padding: 3em 0;
    column-gap: 30px;
  }
  .bdy{
    padding: 4.9em;
  }
  .main .imgs .oppac{
    flex-direction: row;
  }
}

</style>
