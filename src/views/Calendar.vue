<template>
    <topping/>
    <div class="calendar">
        Kalender
    </div>
    <!-- <userCreate/>
    <userList/> -->
    <bottom msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import topping from '@/components/topping.vue'
import bottom from '@/components/bottom.vue'
//import userCreate from '@/components/UserCreate.vue'
//import userList from '@/components/UserList.vue'

import firebase from 'firebase'

export default {
  setup() {
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .catch(err => alert(err.message))
    }

    return { 
      Logout
    }
  },

  name: 'calendar',
  components: {
    topping,
    bottom
  },
  methods: {

  }
}
</script>
