<template>
  <div class="home">
    home
  </div>
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'

export default {
  name: 'Home',
  components: {
    bottom
  },
  methods: {

  }
}
</script>
