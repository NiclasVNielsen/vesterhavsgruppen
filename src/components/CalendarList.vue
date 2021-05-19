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
                    <template v-if="date == dayDate[i]">
                      <div class="calendarItem" @click="popupToggle($event)" :class="
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
                          amountOfHours24: dayStart[index] == '00:00' && dayEnd[index] == '23:59',

                          skipHours1: dayStart[index].match(/01:[0-5][0-9]/gm),
                          skipHours2: dayStart[index].match(/02:[0-5][0-9]/gm),
                          skipHours3: dayStart[index].match(/03:[0-5][0-9]/gm),
                          skipHours4: dayStart[index].match(/04:[0-5][0-9]/gm),
                          skipHours5: dayStart[index].match(/05:[0-5][0-9]/gm),
                          skipHours6: dayStart[index].match(/06:[0-5][0-9]/gm),
                          skipHours7: dayStart[index].match(/07:[0-5][0-9]/gm),
                          skipHours8: dayStart[index].match(/08:[0-5][0-9]/gm),
                          skipHours9: dayStart[index].match(/09:[0-5][0-9]/gm),
                          skipHours10: dayStart[index].match(/10:[0-5][0-9]/gm),
                          skipHours11: dayStart[index].match(/11:[0-5][0-9]/gm),
                          skipHours12: dayStart[index].match(/12:[0-5][0-9]/gm),
                          skipHours13: dayStart[index].match(/13:[0-5][0-9]/gm),
                          skipHours14: dayStart[index].match(/14:[0-5][0-9]/gm),
                          skipHours15: dayStart[index].match(/15:[0-5][0-9]/gm),
                          skipHours16: dayStart[index].match(/16:[0-5][0-9]/gm),
                          skipHours17: dayStart[index].match(/17:[0-5][0-9]/gm),
                          skipHours18: dayStart[index].match(/18:[0-5][0-9]/gm),
                          skipHours19: dayStart[index].match(/19:[0-5][0-9]/gm),
                          skipHours20: dayStart[index].match(/20:[0-5][0-9]/gm),
                          skipHours21: dayStart[index].match(/21:[0-5][0-9]/gm),
                          skipHours22: dayStart[index].match(/22:[0-5][0-9]/gm),
                          skipHours23: dayStart[index].match(/23:[0-5][0-9]/gm),
                        }
                      ">
                        <span class="startDate" v-if="dayStart[index] != '00:00'">{{ dayStart[index] }} <br></span>
                        <template v-if="durations[index] > 1">
                          {{ title }} <br>
                          <template v-if="durations[index] > 2">
                            <span class="endDate" v-if="dayEnd[index] != '23:59'">{{ dayEnd[index] }}</span>
                          </template>
                        </template>
                        <div class="missingInfo" v-if="durations[index] < 3" :class="{
                          overflowFix: dayEnd[index].match(/23:[0-5][0-9]/gm)
                        }">
                          <span v-if="dayEnd[index].match(/23:[0-5][0-9]/gm)">{{ dayStart[index] }}</span>
                          <template v-if="durations[index] < 2">
                            <p>{{ title }}</p>
                          </template>
                          <span v-if="dayEnd[index] != '23:59'">{{ dayEnd[index] }}</span>
                        </div>
                      </div>
                      <div class="popup" @click.self="popupToggle()">
                        <div>
                          {{ title }}
                        </div>
                      </div>
                    </template>
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

      /* 
        addeventlistener til calendarItem[i]
        toggle popup[i]
      */

      let popupTracker = '';
      const popupToggle = (e) => {
        if(popupTracker == ''){
          e.target.classList.toggle('on')
          popupTracker = e.target
        }else{
          popupTracker.classList.toggle('on')
          popupTracker = ''
        }
      }

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

      return { calendars, deleteCalendar, time, month, year, weekBackward, weekForward, dayDate, selection, theWeekDays, popupToggle }
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
          >div:first-of-type{
            position: absolute;
            top: 0;
            left: 0;
            background: #EEE;
            width: 100%;
          }
        }
        .calendarItem{
          position: relative;
          min-height: 4.1666%;
          z-index: 124;
          border: solid 1px #000;
          &:hover{
            >.missingInfo{
              display: block;
            }
          }
          p, span{
            pointer-events: none;
          }
          span{
            font-size: .9em;
            opacity: .8;
          }
          .endDate{
              position: absolute;
              bottom: 0;
            }
          >.missingInfo{
            width: calc(100% + 2px);
            position: absolute;
            top: 100%;
            left: -1px;
            display: none;
            background: #EEE;
            border: solid 1px #000;
            border-top: none;
          }
          >.overflowFix{
            transform: translateY(-100%);
            border: solid 1px #000;
          }
        }
        .popup{
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #00000044;
          z-index: 9000;
          display: none;
          > div{
            background: #FFF;
            margin: 15vh auto;
            height: 70vh;
            max-width: 1000px;
          }
        }
        .on + .popup{
          display: block;
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