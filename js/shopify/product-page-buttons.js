(function () {
  const productElements = [
    // {
    //   productElementId: "giant-wreath-of-christmas",
    //   productId: "7437718388963",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "home-of-the-bluebird",
    //   productId: "7437719077091",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "magnolias-garden-wreath",
    //   productId: "7502214103267",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "toffee-and-cream-wreath",
    //   productId: "7437718290659",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "spring-is-in-the-air-wreath",
    //   productId: "7437719339235",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "summer-vibes-wreath",
    //   productId: "7437718356195",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "merging-hues-of-pink-wreath",
    //   productId: "7437719404771",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "beaut-jute-wreath",
    //   productId: "7437718257891",
    //   productPageUrl: "",
    // },
    {
      productDetailsElementId: "lavender-sunset-wreath-details",
      viewProductElementId: "lavender-sunset-wreath-view-product",
      viewProductPageUrl: "/products/wreaths/lavender-sunset-wreath.html",
      addToCartElementId: "lavender-sunset-wreath-add-to-cart",
      productId: "7437719208163",
    },
    // {
    //   productElementId: "lavender-sunset-wreath",
    //   productId: "7437719208163",
    // },
    // {
    //   productElementId: "sparkling-rose-wreath",
    //   productId: "7437718323427",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "fuchsia-christmas-wreath",
    //   productId: "7522271035619",
    //   productPageUrl: "",
    // },
    // {
    //   productElementId: "the-house-of-elf-wreath",
    //   productId: "7437719306467",
    // },
    // {
    //   productElementId: "elves-warm-greetings-wreath",
    //   productId: "7522403647715",
    //   productPageUrl: "",
    // },
    {
      productDetailsElementId: "love-grows-here-wreath-details",
      viewProductElementId: "love-grows-here-wreath-view-product",
      viewProductPageUrl: "/products/wreaths/love-grows-here-wreath.html",
      addToCartElementId: "love-grows-here-wreath-add-to-cart",
      productId: "7522717368547",
    },
    {
      productDetailsElementId: "love-is-homemade-wreath-details",
      viewProductElementId: "love-is-homemade-wreath-view-product",
      viewProductPageUrl: "/products/wreaths/love-is-homemade-wreath.html",
      addToCartElementId: "love-is-homemade-wreath-add-to-cart",
      productId: "7522872754403",
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
        createProductDetailsComponent(
          ui,
          productElement.productDetailsElementId,
          productElement.productId
        );
        createAddToCartButtonComponent(
          ui,
          productElement.addToCartElementId,
          productElement.productId
        );
        createViewProductComponent(
          ui,
          productElement.viewProductElementId,
          productElement.productId,
          productElement.viewProductPageUrl
        );
      });
    });
  }
})();
