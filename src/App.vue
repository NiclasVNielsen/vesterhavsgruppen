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
    --primshade2: #0D3F72;
    --primshade3: #082D53;
    --second: #008700;
    --whiteshade1: #FFFFFF;
    --whiteshade2: #E8E8E8;
    --whiteshade3: #F5F5F5;
    --black: #000;

    scroll-behavior: smooth;
    font-family: proxima-nova,sans-serif;
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

  @media screen and (max-width: 800px) {
    .col1,.col2,.col3,.col4,.col5,.col6,.col7,.col8,.col9,.col10,.col11,.col12{
      width: 100%;
      padding: 0 .5em;
    }

    .pushcol1,.pushcol2,.pushcol3,.pushcol4,.pushcol5,.pushcol6,.pushcol7,.pushcol8,.pushcol9,.pushcol10,.pushcol11{
      margin-left: 0%;
    }
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
    width: 100%;
    height: 10px;
    background: repeating-linear-gradient(-30deg,
      var(--second),
      var(--second) 10px,
      var(--prim) 10px,
      var(--prim) 25px
    );
  }

  @font-face {
    font-family: AlfaSlabOne;
    src: url('./assets/fonts/AlfaSlabOne-Regular.ttf');
  }
</style>