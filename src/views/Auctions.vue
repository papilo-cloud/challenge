<template>
  <div class="aucn">
    <Slider2 />
    <auct />
  </div>
</template>

<script>
import Slider2 from '@/components/AuctionSlider.vue';
import Auct from '@/components/AuctionBdy.vue';

export default {
    components: { Slider2, Auct }
}
</script>

<style scoped>
  .aucn{
    position: relative;
    margin-top: 7em;
  }
  
</style>