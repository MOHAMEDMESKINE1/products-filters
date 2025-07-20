const useFilters = () => {
    const filters = reactive({
        search: '',
        description: '',
        category:'',
        minPrice: 0,
        maxPrice: 0
    })
    const productsList  = ref([])
    const filteredProducts = computed(() => {
        return (productsList.value || []).filter((product) => {
            const searchTerm = filters?.search?.toLowerCase() || '';

            const descriptionMatch = product?.description.toLowerCase().includes(searchTerm || '');
            const nameMatch = product?.title.toLowerCase().includes(searchTerm || '');

            const searchMatch = nameMatch || descriptionMatch;
            
            const category = product?.category.toLowerCase().includes(filters.category || '');
            const priceMatch = !filters?.minPrice || product?.price >= filters?.minPrice;
            const maxPriceMatch = !filters?.maxPrice || product?.price <= filters?.maxPrice;

            return searchMatch && priceMatch && maxPriceMatch && category;
        });
    })
    

    // get categories
    // Extract unique categories:
    const categories = computed(() => {
        if (!productsList.value) return []
        const allCategories = productsList.value.map(p => p.category)
        return [...new Set(allCategories)]  // unique
      })



    return {
        productsList,
        filters,
        categories,
        filteredProducts
    }
}

export default useFilters