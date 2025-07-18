<script setup lang="ts">

const {
   productsList,
  filters,
   filteredProducts
} = useFilters();

const { data: products ,pending, error } = await useFetch('https://fakestoreapi.com/products',{
  key: 'products',
  lazy: true
});

watch(products, () => {
  productsList.value = products.value;

}, {
  immediate: true
});


</script>
<template>
 
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ">
    <!-- Sidebar (1 column) -->
   
      <Sidebar 
        v-model:search="filters.search"
        v-model:minPrice="filters.minPrice"
        v-model:maxPrice="filters.maxPrice"
        />
  

       <div class="md:col-span-3">
         <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 ">
          <span v-if="error"> error occured...</span>
          <span v-if="pending"> Loading...</span>

          <List v-else class="" v-for="(product, index) in filteredProducts" :key="index" 
          :data="product" @click="console.log(product)"/>
       </div>
       </div>
  </div>
     
     
</template>
      
  




<style scoped>

</style>