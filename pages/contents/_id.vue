<template>
  <div>
    <div>
      <MainContent>
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:image>
          <img
            class="mx-auto py-20"
            :src="`images/${item.url}`"
            alt=""
          />
        </template>
        <template v-slot:content>
          <div v-html="$md.render(item.content)"></div>
        </template>
      </MainContent>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  css: ["~/css/build.css"],
  async asyncData({ params }) {
    let res = await axios.get(
      `https://reneil.app/strapi/contents/${params.id}`,
      {
        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
        // },
      }
    );
    return { item: res.data };
  },
};
</script>
