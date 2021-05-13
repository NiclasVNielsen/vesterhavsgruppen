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
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadCalendars, deleteCalendar  } from '@/main.js'

  export default {
    setup() {
      const calendars = useLoadCalendars()
      return { calendars, deleteCalendar }
    } 
  }
</script>

<style lang="scss" scoped>

</style>