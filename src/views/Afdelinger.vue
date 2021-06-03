<template>
  <topping/>
  <div class="afdelinger">
    <div>
        <h3>
            Tryk på den afdeling du vil læse om
        </h3>
        <div class="miniIcons wrapper">
            <div>
                <a href="#micro">
                   <img src="../assets/images/Micro.svg" alt="Micro">
                </a>
            </div>
            <div>
                <a href="#mini">
                   <img src="../assets/images/Mini.svg" alt="Mini">
                </a>
            </div>
            <div>
                <a href="#junior">
                   <img src="../assets/images/Junior.svg" alt="Junior">
                </a>
            </div>
            <div>
                <a href="#trop">
                   <img src="../assets/images/Trop.svg" alt="Trop">
                </a>
            </div>
            <div>
                <a href="#klan">
                   <img src="../assets/images/Klan.svg" alt="Klan">
                </a>
            </div>
        </div>
        
        <div class="waves">
            <svg xmlns="http://www.w3.org/2000/svg" width="4356" height="122.718" viewBox="0 0 4356 122.718">
                <path id="Path_665" data-name="Path 665" d="M8389.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L8244.69-626l-14.971,12.41a90.017,90.017,0,0,1-114.86,0L8099.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L7810.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7665.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,7621-597.65a89.991,89.991,0,0,1-86.33-15.94L7519.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7374.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L7230.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L7085.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6940.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6795.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6650.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L6361.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6216.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6071.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5926.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L5637.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5492.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,5448-597.65a89.991,89.991,0,0,1-86.33-15.94L5346.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5201.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L5057.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L4912.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4767.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L4622.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4477.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L4188.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4043.5-626v112.718h4346Z" transform="translate(-4038.5 631)" fill="#e8e8e8" stroke="#e8e8e8" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="4356" height="122.718" viewBox="0 0 4356 122.718">
                <path id="Path_666" data-name="Path 666" d="M8389.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L8244.69-626l-14.971,12.41a90.017,90.017,0,0,1-114.86,0L8099.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L7810.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7665.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,7621-597.65a89.991,89.991,0,0,1-86.33-15.94L7519.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L7374.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L7230.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L7085.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6940.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6795.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6650.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L6361.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L6216.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L6071.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5926.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L5637.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5492.5-626h-1l-14.98,12.41A89.77,89.77,0,0,1,5448-597.65a89.991,89.991,0,0,1-86.33-15.94L5346.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L5201.89-626l-14.97,12.4a90,90,0,0,1-114.86.01L5057.09-626l-14.97,12.41a90,90,0,0,1-114.85,0L4912.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4767.5-626l-14.98,12.41a90,90,0,0,1-114.85,0L4622.69-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4477.89-626l-14.97,12.4a90,90,0,0,1-114.86.01l-8.06-6.68-6.91-5.73-14.97,12.41a90,90,0,0,1-114.85,0L4188.3-626l-14.97,12.41a90.017,90.017,0,0,1-114.86,0L4043.5-626v112.718h4346Z" transform="translate(-4038.5 631)" fill="#f5f5f5" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
            </svg>
        </div>

        <section class="infoContainer">
            <section class="left col8 pushcol2" id="micro">
                <div class="departmentImg">
                    <img src="../assets/images/micro.jpg" alt="Micro">
                </div>
                <div>
                    <div class="topInfo">
                        <h5>
                            Micro
                        </h5>
                        <p>
                            {{ form.oneklasse }}
                        </p>
                        <p>
                            {{ form.onedag }}
                        </p>
                        <p>
                            <span class="material-icons">
                                schedule
                            </span>
                            {{ form.onetid }}
                        </p>
                    </div>
                    <p class="info">
                        {{ form.one }}
                    </p>
                    <div class="bottomInfo">
                        <table>
                            <tr>
                                <td>
                                    <strong>Leder:</strong>
                                </td>
                                <td>
                                    {{ form.oneleder }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kontakt:&nbsp;&nbsp;&nbsp;</strong> <!-- Jeg er træt ok --> 
                                </td>
                                <td>
                                    {{ form.oneemail }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <section class="right col8 pushcol2" id="mini">
                <div>
                    <div class="topInfo">
                        <h5>
                            Mini
                        </h5>
                        <p>
                            {{ form.twoklasse }}
                        </p>
                        <p>
                            {{ form.twodag }}
                        </p>
                        <p>
                            <span class="material-icons">
                                schedule
                            </span>
                            {{ form.twotid }}
                        </p>
                    </div>
                    <p class="info">
                        {{ form.two }}
                    </p>
                    <div class="bottomInfo">
                        <table>
                            <tr>
                                <td>
                                    <strong>Leder:</strong>
                                </td>
                                <td>
                                    {{ form.twoleder }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kontakt:&nbsp;&nbsp;&nbsp;</strong> <!-- Jeg er træt ok --> 
                                </td>
                                <td>
                                    {{ form.twoemail }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="departmentImg">
                    <img src="../assets/images/mini.jpg" alt="Micro">
                </div>
            </section>
            <section class="left col8 pushcol2" id="junior">
                <div class="departmentImg">
                    <img src="../assets/images/junior.jpg" alt="Micro">
                </div>
                <div>
                    <div class="topInfo">
                        <h5>
                            Junior
                        </h5>
                        <p>
                            {{ form.threeklasse }}
                        </p>
                        <p>
                            {{ form.threedag }}
                        </p>
                        <p>
                            <span class="material-icons">
                                schedule
                            </span>
                            {{ form.threetid }}
                        </p>
                    </div>
                    <p class="info">
                        {{ form.three }}
                    </p>
                    <div class="bottomInfo">
                        <table>
                            <tr>
                                <td>
                                    <strong>Leder:</strong>
                                </td>
                                <td>
                                    {{ form.threeleder }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kontakt:&nbsp;&nbsp;&nbsp;</strong> <!-- Jeg er træt ok --> 
                                </td>
                                <td>
                                    {{ form.threeemail }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <section class="right col8 pushcol2" id="trop">
                <div>
                    <div class="topInfo">
                        <h5>
                            Trop
                        </h5>
                        <p>
                            {{ form.fourklasse }}
                        </p>
                        <p>
                            {{ form.fourdag }}
                        </p>
                        <p>
                            <span class="material-icons">
                                schedule
                            </span>
                            {{ form.fourtid }}
                        </p>
                    </div>
                    <p class="info">
                        {{ form.four }}
                    </p>
                    <div class="bottomInfo">
                        <table>
                            <tr>
                                <td>
                                    <strong>Leder:</strong>
                                </td>
                                <td>
                                    {{ form.fourleder }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kontakt:&nbsp;&nbsp;&nbsp;</strong> <!-- Jeg er træt ok --> 
                                </td>
                                <td>
                                    {{ form.fouremail }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="departmentImg">
                    <img src="../assets/images/trop.jpg" alt="Micro">
                </div>
            </section>
            <section class="left col8 pushcol2" id="klan">
                <div class="departmentImg">
                    <img src="../assets/images/klan.jpg" alt="Micro">
                </div>
                <div>
                    <div class="topInfo">
                        <h5>
                            Klan
                        </h5>
                        <p>
                            {{ form.fiveklasse }}
                        </p>
                        <p>
                            {{ form.fivedag }}
                        </p>
                        <p>
                            <span class="material-icons">
                                schedule
                            </span>
                            {{ form.fivetid }}
                        </p>
                    </div>
                    <p class="info">
                        {{ form.five }}
                    </p>
                    <div class="bottomInfo">
                        <table>
                            <tr>
                                <td>
                                    <strong>Leder:</strong>
                                </td>
                                <td>
                                    {{ form.fiveleder }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kontakt:&nbsp;&nbsp;&nbsp;</strong> <!-- Jeg er træt ok --> 
                                </td>
                                <td>
                                    {{ form.fiveemail }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    </div>
  </div>
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

<style lang="scss" scoped>
    h3{
        text-align: center;
        font-size: 32px;
        font-family: proxima-nova,sans-serif;
        font-weight: 700;
        margin: 40px 0 23px;
    }
    .miniIcons{
        display: flex;
        justify-content: space-around;
        a{
            display: block;
            width: 300px;
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
    .infoContainer{
        background: var(--whiteshade3);
        .left, .right{
            display: flex;
            font-family: proxima-nova,sans-serif;
            font-weight: 400;
            margin-bottom: 100px;
            &:first-of-type{
                padding-top: 100px;
            }
            &:last-of-type{
                padding-bottom: 100px;
                margin-bottom: 0;
            }
            > div{
                position: relative;
            }
            .departmentImg{
                display: block;
                img{
                    display: block;
                    width: 463px;
                }
            }
            .topInfo{
                display: flex;
                align-items: flex-end;
                padding-bottom: 9px;
                position: relative;
                margin-bottom: 1.8em;
                &::after{
                    content: '';
                    background: linear-gradient(to bottom, var(--prim) 50%, var(--second) 50%);
                    position: absolute;
                    width: 100%;
                    height: 6px;
                    bottom: 0;
                    left: 0;
                }

                h5{
                    font-weight: 700;
                    font-size: 32px;
                    line-height: .9em;
                }
                p{
                    &:first-of-type{
                        margin-left: 10px;
                    }
                    &:nth-of-type(2){
                        margin-left: 40px;
                        margin-right: 32px;
                    }
                    &:last-of-type{
                        padding-right: .2em;
                        span{
                            margin-right: 12px;
                            transform: translateY(25%);
                        }
                    }
                }
            }
            .info{
                clear: both;
            }
            .bottomInfo{
                position: absolute; /* Ok det måske ikke super clean */
                bottom: 0;
                tr{
                    td{
                        padding-bottom: 8px;
                    }
                    &:last-of-type{
                        td{
                            padding-bottom: 0px;
                            &:last-of-type{
                                text-decoration: underline;
                                color: var(--second)
                            }
                        }
                    }
                }
            }
        }
        .left{
            .departmentImg{
                margin-right: 14px;
            }
            .topInfo{
                float: left; /* Ja ja i know i know */
            }
            .bottomInfo{
                left: 0;
            }
        }
        .right{
            .departmentImg{
                margin-left: 14px;
            }
            .topInfo{
                float: right;
            }
            .bottomInfo{
                right: 0;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .miniIcons{
            flex-direction: column;
            a{
                margin: 0 auto 50px;
            }
        }
        .departmentImg{
            margin: 0 0 50px !important;
            img{
                width: 100% !important;
            }
        }
        .infoContainer{
            section{
                flex-direction: column;
                &:nth-of-type(even){
                    flex-direction: column-reverse;
                }
            }
            .bottomInfo{
                position: static !important;
            }
        }
        .right{
            .departmentImg{
                margin-left: 0;
                margin-right: 0;
            }
            .topInfo{
                float: left !important;
            }
        }
    }
</style>