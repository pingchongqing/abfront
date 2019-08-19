webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api */ "./api/index.js");















var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Contact, _React$Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createMarkup", function (html) {
      return {
        __html: html
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //创建和初始化地图函数：
      function initMap() {
        createMap(); //创建地图

        setMapEvent(); //设置地图事件

        addMapControl(); //向地图添加控件

        addMarker(); //向地图中添加marker
      } //创建地图函数：


      function createMap() {
        var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图

        var point = new BMap.Point(115.7787010852, 28.1482020957); //定义一个中心点坐标

        map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中

        window.map = map; //将map变量存储在全局
      } //地图事件设置函数：


      function setMapEvent() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)

        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小

        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)

        map.enableKeyboard(); //启用键盘上下左右键移动地图
      } //地图控件添加函数：


      function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_LEFT,
          type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(ctrl_nav); //向地图中添加缩略图控件

        var ctrl_ove = new BMap.OverviewMapControl({
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          isOpen: 1
        });
        map.addControl(ctrl_ove); //向地图中添加比例尺控件

        var ctrl_sca = new BMap.ScaleControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        map.addControl(ctrl_sca);
      } // 120.215671,30.212136
      //标注点数组 115.7787010852,28.1482020957
      //http://api.map.baidu.com/lbsapi/getpoint/index.html


      var markerArr = [{
        title: "公司地址",
        content: "地址: 江西省丰城市紫云南大道1136号<br />总机: 0795-6288863<br />邮编: 331000",
        point: "115.7787010852, 28.1482020957",
        isOpen: 0,
        icon: {
          w: 30,
          h: 30,
          l: 0,
          t: 0,
          x: 6,
          lb: 5
        }
      }]; //创建marker

      function addMarker() {
        for (var i = 0; i < markerArr.length; i++) {
          var json = markerArr[i];
          var p0 = json.point.split(",")[0];
          var p1 = json.point.split(",")[1];
          var point = new BMap.Point(p0, p1);
          var iconImg = createIcon(json.icon);
          var marker = new BMap.Marker(point, {
            icon: iconImg
          });
          var iw = createInfoWindow(i);
          var label = new BMap.Label(json.title, {
            "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
          });
          marker.setLabel(label);
          map.addOverlay(marker);
          label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
          });

          (function () {
            var index = i;

            var _iw = createInfoWindow(i);

            var _marker = marker; //hsguojz

            _marker.openInfoWindow(_iw); //hsguojz end


            _marker.addEventListener("click", function () {
              this.openInfoWindow(_iw);
            });

            _iw.addEventListener("open", function () {
              _marker.getLabel().hide();
            });

            _iw.addEventListener("close", function () {//_marker.getLabel().show();
            });

            label.addEventListener("click", function () {
              _marker.openInfoWindow(_iw);
            });

            if (!!json.isOpen) {
              label.hide();

              _marker.openInfoWindow(_iw);
            }
          })();
        }
      } //创建InfoWindow


      function createInfoWindow(i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
      } //创建一个Icon


      function createIcon(json) {
        var icon = new BMap.Icon("./static/images/address.png", new BMap.Size(json.w, json.h), {
          imageOffset: new BMap.Size(-json.l, -json.t),
          infoWindowOffset: new BMap.Size(json.lb + 5, 1),
          offset: new BMap.Size(json.x, json.h)
        });
        return icon;
      }

      initMap(); //创建和初始化地图
    }
  }, {
    key: "render",
    value: function render() {
      var contact = this.props.contact;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        "class": "snd-banner snd-contact"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        "class": "content-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/images/contactbanner.jpg"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-box snd-news"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "backtolist"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_11___default.a.back();
        }
      }, "\u8FD4\u56DE"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "newsdetail"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "dituContent",
        style: {
          height: '440px',
          overflow: 'hidden'
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "detailcontent",
        dangerouslySetInnerHTML: this.createMarkup(contact.content)
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, result, contact;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_13__["fetchArtclsDetail"])({
                  _id: '5d4d61008ee6b62c8892a62e'
                });

              case 3:
                result = _context.sent;
                contact = result.data;
                return _context.abrupt("return", {
                  contact: contact
                });

              case 6:
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

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Contact));

/***/ })

})
//# sourceMappingURL=contact.js.e1ad629c9c5d3e6f5d36.hot-update.js.map