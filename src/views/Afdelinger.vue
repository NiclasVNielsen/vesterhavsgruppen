<template>
  <topping/>
  <div class="afdelinger">
    Afdelinger
  </div>
  {{ form.one }}
  <bottom/>
</template>

<script>
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

import { reactive, onMounted } from 'vue'
import { getDepartmentspage } from '../main'


export default {
    setup() {
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

        return { 
            form
        }
    },

    name: 'Afdelinger',
    components: {
        topping,
        bottom
    }
}
</script>

