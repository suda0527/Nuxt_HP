<template>
  <div>
    <div>
      <MainContent>
        <template v-slot:title>Thank You</template> -->
        <template v-slot:image>
          <img class="mx-auto py-20" src="" alt="" />
        </template>
        <template v-slot:content>
          <div class="tracking-widest leading-loose">
            <h2>メッセージ送信完了</h2>
            <p>
              入力頂いた内容が送信されました。頂いた内容は後程確認次第お返事させて頂きます。
            </p>
            <Nuxt-link to="/">
              <button
                class="block bg-green-400 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded"
              >
                戻る
              </button>
            </Nuxt-link>
          </div>
        </template>
      </MainContent>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {};
</script>
