<template>
  <topping/>
  <div class="praktisk">
    Praktisk
  </div>
  {{ form.hyttetitle }}
  <bottom/>
</template>

<script>
// @ is an alias to /src
import bottom from '@/components/bottom.vue'
import topping from '@/components/front-end-topping.vue'

import { reactive, onMounted } from 'vue'
import { getPracticalpage } from '../main'


export default {
    setup() {
        onMounted(async () => {
            const practicalpage = await getPracticalpage()
            form.hyttetitle = practicalpage.hyttetitle
            form.hyttetext = practicalpage.hyttetext
            form.uniformtitle = practicalpage.uniformtitle
            form.uniformtext = practicalpage.uniformtext
        })

        const form = reactive({ 
            
        })

        return { 
            form
        }
    },

    name: 'Praktisk',
    components: {
        topping,
        bottom
    }
}
</script>
