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
    <Main />
    <h1>Hello Woldee</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import Main from '@/components/Main.vue';
import Slider from '../components/Slider.vue';

export default {
    name: "HomeView",
    components: { Main, Slider },
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
</style>
 