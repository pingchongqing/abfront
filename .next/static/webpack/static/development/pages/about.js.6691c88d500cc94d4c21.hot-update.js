webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: fetchArtclsDetail, fetchArticleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArtclsDetail", function() { return fetchArtclsDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticleList", function() { return fetchArticleList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.js");



var request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
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
var fetchArtclsDetail = function fetchArtclsDetail(params) {
  return request.get(_config__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"] + '/webApi/artcls/detail', {
    params: params
  });
};
var fetchArticleList = function fetchArticleList(params) {
  return request.post(_config__WEBPACK_IMPORTED_MODULE_2__["DOMAIN"] + '/webApi/article/search', params);
};

/***/ })

})
//# sourceMappingURL=about.js.6691c88d500cc94d4c21.hot-update.js.map