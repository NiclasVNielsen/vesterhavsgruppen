<template>
    <topping/>
    <div class="afdelinger">
        <h3>
            Afdelinger
        </h3>
        <form @submit.prevent="update">
            <div>
                Micro
                <label for="oneklasse">
                    Klasse
                </label>
                <textarea v-model="form.oneklasse" type="text" required />
                <label for="onedag">
                    Dag
                </label>
                <textarea v-model="form.onedag" type="text" required />
                <label for="onetid">
                    Tid
                </label>
                <textarea v-model="form.onetid" type="text" required />
                <label for="one">
                    Text
                </label>
                <textarea v-model="form.one" type="text" required />
            </div>
            <div>
                Mini
                <label for="twoklasse">
                    Klasse
                </label>
                <textarea v-model="form.twoklasse" type="text" required />
                <label for="twodag">
                    Dag
                </label>
                <textarea v-model="form.twodag" type="text" required />
                <label for="twotid">
                    Tid
                </label>
                <textarea v-model="form.twotid" type="text" required />
                <label for="two">
                    Text
                </label>
                <textarea v-model="form.two" type="text" required />
            </div>
            <div>
                Junior
                <label for="threeklasse">
                    Klasse
                </label>
                <textarea v-model="form.threeklasse" type="text" required />
                <label for="threedag">
                    Dag
                </label>
                <textarea v-model="form.threedag" type="text" required />
                <label for="threetid">
                    Tid
                </label>
                <textarea v-model="form.threetid" type="text" required />
                <label for="three">
                    Text
                </label>
                <textarea v-model="form.three" type="text" required />
            </div>
            <div>
                Trop
                <label for="fourklasse">
                    Klasse
                </label>
                <textarea v-model="form.fourklasse" type="text" required />
                <label for="fourdag">
                    Dag
                </label>
                <textarea v-model="form.fourdag" type="text" required />
                <label for="fourtid">
                    Tid
                </label>
                <textarea v-model="form.fourtid" type="text" required />
                <label for="four">
                    Text
                </label>
                <textarea v-model="form.four" type="text" required />
            </div>
            <div>
                Klan
                <label for="fiveklasse">
                    Klasse
                </label>
                <textarea v-model="form.fiveklasse" type="text" required />
                <label for="fivedag">
                    Dag
                </label>
                <textarea v-model="form.fivedag" type="text" required />
                <label for="fivetid">
                    Tid
                </label>
                <textarea v-model="form.fivetid" type="text" required />
                <label for="five">
                    Text
                </label>
                <textarea v-model="form.five" type="text" required />
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
import { getDepartmentspage, updateDepartmentspage } from '../main'


export default {
    setup() {
        const Logout = () => {
            firebase
            .auth()
            .signOut()
            .catch(err => alert(err.message))
        }

        onMounted(async () => {
            const departmentspage = await getDepartmentspage()
            form.one = departmentspage.one
            form.two = departmentspage.two
            form.three = departmentspage.three
            form.four = departmentspage.four
            form.five = departmentspage.five
            form.oneklasse = departmentspage.oneklasse
            form.twoklasse = departmentspage.twoklasse
            form.threeklasse = departmentspage.threeklasse
            form.fourklasse = departmentspage.fourklasse
            form.fiveklasse = departmentspage.fiveklasse
            form.onedag = departmentspage.onedag
            form.twodag = departmentspage.twodag
            form.threedag = departmentspage.threedag
            form.fourdag = departmentspage.fourdag
            form.fivedag = departmentspage.fivedag
            form.onetid = departmentspage.onetid
            form.twotid = departmentspage.twotid
            form.threetid = departmentspage.threetid
            form.fourtid = departmentspage.fourtid
            form.fivetid = departmentspage.fivetid
        })

        const form = reactive({ 
            
        })

        const update = async () => {
            await updateDepartmentspage({...form})
        }

        return { 
            Logout,
            form, 
            update
        }
    },

    name: 'departmentspage',
    components: {
        topping,
        bottom
    }
}
</script>
