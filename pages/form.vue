
<template>
  <div class="mt-20">
    <!-- component -->
    <div class="flex justify-center items-center w-full">
      <div class="mt-10 md:w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1
          class="mb-6 block w-full text-center text-gray-800 text-2xl font-bold"
        >
          問い合わせフォーム
        </h1>
        <!-- <form v-on:submit.prevent="submit" v-if="showForm"> -->
        <form method="post" action="mail.php" target="dummy">
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">お問い合わせ内容（必須）</label>
            <p>
              <input
                class="border py-2 px-3 text-grey-800"
                id="job_type1"
                v-model="qtype"
                type="radio"
                name="entry.75024994"
                value="仕事のご相談・お見積"
                required
              />
              仕事のご相談・お見積
            </p>
            <p>
              <input
                class="border py-2 px-3 text-grey-800"
                id="job_type2"
                v-model="qtype"
                type="radio"
                name="entry.75024994"
                value="HP内容についてのお問い合わせ"
                placeholder="必須"
              />
              HP内容についてのお問い合わせ
            </p>
            <p>
              <input
                class="border py-2 px-3 text-grey-800"
                id="job_type3"
                v-model="qtype"
                type="radio"
                name="entry.75024994"
                value="求人についてのお問い合わせ"
              />
              求人についてのお問い合わせ
            </p>
            <p>
              <input
                class="border py-2 px-3 text-grey-800"
                id="job_type4"
                v-model="qtype"
                type="radio"
                name="entry.75024994"
                value="その他"
              />
              その他
            </p>

            <label class="my-2 font-bold text-lg text-gray-900" for="last_name"
              >郵便番号</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="address_num"
              v-model="address_num"
              type="text"
              name="entry.1567551409"
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >自治体名または企業名</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="corporate_name"
              v-model="corporate_name"
              type="text"
              name="entry.1129030422"
              required
            />
            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >部署/役職</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="position"
              v-model="position"
              type="text"
              name="entry.1310069162"
              required
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >電話番号</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="tel"
              v-model="tel"
              type="text"
              name="entry.1166974658"
              required
              placeholder="必須"
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >お名前</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="yname"
              v-model="yname"
              type="text"
              name="entry.2005620554"
              placeholder="必須"
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >住所</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="address"
              v-model="address"
              type="text"
              name="entry.1065046570"
              placeholder="必須"
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >メールアドレス</label
            >
            <input
              class="border py-2 px-3 text-grey-800"
              id="email"
              v-model="email"
              type="text"
              name="entry.1045781291"
              placeholder="必須"
            />

            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
              >問い合わせ内容</label
            >
            <textarea
              class="border py-2 px-3 text-grey-800"
              id="content"
              v-model="content"
              type="text"
              name="entry.839337160"
              required
            />
          </div>
          <div
            v-if="
              qtype != '' &&
              tel != '' &&
              yname != '' &&
              address != '' &&
              email != '' &&
              content != ''
            "
          >
            <button
              class="
                block
                bg-green-400
                hover:bg-green-600
                text-white
                uppercase
                text-lg
                mx-auto
                p-4
                rounded
              "
              type="submit"
              name="button"
              value="送信"
              @click="$router.push('thanks')"
            >
              送信
            </button>
          </div>
          <div v-else>
            <button
              class="
                block
                bg-gray-400
                text-white
                uppercase
                text-lg
                mx-auto
                p-4
                rounded
              "
              type="submit"
              disabled
              name="button"
              value="送信"
            >
              送信
            </button>
            <div class="text-center">必須項目を入力してください</div>
          </div>
        </form>
        <iframe name="dummy" style="display: none"></iframe>
        <!-- <div class="p-formSucess" v-else>
          <p>メッセージ送信完了</p>
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
</script>
