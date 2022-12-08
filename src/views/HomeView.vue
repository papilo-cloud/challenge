<template>
  <div class="home">
    <div class="phop">
      <h1>
        Photography is poetry & beautiful untold stories
      </h1>
      <p>
        <!-- r t t g f v  -->
        flip through more than 10,000 vintage shots old Photography, historic 
        images and capture seamlessly in one place. register to get top 
        access.
      </p>
    </div>
    <Main />
    <h1>Hello Woldee</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import Main from '@/components/Main.vue';

export default {
    name: "HomeView",
    components: { Main }
}
</script>
<style scoped>
  .home{
    margin-top: 4em;
  }
</style>
 