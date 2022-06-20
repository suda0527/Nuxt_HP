<template>
  <div class="">
    <style>
      .img_wrap{
        border: 1px solid #ddd;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;          
      }
      
      .img_wrap img{
        width: 100%;
        transition-duration: 0.5s;
      }

      .img_wrap:hover img{
        transform: scale(1.2);
        transition-duration: 0.5s;
      }
      .wrapper {
        position: relative;
        width: 100%;
      }

      #video{
        min-width: 100%;
        min-width: 100vw; 
      }
    </style>

    <div class="wrapper center mt-0">
      <video id="video" muted loop autoplay playsinline disablePictureInPicture>
        <source src="" type='video/mp4'>
      </video>
    </div>

    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
      "
    ></div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="content in sortedContentsByUpdateAt"
        :key="content.id"
        class="mx-auto"
      >
        <Card>
          <template v-slot:image>
            <div class="img_wrap">
              <a :href="`contents/${content.id}.html`">
                <img
                  class="rounded-none content-img"
                  :src="`images/${content.url}`"
                  alt=""
                />
              </a>
            </div>
          </template>
          <template v-slot:title>{{ content.title }}</template>
          <template v-slot:text>{{ content.subtitle }} </template>
          <template v-slot:link>
            <div class="grid grid-cols-1 text-center">
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {};
  },
  computed: {
    sortedContentsByUpdateAt() {
      return this.contents.sort((a, b) => {
        return a.updated_at < b.updated_at
          ? 1
          : a.updated_at > b.updated_at
          ? -1
          : 0;
      });
    },
  },
  async asyncData() {
    const res = await Promise.all([
      axios.get("https://reneil.app/strapi/contents")
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
      //   },
      // }),
    ]);
    // ("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw");
    return {
      contents: res[0].data,
    };
  },
   mounted: function(){
      // リクエスト時の秒数のレンジによって表示する動画を変化させる
      window.onload = function(){
        var now = new Date();
        let time = now.getSeconds();
        var img = document.getElementById('video');
        
        if(time >= 0 && time < 20){
          img.setAttribute('src', 'images/reneil_corp_2.mp4');
        }else if(time >= 20 && time < 40){
          img.setAttribute('src', 'images/Sample1_mv.mp4');
        }else if(time >= 40 && time < 60 ){
          img.setAttribute('src', 'images/Sample2_mv.mp4');
        }
      }
  }
};
</script>
