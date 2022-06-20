<template>
  <div>
    <div>
      <MainContent>
        <template v-slot:title>{{ preform.title }}</template>
        <template v-slot:image>
          <img class="mx-auto py-20" src="" alt="" />
        </template>
        <template v-slot:content>
          <div
            class="tracking-widest leading-loose"
            v-html="$md.render(preform.content)"
          ></div>
          <Nuxt-link to="/form.html">
            <button
              class="p-5 mx-auto m-5 rounded text-4xl text-white bg-blue-700"
            >
              同意する
            </button>
          </Nuxt-link>
        </template>
      </MainContent>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let res = await axios.get(`https://reneil.app/strapi/preforms`, {
      // headers: {
      //   Authorization:
      //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
      // },
    });
    return { preform: res.data };
  },
};
</script>
