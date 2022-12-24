<template>
    <div class="about">
      <div class="head">
        <marketplace-aside />
      </div>
        <marketplace-body />
    </div>
  </template>
  <script>
import MarketplaceAside from '../components/MarketplaceAside.vue'
import MarketplaceBody from '../components/MarketplaceBody.vue'
  export default {
  components: { MarketplaceBody, MarketplaceAside },
    
  }
  </script>
   <style scoped>
    .about{
      margin-top: 4.99em;
    }
  
   </style>