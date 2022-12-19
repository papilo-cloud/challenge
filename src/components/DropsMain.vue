<template>
  <div class="emp">
    <div class="empy">
        <h1>Empty</h1>
    </div>
    <h1>Empty Invoice </h1>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
    .emp{
        margin: 0;
        padding: 0;
        position: relative;
        margin-top: 4em;
        width: 80%;
        height: 700px;
        background: #0077de;
        text-align:  center;
         left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .emp h1{
        color: white;
        letter-spacing: 1px;
    }
    .empy{
        position: relative;
        width: 40vw;
        height: 40%;
       
        margin: 4em auto 0;
    }
    .emp img{
        width: 100%;
    }
</style>