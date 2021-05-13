<template>
  <div>
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
      <div>
        <label for="titel">Titel</label>
        <input 
          type="text" 
          v-model="form.title"
          required 
          id="titel"
        />
      </div>

      <div>
        <label for="desc">Beskrivelse</label>
        <textarea 
          type="text"
          v-model="form.desc"
          required
          id="desc"
        />
      </div>

      <div>
        <label for="start">Dato</label>
        <input 
          type="date"
          v-model="form.start"
          required
          id="start"
        />
      </div>

      <div>
        <label for="end">Til</label>
        <input 
          type="date"
          v-model="form.end"
          id="end"
        />
      </div>

      <button type="submit">
        Create calendar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createCalendar } from '@/main.js' // maybe this make error

  export default {
   setup() {
     const form = reactive({
       title: '',
       desc: '',
       start: '',
       end: ''
     })

     const onSubmit = async () => {
       if(form.end == ''){
         form.end = form.start
       }
       await createCalendar({ ...form }) 
       form.title = ''
       form.desc = ''
       form.start = ''
       form.end = ''
     }

     return { form, onSubmit }
   } 
  }
</script>

<style lang="scss" scoped>

</style>