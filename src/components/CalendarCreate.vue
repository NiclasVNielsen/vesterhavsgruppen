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
      const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
      const monthLengthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];

      const yearCalc = (time) => {
        /* Leap years makes things complicated, okay?! */
        /* 
          Gotta be honest i just hit my head against
          the wall and tried every theory that poped
          up until i got something that worked.

          It is tested it is working perfectly.
          It is centered around 1. jan 2020
          so anything before that is not tested
          and will most likely not work
        */

        let year = time[0];
        let month = 0;
        if(year % 4 == 0){
          for(let i = 0; i < time[1] - 1; i++){
            month += monthLengthsLeap[i]
          }
        }else{
          for(let i = 0; i < time[1] - 1; i++){
            month += monthLengths[i]
          }
        }

        let leapStuff = Math.ceil((year - 2020) / 4)

        let x = ((year - 2020) * 365) + leapStuff;

        const amountOfDays = x + (month) + (time[2] - 0)

        return {
          amountOfDays
        }
      }

      const dayCalc = () => {

        let start = form.start.split('-')
        let end = form.end.split('-')

        start = yearCalc(start).amountOfDays;
        end = yearCalc(end).amountOfDays;

        const amountOfDays = end - start + 1;
        return {
          amountOfDays
        }
      }

      const form = reactive({
        title: '',
        desc: '',
        start: '',
        end: ''
      })

      const onSubmit = async () => {
        if(form.end == ''){
          form.end = form.start
          /* V få det ind i formen */
          //amountOfDays = 1
        }
        dayCalc()
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