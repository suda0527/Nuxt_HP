<template>
 <div class="">
    <div class="wrapper center mt-16 w-full">
      <video class="w-full" id="video" muted loop autoplay playsinline disablePictureInPicture>
        <source src="" type='video/mp4'>
      </video>
    </div>

    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="content in sortedContentsByUpdateAt"
        :key="content.id"
        class=""
      >
        <Card>
          <template v-slot:image>
            <div class="img_wrap border overflow-hidden cursor-pointer z-0">
              <a :href="`/contents/${content.id}.html`">
                <img
                  class="rounded-none content-img w-full transform hover:scale-125 duration-500"
                  :src="`/images/${content.url}`"
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
    return {flag:true};
  },
  methods: {
    
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
    return {
      contents: res[0].data,
    };
  },
   mounted: function(){
    // リクエスト時の秒数のレンジによって表示する動画を変化させる
    window.addEventListener('load', function(){
      var now = new Date();
      let time = now.getSeconds();
      var img = document.getElementById('video');
      if(time >= 0 && time < 12){
        img.setAttribute('src', 'images/reneil_corp_mv1.mp4');
      }else if(time >= 12 && time < 24){
        img.setAttribute('src', 'images/reneil_corp_mv2.mp4');
      }else if(time >= 24 && time < 36 ){
        img.setAttribute('src', 'images/reneil_corp_mv3.mp4');
      }else if(time >= 36 && time < 48 ){
        img.setAttribute('src', 'images/reneil_corp_mv4.mp4');
      }else if(time >= 48 && time < 60 ){
        img.setAttribute('src', 'images/reneil_corp_mv5.mp4');
      }else{
        img.setAttribute('src', 'images/reneil_corp_mv5.mp4');
      }
    });
    window.addEventListener('load', function(){
      var now = new Date();
      let time = now.getSeconds();
      var img = document.getElementById('video');
    });
  }
};

</script>
