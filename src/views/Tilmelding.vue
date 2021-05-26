<template>
  <topping/>
  <div class="tilmelding">
    Tilmelding
  </div>
  {{ form.onetitle }}
  <bottom/>
</template>

<script>
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

import { reactive, onMounted } from 'vue'
import { getSignuppage } from '../main'


export default {
    setup() {
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

        return { 
            form
        }
    },

    name: 'Tilmelding',
    components: {
        topping,
        bottom
    }
}
</script>
