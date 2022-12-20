<template>
  <div class="drops">
    <div class="bdy" v-for="data in drops" :key="data.id">
        <div class="pic">
            <img :src="data.url" :alt="data.title">
        </div>
        <div class="main">
            <span class="session">
                {{ data.session }}
            </span>
            <p>{{ data.date.month }} {{ data.date.day }} at {{ data.date.time }} {{ data.date.timezone }}</p>
            <h2>{{ data.title }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis, quisquam 
                consectetur deleniti perferendis. Est.</p>
            <h3>Creator: <span>{{ data.creator }}</span></h3>
            <a href="#">Join now</a>
            <!-- day": 21, "month": "november", "time": "11am", "timezone": "WAT" } -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            drops: this.$store.getters.getDrops[0]
        }
    },
    mounted() {
        console.log(this.drops)
    }
} 
</script>

<style scoped>
    .drops{
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .bdy{
        position: relative;
        display: grid;
        margin-bottom: 1em;
    }
    .pic{
        position: relative;
        width: 100%;
        height: 40vh;
        border-radius: 10px;
        overflow: hidden;
    }
    .pic img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
    }
    .main{
        margin: 2em 0;
    }
    .main .session{
        display: inline-block;
        background: #a0a0a0;
        padding: 8px 14px;
        border-radius: 7px;
        margin-bottom: 10px;
    }
    .main h2, .main h3{
        margin: .8em 0;
    }
  @media screen and (min-width: 768px) {
    .bdy{
        grid-template-columns: 1.4fr 1fr ;
        column-gap: 1.4em;
        margin-bottom: 4em;
    }
    .main{
        margin: 0;
    }
  }
  @media screen and (min-width: 1000px) {
    .bdy{
        padding: 0 3em;
    }
  }
</style>