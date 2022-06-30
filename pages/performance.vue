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
                  <td class="border px-4 py-2">各種アプリケーション・ソフトウェア開発(Windows、iOS、Android等)</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                   基幹システム開発・保守(生産管理など)
                  </td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">ネットワーク(LAN、WAN)　構築・保守</td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">
                    ホームページ制作・保守
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">各種キッティング業務</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    コールセンター/ヘルプデスク業務
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">IT包括コンサルティング事業</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">ITスポット常駐サービス</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">ドローン・システム連携</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">その他情報サービス</td>
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
                  <td class="border px-4 py-2">【システム構築】</td>
                </tr>

                <tr>
                  <td class="border px-4 py-2">
                    画像共有システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    レジャー施設向けイベント用ツール制作
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    下水道維持管理システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    旅費精算システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    生産管理システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    販売管理システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    メール通報システム
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    ほか
                  </td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">ネットワーク構築</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    自治体様　庁内ネットワーク構築
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    某団体様向け　統合ネットワーク構築
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    医療機関様向け　ネットワーク構築
                  </td>
                </tr>
                 <tr>
                  <td class="border px-4 py-2">
                    製造業様向け　ネットワーク構築
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    ほか
                  </td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">ホームページ制作</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">自治体様向け</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">某団体様向け</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">医療機関様</td>
                </tr>
                  <tr>
                  <td class="border px-4 py-2">外郭団体様向け</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">ほか</td>
                </tr>

                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">人材派遣</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">※今期（2022）秋をもちまして、関連会社へ業務移管の予定</td>
                </tr>
                <tr class="text-center bg-gray-400 text-white">
                  <td class="border px-4 py-2">その他</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">コンサルティング</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">データ移行</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">システム、ネットワークの運用保守業務</td>
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
