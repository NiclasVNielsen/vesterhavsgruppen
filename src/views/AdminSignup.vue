<template>
    <topping/>
    <div class="signuppage">
        <form @submit.prevent="update">
            <h3>
                Tilmelding
            </h3>
            <div>
                <label for="onestaff">
                    Leder 1
                </label>
                <input v-model="form.onestaff" type="text" required />
                <label for="onetlf">
                    Leder 1 tlf
                </label>
                <input v-model="form.onetlf" type="text" required />
                <label for="twostaff">
                    Leder 2
                </label>
                <input v-model="form.twostaff" type="text" required />
                <label for="twotlf">
                    Leder 2 tlf
                </label>
                <input v-model="form.twotlf" type="text" required />
                <label for="twotlf">
                    Kontakt email
                </label>
                <input v-model="form.email" type="text" required />
            </div>
            <div>
                <input v-model="form.onetitle" type="text" required />
                <textarea v-model="form.onetekst" type="text" required />
            </div>
            <div>
                <input v-model="form.twotitle" type="text" required />
                <textarea v-model="form.twotekst" type="text" required />
            </div>
            <div>
                <input v-model="form.threetitle" type="text" required />
                <textarea v-model="form.threetekst" type="text" required />
            </div>
            <button type="submit">
                Updater
            </button>
        </form>
    </div>
    <bottom/>
</template>

<script>
import topping from '@/components/topping.vue'
import bottom from '@/components/bottom.vue'

import firebase from 'firebase'
import { reactive, onMounted } from 'vue'
import { getSignuppage, updateSignuppage } from '../main'


export default {
    setup() {
        const Logout = () => {
            firebase
            .auth()
            .signOut()
            .catch(err => alert(err.message))
        }

        onMounted(async () => {
            const signuppage = await getSignuppage()
            form.onetitle = signuppage.onetitle
            form.onetekst = signuppage.onetekst
            form.onestaff = signuppage.onestaff
            form.onetlf = signuppage.onetlf
            form.twostaff = signuppage.twostaff
            form.twotlf = signuppage.twotlf
            form.email = signuppage.email
            form.twotitle = signuppage.twotitle
            form.twotekst = signuppage.twotekst
            form.threetitle = signuppage.threetitle
            form.threetekst = signuppage.threetekst
        })

        const form = reactive({ 
            
        })

        const update = async () => {
            await updateSignuppage({...form})
        }

        return { 
            Logout,
            form, 
            update
        }
    },

    name: 'signuppage',
    components: {
        topping,
        bottom
    }
}
</script>
<style lang="scss" scoped>
    form{
        width: 1000px;
        margin: 50px auto;
    }

    h3{
        margin-top: 50px;
        margin-bottom: 20px;
        font-size: 32px;
        &.title{
            font-size: 18px;
        }
        &:nth-of-type(2){
            margin-top: 20px;
        }
    }

    div{
        margin-bottom: 50px;
    }

    label{
        display: block;
    }

    input, textarea{
        display: block;
        margin-bottom: 20px;
    }

    input{
        width: 30em;
    }

    textarea{
        resize: vertical;
        width: 100%;
        margin-bottom: 50px;
        height: 9em;
        &:last-of-type{
            margin-bottom: 20px;
        }
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
    }
</style>