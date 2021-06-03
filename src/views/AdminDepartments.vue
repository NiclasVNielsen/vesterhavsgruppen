<template>
    <topping/>
    <div class="afdelinger">
        <form @submit.prevent="update">
            <div>
                <h3 class="title">
                    Afdelinger
                </h3>
                <h3>
                    Micro
                </h3>
                <label for="oneklasse">
                    Klasse
                </label>
                <input v-model="form.oneklasse" type="text" required />
                <label for="onedag">
                    Dag
                </label>
                <input v-model="form.onedag" type="text" required />
                <label for="onetid">
                    Tid
                </label>
                <input v-model="form.onetid" type="text" required />
                <label for="one">
                    Text
                </label>
                <textarea v-model="form.one" type="text" required />
                <label for="oneleder">
                    Leder
                </label>
                <input v-model="form.oneleder" type="text" required />
                <label for="oneemail">
                    Email
                </label>
                <input v-model="form.oneemail" type="text" required />
            </div>
            <div>
                <h3>
                    Mini
                </h3>
                <label for="twoklasse">
                    Klasse
                </label>
                <input v-model="form.twoklasse" type="text" required />
                <label for="twodag">
                    Dag
                </label>
                <input v-model="form.twodag" type="text" required />
                <label for="twotid">
                    Tid
                </label>
                <input v-model="form.twotid" type="text" required />
                <label for="two">
                    Text
                </label>
                <textarea v-model="form.two" type="text" required />
                <label for="twoleder">
                    Leder
                </label>
                <input v-model="form.twoleder" type="text" required />
                <label for="twoemail">
                    Email
                </label>
                <input v-model="form.twoemail" type="text" required />
            </div>
            <div>
                <h3>
                    Junior
                </h3>
                <label for="threeklasse">
                    Klasse
                </label>
                <input v-model="form.threeklasse" type="text" required />
                <label for="threedag">
                    Dag
                </label>
                <input v-model="form.threedag" type="text" required />
                <label for="threetid">
                    Tid
                </label>
                <input v-model="form.threetid" type="text" required />
                <label for="three">
                    Text
                </label>
                <textarea v-model="form.three" type="text" required />
                <label for="threeleder">
                    Leder
                </label>
                <input v-model="form.threeleder" type="text" required />
                <label for="threeemail">
                    Email
                </label>
                <input v-model="form.threeemail" type="text" required />
            </div>
            <div>
                <h3>
                    Trop
                </h3>
                <label for="fourklasse">
                    Klasse
                </label>
                <input v-model="form.fourklasse" type="text" required />
                <label for="fourdag">
                    Dag
                </label>
                <input v-model="form.fourdag" type="text" required />
                <label for="fourtid">
                    Tid
                </label>
                <input v-model="form.fourtid" type="text" required />
                <label for="four">
                    Text
                </label>
                <textarea v-model="form.four" type="text" required />
                <label for="fourleder">
                    Leder
                </label>
                <input v-model="form.fourleder" type="text" required />
                <label for="fouremail">
                    Email
                </label>
                <input v-model="form.fouremail" type="text" required />
            </div>
            <div>
                <h3>
                    Klan
                </h3>
                <label for="fiveklasse">
                    Klasse
                </label>
                <input v-model="form.fiveklasse" type="text" required />
                <label for="fivedag">
                    Dag
                </label>
                <input v-model="form.fivedag" type="text" required />
                <label for="fivetid">
                    Tid
                </label>
                <input v-model="form.fivetid" type="text" required />
                <label for="five">
                    Text
                </label>
                <textarea v-model="form.five" type="text" required />
                <label for="fiveleder">
                    Leder
                </label>
                <input v-model="form.fiveleder" type="text" required />
                <label for="fiveemail">
                    Email
                </label>
                <input v-model="form.fiveemail" type="text" required />
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

            form.oneleder = departmentspage.oneleder
            form.twoleder = departmentspage.twoleder
            form.threeleder = departmentspage.threeleder
            form.fourleder = departmentspage.fourleder
            form.fiveleder = departmentspage.fiveleder

            form.oneemail = departmentspage.oneemail
            form.twoemail = departmentspage.twoemail
            form.threeemail = departmentspage.threeemail
            form.fouremail = departmentspage.fouremail
            form.fiveemail = departmentspage.fiveemail
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

    input, textarea{
        display: block;
        margin-bottom: 20px;
    }

    input{
        width: 15em;
    }

    textarea{
        resize: vertical;
        width: 100%;
        margin-bottom: 50px;
        height: 8em;
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
