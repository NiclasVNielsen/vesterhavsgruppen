<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth()
      firebase.auth().onAuthStateChanged((user) => {
        if(!user && router.currentRoute.value.fullPath.split('/')[1] == 'admin') {
          router.replace('/admin/login')
        } else if (route.path == '/admin/login'){
          router.replace('/admin/calendar')
        }
      })
    })
  }
}
</script>

<style lang="scss">
  :root{
    --prim: #003366;
    --second: #008700;
    --whiteshade1: #FFFFFF;
    --whiteshade2: #E8E8E8;
    --whiteshade3: #F5F5F5;
    --black: #000;
  }

  /* 
  bold
  font-family: proxima-nova,sans-serif;
  font-weight: 700;
  font-style: normal;

  regular
  font-family: proxima-nova,sans-serif;
  font-weight: 400;
  font-style: normal;
  */

  *{
    font-size: 18px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  .col1{
    width: 8.333%;
  }.col2{
    width: 16.666%;
  }.col3{
    width: 25%;
  }.col4{
    width: 33.333%;
  }.col5{
    width: 41.666%;
  }.col6{
    width: 50%;
  }.col7{
    width: 58.333%;
  }.col8{
    width: 66.666%;
  }.col9{
    width: 75%;
  }.col10{
    width: 83.333%;
  }.col11{
    width: 91.666%;
  }.col12{
    width: 100%;
  }

  .pushcol1{
    margin-left: 8.333%;
  }.pushcol2{
    margin-left: 16.666%;
  }.pushcol3{
    margin-left: 25%;
  }.pushcol4{
    margin-left: 33.333%;
  }.pushcol5{
    margin-left: 41.666%;
  }.pushcol6{
    margin-left: 50%;
  }.pushcol7{
    margin-left: 58.333%;
  }.pushcol8{
    margin-left: 66.666%;
  }.pushcol9{
    margin-left: 75%;
  }.pushcol10{
    margin-left: 83.333%;
  }.pushcol11{
    margin-left: 91.666%;
  }

  img{
    width: 100%;
    height: auto;
  }

  .wrapper{
    max-width: 1920px;
    margin: 0 auto;
  }

  .stripes{
    position: absolute;
    width: 100%;
    height: 10px;
    background: repeating-linear-gradient(-30deg,
      var(--second),
      var(--second) 10px,
      var(--prim) 10px,
      var(--prim) 25px);
    
    &.top{
      top: 0;
      transform: translateY(-50%);
    }
    &.bot{
      bottom: 0;
      transform: translateY(50%);
    }
  }
</style>