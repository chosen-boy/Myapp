"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/goods_details/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/goods_details/index!./src/pages/goods_details/index.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/goods_details/index!./src/pages/goods_details/index.tsx ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _taroify_icons_ShareOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/ShareOutlined */ "./node_modules/@taroify/icons/ShareOutlined.js");
/* harmony import */ var _taroify_core_text_ellipsis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/core/text-ellipsis */ "./node_modules/@taroify/core/text-ellipsis/index.js");
/* harmony import */ var _taroify_core_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/core/tag */ "./node_modules/@taroify/core/tag/index.js");
/* harmony import */ var _taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/icons/CartOutlined */ "./node_modules/@taroify/icons/CartOutlined.js");
/* harmony import */ var _taroify_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taroify/icons/HomeOutlined */ "./node_modules/@taroify/icons/HomeOutlined.js");
/* harmony import */ var _taroify_core_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taroify/core/popup */ "./node_modules/@taroify/core/popup/index.js");
/* harmony import */ var _taroify_core_cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taroify/core/cell */ "./node_modules/@taroify/core/cell/index.js");
/* harmony import */ var _taroify_core_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taroify/core/swiper */ "./node_modules/@taroify/core/swiper/index.js");
/* harmony import */ var _taroify_core_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taroify/core/image */ "./node_modules/@taroify/core/image/index.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taroify/commerce/action-bar */ "webpack/container/remote/@taroify/commerce/action-bar");
/* harmony import */ var _taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
























function SwiperWithCustomIndicator() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var images = ["https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png", "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png", "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png", "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png"];
  var listItems = images.map(function (item, index) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "image",
        src: item
      })
    }, index);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoplay: 4000,
    onChange: setValue,
    children: [listItems, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_7__["default"].Indicator, {
      className: "custom-indicator",
      children: [value + 1, "/4"]
    })]
  });
}
function ValueSelect() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    children: "111"
  });
}
function Popupstase() {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
    _useState4 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState3, 2),
    showPopup = _useState4[0],
    setShowPopup = _useState4[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "popup",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "poptext",
      onClick: function onClick() {
        return setShowPopup(true);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_cell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "\u5DF2\u9009  \u8BF7\u9009\u62E9",
        isLink: true,
        bordered: false,
        style: {
          lineHeight: "10px"
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_taroify_core_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: showPopup,
      rounded: true,
      placement: "bottom",
      style: {
        height: "60%"
      },
      onClose: function onClose() {
        return setShowPopup(false);
      },
      className: "popup-popup",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "popup-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ValueSelect, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_popup__WEBPACK_IMPORTED_MODULE_5__["default"].Backdrop, {
        onClick: function onClick() {
          return setShowPopup(false);
        },
        open: showPopup,
        style: {
          background: "rgba(0,0,0,0.5)"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_popup__WEBPACK_IMPORTED_MODULE_5__["default"].Close, {
        placement: "top-right"
      })]
    })]
  });
}
function BasicActionBar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default()), {
    className: ".actionbar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default().IconButton), {
      className: "actionitem",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "action_icon",
        size: 30,
        style: {
          top: 10
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "action_text",
        children: "\u9996\u9875"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default().IconButton), {
      className: "actionitem",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "action_icon",
        size: 30,
        style: {
          top: 10
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "action_text",
        children: "\u8D2D\u7269\u8F66"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default().ButtonGroup), {
      flex: 250,
      className: "action_right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default().Button), {
        style: {
          background: "#e11414"
        },
        className: "right_item",
        shape: "round",
        children: "\u52A0\u5165\u8D2D\u7269\u8F66"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((_taroify_commerce_action_bar__WEBPACK_IMPORTED_MODULE_10___default().Button), {
        style: {
          background: "#f5d207"
        },
        className: "right_item",
        shape: "round",
        children: "\u7ACB\u5373\u8D2D\u4E70"
      })]
    })]
  });
}
function Index() {
  var tagstyle = {
    backgroundColor: "#ffe1e1",
    color: "#ad0000"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "page-body",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "img_swiper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SwiperWithCustomIndicator, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "price_box",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "price",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "price_left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "now_p",
            children: "\uFFE5298"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "pre_p",
            children: "\uFFE5400"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "price_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "yishou",
            children: "\u5DF2\u552E1024"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "redeem",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "tag_left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: tagstyle,
            children: "\u6EE1\u51CF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: tagstyle,
            children: "\u6EE1\u51CF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: tagstyle,
            children: "\u6EE1\u51CF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: tagstyle,
            children: "\u6EE1\u51CF"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "tag_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_cell__WEBPACK_IMPORTED_MODULE_6__["default"], {
            isLink: true,
            children: "\u9886\u5238"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "good_title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_core_text_ellipsis__WEBPACK_IMPORTED_MODULE_1__["default"], {
            content: "\u6162\u6162\u6765\uFF0C\u4E0D\u8981\u6025\uFF0C\u751F\u6D3B\u7ED9\u4F60\u51FA\u4E86\u96BE\u9898"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "share",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "btn-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_taroify_icons_ShareOutlined__WEBPACK_IMPORTED_MODULE_0__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "btn-text",
            children: " \u5206\u4EAB"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "size_select",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Popupstase, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "comments"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "goods_details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(BasicActionBar, {})
    })]
  });
}

/***/ }),

/***/ "./node_modules/@taroify/core/text-ellipsis/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/text-ellipsis/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _text_ellipsis__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _text_ellipsis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-ellipsis */ "./node_modules/@taroify/core/text-ellipsis/text-ellipsis.js");


/***/ }),

/***/ "./node_modules/@taroify/core/text-ellipsis/text-ellipsis.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@taroify/core/text-ellipsis/text-ellipsis.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEllipsis; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/rect */ "./node_modules/@taroify/core/utils/dom/rect.js");
/* harmony import */ var _utils_merge_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/merge-style */ "./node_modules/@taroify/core/utils/merge-style.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");




var _excluded = ["rows", "content", "children", "expandText", "collapseText", "dots", "position", "onClickAction", "className", "style"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}









var zhCharCodeStart = 19968;
var zhChartCodeEnd = 40869;
var numberChartCodeStart = 48;
var numberChartCodeEnd = 57;
var letterLowerChartCodeStart = 97;
var letterLowerChartCodeEnd = 122;
var letterUpperChartCodeStart = 65;
var letterUpperChartCodeEnd = 90;
var placeholderBaseCls = (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis__placeholder-base");
function TextEllipsis(_ref) {
  var _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 1 : _ref$rows,
    content = _ref.content,
    children = _ref.children,
    _ref$expandText = _ref.expandText,
    expandText = _ref$expandText === void 0 ? "" : _ref$expandText,
    _ref$collapseText = _ref.collapseText,
    collapseText = _ref$collapseText === void 0 ? "" : _ref$collapseText,
    _ref$dots = _ref.dots,
    dots = _ref$dots === void 0 ? "..." : _ref$dots,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "end" : _ref$position,
    onClickActionProp = _ref.onClickAction,
    classNameProp = _ref.className,
    styleProp = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var textProps = content || children || "";
  var cloneStyle = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useDeepCompareMemo)(function () {
    return (0,_utils_merge_style__WEBPACK_IMPORTED_MODULE_7__["default"])(styleProp, {
      position: "fixed",
      zIndex: "-9999",
      top: "-9999px",
      height: "auto",
      minHeight: "auto",
      maxHeight: "auto"
    });
  }, [styleProp]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("beforeInit"),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    baseString = _useState4[0],
    setBaseString = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState6 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    unConfirmedText = _useState6[0],
    setUnConfirmedText = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState8 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    unConfirmedIndex = _useState8[0],
    setUnConfirmedIndex = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState10 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    correctIndex = _useState10[0],
    setCorrectIndex = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState12 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState11, 2),
    hasAction = _useState12[0],
    setHasAction = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState14 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState13, 2),
    expanded = _useState14[0],
    setExpanded = _useState14[1];
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var cloneContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var placeholderBaseDomsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  var widthCacheRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
  var charCodesCacheRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  var containerHeightRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  var hasActionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  var getText = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (index) {
    if (index === 0) {
      return "";
    }
    if (index === textProps.length) {
      return textProps;
    }
    if (Array.isArray(index)) {
      return textProps.slice(0, index[0]) + dots + textProps.slice(index[1]);
    } else if (index > 0) {
      return textProps.slice(0, index) + dots;
    } else {
      return dots + textProps.slice(+index);
    }
  });
  var getPrevIndex = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (idx) {
    if (Array.isArray(idx)) {
      return [idx[0] - 1, idx[1]];
    } else if (idx >= 0) {
      return idx - 1;
    } else {
      return idx + 1;
    }
  });
  var getNextIndex = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (idx) {
    if (Array.isArray(idx)) {
      return [idx[0] + 1, idx[1]];
    } else if (idx >= 0) {
      return idx + 1;
    } else {
      return idx - 1;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    setStatus("beforeInit");
    hasActionRef.current = false;
    setUnConfirmedIndex(0);
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
      var tempText = textProps + expandText + dots;
      var tempBaseChar = [];
      var tempCodes = [];
      var widthCache = widthCacheRef.current;
      widthCache.clear();
      for (var i = 0; i < tempText.length; i++) {
        var charCode = tempText.charCodeAt(i);
        if (charCode >= zhCharCodeStart && charCode <= zhChartCodeEnd) {
          tempCodes.push(zhChartCodeEnd);
          if (!widthCache.has(zhChartCodeEnd)) {
            widthCache.set(zhChartCodeEnd, 0);
            tempBaseChar.push("龥");
          }
        } else if (charCode >= numberChartCodeStart && charCode <= numberChartCodeEnd) {
          tempCodes.push(numberChartCodeEnd);
          if (!widthCache.has(numberChartCodeEnd)) {
            widthCache.set(numberChartCodeEnd, 0);
            tempBaseChar.push("9");
          }
        } else if (charCode >= letterLowerChartCodeStart && charCode <= letterLowerChartCodeEnd) {
          tempCodes.push(letterLowerChartCodeEnd);
          if (!widthCache.has(letterLowerChartCodeEnd)) {
            widthCache.set(letterLowerChartCodeEnd, 0);
            tempBaseChar.push("z");
          }
        } else if (charCode >= letterUpperChartCodeStart && charCode <= letterUpperChartCodeEnd) {
          tempCodes.push(letterUpperChartCodeEnd);
          if (!widthCache.has(letterUpperChartCodeEnd)) {
            widthCache.set(letterUpperChartCodeEnd, 0);
            tempBaseChar.push("Z");
          }
        } else {
          tempCodes.push(charCode);
          if (!widthCache.has(charCode)) {
            widthCache.set(charCode, 0);
            tempBaseChar.push(tempText[i]);
          }
        }
      }
      charCodesCacheRef.current = tempCodes;
      setBaseString(tempBaseChar);
    });
  }, [textProps, dots, expandText]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    var fn = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/(0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee() {
        var _yield$getRect, containerWidth, containerHeight;
        return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_4__.getRect)(containerRef.current);
            case 2:
              _yield$getRect = _context.sent;
              containerWidth = _yield$getRect.width;
              containerHeight = _yield$getRect.height;
              containerHeightRef.current = containerHeight;
              if (!(baseString.length === 0)) {
                _context.next = 10;
                break;
              }
              hasActionRef.current = false;
              setUnConfirmedIndex(0);
              return _context.abrupt("return");
            case 10:
              (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_4__.getRects)(cloneContainerRef.current, ".".concat(placeholderBaseCls)).then(function (rects) {
                if (rects.length > 0) {
                  baseString.forEach(function (_char, index) {
                    var _rects$index;
                    widthCacheRef.current.set(_char.charCodeAt(0), ((_rects$index = rects[index]) === null || _rects$index === void 0 ? void 0 : _rects$index.width) || 0);
                  });
                }
                var calcCharWidth = function calcCharWidth(charCode) {
                  var widthCache = widthCacheRef.current;
                  if (charCode >= zhCharCodeStart && charCode <= zhChartCodeEnd) {
                    return widthCache.get(zhChartCodeEnd);
                  } else if (charCode >= numberChartCodeStart && charCode <= numberChartCodeEnd) {
                    return widthCache.get(numberChartCodeEnd);
                  } else if (charCode >= letterLowerChartCodeStart && charCode <= letterLowerChartCodeEnd) {
                    return widthCache.get(letterLowerChartCodeEnd);
                  } else if (charCode >= letterUpperChartCodeStart && charCode <= letterUpperChartCodeEnd) {
                    return widthCache.get(letterUpperChartCodeEnd);
                  } else {
                    return widthCache.get(charCode);
                  }
                };
                var charCodesCache = charCodesCacheRef.current;
                var calcWidth = 0;
                var placeholderWidth = charCodesCache.slice(textProps.length).reduce(function (acc, cur) {
                  return acc + (calcCharWidth(cur) || 0);
                }, 0);
                var maxWidth = containerWidth * (isNaN(Number(rows)) ? 1 : Number(rows));
                if (position === "end") {
                  var index = 0;
                  for (var i = 0; i < textProps.length; i++) {
                    calcWidth += calcCharWidth(charCodesCacheRef.current[i]) || 0;
                    if (calcWidth + placeholderWidth < maxWidth) {
                      index = i;
                    }
                    if (calcWidth > maxWidth) {
                      setUnConfirmedIndex(index);
                      hasActionRef.current = true;
                      return;
                    }
                  }
                } else if (position === "start") {
                  var _index = textProps.length - 1;
                  for (var _i = textProps.length - 1; _i >= 0; _i--) {
                    calcWidth += calcCharWidth(charCodesCacheRef.current[_i]) || 0;
                    if (calcWidth + placeholderWidth < maxWidth) {
                      _index = _i;
                    }
                    if (calcWidth > maxWidth) {
                      setUnConfirmedIndex(_index - textProps.length);
                      hasActionRef.current = true;
                      return;
                    }
                  }
                } else if (position === "middle") {
                  var left = 0;
                  var right = textProps.length - 1;
                  var flag = false;
                  var leftIndex = 0;
                  var rightIndex = textProps.length - 1;
                  while (right > left) {
                    if (flag) {
                      calcWidth += calcCharWidth(charCodesCacheRef.current[left]) || 0;
                      if (calcWidth + placeholderWidth < maxWidth) {
                        leftIndex = left;
                      }
                      left++;
                    } else {
                      calcWidth += calcCharWidth(charCodesCacheRef.current[right]) || 0;
                      if (calcWidth + placeholderWidth < maxWidth) {
                        rightIndex = right;
                      }
                      right--;
                    }
                    if (calcWidth > maxWidth) {
                      setUnConfirmedIndex([leftIndex, rightIndex]);
                      hasActionRef.current = true;
                      return;
                    }
                    flag = !flag;
                  }
                }
                hasActionRef.current = false;
                setCorrectIndex(textProps.length);
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fn() {
        return _ref2.apply(this, arguments);
      };
    }();
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
      fn();
    });
  }, [baseString, position, rows]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    var tempUnConfirmedIndex = unConfirmedIndex;
    var maxHeight = containerHeightRef.current * ((isNaN(Number(rows)) ? 1 : Number(rows)) + 0.01);
    var flag;
    var max = 5;
    var i = 0;
    var fn = function fn() {
      if (i++ > max) {
        setCorrectIndex(tempUnConfirmedIndex);
        return;
      }
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_4__.getRect)(containerRef.current).then(function (rect) {
          if (flag === undefined) {
            flag = rect.height > maxHeight;
            tempUnConfirmedIndex = flag ? getPrevIndex(tempUnConfirmedIndex) : getNextIndex(tempUnConfirmedIndex);
            setUnConfirmedText(getText(tempUnConfirmedIndex));
            fn();
          } else {
            if (flag) {
              if (rect.height > maxHeight) {
                tempUnConfirmedIndex = getPrevIndex(tempUnConfirmedIndex);
                setUnConfirmedText(getText(tempUnConfirmedIndex));
                fn();
              } else {
                setCorrectIndex(tempUnConfirmedIndex);
              }
            } else {
              if (rect.height < maxHeight) {
                tempUnConfirmedIndex = getNextIndex(tempUnConfirmedIndex);
                setUnConfirmedText(getText(tempUnConfirmedIndex));
                fn();
              } else {
                setCorrectIndex(getPrevIndex(tempUnConfirmedIndex));
              }
            }
          }
        });
      });
    };
    if (hasActionRef.current) {
      setStatus("init");
      setUnConfirmedText(getText(tempUnConfirmedIndex));
      fn();
    } else {
      setCorrectIndex(unConfirmedIndex);
    }
  }, [unConfirmedIndex]);
  var text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    setHasAction(hasActionRef.current);
    setStatus("initd");
    return getText(correctIndex);
  }, [correctIndex]);
  var onClickAction = function onClickAction() {
    setExpanded(!expanded);
    onClickActionProp === null || onClickActionProp === void 0 ? void 0 : onClickActionProp(!expanded);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, _objectSpread({
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis"), classNameProp, (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis__hidden"), status !== "initd")),
    style: styleProp
  }, rest), status === "beforeInit" && "\xA0", status === "init" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, unConfirmedText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis__expand"))
  }, expandText)), status === "initd" && (!expanded ? text : content || children), status === "initd" && hasAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis__expand")),
    onClick: onClickAction
  }, !expanded ? expandText : collapseText), status !== "initd" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, _objectSpread({
    ref: cloneContainerRef,
    id: "clone-container",
    style: cloneStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("text-ellipsis"), classNameProp)
  }, rest), baseString.map(function (_char2, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      ref: function ref(r) {
        return placeholderBaseDomsRef.current[index] = r;
      },
      key: index,
      className: placeholderBaseCls,
      style: {
        display: "inline"
      }
    }, _char2);
  })));
}

/***/ }),

/***/ "./node_modules/@taroify/core/utils/merge-style.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/utils/merge-style.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeStyle; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function mergeStyle(style, objectStyle) {
  var styleObject;
  if (typeof style === "string") {
    styleObject = {};
    style.split(";").forEach(function (item) {
      var _item$split = item.split(":"),
        _item$split2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_item$split, 2),
        key = _item$split2[0],
        value = _item$split2[1];
      if (key && value) {
        styleObject[key.trim()] = value.trim();
      }
    });
  } else if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(style) === "object" && style) {
    styleObject = style;
  } else {
    styleObject = {};
  }
  return _objectSpread(_objectSpread({}, styleObject), objectStyle);
}
;

/***/ }),

/***/ "./node_modules/@taroify/icons/HomeOutlined.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/icons/HomeOutlined.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var HomeOutlined = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("home-o");
/* harmony default export */ __webpack_exports__["default"] = (HomeOutlined);

/***/ }),

/***/ "./node_modules/@taroify/icons/ShareOutlined.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/icons/ShareOutlined.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var ShareOutlined = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("share-o");
/* harmony default export */ __webpack_exports__["default"] = (ShareOutlined);

/***/ }),

/***/ "./src/pages/goods_details/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/goods_details/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_goods_details_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/goods_details/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/goods_details/index!./src/pages/goods_details/index.tsx");


var config = {"navigationBarTitleText":"商品详情"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_goods_details_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/goods_details/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_goods_details_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/goods_details/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map