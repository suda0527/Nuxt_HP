(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{332:function(t,n,e){"use strict";e.r(n);var r=e(24),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"max-w-md mx-auto"},[e("div",{staticClass:"bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-5"},[t._t("image"),t._v(" "),t._t("link",(function(){return[e("a",{staticClass:"\n          text-white\n          bg-blue-700\n          hover:bg-blue-800\n          focus:ring-4 focus:ring-blue-300\n          font-medium\n          rounded-lg\n          text-sm\n          px-3\n          py-2\n          text-center\n          inline-flex\n          items-center\n        ",attrs:{href:"#"}},[t._v("\n        Read more\n      ")])]})),t._v(" "),e("div",{staticClass:"h-40 p-5 overflow-scroll scrollbar-hide"},[e("div",[e("h5",{staticClass:"\n            text-gray-900\n            font-bold\n            tracking-tight\n            mb-2\n            whitespace-nowrap\n          "},[t._t("title",(function(){return[t._v(" Noteworthy technology acquisitions 2021")]}))],2)]),t._v(" "),e("p",{staticClass:"font-normal text-gray-700 mb-3"},[t._t("text",(function(){return[t._v("\n          Here are the biggest enterprise technology acquisitions of 2021 so\n          far, in reverse chronological order.\n        ")]}))],2)])],2)])}),[],!1,null,null,null);n.default=component.exports},333:function(t,n,e){"use strict";var r=e(7),o=e(3),c=e(63),l=e(25),d=e(33),f=e(12),v=e(6),m=e(202),h=e(136),x=e(334),_=e(335),y=e(75),w=e(336),C=[],k=o(C.sort),A=o(C.push),E=v((function(){C.sort(void 0)})),j=v((function(){C.sort(null)})),B=h("sort"),J=!v((function(){if(y)return y<70;if(!(x&&x>3)){if(_)return!0;if(w)return w<603;var code,t,n,e,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)C.push({k:t+e,v:n})}for(C.sort((function(a,b){return b.v-a.v})),e=0;e<C.length;e++)t=C[e].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:E||!j||!B||!J},{sort:function(t){void 0!==t&&c(t);var n=l(this);if(J)return void 0===t?k(n):k(n,t);var e,r,o=[],v=d(n);for(r=0;r<v;r++)r in n&&A(o,n[r]);for(m(o,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:f(n)>f(e)?1:-1}}(t)),e=o.length,r=0;r<e;)n[r]=o[r++];for(;r<v;)delete n[r++];return n}})},334:function(t,n,e){var r=e(62).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},335:function(t,n,e){var r=e(62);t.exports=/MSIE|Trident/.test(r)},336:function(t,n,e){var r=e(62).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},351:function(t,n,e){"use strict";e.r(n);var r=e(10),o=(e(60),e(333),e(15),e(34),e(35),e(61)),c={data:function(){return{}},computed:{sortedContentsByUpdateAt:function(){return this.contents.sort((function(a,b){return a.updated_at<b.updated_at?1:a.updated_at>b.updated_at?-1:0}))}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([o.get("https://reneil.app/contents")]);case 2:return n=t.sent,t.abrupt("return",{contents:n[0].data});case 4:case"end":return t.stop()}}),t)})))()}},l=e(24),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("div",{staticClass:"\n      mt-20\n      py-20\n      text-3xl\n      md:text-5xl\n      lg:text-5xl\n      text-center\n      font-mono\n      bg-white\n      mb-5\n    "},[t._v("\n    縁を絆に。偶然を必然に。故郷に恩返しする。\n  ")]),t._v(" "),e("div",{staticClass:"\n      grid grid-cols-1\n      sm:grid-cols-2\n      md:grid-cols-3\n      lg:grid-cols-4\n      xl:grid-cols-6\n    "}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},t._l(t.sortedContentsByUpdateAt,(function(content){return e("div",{key:content.id,staticClass:"mx-auto"},[e("Card",{scopedSlots:t._u([{key:"image",fn:function(){return[e("img",{staticClass:"rounded-t-lg content-img",attrs:{id:"image1",src:"images/"+content.url,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[t._v(t._s(content.title))]},proxy:!0},{key:"text",fn:function(){return[t._v(t._s(content.subtitle)+" ")]},proxy:!0},{key:"link",fn:function(){return[e("div",{staticClass:"grid grid-cols-1 text-center"},[e("a",{staticClass:"\n                my-1\n                bg-blue-700\n                text-white\n                hover:bg-blue-500\n                font-semibold\n                hover:text-white\n                py-2\n                px-4\n                border border-blue-500\n                hover:border-transparent\n                rounded\n              ",attrs:{href:"contents/"+content.id}},[t._v("\n              click on!\n            ")])])]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Card:e(332).default})}}]);