
<script setup lang="ts">
 
const{product} =defineProps(['product'])
const addToCart = async ()=>{
    const res = await $fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    body: {
      userId: 1,
      products: [
        {
          productId: product.id,
          quantity: 1,
        },
      ],
    }
  })
  console.log(res);
}
</script>

<template>

      <div class="  bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
          <div class="h-40  rounded mb-4">
            <!-- <img  :src="product?.image" loading="lazy" alt="Product Image" class="w-36  h-36 mx-auto " /> -->
            <NuxtImg :src="product?.image"  class="mx-auto w-36  h-36"/>

          </div>
          <h3 class="text-lg font-semibold text-gray-800 truncate">{{product?.title}}</h3>
          <p class="text-sm text-gray-500 line-clamp-3  max-h-20 overflow-hidden"> {{product?.description.slice(0,100)}}...</p>
          <div class="flex items-center justify-between">
            <p class="text-sm text-green-500 truncate">
            <CustomIcon name="lucide:milestone" width="20" />
             {{product?.category}}
            </p>
              <p class="my-5 text-red-600 text-md ">
             <CustomIcon name="lucide:shopping-cart" width="20" @click="addToCart" /> 
          </p>
          </div>
        <div class="flex items-center justify-between">
          <NuxtLink :to="`/products/${product?.id}`" class="">
               <div class="flex items-center gap-2">
                 <CustomIcon name="lucide:eye" width="20" class="text-green-600 " />
                <small class="hover:text-green-600">
                  View Details 
                </small>
               </div>

          </NuxtLink>

          <p class="my-5 text-blue-600 font-bold">{{ product?.price }} MAD</p>

        </div>
     </div>
   

</template>


<style scoped>

</style>