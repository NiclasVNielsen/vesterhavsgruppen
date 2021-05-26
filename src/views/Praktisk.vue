<template>
  <topping/>
  <div class="praktisk">
    Praktisk
  </div>    
  <bottom/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

export default {
  name: 'Praktisk',
  components: {
    bottom,
    topping
  }
}
</script>
