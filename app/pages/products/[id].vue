
<script setup lang="ts">

const route = useRoute();
const { data: product } = await useFetch(() => `https://fakestoreapi.com/products/${route.params.id}`);
</script>

<template>

    <div class="  bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
          <div class="h-40  rounded mb-4">
            <img :src="product?.image" alt="Product Image" class="w-full  h-full object-contain" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">{{product?.title}}</h3>
          <p class="text-sm text-gray-500"> {{product?.description}}</p>
          <p>{{product?.category}}</p>
          <p class="mt-1 text-blue-600 font-bold">{{ product?.price }} MAD</p>

        
    </div>


</template>


<style scoped>

</style>