<template>
  <topping/>
  <div class="afdelinger">
    Afdelinger
  </div>    
  <bottom/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

export default {
  name: 'Afdelinger',
  components: {
    topping,
    bottom
  }
}
</script>
