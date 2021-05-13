<template>
  <div>
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
      <div>
        <label>Titel</label>
        <input 
          type="text" 
          v-model="form.title"
          required 
        />
      </div>

      <div>
        <label>Beskrivelse</label>
        <input 
          type="text"
          v-model="form.desc"
          required
        />
      </div>

      <div>
        <label>Fra</label>
        <input 
          type="date"
          v-model="form.start"
          required
        />
      </div>

      <div>
        <label>Til</label>
        <input 
          type="date"
          v-model="form.end"
          required
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
       // spread operator to add field + invoking our createUser function from firebase.js
       await createCalendar({ ...form }) 
       // after create - empty input field
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