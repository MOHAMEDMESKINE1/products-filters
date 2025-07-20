<script setup lang="ts">
const { productsList, categories, filters, filteredProducts } = useFilters();

// const {
//   data: products,
//   pending,
//   error,
// } = await useFetch("https://fakestoreapi.com/products", {
//   key: "products",
//   lazy: true,
// });
const { pending,error, data: products } = useAsyncData('products-1', () => $fetch('https://fakestoreapi.com/products'), { immediate: true })

watch(
  products,
  () => {
    productsList.value = products.value;
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Sidebar (1 column) -->

    <Sidebar
      v-model:search="filters.search"
      v-model:minPrice="filters.minPrice"
      v-model:maxPrice="filters.maxPrice"
      v-model:category="filters.category"
      :categories="categories"
    />

    <div class="md:col-span-3">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        <span v-if="error"> error occured...</span>
        <span v-if="pending">
          <!-- animate spin -->
          <span
            v-if="pending"
            class="fixed inset-0 flex items-center justify-center bg-white/50 z-50"
          >
            <div
              class="w-12 h-12 border-4 border-gray-900 mx-auto border-t-transparent rounded-full animate-spin"
            ></div>
          </span>
        </span>

        <List
          v-else
          class=""
          v-for="(product, index) in filteredProducts"
          :key="index"
          :product="product"
          @click="console.log(product)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
