<template>
  <topping/>
  <div class="tilmelding">
    <section class="container">
        <div class="col4 pushcol2">
            <h2>
                Prøv spejderlivet
            </h2>
            <p>
                Er du ikke helt sikker om spejder er noget for dig? Og kunne du godt tænke dig at afprøve det før du melder dig ind? Så er der også mulighed for det.
                Alt du skal gøre er bare at kontakte afdelingslederen fra den afdeling der passer din alder og så kan du helt gratis komme og prøve at være med til en af vores spejdermøder uden du er bundet. 
            </p>
            <div>
                <div class="col6">
                    Helén 
                    21 67 73 57
                </div>
                <div class="col6">
                    Steffen
                    40 29 26 71
                </div>
                <p>
                    E-mail: {kontakt@vesterhavsgruppen.dk}
                </p>
            </div>
            <h2>
                Omkostninger
            </h2>
            <p>
                Hvis du ønsker at blive spejder hos Vesterhavsgruppen koster det 200 kr. at indmelde sig. Indmeldelsesgebyret dækker også over en T-shirt, et tørklæde og vores arbejdsstofbog.
                Betalingen opkræves der efter i 2 halvårlige rater, henholdsvis i Januar og August, hvor kontingentet er på 850 kr. Årligt. Du kan betale via giro eller bank og yderliger betaling for lejrture o.l sker direkte til afdelingernes ledere.
            </p>
        </div>
        <div class="col4">
            <div>
                <img src="../assets/images/emblems.jpg" alt="">
            </div>
            <div>
                <h2>
                    Bliv spejder
                </h2>
                <p>
                    Hvis du allerede nu ved, at spejder er lige noget for dig, kan du gå ind og tillmelde dig direkte på DDS hjemmeside.
                </p>
                <a href="">
                    Bliv Spejder
                </a>
            </div>
        </div>
    </section>
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
<style lang="scss" scoped>
    .container{
        display: flex;
    }
</style>
