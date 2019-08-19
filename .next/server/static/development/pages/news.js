module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: fetchArtclsDetail, fetchArticleList, fetchArticleDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtclsDetail", function() { return fetchArtclsDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticleList", function() { return fetchArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticleDetail", function() { return fetchArticleDetail; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.js");



const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  timeout: 15000,
  headers: {
    'X-Custom-Header': 'ab'
  }
});
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data && response.data.code === 'success') {
    return response.data;
  } else {
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(response);
  }
}, function (error) {
  // 对响应错误做点什么
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
});
const fetchArtclsDetail = params => request.get(_config__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"] + '/webApi/artcls/detail', {
  params
});
const fetchArticleList = params => request.post(_config__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"] + '/webApi/article/search', params);
const fetchArticleDetail = params => request.get(_config__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"] + '/webApi/article/detail', {
  params
});

/***/ }),

/***/ "./components/css/base.css":
/*!*********************************!*\
  !*** ./components/css/base.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/css/index.css":
/*!**********************************!*\
  !*** ./components/css/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.css */ "./components/css/base.css");
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ "./components/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);





const Layout = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u6C5F\u897F\u5B89\u90A6\u5DE5\u7A0B\u8D28\u91CF\u68C0\u6D4B\u6709\u9650\u516C\u53F8")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "logo"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "/static/images/logo.jpg",
  alt: "\u6C5F\u897F\u5B89\u90A6logo"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "nav"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/"
}, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/about"
}, "\u516C\u53F8\u7B80\u4ECB")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/news"
}, "\u65B0\u95FB\u52A8\u6001")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/contact"
}, "\u8054\u7CFB\u6211\u4EEC"))))), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "bg-515151"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "w1200 bottom"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "COPYRIGHT \xA92019\u6C5F\u897F\u5B89\u90A6\u5DE5\u7A0B\u8D28\u91CF\u68C0\u6D4B\u6709\u9650\u516C\u53F8 All right reserved \u8D63ICP\u5907 05xx0\u53F7"))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
const DOMAIN = 'http://localhost:2000';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/rc-pagination/assets/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/rc-pagination/assets/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-pagination */ "rc-pagination");
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-pagination/assets/index.css */ "./node_modules/rc-pagination/assets/index.css");
/* harmony import */ var rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_pagination_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api/index.js");









class News extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createMarkup", html => {
      return {
        __html: html
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", page => {
      location.href = '/news?pageNum=' + page;
    });
  }

  static async getInitialProps({
    req
  }) {
    const pageNum = req.query && req.query.pageNum || 1;
    const newsListRes = await Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchArticleList"])({
      pageNum,
      pageSize: 5
    });
    const newsList = newsListRes.data.list || [];
    return {
      newsList,
      current: Number(pageNum),
      total: newsListRes.data.total
    };
  }

  render() {
    const {
      newsList
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "snd-banner snd-news"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/images/newsbanner.png"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "\u65B0\u95FB\u52A8\u6001"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u4E3A\u60A8\u63D0\u4F9B\u6700\u8FD1\u516C\u53F8\u65B0\u95FB\u3001\u4E13\u4E1A\u7684\u884C\u4E1A\u52A8\u6001\u4E0E\u8D44\u8BAF\u3002\u8BA9\u60A8\u7387\u5148\u638C\u63E1\u884C\u4E1A\u5F00\u53D1\u5148\u673A\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-box snd-news"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "minimenu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/"
    }, "\u8FD4\u56DE\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "active"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "\u65B0\u95FB\u52A8\u6001")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "clearfix"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "newslist"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, newsList.map(news => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: news._id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: '/detail?_id=' + news._id
    }, news.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_6__["parseTime"])(news.createDate)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pagination"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_pagination__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onChange: this.onChange,
      current: this.props.current,
      total: this.props.total,
      pageSize: 5
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(News));

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: parseTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTime", function() { return parseTime; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;

  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(time) * 1000;
    if (time && typeof time === 'string' && !time.includes('Z')) time = time.replace(new RegExp(/-/gm), '/');
    date = new Date(time);
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return time_str;
}

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\abfront\pages\news.js */"./pages/news.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "rc-pagination":
/*!********************************!*\
  !*** external "rc-pagination" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-pagination");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=news.js.map