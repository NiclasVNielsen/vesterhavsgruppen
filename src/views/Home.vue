<template>
  <div class="home">
    home
  </div>
  <br>
  <button class="logout" @click="Logout">Logout</button>
  <br>
  <userCreate/>
  <userList/>
  <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import userCreate from '@/components/UserCreate.vue'
import userList from '@/components/UserList.vue'

import firebase from 'firebase'

export default {
  setup() {
    const Logout = () => {
      console.log('log out function')
      firebase
        .auth()
        .signOut()
        .then(() => console.log('Signed out'))
        .catch(err => alert(err.message))
    }

    return { 
      Logout
    }
  },

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
