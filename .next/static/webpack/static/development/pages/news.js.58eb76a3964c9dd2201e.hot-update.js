webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js");
/* harmony import */ var rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-pagination/assets/index.css */ "./node_modules/rc-pagination/assets/index.css");
/* harmony import */ var rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../api */ "./api/index.js");

















var News =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(News, _React$Component);

  function News() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, News);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(News)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createMarkup", function (html) {
      return {
        __html: html
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChange", function (page) {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
        pathname: '/news',
        query: {
          pageNum: page
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(News, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var newsList = this.props.newsList;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "snd-banner snd-news"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/newsbanner.png"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "\u65B0\u95FB\u52A8\u6001"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "\u4E3A\u60A8\u63D0\u4F9B\u6700\u8FD1\u516C\u53F8\u65B0\u95FB\u3001\u4E13\u4E1A\u7684\u884C\u4E1A\u52A8\u6001\u4E0E\u8D44\u8BAF\u3002\u8BA9\u60A8\u7387\u5148\u638C\u63E1\u884C\u4E1A\u5F00\u53D1\u5148\u673A\u3002"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-box snd-news"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "minimenu"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/"
      }, "\u8FD4\u56DE\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "active"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, "\u65B0\u95FB\u52A8\u6001")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "clearfix"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "newslist"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, newsList.map(function (news) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: news._id
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: '/detail?_id=' + news._id
        }, news.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_14__["parseTime"])(news.createDate)));
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.onChange,
        current: 3,
        total: this.props.total
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, pageNum, newsListRes, newsList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                pageNum = req.query.pageNum || 1;
                _context.next = 4;
                return Object(_api__WEBPACK_IMPORTED_MODULE_15__["fetchArticleList"])({
                  pageNum: pageNum,
                  pageSize: 2
                });

              case 4:
                newsListRes = _context.sent;
                newsList = newsListRes.data.list || [];
                return _context.abrupt("return", {
                  newsList: newsList,
                  current: Number(pageNum),
                  total: newsListRes.data.total
                });

              case 7:
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

  return News;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(News));

/***/ })

})
//# sourceMappingURL=news.js.58eb76a3964c9dd2201e.hot-update.js.map