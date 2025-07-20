<template>
    <aside class="md:col-span-1 bg-white  p-5 bg-gray-100 shadow space-y-6">
      <!-- Search by Name -->
      <div>
        <label class="block  text-sm font-semibold text-gray-700 mb-2">Search by Name or description</label>
        <input
          type="text"
          :value="props.search"
          @input="$emit('update:search', $event.target.value || null)"
          placeholder="ring , necklace ..."
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <!-- category -->
      <label class="block text-sm font-semibold text-gray-700 mb-2">Categories</label>
       <div v-for="(cat, index) in props.categories" :key="index" class="mb-2">
        <input
          type="radio"
          :id="cat"
          name="category"
          :value="cat"
          v-model="localCategory"

        />
        <label :for="cat" class="ms-2">{{ cat }}</label>
      
       </div>
      <!-- Price Range Inputs -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Price Range (MAD)</label>
        <div class="flex gap-2">
          <input
            type="number"
            :value="props.minPrice"
            @input="$emit('update:minPrice', $event.target.value || null)"
            placeholder="Min"
            class="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            :value="props.maxPrice"
            @input="$emit('update:maxPrice', $event.target.value || null)"

            placeholder="Max"
            class="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Quick Filters</label>
        <div class="flex flex-wrap gap-2">
          <button @click="emit('update:minPrice', 0); emit('update:maxPrice', 100)"
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg">
            Under 100 MAD
          </button>
          <button @click="emit('update:minPrice', 100); emit('update:maxPrice', 900)"
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg">
            100 - 900 MAD
          </button>
          <button @click="emit('update:minPrice', 900); emit('update:maxPrice', null)"
            class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg">
            Above 900 MAD
          </button>
        </div>
    </div>
      <!-- Apply Filters Button -->
       
      <div>

        <button @click="
          $emit('update:minPrice', 0);
          $emit('update:maxPrice', 0);
          $emit('update:search', '')
          $emit('update:category', null)
        " class="px-3 py-1.5 w-full text-sm bg-red-100 hover:bg-red-500 hover:text-white rounded-lg">
          Reset Filters
        </button>

      </div>
    </aside>
</template>

<script setup>
const props =  defineProps({
  search: String,
  minPrice: Number,
  maxPrice: Number,
  category:String,
  categories : Object

})

const emit = defineEmits(['update:search', 'update:minPrice', 'update:maxPrice' ,'update:category'])
const localCategory = computed({
  get: () => props.category,
  set: (val) => emit('update:category', val)
})
</script>

<style lang="scss" scoped>

</style>