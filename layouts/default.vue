<template>
  <v-app>
    <Header />
    <div
      class="min-h-screen md:mt-0 bg-gradient-to-b from-blue-100 to-blue-100"
    >
      <Nuxt />
    </div>
    <Footer />
  </v-app>
</template>
<script>
	import Header from "@/components/Header.vue"; // headerをインポート
	import Footer from "@/components/Footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>