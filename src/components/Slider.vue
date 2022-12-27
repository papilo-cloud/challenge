<template>

  <div class="slid">
      <div class="imgs">
        <img src="../assets/Rectangle244.png" alt="">
        <img src="../assets/Rectangle243.png" alt="">
        <img src="../assets/Rectangle242.png" alt="">
      </div>
  </div>
  
</template>

<script>
export default {
  mounted(){
  
  }
} 
</script>

<style scoped>
  .slid{
    position: relative;
    width: 100%;
    height: 100vw;
    margin: 0;
    padding: 0;
    padding-top: 0;
    /* z-index: -1; */
    margin-bottom: 4em;
  }
  .imgs{
    position: relative;
    width: 100%;
    height: 100vw;
    height: 90%;
    margin: 0 auto;
  }
  .imgs img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .imgs img:nth-child(3){
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
@media screen and (min-width: 608px) {
  .slid{
    display: none;
  }
}
</style>