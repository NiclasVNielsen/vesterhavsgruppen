<template>
  <topping/>
  <div class="tilmelding">
    <section class="container">
        <div class="col4 pushcol2">
            <h2>
                {{ form.onetitle }}
            </h2>
            <p>
                {{ form.onetekst }}
            </p>
            <div>
                <div class="col6">
                    {{ form.onestaff }} <br>
                    {{ form.onetlf }}
                </div>
                <div class="col6">
                    {{ form.twostaff }} <br>
                    {{ form.twotlf }}
                </div>
                <p>
                    E-mail: {{ form.email }}
                </p>
            </div>
            <h2>
                {{ form.twotitle }}
            </h2>
            <p>
                {{ form.twotekst }}
            </p>
        </div>
        <div class="col4">
            <div>
                <img src="../assets/images/emblems.jpg" alt="">
            </div>
            <div>
                <h2>
                    {{ form.threetitle }}
                </h2>
                <p>
                    {{ form.threetekst }}
                </p>
                <a href="">
                    Bliv Spejder
                </a>
            </div>
        </div>
    </section>
  </div>
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
