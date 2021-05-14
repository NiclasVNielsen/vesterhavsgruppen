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
          @blur="spawnDayAttachments"
          type="date"
          v-model="form.start"
          required
          id="start"
        />
      </div>

      <div>
        <label for="end">Til</label>
        <input 
          @blur="spawnDayAttachments"
          type="date"
          v-model="form.end"
          id="end"
        />
      </div>

      <hr>

      <div id="spawnDayAttachments">

      </div>

      <button type="submit">
        Create calendar
      </button>
    </form>
  </div>
</template>

<script>
//import { reactive } from 'vue'
import { createCalendar } from '@/main.js'

  export default {
    setup() {
      const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
      const monthLengthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];

      let inputsStart = []
      let inputsEnd = []

      const spawnDayAttachments = () => {
        /* form = {
          title: form.title,
          desc: form.desc,
          start: form.start,
          end: form.end
        } */
        inputsStart = []
        inputsEnd = []

        if(form.start != '' && form.end != ''){
          const x = dayCalc().amountOfDays
          const container = document.getElementById('spawnDayAttachments');
          container.innerHTML=''

          /* 
            Ehhhmm jeg var igennem det meste af
            internettet og ja det her var den
            eneste måde jeg kom frem til...

            Jeg ved godt det ikke er super
            optimalt men hey det er bedre
            end ikke at have en kalender
          */

          for(let i = 0; i < x; i++){
            const subContainer = document.createElement('div')
            container.appendChild(subContainer)
            const start = document.createElement('input')
            const end = document.createElement('input')
            start.setAttribute('name', `day${i+1}start`)
            start.setAttribute('placeholder', '9:00')
            end.setAttribute('name', `day${i+1}end`)
            end.setAttribute('placeholder', '17:00')
            subContainer.appendChild(start)
            subContainer.appendChild(end)

            inputsStart.push(start)
            inputsEnd.push(end)

            /* Jeg skal kunne pille ved formObj her! */
            form[`day${i+1}start`] = ''
            form[`day${i+1}end`] = ''
            console.log(form)
            /* Jeg skal have value ud af inputsne og ind i 'form' */
          }
          console.log(inputsStart)
          console.log(inputsEnd)
          return{
            x
          }
        }
      }

      const getDynamicInputValues = () => {
        for(let i = 0; i < inputsStart.length + 1; i++){
          console.log(i)
          console.log(inputsStart)
          //form[`day${i+1}start`] = inputsStart[i].value
          //form[`day${i+1}end`] = inputsEnd[i].value
        }
        console.log(form)
      }

      const yearCalc = (time) => {
        /* Leap years makes things complicated, okay?! */
        /* 
          It is tested it is working perfectly.
          It is centered around 1. jan 2020
          so anything before that is not tested
          and will most likely not work
        */

        /* Time er delt op YYYY MM DD */
        /* Så time[0] = med år */
        let year = time[0];
        
        /* 
          Jeg konvatere alt om til dage
          så jeg skal have lavet år og
          måneder om til dage
        */
        /* 
          Jeg har et array med mængden
          af dage alle måneder (ud over dec).
          jeg laver en let month som jeg
          ligger alle dagene fra de
          måneder vi har oversået i

          conditionen er til for at skifte
          mellem to arrays da jeg er nød
          til at tage højde for skud år
          så vis det nuværende år er en
          del af 4-tabelen skal slå over
          til det array hvor feb har 29 
          dage
        */
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

        /* 
          Jeg skal også tage højde for
          år når det kommer til skudår
          for ligesom febuar har et
          skud år også en extra dag
          så det er det 'leapStuff'
          skal stå for

          ellers vil den 31. dec på
          et skud år være den samme
          dag som den 1. jan året efter
        */
        let leapStuff = Math.ceil((year - 2020) / 4)

        /* 
          Jeg centrere året omkring 2020
          fordi det gør det nemmere at
          arbejde med og vis der er behov
          for debugging i fremtiden vil
          det også være nemmere

          Ellers konvertere jeg år om
          til dage og ligger skudårs
          dagene oven i
        */
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

      let form = {
        title: '',
        desc: '',
        start: '',
        end: ''
      }
      /* Ehm does form update when formObj update? */
      //const form = reactive()
      

      const onSubmit = async () => {
        if(form.end == ''){
          form.end = form.start
        }
        /* Update dynamic inputs here */
        getDynamicInputValues()
        await createCalendar({ ...form }) 
        form.title = ''
        form.desc = ''
        form.start = ''
        form.end = ''
      }

      return { form, onSubmit, spawnDayAttachments }
    } 
  }
</script>

<style lang="scss" scoped>

</style>