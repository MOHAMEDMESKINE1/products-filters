<script setup lang="ts">
import { CustomIcon } from '#components'
import { ref, onMounted } from 'vue'

const cartProducts = ref([]) // enriched list of product details
const loading = ref(true)

onMounted(async () => {

  // 1. Fetch cart data
  const { data: carts } = await useFetch('https://fakestoreapi.com/carts')

  const productsInCart = carts.value?.[0]?.products || [] // pick first cart for demo

  // 2. Fetch each product detail
  const productPromises = productsInCart.map(async ({ productId, quantity }) => {
    const { data: product } = await useFetch(`https://fakestoreapi.com/products/${productId}`)
    return {
      id: productId,
      title: product.value?.title,
      image: product.value?.image,
      description: product.value?.description,
      price: product.value?.price,
      quantity
    }
  })

  cartProducts.value = await Promise.all(productPromises)
  loading.value = false
})

const removeFromCart = async (productId: number) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/carts/${productId}`, {
      method: 'DELETE'
    })

    const result = await res.json()
   
 
  } catch (error) {
    console.error('Failed to delete product from cart:', error)
  }
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Cart Items</h1>

    <div v-if="loading">Loading cart...</div>

    <table v-else class="min-w-full bg-white rounded shadow">
      <thead class="bg-gray-100 text-left text-sm uppercase font-medium text-gray-600">
        <tr>
          <th class="p-3">Image</th>
          <th class="p-3">Title</th>
          <th class="p-3">Description</th>
          <th class="p-3">Price</th>
          <th class="p-3">Qty</th>
          <th class="">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartProducts" :key="item.id" class="border-b hover:bg-gray-50">
          <td class="p-3">
            <img :src="item.image" class="h-12 w-12 object-contain" />
          </td>
          <td class="p-3 font-semibold">{{ item.title }}</td>
          <td class="p-3 text-sm text-gray-500 truncate max-w-xs">{{ item.description }}</td>
          <td class="p-3 text-green-600 font-semibold">{{ item.price }} MAD</td>
          <td class="p-3">{{ item.quantity }}</td>
          <td class="p-3 font-bold text-blue-700">
            {{ (item.quantity * item.price).toFixed(2) }} MAD
          </td>
          <td>
            <button @click="removeFromCart(item.id)" class="text-red-600 hover:text-red-800">
             <CustomIcon name="lucide:trash-2" width="20" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
