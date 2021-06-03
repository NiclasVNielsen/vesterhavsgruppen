<template>
    <topping/>
    <div class="frontpage">
        <form @submit.prevent="update">
            <h3>
                Forsiden
            </h3>
            <div>
                <input v-model="form.title" type="text" required />
                <textarea v-model="form.text" type="text" required />
            </div>
            <div>
                <input v-model="form.onetitle" type="text" required />
                <textarea v-model="form.one" type="text" required />
            </div>
            <div>
                <input v-model="form.twotitle" type="text" required />
                <textarea v-model="form.two" type="text" required />
            </div>
            <div>
                <input v-model="form.threetitle" type="text" required />
                <textarea v-model="form.three" type="text" required />
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
            form.title = frontpage.title
            form.text = frontpage.text
            form.onetitle = frontpage.onetitle
            form.one = frontpage.one
            form.twotitle = frontpage.twotitle
            form.two = frontpage.two
            form.threetitle = frontpage.threetitle
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
<style lang="scss" scoped>
    form{
        width: 1000px;
        margin: 50px auto;
    }

    h3{
        margin-bottom: 20px;
    }

    input, textarea{
        display: block;
    }

    input{
        width: 15em;
    }

    textarea{
        resize: vertical;
        width: 100%;
        margin-bottom: 50px;
        height: 6em;
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