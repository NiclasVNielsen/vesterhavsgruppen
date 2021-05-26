<template>
  <topping/>
  <div class="home">
    home
  </div>
  {{ form.one }}
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
