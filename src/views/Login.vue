<template>
    <div class="login">
        <h1>
            Login
        </h1>
        <form @submit.prevent="Login">
            <input type="text" name="email" id="email" placeholder="Email" v-model="email">
            <input type="password" name="password" id="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>

import { ref } from 'vue'
import firebase from 'firebase'

export default{
    setup() {
        const email = ref('')
        const password = ref('')

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .catch(err => alert(err.message))
        }
        return {
            Login,
            email,
            password
        }
    }
}

</script>
<style lang="scss" scoped>
    
</style>