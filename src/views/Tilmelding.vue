<template>
  <topping/>
  <div class="tilmelding">
    Tilmelding
  </div>    
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

export default {
  name: 'Tilmelding',
  components: {
    topping,
    bottom
  }
}
</script>
