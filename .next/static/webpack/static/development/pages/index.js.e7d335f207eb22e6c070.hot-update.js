webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api */ "./api/index.js");
















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createMarkup", function (html) {
      return {
        __html: html
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new swiper__WEBPACK_IMPORTED_MODULE_11__["default"]('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          aboutUs = _this$props.aboutUs,
          newsList = _this$props.newsList;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "banner"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/banner.jpg",
        alt: "\u5B89\u90A6\u6C34\u5229banner"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "bg-e5eaed"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "w1200 about"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "\u5173\u4E8E\u6211\u4EEC")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/pic.jpg"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-right"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        dangerouslySetInnerHTML: this.createMarkup(aboutUs.content)
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "align-right"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#"
      }, "\u67E5\u770B\u66F4\u591A>")))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "w1200 news"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "\u516C\u53F8\u65B0\u95FB")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "swiper-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "swiper-wrapper news-content"
      }, newsList.map(function (news) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "swiper-slide news-box",
          key: news._id
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "news-pic"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
          src: news.picPath
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, news.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "time"
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseTime"])(news.createDate)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "des"
        }, news.keyWord));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "swiper-button-prev"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "swiper-button-next"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "bg-e5eaed"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "w1200 contact"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "\u8054\u7CFB\u6211\u4EEC")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "contact-content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "contact-box"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icon icon-tel"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "0795-6288863 ")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "contact-box"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icon icon-address"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "\u6C5F\u897F\u7701\u4E30\u57CE\u5E02\u7D2B\u4E91\u5357\u5927\u90531136\u53F7")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "contact-box"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icon icon-email"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "66864519@qq.com"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "friendlink"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "flink-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "FriendLink")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link1.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link2.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link3.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link1.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link2.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link3.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/link1.jpg"
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, result, aboutUs, newsListRes, newsList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_14__["fetchArtclsDetail"])({
                  _id: '5d56b678169dac38f4428cb3'
                });

              case 3:
                result = _context.sent;
                aboutUs = result.data;
                _context.next = 7;
                return Object(_api__WEBPACK_IMPORTED_MODULE_14__["fetchArticleList"])({
                  pageNum: 1,
                  pageSize: 10
                });

              case 7:
                newsListRes = _context.sent;
                newsList = newsListRes.data.list || [];
                return _context.abrupt("return", {
                  aboutUs: aboutUs,
                  newsList: newsList
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.e7d335f207eb22e6c070.hot-update.js.map