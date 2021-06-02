<template>
  <topping/>
  <div class="omos">
    <main class="wrapper container">
        <div class="col3 pushcol2">
            <img src="../assets/images/omos.jpg" alt="">
        </div>
        <div class="col5">
            <h3>
                {{ form.title }}
            </h3>
            <p>
                {{ form.titletext }}
            </p>
        </div>
    </main>
    <section class="contactBar">
        <h4>
            Kom i kontakt med vores ledelse
        </h4>
        <div class="container">
            <div>
                <h5>
                    {{ form.boxone }}
                </h5>
                <p>
                    {{ form.boxonenavn }}
                </p>
                <p>
                    <strong>Telefon:</strong> {{ form.boxonetlf }}
                </p>
                <p>
                    <strong>E-mail:</strong> <span>{{ form.boxoneemail }}</span> <br>
                    &nbsp;
                </p>
            </div>
            <div>
                <h5>
                    {{ form.boxtwo }}
                </h5>
                <p>
                    {{ form.boxtwonavn }}
                </p>
                <p>
                    <strong>Telefon:</strong> {{ form.boxtwotlf }}
                </p>
                <p>
                    <strong>E-mail:</strong> <span>{{ form.boxtwoemail }}</span> <br>
                    &nbsp;
                </p>
            </div>
            <div>
                <h5>
                    {{ form.boxthree }}
                </h5>
                <p>
                    {{ form.boxthreenavn }}
                </p>
                <p>
                    <strong>Telefon:</strong> {{ form.boxthreetlf }}
                </p>
                <p>
                    <strong>E-mail:</strong> <span>{{ form.boxthreeemail }}</span> <br>
                    &nbsp;
                </p>
            </div>
        </div>
    </section>
    <section class="wrapper container sponsor">
        <div class="col3 pushcol2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 191.122">
            <g id="ok-logo" transform="translate(-1 -1)">
                <path id="Path_105" data-name="Path 105" d="M46.608,178.122c1.816,0,3.177-.908,4.539-1.362a10.719,10.719,0,0,0,4.085-2.724A12.237,12.237,0,0,0,58.41,170.4c2.27-2.724,3.177-5.9,4.539-8.625.454-1.362,1.362-3.177,1.362-4.993L96.085,25.6a13.465,13.465,0,0,0,.908-7.263c0-1.362,0-2.724-.908-3.631a19.732,19.732,0,0,0-1.816-3.177L92.454,9.717A7.925,7.925,0,0,0,87.007,7.9L88.369,2h89.423l-1.362,6.809c-1.362,0-3.177.454-4.539.454a16.124,16.124,0,0,0-4.085,1.816,12.035,12.035,0,0,0-2.724,2.27,12.035,12.035,0,0,0-2.27,2.724A19.736,19.736,0,0,0,161,19.249c0,.908-.454,1.816-.454,3.177L145.109,84.614l82.614-65.365c.908-.454,1.362-1.362,2.27-2.27.454-.908,1.362-1.362,1.816-2.27a4.412,4.412,0,0,0,.454-4.085c-.454-.454-.454-.908-.908-1.362A3.923,3.923,0,0,0,228.63,7.9h-1.362l.908-5.9H305.8l-1.362,6.355c-1.816.454-4.085.908-5.9,1.362a31.518,31.518,0,0,0-5.9,2.27,28.94,28.94,0,0,0-6.355,3.631,66.412,66.412,0,0,0-5.9,4.085L207.75,77.8l55.832,76.259c1.816,2.27,3.631,4.993,5.447,7.263a78.922,78.922,0,0,0,5.9,6.809l3.631,3.631c1.362.908,2.27,2.27,3.631,3.177a9.5,9.5,0,0,0,2.723,1.816,22.133,22.133,0,0,0,3.177,1.362l-1.362,4.993A136.426,136.426,0,0,1,248.6,187.2c-4.993-.454-9.532-.908-14.072-1.362a70.521,70.521,0,0,1-10.44-2.27c-3.177-1.362-6.809-2.724-9.986-4.085a47.844,47.844,0,0,1-4.993-3.177,40.927,40.927,0,0,1-4.539-4.085,49.7,49.7,0,0,1-4.539-4.993l-4.085-5.447L144.2,88.245l-17.7,72.627a24.8,24.8,0,0,0-.454,8.171,4.092,4.092,0,0,0,.454,2.27,6.266,6.266,0,0,0,1.362,1.816c.454.454.908,1.362,1.362,1.362a11.378,11.378,0,0,0,3.177,1.816c1.362.454,2.27,1.362,3.631,1.362l-.908,5.9H45.7Z" transform="translate(158.203 3.539)" fill="red"/>
                <path id="Path_106" data-name="Path 106" d="M94.508,159.873a55.226,55.226,0,0,0,20.88-2.724c2.27-.908,4.539-1.816,6.355-2.724a44.978,44.978,0,0,0,7.717-4.993,30.55,30.55,0,0,0,6.355-6.809,96.609,96.609,0,0,0,7.263-11.348,100.173,100.173,0,0,0,5.447-12.256L152.61,105.4c1.362-4.539,2.27-9.078,3.177-13.618a201.036,201.036,0,0,0,2.724-23.15A56.388,56.388,0,0,0,156.7,53.655l-2.724-6.809a18.163,18.163,0,0,0-4.539-5.447,29.82,29.82,0,0,0-7.717-5.447,53.4,53.4,0,0,0-9.078-3.177h-9.986a50.723,50.723,0,0,0-19.973,4.085A45.088,45.088,0,0,0,93.6,41.853,79.03,79.03,0,0,0,87.245,47.3a26.445,26.445,0,0,0-4.993,6.809,89.188,89.188,0,0,0-5.9,11.348,90.941,90.941,0,0,0-4.539,11.8c-1.362,4.085-2.724,8.625-3.631,12.71-1.816,7.263-3.631,14.072-4.539,21.334-.454,4.993-1.362,9.986-.908,14.526.454,4.085.908,8.624,2.27,12.71a17.2,17.2,0,0,0,2.724,5.9,29.142,29.142,0,0,0,4.539,5.9c1.816,1.816,3.631,3.631,5.9,4.539a44.574,44.574,0,0,0,8.171,3.631A21.989,21.989,0,0,0,94.508,159.873ZM3.27,85.883A99.2,99.2,0,0,1,7.809,70.45a70.368,70.368,0,0,1,6.355-13.164c2.27-4.085,5.447-8.171,8.171-12.256,3.631-4.085,7.263-8.171,10.894-11.8a136.753,136.753,0,0,1,12.71-9.986c4.085-2.724,8.625-5.447,12.71-7.717a88.267,88.267,0,0,1,13.618-5.9A73.181,73.181,0,0,1,85.429,5.539,142.175,142.175,0,0,1,121.743,1c10.894,0,21.788.908,32.682,4.539a70.565,70.565,0,0,1,10.44,3.631,68.333,68.333,0,0,1,9.986,4.993,74.641,74.641,0,0,1,9.986,6.355c3.177,2.27,6.355,4.993,9.078,7.263,2.724,2.724,5.447,5.447,8.171,8.625a45.808,45.808,0,0,1,6.809,9.532,45.735,45.735,0,0,1,5.447,10.44,86.7,86.7,0,0,1,5.447,21.334,95.691,95.691,0,0,1-.454,25.42,83.639,83.639,0,0,1-2.27,11.348,53.223,53.223,0,0,1-4.085,10.894,107.573,107.573,0,0,1-8.625,15.887,106.2,106.2,0,0,1-10.894,14.072A110.905,110.905,0,0,1,180.3,167.589a88.007,88.007,0,0,1-15.433,9.532c-4.993,2.27-9.986,4.539-14.979,6.355a145.935,145.935,0,0,1-33.136,7.717,147.259,147.259,0,0,1-39.945-.908c-3.177-.908-7.717-1.816-11.8-3.177s-8.171-2.724-12.256-4.539-7.717-3.631-11.8-5.9a56.37,56.37,0,0,1-10.44-7.717,81.565,81.565,0,0,1-9.078-8.624,83.5,83.5,0,0,1-7.717-9.986l-5.447-9.532a77.45,77.45,0,0,1-5.9-17.249A163.084,163.084,0,0,1,1,102.225,101.063,101.063,0,0,1,3.27,85.883Z" transform="translate(0 0)" fill="red"/>
            </g>
            </svg>
        </div>
        <div class="col5">
            <h3>
                {{ form.sponsor }}
            </h3>
            <p>
                {{ form.sponsortext }}
            </p>
        </div>
    </section>
  </div>
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
<style lang="scss" scoped>
    .omos{
        background: var(--whiteshade3);
        padding-top: 50px;
    }

    .container{
        display: flex;
    }

    main{
        > div{
            padding: 7px;
        }
        h3{
            font-size: 32px;
            margin-bottom: 10px;
        }
    }

    .contactBar{
        margin: 50px 0;
        > h4{
            text-align: center;
            margin-bottom: 24px;
            font-size: 32px;
        }
        > .container{
            justify-content: center;
            > div{
                background: var(--whiteshade2);
                margin: 0 7px;
                padding: 19px 60px;
                h5{
                    font-size: 32px;
                }
                span{
                    text-decoration: underline;
                    color: var(--second);
                }
            }
        }
    }

    .sponsor{
        padding-bottom: 50px;
        > div{
            padding: 7px;
        }
        h3{
            font-size: 32px;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 800px) {
        .container{
            flex-direction: column;
        }
        .sponsor{
            .col5{
                margin-top: 50px;
            }
        }
    }
</style>