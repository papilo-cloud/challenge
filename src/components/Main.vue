<template>
  <div class="bdy">
    <div class="h2">
     <h2>Featured  products</h2>
    </div>
    <div class="main main1">
      <div class="imgs">
        <img src="../assets/Rectangle236.png" alt="">
      </div>
      <div class="exp">
        <h2>The Boolean Egyptian</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
        <div class="bom">
          <h1> 74 major creators</h1>
        </div>
      </div>
    </div>
    <div class="main main2">
      <div class="imgs">
        <img src="../assets/Rectangle230.png" alt="">
      </div>
      <div class="exp">
        <h2>The Boolean Egyptian</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
        <div class="bom">
          <h1> 74 major creators</h1>
        </div>
      </div>
    </div>
    <div class="main main3">
      <div class="imgs">
        <img src="../assets/Rectangle23.png" alt="">
      </div>
      <div class="exp">
        <h2>The Boolean Egyptian</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
        <div class="bom">
          <h1> 74 major creators</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bdy {
  position: relative;
  padding: 0;
  margin: 0;
  z-index: -1;
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
  background: blue;
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
@media screen and (min-width: 768px) {
  .bdy{
    padding: 3em;
  }
  .main{
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    grid-template-rows: 1fr;
    padding: 3em 0;
  }
  
  .main2 .imgs{
    grid-column: 2;
    padding: 4px;
  }
  .main2 .exp{
    grid-column: 1;
    grid-row: 1;
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
}

</style>
