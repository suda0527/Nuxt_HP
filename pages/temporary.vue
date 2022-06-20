<template>
  <div>
    <div>
      <MainContent>
        <template v-slot:title>{{ temporary.title }}</template>
        <template v-slot:image>
          <img class="mx-auto py-20" src="" alt="" />
        </template>
        <template v-slot:content>
          <div
            class="tracking-widest leading-loose"
            v-html="$md.render(temporary.content)"
          ></div>
        </template>
      </MainContent>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let res = await axios.get(`https://reneil.app/strapi/temporaries`, {
      // headers: {
      //   Authorization:
      //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
      // },
    });
    return { temporary: res.data };
  },
};
</script>
