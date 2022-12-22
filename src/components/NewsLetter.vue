<template>
  <div class="news">
   <main>
      <h1>NewsLetter</h1>
      <p>Subscribe to get daily updates on new drops and exciting deals</p>
      <div>
        <input type="text">
        <input type="button" value="subscribe">
      </div>
   </main>
   <footer>

   </footer>
        <!-- r t t g f v  -->
      <div class="main mobile">
        <p>reach us</p>
        <ul>
          <li>artsystudios@gmail.com</li>
          <li>Lagos Nigeria</li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {

 data() {
   return {
   };
 },
};
</script>
<style scoped>
  .news{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 7px;
  }
  .news main{
    position: relative;
    text-align: left;
    line-height: 34px;
    padding: 1.8em 0;
  }
  .news main input{
    width: 100%;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;
  }
  .news main input[type="button"]{
    width: 149px;
    background: #000;
    color: white;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    .news main {
      border: 1px solid;
      text-align: center;
      padding: 1.8em;
    }
    .news main input{
      margin-right: 12px;
      width: 300px;
    }
  }
  .main p{
    text-transform: uppercase;
    margin-bottom: 1em;
  }
  .main ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .main ul li{
    margin-bottom: 1.2em;
  }
  @media screen and (min-width: 1000px) {
    .news{
      padding: 0 4.9em;
    }
  }
</style>