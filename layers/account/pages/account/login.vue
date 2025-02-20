<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-3xl font-bold mb-8">Login</h2>
    <div class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            v-model="form.email" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            v-model="form.password" 
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          >
        </div>
        <button 
          type="submit"
          class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-center text-gray-600">
        Don't have an account?
        <NuxtLink to="/account/register" class="text-blue-600 hover:text-blue-800">
          Register
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccountStore } from '../../stores/account'
import { useRouter } from 'nuxt/app'

const router = useRouter()
const accountStore = useAccountStore()

const form = ref({
  email: '',
  password: ''
})

const handleSubmit = async () => {
  await accountStore.login(form.value.email, form.value.password)
  router.push('/account')
}
</script>