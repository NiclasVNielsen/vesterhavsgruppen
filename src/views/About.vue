<template>
  <div class="about">
    about
  </div>    
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'

export default {
  name: 'About',
  components: {
    bottom
  }
}
</script>
