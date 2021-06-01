<template>
  <topping/>
  <div class="tilmelding">
    <section class="container">
        <div class="col4 pushcol2">
            <h2>
                {{ form.onetitle }}
            </h2>
            <p>
                {{ form.onetekst }} <br>
                &nbsp;
            </p>
            <div class="kontakt">
                <div class="container">
                    <div>
                        {{ form.onestaff }} <br>
                        {{ form.onetlf }}
                    </div>
                    <div>
                        {{ form.twostaff }} <br>
                        {{ form.twotlf }}
                    </div>
                </div>
                <p>
                    E-mail: <span>{{ form.email }}</span>
                </p>
            </div>
        </div>
        <div class="col4">
            <div>
                <img src="../assets/images/emblems.jpg" alt="">
            </div>
            
        </div>
    </section>
    <section class="container">
        <div class="col4 pushcol2">
            <h2>
                {{ form.twotitle }}
            </h2>
            <p>
                {{ form.twotekst }}
            </p>
        </div>
        <div class="col4">
            <h2>
                {{ form.threetitle }}
            </h2>
            <p>
                {{ form.threetekst }} <br>
                &nbsp;
            </p>
            <a class="signupButton" href="">
                Bliv Spejder
            </a>
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
    span{
        text-decoration: underline;
        color: var(--second);
    }

    h2{
        font-size: 32px;
    }

    p{
        padding-right: 1em;
    }

    .container{
        display: flex;
    }

    .tilmelding{
        padding-top: 50px;
        background: var(--whiteshade3);
        section{
            &:last-of-type{
                padding-bottom: 100px;
            }
        }
    }

    .kontakt{
        div, p{
            text-align: center;
        }
        > .container{
            justify-content: center;
            > div{
                &:last-of-type{
                    margin-left: 20px;
                    margin-bottom: 11px;
                }
            }
        }
    }

    .signupButton{
        max-width: 300px;
        height: 32px;
        display: flex;
        margin: 21px auto 0;
        justify-content: center;
        align-items: center;
        background: var(--whiteshade2);
        border-radius: 10px;
        text-decoration: none;
        color: var(--black);
        font-weight: 700;
    }
</style>
