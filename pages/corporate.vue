<template>
  <div>
    <div class="mt-0 pt-0">
      <MainContent>
        <template v-slot:title>{{ corporate.title }}</template>
        <template v-slot:image>
          <img class="mx-auto py-20 w-full h-full" src="/images/large_IMG_0825_7acb62c5e9.JPG" alt="" />
        </template>
        <template v-slot:content>
          <!-- <img src="/image/large_IMG_0825_7acb62c5e9.JPG"> -->
          <table border="2" width="100%">
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280" style="color:white">商号・名称</th>
            <th class="pl-2"  width="80%">株式会社リネイル</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">代表者</th>
            <th class="pl-2" >代表取締役社長　　　前原 克好</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">所在地</th>
            <th class="pl-2" >〒371-0013<br />群馬県前橋市西片貝町4-6-2　SR³ビル</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">TEL</th>
            <th class="pl-2" >027-212-3541</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">FAX</th>
            <th class="pl-2" >027-289-5287</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">設立年月日</th>
            <th class="pl-2" >平成19年6月（法人登録日）</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">資本金</th>
            <th class="pl-2" >1千万円</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">従業員数</th>
            <th class="pl-2" >42人(2022年6月現在　契約社員を含む)</th>
          </tr>
        </table>

        <div class=" font-bold my-10 text-2xl text-center">
          役員一覧
        </div>
        <table border="2" width="100%">
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">代表取締役会長</th>
            <th class="pl-2" width="80%">添田　潤一</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">代表取締役社長</th>
            <th class="pl-2" >前原 克好</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">専務取締役</th>
            <th class="pl-2" >古川　勝章</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">取締役相談役</th>
            <th class="pl-2" >矢島　勲</th>
          </tr>
        </table>

        <div class="my-10 font-bold text-center text-2xl">
              会社沿革
        </div>
        <table border="2" width="100%">
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成19年6月</th>
            <th class="pl-2" width="80%">株式会社リネイル」として、 前橋市東片貝町に設立（資 本金１５万円）<br />代表取締役社長　添田　潤一 就任</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成19年10月</th>
            <th class="pl-2" >前橋市天川大島町に天川事業所を開設</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成20年7月</th>
            <th class="pl-2" >前橋市問屋町に問屋町事業所を開設</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成21年6月
</th>
            <th class="pl-2" >資本金を1000万円に増資</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成24年6月</th>
            <th class="pl-2" >添田　潤一　代表取締役会長に就任<br />矢島　勲　　代表取締役社長に就任</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">平成25年3月</th>
            <th class="pl-2" >前橋市大友町に本社所在地を移転</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">令和3年12月</th>
            <th class="pl-2" >前橋市西片貝町に本社所在地を移転</th>
          </tr>
          <tr>
            <th class="pl-2" width="20%" height="50" bgcolor="#6B7280"  style="color:white">令和4年6月</th>
            <th class="pl-2" >矢島　勲　取締役相談役に就任<br />前原 克好　　代表取締役社長に就任</th>
          </tr>
        </table>
        <style>
          table, td, th{
            border: 2px solid #f5f5f5;
          }
        </style>
        </template>
      </MainContent>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let res = await axios.get(`https://reneil.app/strapi/corporate`, {
      // headers: {
      //   Authorization:
      //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
      // },
    });
    return { corporate: res.data };
  },
};
</script>
