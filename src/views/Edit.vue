<template>
  <div>
    <h3>
        Edit user
    </h3>
    <form @submit.prevent="update">
        <div>
            <label for="name">
                Name
            </label>
            <input v-model="form.name" type="text" required />
        </div>
        <div>
            <label for="email">
                Email
            </label>
            <input v-model="form.email" type="text" required />
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
    import { getUser, updateUser } from '../firebase'

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const userId = computed(() => route.params.id)
            onMounted(async () => {
                const user = await getUser(userId.value)
                form.name = user.name
                form.email = user.email
            })

            const form = reactive({ name: '', email: '' })

            const update = async () => {
                await updateUser(userId.value, {...form})
                router.push('/')
                form.name = ''
                form.email = ''
            }

            return {form, update}
        }
    }
</script>
