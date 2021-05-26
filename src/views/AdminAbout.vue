<template>
    <topping/>
    <div class="aboutpage">
        <h3>
            Om os
        </h3>
        <form @submit.prevent="update">
            <div>
                <label for="title">
                    Titel
                </label>
                <textarea v-model="form.title" type="text" required />
                <label for="titletext">
                    Titel tekst
                </label>
                <textarea v-model="form.titletext" type="text" required />
            </div>
            <div>
                <label for="kontakt">
                    Kontakt
                </label>
                <textarea v-model="form.kontakt" type="text" required />
            </div>
            <div>
                <label for="boxone">
                    Box 1 titel
                </label>
                <textarea v-model="form.boxone" type="text" required />
                <label for="boxonenavn">
                    Box 1 navn
                </label>
                <textarea v-model="form.boxonenavn" type="text" required />
                <label for="boxonetlf">
                    Box 1 tlf
                </label>
                <textarea v-model="form.boxonetlf" type="text" required />
                <label for="boxoneemail">
                    Box 1 email
                </label>
                <textarea v-model="form.boxoneemail" type="text" required />
            </div>
            <div>
                <label for="boxtwo">
                    Box 2 titel
                </label>
                <textarea v-model="form.boxtwo" type="text" required />
                <label for="boxtwonavn">
                    Box 2 navn
                </label>
                <textarea v-model="form.boxtwonavn" type="text" required />
                <label for="boxtwotlf">
                    Box 2 tlf
                </label>
                <textarea v-model="form.boxtwotlf" type="text" required />
                <label for="boxtwoemail">
                    Box 2 email
                </label>
                <textarea v-model="form.boxtwoemail" type="text" required />
            </div>
            <div>
                <label for="boxthree">
                    Box 3 titel
                </label>
                <textarea v-model="form.boxthree" type="text" required />
                <label for="boxthreenavn">
                    Box 3 navn
                </label>
                <textarea v-model="form.boxthreenavn" type="text" required />
                <label for="boxthreetlf">
                    Box 3 tlf
                </label>
                <textarea v-model="form.boxthreetlf" type="text" required />
                <label for="boxthreeemail">
                    Box 3 email
                </label>
                <textarea v-model="form.boxthreeemail" type="text" required />
            </div>
            <div>
                <label for="sponsor">
                    Sponsor
                </label>
                <textarea v-model="form.sponsor" type="text" required />
                <label for="sponsortext">
                    Sponsor tekst
                </label>
                <textarea v-model="form.sponsortext" type="text" required />
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
import { getAboutpage, updateAboutpage } from '../main'


export default {
    setup() {
        const Logout = () => {
            firebase
            .auth()
            .signOut()
            .catch(err => alert(err.message))
        }

        onMounted(async () => {
            const aboutpage = await getAboutpage()
            form.one = aboutpage.one
            form.two = aboutpage.two
            form.three = aboutpage.three
        })

        const form = reactive({ 
            title: '', 
            titletext: '', 
            kontakt: '',
            boxone: '', 
            boxonenavn: '', 
            boxtwotlf: '', 
            boxoneemail: '' /* DO MORE */
        })

        const update = async () => {
            await updateAboutpage({...form})
        }

        return { 
            Logout,
            form, 
            update
        }
    },

    name: 'aboutpage',
    components: {
        topping,
        bottom
    }
}
</script>
