// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-testimonial", '@nuxtjs/color-mode', '@zadigetvoltaire/nuxt-gtm', "@nuxtjs/sitemap"],

  routeRules: {
    '/media/articles/2024-09-28-release-sve_42': { prerender: true },
    '/media/articles/2025-02-24-blog-ama-webinar': { prerender: true },
    '/': { redirect: '/home' },
    '/groups/resources': { redirect: '/specifications/resources' },
    '/join/join-newsletter': { redirect: '/about/newsletter' },
  },

  site: {
    url: 'https://www.openmobilealliance.org/', 
    name: 'Website of OMA SpecWork as an innovative kind of Standards Development Organization' 
  },

  colorMode: {
    preference: 'dark'
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    markdown: {
      anchorLinks: false 
    },
    api: {
      baseURL: '/site-api/_content'
    }
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  gtm: {
    id: 'GTM-T55F5MHQ', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    },
  
  googleFonts: {
    families: {
      "Roboto": [300, 400, 600, 700],
      "DM Sans": [400, 500, 600, 700],
      "DM Mono": [400, 500],
    },
  },

  app: {
    // baseURL: process.NODE_ENV === 'production' ? "/oma-knowledge-base/" : '/',
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: 'en'
      },
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "shortcut icon", href: "/favicon-1.png", type: "image/x-icon" },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-13",
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/news', '/media/articles', '/guidelines', '/groups', '/media', '/oma-events', '/about/faq/', '/oma-events/past-events', '/about/newsletter'],
      ignore: ['/www.ericsson.com'], 
      failOnError: false,
    },
  }
});