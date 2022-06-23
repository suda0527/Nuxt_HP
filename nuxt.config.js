import axios from "axios";
export default {
  target: "static",
  // router: {
  //   base:'/test001/'
  // },
  generate: {
    routes() {
      return axios
        .get("https://reneil.app/strapi/contents", {
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
          // },
        })
        .then((res) => {
          return res.data.map((user) => {
            return "/contents/" + user.id;
          });
        });
    },
    subFolders: false,
    dir: "docs",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "reneil",
    htmlAttrs: {
      lang: "ja",
    },
    base: {
      href: "router.base",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-basic-auth-module",
    "@nuxtjs/markdownit",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": {
      target:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScW9NtRgSSfQch9K10YJNH28tX_V1NclTPOskcA2Ym0wLdLNQ/formResponse",
      pathRewrite: { "^/api/": "" },
    },
  },
  markdownit: {
    preset: "default",
    linkify: true,
    html: true,
    breaks: true,
    injected: true,
    typographer: true,
    use: ["markdown-it-br"],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  googleFonts: {
    families: {
      "Zen Kurenaido": true,
      // or:
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100]
      // },
    },
  },
};
