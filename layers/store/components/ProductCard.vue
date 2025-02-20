<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <div class="flex justify-between items-center">
      <span class="text-xl font-bold">${{ product.price }}</span>
      <button 
        @click="store.addToCart(product)"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useCartStore()
</script>