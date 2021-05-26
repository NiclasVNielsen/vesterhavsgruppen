<template>
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
                <router-link to='/galleri'>Galleri</router-link>
            </div>
            <div class="pushcol8 col1 signup">
                <router-link to='/tilmelding'>Bliv Spejder</router-link>
            </div>
            <div class="stripes bot"/>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header{
        font-size: 13px;
        font-family: proxima-nova, sans-serif;
        font-weight: 700;
        font-style: normal;
        > nav{
            display: flex;
            position: relative;
            height: 74px;
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