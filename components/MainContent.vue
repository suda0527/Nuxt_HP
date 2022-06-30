<template>
  <div>
    <!-- component -->
    <section class="bg-white container mx-auto px-5 pt-40">
      <h1 class="font-bold text-4xl text-center mx-5">
        <slot name="title">たいとる</slot>
      </h1>
      <div class="flex flex-col items-center py-8">
        <div class="flex flex-col w-full mb-12 text-left">
          <div class="w-full mx-auto lg:w-3/5">
            <slot name="image">
              <img
                class="rounded-sm w-full min-w-full"
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
    <style>
      #sec {
        padding: 0;
        background: #fff;
        text-align: center;
        word-wrap: break-word;
      }

      #sec ul {
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        list-style: none;
        border: none;
      }
      #sec ul li {
        margin: 20px;
        padding: 25px;
        width: 320px;
        transition: box-shadow 0.3s;
      }
      #sec ul li:hover {
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
      #sec ul li:hover span {
        color: #63B7E6;
      }
      #sec ul li:hover p {
        color: #555;
      }
      #sec ul li:hover .title01 {
        color: #63B7E6;
      }
      #sec ul li:hover .title01:after {
        width: 25px;
      }
      #sec ul li span {
        font-size: 2.6em;
        display: block;
        transition: color 0.3s;
        color: #A2A2A2;
      }
      #sec ul li span:before, #sec ul li span:after {
        position: static;
      }
      #sec ul li .title01 {
        color: #6f6f6f;
        display: inline-block;
        font-size: 24px;
        font-weight: 100;
        transition: color 0.3s;
      }
      #sec ul li .title01:after {
        content: "";
        position: relative;
        left: 55%;
        top: 5px;
        transform: translateX(-50%);
        display: block;
        width: 100%;
        height: 1px;
        background: #6f6f6f;
        transition: width 0.3s;
      }
      #sec ul li p {
        color: #A2A2A2;
        text-align: left;
        text-indent: 1em;
        font-size: 16px;
        line-height: 26px;
        transition: color 0.3s;
      }
    </style>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
