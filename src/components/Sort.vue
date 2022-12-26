<template>
  <div class="sort">
    <div class="bdy">
      <label for="i">
        <input type="radio" name="cat1" v-model="picks" :value="all" id="i">price
        <span></span>
      </label>
      <label for="x">
        <input type="radio" name="cat2" v-model="picks" :value="all" id="x">views
        <span></span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      picks: 'all',
    }
  }
}
</script>

<style>

</style>