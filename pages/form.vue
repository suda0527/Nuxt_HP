
<template>
  <div class="mt-20">
    <!-- component -->
    <div class="flex justify-center items-center w-full">
      <div class="mt-10 bg-white rounded p-8 m-4 mb-10">
        <h1
          class="mb-6 block w-full text-center text-gray-800 text-2xl font-bold"
        >
          問い合わせフォーム
        </h1>
          <form method="post" action="mail.php" class=" mb-10">
              <table class="formTable">
                <tr>
                  <th>お問い合わせの内容</th>
                  <td><select name="ご用件">
                      <option value="">選択してください</option>
                      <option value="HP内容についてのお問い合わせ">HP内容についてのお問い合わせ</option>
                      <option value="仕事のご相談・お見積">仕事のご相談・お見積</option>
                      <option value="求人についてのお問い合わせ">求人についてのお問い合わせ</option>
                      <option value="その他">その他</option>
                    </select></td>
                </tr>
                <tr>
                  <th>自治体名または企業名</th>
                  <td><input size="30" type="text" name="自治体名または企業名" /></td>
                </tr>
                <tr>
                  <th>部署/役職</th>
                  <td><input size="30" type="text" name="部署/役職" /></td>
                </tr>
                <tr>
                  <th>お名前</th>
                  <td><input size="20" type="text" name="お名前" required placeholder="※必須"/></td>
                </tr>
                <tr>
                  <th>郵便番号</th>
                  <td><input size="20" type="text" name="郵便番号" required placeholder="※必須"/></td>
                </tr>
                <tr>
                  <th>住所</th>
                  <td><input size="20" type="text" name="住所" required placeholder="※必須"/></td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td><input size="30" type="text" name="電話番号" required/></td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td><input size="30" type="text" name="Email" required placeholder="※必須"/></td>
                </tr>
                <tr>
                  <th>お問い合わせ内容<br /></th>
                  <td><textarea name="お問い合わせ内容" cols="50" rows="5"></textarea></td>
                </tr>
              </table>
              <div align="center" class="mt-5">
                <input class="bg-green-400 hover:bg-green-600 text-white m-auto" type="submit" value="　 確認 　" />　<input class="m-auto bg-gray-400 hover:bg-gray-600 text-white" type="reset" value="　リセット　" />
              </div>
            </form>
        <iframe name="dummy" style="display: none"></iframe>
      </div>
    </div>
  </div>
</template>
<style>

#formWrap {
	/* width:700px; */
	margin:0 auto;
	color:#555;
	line-height:100%;
	font-size:90%;
}
table.formTable{
	/* width:100%; */
	margin:0 auto;
	border-collapse:collapse;
}
table.formTable td,table.formTable th{
	border:1px solid #ccc;
	padding:10px;
}
table.formTable th{
	width:30%;
	font-weight:normal;
	background:#efefef;
	text-align:left;
}

@media screen and (max-width:572px) {
#formWrap {
	width:95%;
	margin:0 auto;
}
table.formTable th, table.formTable td {
	width:auto;
	display:block;
}
table.formTable th {
	margin-top:5px;
	border-bottom:0;
}
form input[type="text"], form textarea {
	width:80%;
	padding:5px;
	font-size:100%;
	display:block;
}
form input[type="submit"], form input[type="reset"], form input[type="button"] {
	display:block;
	width:100%;
	height:40px;
}
}
</style>
<script>
</script>
