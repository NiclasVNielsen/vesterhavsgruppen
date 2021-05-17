<template>
  <div>
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
      <div>
        <label for="group">Hold</label>
        <select 
          v-model="form.group"
          required 
          id="group"
        >
          <!-- Ehhhm de er vinged men jeg kan altid ændrer dem senere -->
          <option value="1">Mini</option>
          <option value="2">Jn</option>
          <option value="3">Trop</option>
          <option value="4">Klan</option>
          <option value="5">Admin</option>
        </select>
      </div>

      <div>
        <label for="title">Titel</label>
        <input 
          type="text" 
          v-model="form.title"
          required 
          id="title"
        />
      </div>

      <div>
        <label for="location">Lokation</label>
        <input 
          type="text"
          v-model="form.location"
          required
          id="location"
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
        /* 
          reseter de 2 arrays så de er tomme
          selv i tilfælde af at functionen
          har været kørt før
        */
        inputsStart = []
        inputsEnd = []

        if(form.start != ''){
          if(form.end == ''){
            form.end = form.start
          }
          /* 
            jeg kalder en der beregner
            hvor mange inputs der skal
            skabes

            baseret på mængden af dage
            eventet forløber sig over
          */
          const x = dayCalc().amountOfDays
          
          /* 
            reseter containeren der indeholder
            de dynamiske inputs så den er tom
            selv i tilfælde af at functionen
            har været kørt før
          */
          const container = document.getElementById('spawnDayAttachments')
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
            /* 
              jeg opretter 2 input felter
              1 til start tidspunkt og
              1 til slut tidspunkt
              for vær dag der i mellem
              de 2 valgte datoer (+1)
            */
            const subContainer = document.createElement('div')
            container.appendChild(subContainer)
            const start = document.createElement('input')
            const end = document.createElement('input')
            const from = document.createElement('span')
            from.appendChild(document.createTextNode('fra'))
            const to = document.createElement('span')
            to.appendChild(document.createTextNode('til'))
            start.setAttribute('name', `day${i+1}start`)
            start.setAttribute('placeholder', '9:00')
            start.setAttribute('type', 'time')
            start.setAttribute('required', '')
            end.setAttribute('name', `day${i+1}end`)
            end.setAttribute('placeholder', '17:00')
            end.setAttribute('type', 'time')
            end.setAttribute('required', '')
            subContainer.appendChild(from)
            subContainer.appendChild(start)
            subContainer.appendChild(to)
            subContainer.appendChild(end)

            /* 
              jeg pusher de 2 inputs
              ind i vær deres array
              for at jeg nemt kan
              få fat på dem senere
              når jeg skal have fat
              i deres value
            */
            inputsStart.push(start)
            inputsEnd.push(end)
          }
          return{
            x
          }
        }
      }

      const getDynamicInputValues = () => {
        /* 
          jeg sætter value'en
          fra mine dynamiske felter
          over i form objectet
        */
        for(let i = 0; i < inputsStart.length; i++){
          form[`day${i+1}start`] = inputsStart[i].value
          form[`day${i+1}end`] = inputsEnd[i].value
          const x = inputsEnd[i].value.split(':')[0] - inputsStart[i].value.split(':')[0]
          form[`day${i+1}duration`] = x

          let start = form.start.split('-')
          start = yearCalc(start).amountOfDays;

          form[`day${i+1}date`] = dateCalc(start + i)
        } 
      }

      const clearForm = () => {
        /* Reset hele formen */
        const container = document.getElementById('spawnDayAttachments')
        container.innerHTML=''
        const inputs = [
          document.getElementById('title'), 
          document.getElementById('desc'), 
          document.getElementById('start'), 
          document.getElementById('end'),
          document.getElementById('location')
        ]
        inputs.forEach(input => {
          input.value = ''
        });
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

      const dateCalc = (days) => {       

        let years = 0
        let leapyearstuff = 4
        let remainingDays = days
        let continueYearCalc = 1;

        while(continueYearCalc == 1){
          if(leapyearstuff == 4){
            leapyearstuff = 0
            if(remainingDays > 366){
              years = years + 1
              remainingDays = remainingDays - 366
            }else{
              continueYearCalc = 0
            }
          }else{
            if(remainingDays > 365){
              years = years + 1
              remainingDays = remainingDays - 365
            }else{
              continueYearCalc = 0
            }
          }
          leapyearstuff = leapyearstuff + 1
        }


        let currentMonth = 1
        let stopIt = 12

        if(years % 4 == 0){
          for(let i = 0; i < stopIt; i++){
            if(remainingDays > monthLengthsLeap[i]){
              remainingDays = remainingDays - monthLengthsLeap[i]
              currentMonth = currentMonth + 1
            }else{
              stopIt = 0
            }
          }
        }else{
          for(let i = 0; i < stopIt; i++){
            if(remainingDays > monthLengths[i]){
              remainingDays = remainingDays - monthLengths[i]
              currentMonth = currentMonth + 1
            }else{
              stopIt = 0
            }
          }
        }

        const date = `${remainingDays}:${currentMonth}:${years}`

        return {
          date
        }
      }

      const dayCalc = () => {

        let start = form.start.split('-')
        let end = form.end.split('-')
        /* 
          Jeg kører start og slut
          datoerne igennem yearCalc
          som konvertere år og måneder
          og dage sammen til at være
          mængden af dage siden den
          1. jan 2020
        */
        start = yearCalc(start).amountOfDays;
        end = yearCalc(end).amountOfDays;

        /* 
          Jeg trækker startstidspunktet
          fra sluttidspunktet for at
          finde ud af hvor mange dage
          eventet er over

          jeg pluser med 1 da det ellers
          ville give at et event fra den
          1/1/20 til 1/1/20 vil vare 0
          dage og på samme måde ville
          alle andre tidsrum også have
          1 dag for lidt
        */
        const amountOfDays = end - start + 1;
        form.days = amountOfDays
        return {
          amountOfDays
        }
      }

      let form = {
        title: '',
        desc: '',
        start: '',
        end: '',
        location: '',
        group: '',
        days: ''
      }
      

      const onSubmit = async () => {
        /* 
          vis man kun har udfyldt
          start tidspunkt skal
          den antage at eventet
          kun varer en dag

          så derfor sætter
          jeg sluttidspunktet
          til samme dag som
          startstidspunktet
        */
        if(form.end == ''){
          form.end = form.start
        }
        
        /* 
          Jeg smider de dynamiske
          inputfelter ind i form
          objected og sender det
          til firebase
        */
        getDynamicInputValues()
        await createCalendar({ ...form }) 
        /* 
          Jeg reseter det
          predefinerede form
          felter

          To be honest jeg
          tror ikke de virker
          da jeg lavede dem
          hvar objectet reactive
          vilke jeg var nød til
          at ændre da jeg ikke
          kunne finde ud af at
          pushe dynamiske
          inputs ind i den
        */
        form.title = ''
        form.desc = ''
        form.start = ''
        form.end = ''
        form.location = ''

        /* 
          Jeg clear hele
          formen så den er
          klar til brug
          igen
        */
        clearForm()
      }

      return { form, onSubmit, spawnDayAttachments }
    } 
  }
</script>

<style lang="scss" scoped>

</style>