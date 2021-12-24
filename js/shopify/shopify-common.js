function getButtonOptions() {
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
      },
      contents: {
        img: false,
        title: false,
        price: false,
      },
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
