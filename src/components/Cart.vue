<template>
  <div class="cont">
    <h2>recomended</h2>
  </div>
</template>

<script>
export default {
  methods: {
    isBookmarked(index){
      this.$store.dispatch('toggleBookmarked',index)
      console.log(index)
    },
  }
} 
</script>

<style scoped>
.cont{
  position: relative;
  margin-top: 7em;
  padding: 20px 10px;
  width: 100%;
  /* padding-top: 10px; */
  text-align: left;
}

  p {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 768px) {
   
  }
  @media screen and (min-width: 1000px) {
    .seriesview{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>