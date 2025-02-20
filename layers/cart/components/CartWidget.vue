<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
    >
      <span class="text-lg">🛒</span>
      <span class="font-semibold">{{ store.totalItems }}</span>
    </button>

    <div v-if="isOpen" class="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4">
      <h3 class="text-lg font-semibold mb-4">Shopping Cart</h3>
      <div v-if="store.items.length === 0" class="text-gray-500">
        Your cart is empty
      </div>
      <div v-else>
        <div v-for="item in store.items" :key="item.id" class="flex justify-between items-center mb-3">
          <div>
            <p class="font-medium">{{ item.name }}</p>
            <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
          </div>
          <button 
            @click="store.removeFromCart(item)"
            class="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
        <div class="mt-4 pt-4 border-t">
          <p class="text-lg font-bold">Total: ${{ store.total.toFixed(2) }}</p>
          <NuxtLink 
            to="/checkout"
            class="mt-4 block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
const isOpen = ref(false)
</script>