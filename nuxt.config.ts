// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head:{
      title: "Smartmentor",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      
      meta: [
        { name: "description", content: "Metatag descrição do site"}
      ],
      link: [
        //{rel: 'stylesheet', href: './style.css'},
      ],
    }
  }
})

