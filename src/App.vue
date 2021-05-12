<template>
  <nav>
    <router-link class="subtleLink" to="/">Forside</router-link>
    <router-link class="subtleLink" to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  /* methods: {

  },
  mounted: () => {
    const header = document.getElementById('header');
    const burger = document.getElementById('burgerbar');
    const sidenav = document.getElementById('sidenav');

    window.addEventListener('scroll', () => {
      if(window.scrollY <= 0){
        header.classList.remove('burger');
        if(sidenav.classList == "on"){
          sidenav.classList.remove('on')
          burger.classList.remove('on')
          burger.classList.add('off')
        }
      }else{
        header.classList.add('burger');
      }
    })

    let offCheck = 1;
    burger.addEventListener('click', () => {
      sidenav.classList.toggle('on')
      burger.classList.toggle('on')
      if(offCheck == 1){
        offCheck = 0;
      }else{
        burger.classList.toggle('off')
      }
    })
  }   */
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