<template>
  <section>
    <div class="about">
      <div class="head">
        <marketplace-aside />
        <sort />
      </div>
        <marketplace-body />
    </div>
    <news-letter />
  </section>
  </template>
  <script>
import MarketplaceAside from '../components/MarketplaceAside.vue'
import MarketplaceBody from '../components/MarketplaceBody.vue'
import NewsLetter from '../components/NewsLetter.vue'
import Sort from '../components/Sort.vue'
  export default {
  components: { MarketplaceBody, MarketplaceAside, NewsLetter, Sort },
    
  }
  </script>
  <style scoped>
    .about{
      margin-top: 8.99em;
      display: grid;
    }
    @media screen and (min-width: 1000px) {
      .about{
        padding: 0 4em;
        grid-template-columns: 18% 82% ;
        /* gap: 3em; */
      }
    }
  </style>