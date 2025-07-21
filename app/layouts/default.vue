<template>
  <div class="bg-gray-300">
    <!-- header -->
    <header class="bg-white flex justify-between items-center text-xl p-3">
      <!-- Logo on the left -->
      <div class="flex items-center">
        <NuxtImg
          src="/images/logo.png"
          alt="logo shopping cart"
          densities="x1 x2"
          format="webp"
          sizes="5vw md:7vw"
          v-slot="{ isLoaded }"
        >
          <div>
            <img
              v-if="isLoaded"
              src="/images/logo.png"
              alt="Logo"
              class="h-10 w-auto"
            />
            <div v-else>logo ...</div>
          </div>
        </NuxtImg>
      </div>

      <!-- Links on the right -->
      <nav class="flex gap-6 items-center">
        <NuxtLink to="/products">Products</NuxtLink>
        <NuxtLink to="/cart">Carts</NuxtLink>
      </nav>
    </header>

    <!-- Page content -->
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* active */
.router-link-active {
  color: cornflowerblue;
}
</style>
