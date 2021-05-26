<template>
    <div class="header-fill"/>
    <header>
        <nav class="wrapper">
            <div class="pushcol1 col1">
                <router-link to='/'>Forside</router-link>
            </div>
            <div class="menuItems">
                <router-link to='/afdelinger'>Afdelinger</router-link>
                <router-link to='/omos'>Om os</router-link>
                <router-link to='/praktisk'>Praktisk</router-link>
                <router-link to='/kalender'>Kalender</router-link>
                <a href="https://www.facebook.com/Vesterhavsgruppen-DDS-908378059235877/photos/?tab=albums&ref=page_internal" target="_blanc">Galleri</a>
            </div>
            <div class="pushcol8 col1 signup">
                <router-link to='/tilmelding'>Bliv Spejder</router-link>
            </div>
        </nav>
        <div class="stripes"/>
    </header>
</template>

<style lang="scss" scoped>
    .header-fill{
        height: 80px;
    }
    header{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        font-size: 13px;
        font-family: proxima-nova, sans-serif;
        font-weight: 700;
        font-style: normal;
        width: 100%;
        height: 80px;
        background: var(--whiteshade1);
        > nav{
            display: flex;
            position: relative;
            height: 70px;
            align-items: center;
            a{
                text-decoration: none;
                color: var(--black);
                font-family: proxima-nova, sans-serif;
                font-weight: 700;
                font-style: normal;
                font-size: 13px;
            }
            > .menuItems{
                position: absolute;
                right: calc(15.333%);
                display: flex;
                > a {
                    display: block;
                    width: 67px;
                    text-align: center;
                    margin-right: 6px;
                }
            }
            > .signup{
                display: flex;
                justify-content: right;
                > a{
                    width: 120px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--prim);
                    color: var(--whiteshade1);
                    border-radius: 10px;
                }
            }
        }
    }
</style>