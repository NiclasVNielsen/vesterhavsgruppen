<template>
  <topping/>
  <div class="kalender">
    Kalender
  </div>    
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

export default {
  name: 'Kalender',
  components: {
    topping,
    bottom
  }
}
</script>
