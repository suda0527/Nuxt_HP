(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{345:function(e,t,n){"use strict";n.r(t);n(63);var r={data:function(){return{showForm:!0,qtype:"",email:"",yname:"",content:"",address:"",tel:"",corporate_name:"",position:"",job_type:"",address_num:"",msg:""}}},o=n(20),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-20"},[n("div",{staticClass:"flex justify-center items-center w-full"},[n("div",{staticClass:"mt-10 md:w-1/2 bg-white rounded shadow-2xl p-8 m-4"},[n("h1",{staticClass:"mb-6 block w-full text-center text-gray-800 text-2xl font-bold"},[e._v("\n        問い合わせフォーム\n      ")]),e._v(" "),n("form",{attrs:{action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLScW9NtRgSSfQch9K10YJNH28tX_V1NclTPOskcA2Ym0wLdLNQ/formResponse",target:"dummy"}},[n("div",{staticClass:"flex flex-col mb-4"},[n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("お問い合わせ内容（必須）")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtype,expression:"qtype"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"job_type1",type:"radio",name:"entry.75024994",value:"仕事のご相談・お見積",required:""},domProps:{checked:e._q(e.qtype,"仕事のご相談・お見積")},on:{change:function(t){e.qtype="仕事のご相談・お見積"}}}),e._v("\n            仕事のご相談・お見積\n          ")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtype,expression:"qtype"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"job_type2",type:"radio",name:"entry.75024994",value:"HP内容についてのお問い合わせ",placeholder:"必須"},domProps:{checked:e._q(e.qtype,"HP内容についてのお問い合わせ")},on:{change:function(t){e.qtype="HP内容についてのお問い合わせ"}}}),e._v("\n            HP内容についてのお問い合わせ\n          ")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtype,expression:"qtype"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"job_type3",type:"radio",name:"entry.75024994",value:"求人についてのお問い合わせ"},domProps:{checked:e._q(e.qtype,"求人についてのお問い合わせ")},on:{change:function(t){e.qtype="求人についてのお問い合わせ"}}}),e._v("\n            求人についてのお問い合わせ\n          ")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtype,expression:"qtype"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"job_type4",type:"radio",name:"entry.75024994",value:"その他"},domProps:{checked:e._q(e.qtype,"その他")},on:{change:function(t){e.qtype="その他"}}}),e._v("\n            その他\n          ")]),e._v(" "),n("label",{staticClass:"my-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("郵便番号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address_num,expression:"address_num"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"address_num",type:"text",name:"entry.1567551409"},domProps:{value:e.address_num},on:{input:function(t){t.target.composing||(e.address_num=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("自治体名または企業名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.corporate_name,expression:"corporate_name"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"corporate_name",type:"text",name:"entry.1129030422",required:""},domProps:{value:e.corporate_name},on:{input:function(t){t.target.composing||(e.corporate_name=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("部署/役職")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"position",type:"text",name:"entry.1310069162",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("電話番号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"tel",type:"text",name:"entry.1166974658",required:"",placeholder:"必須"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("お名前")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.yname,expression:"yname"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"yname",type:"text",name:"entry.2005620554",placeholder:"必須"},domProps:{value:e.yname},on:{input:function(t){t.target.composing||(e.yname=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("住所")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"address",type:"text",name:"entry.1065046570",placeholder:"必須"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("メールアドレス")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"email",type:"text",name:"entry.1045781291",placeholder:"必須"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("label",{staticClass:"mb-2 font-bold text-lg text-gray-900",attrs:{for:"last_name"}},[e._v("問い合わせ内容")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"border py-2 px-3 text-grey-800",attrs:{id:"content",type:"text",name:"entry.839337160",required:""},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})]),e._v(" "),""!=e.qtype&&""!=e.tel&&""!=e.yname&&""!=e.address&&""!=e.email&&""!=e.content?n("div",[n("button",{staticClass:"\n              block\n              bg-green-400\n              hover:bg-green-600\n              text-white\n              uppercase\n              text-lg\n              mx-auto\n              p-4\n              rounded\n            ",attrs:{type:"submit",name:"button",value:"送信"},on:{click:function(t){return e.$router.push("thanks")}}},[e._v("\n            送信\n          ")])]):n("div",[n("button",{staticClass:"\n              block\n              bg-gray-400\n              text-white\n              uppercase\n              text-lg\n              mx-auto\n              p-4\n              rounded\n            ",attrs:{type:"submit",disabled:"",name:"button",value:"送信"}},[e._v("\n            送信\n          ")]),e._v(" "),n("div",{staticClass:"text-center"},[e._v("必須項目を入力してください")])])]),e._v(" "),n("iframe",{staticStyle:{display:"none"},attrs:{name:"dummy"}})])])])}),[],!1,null,null,null);t.default=component.exports}}]);