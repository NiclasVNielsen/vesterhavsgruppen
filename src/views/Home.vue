<template>
  <topping/>
  <div class="home">
    home
  </div>
  <userCreate/>
  <userList/>
  <bottom/>
</template>

<script>
// @ is an alias to /src
import topping from '@/components/topping.vue'
import bottom from '@/components/bottom.vue'
import userCreate from '@/components/UserCreate.vue'
import userList from '@/components/UserList.vue'


export default {
  name: 'Home',
  components: {
    topping,
    bottom,
    userCreate,
    userList
  },
  methods: {

  }
}
</script>
