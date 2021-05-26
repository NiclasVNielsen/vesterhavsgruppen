<template>
    <topping/>
    <div class="practicalpage">
        <h3>
            Praktisk
        </h3>
        <form @submit.prevent="update">
            <div>
                <label for="hyttetitle">
                    Hytte titel
                </label>
                <textarea v-model="form.hyttetitle" type="text" required />
                <label for="hyttetext">
                    Hytte tekst
                </label>
                <textarea v-model="form.hyttetext" type="text" required />
            </div>
            <div>
                <label for="uniformtitle">
                    Uniform titel
                </label>
                <textarea v-model="form.uniformtitle" type="text" required />
                <label for="uniformtext">
                    Uniform tekst
                </label>
                <textarea v-model="form.uniformtext" type="text" required />
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
import { getPracticalpage, updatePracticalpage } from '../main'


export default {
    setup() {
        const Logout = () => {
            firebase
            .auth()
            .signOut()
            .catch(err => alert(err.message))
        }

        onMounted(async () => {
            const practicalpage = await getPracticalpage()
            form.hyttetitle = practicalpage.hyttetitle
            form.hyttetext = practicalpage.hyttetext
            form.uniformtitle = practicalpage.uniformtitle
            form.uniformtext = practicalpage.uniformtext
        })

        const form = reactive({ 
            
        })

        const update = async () => {
            await updatePracticalpage({...form})
        }

        return { 
            Logout,
            form, 
            update
        }
    },

    name: 'practicalpage',
    components: {
        topping,
        bottom
    }
}
</script>
