<script setup lang="ts">
definePageMeta({
  layout: false,
});

const route = useRoute();
const {
  pending,
  error,
  data: product,
} = await useLazyFetch(
  () => `https://fakestoreapi.com/products/${route.params.id}`
);

useProductSeo(product);
</script>

<template>
  <header class="bg-white flex justify-between text-xl p-3">
    <div class="">Fake Store Api</div>
    <NuxtLink to="/products"> products </NuxtLink>
  </header>
  <span v-if="error" class="text-red-500 flex items-center justify-center">Error Occured X</span>
  <div v-if="pending" class="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
    <span
      class="w-12 h-12 border-4 border-gray-900 mx-auto border-t-transparent rounded-full animate-spin"
    ></span>
  </div>

  <div v-if="!pending && !error" class="max-w-md mx-auto p-4 flex flex-col">
    <!-- Product image -->
    <div
      class="h-48 w-full flex items-center justify-center overflow-hidden rounded-xl mb-4"
    >
      <img
        :src="product?.image"
        alt="Product Image"
        class="object-contain h-full w-full"
      />
    </div>

    <!-- Category badge -->
    <span
      class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2 self-start"
    >
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
        rating : {{ product?.rating.rate }} *
      </p>
      <p class="text-green-600 font-bold text-lg">
        stock : {{ product?.rating.count }}
      </p>
    </div>
    <!-- Price & CTA -->
    <div class="mt-auto flex items-center justify-end">
      <p class="text-blue-600 font-bold text-lg">
        Price : {{ product?.price }} MAD
      </p>
    </div>
  </div>
</template>

<style scoped></style>
