<template>
    <topping/>
    <calendarCreate/>
    <calendarList/>
    <bottom/>
</template>

<script>
// @ is an alias to /src
import topping from '@/components/topping.vue'
import bottom from '@/components/bottom.vue'
import calendarCreate from '@/components/CalendarCreate.vue'
import calendarList from '@/components/CalendarList.vue'

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
    bottom,
    calendarCreate,
    calendarList
  },
  methods: {

  }
}
</script>
