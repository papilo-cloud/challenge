<template>
  <div class="aside">
    <div class="inp">
      <input type="button">
    </div>
    <div class="filter">
      <div class="category">
        <button> By Category</button>
       <div>
        <label for="all">
            <input type="radio" name="bunn" v-model="pick" value="all" id="all"> all
            <span></span>
          </label>
        <div v-for="(category, i) in categories" :key="i">
          <label for="all">
            <input type="radio" name="bunn" v-model="pick" :value="category" :id="i"> {{ category }}
            <span></span>
          </label>
        </div>
       </div>
      </div>
      <div class="price">
        <button>By Price</button>
        <div>
          
        </div>
      </div>
      <div class="artist">
        <button>By Artist</button>
      </div>
      <div class="year">
        <button>By year</button>
      </div>
    </div>
        <!-- r t t g f v  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      pick: 'all'
    }
  },
  computed: {
    categories() {
      const category = this.$store.getters.getProducts.products
      const x = category.map(cat => cat.category)
      const xx = [...new Set(x)]
      return xx
      // console.log(category)
    }
  },
  mounted(){
    const category = this.$store.getters.getProducts.products
      const x = category.map(cat => cat.category)
      const xx = [...new Set(x)]
      console.log(x)
      console.log(xx)
      console.log(category)
  }
}
</script>
  <style scoped>
   
  </style>