<template>
  <div>
    <div>
      <MainContent>
        <template v-slot:title>業務内容</template>
        <template v-slot:image>
          <img src="#" alt="" />
        </template>
        <template v-slot:content>
          <div class="grid grid-cols-1">
            <table class="table-auto mx-3 my-3 font-mono">
              <thead>
                <tr>
                  <th class="px-4 py-2 text-center bg-gray-500 text-white">
                    業務内容
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">windowsソフトウェアの開発</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    スマートフォンソフトウェアの開発
                  </td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">webアプリケーションの開発</td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">
                    コンピューターネットワークの設計
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">ホームページ作成</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    ふるさとの再生にIT技術を活用する事業運営
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">経営コンサルティング</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">その他の情報サービス</td>
                </tr>
              </tbody>
            </table>
            <table class="table-auto mx-3 my-3 font-mono">
              <thead>
                <tr>
                  <th class="px-4 py-2 text-center bg-gray-500 text-white">
                    業務実績
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">システム構築</td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">
                    民間企業様　業務運営支援システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    団体様　利用者総合管理システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    自治体様　下水道維持管理システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    自治体様　メール１１９番通報システム
                  </td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">ネットワーク構築</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    自治体様　庁内ネットワーク構築業務
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    団体様　新統合ネットワーク構築業務
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    医療機関様　ネットワーク整備業務
                  </td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">Webサイト制作</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">自治体様　Webサイト構築</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">団体様　Webサイト構築</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">医療機関様　Webサイト構築</td>
                </tr>

                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">人材派遣</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">民間企業様　SE　PG</td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">その他</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">自治体様　データ移管作業</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">各種運用保守業務</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </MainContent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    async asyncData() {
      // const res = await Promise.all([
      //   axios.get("http://reneil.app/performance", {
      //     // headers: {
      //     //   Authorization:
      //     //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw",
      //     // },
      //   }),
      // ]);
      // // ("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjM3MTQwLCJleHAiOjE2NDIyMjkxNDB9.x309Z9xogJglOCjXQVtVnRrhZKAdUyNlP2KIFWUSipw");
      // return {
      //   performance: res[0].data,
      // };
    },
};
</script>
