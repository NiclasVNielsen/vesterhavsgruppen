<template>
  <div class="card mt-4">
    <i>Delete all events more then a month old button</i><br>
    <i>Denne funktion er baseret på din egen computers ur så vær sikker på at det er stillet rigtigt</i>
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Titel</th>
          <th scope="col">Beskrivelse</th>
          <th scope="col">Den/Fra</th>
          <th scope="col">Til</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, title, desc, start, end } in calendars" :key="id">
          <td>{{ title }}</td>
          <td>{{ desc }}</td>
          <td>{{ start }}</td>
          <td v-if="start != end">{{ end }}</td>
          <td v-else></td>
          <td>
            <router-link :to="`/editCalendar/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteCalendar(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div id="calendar">
      <select id="calendar" v-model="selection.group">
        <option value="1" selected>Mini</option>
        <option value="2">Jr</option>
        <option value="3">Trop</option>
        <option value="4">Klan</option>
        <option value="5">Admin</option>
      </select>
      <div class="controls">
        <span @click="weekBackward">
          &lt;
        </span>
        <span @click="weekForward">
          &gt;
        </span>
        <span>
          {{year.year}}
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th class="calendarDate">Man <span>{{ time.man }}. {{ month.man }}</span></th>
            <th class="calendarDate">Tir <span>{{ time.tir }}. {{ month.tir }}</span></th>
            <th class="calendarDate">Ons <span>{{ time.ons }}. {{ month.ons }}</span></th>
            <th class="calendarDate">Tor <span>{{ time.tor }}. {{ month.tor }}</span></th>
            <th class="calendarDate">Fre <span>{{ time.fre }}. {{ month.fre }}</span></th>
            <th class="calendarDate">Lør <span>{{ time.lor }}. {{ month.lor }}</span></th>
            <th class="calendarDate">Søn <span>{{ time.son }}. {{ month.son }}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="calendarTime" v-for="(day, i) in theWeekDays" :key="day">
              <!-- 
                template elementer bliver ikke renderet på siden så når
                jeg sætter en v-for på dem vil de ikke danne et parent
                element til det jeg iterrere hend over
               -->
              <template v-for="{ id, title, dates, durations, dayStart, dayEnd, group } in calendars" :key="id">
                <template v-for="({ date }, index) in dates" :key="date">
                  <template v-if="group == selection.group">
                    <div v-if="date == dayDate[i]" :class="
                      { 
                        amountOfHours1: durations[index] == 1,
                        amountOfHours2: durations[index] == 2,
                        amountOfHours3: durations[index] == 3,
                        amountOfHours4: durations[index] == 4,
                        amountOfHours5: durations[index] == 5,
                        amountOfHours6: durations[index] == 6,
                        amountOfHours7: durations[index] == 7,
                        amountOfHours8: durations[index] == 8,
                        amountOfHours9: durations[index] == 9,
                        amountOfHours10: durations[index] == 10,
                        amountOfHours11: durations[index] == 11,
                        amountOfHours12: durations[index] == 12,
                        amountOfHours13: durations[index] == 13,
                        amountOfHours14: durations[index] == 14,
                        amountOfHours15: durations[index] == 15,
                        amountOfHours16: durations[index] == 16,
                        amountOfHours17: durations[index] == 17,
                        amountOfHours18: durations[index] == 18,
                        amountOfHours19: durations[index] == 19,
                        amountOfHours20: durations[index] == 20,
                        amountOfHours21: durations[index] == 21,
                        amountOfHours22: durations[index] == 22,
                        amountOfHours23: durations[index] == 23,
                        amountOfHours24: durations[index] == 24,

                        skipHours1: dayStart[index] == '01:00',
                        skipHours2: dayStart[index] == '02:00',
                        skipHours3: dayStart[index] == '03:00',
                        skipHours4: dayStart[index] == '04:00',
                        skipHours5: dayStart[index] == '05:00',
                        skipHours6: dayStart[index] == '06:00',
                        skipHours7: dayStart[index] == '07:00',
                        skipHours8: dayStart[index] == '08:00',
                        skipHours9: dayStart[index] == '09:00',
                        skipHours10: dayStart[index] == '10:00',
                        skipHours11: dayStart[index] == '11:00',
                        skipHours12: dayStart[index] == '12:00',
                        skipHours13: dayStart[index] == '13:00',
                        skipHours14: dayStart[index] == '14:00',
                        skipHours15: dayStart[index] == '15:00',
                        skipHours16: dayStart[index] == '16:00',
                        skipHours17: dayStart[index] == '17:00',
                        skipHours18: dayStart[index] == '18:00',
                        skipHours19: dayStart[index] == '19:00',
                        skipHours20: dayStart[index] == '20:00',
                        skipHours21: dayStart[index] == '21:00',
                        skipHours22: dayStart[index] == '22:00',
                        skipHours23: dayStart[index] == '23:00',
                        skipHours24: dayStart[index] == '24:00',
                      }
                    ">
                      {{ dayStart[index] }} <br>
                      <template v-if="durations[index] > 1">
                        {{ title }} <br>
                        <template v-if="durations[index] > 2">
                          <span>{{ dayEnd[index] }}</span>
                        </template>
                      </template>
                    </div>
                  </template>
                </template>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadCalendars, deleteCalendar  } from '@/main.js'
import { reactive } from 'vue'

  export default {
    setup() {
      const calendars = useLoadCalendars()

      let selection = reactive ({
        group: '1'
      })


      const theDays = ['man','tir','ons','tor','fre','lor','son']
      const theMonths = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec']
      const dayDate = reactive([
        `2020/01/01`,
        `2020/01/02`,
        `2020/01/03`,
        `2020/01/04`,
        `2020/01/05`,
        `2020/01/06`,
        `2020/01/07`
      ])
      const time = reactive({
        man: 'man',
        tir: 'tir',
        ons: 'ons',
        tor: 'tor',
        fre: 'fre',
        lor: 'lor',
        son: 'son'
      })
      const theWeekDays = [
        'man',
        'tir',
        'ons',
        'tor',
        'fre',
        'lor',
        'son'
      ]
      const month = reactive({
        man: 'jan',
        tir: 'jan',
        ons: 'jan',
        tor: 'jan',
        fre: 'jan',
        lor: 'jan',
        son: 'jan'
      })
      const year = reactive({
        year: '2020'
      })

      let currentDate = new Date()

      const weekBackward = () => {
        currentDate = currentDate.setDate(currentDate.getDate() - 7)
        currentDate = new Date(currentDate)
        updateCalendar()
      }

      const weekForward = () => {
        currentDate = currentDate.setDate(currentDate.getDate() + 7)
        currentDate = new Date(currentDate)
        updateCalendar()
      }

      let currentDisplayOfDates = []

      const updateCalendar = () => {
        currentDisplayOfDates = []
        /* 
          .getDay() er baseret på den americanske
          kalender hvor den første dag i ugen
          er søndag så jeg skal konvertere den
        */
        let currentDay = currentDate.getDay() - 1
        if(currentDay == -1){
          currentDay = 6
        }
        
        let forwards = 6 - currentDay
        let tempDate = currentDate;
  
        time[`${theDays[currentDay]}`] = currentDate.getDate()
        month[`${theDays[currentDay]}`] = theMonths[currentDate.getMonth()]
        year['year'] = currentDate.getFullYear()

        const createDate = (date) => {
          let x = `${date.getDate()}`;
          let y = `${date.getMonth() + 1}`;
          let z = `${date.getFullYear()}`;
          
          if(x.length < 2){
            x = `0${x}`
          }if(y.length < 2){
            y = `0${y}`
          }
          return `${z}/${y}/${x}`
        }

        currentDisplayOfDates.push(createDate(currentDate))
  
        for(let i = 0; i < currentDay; i++){
          tempDate.setDate(tempDate.getDate() - 1)
          time[`${theDays[currentDay - (i + 1)]}`] = tempDate.getDate()
          month[`${theDays[currentDay - (i + 1)]}`] = theMonths[tempDate.getMonth()]
          currentDisplayOfDates.push(createDate(tempDate))
        }
        tempDate.setDate(tempDate.getDate() + currentDay)
  
        for(let i = 0; i < forwards; i++){
          tempDate.setDate(tempDate.getDate() + 1)
          time[`${theDays[currentDay + (i + 1)]}`] = tempDate.getDate()
          month[`${theDays[currentDay + (i + 1)]}`] = theMonths[tempDate.getMonth()]
          currentDisplayOfDates.push(createDate(tempDate))
        }

        currentDisplayOfDates.sort()
        for(let i = 0; i < currentDisplayOfDates.length; i++){
          dayDate[i] = currentDisplayOfDates[i]
        }
      }

      updateCalendar()

      return { calendars, deleteCalendar, time, month, year, weekBackward, weekForward, dayDate, selection, theWeekDays }
    } 
  }
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #calendar{
    width: 800px;
    max-width: 100%;
    border: solid 1px #000;
    > select{
      height: 1.2em;
      width: 5em;
      margin: .4em;
    }
    .controls{
      float: right;
      margin: .4em;
      display: inline-flex;
      span{
        &:first-of-type, &:nth-last-of-type(2){
          margin-left: .4em;
          cursor: pointer;
        }
        &:last-of-type{
          margin-left: 1.4em;
        }
      }
    }
    table{
      width: 100%;
      >thead{
        width: 100%;
        .calendarDate{
          width: 14.2857%;
        }
      }
      >tbody{
        width: 100%;
        .calendarTime{
          position: relative;
          width: 14.2857%;
          height: 70vh;
          border: 1px solid #000;
          div{
            position: absolute;
            top: 0;
            left: 0;
            background: #EEE;
            width: 100%;
          }
        }
        .skipHours1{
          top: 4.1666% !important;
        }
        .skipHours2{
          top: 8.3333% !important;
        }
        .skipHours3{
          top: 12.5% !important;
        }
        .skipHours4{
          top: 16.666% !important;
        }
        .skipHours5{
          top: 20.8333% !important;
        }
        .skipHours6{
          top: 25% !important;
        }
        .skipHours7{
          top: 29.1666% !important;
        }
        .skipHours8{
          top: 33.3333% !important;
        }
        .skipHours9{
          top: 37.5% !important;
        }
        .skipHours10{
          top: 41.6666% !important;
        }
        .skipHours11{
          top: 45.8333% !important;
        }
        .skipHours12{
          top: 50% !important;
        }
        .skipHours13{
          top: 54.1666% !important;
        }
        .skipHours14{
          top: 58.3333% !important;
        }
        .skipHours15{
          top: 62.5% !important;
        }
        .skipHours16{
          top: 66.666% !important;
        }
        .skipHours17{
          top: 70.8333% !important;
        }
        .skipHours18{
          top: 75% !important;
        }
        .skipHours19{
          top: 79.1666% !important;
        }
        .skipHours20{
          top: 83.3333% !important;
        }
        .skipHours21{
          top: 87.5% !important;
        }
        .skipHours22{
          top: 91.6666% !important;
        }
        .skipHours23{
          top: 95.8333% !important;
        }
        .skipHours24{
          top: 100% !important;
        }


        .amountOfHours1{
          height: 4.1666%;
          z-index: 124;
        }
        .amountOfHours2{
          height: 8.3333%;
          z-index: 123;
        }
        .amountOfHours3{
          height: 12.5%;
          z-index: 122;
        }
        .amountOfHours4{
          height: 16.666%;
          z-index: 121;
        }
        .amountOfHours5{
          height: 20.8333%;
          z-index: 120;
        }
        .amountOfHours6{
          height: 25%;
          z-index: 119;
        }
        .amountOfHours7{
          height: 29.1666%;
          z-index: 118;
        }
        .amountOfHours8{
          height: 33.3333%;
          z-index: 117;
        }
        .amountOfHours9{
          height: 37.5%;
          z-index: 116;
        }
        .amountOfHours10{
          height: 41.6666%;
          z-index: 115;
        }
        .amountOfHours11{
          height: 45.8333%;
          z-index: 114;
        }
        .amountOfHours12{
          height: 50%;
          z-index: 113;
        }
        .amountOfHours13{
          height: 54.1666%;
          z-index: 112;
        }
        .amountOfHours14{
          height: 58.3333%;
          z-index: 111;
        }
        .amountOfHours15{
          height: 62.5%;
          z-index: 110;
        }
        .amountOfHours16{
          height: 66.666%;
          z-index: 109;
        }
        .amountOfHours17{
          height: 70.8333%;
          z-index: 108;
        }
        .amountOfHours18{
          height: 75%;
          z-index: 107;
        }
        .amountOfHours19{
          height: 79.1666%;
          z-index: 106;
        }
        .amountOfHours20{
          height: 83.3333%;
          z-index: 105;
        }
        .amountOfHours21{
          height: 87.5%;
          z-index: 104;
        }
        .amountOfHours22{
          height: 91.6666%;
          z-index: 103;
        }
        .amountOfHours23{
          height: 95.8333%;
          z-index: 102;
        }
        .amountOfHours24{
          height: 100%;
          z-index: 101;
        }
      }
    }
  }
</style>