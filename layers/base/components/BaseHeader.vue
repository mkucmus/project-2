<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">My Store</h1>
          <MainNav />
        </div>
        <div class="flex items-center space-x-4">
          <AccountWidget />
          <CartWidget />
        </div>
      </div>
    </nav>
  </header>
</template>