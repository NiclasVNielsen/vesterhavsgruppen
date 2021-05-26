<template>
    <router-link to='/admin/frontpage'>Forside</router-link>
    <router-link to='/admin/calendar'>Kalender</router-link>
    <button class="logout" @click="Logout">Logout</button>
</template>

<script>

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
}
</script>