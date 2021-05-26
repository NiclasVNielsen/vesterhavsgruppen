<template>
  <topping/>
  <div class="home">
    <section class="front-img">
        <div>
            <h1>
                {{ form.title }}
            </h1>
            <p>
                {{ form.text }}
            </p>
        </div>
    </section>
    <div class="stripes"/>
    <section class="infoboxes">
        <h2>
            I Vesterhavsgruppen er der plads til alle
        </h2>
        <div>
            <div class="infobox">
                <div>
                    <span class="material-icons">
                        groups
                    </span>
                </div>
                <div>
                    <h3>
                        {{ form.onetitle }}
                    </h3>
                    <p>
                        {{ form.one }}
                    </p>
                </div>
            </div>
            <div class="infobox">
                <div>
                    <span class="material-icons">
                        volunteer_activism
                    </span>
                </div>
                <div>
                    <h3>
                        {{ form.twotitle }}
                    </h3>
                    <p>
                        {{ form.two }}
                    </p>
                </div>
            </div>
            <div class="infobox">
                <div>
                    <span class="material-icons">
                        local_florist
                    </span>
                </div>
                <div>
                    <h3>
                        {{ form.threetitle }}
                    </h3>
                    <p>
                        {{ form.three }}
                    </p>
                </div>
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
import { getFrontpage } from '../main'


export default {
    setup() {
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

        const form = reactive({
          
        })

        return { 
            form
        }
    },

    name: 'Home',
    components: {
        topping,
        bottom
    }
}
</script>

<style lang="scss" scoped>
    .front-img{
        background: url('../assets/images/frontimage.jpg');
        background-size: cover;
        background-position-y: 50%;
        min-height: 560px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5em;
        text-shadow: 0px 3px 3px rgba(#000000, 0.26);
        > div{
            font-family: AlfaSlabOne;
            color: var(--whiteshade1);
            width: 809px;
            max-width: 100%;
            > h1{
                font-size: 40px;
            }
            > p{
                font-size: 32px;
            }
        }
    }
    .infoboxes{
        max-width: 1386px;
        margin: 0 auto;
        padding-top: 35px;
        > h2{
            text-align: center;
            font-size: 32px;
            font-family: AlfaSlabOne, sans-serif;
        }
        > div{
            margin-top: 48px;
            display: flex;
            justify-content: space-between;
            > .infobox{
                width: 390px;
                font-family: proxima-nova,sans-serif;
                font-weight: 400;
                font-style: normal;
                display: flex;
                div:first-of-type{
                    margin-right: 10px;
                }
                h3{
                    font-size: 24px;
                    font-weight: 700;
                }
            }
        }
    }
</style>