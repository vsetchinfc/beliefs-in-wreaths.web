/*<![CDATA[*/
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
      ui.createComponent("product", {
        id: "7437718388963",
        node: document.getElementById("product-component-1640089548210"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px",
                },
                "text-align": "left",
              },
              title: {
                "font-size": "26px",
              },
              button: {
                ":hover": {
                  "background-color": "#e00000",
                },
                "background-color": "#f90000",
                ":focus": {
                  "background-color": "#e00000",
                },
                "border-radius": "40px",
                "padding-left": "30px",
                "padding-right": "30px",
              },
              price: {
                "font-size": "18px",
              },
              compareAt: {
                "font-size": "15.299999999999999px",
              },
              unitPrice: {
                "font-size": "15.299999999999999px",
              },
            },
            layout: "horizontal",
            contents: {
              img: false,
              imgWithCarousel: true,
              description: true,
            },
            width: "100%",
            text: {
              button: "Add to cart",
            },
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                ":hover": {
                  "background-color": "#e00000",
                },
                "background-color": "#f90000",
                ":focus": {
                  "background-color": "#e00000",
                },
                "border-radius": "40px",
                "padding-left": "30px",
                "padding-right": "30px",
              },
              title: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                color: "#4c4c4c",
              },
              price: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                color: "#4c4c4c",
              },
              compareAt: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              unitPrice: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
            },
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                ":hover": {
                  "background-color": "#e00000",
                },
                "background-color": "#f90000",
                ":focus": {
                  "background-color": "#e00000",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#f90000",
                ":hover": {
                  "background-color": "#e00000",
                },
                ":focus": {
                  "background-color": "#e00000",
                },
              },
            },
          },
        },
      });
    });
  }
})();
/*]]>*/
