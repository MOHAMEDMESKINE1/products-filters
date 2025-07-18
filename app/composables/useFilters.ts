const useFilters = () => {
    const filters = reactive({
        search: '',
        description: '',
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

            const priceMatch = !filters?.minPrice || product?.price >= filters?.minPrice;
            const maxPriceMatch = !filters?.maxPrice || product?.price <= filters?.maxPrice;

            return searchMatch && priceMatch && maxPriceMatch;
        });
    })



    return {
        productsList,
        filters,
        filteredProducts
    }
}

export default useFilters