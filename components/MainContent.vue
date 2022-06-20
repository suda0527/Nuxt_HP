<template>
  <div>
    <!-- component -->
    <section class="bg-white container mx-auto px-5">
      <h1 class="font-mono font-bold text-4xl text-center mx-5 mt-20 pt-20">
        <slot name="title">たいとる</slot>
      </h1>
      <div class="flex flex-col items-center py-8">
        <div class="flex flex-col w-full mb-12 text-left">
          <div class="w-full mx-auto lg:w-1/2">
            <slot name="image">
              <img
                class="rounded-sm"
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
            </slot>
            <slot name="content">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
