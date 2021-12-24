(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "beliefs-in-wreaths-decor-studio.myshopify.com",
      storefrontAccessToken: "aad770cf457bb57a2d1097f843730cb6",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      createComponent(ui, "giant-wreath-of-christmas", "7437718388963");
      createComponent(ui, "home-of-the-bluebird", "7437719077091");
    });
  }

  function createComponent(ui, elementId, productId) {
    ui.createComponent("product", {
      id: productId,
      node: document.getElementById(elementId),
      moneyFormat: "%24%7B%7Bamount%7D%7D",
      options: getButtonOptions(),
    });
  }
})();
