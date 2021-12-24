(function () {
  const productElements = [
    {
      productElementId: "giant-wreath-of-christmas",
      productId: "7437718388963",
    },
    {
      productElementId: "home-of-the-bluebird",
      productId: "7437719077091",
    },
  ];

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
    var client = buildClient();
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      productElements.forEach(function (productElement) {
        createButtonComponent(
          ui,
          productElement.productElementId,
          productElement.productId
        );
      });
    });
  }
})();
