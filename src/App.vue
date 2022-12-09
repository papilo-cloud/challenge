<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
}
button{
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
}

.mobile a.router-link-exact-active {
  color: #42b983;
}
</style>
