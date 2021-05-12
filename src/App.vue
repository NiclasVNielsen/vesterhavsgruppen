<template>
  <nav>
    <router-link class="subtleLink" to="/">Forside</router-link>
    <router-link class="subtleLink" to="/about">About</router-link>
  </nav>
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
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/login')
        } else if (route.path == '/login'){
          router.replace('/')
        }
      })
    })
  }
}
</script>

<style lang="scss">
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

  img{
    width: 100%;
    height: auto;
  }
</style>