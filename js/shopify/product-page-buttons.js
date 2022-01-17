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
    {
      productElementId: "magnolias-garden-wreath",
      productId: "7502214103267",
    },
    {
      productElementId: "toffee-and-cream-wreath",
      productId: "7437718290659",
    },
    {
      productElementId: "spring-is-in-the-air-wreath",
      productId: "7437719339235",
    },
    {
      productElementId: "summer-vibes-wreath",
      productId: "7437718356195",
    },
    {
      productElementId: "merging-hues-of-pink-wreath",
      productId: "7437719404771",
    },
    {
      productElementId: "beaut-jute-wreath",
      productId: "7437718257891",
    },
    {
      productElementId: "lavender-sunset-wreath",
      productId: "7437719208163",
    },
    {
      productElementId: "sparkling-rose-wreath",
      productId: "7437718323427",
    },
    {
      productElementId: "fuchsia-christmas-wreath",
      productId: "7522271035619",
    },
    {
      productElementId: "the-house-of-elf-wreath",
      productId: "7437719306467",
    },
    {
      productElementId: "elves-warm-greetings-wreath",
      productId: "7522403647715",
    },
    {
      productElementId: "love-grows-here-wreath",
      productId: "7522717368547",
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
