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
    <div class="waves">
        <svg xmlns="http://www.w3.org/2000/svg" width="4356" height="122.718" viewBox="0 0 4356 122.718">
            <path id="Path_665" data-name="Path 665" d="M8389.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L8244.69-626l-14.971,12.41a90.017,90.017,0,0,1-114.86,0L8099.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L7810.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7665.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,7621-597.65a89.991,89.991,0,0,1-86.33-15.94L7519.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7374.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L7230.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L7085.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6940.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6795.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6650.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L6361.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6216.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6071.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5926.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L5637.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5492.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,5448-597.65a89.991,89.991,0,0,1-86.33-15.94L5346.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5201.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L5057.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L4912.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4767.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L4622.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4477.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L4188.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4043.5-626v112.718h4346Z" transform="translate(-4038.5 631)" fill="#e8e8e8" stroke="#e8e8e8" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="4356" height="122.718" viewBox="0 0 4356 122.718">
            <path id="Path_666" data-name="Path 666" d="M8389.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L8244.69-626l-14.971,12.41a90.017,90.017,0,0,1-114.86,0L8099.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L7810.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7665.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,7621-597.65a89.991,89.991,0,0,1-86.33-15.94L7519.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7374.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L7230.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L7085.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6940.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6795.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6650.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L6361.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6216.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6071.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5926.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L5637.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5492.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,5448-597.65a89.991,89.991,0,0,1-86.33-15.94L5346.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5201.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L5057.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L4912.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4767.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L4622.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4477.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L4188.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4043.5-626v112.718h4346Z" transform="translate(-4038.5 631)" fill="#f5f5f5" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
        </svg>
    </div>
    <section class="bgcolor">
        <section class="fb col8 pushcol2">
            <h4>
                Følg med på hvad der sker i gruppen
            </h4>
            <div>
                <div class="post-container">
                    <!-- Ehhmm jeg fandt den her linje kode her: https://stackoverflow.com/questions/19348278/automaticall-embed-newest-facebook-post-on-my-website -->
                    <iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F908378059235877&width=500&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=560" scrolling="yes" style="border:none; overflow:hidden; width:500px; height:560px; background: white; float:left; " allowtransparency="true" frameborder="0"></iframe>
                </div>
            </div>
        </section>
        <section class="signup">
            <div class="col4 pushcol2">
                <h4>
                    Kom ind i fællesskabet
                </h4>
                <p>
                    Tilmeld dig eller kom og prøv at være spejder
                </p>
                <div>
                    <router-link to='/tilmelding'>Bliv Spejder</router-link>
                </div>
            </div>
            <div class="col4">
                <img src="../assets/images/frontimage.jpg" alt="ehhhm IMG">
            </div>
        </section>
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
    .post-container{
        position: relative;
        min-height: calc(560px);
        overflow: hidden;
        iframe{
            transform:  translate(-50%, -50%) scale(1);
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }

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
    .waves{
        margin-top: calc(1em + 11px);
        position: relative;
        overflow: hidden;
        height: 113px;
        > svg{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            &:last-of-type{
                top: 68px;
                left: calc(50% + (100% / 26));
            }
        }
    }
    .bgcolor{
        background: var(--whiteshade3);
        padding-top: 87.6px;
        padding-bottom: 75px;
        .fb{
            height: 643px;
            background: var(--whiteshade1);
            margin-bottom: 56px;
            h4{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 83px;
                background: var(--prim);
                color: var(--whiteshade1);
                font-size: 32px;
                font-family: AlfaSlabOne, sans-serif;
                font-weight: 400;
            }
            > div{
                min-height: calc(100% - 83px);
                border: solid 1px var(--black);
            }
        }
        .signup{
            display: flex;
            div{
                &:first-of-type{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    > h4{
                        font-size: 32px;
                        font-family: AlfaSlabOne, sans-serif;
                        font-weight: 400;
                    }
                    > p{
                        font-family: proxima-nova,sans-serif;
                        font-weight: 400;
                        margin-bottom: 9px;
                    }
                    > div{
                        a{
                            width: 336px;
                            height: 36px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: var(--prim);
                            color: var(--whiteshade1);
                            border-radius: 10px;
                            font-family: proxima-nova,sans-serif;
                            font-weight: 700;
                            text-decoration: none;
                        }
                    }
                }
                &:last-of-type{
                    img{
                        display: block;
                    }
                }
            }
        }
    }
</style>