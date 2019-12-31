webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/CarlosGodoy/nextJS/bitz/components/Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

var Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Prices, _React$Component);

  function Prices(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Prices);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Prices).call(this, props));
    _this.state = {
      currency: "USD"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = "GBP";

      if (list === "USD") {
        list = __jsx("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.bpi.USD.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "   "), __jsx("span", {
          className: "badge badge-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, this.props.bpi.bpi.USD.code), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "  "), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, "$", _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(this.props.bpi.bpi.USD.rate_float).toFixed(2)));
      } else if (list === "GBP") {
        list = __jsx("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.bpi.GBP.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "   "), __jsx("span", {
          className: "badge badge-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, this.props.bpi.bpi.GBP.code), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "  "), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "$", _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(this.props.bpi.bpi.GBP.rate_float).toFixed(2)));
      } else if (list === "EUR") {
        list = __jsx("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "Bitcoin rate for ", this.props.bpi.bpi.EUR.description, ":", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "   "), __jsx("span", {
          className: "badge badge-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.props.bpi.bpi.EUR.code), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "  "), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "$", _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(this.props.bpi.bpi.EUR.rate_float).toFixed(2)));
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, list), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("select", {
        onChange: function onChange(e) {
          _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "USD"), __jsx("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "GBP"), __jsx("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "EUR")));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.6df4cdca37c14037f177.hot-update.js.map