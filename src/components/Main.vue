<template>
  <div class="bdy">
    <div class="main">
      <div class="imgs">
        <img src="../assets/Rectangle236.png" alt="">
      </div>
      <div class="exp">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
      </div>
    </div>
    <div class="main">
      <div class="imgs">
        <img src="../assets/Rectangle230.png" alt="">
      </div>
      <div class="exp">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
      </div>
    </div>
    <div class="main">
      <div class="imgs">
        <img src="../assets/Rectangle23.png" alt="">
      </div>
      <div class="exp">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
           sit error incidunt, sequi quidem corrupti! Quas distinctio, ratione
            est corrupti
        </p>
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
  width: 100%;
}
.main .imgs{
  position: relative;
  width: 100%;
  /* width: 100vw; */
  height: 253px;
  background: blue;
}
.imgs img{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

</style>
