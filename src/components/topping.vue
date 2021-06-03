<template>
  <header>
    <nav>
      <router-link to='/admin/frontpage'>Forside</router-link>
      <router-link to='/admin/calendar'>Kalender</router-link>
      <router-link to='/admin/departments'>Afdelinger</router-link>
      <router-link to='/admin/about'>Om os</router-link>
      <router-link to='/admin/practical'>Praktisk</router-link>
      <router-link to='/admin/signup'>Tilmelding</router-link>
      <button class="logout" @click="Logout">Logout</button>
    </nav>
      <div class="stripes"/>
  </header>
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

<style lang="scss" scoped>
  header{
    height: 80px;
    font-size: 13px;
    font-family: proxima-nova, sans-serif;
    font-weight: 700;
    font-style: normal;
    background: var(--whiteshade1);
    position: relative;
    nav{
      height: 70px;
      display: flex;
      align-items: center;
      padding: 0 5em;
      a{
        color: var(--black);
        text-decoration: none;
        margin-right: 1.6em;
      }
      button{
        display: flex;
        justify-content: right;
        width: 120px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--prim);
        color: var(--whiteshade1);
        border-radius: 10px;
        border: none;
        font-size: .9em;
        position: absolute;
        right: 5em;
      }
    }
  }
</style>