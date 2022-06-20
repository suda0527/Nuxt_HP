<!-- component -->
<!-- This is an example component -->
<template>
  <div class="">
    <header class="fixed top-0 left-0 right-0">
      <nav
        class="
          font-mono
          flex
          justify-between
          w-full
        "
      >
        <div class="flex">
          <a href="/" class="my-0">
            <img
              class="mr-2 p-1 md:p-4 lg:p-4"
              src="@/assets/images/logo.png"
              width="200"
              alt=""
            />
          </a>
          <div class="pc-nav-info m-auto whitespace-nowrap">
            営業時間<br />
            平日 9:00〜17:30<br />
          </div>
          <div class="pc-nav-info m-auto px-2 whitespace-nowrap">
            TEL：027-212-3541<br />
            FAX：027-289-5287
          </div>
        </div>

        <div class="pc-nav">
          <div class="md:items-center md:w-auto">
            <div class="md:flex hidden pt-5">
              <a class="block mr-4" href="/">home</a>
              <a class="block mr-4" href="/performance.html">業務内容</a>            
              <a class="block mr-4" href="/corporate.html">会社情報</a>
              <a class="block mr-4" href="/access.html">アクセス</a>
              <a class="block mr-4" href="/pre-form.html">問い合わせ</a>
              <a class="block mr-4" href="/recruitment.html">採用情報</a>
            </div>
          </div>
        </div>
      </nav>
     <nav class="sp-nav" id="navtest">
         <ul>
            <li><a href="/">home</a></li>
            <li><a href="/performance.html">業務内容</a></li>
            <li><a href="/corporate.html">会社情報</a></li>
            <li><a href="/access.html">アクセス</a></li>
            <li><a href="/pre-form.html">問い合わせ</a></li>
            <li><a href="/recruitment.html">採用情報</a></li>
            <li class="close" @click="ChangeDisp('hide')"><span>閉じる</span></li>
         </ul>
      </nav>
      <div id="hamburger" type="button" @click="ChangeDisp('disp')">
         <span></span>
      </div>
    </header>
    <style>
      .toggle {
        transform: translateY( 0 );
        opacity: 1;
      }

      .sp-nav{
        display: none;
      }
      @media screen and (max-width: 670px) {
        .pc-nav-info {
            display: none;
        }
      }

      @media screen and (max-width: 1070px) {
        .pc-nav {
            display: none;
        }
      
        li {	
          text-decoration: none;
          color: #fff;
        }
      
        #hamburger {
          position: relative;
          display: block;
          width: 30px;
          height: 25px;
          margin: 0 0 0 auto;
        }

        #hamburger span {
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 100%;
          height: 2px;
          background-color: #000;
          transform: translateY(-50%);
        }

        #hamburger::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
        }
        #hamburger::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
        }

        .sp-nav {
          z-index: 1;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: block;
          width: 100%;
          background: rgba(0, 0, 0, .8);
          transition: all .2s ease-in-out;
          opacity: 0;
          transform: translateY(-100%);
        }

        .sp-nav ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .sp-nav li {
          margin: 0;
          padding: 0;
        }
        .sp-nav li span {
          font-size: 15px;
          color: #fff;
        }
        .sp-nav li a, .sp-nav li span {
          display: block;
          padding: 20px 0;
        }

        .sp-nav .close {
          position: relative;
          padding-left: 20px;
        }

        .sp-nav .close::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 16px;
          height: 1px;
          background: #fff;
          transform: rotate( 45deg );
        }
        
        .sp-nav .close::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 16px;
          height: 1px;
          background: #fff;
          transform: rotate( -45deg );
        }
      }

      Header{
        font-weight:bold;
        z-index: 99999;
        background-color:rgba(255,255,255,0);
      } 
      Header{
        position: fixed;
        height: 70px;
        width:100%;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 20px;
      }
      Header:UpMove{
        animation: UpAnime 0.5s forwards;
      }
      header:hover {
			  background-color: rgba(255, 255, 255, 1);
		  }

      @keyframes UpAnime{
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-100px);
        }
      }

      Header.DownMove{
        animation: DownAnime 0.5s forwards;
      }
      @keyframes DownAnime{
        from {
          opacity: 0;
          transform: translateY(-100px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      section{
        padding:300px 0;
      }

    </style>
  </div>
</template>
<script>
  export default {
    methods: {
      resize() {
        alert('おされたで')
      },

      ChangeDisp(mode)
      {
          const test = document.getElementById("navtest")
          if (mode =="disp")
          {
            test.style.transform = "translate(0, 0)";
            test.style.opacity = 1;
          }
          else
          {
            test.style.transform = "translate(0, -100%)";
            test.style.opacity = 0;
          }
      },
      handleResize: function() {
        // resizeのたびにこいつが発火するので、ここでやりたいことをやる
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if(this.width > 1070){
          const sp_nav = document.getElementById("navtest")
          sp_nav.style.transform = "translate(0,-100%)";
          sp_nav.style.opacity = 0;
        }
      }
    } ,
    mounted: function () {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>


