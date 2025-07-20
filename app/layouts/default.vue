<template>
  <div class="bg-gray-300">
    <!-- header -->
    <header class="bg-white flex justify-between text-xl p-3">
    <!--
    <img
        v-if="isLoaded"
        src="/images/logo.png"
    >        
    -->
      <div class="">
        <NuxtImg src="/images/logo.png" 
        alt="logo shoping cart"
        densities="x1 x2"
        format="webp"
        sizes="5vw  md:7vw"
        v-slot="{
            isLoaded
        }"
        >
     <!-- Show the actual image when loaded -->
  <img
    v-if="isLoaded"
    src="/images/logo.png"
  >

  <!-- Show a placeholder while loading -->
  <div v-else>
    logo ...
  </div>
    </NuxtImg>
      </div>
      <NuxtLink to="/products"> products </NuxtLink>
    </header>
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
