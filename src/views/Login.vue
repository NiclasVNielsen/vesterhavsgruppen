<template>
    <div class="login">
        <div>
            <h1>
                Login
            </h1>
            <form @submit.prevent="Login">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Email" v-model="email">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" v-model="password">
                <button type="submit">Login</button>
            </form>
        </div>
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
    .login{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 32px;
        }
        >div{
            border: solid 1px var(--whiteshade3);
            box-shadow: 0 0 20px 10px var(--whiteshade3);
            border-radius: 10px;
            padding: 3em;
        }
        label{
            display: block;
            &:first-of-type{
                margin-top: 1em;
            }
        }
        input{
            display: block;
            margin-bottom: .5em;
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
            cursor: pointer;
        }
    }
</style>