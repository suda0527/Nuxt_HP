<template>
  <div>
    <div class="w-2/3 mx-auto">
      <div class="mt-20">
        <h2 class="topFewMarg">協力会社・関連団体</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="http://www.rep-eco.com/" target="_blank"
                    ><img
                      src="images/banner_rep_e244747677.gif"
                      alt="株式会社REP"
                  /></a>
                </td>
                <td>
                  <a href="http://www.rep-eco.com/" target="_blank"
                    >環境コンサルタント　株式会社REP</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.kuresia.com/" target="_blank"
                    ><img
                      src="images/banner_kuresia_34d0cc44da.png"
                      alt="株式会社クレシア"
                      id="sampleImg1"
                      @mouseover="zoom(this, 64, 64);"
                      onmouseout="zoom( this, 32, 32 );"
                  /></a>
                </td>
                <td>
                  <a href="http://www.kuresia.com/" target="_blank"
                    >株式会社クレシア</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.fsjk.net/" target="_blank"
                    ><img
                      src="images/furugunbana_d95bc50c86.gif"
                      alt="ふるさと群馬"
                  /></a>
                </td>
                <td>
                  <a href="http://www.fsjk.net/" target="_blank">ふるさと群馬</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://npo-rac.org/" target="_blank"
                    ><img
                      src="images/racbana_77f6559865.gif"
                      alt="NPO法人街・建築・文化再生集団（RAC）"
                  /></a>
                </td>
                <td>
                  <a href="http://npo-rac.org/" target="_blank"
                    >NPO法人街・建築・文化再生集団（RAC）</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <h2>バナー</h2>
          <p>
            当社のバナーです。大小お好きな方をダウンロードしてご利用ください。<br />
            <img
              src="images/renebana_b_c2a9f982d9.gif"
              alt="234px×60pxサイズ"
              class="lnk"
              width="234"
              height="60"
            />
            234px×60pxサイズ<br />
            <img
              src="images/renebana_s_36cabb5cc9.gif"
              alt="88px×31pxサイズ"
              width="88"
              height="31"
            />
            88px×31pxサイズ
          </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
function zoom( $this, $height, $width ) {
    $this.style.height = $height + 'px';
    $this.style.width = $width + 'px';
}
</script>
