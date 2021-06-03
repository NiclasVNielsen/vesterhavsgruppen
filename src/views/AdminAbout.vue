<template>
    <topping/>
    <div class="aboutpage">
        <form @submit.prevent="update">
            <h3>
                Om os
            </h3>
            <div>
                <label for="title">
                    Titel
                </label>
                <input v-model="form.title" type="text" required />
                <textarea v-model="form.titletext" type="text" required />
            </div>
            <div>
                <label for="kontakt">
                    Kontakt
                </label>
                <input v-model="form.kontakt" type="text" required />
            </div>
            <div>
                <label for="boxone">
                    Box 1
                </label>
                <input v-model="form.boxone" type="text" required />
                <input v-model="form.boxonenavn" type="text" required />
                <input v-model="form.boxonetlf" type="text" required />
                <input v-model="form.boxoneemail" type="text" required />
            </div>
            <div>
                <label for="boxtwo">
                    Box 2
                </label>
                <input v-model="form.boxtwo" type="text" required />
                <input v-model="form.boxtwonavn" type="text" required />
                <input v-model="form.boxtwotlf" type="text" required />
                <input v-model="form.boxtwoemail" type="text" required />
            </div>
            <div>
                <label for="boxthree">
                    Box 3
                </label>
                <input v-model="form.boxthree" type="text" required />
                <input v-model="form.boxthreenavn" type="text" required />
                <input v-model="form.boxthreetlf" type="text" required />
                <input v-model="form.boxthreeemail" type="text" required />
            </div>
            <div>
                <label for="sponsor">
                    Sponsor
                </label>
                <input v-model="form.sponsor" type="text" required />
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
            form.title = aboutpage.title
            form.titletext = aboutpage.titletext
            form.kontakt = aboutpage.kontakt
            form.boxone = aboutpage.boxone
            form.boxonenavn = aboutpage.boxonenavn
            form.boxonetlf = aboutpage.boxonetlf
            form.boxoneemail = aboutpage.boxoneemail
            form.boxtwo = aboutpage.boxtwo
            form.boxtwonavn = aboutpage.boxtwonavn
            form.boxtwotlf = aboutpage.boxtwotlf
            form.boxtwoemail = aboutpage.boxtwoemail
            form.boxthree = aboutpage.boxthree
            form.boxthreenavn = aboutpage.boxthreenavn
            form.boxthreetlf = aboutpage.boxthreetlf
            form.boxthreeemail = aboutpage.boxthreeemail
            form.sponsor = aboutpage.sponsor
            form.sponsortext = aboutpage.sponsortext
        })

        const form = reactive({ 
            
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

    label{
        display: block;
        margin-top: 50px;
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