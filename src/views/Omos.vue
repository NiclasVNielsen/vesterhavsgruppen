<template>
  <topping/>
  <div class="omos">
    Om os
  </div>
  {{ form.title }}
  <bottom/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

import { reactive, onMounted } from 'vue'
import { getAboutpage } from '../main'


export default {
    setup() {
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

        return { 
            form
        }
    },

    name: 'Omos',
    components: {
        topping,
        bottom
    }
}
</script>
