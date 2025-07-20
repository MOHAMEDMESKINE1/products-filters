// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image'],
  imports: {
    dirs: ['composables','stores','utils']
  },
  css:[
    "@/assets/css/main.css"
  ],
  image:{
   
      presets: {
        cover: {
          modifiers: {
            fit: 'cover',
            format: 'jpg',
            width: 100,
            height: 100
          }
        },
        contain: {
          modifiers: {
            fit: 'contain',
            format: 'png',
            width: 200,
            height: 200,
          },
        },
        thumbnail: {
          modifiers: {
            fit: 'cover',
            width: 50,
            height: 50,
            format: 'webp',
          },
        },
        portrait: {
          modifiers: {
            fit: 'cover',
            width: 300,
            height: 500,
            format: 'jpg',
          },
        },
        square: {
          modifiers: {
            fit: 'cover',
            width: 400,
            height: 400,
            format: 'png',
          },
        }
      }
    
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: [ 'italic', 'normal'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ]
    },
  }

  
 
})