<template>
  <div class="drops">
    <div class="bdy" v-for="data in drops" :key="data.id">
        <div class="pic">
            <span class="session"
            :class="[ {'upcoming': data.session == 'upcoming'}, {'get-notified' : data.session =='live now'}]"
            >
                {{ data.session }}
            </span>
            <img :src="data.url" :alt="data.title">
            <div class="abs">
                <p>
                    <span v-if="data.session !== 'ended'">Time remaining</span> <span v-else>Auction ended</span> <br />
                    {{ data.timeremaining.hrs }}
                </p>
                <button :class="[data.session !== 'ended'? 'active': '', 'notActive']">{{ data.session == 'ended'? 'view' : 'join' }}</button>
            </div>
        </div>
        <div class="main">
            <span
            :class="[ {'upcoming': data.session == 'upcoming'}, {'get-notified' : data.session =='live now'}, 'session']"
            >
                {{ data.session }}
            </span>
            <p>{{ data.date.month }} {{ data.date.day }} at {{ data.date.time }} {{ data.date.timezone }}</p>
            <h2>{{ data.title }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis, quisquam 
                consectetur deleniti perferendis. Est.</p>
            <h3>Creator: <span>{{ data.creator }}</span></h3>
            <a href="#">{{ data.session == 'upcoming'? 'get notified' : data.session =='live now'? 'join now' : 'view' }}</a>
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
        // console.log(this.drops)
    },
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
    .pic .session{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
        padding: 8px 18px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.49);
        color: #fff;
    } 
    .pic .upcoming{
        background: #0077ff;
    }
    .pic .get-notified{
        background: #009411;
    }    .pic img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
    }
    .pic .abs{
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        /* background: yellow; */
        padding: 10px;
        bottom: 8px;
        width: 90%;
        margin: auto;
        border-radius: 7px;
        border: 2px solid rgba(249, 249, 249, 0.4);
        backdrop-filter: blur(7px);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .abs p{
        line-height: 30px;
        color: white;
        letter-spacing: 1px;
    }
    /* Condiionally sylin he bu */
    .abs .notActive{
        background: rgba(249, 249, 249, 0.57);
        /* background: #f0f0f0; */
        background: #c4c4c4;
        padding: 7px 18px;
        color: white;
        border-radius: 4px;
        letter-spacing: 1px;
        display: none;
    }
    .abs .active{
        background: rgba(0, 0, 255, 0.4);
        background: #0077ff
    }
    .main{
        margin: 2em 0;
    }
    .main .session{
        display: inline-block;
        background: rgba(255, 255, 255, 0.49);
        background: #a0a0a0;
        color: #fff;
        padding: 8px 18px;
        border-radius: 7px;
        margin-bottom: 12px;
        display: none;
    }
    .main .upcoming{
        background: #0077ff;
    }
    .main .get-notified{
        background: #009411;
    }
    .main h2, .main h3{
        margin: .8em 0;
    }
    .main a{
        color: #0077ff;
        cursor: pointer;
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
    .pic .session{
        display: none;
    }
    .abs .notActive{
        display: unset;
    }
    .main .session{
        display: inline-block;
    }
  }
  @media screen and (min-width: 1000px) {
    .bdy{
        padding: 0 4.9em;
    }
  }
</style>