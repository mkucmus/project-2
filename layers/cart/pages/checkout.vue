<template>
  <div>

    <h2 class="text-3xl font-bold mb-8">Checkout</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-4">Shipping Information</h3>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" v-model="form.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model="form.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Address</label>
            <textarea v-model="form.address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
        </form>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-4">Order Summary</h3>
        <div class="space-y-4">
          <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between">
            <span>{{ item.name }} (x{{ item.quantity }})</span>
            <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>
          <div class="pt-4 border-t">
            <div class="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${{ cartStore.total.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const form = ref({
  name: '',
  email: '',
  address: ''
})

const handleSubmit = () => {
  // Handle order submission
  console.log('Order submitted:', {
    customer: form.value,
    items: cartStore.items,
    total: cartStore.total
  })
}
</script>