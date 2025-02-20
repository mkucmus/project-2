<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">My Account</h2>
    <div class="bg-white p-6 rounded-lg shadow">
      <div v-if="accountStore.isLoggedIn">
        <h3 class="text-xl font-semibold mb-4">Profile Information</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <p class="mt-1">{{ accountStore.user.name }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <p class="mt-1">{{ accountStore.user.email }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-600">Please log in to view your account details.</p>
        <NuxtLink 
          to="/account/login"
          class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAccountStore } from '../../stores/account'

const accountStore = useAccountStore()
</script>