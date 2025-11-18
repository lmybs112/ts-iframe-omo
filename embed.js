function Product_Recommendation() {
  ////Global////
  var Brand = "JERSCY";
  var link_included = "inffits.com/" || "localhost";
  var skuContent = shopline_sku(); //plain_me_sku()
  var show_up_position_before = "#infFitsFooter";
  var test = "A";
  var GA4Key = "";

  function member_id_91APP() {
    let member_id;
    // 檢查 dataLayer 是否定義
    if (typeof dataLayer !== "undefined") {
      for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].Action === "Product-Detail") {
          // 找到了符合條件的項目，執行後續動作
          console.log('找到了符合 "gtm.load" 的事件，執行後續動作');
          console.log("FOUND!!");
          if (dataLayer[i].Uid !== "") member_id = dataLayer[i].Uid;
          else member_id = "";

          // 進行其他操作（如果需要的話）
          break;
        } else member_id = "";
      }
    }
    return member_id;
  }
  function member_id_Shopline() {
    //Fake data
    let member_id = "";
    // let chklog1 = '"currentUser\\"';
    // let chklog2 = ':null';
    // if (!document.documentElement.innerHTML.includes(chklog1 + chklog2)) {
    //     member_id = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0];
    // }
    return member_id;
  }
  function member_id_plain_me() {
    let member_id;
    // 檢查 dataLayer 是否定義
    if (typeof dataLayer !== "undefined") {
      for (let i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].Action === "Product-Detail") {
          // 找到了符合條件的項目，執行後續動作
          console.log('找到了符合 "gtm.load" 的事件，執行後續動作');
          console.log("FOUND!!");
          if (dataLayer[i].Uid !== "") member_id = dataLayer[i].Uid;
          else member_id = "";

          // 進行其他操作（如果需要的話）
          break;
        } else member_id = "";
      }
    }
    return member_id;
  }
  function plain_me_sku() {
    var metaTag = document.querySelector('meta[property="og:sku"]');
    if (metaTag) {
      var skuContent = metaTag.getAttribute("content").split("-")[0];
      console.log(skuContent); // 輸出 “FRP99153"
    } else if (document.querySelector(".prodnoBox") !== null) {
      var skuContent = document
        .querySelector(".prodnoBox")
        .innerText.split(":")[1]
        .split("-")[0];
    } else {
      console.log("Meta tag not found");
    }
    return skuContent;
  }
  function app91_sku() {
    var skuContent = document.location.href
      .split("?")[0]
      .split("/SalePage/Index/")[1];

    return skuContent;
  }
  function shopline_sku() {
    //var data = document.documentElement.innerHTML
    //var skuContent = data.split('"sku":"')[1].split('"')[0].split(':')[0]
    //Fake data
    skuContent = "627b5ab044a027000fde0add";
    return skuContent;
  }

  ////Main////
  if (document.location.href.includes(link_included)) {
    //jQuery
    function ensureEmbeddedAdJQueryLoaded(callback) {
      if (typeof jQuery === "undefined") {
        // jQuery 未載入，動態加載
        var embeddedAdjQueryScript = document.createElement("script");
        embeddedAdjQueryScript.src =
          "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"; // 指定需要的 jQuery 版本
        embeddedAdjQueryScript.type = "text/javascript";
        embeddedAdjQueryScript.onload = function () {
          console.log("jQuery 已成功載入");
          callback(); // jQuery 載入後執行回調
        };
        embeddedAdjQueryScript.onerror = function () {
          console.error("載入 jQuery 時出錯");
        };
        document.head.appendChild(embeddedAdjQueryScript);
      } else {
        console.log("jQuery 已經載入");
        callback(); // jQuery 已載入，直接執行回調
      }
    }
    //swiper
    function loadSwiperScript() {
      // 加載 swiper 的 CSS 檔案
      var swiperStylesheet = document.createElement("link");
      swiperStylesheet.rel = "stylesheet";
      swiperStylesheet.href =
        "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css";
      document.head.appendChild(swiperStylesheet);

      var SwiperScript = document.createElement("script");
      SwiperScript.src =
        "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"; // 替換為 slick 的 URL
      SwiperScript.onload = function () {
        console.log("Swiper script loaded successfully");
      };
      SwiperScript.onerror = function () {
        console.error("Error loading swiper script");
      };
      document.head.appendChild(SwiperScript);
    }
    //embedded script
    (function ($) {
      // 動態添加 Google 字體連結
      var googleFontLink = document.createElement("link");
      googleFontLink.rel = "preconnect";
      googleFontLink.href = "https://fonts.googleapis.com";
      document.head.appendChild(googleFontLink);

      var googleFontLink2 = document.createElement("link");
      googleFontLink2.rel = "preconnect";
      googleFontLink2.href = "https://fonts.gstatic.com";
      googleFontLink2.crossorigin = "anonymous";
      document.head.appendChild(googleFontLink2);

      //   var googleFontLink3 = document.createElement("link");
      //   googleFontLink3.rel = "stylesheet";
      //   googleFontLink3.href =
      //     "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
      //   document.head.appendChild(googleFontLink3);

      // 動態添加 Bootstrap Bundle
      var bootstrapScript = document.createElement("script");
      bootstrapScript.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      bootstrapScript.crossorigin = "anonymous";
      document.head.appendChild(bootstrapScript);

      bootstrapScript.onload = function () {
        // 動態添加 Bootstrap scoped CSS
        var bootstrapScopedStyle = document.createElement("style");
        bootstrapScopedStyle.id = "embedded-ad-bootstrap-scoped";
        document.head.appendChild(bootstrapScopedStyle);
        // 動態添加自定 CSS
        var customCSS = document.createElement("style");
        customCSS.type = "text/css";
        customCSS.innerHTML = `:root {
                    --inf-embedded-ad-font-9: 9px;
                    --inf-embedded-ad-font-8: 8px;
                    --inf-embedded-ad-font-12: 12px;
                    --inf-embedded-ad-font-13: 13px;
                    --inf-embedded-ad-font-14: 14px;
                    --inf-embedded-ad-font-15: 15px;
                    --inf-embedded-ad-font-16: 16px;
                    --inf-embedded-ad-font-18: 18px;
                    --inf-embedded-ad-font-21: 21px;
                    --inf-embedded-ad-font-custom: 15px;
                    --inf-embedded-ad-radius-8: 8px;
                    --inf-embedded-ad-dark-yellow: rgba(59, 59, 50, 1);
                    --inf-embedded-ad-dark-gray: #3B3B32;
                    --inf-embedded-ad-dark-red: #EB7454;
                    --inf-embedded-ad-light-gray: rgba(59, 59, 50, 0.30);
                    --swiper-wrapper-transition-timing-function: liner !important;
                    
                    }
                    
                    .embeddedAdContainer {
                    padding: 0px;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 100%;
                    display: none;
                    position: relative;
                    width:fit-content;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer {
                    padding: 16px 18px;
                    }
                    }
                    
                    .swiper-next,
                    .swiper-prev,
                    .swiper-next-corr,
                    .swiper-prev-corr {
                    display: none;
                    cursor:pointer;
                    }
                    .swiper-next::after, .swiper-prev::after, .swiper-next-corr::after, .swiper-prev-corr::after {
                    content: "";
                    }
                    @media (min-width: 768px) {
                    .swiper-next,
                    .swiper-prev,
                    .swiper-next-corr,
                    .swiper-prev-corr {
                    display: block;
                    position: absolute;
                    top: 45%;
                    z-index: 99;
                    }
                    .swiper-next, .swiper-next-corr{
                    right: -10px;
                    }
                    .swiper-prev, .swiper-prev-corr{
                    left: -10px;
                    }
                    }
                    
                    .embeddedAdContainer p,
                    .embeddedAdContainer h3 {
                    margin: 0;
                    padding: 0;
                    }
                    .embeddedAdContainer a {
                    text-decoration: none !important;
                    color: inherit;
                    background: none;
                    border: none;
                    padding: 0;
                    margin: 0;
                    font-weight: 500;
                    font-style: normal;
                    display: inline;
                    }
                    .embeddedAdContainer a:hover,
                    .embeddedAdContainer a:visited,
                    .embeddedAdContainer a:link,
                    .embeddedAdContainer a:active {
                    text-decoration: none;
                    }
                    .embeddedAdContainer a:focus {
                    outline: none;
                    }
                    .embeddedAdContainer .embeddedAdContainer__title {
                    //font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    text-align: center;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    color: #000;
                    font-size: var(--inf-embedded-ad-font-18);
                    letter-spacing: 1.6px;
                    margin-bottom: 24px;
                    text-align:left;
                    margin-top: 12px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdContainer__title {
                    margin-top: 0px;
                    }
                    }
                    
                    @media (min-width: 1025px) {
                    .embeddedAdContainer .embeddedAdContainer__title {
                    color: var(--inf-embedded-ad-dark-yellow), var(--inf-embedded-ad-dark-gray);
                    //font-size: var(--inf-embedded-ad-font-21);
                    font-size: 26px;
                    letter-spacing: 26px;
                    letter-spacing: 0.84px;
                    font-weight: 500;
                    margin-bottom: 24px;
                    text-align:left;
                    margin-top: 0px;
                    padding-left:8px
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    gap: 32px 24px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    /* height: 450px; /* 自适应高度 */
                    }
                    @media (min-width: 540px) {
                    .embeddedAdContainer .embeddedAdImgContainer {
                    /*  height: 550px; 自适应高度 */
                    }
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: no-wrap;
                    flex-wrap: no-wrap;
                    gap: 0 48px;
                    width: 100%;
                    height: 100%;
                    -ms-flex-pack: center;
                    justify-content: center;
                    width: 100%;
                    margin: 0 auto;
                    overflow: visible;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slide,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-track,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-list {
                    will-change: transform;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next {
                    width: 24px;
                    height: 24px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slide,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-track,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-list {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-perspective: 1000;
                    -ms-perspective: 1000;
                    perspective: 1000;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev:before,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev {
                    top: 45%;
                    left: -32px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next:before,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next {
                    top: 45%;
                    right: -32px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider {
                    position: relative;
                    display: block;
                    box-sizing: border-box;
                    touch-action: auto;
                    -ms-touch-action: auto;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem {
                    cursor: pointer;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 100%;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: center;
                    align-items: center;
                    row-gap: 12px;
                    padding: 0 2px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img {
                    position: relative;
                    width: 100%;
                    border-radius: var(--inf-embedded-ad-radius-8);
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: center;
                    align-items: center;
                    gap: 10px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
                    top: 8px;
                    left: 8px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
                    z-index: 1;
                    padding: 3px 4px;
                    border-radius: 100px;
                    background: rgba(59, 59, 50, 0.14);
                    -webkit-backdrop-filter: blur(3.5px);
                      backdrop-filter: blur(3.5px);
                    -webkit-background-filter: blur(3.5px);
                    color: #F3F3EF;
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-8);
                    line-height: 11px;
                    font-style: normal;
                    font-weight: 400;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
                    padding: 5px 8px;
                    font-size: var(--inf-embedded-ad-font-14);
                    line-height: 17px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__imgBox {
                    width: 100%;
                    /*padding-top: 100%;*/
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 1 / 1;
                    display:grid;
                    place-items:center;
                    border-radius: var(--inf-embedded-ad-radius-8);
                    will-change: transform;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img img {
                    position: absolute;
                    top: 0;
                    bottom:0;
                    left: 0;
                    margin:auto;
                    width: 100%;
                    /*height: 100%;*/
                    -o-object-fit: cover;
                    object-fit: cover;
                    will-change:transform;
                    border-radius: var(--inf-embedded-ad-radius-8);
                    -webkit-border-radius: var(--inf-embedded-ad-radius-8);
                    -moz-border-radius: var(--inf-embedded-ad-radius-8);
                    -ms-border-radius: var(--inf-embedded-ad-radius-8);
                    -o-border-radius: var(--inf-embedded-ad-radius-8);
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
                    // padding-top: 8px;
                    width: 100%;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 100%;
                    gap: 3px 0;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
                    // padding-top: 12px;
                    gap: 6px 0;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
                    color: var(--inf-embedded-ad-dark-gray);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-13);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 18px;
                    letter-spacing: 0.26px;
                    overflow: hidden;
                    display: -webkit-box;
                    display: box;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    -webkit-box-orient: vertical;
                    box-orient: vertical;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
                    // font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    // font-size: var(--inf-embedded-ad-font-18);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-custom);
                    font-style: normal;
                    line-height: 23px;
                    /* 127.778% */
                    letter-spacing: 0.36px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-dark-red);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 17px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-dark-red);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    // font-size: var(--inf-embedded-ad-font-18);
                    font-size: var(--inf-embedded-ad-font-custom);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 23px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: baseline;
                    align-items: baseline;
                    gap:4px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__discount {
                        color: #eb7454;
                        background: white;
                        border:1px solid #eb7454;
                        padding: 0 4px;
                        border-radius: 5px;
                        font-size: 12px;
                        opacity: 1;
                        transform:scale(0.8)
                        }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__sptext {
                            color: #333;
                            background: white;
                            padding: 0 4px;
                            border-radius: 5px;
                            font-size: 12px;
                            opacity: 1;
                            text-align:center;
                        }
                    
                    
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
                    margin-right: 8px;
                    color: var(--inf-embedded-ad-dark-red);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-12);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 17px;
                    /* 141.667% */
                    }
                    @media (min-width: 768px) {
                    
                        // .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__discount {
                        //     transform:scale(1)
                        // }
                    
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
                        // font-size: var(--inf-embedded-ad-font-18);
                        font-size: var(--inf-embedded-ad-font-custom);
                        line-height: 23px;
                        /* 127.778% */
                        }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-light-gray);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-9);
                    font-weight: 500;
                    line-height: 14px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
                    font-size: var(--inf-embedded-ad-font-12);
                    line-height: 17px;
                    }
                    }
                    .embeddedAdContainer .swiper-slide{
                    -webkit-backface-visibility: hide;
                    -webkit-transform：translate3d(0,0,0)；
                    }
                    .embeddedAdContainer .swiper-wrapper{
                    -webkit-transform-style:preserve-3d;
                    }
                    .swiper-slide {
                    will-change: transform;
                    }
                    
                    body {
                    background-color: #fff;
                    font-family: Futura,'Noto Sans TC',"微軟正黑體",sans-serif;
                    -webkit-font-smoothing: auto
                    }
                    `;
        document.head.appendChild(customCSS);

        $(function () {
          let ids = ids_init();

          console.log("DOM is ready");
          var embeddedContainer = `
                    <div class="embeddedAdContainer" id="embedded-ad-container">
                    <h3 class="embeddedAdContainer__title">您可能也會喜歡</h3>
                    <div
                    class="embeddedAdImgContainer carouselContainer swiper swiper-basic"
                    style="overflow: hidden"
                    >
                    <div class="swiper-wrapper" id="swiper-wrapper-basic">
                    <!-- ad 內容將由 JavaScript 動態生成 -->
                    </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-next a-right">
                    <img
                    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-right.svg"
                    />
                    </div>
                    <div class="swiper-prev a-left">
                    <img
                    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-left.svg"
                    />
                    </div>
                    </div>
                    `;

          function getGroupByTid(tid) {
            return tid % 2; // 將用戶平均分為 2 組 0 1
          }
          const tid = Date.now(); // 使用當前的 Unix 時間戳作為 tid
          const group = getGroupByTid(tid); // 來進行雙組分流 group == 0 or group == 1

          //Embedded
          if (typeof $(show_up_position_before)[0] !== "undefined") {
            $(show_up_position_before).before(embeddedContainer);
          }

          // Fetch the Bootstrap CSS from CDN
          fetch(
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          )
            .then((response) => response.text())
            .then((css) => {
              // Scope the Bootstrap CSS to only work under .custom-scope class
              const scopedCSS = css
                .replace(/(^|\})\s*([^{]+)\s*\{/g, function (match, p1, p2) {
                  // Ignore keyframes and other special rules
                  if (
                    p2.startsWith("@") ||
                    p2.startsWith(":root") ||
                    p2.startsWith("body")
                  ) {
                    return match;
                  }
                  return p1 + ".embeddedAdContainer " + p2 + " {";
                })
                .replace(/[^}]*\bbody\b[^}]*}/g, "")
                .replace(/\b(h[1-6])\b/g, "");

              // Inject the scoped CSS into the page
              document.getElementById(
                "embedded-ad-bootstrap-scoped"
              ).textContent = scopedCSS;
            });

          getEmbeddedAds(ids);
          // getEmbeddedAds_corr(ids);
        });

        $(document).on("click", ".embeddedItem", function () {
          const title = $(this).data("title"); // 取得 data-title 屬性
          const link = $(this).data("link"); // 取得 data-link 屬性

          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "embedded",
            event_label: title,
            event_value: link,
          });
        });
        $(document).on("click", ".a-left", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "embedded",
            event_label: "arrow-left",
            event_value: "left",
          });
        });
        $(document).on("click", ".a-right", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "embedded",
            event_label: "arrow-right",
            event_value: "right",
          });
        });
        $(document).on(
          "click",
          "#swiper-wrapper-corr .embeddedItem",
          function () {
            const title = $(this).data("title"); // 取得 data-title 屬性
            const link = $(this).data("link"); // 取得 data-link 屬性

            // 觸發 Google Analytics 的事件追蹤
            gtag("event", "corr_click_embedded_item" + test, {
              send_to: GA4Key,
              event_category: "swiper-wrapper-corr-embedded",
              event_label: "Title: " + title,
              value: link.length,
            });
          }
        );
        $(document).on("click", "#swiper-wrapper-corr .a-left", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "corr_click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "swiper-wrapper-corr-embedded",
            event_label: "arrow-left",
            value: 10,
          });
        });
        $(document).on("click", "#swiper-wrapper-corr .a-right", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "corr_click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "swiper-wrapper-corr-embedded",
            event_label: "arrow-right",
            value: 10,
          });
        });
        $(document).on(
          "click",
          "#swiper-wrapper-basic .embeddedItem",
          function () {
            const title = $(this).data("title"); // 取得 data-title 屬性
            const link = $(this).data("link"); // 取得 data-link 屬性

            // 觸發 Google Analytics 的事件追蹤
            gtag("event", "bhv_click_embedded_item" + test, {
              send_to: GA4Key,
              event_category: "swiper-wrapper-basic-embedded",
              event_label: "Title: " + title,
              value: link.length,
            });
          }
        );
        $(document).on("click", "#swiper-wrapper-basic .a-left", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "bhv_click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "swiper-wrapper-basic-embedded",
            event_label: "arrow-left",
            value: 10,
          });
        });
        $(document).on("click", "#swiper-wrapper-basic .a-right", function () {
          // 觸發 Google Analytics 的事件追蹤
          gtag("event", "bhv_click_embedded_item" + test, {
            send_to: GA4Key,
            event_category: "swiper-wrapper-basic-embedded",
            event_label: "arrow-right",
            value: 10,
          });
        });

        function ids_init() {
          var makeid = function (length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          };
          //given id & member id --begin
          var member_id = "";
          var lgiven_id = "";

          member_id = member_id_Shopline();
          console.log(member_id);

          // Always Generate a pair of LGVID
          lgvid_exist = false;
          try {
            if (typeof localStorage["LGVID"] !== "undefined") {
              lgvid_exist = true;
            } else {
              lgvid_exist = false;
            }
          } catch (e) {
            lgvid_exist = false;
          }
          if (lgvid_exist) {
            lgiven_id = localStorage["LGVID"];
          } else {
            lgiven_id = makeid(20);
            localStorage.setItem("LGVID", lgiven_id);
          }
          return {
            member_id: member_id,
            lgiven_id: lgiven_id,
            skuContent: skuContent,
          };
        }
        function getEmbeddedAds(ids) {
          const requestData = {
            Brand: Brand,
            LGVID: ids.lgiven_id,
            MRID: ids.member_id,
            recom_num: "12",
            PID: ids.skuContent,
            ctype_val: JSON.stringify(["underwear"]),
          };
          const options = {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify(requestData),
          };
          function getRandomElements(arr, count) {
            const result = [];
            const usedIndexes = new Set();

            while (result.length < count) {
              const randomIndex = Math.floor(Math.random() * arr.length);
              if (!usedIndexes.has(randomIndex)) {
                result.push(arr[randomIndex]);
                usedIndexes.add(randomIndex);
              }
            }

            return result;
          }
          console.log(requestData);
          fetch(
            "https://gha6kqf5ff.execute-api.ap-northeast-1.amazonaws.com/v0/extension/recom_product",
            options
          )
            .then((response) => response.json())
            .then((response) => {
              //corr
              //or let jsonData_corr = getRandomElements(response['corr'], 12).map((item) => {})
              //bhv
              let jsonData = getRandomElements(response["bhv"], 12).map(
                (item) => {
                  let newItem = Object.assign({}, item);
                  newItem.sale_price = item.sale_price
                    ? parseInt(
                        item.sale_price.replace(/\D/g, "")
                      ).toLocaleString()
                    : "";
                  newItem.price = parseInt(
                    item.price.replace(/\D/g, "")
                  ).toLocaleString();
                  return newItem;
                }
              );
              if (window.innerWidth > 992) {
                if (jsonData.length >= 6) {
                  $(".embeddedAdContainer").show();
                  updatePopAd(jsonData);
                }
              } else {
                if (jsonData.length >= 4) {
                  $(".embeddedAdContainer").show();
                  updatePopAd(jsonData);
                }
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
        function updatePopAd(images, corr_bool) {
          const items = images
            .map(
              (img) =>
                `
<a class="embeddedItem swiper-slide" href="${
                  img.link
                }" target="_blank" data-title="${img.title}" data-link="${
                  img.link
                }">
    <div class="embeddedItem__img">
    <div class="embeddedItem__imgBox" style="background-color:#efefef;">
        <img src="${img.image_link}" alt="${
                  img.description
                }" style="width: 100%; height: auto; object-fit: cover;">
    </div>
    </div>
    <div class="embeddedItemInfo">
        <h3 class="embeddedItemInfo__title">${img.title}</h3>
        ${
          img.sale_price && img.sale_price !== img.price
            ? `<div class="embeddedItemInfo__content">
            <p class="embeddedItemInfo__discount">${Math.ceil(
              100 -
                (parseInt(img.sale_price.replace(",", "")) * 100) /
                  parseInt(img.price.replace(",", ""))
            )}% off</p>
                <p class="embeddedItemInfo__price">NT$ ${img.sale_price}</p>
                `
            : `<div class="embeddedItemInfo__content"> 
                <p class="embeddedItemInfo__discount" style="display:none;">5% off</p>               
                <p class="embeddedItemInfo__price">NT$ ${img.price}</p>
                `
        }
            </div>
    </div>
</a>
`
            )
            .join("");

          $("#swiper-wrapper-basic").html(items);
          var swiper = new Swiper(".swiper-basic", {
            direction: "horizontal",
            loop: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              // 重要：確保自動播放不會在切換頁面時出錯
              stopOnLastSlide: false,
              waitForTransition: true,
            },

            // 保持簡單的基礎設定
            slidesPerView: 2,
            slidesPerGroup: 2,
            loopFillGroupWithBlank: true,
            spaceBetween: 8,
            grid: {
              rows: 2,
            },

            // 導航按鈕
            navigation: {
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            },

            // 移除可能影響 iOS 12 的複雜觸控設定
            simulateTouch: true,
            touchRatio: 1,
            resistance: true,
            resistanceRatio: 0.65,

            // 保留基本的觀察者設定
            observer: true,
            observeParents: true,

            // 事件處理 - 簡化版本
            on: {
              init: function () {
                this.params.easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";

                const swiperEl = this.el;
                let isDragging = false;
                let moved = false;
                let startX;
                let startY;

                // 只在非觸控設備上添加滑鼠事件處理
                if (window.matchMedia("(hover: hover)").matches) {
                  swiperEl.addEventListener("mousedown", function (e) {
                    isDragging = true;
                    moved = false;
                    startX = e.pageX;
                    startY = e.pageY;
                  });

                  document.addEventListener("mousemove", function (e) {
                    if (!isDragging) return;

                    const diffX = Math.abs(e.pageX - startX);
                    const diffY = Math.abs(e.pageY - startY);

                    if (diffX > 5 || diffY > 5) {
                      moved = true;
                    }
                  });

                  document.addEventListener("mouseup", function () {
                    isDragging = false;
                  });

                  // 只處理連結點擊
                  const slides = swiperEl.querySelectorAll(".swiper-slide a");
                  slides.forEach((link) => {
                    link.addEventListener("click", function (e) {
                      if (moved) {
                        e.preventDefault();
                      }
                    });
                  });
                }
              },

              // 保留原版的 resize 處理
              resize: function () {
                setTimeout(() => {
                  this.update();
                }, 500);
              },
            },

            // 保持原版的響應式設定
            breakpoints: {
              768: {
                speed: 750,
                spaceBetween: 0,
                slidesPerGroup: 3,
                slidesPerView: 3,
                grid: {
                  rows: 1,
                },
                mousewheel: {
                  // 加入滑鼠滾輪支援
                  enabled: true,
                  sensitivity: 1,
                },
                // 改善滑動手感
                longSwipes: true,
                longSwipesRatio: 0.4, // 降低長滑動的觸發比例
                followFinger: true, // 緊跟手指移動

                threshold: 10,
              },
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                speed: 750,
                resistanceRatio: 0,
                grid: {
                  rows: 1,
                },
              },
            },
          });
        }
      };
    })(jQuery);

    //jQuery loaded
    ensureEmbeddedAdJQueryLoaded(loadSwiperScript);
  }
}
