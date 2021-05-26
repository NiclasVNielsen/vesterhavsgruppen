<template>
    <topping/>
    <div class="signuppage">
        <h3>
            Tilmelding
        </h3>
        <form @submit.prevent="update">
            <div>
                <label for="onetitle">
                    Titel 1
                </label>
                <textarea v-model="form.onetitle" type="text" required />
                <label for="onetekst">
                    Tekst 1
                </label>
                <textarea v-model="form.onetekst" type="text" required />
                <label for="onestaff">
                    Leder 1
                </label>
                <textarea v-model="form.onestaff" type="text" required />
                <label for="onetlf">
                    Leder 1 tlf
                </label>
                <textarea v-model="form.onetlf" type="text" required />
                <label for="twostaff">
                    Leder 2
                </label>
                <textarea v-model="form.twostaff" type="text" required />
                <label for="twotlf">
                    Leder 2 tlf
                </label>
                <textarea v-model="form.twotlf" type="text" required />
                <label for="twotlf">
                    Kontakt email
                </label>
                <textarea v-model="form.email" type="text" required />
            </div>
            <div>
                <label for="twotitle">
                    Titel 2
                </label>
                <textarea v-model="form.twotitle" type="text" required />
                <label for="twotekst">
                    Tekst 2
                </label>
                <textarea v-model="form.twotekst" type="text" required />
            </div>
            <div>
                <label for="threetitle">
                    Titel 3
                </label>
                <textarea v-model="form.threetitle" type="text" required />
                <label for="threetekst">
                    Tekst 3
                </label>
                <textarea v-model="form.threetekst" type="text" required />
            </div>
            <button type="submit">
                Update
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
