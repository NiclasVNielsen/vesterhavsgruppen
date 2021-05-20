<template>
  <div>
    <h3>
        Edit calendar
    </h3>
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

      <span style="color: #F00">
        {{ errors.dates }}
      </span>

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


      <div id="spawnDayAttachments">
        <div v-for="({ day }, index) in form.dayStart" :key="day">
          <span>fra</span>
          <input :name="`day${index + 1}start`"  type="time" v-model="form.dayStart[index]" required>
          <span>til</span>
          <input :name="`day${index + 1}end`"  type="time" v-model="form.dayEnd[index]" required>
          <span>{{ `${new Date(new Date(form.start).setDate(new Date(form.start).getDate() + 1 + index))}`.split(' ')[0] }} {{ `${new Date(new Date(form.start).setDate(new Date(form.start).getDate() + 1 + index))}`.split(' ')[2] }} {{ `${new Date(new Date(form.start).setDate(new Date(form.start).getDate() + 1 + index))}`.split(' ')[1] }}</span>
        </div>
      </div>

      <button type="submit">
        Update
      </button>

      <hr>

    </form>
  </div>
</template>

<script>
    import { reactive, computed, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { getCalendar, updateCalendar } from '../main'

    export default {
      setup() {
        const router = useRouter()
        const route = useRoute()
        const calendarId = computed(() => route.params.id)

        onMounted(async () => {
            const calendar = await getCalendar(calendarId.value)
            form.group = calendar.group
            form.title = calendar.title 
            form.location = calendar.location 
            form.desc = calendar.desc
            form.start = calendar.start
            form.end = calendar.end
            form.dayStart = calendar.dayStart
            form.dayEnd = calendar.dayEnd
            form.dates = calendar.dates
            form.days = calendar.days
            form.durations = calendar.durations
        })

        const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
        const monthLengthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];

        let inputsStart = []
        let inputsEnd = []

        const spawnDayAttachments = () => {
          inputsStart = []
          inputsEnd = []

          if(form.start != ''){
            if(form.end == ''){
              form.end = form.start
            }
            
            const x = dayCalc().amountOfDays
            
            const container = document.getElementById('spawnDayAttachments')
            container.innerHTML=''

            const startDate = new Date(form.start)
            for(let i = 0; i < x; i++){
              const time = `${new Date(startDate.setDate(startDate.getDate() + 1))}`.split(' ')

              const subContainer = document.createElement('div')
              container.appendChild(subContainer)
              const start = document.createElement('input')
              const end = document.createElement('input')
              const from = document.createElement('span')
              from.appendChild(document.createTextNode('fra'))
              const to = document.createElement('span')
              to.appendChild(document.createTextNode('til'))
              const timeSpan = document.createElement('span')
              timeSpan.appendChild(document.createTextNode(`${time[0]} ${time[2]} ${time[1]}`))
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
              subContainer.appendChild(timeSpan)
            }
            return{
              x
            }
          }
        }

        const getDynamicInputValues = () => {
          form.durations = []
          if(inputsStart.length != 0){
            form.dayStart = []
            form.dayEnd = []
            form.dates = []
            for(let i = 0; i < inputsStart.length; i++){
              form.dayStart.push(inputsStart[i].value)
              form.dayEnd.push(inputsEnd[i].value)
              const x = inputsEnd[i].value.split(':')[0] - inputsStart[i].value.split(':')[0]
              form.durations.push(x)
  
              let start = form.start.split('-')
              start = yearCalc(start).amountOfDays;
  
              form.dates.push(dateCalc(start + i))
            } 
          }else{
            for(let i = 0; i < form.dayStart.length; i++){
              const x = form.dayEnd[i].split(':')[0] - form.dayStart[i].split(':')[0]
              form.durations.push(x)
            } 
          }
        }

        const yearCalc = (time) => {
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

          const createDate = (number) => {
            let x = `${number}`;
            
            if(x.length < 2){
              x = `0${x}`
            }
            return x
          }

          const date = `${years + 2020}/${createDate(currentMonth)}/${createDate(remainingDays)}`

          return {
            date
          }
        }

        const dayCalc = () => {

          let start = form.start.split('-')
          let end = form.end.split('-')
          start = yearCalc(start).amountOfDays;
          end = yearCalc(end).amountOfDays;

          const amountOfDays = end - start + 1;
          form.days = amountOfDays
          return {
            amountOfDays
          }
        }

        let form = reactive({
          title: '',
          desc: '',
          start: '',
          end: '',
          location: '',
          group: '',
          days: '',
          dates: [],
          durations: [],
          dayStart: [],
          dayEnd: []
        })

        let errors = reactive({
          dates: ''
        })
        

        const onSubmit = async () => {
          if(form.end == ''){
            form.end = form.start
          }

          if(form.start.split('-').join('') - 0 > form.end.split('-').join('') - 0){
            errors.dates = 'Noget er galt med datoerne'
            return console.error('Noget er galt med datoerne');
          }

          getDynamicInputValues()
          await updateCalendar(calendarId.value, {...form})
          router.push('/calendar')
        }

        return { form, errors, onSubmit, spawnDayAttachments }
      } 
    }
</script>
