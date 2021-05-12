<template>
  <div class="home">
    home
  </div>
  <userCreate/>
  <userList/>
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import userCreate from '@/components/UserCreate.vue'
import userList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: {
    bottom,
    userCreate,
    userList
  },
  methods: {

  }
}
</script>
