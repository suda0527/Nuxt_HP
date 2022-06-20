<!-- component -->
<!-- This is an example component -->
<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="box-inner max-w-md mx-auto">
    <div
      class="fade-in fade-in-up box bg-white border border-gray-200 rounded-none mt-20 max-w-sm m-5 js-scroll-fall"
    >
      <slot name="image" />
      <slot name="link">
        <a
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:ring-blue-300
            font-medium
            rounded-none
            text-sm
            px-3
            py-2
            text-center
            inline-flex
            items-center
          "
          href="#"
        >
          Read more
        </a>
      </slot>

      <div class="h-40 p-5 overflow-scroll scrollbar-hide">
        <div>
          <h5
            class="
              text-gray-900
              font-bold
              tracking-tight
              mb-2
              whitespace-nowrap
            "
          >
            <slot name="title"> Noteworthy technology acquisitions 2021</slot>
          </h5>
        </div>
        <p class="font-normal text-gray-700 mb-3">
          <slot name="text">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </slot>
        </p>
      </div>
    </div>
    <style>
      .fade-in {
        opacity: 0;
        transition-duration: 500ms;
        transition-property: opacity, transform;
      }

      .fade-in-up {
        transform: translate(0, 100px);
      }

      .scroll-in {
        opacity: 1;
        transform: translate(0, 0);
      }
    </style>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
  
  },
  mounted: function(){
    let fadeInTarget = document.querySelectorAll('.fade-in');
		window.addEventListener('scroll', function() {
      for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {
          fadeInTarget[i].classList.add('scroll-in');
        }
      }
    });
    	window.addEventListener('scroll', function() {
        console.log("こんにちは");
    });
  }
}
</script>