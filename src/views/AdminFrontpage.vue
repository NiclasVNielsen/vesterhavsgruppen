<template>
    <topping/>
    <div class="frontpage">
        <h3>
            Forsiden
        </h3>
        <form @submit.prevent="update">
            <div>
                <label for="one">
                    One
                </label>
                <textarea v-model="form.one" type="text" required />
            </div>
            <div>
                <label for="two">
                    Two
                </label>
                <textarea v-model="form.two" type="text" required />
            </div>
            <div>
                <label for="three">
                    Three
                </label>
                <textarea v-model="form.three" type="text" required />
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
import { getFrontpage, updateFrontpage } from '../main'


export default {
    setup() {
        const Logout = () => {
            firebase
            .auth()
            .signOut()
            .catch(err => alert(err.message))
        }

        onMounted(async () => {
            const frontpage = await getFrontpage()
            form.one = frontpage.one
            form.two = frontpage.two
            form.three = frontpage.three
        })

        const form = reactive({ one: '', two: '', three: '' })

        const update = async () => {
            await updateFrontpage({...form})
        }

        return { 
            Logout,
            form, 
            update
        }
    },

    name: 'frontpage',
    components: {
        topping,
        bottom
    }
}
</script>
