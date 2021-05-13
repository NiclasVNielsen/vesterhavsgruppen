<template>
  <div>
    <h3>
        Edit calendar
    </h3>
    <form @submit.prevent="update">
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
        Update
      </button>
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
                form.title = calendar.title 
                form.desc = calendar.desc
                form.start = calendar.start
                form.end = calendar.end
            })

            const form = reactive({ title: '', desc: '', start: '', end: '' })

            const update = async () => {
                await updateCalendar(calendarId.value, {...form})
                router.push('/calendar')
                form.title = ''
                form.desc = ''
                form.start = ''
                form.end = ''
            }

            return {form, update}
        }
    }
</script>
