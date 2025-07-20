
<script setup lang="ts">
definePageMeta({
  layout: false
})
const route = useRoute();
const { data: product } = await useFetch(() => `https://fakestoreapi.com/products/${route.params.id}`);
</script>

<template>
<header class="bg-white flex justify-between text-xl p-3">
             <div class="">Fake Store Api</div>
            <NuxtLink to="/products">
                products
            </NuxtLink>
         </header>
<div class="max-w-md mx-auto  p-4 flex flex-col">
  <!-- Product image -->
  <div class="h-48 w-full flex items-center justify-center overflow-hidden rounded-xl mb-4  ">
    <img :src="product?.image" alt="Product Image" class="object-contain h-full w-full" />
  </div>

  <!-- Category badge -->
  <span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2 self-start">
    {{ product?.category }}
  </span>

  <!-- Title -->
  <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
    {{ product?.title }}
  </h3>

  <!-- Description -->
  <p class="text-sm text-gray-500 mb-4 line-clamp-3">
    {{ product?.description }}
  </p>
 <!-- rating -->
 <div class="mt-auto flex items-center justify-between">
    <p class="text-red-600 font-bold text-lg">
     rating :  {{ product?.rating.rate }} *

    </p>
    <p class="text-green-600 font-bold text-lg">
      stock : {{ product?.rating.count }} 
    </p>
  </div>
  <!-- Price & CTA -->
  <div class="mt-auto flex items-center justify-end">
    <p class="text-blue-600 font-bold text-lg">Price : {{ product?.price }} MAD</p>
  </div>
 
</div>



</template>


<style scoped>

</style>