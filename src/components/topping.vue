<template>
    <router-link to='/admin/frontpage'>Forside</router-link>
    <router-link to='/admin/calendar'>Kalender</router-link>
    <router-link to='/admin/departments'>Afdelinger</router-link>
    <router-link to='/admin/about'>Om os</router-link>
    <router-link to='/admin/practical'>Praktisk</router-link>
    <router-link to='/admin/signup'>Tilmelding</router-link>
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