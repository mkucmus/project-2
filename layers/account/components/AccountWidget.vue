<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
    >
      <span class="text-lg">👤</span>
    </button>

    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4">
      <div v-if="accountStore.isLoggedIn">
        <p class="font-medium mb-2">{{ accountStore.user.email }}</p>
        <NuxtLink to="/account" class="block text-gray-600 hover:text-gray-900 mb-2">My Account</NuxtLink>
        <NuxtLink to="/account/orders" class="block text-gray-600 hover:text-gray-900 mb-2">My Orders</NuxtLink>
        <button 
          @click="accountStore.logout"
          class="text-red-500 hover:text-red-700"
        >
          Logout
        </button>
      </div>
      <div v-else>
        <NuxtLink 
          to="/account/login"
          class="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 mb-2"
        >
          Login
        </NuxtLink>
        <NuxtLink 
          to="/account/register"
          class="block w-full border border-gray-300 text-center px-4 py-2 rounded hover:bg-gray-50"
        >
          Register
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccountStore } from '../stores/account'

const accountStore = useAccountStore()
const isOpen = ref(false)
</script>