<template>
  <div>
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
      <div>
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name"
          required 
        />
      </div>

      <div>
        <label>Email</label>
        <input 
          type="text"
          v-model="form.email"
          required
        />
      </div>

      <button type="submit">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createUser } from '@/firebase.js' // maybe this make error

  export default {
   setup() {
     const form = reactive({
       name: '',
       email: ''
     })

     const onSubmit = async () => {
       // spread operator to add field + invoking our createUser function from firebase.js
       await createUser({ ...form }) 
       // after create - empty input field
       form.name = ''
       form.email = ''
     }

     return { form, onSubmit }
   } 
  }
</script>

<style lang="scss" scoped>

</style>