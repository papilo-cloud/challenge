<template>
  <div class="drops">
    <div class="drop">
      <h2>Upcoming drops</h2>
      <p>Turn on notifications so that no drops will miss you.</p>
      <button>
        Notify me
      </button>
    </div>
    <drops-main />
  </div>
</template>
<script>
import DropsMain from '../components/DropsMain.vue'
export default {
  components: { DropsMain },
  
}
</script>
        <!-- r t t g f v  -->
  <style scoped>
    .drops{
      /* margin-top: 4.9fr; */
      margin-top: 4.9em;
      padding: 7px;
      z-index: -1;
    }
    .drop{
      display: flex;
      justify-content: center;
      flex-direction: column;
      z-index: -1;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .drop h2{
      margin-bottom: 1em;
    }
    .drop p{
      margin-bottom: 10px;
    }
    .drop button{
      border: 1px solid #000;
      display: inline;
      padding: 12px;
      width: 200px;
      align-self: center;
      border-radius: 7px;
      font-size: 18px;
    }
    @media screen and (min-width: 1000px) {
      .drop{
        padding: 0 3em;
      }
  }
  </style>