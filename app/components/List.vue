
<script setup lang="ts">
 
const{product} =defineProps(['product'])
const doSomethingOnLoad = () => {
  alert('loaded image ...')

}
</script>

<template>

<NuxtLink :to="`/products/${product?.id}`" class="">
      <div class="  bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
          <div class="h-40  rounded mb-4">
            <!-- <img  :src="product?.image" loading="lazy" alt="Product Image" class="w-36  h-36 mx-auto " /> -->
            <NuxtImg :src="product?.image"  class="mx-auto w-36  h-36"/>

          </div>
          <h3 class="text-lg font-semibold text-gray-800 truncate">{{product?.title}}</h3>
          <p class="text-sm text-gray-500 line-clamp-3  max-h-20 overflow-hidden"> {{product?.description.slice(0,100)}}...</p>
          <p class="text-sm text-green-500 truncate"> {{product?.category}}</p>
          <p class="my-5 text-blue-600 font-bold">{{ product?.price }} MAD</p>
     </div>
    </NuxtLink>


</template>


<style scoped>

</style>