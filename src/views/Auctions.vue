<template>
  <div class="aucn">
    <p>here's an overiew of products actively on auction, explore </p>
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
    margin-top: 4em;
    z-index: -1;
  }
</style>