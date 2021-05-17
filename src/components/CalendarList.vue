<template>
  <div class="card mt-4">
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
      <select id="calendar" v-model="calendar">
        <option value="1" selected>Mini</option>
        <option value="2">Jr</option>
        <option value="3">Trop</option>
        <option value="4">Klan</option>
        <option value="5">Admin</option>
      </select>
      <table>
        <thead>
          <tr>
            <th class="calendarDate">Man <span></span></th>
            <th class="calendarDate">Tir <span></span></th>
            <th class="calendarDate">Ons <span></span></th>
            <th class="calendarDate">Tor <span></span></th>
            <th class="calendarDate">Fre <span></span></th>
            <th class="calendarDate">Lør <span></span></th>
            <th class="calendarDate">Søn <span></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
            <td class="calendarTime"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadCalendars, deleteCalendar  } from '@/main.js'

  export default {
    setup() {
      const calendars = useLoadCalendars()

      const currentDate = new Date()
      console.log(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`)
      console.log(currentDate.getDay())

      /* calendars._rawValue.forEach(calendar => {
        console.log(calendar)
      });

      console.log(calendars) */

      return { calendars, deleteCalendar }
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
    width: 70vh;
    border: solid 1px #000;
    > select{
      height: 1.2em;
      width: 5em;
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
          width: 14.2857%;
          height: 30vh;
          border: 1px solid #000;
        }
        .skipHours1{
          margin-top: 4.1666%;
        }
        .skipHours2{
          margin-top: 8.3333%;
        }
        .skipHours3{
          margin-top: 12.5%;
        }
        .skipHours4{
          margin-top: 16.666%;
        }
        .skipHours5{
          margin-top: 20.8333%;
        }
        .skipHours6{
          margin-top: 25%;
        }
        .skipHours7{
          margin-top: 29.1666%;
        }
        .skipHours8{
          margin-top: 33.3333%;
        }
        .skipHours9{
          margin-top: 37.5%;
        }
        .skipHours10{
          margin-top: 41.6666%;
        }
        .skipHours11{
          margin-top: 45.8333%;
        }
        .skipHours12{
          margin-top: 50%;
        }
        .skipHours13{
          margin-top: 54.1666%;
        }
        .skipHours14{
          margin-top: 58.3333%;
        }
        .skipHours15{
          margin-top: 62.5%;
        }
        .skipHours16{
          margin-top: 66.666%;
        }
        .skipHours17{
          margin-top: 70.8333%;
        }
        .skipHours18{
          margin-top: 75%;
        }
        .skipHours19{
          margin-top: 79.1666%;
        }
        .skipHours20{
          margin-top: 83.3333%;
        }
        .skipHours21{
          margin-top: 87.5%;
        }
        .skipHours22{
          margin-top: 91.6666%;
        }
        .skipHours23{
          margin-top: 95.8333%;
        }
        .skipHours24{
          margin-top: 100%;
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