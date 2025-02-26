<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
const { products } = useProducts()
</script>