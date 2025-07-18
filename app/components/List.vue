
<script setup lang="ts">

defineProps({
    data : Object
})
</script>

<template>

    <div class="  bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
          <div class="h-40  rounded mb-4">
            <img :src="data?.image" alt="Product Image" class="w-full  h-full object-contain" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">{{data?.title}}</h3>
          <p class="text-sm text-gray-500"> {{data?.description}}</p>
          <p class="mt-1 text-blue-600 font-bold">{{ data?.price }} MAD</p>
    </div>


</template>


<style scoped>

</style>