<template>
  <topping/>
  <div class="omos">
    Om os
  </div>    
  <bottom/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

export default {
  name: 'Omos',
  components: {
    topping,
    bottom
  }
}
</script>
