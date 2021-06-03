<template>
    <topping/>
    <div class="practicalpage">
        <form @submit.prevent="update">
            <h3>
                Praktisk
            </h3>
            <div>
                <label for="hyttetitle" class="title">
                    Hytte
                </label>
                <input v-model="form.hyttetitle" type="text" required />
                <textarea v-model="form.hyttetext" type="text" required />
            </div>
            <div>
                <label for="uniformtitle">
                    Uniform
                </label>
                <input v-model="form.uniformtitle" type="text" required />
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
<style lang="scss" scoped>
    form{
        width: 1000px;
        margin: 50px auto;
    }

    h3{
        margin-top: 50px;
    }

    .title{
        margin-top: 20px !important;
    }

    label{
        display: block;
        margin-top: 50px;
        font-size: 32px;
        font-weight: 700;
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
        height: 12em;
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