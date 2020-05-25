/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'roberto-caldin.myshopify.com',
      storefrontAccessToken: 'ed7d629a7568436f7db93719dfe2678a',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4496681402506',
        node: document.getElementById('product-component-1590368729361'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#457BAD"
                },
                "background-color": "RGBA(69,123,173,0.65)",
                ":focus": {
                  "background-color": "#457bad"
                },
                "border-radius": "0px",
                "padding-left": "56px",
                "padding-right": "56px"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "img": false,
              "title": false,
              "price": false,
              "options": false
            },
            "text": {
              "button": "View product"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#457BAD"
                },
                "background-color": "RGBA(69,123,173,0.65)",
                ":focus": {
                  "background-color": "#457BAD"
                },
                "border-radius": "0px",
                "padding-left": "56px",
                "padding-right": "56px"
              },
              "title": {
                "font-family": "Avant Garde, sans-serif",
                "font-weight": "normal",
                "color": "#f7f7f7"
              },
              "price": {
                "color": "#f7f7f7"
              },
              "compareAt": {
                "color": "#f7f7f7"
              },
              "unitPrice": {
                "color": "#f7f7f7"
              },
              "description": {
                "font-family": "Montserrat, sans-serif",
                "color": "#f7f7f7"
              }
            },
            "googleFonts": [
              "Montserrat"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#1c1e20"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Avant Garde, sans-serif"
              },
              "select": {
                "font-family": "Avant Garde, sans-serif"
              }
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-weight": "bold",
                ":hover": {
                  "background-color": "#457BAD"
                },
                "background-color": "RGBA(69,123,173,0.65)",
                ":focus": {
                  "background-color": "#457BAD"
                },
                "border-radius": "0px"
              },
              "title": {
                "color": "#faf1f1"
              },
              "header": {
                "color": "#faf1f1"
              },
              "lineItems": {
                "color": "#faf1f1"
              },
              "subtotalText": {
                "color": "#faf1f1"
              },
              "subtotal": {
                "color": "#faf1f1"
              },
              "notice": {
                "color": "#faf1f1"
              },
              "currency": {
                "color": "#faf1f1"
              },
              "close": {
                "color": "#faf1f1",
                ":hover": {
                  "color": "#faf1f1"
                }
              },
              "empty": {
                "color": "#faf1f1"
              },
              "noteDescription": {
                "color": "#faf1f1"
              },
              "discountText": {
                "color": "#faf1f1"
              },
              "discountIcon": {
                "fill": "#faf1f1"
              },
              "discountAmount": {
                "color": "#faf1f1"
              },
              "cart": {
                "background-color": "#0b0b0b"
              },
              "footer": {
                "background-color": "#0b0b0b"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-weight": "bold",
                "background-color": "RGBA(69,123,173,0.65)",
                ":hover": {
                  "background-color": "#457BAD"
                },
                ":focus": {
                  "background-color": "#457BAD"
                }
              }
            }
          },
          "lineItem": {
            "styles": {
              "variantTitle": {
                "color": "#faf1f1"
              },
              "title": {
                "color": "#faf1f1"
              },
              "price": {
                "color": "#faf1f1"
              },
              "fullPrice": {
                "color": "#faf1f1"
              },
              "discount": {
                "color": "#faf1f1"
              },
              "discountIcon": {
                "fill": "#faf1f1"
              },
              "quantity": {
                "color": "#faf1f1"
              },
              "quantityIncrement": {
                "color": "#faf1f1",
                "border-color": "#faf1f1"
              },
              "quantityDecrement": {
                "color": "#faf1f1",
                "border-color": "#faf1f1"
              },
              "quantityInput": {
                "color": "#faf1f1",
                "border-color": "#faf1f1"
              }
            }
          }
        },
      });
    });
  }
})();
  /*]]>*/