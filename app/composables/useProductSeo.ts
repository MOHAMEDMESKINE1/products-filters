export const useProductSeo = (product :any) =>{
    
 useHead(() => ({
    title: `Details - ${product.value?.title || 'Loading...'}`,
    meta: [
      {
        name: 'description',
        content: product.value
          ? `Buy ${product.value.title} at the best price. Discover details, specs, and reviews.`
          : 'Product details page.'
      },
      {
        name: 'keywords',
        content: product.value
          ? `${product.value.title}, buy ${product.value.category}, best price ${product.value.title}`
          : 'product, details, buy online'
      }
    ]
  }))
  
  
  // seo meta 
useSeoMeta ( {
    title: product.value
      ? `${product.value.title} - Buy Now | My Amazing Store`
      : 'Loading product...',
  
    description: product.value
      ? `Buy ${product.value.title} in our store. Explore features, price, reviews and order online.`
      : 'Product details and price.',
  
    ogTitle: product.value
      ? `${product.value.title} - Buy Now`
      : 'Product details',
  
    ogDescription: product.value
      ? `Check out ${product.value.title}. Best price, reviews, and fast delivery.`
      : 'Product details.',
  
    ogImage: product.value?.image || 'https://example.com/default-image.jpg',
  
    twitterCard: 'summary_large_image'
  })
   
  
}