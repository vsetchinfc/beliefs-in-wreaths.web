function buildClient() {
  return ShopifyBuy.buildClient({
    domain: "beliefs-in-wreaths-decor-studio.myshopify.com",
    storefrontAccessToken: "aad770cf457bb57a2d1097f843730cb6",
  });
}

function createProductDetailsComponent(ui, elementId, productId) {
  ui.createComponent("product", {
    id: productId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getProductDetailsOptions(),
  });
}

function createViewProductComponent(
  ui,
  elementId,
  productId,
  viewProductPageUrl
) {
  ui.createComponent("product", {
    id: productId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getViewProductButtonOptions(viewProductPageUrl),
  });
}

function createAddToCartButtonComponent(ui, elementId, productId) {
  ui.createComponent("product", {
    id: productId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getAddToCartButtonOptions(),
  });
}

function createFullPageComponent(ui, elementId, productId) {
  ui.createComponent("product", {
    id: productId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getFullProductViewOptions(),
  });
}

function getMoneyFormat() {
  return "%24%7B%7Bamount%7D%7D";
}

function getProductDetailsOptions() {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px",
          },
        },
        button: {},
        price: {},
        variantTitle: {},
      },
      contents: {
        img: true,
        title: true,
        variantTitle: false,
        price: false,
        button: false,
      },
      width: "100%",
      layout: "vertical",
      text: {
        button: "",
      },
      events: {},
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
    modalProduct: {},
    option: {},
    cart: {},
    toggle: {},
  };
}

function getViewProductButtonOptions(viewProductPageUrl) {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px",
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
        price: {
          "font-size": "20px",
          "font-weight": "bold",
        },
        variantTitle: {
          "font-size": "20px",
          "font-weight": "bold",
        },
      },
      viewProductPageUrl: viewProductPageUrl,
      buttonDestination: "modal",
      contents: {
        img: false,
        title: false,
        variantTitle: false,
        price: false,
        button: true,
      },
      width: "100%",
      layout: "vertical",
      text: {
        button: "View product",
      },
      events: {
        addVariantToCart: function (product) {},
        updateQuantity: function (product) {},
        openModal: function (product) {
          redirectToProductPage(product.config.product.viewProductPageUrl);
        },
        openOnlineStore: function (product) {},
        openCheckout: function (product) {},
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
        imgWithCarousel: false,
        button: false,
        buttonWithQuantity: false,
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
  };
}

function getAddToCartButtonOptions() {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px",
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
        price: {
          "font-size": "20px",
          "font-weight": "bold",
        },
        variantTitle: {
          "font-size": "20px",
          "font-weight": "bold",
        },
      },
      //buttonDestination: "modal",
      contents: {
        img: false,
        title: false,
        variantTitle: true,
        price: true,
        button: true,
      },
      width: "100%",
      layout: "vertical",
      text: {
        button: "Add to Cart",
      },
      events: {
        addVariantToCart: function (product) {},
        updateQuantity: function (product) {},
        openModal: function (product) {
          openModal();
        },
        openOnlineStore: function (product) {},
        openCheckout: function (product) {},
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
        imgWithCarousel: false,
        button: false,
        buttonWithQuantity: false,
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
  };
}

var redirectToProductPage = function (viewProductPageUrl) {
  debugger;
  console.log("redirecting to " + viewProductPageUrl);
  location.replace(viewProductPageUrl);
};

function getFullProductViewOptions() {
  return {
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
  };
}
