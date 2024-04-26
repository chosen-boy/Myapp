(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _taroify_core_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/core/swiper */ "./node_modules/@taroify/core/swiper/index.js");
/* harmony import */ var _taroify_core_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/core/image */ "./node_modules/@taroify/core/image/index.js");
/* harmony import */ var _taroify_core_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/core/search */ "./node_modules/@taroify/core/search/index.js");
/* harmony import */ var _taroify_core_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/core/toast */ "./node_modules/@taroify/core/toast/index.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/swiper */ "./src/model/swiper.js");
/* harmony import */ var _compoent_tbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../compoent/tbs */ "./src/compoent/tbs/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);















function SearchWithEvents() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState4 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taroify_core_toast__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: function onClose() {
        return setOpen(false);
      },
      children: "\u53D6\u6D88"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taroify_core_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: value,
      placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
      action: true,
      onChange: function onChange(e) {
        return setValue(e.detail.value);
      },
      onCancel: function onCancel() {
        return setOpen(true);
      }
    })]
  });
}
function ImageSwiper() {
  var listItems = _model_swiper__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (item) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_0__["default"].Item, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "image",
        src: item.src
      }, item.id)
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: "basic-swiper",
    lazyRender: true,
    autoplay: 4000,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_taroify_core_swiper__WEBPACK_IMPORTED_MODULE_0__["default"].Indicator, {}), listItems]
  });
}
function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "page-body",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "page-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "top_input",
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(SearchWithEvents, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "swiper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ImageSwiper, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "Tbs",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_compoent_tbs__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })]
    })
  });
}

/***/ }),

/***/ "./node_modules/@taroify/core/checkbox/checkbox-group.context.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@taroify/core/checkbox/checkbox-group.context.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CheckboxGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroupContext);

/***/ }),

/***/ "./node_modules/@taroify/core/checkbox/checkbox-group.js":
/*!***************************************************************!*\
  !*** ./node_modules/@taroify/core/checkbox/checkbox-group.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _checkbox_group_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox-group.context */ "./node_modules/@taroify/core/checkbox/checkbox-group.context.js");


var _excluded = ["defaultValue", "value", "max", "direction", "children", "onChange"];
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






function CheckboxGroup(props) {
  var defaultValue = props.defaultValue,
    valueProp = props.value,
    max = props.max,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? "vertical" : _props$direction,
    children = props.children,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useUncontrolled)({
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChangeProp
    }),
    value = _useUncontrolled.value,
    setValue = _useUncontrolled.setValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_checkbox_group_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      value: value,
      max: max,
      direction: direction,
      onChange: setValue
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("checkbox-group"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("checkbox-group--horizontal"), direction === "horizontal"), (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("checkbox-group--vertical"), direction === "vertical")),
    children: children
  }, restProps)));
}
/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ }),

/***/ "./node_modules/@taroify/core/checkbox/checkbox.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/checkbox/checkbox.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkbox; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _taroify_icons_Success__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Success */ "./node_modules/@taroify/icons/Success.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toArray */ "./node_modules/lodash/toArray.js");
/* harmony import */ var lodash_toArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _checkbox_group_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox-group.context */ "./node_modules/@taroify/core/checkbox/checkbox-group.context.js");







var _excluded = ["className", "name", "defaultChecked", "checked", "disabled", "shape", "icon", "size", "children", "onChange"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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








function Checkbox(props) {
  var className = props.className,
    name = props.name,
    defaultChecked = props.defaultChecked,
    checkedProp = props.checked,
    disabled = props.disabled,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? "round" : _props$shape,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_taroify_icons_Success__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$icon,
    size = props.size,
    children = props.children,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_checkbox_group_context__WEBPACK_IMPORTED_MODULE_8__["default"]),
    names = _useContext.value,
    _useContext$max = _useContext.max,
    namesMax = _useContext$max === void 0 ? 0 : _useContext$max,
    direction = _useContext.direction,
    onNamesChange = _useContext.onChange;
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_4__.useUncontrolled)({
      value: checkedProp !== null && checkedProp !== void 0 ? checkedProp : names === null || names === void 0 ? void 0 : names.includes(name),
      defaultValue: defaultChecked,
      onChange: onChangeProp
    }),
    checked = _useUncontrolled.value,
    setValue = _useUncontrolled.setValue;
  function onClick() {
    if (disabled) {
      return;
    }
    setValue(!checked);
    if (name) {
      if (names !== null && names !== void 0 && names.includes(name)) {
        onNamesChange === null || onNamesChange === void 0 ? void 0 : onNamesChange(names.filter(function (aName) {
          return aName !== name;
        }));
      } else if (namesMax === 0 || lodash_size__WEBPACK_IMPORTED_MODULE_2___default()(names) < namesMax) {
        onNamesChange === null || onNamesChange === void 0 ? void 0 : onNamesChange([].concat((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(lodash_toArray__WEBPACK_IMPORTED_MODULE_1___default()(names)), [name]));
      }
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox--horizontal"), direction === "horizontal"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox--vertical"), direction === "vertical"), className),
    onClick: onClick
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__icon"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__icon--".concat(shape)), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__icon--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__icon--checked"), checked)),
    style: {
      fontSize: size ? (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_7__.addUnitPx)(size) : ""
    },
    children: icon
  }), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__label"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("checkbox__label--disabled"), disabled)),
    children: children
  }));
}

/***/ }),

/***/ "./node_modules/@taroify/core/checkbox/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/checkbox/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "./node_modules/@taroify/core/checkbox/checkbox.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-group */ "./node_modules/@taroify/core/checkbox/checkbox-group.js");


var Checkbox = _checkbox__WEBPACK_IMPORTED_MODULE_0__["default"];
Checkbox.Group = _checkbox_group__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./node_modules/@taroify/core/field/field.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/field/field.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form */ "./node_modules/@taroify/core/form/index.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element */ "./node_modules/@taroify/core/utils/element.js");

var _excluded = ["label", "feedback", "children"];
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




function _Field(props, ref) {
  var labelProp = props.label,
    feedbackProp = props.feedback,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var label = (0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.createVariantElement)(_form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, labelProp);
  var feedback = (0,_utils_element__WEBPACK_IMPORTED_MODULE_3__.createVariantElement)(_form__WEBPACK_IMPORTED_MODULE_2__["default"].Feedback, feedbackProp);
  var formItemRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, function () {
    return formItemRef.current;
  }, [formItemRef]);
  if ("noStyle" in restProps || "shouldUpdate" in restProps) {
    console.warn('[Taroify] Field: not support noStyle & shouldUpdate property');
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form__WEBPACK_IMPORTED_MODULE_2__["default"].Item, _objectSpread(_objectSpread({}, restProps), {}, {
    ref: formItemRef
  }), label, children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    children: children
  }), feedback);
}
var Field = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_Field);
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./node_modules/@taroify/core/field/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/field/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _form_form_feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/form-feedback */ "./node_modules/@taroify/core/form/form-feedback.js");
/* harmony import */ var _form_form_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/form-label */ "./node_modules/@taroify/core/form/form-label.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "./node_modules/@taroify/core/field/field.js");



var Field = _field__WEBPACK_IMPORTED_MODULE_2__["default"];
Field.Label = _form_form_label__WEBPACK_IMPORTED_MODULE_1__["default"];
Field.Feedback = _form_form_feedback__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./node_modules/@taroify/core/form/control/form-control-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@taroify/core/form/control/form-control-handler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doFormControlHandler": function() { return /* binding */ doFormControlHandler; },
/* harmony export */   "registerFormControlHandler": function() { return /* binding */ registerFormControlHandler; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");

var CONTROL_HANDLERS = [];
function doFormControlHandler(element, controller) {
  var type = element.type;
  var _iterator = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CONTROL_HANDLERS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var handler = _step.value;
      if (handler.supportsControlType(type)) {
        return handler.doControlRender(element, controller);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return element;
}
function registerFormControlHandler(handler) {
  CONTROL_HANDLERS.push(handler);
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/control/form-control-handlers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@taroify/core/form/control/form-control-handlers.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../checkbox */ "./node_modules/@taroify/core/checkbox/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input */ "./node_modules/@taroify/core/input/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../radio */ "./node_modules/@taroify/core/radio/index.js");
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rate */ "./node_modules/@taroify/core/rate/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../slider */ "./node_modules/@taroify/core/slider/index.js");
/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stepper */ "./node_modules/@taroify/core/stepper/index.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../switch */ "./node_modules/@taroify/core/switch/index.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../textarea */ "./node_modules/@taroify/core/textarea/index.js");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../uploader */ "./node_modules/@taroify/core/uploader/index.js");
/* harmony import */ var _form_control_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-control-handler */ "./node_modules/@taroify/core/form/control/form-control-handler.js");














(0,_form_control_handler__WEBPACK_IMPORTED_MODULE_10__.registerFormControlHandler)(new ( /*#__PURE__*/function () {
  function _class() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, _class);
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_class, [{
    key: "doControlRender",
    value: function doControlRender(element, controller) {
      var name = controller.name,
        value = controller.value,
        validateStatus = controller.validateStatus,
        onDelegatingBlur = controller.onBlur,
        onDelegatingChange = controller.onChange;
      var elementProps = element.props;
      var nameProp = elementProps.name,
        valueProp = elementProps.value,
        color = elementProps.color,
        _onBlur = elementProps.onBlur,
        _onInput = elementProps.onInput;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
        name: nameProp !== null && nameProp !== void 0 ? nameProp : name,
        value: valueProp !== null && valueProp !== void 0 ? valueProp : value,
        color: color !== null && color !== void 0 ? color : validateStatus === "invalid" ? "danger" : undefined,
        onInput: function onInput(e) {
          _onInput === null || _onInput === void 0 ? void 0 : _onInput(e);
          onDelegatingChange === null || onDelegatingChange === void 0 ? void 0 : onDelegatingChange(e.detail.value);
        },
        onBlur: function onBlur(e) {
          _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
          onDelegatingBlur === null || onDelegatingBlur === void 0 ? void 0 : onDelegatingBlur(e.detail.value);
        }
      });
    }
  }, {
    key: "supportsControlType",
    value: function supportsControlType(elementType) {
      return elementType === _tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input || elementType === _tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Textarea || elementType === _input__WEBPACK_IMPORTED_MODULE_2__["default"] || elementType === _textarea__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }]);
}())());
(0,_form_control_handler__WEBPACK_IMPORTED_MODULE_10__.registerFormControlHandler)(new ( /*#__PURE__*/function () {
  function _class2() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, _class2);
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_class2, [{
    key: "doControlRender",
    value: function doControlRender(element, controller) {
      var name = controller.name,
        value = controller.value,
        onDelegatingChange = controller.onChange;
      var elementProps = element.props;
      var nameProp = elementProps.name,
        checkedProp = elementProps.checked,
        _onChange = elementProps.onChange;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
        name: nameProp !== null && nameProp !== void 0 ? nameProp : name,
        checked: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
        onChange: function onChange(e) {
          _onChange === null || _onChange === void 0 ? void 0 : _onChange(e);
          onDelegatingChange === null || onDelegatingChange === void 0 ? void 0 : onDelegatingChange(e.detail.value);
        }
      });
    }
  }, {
    key: "supportsControlType",
    value: function supportsControlType(elementType) {
      return elementType === _tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Switch;
    }
  }]);
}())());
(0,_form_control_handler__WEBPACK_IMPORTED_MODULE_10__.registerFormControlHandler)(new ( /*#__PURE__*/function () {
  function _class3() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, _class3);
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_class3, [{
    key: "doControlRender",
    value: function doControlRender(element, controller) {
      var value = controller.value,
        onDelegatingChange = controller.onChange;
      var elementProps = element.props;
      var checkedProp = elementProps.checked,
        _onChange2 = elementProps.onChange;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
        checked: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
        onChange: function onChange(checked) {
          _onChange2 === null || _onChange2 === void 0 ? void 0 : _onChange2(checked);
          onDelegatingChange === null || onDelegatingChange === void 0 ? void 0 : onDelegatingChange(checked);
        }
      });
    }
  }, {
    key: "supportsControlType",
    value: function supportsControlType(elementType) {
      return elementType === _checkbox__WEBPACK_IMPORTED_MODULE_1__["default"] || elementType === _switch__WEBPACK_IMPORTED_MODULE_7__["default"];
    }
  }]);
}())());
(0,_form_control_handler__WEBPACK_IMPORTED_MODULE_10__.registerFormControlHandler)(new ( /*#__PURE__*/function () {
  function _class4() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, _class4);
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_class4, [{
    key: "doControlRender",
    value: function doControlRender(element, controller) {
      var value = controller.value,
        onDelegatingChange = controller.onChange;
      var elementProps = element.props;
      var valueProp = elementProps.value,
        _onChange3 = elementProps.onChange;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
        value: valueProp !== null && valueProp !== void 0 ? valueProp : value,
        onChange: function onChange(nextValue) {
          _onChange3 === null || _onChange3 === void 0 ? void 0 : _onChange3(nextValue);
          onDelegatingChange === null || onDelegatingChange === void 0 ? void 0 : onDelegatingChange(nextValue);
        }
      });
    }
  }, {
    key: "supportsControlType",
    value: function supportsControlType(elementType) {
      return elementType === _checkbox__WEBPACK_IMPORTED_MODULE_1__["default"].Group || elementType === _radio__WEBPACK_IMPORTED_MODULE_3__["default"].Group || elementType === _rate__WEBPACK_IMPORTED_MODULE_4__["default"] || elementType === _slider__WEBPACK_IMPORTED_MODULE_5__["default"] || elementType === _stepper__WEBPACK_IMPORTED_MODULE_6__["default"] || elementType === _uploader__WEBPACK_IMPORTED_MODULE_9__["default"];
    }
  }]);
}())());

/***/ }),

/***/ "./node_modules/@taroify/core/form/control/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/form/control/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doFormControlHandler": function() { return /* reexport safe */ _form_control_handler__WEBPACK_IMPORTED_MODULE_1__.doFormControlHandler; }
/* harmony export */ });
/* harmony import */ var _form_control_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control-handlers */ "./node_modules/@taroify/core/form/control/form-control-handlers.js");
/* harmony import */ var _form_control_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-control-handler */ "./node_modules/@taroify/core/form/control/form-control-handler.js");



/***/ }),

/***/ "./node_modules/@taroify/core/form/form-control.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-control.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input */ "./node_modules/@taroify/core/input/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control */ "./node_modules/@taroify/core/form/control/index.js");
/* harmony import */ var _form_item_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-item.context */ "./node_modules/@taroify/core/form/form-item.context.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");



var _excluded = ["className", "name", "value", "align", "children", "onChange", "onBlur"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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









function FormControl(props) {
  var className = props.className,
    name = props.name,
    value = props.value,
    alignProp = props.align,
    _props$children = props.children,
    children = _props$children === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__["default"], null) : _props$children,
    onDelegatingChange = props.onChange,
    onDelegatingBlur = props.onBlur,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_7__["default"]),
    formName = _useContext.name,
    controlAlign = _useContext.controlAlign;
  var align = alignProp !== null && alignProp !== void 0 ? alignProp : controlAlign;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_form_item_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    validateStatus = _useContext2.validateStatus;
  var field = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(children)) {
      return children === null || children === void 0 ? void 0 : children({
        name: name,
        value: formName ? value : undefined,
        validateStatus: validateStatus,
        onChange: onDelegatingChange,
        onBlur: onDelegatingBlur
      });
    }
    return react__WEBPACK_IMPORTED_MODULE_3__.Children.map(children, function (child) {
      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(child)) {
        return child;
      }
      var element = child;
      return (0,_control__WEBPACK_IMPORTED_MODULE_5__.doFormControlHandler)(element, {
        name: name,
        value: value,
        validateStatus: validateStatus,
        onChange: onDelegatingChange,
        onBlur: onDelegatingBlur
      });
    });
  }, [children, formName, name, onDelegatingBlur, onDelegatingChange, validateStatus, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("form-control"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("form-control--left"), align === "left"), (0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("form-control--center"), align === "center"), (0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("form-control--right"), align === "right"), className),
    children: field
  }, restProps));
}
/* harmony default export */ __webpack_exports__["default"] = (FormControl);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-feedback.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-feedback.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");


var _excluded = ["className", "align", "status"];
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




function FormFeedback(props) {
  var className = props.className,
    _props$align = props.align,
    align = _props$align === void 0 ? "left" : _props$align,
    status = props.status,
    restProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--left"), align === "left"), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--center"), align === "center"), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--right"), align === "right"), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--valid"), status === "valid"), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--warning"), status === "warning"), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("form-feedback--invalid"), status === "invalid"), className)
  }, restProps));
}
FormFeedback.displayName = "FormFeedback";
/* harmony default export */ __webpack_exports__["default"] = (FormFeedback);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-item.context.js":
/*!**************************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-item.context.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormItemContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (FormItemContext);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-item.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-item.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cell */ "./node_modules/@taroify/core/cell/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form */ "./node_modules/@taroify/core/form/index.js");
/* harmony import */ var _form_form_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_promisify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/promisify */ "./node_modules/@taroify/core/utils/promisify.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/validate */ "./node_modules/@taroify/core/utils/validate/index.js");
/* harmony import */ var _form_feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-feedback */ "./node_modules/@taroify/core/form/form-feedback.js");
/* harmony import */ var _form_item_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-item.context */ "./node_modules/@taroify/core/form/form-item.context.js");
/* harmony import */ var _form_rule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form.rule */ "./node_modules/@taroify/core/form/form.rule.js");
/* harmony import */ var _use_form_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./use-form-error */ "./node_modules/@taroify/core/form/use-form-error.js");
/* harmony import */ var _use_form_field_value_effect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./use-form-field-value-effect */ "./node_modules/@taroify/core/form/use-form-field-value-effect.js");
/* harmony import */ var _use_form_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./use-form-item */ "./node_modules/@taroify/core/form/use-form-item.js");




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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


















function useFormItemChildren(childrenProps, shouldUpdateSignal, noStyle) {
  return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    if (noStyle) {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(childrenProps)) {
        var _children = childrenProps();
        return {
          children: /*#__PURE__*/ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.isValidElement)(_children) ? _children : undefined
        };
      } else {
        console.warn('[Taroify] FormItem(noStyle): "children" should be function');
        return {};
      }
    }
    var __children__ = {
      feedbacks: []
    };
    var children = lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(childrenProps) ? childrenProps() : childrenProps;
    react__WEBPACK_IMPORTED_MODULE_6__.Children.forEach(children, function (child) {
      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.isValidElement)(child)) {
        return;
      }
      if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_12__.isElementOf)(child, _form__WEBPACK_IMPORTED_MODULE_8__["default"].Label)) {
        __children__.label = child;
      } else if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_12__.isElementOf)(child, _form__WEBPACK_IMPORTED_MODULE_8__["default"].Control)) {
        __children__.control = child;
      } else if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_12__.isElementOf)(child, _form__WEBPACK_IMPORTED_MODULE_8__["default"].Feedback)) {
        var _children__$feedback;
        (_children__$feedback = __children__.feedbacks) === null || _children__$feedback === void 0 ? void 0 : _children__$feedback.push(child);
      }
    });
    return __children__;
  }, [childrenProps, shouldUpdateSignal, noStyle]);
}
var FormItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function (props, ref) {
  var className = props.className,
    style = props.style,
    name = props.name,
    defaultValue = props.defaultValue,
    align = props.align,
    bordered = props.bordered,
    icon = props.icon,
    rightIcon = props.rightIcon,
    clickable = props.clickable,
    required = props.required,
    childrenProp = props.children,
    rulesProp = props.rules,
    dependencies = props.dependencies,
    shouldUpdate = props.shouldUpdate,
    noStyle = props.noStyle,
    onClick = props.onClick;
  var shouldUpdateSignal = (0,_use_form_item__WEBPACK_IMPORTED_MODULE_18__.useShouldUpdateSignal)(shouldUpdate);
  var _useFormItemChildren = useFormItemChildren(childrenProp, shouldUpdateSignal, noStyle),
    label = _useFormItemChildren.label,
    control = _useFormItemChildren.control,
    feedbacks = _useFormItemChildren.feedbacks,
    children = _useFormItemChildren.children;
  var rulesRef = (0,_utils_state__WEBPACK_IMPORTED_MODULE_11__.useToRef)(rulesProp);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_form_form_context__WEBPACK_IMPORTED_MODULE_9__["default"]),
    validateTrigger = _useContext.validateTrigger;
  var _useFormError = (0,_use_form_error__WEBPACK_IMPORTED_MODULE_16__["default"])(name),
    validateStatus = _useFormError.validateStatus,
    error = _useFormError.error,
    setError = _useFormError.setError,
    resetError = _useFormError.resetError;
  var _useFormValue = (0,_form__WEBPACK_IMPORTED_MODULE_8__.useFormValue)(name, {
      defaultValue: defaultValue
    }),
    value = _useFormValue.value,
    getValue = _useFormValue.getValue,
    setValue = _useFormValue.setValue;
  var validate = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rulesRef.current;
    return new Promise(function (resolve, reject) {
      if (rules) {
        resetError();
        (0,_form_rule__WEBPACK_IMPORTED_MODULE_15__.validateRules)(getValue(), rules).then(function (errors) {
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(errors)) {
            resetError();
            resolve();
          } else {
            setError({
              errors: errors
            });
            reject({
              name: name,
              errors: errors
            });
          }
        });
      } else {
        resolve();
      }
    });
  }, [getValue, name, resetError, rulesRef, setError]);
  var validateWithTrigger = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (trigger) {
    if (validateTrigger && rulesProp) {
      var defaultTrigger = validateTrigger === trigger;
      var rules = rulesProp.filter(function (rule) {
        if (rule.trigger) {
          return rule.trigger === trigger;
        }
        return defaultTrigger;
      });
      if (rules.length) {
        (0,_utils_promisify__WEBPACK_IMPORTED_MODULE_10__.fulfillPromise)(validate(rulesProp));
      } else if (defaultTrigger) {
        resetError();
      }
    }
  }, [resetError, rulesProp, validate, validateTrigger]);
  var instance = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return {
      name: name,
      validate: validate,
      getValue: getValue,
      setValue: setValue
    };
  }, [getValue, name, setValue, validate]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useImperativeHandle)(ref, function () {
    return instance;
  }, [instance]);
  (0,_form__WEBPACK_IMPORTED_MODULE_8__.useFormField)(name, instance);
  (0,_use_form_field_value_effect__WEBPACK_IMPORTED_MODULE_17__["default"])(function () {
    return validateWithTrigger("onChange");
  }, [value]);
  (0,_use_form_item__WEBPACK_IMPORTED_MODULE_18__.useDependenciesChange)(dependencies, function () {
    return (0,_utils_promisify__WEBPACK_IMPORTED_MODULE_10__.fulfillPromise)(validate());
  });
  var explain = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(feedbacks) || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(error === null || error === void 0 ? void 0 : error.errors);
  }, [error === null || error === void 0 ? void 0 : error.errors, feedbacks]);
  var Control = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return control && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.cloneElement)(control, {
      name: name,
      value: value,
      onBlur: function onBlur() {
        return validateWithTrigger("onBlur");
      },
      onChange: setValue
    });
  }, [control, name, setValue, validateWithTrigger, value]);
  if (noStyle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_form_item_context__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
      value: {
        validateStatus: validateStatus
      }
    }, children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_form_item_context__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
    value: {
      validateStatus: validateStatus
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_cell__WEBPACK_IMPORTED_MODULE_7__.CellBase, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_19__.prefixClassname)("form-item"), className),
    style: style,
    bordered: bordered,
    align: align,
    clickable: clickable,
    icon: (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_4__.cloneIconElement)(icon, {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_19__.prefixClassname)("form-item__icon")
    }),
    rightIcon: (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_4__.cloneIconElement)(rightIcon, {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_19__.prefixClassname)("form-item__right-icon")
    }),
    required: required
  }, onClick && {
    onClick: onClick
  }), label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_cell__WEBPACK_IMPORTED_MODULE_7__.CellValue, {
    alone: false
  }, Control, explain && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_20__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_19__.prefixClassname)("form__feedbacks"))
  }, feedbacks, lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(error === null || error === void 0 ? void 0 : error.errors, function (message, messageKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_form_feedback__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: messageKey,
      status: "invalid",
      children: message
    });
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (FormItem);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-label.js":
/*!*******************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-label.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cell_cell_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell/cell-title */ "./node_modules/@taroify/core/cell/cell-title.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");


var _excluded = ["align", "colon", "children"];
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






function FormLabel(props) {
  var alignProp = props.align,
    colonProp = props.colon,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
    ctxColon = _useContext.colon,
    labelAlign = _useContext.labelAlign;
  var align = alignProp !== null && alignProp !== void 0 ? alignProp : labelAlign;
  var colon = colonProp !== null && colonProp !== void 0 ? colonProp : ctxColon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_cell_cell_title__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("form-label"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("form-label--left"), align === "left"), (0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("form-label--center"), align === "center"), (0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("form-label--right"), align === "right"))
  }, restProps), children, colon ? ":" : undefined);
}
FormLabel.displayName = "FormLabel";
/* harmony default export */ __webpack_exports__["default"] = (FormLabel);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-list.context.js":
/*!**************************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-list.context.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var formListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  inFormList: false
});
/* harmony default export */ __webpack_exports__["default"] = (formListContext);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form-list.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/form/form-list.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_list_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-list.context */ "./node_modules/@taroify/core/form/form-list.context.js");
/* harmony import */ var _use_form_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-form-list */ "./node_modules/@taroify/core/form/use-form-list.js");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FormList(_ref, ref) {
  var field = _ref.name,
    children = _ref.children,
    defaultValue = _ref.defaultValue;
  var _useFormList = (0,_use_form_list__WEBPACK_IMPORTED_MODULE_3__["default"])(field, {
      defaultValue: defaultValue
    }),
    _useFormList2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useFormList, 2),
    fields = _useFormList2[0],
    operation = _useFormList2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, function () {
    return operation;
  }, [operation]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form_list_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      inFormList: true
    }
  }, lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(children) && children(fields, operation));
}));

/***/ }),

/***/ "./node_modules/@taroify/core/form/form.context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/form/form.context.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form.js":
/*!*************************************************!*\
  !*** ./node_modules/@taroify/core/form/form.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");

var _excluded = ["name", "defaultValues", "values", "labelAlign", "controlAlign", "validateTrigger", "colon", "children", "onValidate", "onValuesChange", "onSubmit", "onReset"];
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








var Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (props, ref) {
  var nameProp = props.name,
    defaultValues = props.defaultValues,
    values = props.values,
    labelAlign = props.labelAlign,
    controlAlign = props.controlAlign,
    _props$validateTrigge = props.validateTrigger,
    validateTrigger = _props$validateTrigge === void 0 ? "onBlur" : _props$validateTrigge,
    colon = props.colon,
    childrenProp = props.children,
    onValidate = props.onValidate,
    onValuesChange = props.onValuesChange,
    onSubmit = props.onSubmit,
    onReset = props.onReset,
    restProps = _objectWithoutProperties(props, _excluded);
  var forceUpdate = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useForceUpdate)();
  var nameId = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useUniqueId)();
  var name = nameProp !== null && nameProp !== void 0 ? nameProp : nameId;
  var _useForm = (0,_use_form__WEBPACK_IMPORTED_MODULE_6__["default"])(name, {
      defaultValues: defaultValues,
      values: values
    }),
    getErrors = _useForm.getErrors,
    setErrors = _useForm.setErrors,
    setValues = _useForm.setValues,
    getValues = _useForm.getValues,
    validate = _useForm.validate,
    reset = _useForm.reset,
    setFieldsValue = _useForm.setFieldsValue,
    getFieldsValue = _useForm.getFieldsValue,
    validateFields = _useForm.validateFields,
    addEventListener = _useForm.addEventListener,
    removeEventListener = _useForm.removeEventListener;
  var delegatingReset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    reset();
    onReset === null || onReset === void 0 ? void 0 : onReset(e);
  }, [onReset, reset]);
  var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    validate().then(function (values) {
      var event = Object.assign({}, e, {
        detail: _objectSpread(_objectSpread({}, e.detail), {}, {
          value: values
        })
      });
      onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(event);
    }).catch(function (errors) {
      return onValidate === null || onValidate === void 0 ? void 0 : onValidate(errors);
    });
  }, [onSubmit, onValidate, validate]);
  var handleReset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {
    (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_4__.preventDefault)(e);
    delegatingReset(e);
  }, [delegatingReset]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref, function () {
    return {
      getErrors: getErrors,
      setErrors: setErrors,
      getValues: getValues,
      setValues: setValues,
      validate: validate,
      reset: function reset() {
        return delegatingReset();
      },
      setFieldsValue: setFieldsValue,
      getFieldsValue: getFieldsValue,
      validateFields: validateFields
    };
  }, [delegatingReset, getErrors, getFieldsValue, getValues, setErrors, setFieldsValue, setValues, validate, validateFields]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (onValuesChange) {
      addEventListener("change", onValuesChange);
    }
    return function () {
      if (onValuesChange) {
        removeEventListener("change", onValuesChange);
      }
    };
  }, [addEventListener, onValuesChange, removeEventListener]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    addEventListener("reset", forceUpdate);
    return function () {
      return removeEventListener("reset", forceUpdate);
    };
  }, [addEventListener, forceUpdate, onValuesChange, removeEventListener]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_form_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      name: name,
      colon: colon,
      labelAlign: labelAlign,
      controlAlign: controlAlign,
      validateTrigger: validateTrigger
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Form, _objectSpread({
    onSubmit: handleSubmit,
    onReset: handleReset,
    children: childrenProp
  }, restProps)));
});
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/@taroify/core/form/form.rule.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/form/form.rule.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateRules": function() { return /* binding */ validateRules; }
/* harmony export */ });
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isError */ "./node_modules/lodash/isError.js");
/* harmony import */ var lodash_isError__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isError__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isBoolean */ "./node_modules/lodash/isBoolean.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_promisify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/promisify */ "./node_modules/@taroify/core/utils/promisify.js");





function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value === 0) {
    return false;
  }
  return !value;
}
function getRuleMessage(value, rule) {
  var message = rule.message;
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(message)) {
    return message(value, rule);
  }
  return message;
}
function getSyncRule(value, rule) {
  if (rule.required && isEmptyValue(value)) {
    return Promise.resolve(getRuleMessage(value, rule));
  }
  if (rule.pattern && !rule.pattern.test(String(value))) {
    return Promise.resolve(getRuleMessage(value, rule));
  }
}
function getValidatorRule(value, rule) {
  function obtainInvalidMessage(error) {
    if (lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2___default()(error) && !error) {
      return getRuleMessage(value, rule);
    }
    if (lodash_isError__WEBPACK_IMPORTED_MODULE_1___default()(error)) {
      return error.message;
    }
    return error;
  }
  return new Promise(function (resolve) {
    var _rule$validator;
    var promise = (_rule$validator = rule.validator) === null || _rule$validator === void 0 ? void 0 : _rule$validator.call(rule, value, rule);
    if ((0,_utils_promisify__WEBPACK_IMPORTED_MODULE_4__.isPromise)(promise)) {
      promise.then(obtainInvalidMessage).catch(obtainInvalidMessage).then(resolve);
    } else {
      resolve(obtainInvalidMessage(promise));
    }
  });
}
function validateRule(value, rule) {
  var _getSyncRule;
  return (_getSyncRule = getSyncRule(value, rule)) !== null && _getSyncRule !== void 0 ? _getSyncRule : getValidatorRule(value, rule);
}
function validateRules(value, rules) {
  return rules.reduce(function (promise, rule) {
    return promise.then(function (errors) {
      if (rule.formatter) {
        value = rule.formatter(value, rule);
      }
      return validateRule(value, rule).then(function (error) {
        if (lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(error)) {
          errors.push(error);
        }
        return errors;
      });
    });
  }, Promise.resolve([]));
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/form.validate.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/form/form.validate.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAll": function() { return /* binding */ validateAll; }
/* harmony export */ });
/* unused harmony export validateSequence */
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__);



function validateAll(fields) {
  return new Promise(function (resolve, reject) {
    Promise.all(fields.map(function (field) {
      return field.validate().then(function () {
        return [];
      }, function (reason) {
        return [reason];
      });
    })).then(function (errors) {
      return lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default()(errors, function (error) {
        return error;
      });
    }).then(function (errors) {
      return lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(errors, function (error) {
        return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(error.errors);
      });
    }).then(function (errors) {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(errors)) {
        reject(errors);
      } else {
        resolve();
      }
    });
  });
}
function validateSequence(fields) {
  return new Promise(function (resolve, reject) {
    fields.reduce(function (promise, field) {
      return promise.then(function (errors) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(errors)) {
          return field.validate().then(function () {
            return [];
          }, function (error) {
            return [error];
          });
        }
        return errors;
      });
    }, Promise.resolve([])).then(function (errors) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(errors)) {
        resolve();
      } else {
        reject(errors);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@taroify/core/form/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormField": function() { return /* reexport safe */ _use_form_field__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "useFormValue": function() { return /* reexport safe */ _use_form_value__WEBPACK_IMPORTED_MODULE_7__["default"]; }
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./node_modules/@taroify/core/form/form.js");
/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-control */ "./node_modules/@taroify/core/form/form-control.js");
/* harmony import */ var _form_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-feedback */ "./node_modules/@taroify/core/form/form-feedback.js");
/* harmony import */ var _form_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-item */ "./node_modules/@taroify/core/form/form-item.js");
/* harmony import */ var _form_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-label */ "./node_modules/@taroify/core/form/form-label.js");
/* harmony import */ var _form_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-list */ "./node_modules/@taroify/core/form/form-list.js");
/* harmony import */ var _use_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-form-field */ "./node_modules/@taroify/core/form/use-form-field.js");
/* harmony import */ var _use_form_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-form-value */ "./node_modules/@taroify/core/form/use-form-value.js");








var Form = _form__WEBPACK_IMPORTED_MODULE_0__["default"];
Form.Item = _form_item__WEBPACK_IMPORTED_MODULE_3__["default"];
Form.Label = _form_label__WEBPACK_IMPORTED_MODULE_4__["default"];
Form.Control = _form_control__WEBPACK_IMPORTED_MODULE_1__["default"];
Form.Feedback = _form_feedback__WEBPACK_IMPORTED_MODULE_2__["default"];
Form.List = _form_list__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-error.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-error.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormError; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/first */ "./node_modules/lodash/first.js");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");



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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}





function useFormError(name) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    formName = _useContext.name;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_7__["default"])(formName);
  var forceUpdate = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_3__.useForceUpdate)();
  var onErrorChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    return forceUpdate();
  }, [forceUpdate]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    form === null || form === void 0 ? void 0 : form.addEventListener("fields.".concat(name, ".error.change"), onErrorChange);
    return function () {
      return form === null || form === void 0 ? void 0 : form.removeEventListener("fields.".concat(name, ".error.change"), onErrorChange);
    };
  }, [form, name, onErrorChange]);
  var getError = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    if (name) return lodash_first__WEBPACK_IMPORTED_MODULE_1___default()(form === null || form === void 0 ? void 0 : form.getErrors(name));
  }, [form, name]);
  var setError = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (error) {
    if (name) {
      form === null || form === void 0 ? void 0 : form.setErrors([_objectSpread(_objectSpread({}, error), {}, {
        name: name
      })]);
    }
  }, [form, name]);
  var resetError = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    return setError({
      errors: []
    });
  }, [setError]);
  var validateStatus = (0,_utils_state__WEBPACK_IMPORTED_MODULE_5__.useRendered)(function () {
    var _getError;
    return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()((_getError = getError()) === null || _getError === void 0 ? void 0 : _getError.errors) ? "valid" : "invalid";
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return {
      validateStatus: validateStatus,
      get error() {
        return getError();
      },
      getError: getError,
      setError: setError,
      resetError: resetError
    };
  }, [getError, resetError, setError, validateStatus]);
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-field-value-effect.js":
/*!************************************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-field-value-effect.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");



function useFormFieldValueEffect(effect, deps) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
    formName = _useContext.name;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_2__["default"])(formName);
  var mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var onReset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return mountedRef.current = false;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
    return function () {
      return form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
    };
  }, [form, onReset]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mountedRef.current) {
      effect === null || effect === void 0 ? void 0 : effect();
    } else {
      mountedRef.current = true;
    }
  }, deps);
}
/* harmony default export */ __webpack_exports__["default"] = (useFormFieldValueEffect);

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-field.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-field.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");
/* harmony import */ var _form_list_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-list.context */ "./node_modules/@taroify/core/form/form-list.context.js");




function useFormField(name, field) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
    formName = _useContext.name;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_form_list_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
    inFormList = _useContext2.inFormList;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_2__["default"])(formName);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _form$linkField;
    form === null || form === void 0 || (_form$linkField = form.linkField) === null || _form$linkField === void 0 ? void 0 : _form$linkField.call(form, name, field, inFormList);
    return function () {
      form === null || form === void 0 ? void 0 : form.unlinkField(name, inFormList);
    };
  }, [name, field, inFormList]);
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-item.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-item.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDependenciesChange": function() { return /* binding */ useDependenciesChange; },
/* harmony export */   "useShouldUpdateSignal": function() { return /* binding */ useShouldUpdateSignal; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");






function useDependenciesChange(dependencies, validate) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
    formName = _useContext.name;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_4__["default"])(formName);
  var validateMemo = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useMemoizedFn)(function () {
    return validate();
  });
  (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useDeepCompareEffect)(function () {
    var validFields = dependencies || [];
    validFields.forEach(function (dep) {
      form === null || form === void 0 ? void 0 : form.addEventListener("fields.".concat(dep, ".value.change"), validateMemo);
    });
    return function () {
      validFields.forEach(function (dep) {
        form === null || form === void 0 ? void 0 : form.removeEventListener("fields.".concat(dep, ".value.change"), validateMemo);
      });
    };
  }, [dependencies, validateMemo]);
}
function useShouldUpdateSignal(shouldUpdate) {
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
    formName = _useContext2.name;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_4__["default"])(formName);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    signal = _useState2[0],
    setSignal = _useState2[1];
  var shouldUpdateMemo = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useMemoizedFn)(function (oldVal, newVal) {
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(shouldUpdate) ? shouldUpdate(oldVal, newVal) : shouldUpdate) {
      setSignal(function (prev) {
        return prev + 1;
      });
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    form === null || form === void 0 ? void 0 : form.addEventListener("shouldUpdate", shouldUpdateMemo);
    return function () {
      return form === null || form === void 0 ? void 0 : form.removeEventListener("change", shouldUpdateMemo);
    };
  }, [form, shouldUpdateMemo]);
  return signal;
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-list.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-list.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormList; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");
/* harmony import */ var _use_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-form-field */ "./node_modules/@taroify/core/form/use-form-field.js");
/* harmony import */ var _use_form_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-form-value */ "./node_modules/@taroify/core/form/use-form-value.js");






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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}






var fieldKey = 0;
function useFormList(field, options) {
  var _ref = options !== null && options !== void 0 ? options : {},
    defaultValue = _ref.defaultValue;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    formName = _useContext.name;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_7__["default"])(formName);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  var valueChangeHandler = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (values) {
    var _formAttributes$error;
    if ((values || []).length !== fields.length) {
      setFields(lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(values, function (_, i) {
        return {
          name: "".concat(field, ".").concat(i),
          key: ++fieldKey
        };
      }));
    }
    var formAttributes = form === null || form === void 0 ? void 0 : form.getAttributiveForm();
    if (formAttributes !== null && formAttributes !== void 0 && (_formAttributes$error = formAttributes.errors) !== null && _formAttributes$error !== void 0 && _formAttributes$error[field]) {
      formAttributes.errors = _objectSpread(_objectSpread({}, formAttributes.errors), {}, (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, field, []));
    }
  });
  var resetHandler = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function () {
    setFields(lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(getValue(), function (_, i) {
      return {
        name: "".concat(field, ".").concat(i),
        key: ++fieldKey
      };
    }));
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", resetHandler);
    return function () {
      return form === null || form === void 0 ? void 0 : form.removeEventListener("reset", resetHandler);
    };
  }, [form]);
  var _useFormValue = (0,_use_form_value__WEBPACK_IMPORTED_MODULE_9__["default"])(field, {
      defaultValue: defaultValue,
      valueChangeHandler: valueChangeHandler
    }),
    getValue = _useFormValue.getValue,
    setValue = _useFormValue.setValue;
  var instance = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return {
      name: field,
      validate: function validate() {
        return Promise.resolve();
      },
      getValue: getValue,
      setValue: setValue
    };
  }, [getValue, field, setValue]);
  (0,_use_form_field__WEBPACK_IMPORTED_MODULE_8__["default"])(field, instance);
  var add = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (value) {
    setFields(fields.concat([{
      name: "".concat(field, ".").concat(fields.length),
      key: ++fieldKey
    }]));
    form === null || form === void 0 ? void 0 : form.setValues((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, "".concat(field, ".").concat(fields.length), value));
  });
  var remove = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useMemoizedFn)(function (index) {
    var _form$getValues, _formAttributes$error2;
    var values = (form === null || form === void 0 || (_form$getValues = form.getValues(field)) === null || _form$getValues === void 0 ? void 0 : _form$getValues[field]) || [];
    form === null || form === void 0 ? void 0 : form.setValues((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, field, lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(values.slice(), function (_, i) {
      return i !== index;
    })), false);
    var formAttributes = form === null || form === void 0 ? void 0 : form.getAttributiveForm();
    if (formAttributes !== null && formAttributes !== void 0 && (_formAttributes$error2 = formAttributes.errors) !== null && _formAttributes$error2 !== void 0 && _formAttributes$error2[field]) {
      var errors = formAttributes.errors[field];
      var newErrors = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(errors.slice(), function (_, i) {
        return i !== index;
      }));
      var _loop = function _loop(i) {
        if (newErrors[i]) {
          var keys = Object.keys(newErrors[i]);
          if (keys.includes("name") && typeof newErrors[i]["name"] === "string") {
            newErrors[i]["name"] = "".concat(field, ".").concat(i);
          } else {
            keys.forEach(function (key) {
              newErrors[i][key]["name"] = "".concat(field, ".").concat(i, ".").concat(key);
            });
          }
        }
      };
      for (var i = 0; i < newErrors.length; i++) {
        _loop(i);
      }
      formAttributes.errors = _objectSpread(_objectSpread({}, formAttributes.errors), {}, (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, field, newErrors));
    }
    setFields(lodash_filter__WEBPACK_IMPORTED_MODULE_1___default()(fields, function (_, i) {
      return i !== index;
    }).map(function (item, i) {
      return {
        name: "".concat(field, ".").concat(i),
        key: item.key
      };
    }));
  });
  var operation = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return {
      add: add,
      remove: remove
    };
  }, []);
  return [fields, operation];
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form-value.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form-value.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormValue; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.context */ "./node_modules/@taroify/core/form/form.context.js");
/* harmony import */ var _use_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-form */ "./node_modules/@taroify/core/form/use-form.js");
/* harmony import */ var _form_list_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-list.context */ "./node_modules/@taroify/core/form/form-list.context.js");








function useFormValue(name, options) {
  var _ref = options !== null && options !== void 0 ? options : {},
    defaultValue = _ref.defaultValue,
    valueChangeHandler = _ref.valueChangeHandler;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
    formName = _useContext.name;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_form_list_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    inFormList = _useContext2.inFormList;
  var form = (0,_use_form__WEBPACK_IMPORTED_MODULE_5__["default"])(formName);
  var forceUpdate = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useForceUpdate)();
  var onValueChange = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useMemoizedFn)(function (values) {
    valueChangeHandler === null || valueChangeHandler === void 0 ? void 0 : valueChangeHandler(values);
    forceUpdate();
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    form === null || form === void 0 ? void 0 : form.addEventListener("fields.".concat(name, ".value.change"), onValueChange);
    return function () {
      return form === null || form === void 0 ? void 0 : form.removeEventListener("fields.".concat(name, ".value.change"), onValueChange);
    };
  }, [form, name, onValueChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (name && defaultValue) {
      form === null || form === void 0 ? void 0 : form.setDefaultValues((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, defaultValue), inFormList);
    }
  }, []);
  var getValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    if (form) {
      var _get2;
      return (_get2 = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(form.getValues(name), name)) !== null && _get2 !== void 0 ? _get2 : "";
    }
  }, [form, name]);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      get value() {
        return getValue();
      },
      setValue: function setValue(value) {
        if (name) {
          form === null || form === void 0 ? void 0 : form.setValues((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
        }
      },
      getValue: getValue
    };
  }, [form, getValue, name]);
}

/***/ }),

/***/ "./node_modules/@taroify/core/form/use-form.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/form/use-form.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toArray */ "./node_modules/lodash/toArray.js");
/* harmony import */ var lodash_toArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/@taroify/core/utils/logger.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _form_validate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form.validate */ "./node_modules/@taroify/core/form/form.validate.js");

















function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}





var _getLogger = (0,_utils_logger__WEBPACK_IMPORTED_MODULE_15__.getLogger)("useForm"),
  warn = _getLogger.warn;
var containerForms = new Map();
var containerFormRefs = new Map();
function toMapValueArray(map) {
  var array = [];
  map === null || map === void 0 ? void 0 : map.forEach(function (value) {
    return array.push(value);
  });
  return array;
}
function _getAttributiveForm14(formName) {
  return containerForms.get(formName);
}
var _fields = /*#__PURE__*/new WeakMap();
var _inFormListFields = /*#__PURE__*/new WeakMap();
var _defaultValues = /*#__PURE__*/new WeakMap();
var _values = /*#__PURE__*/new WeakMap();
var _errors = /*#__PURE__*/new WeakMap();
var _events = /*#__PURE__*/new WeakMap();
var FormAttributes = /*#__PURE__*/function () {
  function FormAttributes() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this, FormAttributes);
    _classPrivateFieldInitSpec(this, _fields, {
      writable: true,
      value: new Map()
    });
    _classPrivateFieldInitSpec(this, _inFormListFields, {
      writable: true,
      value: new Map()
    });
    _classPrivateFieldInitSpec(this, _defaultValues, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _values, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _errors, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: new _tarojs_taro__WEBPACK_IMPORTED_MODULE_13__.Events()
    });
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(FormAttributes, [{
    key: "fields",
    get: function get() {
      return _classPrivateFieldGet(this, _fields);
    }
  }, {
    key: "inFormListFields",
    get: function get() {
      return _classPrivateFieldGet(this, _inFormListFields);
    }
  }, {
    key: "defaultValues",
    get: function get() {
      return _classPrivateFieldGet(this, _defaultValues);
    },
    set: function set(defaultValues) {
      _classPrivateFieldSet(this, _defaultValues, defaultValues);
    }
  }, {
    key: "values",
    get: function get() {
      return _classPrivateFieldGet(this, _values);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _values, value);
    }
  }, {
    key: "errors",
    get: function get() {
      return _classPrivateFieldGet(this, _errors);
    },
    set: function set(errors) {
      _classPrivateFieldSet(this, _errors, errors);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, listener) {
      var _classPrivateFieldGet2;
      (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _events)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.on(event, listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(event, listener) {
      var _classPrivateFieldGet3;
      (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _events)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.off(event, listener);
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(event) {
      var _classPrivateFieldGet5;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_classPrivateFieldGet5 = _classPrivateFieldGet(this, _events)).trigger.apply(_classPrivateFieldGet5, [event].concat(args));
    }
  }, {
    key: "findFields",
    value: function findFields(predicate) {
      var fields = toMapValueArray(this.fields);
      var inFormListFields = toMapValueArray(_classPrivateFieldGet(this, _inFormListFields));
      return lodash_filter__WEBPACK_IMPORTED_MODULE_12___default()(fields.concat(inFormListFields), predicate);
    }
  }, {
    key: "addField",
    value: function addField(name, field, inFormList) {
      if (inFormList) {
        _classPrivateFieldGet(this, _inFormListFields).set(name, field);
      } else {
        _classPrivateFieldGet(this, _fields).set(name, field);
      }
    }
  }, {
    key: "removeField",
    value: function removeField(name, inFormList) {
      if (inFormList) {
        _classPrivateFieldGet(this, _inFormListFields).delete(name);
      } else {
        _classPrivateFieldGet(this, _fields).delete(name);
      }
    }
  }, {
    key: "hasField",
    value: function hasField(name) {
      return _classPrivateFieldGet(this, _fields).has(name);
    }
  }, {
    key: "getErrors",
    value: function getErrors(nameNames) {
      var names = lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11___default()(nameNames) ? [] : lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default()(nameNames) ? nameNames : [nameNames];
      var errors = this.errors;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(names)) {
        return errors;
      }
      return lodash_reduce__WEBPACK_IMPORTED_MODULE_8___default()(names, function (nameErrors, name) {
        var error = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(errors, name);
        if (error) {
          nameErrors[name] = error;
        }
        return nameErrors;
      }, {});
    }
  }, {
    key: "setErrors",
    value: function setErrors(newErrors) {
      var _this = this;
      var emitChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors = this.errors;
      lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default()(newErrors, function (error) {
        var name = error.name;
        if (name) {
          var oldError = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(errors, name);
          if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(oldError === null || oldError === void 0 ? void 0 : oldError.errors, error === null || error === void 0 ? void 0 : error.errors)) {
            lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(errors, name, error);
            if (emitChange) {
              _this.emitEvent("fields.".concat(name, ".error.change"), errors);
            }
          }
        }
      });
    }
  }, {
    key: "resetErrors",
    value: function resetErrors() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.errors = errors;
    }
  }, {
    key: "getValues",
    value: function getValues(nameNames) {
      var names = lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11___default()(nameNames) ? [] : lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default()(nameNames) ? nameNames : [nameNames];
      var values = {};
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(names)) {
        var _iterator = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_20__["default"])(this.fields.values()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;
            if (field.name) {
              values[field.name] = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.values, field.name);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return values;
      }
      var _iterator2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_20__["default"])(names),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var attr = _step2.value;
          lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(values, attr, lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.values, attr));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return values;
    }
  }, {
    key: "setValues",
    value: function setValues(newValues) {
      var _this2 = this;
      var emitChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var changed = false;
      var values = this.values;
      var prevValues;
      lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default()(newValues, function (value, name) {
        var oldValue = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(values, name);
        if (oldValue !== value) {
          if (!changed) {
            changed = true;
            prevValues = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(values);
          }
          var copyValue = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(value);
          lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(values, name, copyValue);
          if (emitChange) {
            _this2.emitEvent("fields.".concat(name, ".value.change"), copyValue);
          }
        }
      });
      if (changed) {
        this.emitEvent("shouldUpdate", prevValues, values);
        this.emitEvent("change", newValues, values);
      }
    }
  }, {
    key: "resetValues",
    value: function resetValues() {
      var newValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.values = newValues;
    }
  }, {
    key: "release",
    value: function release() {
      var _classPrivateFieldGet4;
      (_classPrivateFieldGet4 = _classPrivateFieldGet(this, _events)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.off();
    }
  }]);
}();
function validateForm(formName, name) {
  return new Promise(function (resolve, reject) {
    var form = _getAttributiveForm14(formName);
    Promise.resolve(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11___default()(name) ? [] : lodash_isArray__WEBPACK_IMPORTED_MODULE_10___default()(name) ? name : [name]).then(function (names) {
      return form === null || form === void 0 ? void 0 : form.findFields(function (field) {
        return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(names) || lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(names, field.name);
      });
    }).then(function (items) {
      return items && (0,_form_validate__WEBPACK_IMPORTED_MODULE_17__.validateAll)(items);
    }).then(function () {
      return form === null || form === void 0 ? void 0 : form.getValues(name);
    }).then(resolve).catch(function (errors) {
      form === null || form === void 0 ? void 0 : form.resetErrors();
      form === null || form === void 0 ? void 0 : form.setErrors(errors);
      reject(errors);
    });
  });
}
function defineForm(formName) {
  return /*#__PURE__*/function () {
    function DelegatingForm() {
      (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this, DelegatingForm);
    }
    return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(DelegatingForm, [{
      key: "name",
      get: function get() {
        return formName;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(event, listener) {
        var _getAttributiveForm;
        (_getAttributiveForm = _getAttributiveForm14(formName)) === null || _getAttributiveForm === void 0 ? void 0 : _getAttributiveForm.addEventListener(event, listener);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(event, listener) {
        var _getAttributiveForm2;
        (_getAttributiveForm2 = _getAttributiveForm14(formName)) === null || _getAttributiveForm2 === void 0 ? void 0 : _getAttributiveForm2.removeEventListener(event, listener);
      }
    }, {
      key: "linkField",
      value: function linkField(name, field, inFormList) {
        if (name && field) {
          var _getAttributiveForm3;
          (_getAttributiveForm3 = _getAttributiveForm14(formName)) === null || _getAttributiveForm3 === void 0 ? void 0 : _getAttributiveForm3.addField(name, field, inFormList);
        }
      }
    }, {
      key: "hasField",
      value: function hasField(name) {
        var _getAttributiveForm4;
        return !!(name && (_getAttributiveForm4 = _getAttributiveForm14(formName)) !== null && _getAttributiveForm4 !== void 0 && _getAttributiveForm4.hasField(name));
      }
    }, {
      key: "unlinkField",
      value: function unlinkField(name, inFormList) {
        if (name) {
          var _getAttributiveForm5;
          (_getAttributiveForm5 = _getAttributiveForm14(formName)) === null || _getAttributiveForm5 === void 0 ? void 0 : _getAttributiveForm5.removeField(name, inFormList);
        }
      }
    }, {
      key: "getFields",
      value: function getFields() {
        var _getAttributiveForm6;
        return toMapValueArray((_getAttributiveForm6 = _getAttributiveForm14(formName)) === null || _getAttributiveForm6 === void 0 ? void 0 : _getAttributiveForm6.fields);
      }
    }, {
      key: "findFields",
      value: function findFields(predicate) {
        var _getAttributiveForm7;
        return (_getAttributiveForm7 = _getAttributiveForm14(formName)) === null || _getAttributiveForm7 === void 0 ? void 0 : _getAttributiveForm7.findFields(predicate);
      }
    }, {
      key: "setErrors",
      value: function setErrors(errors) {
        var _getAttributiveForm8;
        (_getAttributiveForm8 = _getAttributiveForm14(formName)) === null || _getAttributiveForm8 === void 0 ? void 0 : _getAttributiveForm8.setErrors(errors);
      }
    }, {
      key: "resetErrors",
      value: function resetErrors() {
        var _getAttributiveForm9;
        (_getAttributiveForm9 = _getAttributiveForm14(formName)) === null || _getAttributiveForm9 === void 0 ? void 0 : _getAttributiveForm9.resetErrors();
      }
    }, {
      key: "getErrors",
      value: function getErrors(name) {
        var form = _getAttributiveForm14(formName);
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_8___default()(form === null || form === void 0 ? void 0 : form.getErrors(name), function (errors, error) {
          errors.push(error);
          return errors;
        }, []);
      }
    }, {
      key: "setDefaultValues",
      value: function setDefaultValues(defaultValues, inFormList) {
        var form = _getAttributiveForm14(formName);
        if (form) {
          var newValues = {};
          lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default()(defaultValues, function (value, name) {
            if (!inFormList) {
              lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(form.defaultValues, name, value);
            }
            newValues[name] = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(form.values, name) || value;
          });
          form === null || form === void 0 ? void 0 : form.setValues(newValues);
        }
      }
    }, {
      key: "setValues",
      value: function setValues(newValues, emitChange) {
        var _getAttributiveForm10;
        (_getAttributiveForm10 = _getAttributiveForm14(formName)) === null || _getAttributiveForm10 === void 0 ? void 0 : _getAttributiveForm10.setValues(newValues, emitChange);
      }
    }, {
      key: "resetValues",
      value: function resetValues(values) {}
    }, {
      key: "getValues",
      value: function getValues(name) {
        var _getAttributiveForm11;
        return (_getAttributiveForm11 = _getAttributiveForm14(formName)) === null || _getAttributiveForm11 === void 0 ? void 0 : _getAttributiveForm11.getValues(name);
      }
    }, {
      key: "validate",
      value: function validate(name) {
        return validateForm(formName, name);
      }
    }, {
      key: "reset",
      value: function reset() {
        var form = _getAttributiveForm14(formName);
        var newValues = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(form === null || form === void 0 ? void 0 : form.defaultValues);
        form === null || form === void 0 ? void 0 : form.resetValues(newValues);
        form === null || form === void 0 ? void 0 : form.resetErrors();
        form === null || form === void 0 ? void 0 : form.emitEvent("change", newValues, newValues);
        form === null || form === void 0 ? void 0 : form.emitEvent("reset");
      }
    }, {
      key: "setFieldsValue",
      value: function setFieldsValue(newValues, emitChange) {
        var _getAttributiveForm12;
        warn("Please use setValues instead of setFieldsValue");
        (_getAttributiveForm12 = _getAttributiveForm14(formName)) === null || _getAttributiveForm12 === void 0 ? void 0 : _getAttributiveForm12.setValues(newValues);
      }
    }, {
      key: "getFieldsValue",
      value: function getFieldsValue(name) {
        var _getAttributiveForm13;
        warn("Please use getValues instead of getFieldsValue");
        return (_getAttributiveForm13 = _getAttributiveForm14(formName)) === null || _getAttributiveForm13 === void 0 ? void 0 : _getAttributiveForm13.getValues(name);
      }
    }, {
      key: "validateFields",
      value: function validateFields(name) {
        warn("Please use validate instead of validateFields");
        return validateForm(formName, name);
      }
    }, {
      key: "getAttributiveForm",
      value: function getAttributiveForm() {
        return _getAttributiveForm14(this.name);
      }
    }]);
  }();
}
var FormContainer = /*#__PURE__*/function () {
  function FormContainer() {
    (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this, FormContainer);
  }
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_19__["default"])(FormContainer, [{
    key: "getForms",
    value: function getForms() {
      return lodash_toArray__WEBPACK_IMPORTED_MODULE_1___default()(containerForms.values());
    }
  }, {
    key: "getForm",
    value: function getForm(name) {
      if (!containerForms.has(name)) {
        return undefined;
      }
      FormContainer.increaseFormRef(name);
      var DelegatingForm = defineForm(name);
      return new DelegatingForm();
    }
  }, {
    key: "hasForm",
    value: function hasForm(name) {
      return name && containerForms.has(name);
    }
  }, {
    key: "newForm",
    value: function newForm(name) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(name)) {
        return;
      }
      containerForms.set(name, new FormAttributes());
    }
  }, {
    key: "releaseForm",
    value: function releaseForm(name) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(name)) {
        return;
      }
      FormContainer.decreaseFormRef(name);
      if (!FormContainer.hasFormRef(name)) {
        var _containerForms$get;
        (_containerForms$get = containerForms.get(name)) === null || _containerForms$get === void 0 ? void 0 : _containerForms$get.release();
        containerForms.delete(name);
      }
    }
  }], [{
    key: "increaseFormRef",
    value: function increaseFormRef(name) {
      var count = containerFormRefs.get(name);
      containerFormRefs.set(name, (count !== null && count !== void 0 ? count : 0) + 1);
    }
  }, {
    key: "decreaseFormRef",
    value: function decreaseFormRef(name) {
      var count = containerFormRefs.get(name);
      containerFormRefs.set(name, (count !== null && count !== void 0 ? count : 0) - 1);
    }
  }, {
    key: "hasFormRef",
    value: function hasFormRef(name) {
      var count = containerFormRefs.get(name);
      return !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_11___default()(count) && count > 0;
    }
  }]);
}();
var formContainer = new FormContainer();
function useConstant(value) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(value),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_21__["default"])(_useState, 1),
    constant = _useState2[0];
  return constant;
}
function useForm() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultValues = options.defaultValues,
    values = options.values;
  var hasForm = formContainer.hasForm(name);
  var immutableHasForm = useConstant(hasForm);
  var nameRef = (0,_utils_state__WEBPACK_IMPORTED_MODULE_16__.useToRef)(name);
  if (!hasForm && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(name)) {
    formContainer.newForm(name);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (!immutableHasForm && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(defaultValues)) {
      var _formContainer$getFor;
      (_formContainer$getFor = formContainer.getForm(nameRef.current)) === null || _formContainer$getFor === void 0 ? void 0 : _formContainer$getFor.setDefaultValues(defaultValues);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (!immutableHasForm && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(values)) {
      var _formContainer$getFor2;
      (_formContainer$getFor2 = formContainer.getForm(nameRef.current)) === null || _formContainer$getFor2 === void 0 ? void 0 : _formContainer$getFor2.setValues(values);
    }
  }, [nameRef, values]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    return function () {
      return formContainer.releaseForm(name);
    };
  }, [name]);
  return (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(function () {
    return formContainer.getForm(name);
  }, [name]);
}

/***/ }),

/***/ "./node_modules/@taroify/core/grid/grid-item.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/grid/grid-item.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridItem */
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../badge */ "./node_modules/@taroify/core/badge/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _styles_hairline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/hairline */ "./node_modules/@taroify/core/styles/hairline.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _grid_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.context */ "./node_modules/@taroify/core/grid/grid.context.js");


var _excluded = ["__dataIndex__", "className", "style", "icon", "text", "dot", "badge", "children"];
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









function useGridItemPercent(columns) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return "".concat(100 / columns, "%");
  }, [columns]);
}
function GridItem(props) {
  var _props$__dataIndex__ = props.__dataIndex__,
    __dataIndex__ = _props$__dataIndex__ === void 0 ? 0 : _props$__dataIndex__,
    className = props.className,
    styleProp = props.style,
    icon = props.icon,
    text = props.text,
    dot = props.dot,
    badge = props.badge,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_grid_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    columns = _useContext.columns,
    gutter = _useContext.gutter,
    bordered = _useContext.bordered,
    centered = _useContext.centered,
    clickable = _useContext.clickable,
    direction = _useContext.direction,
    square = _useContext.square;
  var IconBadgeWrapper = (0,_badge__WEBPACK_IMPORTED_MODULE_3__.useBadgeWrapper)(icon);
  var Badge = (0,_badge__WEBPACK_IMPORTED_MODULE_3__.useBadge)(badge, {
    dot: dot
  });
  var percent = useGridItemPercent(columns);
  var rootStyle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var style = _objectSpread({}, styleProp);
    style.flexBasis = "".concat(percent);
    if (square) {
      style.paddingTop = percent;
    } else if (gutter) {
      var gutterValue = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_5__.addUnitPx)(gutter);
      style.paddingRight = gutterValue;
      if (__dataIndex__ >= columns) {
        style.marginTop = gutterValue;
      }
    }
    return style;
  }, [styleProp, percent, square, gutter, __dataIndex__, columns]);
  var contentStyle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (square && gutter) {
      var gutterValue = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_5__.addUnitPx)(gutter);
      return {
        right: gutterValue,
        bottom: gutterValue,
        height: "auto"
      };
    }
  }, [square, gutter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item--square"), square), className),
    style: rootStyle
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    style: contentStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content--square"), square), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content--centered"), centered), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content--clickable"), clickable), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content--horizontal"), direction === "horizontal"), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__content--surround"), bordered && gutter), _styles_hairline__WEBPACK_IMPORTED_MODULE_4__.HAIRLINE_BORDER, bordered))
  }, !children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconBadgeWrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__icon"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Badge, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("grid-item__text")
  }, text)), children));
}
/* harmony default export */ __webpack_exports__["default"] = (GridItem);

/***/ }),

/***/ "./node_modules/@taroify/core/grid/grid.context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/grid/grid.context.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var GridContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  bordered: false,
  columns: 0,
  centered: false,
  clickable: false
});
/* harmony default export */ __webpack_exports__["default"] = (GridContext);

/***/ }),

/***/ "./node_modules/@taroify/core/grid/grid.js":
/*!*************************************************!*\
  !*** ./node_modules/@taroify/core/grid/grid.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _styles_hairline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/hairline */ "./node_modules/@taroify/core/styles/hairline.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _grid_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid.context */ "./node_modules/@taroify/core/grid/grid.context.js");


var _excluded = ["className", "style", "columns", "gutter", "bordered", "centered", "clickable", "direction", "square", "children"];
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








var DEFAULT_GRID_COLUMNS = 4;
function Grid(props) {
  var className = props.className,
    styleProp = props.style,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? DEFAULT_GRID_COLUMNS : _props$columns,
    gutter = props.gutter,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    _props$centered = props.centered,
    centered = _props$centered === void 0 ? true : _props$centered,
    _props$clickable = props.clickable,
    clickable = _props$clickable === void 0 ? false : _props$clickable,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? "vertical" : _props$direction,
    square = props.square,
    childrenProp = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var children = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return react__WEBPACK_IMPORTED_MODULE_2__.Children.map(childrenProp, function (item, index) {
      return item ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(item, {
        __dataIndex__: index
      }) : null;
    });
  }, [childrenProp]);
  var rootStyle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var style = _objectSpread({}, styleProp);
    if (gutter) {
      style.paddingLeft = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_4__.addUnitPx)(gutter);
    }
    return style;
  }, [gutter, styleProp]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    style: rootStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("grid"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, _styles_hairline__WEBPACK_IMPORTED_MODULE_3__.HAIRLINE_BORDER_TOP, bordered && gutter === undefined), className)
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_grid_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      bordered: bordered,
      centered: centered,
      columns: columns,
      clickable: clickable,
      direction: direction,
      gutter: gutter,
      square: square
    }
  }, children));
}
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./node_modules/@taroify/core/grid/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@taroify/core/grid/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./node_modules/@taroify/core/grid/grid.js");
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-item */ "./node_modules/@taroify/core/grid/grid-item.js");


var Grid = _grid__WEBPACK_IMPORTED_MODULE_0__["default"];
Grid.Item = _grid_item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./node_modules/@taroify/core/input/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/input/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./node_modules/@taroify/core/input/input.js");


/***/ }),

/***/ "./node_modules/@taroify/core/input/input.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/input/input.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resolveOnChange */
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _taroify_icons_Clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Clear */ "./node_modules/@taroify/icons/Clear.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _native_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./native-input */ "./node_modules/@taroify/core/input/native-input.js");







var _excluded = ["className", "placeholderClass", "placeholderClassName", "value", "readonly", "disabled", "align", "color", "clearable", "clearTrigger", "clearIcon", "onInput", "onChange", "onFocus", "onBlur", "onClear"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}








function resolveOnChange(e, onChange, detailValue) {
  if (!onChange) {
    return;
  }
  if (e.type === "click" || e.type === "tap") {
    var detail = e.detail;
    var event = Object.assign({}, e, {
      detail: _objectSpread(_objectSpread({}, lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(detail) ? detail : {}), {}, {
        value: ""
      })
    });
    onChange(event);
    return;
  }
  if (detailValue !== undefined) {
    var _detail = e.detail;
    var _event = Object.assign({}, e, {
      detail: _objectSpread(_objectSpread({}, lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(_detail) ? _detail : {}), {}, {
        value: detailValue
      })
    });
    onChange(_event);
    return;
  }
  onChange(e);
}
function Input(props) {
  var className = props.className,
    placeholderClass = props.placeholderClass,
    placeholderClassName = props.placeholderClassName,
    valueProp = props.value,
    readonly = props.readonly,
    disabled = props.disabled,
    align = props.align,
    color = props.color,
    clearable = props.clearable,
    _props$clearTrigger = props.clearTrigger,
    clearTrigger = _props$clearTrigger === void 0 ? "focus" : _props$clearTrigger,
    _props$clearIcon = props.clearIcon,
    clearIcon = _props$clearIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_taroify_icons_Clear__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$clearIcon,
    onInput = props.onInput,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onClear = props.onClear,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_4__.useUncontrolled)({
      value: valueProp
    }),
    value = _useUncontrolled.value,
    setValue = _useUncontrolled.setValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var allowClear = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    if (clearable && !disabled) {
      var hasValue = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(value);
      var trigger = clearTrigger === "always" || clearTrigger === "focus" && focused;
      return hasValue && trigger;
    }
    return false;
  }, [clearTrigger, clearable, disabled, focused, value]);
  var handleClear = function handleClear(event) {
    (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_8__.preventDefault)(event, true);
    resolveOnChange(event, onChange, "");
    resolveOnChange(event, onInput, "");
    onClear === null || onClear === void 0 ? void 0 : onClear(event);
    setValue("");
  };
  var handleFocus = function handleFocus(event) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  };
  var handleInput = function handleInput(event) {
    onInput === null || onInput === void 0 ? void 0 : onInput(event);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
    setValue(event.detail.value);
  };
  var handleBlur = function handleBlur(event) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    setTimeout(function () {
      return setFocused(false);
    }, 80);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_native_input__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--readonly"), readonly), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--right"), align === "right"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--center"), align === "center"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--left"), align === "left"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--primary"), color === "primary"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--info"), color === "info"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input--success"), color === "success"), className),
    placeholderClass: classnames__WEBPACK_IMPORTED_MODULE_6___default()(placeholderClass, placeholderClassName, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input__placeholder"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input__placeholder--primary"), color === "primary"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input__placeholder--info"), color === "info"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input__placeholder--success"), color === "success")),
    disabled: disabled,
    readonly: readonly,
    color: color,
    value: value,
    onFocus: handleFocus,
    onInput: handleInput,
    onBlur: handleBlur
  }, restProps)), allowClear && (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_5__.cloneIconElement)(clearIcon, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("input__clear"),
    onClick: handleClear
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/@taroify/core/input/native-input.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/input/native-input.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");


var _excluded = ["nativeProps", "readonly", "color"],
  _excluded2 = ["className"];
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




function NativeInput(props) {
  var _props$nativeProps = props.nativeProps,
    nativeProps = _props$nativeProps === void 0 ? {} : _props$nativeProps,
    readonly = props.readonly,
    color = props.color,
    restProps = _objectWithoutProperties(props, _excluded);
  var nativeClassname = nativeProps.className,
    restNativeProps = _objectWithoutProperties(nativeProps, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({
    nativeProps: _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("native-input"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("native-input--readonly"), readonly), (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("native-input--colorful"), color || readonly), nativeClassname),
      readonly: readonly
    }, restNativeProps)
  }, restProps));
}
/* harmony default export */ __webpack_exports__["default"] = (NativeInput);

/***/ }),

/***/ "./node_modules/@taroify/core/radio/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/radio/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ "./node_modules/@taroify/core/radio/radio.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-group */ "./node_modules/@taroify/core/radio/radio-group.js");


var Radio = _radio__WEBPACK_IMPORTED_MODULE_0__["default"];
Radio.Group = _radio_group__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/@taroify/core/radio/radio-group.context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@taroify/core/radio/radio-group.context.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RadioGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupContext);

/***/ }),

/***/ "./node_modules/@taroify/core/radio/radio-group.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/radio/radio-group.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _radio_group_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-group.context */ "./node_modules/@taroify/core/radio/radio-group.context.js");

var _excluded = ["className", "defaultValue", "value", "disabled", "direction", "size", "children", "onChange"];
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






function RadioGroup(props) {
  var className = props.className,
    defaultValue = props.defaultValue,
    valueProp = props.value,
    disabled = props.disabled,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? "vertical" : _props$direction,
    size = props.size,
    children = props.children,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useUncontrolled)({
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChangeProp
    }),
    value = _useUncontrolled.value,
    setValue = _useUncontrolled.setValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_radio_group_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      value: value,
      disabled: disabled,
      direction: direction,
      size: size,
      onChange: setValue
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("radio-group"), (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("radio-group--".concat(direction)), className),
    children: children
  }, restProps)));
}
/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./node_modules/@taroify/core/radio/radio.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/radio/radio.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Radio; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_Success__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Success */ "./node_modules/@taroify/icons/Success.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _radio_group_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-group.context */ "./node_modules/@taroify/core/radio/radio-group.context.js");




var _excluded = ["className", "name", "disabled", "shape", "icon", "size", "children", "onClick"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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







function Radio(props) {
  var className = props.className,
    name = props.name,
    disabledProp = props.disabled,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? "round" : _props$shape,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_taroify_icons_Success__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$icon,
    sizeProp = props.size,
    children = props.children,
    onClick = props.onClick,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_radio_group_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
    value = _useContext.value,
    direction = _useContext.direction,
    disabledGroup = _useContext.disabled,
    sizeGroup = _useContext.size,
    onChange = _useContext.onChange;
  var size = sizeProp !== null && sizeProp !== void 0 ? sizeProp : sizeGroup;
  var disabled = disabledProp || disabledGroup;
  var checked = name === value;
  function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (!disabled && name !== value) {
      onChange === null || onChange === void 0 ? void 0 : onChange(name);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio--horizontal"), direction === "horizontal"), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio--vertical"), direction === "vertical"), className),
    onClick: handleClick
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__icon"), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__icon--".concat(shape)), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__icon--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__icon--checked"), checked)),
    style: {
      fontSize: size ? (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_4__.addUnitPx)(size) : ""
    },
    children: icon
  }), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__label"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("radio__label--disabled"), disabled)),
    children: children
  }));
}

/***/ }),

/***/ "./node_modules/@taroify/core/rate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@taroify/core/rate/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _rate__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate */ "./node_modules/@taroify/core/rate/rate.js");


/***/ }),

/***/ "./node_modules/@taroify/core/rate/rate-item.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/rate/rate-item.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _rate_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate.context */ "./node_modules/@taroify/core/rate/rate.context.js");
/* harmony import */ var _rate_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate.shared */ "./node_modules/@taroify/core/rate/rate.shared.js");


var _excluded = ["className", "style", "score", "value", "half", "disabled", "size", "status"];
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









function RateItem(props) {
  var className = props.className,
    style = props.style,
    score = props.score,
    value = props.value,
    half = props.half,
    disabled = props.disabled,
    size = props.size,
    status = props.status,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_rate_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
    gutter = _useContext.gutter,
    count = _useContext.count,
    emptyIcon = _useContext.emptyIcon,
    icon = _useContext.icon;
  var empty = status === _rate_shared__WEBPACK_IMPORTED_MODULE_6__.RateStatus.Void;
  var full = status === _rate_shared__WEBPACK_IMPORTED_MODULE_6__.RateStatus.Full;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__item"), className),
    style: _objectSpread({
      paddingRight: score !== count ? (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_4__.addUnitPx)(gutter) : ""
    }, style)
  }, restProps), (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__.cloneIconElement)(full ? icon : emptyIcon, {
    size: size,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon--full"), full))
  }), half && (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__.cloneIconElement)(icon, {
    style: {
      width: value + "em"
    },
    size: size,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon"), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon--half"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("rate__icon--full"), !empty))
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (RateItem);

/***/ }),

/***/ "./node_modules/@taroify/core/rate/rate.context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/rate/rate.context.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (RateContext);

/***/ }),

/***/ "./node_modules/@taroify/core/rate/rate.js":
/*!*************************************************!*\
  !*** ./node_modules/@taroify/core/rate/rate.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_StarOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/StarOutlined */ "./node_modules/@taroify/icons/StarOutlined.js");
/* harmony import */ var _taroify_icons_Star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/icons/Star */ "./node_modules/@taroify/icons/Star.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_dom_rect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dom/rect */ "./node_modules/@taroify/core/utils/dom/rect.js");
/* harmony import */ var _utils_touch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/touch */ "./node_modules/@taroify/core/utils/touch.js");
/* harmony import */ var _rate_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rate-item */ "./node_modules/@taroify/core/rate/rate-item.js");
/* harmony import */ var _rate_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rate.context */ "./node_modules/@taroify/core/rate/rate.context.js");
/* harmony import */ var _rate_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rate.shared */ "./node_modules/@taroify/core/rate/rate.shared.js");






var _excluded = ["className", "defaultValue", "value", "count", "size", "gutter", "allowHalf", "readonly", "disabled", "touchable", "icon", "emptyIcon", "onClick", "onTouchStart", "onTouchMove", "onChange"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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












function getRateStatus(value, index, allowHalf, readonly) {
  if (value >= index) {
    return {
      status: _rate_shared__WEBPACK_IMPORTED_MODULE_11__.RateStatus.Full,
      value: 1
    };
  }
  if (value + 0.5 >= index && allowHalf && !readonly) {
    return {
      status: _rate_shared__WEBPACK_IMPORTED_MODULE_11__.RateStatus.Half,
      value: 0.5
    };
  }
  if (value + 1 >= index && allowHalf && readonly) {
    var cardinal = Math.pow(10, 10);
    return {
      status: _rate_shared__WEBPACK_IMPORTED_MODULE_11__.RateStatus.Half,
      value: Math.round((value - index + 1) * cardinal) / cardinal
    };
  }
  return {
    status: _rate_shared__WEBPACK_IMPORTED_MODULE_11__.RateStatus.Void,
    value: 0
  };
}
function Rate(props) {
  var className = props.className,
    defaultValue = props.defaultValue,
    valueProp = props.value,
    _props$count = props.count,
    count = _props$count === void 0 ? 5 : _props$count,
    size = props.size,
    gutter = props.gutter,
    _props$allowHalf = props.allowHalf,
    allowHalf = _props$allowHalf === void 0 ? false : _props$allowHalf,
    _props$readonly = props.readonly,
    readonly = _props$readonly === void 0 ? false : _props$readonly,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$touchable = props.touchable,
    touchable = _props$touchable === void 0 ? true : _props$touchable,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_taroify_icons_Star__WEBPACK_IMPORTED_MODULE_1__["default"], null) : _props$icon,
    _props$emptyIcon = props.emptyIcon,
    emptyIcon = _props$emptyIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_taroify_icons_StarOutlined__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$emptyIcon,
    onClick = props.onClick,
    _onTouchStart = props.onTouchStart,
    _onTouchMove = props.onTouchMove,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)({
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChangeProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    value = _useUncontrolled$valu === void 0 ? 0 : _useUncontrolled$valu,
    setValue = _useUncontrolled.setValue;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var untouchable = readonly || disabled || !touchable;
  var touch = (0,_utils_touch__WEBPACK_IMPORTED_MODULE_8__.useTouch)();
  var getRanges = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function () {
    return (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_7__.getRects)(rootRef, " .".concat((0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("rate__item"))).then(function (rects) {
      return rects.flatMap(function (rect, index) {
        return allowHalf ? [{
          score: index + 0.5,
          left: rect.left
        }, {
          score: index + 1,
          left: rect.left + rect.width / 2
        }] : [{
          score: index + 1,
          left: rect.left
        }];
      });
    });
  }, [allowHalf]);
  var getScoreByPosition = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (x) {
    return getRanges().then(function (ranges) {
      for (var i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }
      return allowHalf ? 0.5 : 1;
    });
  }, [allowHalf, getRanges]);
  var onItemClick = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (untouchable) {
      return;
    }
    var _getClientCoordinates = (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_6__.getClientCoordinates)(event),
      clientX = _getClientCoordinates.clientX;
    getScoreByPosition(clientX).then(function (newValue) {
      setValue(newValue);
    });
  }, [onClick, untouchable, getScoreByPosition, setValue]);
  var handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (event) {
    if (untouchable) {
      return;
    }
    touch.start(event);
  }, [touch, untouchable]);
  var handleTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (event) {
    if (untouchable) {
      return;
    }
    touch.move(event);
    if (touch.isHorizontal()) {
      (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_6__.preventDefault)(event);
      onItemClick(event);
    }
  }, [untouchable, touch, onItemClick]);
  var renderStar = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (item, index) {
    var renderHalf = allowHalf && item.value > 0 && item.value < 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_rate_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      score: index + 1,
      disabled: disabled,
      size: size,
      half: renderHalf,
      value: item.value,
      status: item.status
    });
  }, [allowHalf, disabled, size]);
  var stars = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return Array(count).fill("").map(function (__, i) {
      return getRateStatus(value, i + 1, allowHalf, readonly);
    }).map(renderStar);
  }, [allowHalf, count, readonly, renderStar, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, _objectSpread({
    ref: rootRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("rate"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("rate--disabled"), disabled), (0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("rate--readonly"), readonly), className),
    catchMove: true,
    onClick: onItemClick,
    onTouchStart: function onTouchStart(event) {
      handleTouchStart(event);
      _onTouchStart === null || _onTouchStart === void 0 ? void 0 : _onTouchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      handleTouchMove(event);
      _onTouchMove === null || _onTouchMove === void 0 ? void 0 : _onTouchMove(event);
    }
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_rate_context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: {
      gutter: gutter,
      count: count,
      icon: icon,
      emptyIcon: emptyIcon
    },
    children: stars
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "./node_modules/@taroify/core/rate/rate.shared.js":
/*!********************************************************!*\
  !*** ./node_modules/@taroify/core/rate/rate.shared.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateStatus": function() { return /* binding */ RateStatus; }
/* harmony export */ });
var RateStatus;
(function (RateStatus) {
  RateStatus["Full"] = "full";
  RateStatus["Half"] = "half";
  RateStatus["Void"] = "void";
})(RateStatus || (RateStatus = {}));

/***/ }),

/***/ "./node_modules/@taroify/core/search/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/core/search/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./node_modules/@taroify/core/search/search.js");


/***/ }),

/***/ "./node_modules/@taroify/core/search/search.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/search/search.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Search */ "./node_modules/@taroify/icons/Search.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isBoolean */ "./node_modules/lodash/isBoolean.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../field */ "./node_modules/@taroify/core/field/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input */ "./node_modules/@taroify/core/input/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/@taroify/core/utils/logger.js");





var _excluded = ["className", "value", "icon", "rightIcon", "label", "shape", "maxlength", "autoFocus", "focus", "disabled", "readonly", "placeholder", "placeholderClassName", "clearable", "clearIcon", "clearTrigger", "inputAlign", "inputColor", "feedback", "action", "onClear", "onCancel", "onSearch", "onChange", "onFocus", "onBlur"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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








var _getLogger = (0,_utils_logger__WEBPACK_IMPORTED_MODULE_8__.getLogger)("Search"),
  deprecated = _getLogger.deprecated;
function Search(props) {
  var className = props.className,
    value = props.value,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_taroify_icons_Search__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$icon,
    rightIcon = props.rightIcon,
    label = props.label,
    shape = props.shape,
    maxlength = props.maxlength,
    autoFocus = props.autoFocus,
    focus = props.focus,
    disabled = props.disabled,
    readonly = props.readonly,
    placeholder = props.placeholder,
    placeholderClassName = props.placeholderClassName,
    _props$clearable = props.clearable,
    clearable = _props$clearable === void 0 ? true : _props$clearable,
    clearIcon = props.clearIcon,
    clearTrigger = props.clearTrigger,
    inputAlign = props.inputAlign,
    inputColor = props.inputColor,
    feedback = props.feedback,
    action = props.action,
    onClear = props.onClear,
    onCancel = props.onCancel,
    onSearch = props.onSearch,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    restProps = _objectWithoutProperties(props, _excluded);
  if (shape === "round") {
    deprecated('Use the shape="rounded" prop instead of the shape="round" prop');
  }
  function handleSearch(event) {
    (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_7__.preventDefault)(event);
    onSearch === null || onSearch === void 0 ? void 0 : onSearch(event);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search--action"), action), className)
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__content"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__content--square"), shape === "square"), (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__content--rounded"), shape === "rounded" || shape === "round"))
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__label"),
    children: label
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__field"),
    icon: icon,
    rightIcon: rightIcon,
    feedback: feedback
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__input"),
    placeholderClassName: placeholderClassName,
    value: value,
    maxlength: maxlength,
    placeholder: placeholder,
    clearable: clearable,
    clearIcon: clearIcon,
    clearTrigger: clearTrigger,
    align: inputAlign,
    color: inputColor,
    autoFocus: autoFocus,
    focus: focus,
    disabled: disabled,
    readonly: readonly,
    confirmType: "search",
    onConfirm: handleSearch,
    onClear: onClear,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }))), action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_10__.prefixClassname)("search__action"),
    children: lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1___default()(action) ? "取消" : action,
    onClick: lodash_isBoolean__WEBPACK_IMPORTED_MODULE_1___default()(action) ? onCancel : undefined
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./node_modules/@taroify/core/slider/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/core/slider/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./node_modules/@taroify/core/slider/slider.js");
/* harmony import */ var _slider_thumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-thumb */ "./node_modules/@taroify/core/slider/slider-thumb.js");


var Slider = _slider__WEBPACK_IMPORTED_MODULE_0__["default"];
Slider.Thumb = _slider_thumb__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./node_modules/@taroify/core/slider/slider-thumb.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/slider/slider-thumb.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _slider_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider.context */ "./node_modules/@taroify/core/slider/slider.context.js");


var _excluded = ["className", "size", "index", "children"];
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








function SliderThumb(props) {
  var className = props.className,
    size = props.size,
    index = props.index,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_slider_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
    _onTouchStart = _useContext.onTouchStart,
    _onTouchMove = _useContext.onTouchMove,
    _onTouchEnd = _useContext.onTouchEnd;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("slider__thumb-wrapper"), index === undefined), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("slider__thumb-wrapper-left"), index === 0), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("slider__thumb-wrapper-right"), index === 1)),
    style: _objectSpread({}, (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_4__.getSizeStyle)(size)),
    catchMove: true,
    onTouchStart: function onTouchStart(event) {
      return _onTouchStart === null || _onTouchStart === void 0 ? void 0 : _onTouchStart(event, index);
    },
    onTouchMove: function onTouchMove(event) {
      return _onTouchMove === null || _onTouchMove === void 0 ? void 0 : _onTouchMove(event, index);
    },
    onTouchEnd: function onTouchEnd(event) {
      return _onTouchEnd === null || _onTouchEnd === void 0 ? void 0 : _onTouchEnd(event, index);
    },
    onTouchCancel: function onTouchCancel(event) {
      return _onTouchEnd === null || _onTouchEnd === void 0 ? void 0 : _onTouchEnd(event, index);
    },
    onClick: _utils_dom_event__WEBPACK_IMPORTED_MODULE_3__.stopPropagation
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("slider__thumb"), className)
  }, restProps)));
}
/* harmony default export */ __webpack_exports__["default"] = (SliderThumb);

/***/ }),

/***/ "./node_modules/@taroify/core/slider/slider.context.js":
/*!*************************************************************!*\
  !*** ./node_modules/@taroify/core/slider/slider.context.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SliderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (SliderContext);

/***/ }),

/***/ "./node_modules/@taroify/core/slider/slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/slider/slider.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clamp */ "./node_modules/lodash/clamp.js");
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_dom_rect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dom/rect */ "./node_modules/@taroify/core/utils/dom/rect.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/@taroify/core/utils/format/number.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _utils_touch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/touch */ "./node_modules/@taroify/core/utils/touch.js");
/* harmony import */ var _slider_thumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider-thumb */ "./node_modules/@taroify/core/slider/slider-thumb.js");
/* harmony import */ var _slider_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider.context */ "./node_modules/@taroify/core/slider/slider.context.js");




var _excluded = ["className", "style", "defaultValue", "value", "min", "max", "step", "range", "size", "orientation", "disabled", "children", "onClick", "onChange"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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













var SliderDragStatus;
(function (SliderDragStatus) {
  SliderDragStatus["Start"] = "start";
  SliderDragStatus["Dragging"] = "dragging";
  SliderDragStatus["End"] = "end";
})(SliderDragStatus || (SliderDragStatus = {}));
function useSliderChildren(children, range) {
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    var _children__$thumb;
    var __children__ = {
      thumb1: undefined,
      thumb2: undefined
    };
    react__WEBPACK_IMPORTED_MODULE_4__.Children.forEach(children, function (child) {
      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.isValidElement)(child)) {
        return;
      }
      var element = child;
      if (__children__.thumb1 === undefined) {
        __children__.thumb1 = element;
      } else if (__children__.thumb2 === undefined) {
        __children__.thumb2 = element;
      }
    });
    __children__.thumb1 = (_children__$thumb = __children__.thumb1) !== null && _children__$thumb !== void 0 ? _children__$thumb : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_slider_thumb__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    if (range) {
      var _children__$thumb2;
      __children__.thumb1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(__children__.thumb1, {
        key: 0,
        index: 0
      });
      __children__.thumb2 = (_children__$thumb2 = __children__.thumb2) !== null && _children__$thumb2 !== void 0 ? _children__$thumb2 : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_slider_thumb__WEBPACK_IMPORTED_MODULE_10__["default"], null);
      __children__.thumb2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(__children__.thumb2, {
        key: 1,
        index: 1
      });
    } else {
      __children__.thumb1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(__children__.thumb1, {
        index: undefined
      });
    }
    return __children__;
  }, [children, range]);
}
function Slider(props) {
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    defaultValue = props.defaultValue,
    _props$value = props.value,
    valueProp = _props$value === void 0 ? undefined : _props$value,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    _props$range = props.range,
    range = _props$range === void 0 ? false : _props$range,
    size = props.size,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    children = props.children,
    onClick = props.onClick,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_2__.useUncontrolled)({
      defaultValue: defaultValue,
      value: valueProp,
      onChange: onChangeProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    value = _useUncontrolled$valu === void 0 ? 0 : _useUncontrolled$valu,
    setValue = _useUncontrolled.setValue;
  var _useSliderChildren = useSliderChildren(children, range),
    thumb1 = _useSliderChildren.thumb1,
    thumb2 = _useSliderChildren.thumb2;
  var vertical = orientation === "vertical";
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var dragStatusRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var startValueRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  var currentValueRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  var buttonIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var touch = (0,_utils_touch__WEBPACK_IMPORTED_MODULE_9__.useTouch)();
  var scope = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return Number(max) - Number(min);
  }, [max, min]);
  var isRange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (val) {
    return range && Array.isArray(val);
  }, [range]);
  var calcMainAxis = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    if (isRange(value)) {
      return "".concat((value[1] - value[0]) * 100 / scope, "%");
    }
    return "".concat((value - Number(min)) * 100 / scope, "%");
  }, [isRange, min, scope, value]);
  var calcOffset = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    if (isRange(value)) {
      return "".concat((value[0] - Number(min)) * 100 / scope, "%");
    }
    return "0%";
  }, [isRange, min, scope, value]);
  var wrapperStyle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    var _addUnitPx;
    var crossAxis = vertical ? "width" : "height";
    return _objectSpread(_objectSpread({}, style), {}, (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, crossAxis, (_addUnitPx = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_8__.addUnitPx)(size)) !== null && _addUnitPx !== void 0 ? _addUnitPx : ""));
  }, [size, style, vertical]);
  var trackStyle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    var mainAxis = vertical ? "height" : "width";
    return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, mainAxis, calcMainAxis()), "left", vertical ? "" : calcOffset()), "top", vertical ? calcOffset() : ""), "transition", dragStatusRef.current ? "none" : "");
  }, [calcMainAxis, calcOffset, vertical]);
  var formatValue = function formatValue(value) {
    value = lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(value, min, max);
    var diff = Math.round((value - min) / step) * step;
    return (0,_utils_format_number__WEBPACK_IMPORTED_MODULE_7__.addNumber)(min, diff);
  };
  var isSameValue = function isSameValue(newValue, oldValue) {
    return JSON.stringify(newValue) === JSON.stringify(oldValue);
  };
  var handleOverlap = function handleOverlap(value) {
    if (value[0] > value[1]) {
      return value.slice(0).reverse();
    }
    return value;
  };
  var updateValue = function updateValue(newValue) {
    if (isRange(newValue)) {
      newValue = handleOverlap(newValue).map(formatValue);
    } else {
      newValue = formatValue(newValue);
    }
    if (!isSameValue(newValue, value)) {
      setValue(newValue);
    }
  };
  var handleClick = function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__.stopPropagation)(event);
    if (disabled) {
      return;
    }
    (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_6__.getRect)(rootRef).then(function (rect) {
      var _getClientCoordinates = (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__.getClientCoordinates)(event),
        clientX = _getClientCoordinates.clientX,
        clientY = _getClientCoordinates.clientY;
      var delta = vertical ? clientY - rect.top : clientX - rect.left;
      var total = vertical ? rect.height : rect.width;
      var newValue = Number(min) + delta / total * scope;
      if (isRange(value)) {
        var _value = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(value, 2),
          left = _value[0],
          right = _value[1];
        var middle = (left + right) / 2;
        if (newValue <= middle) {
          updateValue([newValue, right]);
        } else {
          updateValue([left, newValue]);
        }
      } else {
        updateValue(newValue);
      }
    });
  };
  var onTouchStart = function onTouchStart(event, index) {
    if (typeof index === "number") {
      buttonIndexRef.current = index;
    }
    if (disabled) {
      return;
    }
    touch.start(event);
    currentValueRef.current = value;
    if (isRange(currentValueRef.current)) {
      startValueRef.current = currentValueRef.current.map(formatValue);
    } else {
      startValueRef.current = formatValue(currentValueRef.current);
    }
    dragStatusRef.current = SliderDragStatus.Start;
  };
  var onTouchMove = function onTouchMove(event) {
    if (disabled) {
      return;
    }
    (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__.preventDefault)(event, true);
    touch.move(event);
    dragStatusRef.current = SliderDragStatus.Dragging;
    (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_6__.getRect)(rootRef).then(function (rect) {
      var delta = vertical ? touch.deltaY : touch.deltaX;
      var total = vertical ? rect.height : rect.width;
      var diff = delta / total * scope;
      if (isRange(startValueRef.current)) {
        ;
        currentValueRef.current[buttonIndexRef.current] = startValueRef.current[buttonIndexRef.current] + diff;
      } else {
        currentValueRef.current = startValueRef.current + diff;
      }
      updateValue(currentValueRef.current);
    });
  };
  var onTouchEnd = function onTouchEnd() {
    if (disabled) {
      return;
    }
    if (dragStatusRef.current === SliderDragStatus.Dragging) {
      updateValue(currentValueRef.current);
    }
    dragStatusRef.current = SliderDragStatus.End;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, _objectSpread({
    ref: rootRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("slider"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("slider--vertical"), vertical), (0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("slider--disabled"), disabled)), className),
    style: wrapperStyle,
    onClick: handleClick
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_slider_context__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: {
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("slider__track"),
    style: trackStyle
  }, range ? [thumb1, thumb2] : thumb1)));
}
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./node_modules/@taroify/core/stepper/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/stepper/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepper */ "./node_modules/@taroify/core/stepper/stepper.js");
/* harmony import */ var _stepper_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepper-button */ "./node_modules/@taroify/core/stepper/stepper-button.js");
/* harmony import */ var _stepper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper-input */ "./node_modules/@taroify/core/stepper/stepper-input.js");



var Stepper = _stepper__WEBPACK_IMPORTED_MODULE_0__["default"];
Stepper.Input = _stepper_input__WEBPACK_IMPORTED_MODULE_2__["default"];
Stepper.Button = _stepper_button__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Stepper);

/***/ }),

/***/ "./node_modules/@taroify/core/stepper/stepper-button.js":
/*!**************************************************************!*\
  !*** ./node_modules/@taroify/core/stepper/stepper-button.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _stepper_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper.context */ "./node_modules/@taroify/core/stepper/stepper.context.js");


var _excluded = ["className", "style", "type", "disabled", "onClick", "onTouchStart", "onTouchEnd", "onTouchCancel"];
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








var LONG_PRESS_INTERVAL = 200;
var LONG_PRESS_START_TIME = 600;
function StepperButton(props) {
  var className = props.className,
    style = props.style,
    _props$type = props.type,
    type = _props$type === void 0 ? "decrease" : _props$type,
    disabledProp = props.disabled,
    _onClick = props.onClick,
    _onTouchStart = props.onTouchStart,
    _onTouchEnd = props.onTouchEnd,
    _onTouchCancel = props.onTouchCancel,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_stepper_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
    _useContext$value = _useContext.value,
    value = _useContext$value === void 0 ? 0 : _useContext$value,
    _useContext$min = _useContext.min,
    min = _useContext$min === void 0 ? 0 : _useContext$min,
    _useContext$max = _useContext.max,
    max = _useContext$max === void 0 ? 0 : _useContext$max,
    size = _useContext.size,
    disabledCtx = _useContext.disabled,
    longPress = _useContext.longPress,
    onStep = _useContext.onStep;
  var disabled = disabledProp || disabledCtx || type === "decrease" && Number(value) <= min || type === "increase" && Number(value) >= max;
  var longPressRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  var longPressTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var longPressStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    longPressTimerRef.current = setTimeout(function () {
      onStep === null || onStep === void 0 ? void 0 : onStep(type);
      longPressStep();
    }, LONG_PRESS_INTERVAL);
  }, [onStep, type]);
  var handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    if (longPress) {
      longPressRef.current = false;
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
      }
      longPressTimerRef.current = setTimeout(function () {
        longPressRef.current = true;
        onStep === null || onStep === void 0 ? void 0 : onStep(type);
        longPressStep();
      }, LONG_PRESS_START_TIME);
    }
  }, [longPress, longPressStep, onStep, type]);
  var handleTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    if (longPress) {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
      }
      if (longPressRef.current) {
        (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__.preventDefault)(event);
      }
    }
  }, [longPress]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("stepper__".concat(type)), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("stepper__".concat(type, "--disabled")), disabled), className),
    style: (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_4__.getSizeStyle)(size),
    onClick: function onClick(event) {
      (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__.preventDefault)(event);
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(event);
      if (!disabled) {
        onStep === null || onStep === void 0 ? void 0 : onStep(type);
      }
    },
    onTouchStart: function onTouchStart(event) {
      _onTouchStart === null || _onTouchStart === void 0 ? void 0 : _onTouchStart(event);
      if (!disabled) {
        handleTouchStart();
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      _onTouchEnd === null || _onTouchEnd === void 0 ? void 0 : _onTouchEnd(event);
      handleTouchEnd(event);
    },
    onTouchCancel: function onTouchCancel(event) {
      _onTouchCancel === null || _onTouchCancel === void 0 ? void 0 : _onTouchCancel(event);
      handleTouchEnd(event);
    }
  }, restProps));
}
/* harmony default export */ __webpack_exports__["default"] = (StepperButton);

/***/ }),

/***/ "./node_modules/@taroify/core/stepper/stepper-input.js":
/*!*************************************************************!*\
  !*** ./node_modules/@taroify/core/stepper/stepper-input.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/@taroify/core/utils/dom/event.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/@taroify/core/utils/format/number.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _stepper_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper.context */ "./node_modules/@taroify/core/stepper/stepper.context.js");









function StepperInput(props) {
  var width = props.width,
    disabledProp = props.disabled,
    cursor = props.cursor,
    onFocus = props.onFocus;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_stepper_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
    valueProp = _useContext.value,
    size = _useContext.size,
    disabled = _useContext.disabled,
    _useContext$precision = _useContext.precision,
    precision = _useContext$precision === void 0 ? 0 : _useContext$precision,
    formatValue = _useContext.formatValue,
    onChange = _useContext.onChange;
  var digit = precision > 0;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return setValue(valueProp);
  }, [valueProp]);
  var onTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabledProp) {
      (0,_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__.preventDefault)(event);
    }
  }, [disabledProp]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabledProp) {
      var _rootRef$current;
      (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.blur();
    } else {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }
  }, [disabledProp, onFocus]);
  var onInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {
    var detail = _ref.detail;
    var inputValue = detail.value;
    var formatted = (0,_utils_format_number__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(String(inputValue), digit);
    if (precision > 0 && formatted.includes(".")) {
      var pair = formatted.split(".");
      formatted = "".concat(pair[0], ".").concat(pair[1].slice(0, precision));
    }
    var isNumeric = formatted === String(+formatted);
    setValue(isNumeric ? +formatted : formatted);
  }, [digit, precision]);
  var onBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var detail = _ref2.detail;
    var inputValue = detail.value;
    var value = formatValue === null || formatValue === void 0 ? void 0 : formatValue(inputValue);
    setValue(value);
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [formatValue, onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Input, {
    ref: rootRef,
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("stepper__input"),
    style: {
      width: width ? (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_3__.addUnitPx)(width) : "",
      height: size ? (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_3__.addUnitPx)(size) : ""
    },
    disabled: disabledProp || disabled,
    type: digit ? "digit" : "number",
    cursor: cursor,
    value: value,
    onTouchEnd: onTouchEnd,
    onFocus: handleFocus,
    onInput: onInput,
    onBlur: onBlur
  });
}
/* harmony default export */ __webpack_exports__["default"] = (StepperInput);

/***/ }),

/***/ "./node_modules/@taroify/core/stepper/stepper.context.js":
/*!***************************************************************!*\
  !*** ./node_modules/@taroify/core/stepper/stepper.context.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StepperContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (StepperContext);

/***/ }),

/***/ "./node_modules/@taroify/core/stepper/stepper.js":
/*!*******************************************************!*\
  !*** ./node_modules/@taroify/core/stepper/stepper.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/@taroify/core/utils/format/number.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/logger */ "./node_modules/@taroify/core/utils/logger.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _stepper_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper-button */ "./node_modules/@taroify/core/stepper/stepper-button.js");
/* harmony import */ var _stepper_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepper-input */ "./node_modules/@taroify/core/stepper/stepper-input.js");
/* harmony import */ var _stepper_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stepper.context */ "./node_modules/@taroify/core/stepper/stepper.context.js");


var _excluded = ["className", "defaultValue", "value", "min", "max", "step", "size", "disabled", "precision", "longPress", "shape", "children", "onChange"];
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












var _getLogger = (0,_utils_logger__WEBPACK_IMPORTED_MODULE_5__.getLogger)("Stepper"),
  deprecated = _getLogger.deprecated;
function useStepperChildren(children) {
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var __children__ = {};
    react__WEBPACK_IMPORTED_MODULE_3__.Children.forEach(children, function (child) {
      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(child)) {
        return;
      }
      var element = child;
      var elementType = element.type;
      if (elementType === _stepper_button__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        if (__children__.decrease === undefined) {
          __children__.decrease = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
            type: "decrease"
          });
        } else if (__children__.increase === undefined) {
          __children__.increase = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
            type: "increase"
          });
        }
      } else if (elementType === _stepper_input__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        __children__.input = element;
      }
    });
    if (!children) {
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_stepper_button__WEBPACK_IMPORTED_MODULE_7__["default"], null);
      if (__children__.decrease === undefined) {
        __children__.decrease = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
          type: "decrease"
        });
      }
      if (__children__.input === undefined) {
        __children__.input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_stepper_input__WEBPACK_IMPORTED_MODULE_8__["default"], null);
      }
      if (__children__.increase === undefined) {
        __children__.increase = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(element, {
          type: "increase"
        });
      }
    }
    return __children__;
  }, [children]);
}
function Stepper(props) {
  var className = props.className,
    defaultValue = props.defaultValue,
    valueProp = props.value,
    _props$min = props.min,
    min = _props$min === void 0 ? 1 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? Number.MAX_VALUE : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    size = props.size,
    disabled = props.disabled,
    _props$precision = props.precision,
    precision = _props$precision === void 0 ? 0 : _props$precision,
    _props$longPress = props.longPress,
    longPress = _props$longPress === void 0 ? true : _props$longPress,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? "rounded" : _props$shape,
    childrenProp = props.children,
    onChangeProp = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  if (shape === "round") {
    deprecated('Use the shape="circular" prop instead of the shape="round" prop');
  }
  var _useStepperChildren = useStepperChildren(childrenProp),
    decrease = _useStepperChildren.decrease,
    input = _useStepperChildren.input,
    increase = _useStepperChildren.increase;
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useUncontrolled)({
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChangeProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    value = _useUncontrolled$valu === void 0 ? 0 : _useUncontrolled$valu,
    setValue = _useUncontrolled.setValue;
  var formatValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (value) {
    if (value === "") {
      return value;
    }
    value = (0,_utils_format_number__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(String(value), precision > 0);
    value = value === "" ? 0 : +value;
    value = Number.isNaN(value) ? +min : value;
    value = Math.max(Math.min(+max, value), +min);
    if (precision > 0) {
      value = value.toFixed(+precision);
    }
    return value;
  }, [max, min, precision]);
  var valueRef = (0,_utils_state__WEBPACK_IMPORTED_MODULE_6__.useToRef)(formatValue(value));
  var onStep = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (actionType) {
    var diff = actionType === "decrease" ? -step : +step;
    setValue(formatValue((0,_utils_format_number__WEBPACK_IMPORTED_MODULE_4__.addNumber)(valueRef.current, diff)));
  }, [formatValue, setValue, step, valueRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_stepper_context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: {
      value: valueRef.current,
      min: min,
      max: max,
      size: size,
      disabled: disabled,
      precision: precision,
      longPress: longPress,
      formatValue: formatValue,
      onChange: setValue,
      onStep: onStep
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("stepper"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("stepper--square"), shape === "square"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("stepper--rounded"), shape === "rounded"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("stepper--circular"), shape === "circular" || shape === "round"), className)
  }, restProps), decrease, input, increase));
}
/* harmony default export */ __webpack_exports__["default"] = (Stepper);

/***/ }),

/***/ "./node_modules/@taroify/core/sticky/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/core/sticky/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sticky */ "./node_modules/@taroify/core/sticky/sticky.js");

/* harmony default export */ __webpack_exports__["default"] = (_sticky__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@taroify/core/sticky/sticky.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/sticky/sticky.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sticky; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dom/rect */ "./node_modules/@taroify/core/utils/dom/rect.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");
/* harmony import */ var _utils_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/system */ "./node_modules/@taroify/core/utils/system.js");




var _excluded = ["className", "style", "position", "offsetTop", "offsetBottom", "offset", "container", "children", "onChange", "onScroll"];
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










function Sticky(props) {
  var className = props.className,
    styleProp = props.style,
    _props$position = props.position,
    position = _props$position === void 0 ? "top" : _props$position,
    offsetTopProp = props.offsetTop,
    offsetBottomProp = props.offsetBottom,
    offsetProp = props.offset,
    containerRef = props.container,
    children = props.children,
    onChange = props.onChange,
    onScroll = props.onScroll,
    restProps = _objectWithoutProperties(props, _excluded);
  if (offsetProp) {
    var top = offsetProp.top,
      bottom = offsetProp.bottom;
    if (top) {
      console.warn("[Deprecated] Use the 'offsetTop' prop instead of the 'offset.top' prop.");
    }
    if (bottom) {
      console.warn("[Deprecated] Use the 'offsetBottom' prop instead of the 'offset.bottom' prop.");
    }
  }
  var offsetTop = offsetTopProp !== null && offsetTopProp !== void 0 ? offsetTopProp : offsetProp === null || offsetProp === void 0 ? void 0 : offsetProp.top;
  var offsetBottom = offsetBottomProp !== null && offsetBottomProp !== void 0 ? offsetBottomProp : offsetProp === null || offsetProp === void 0 ? void 0 : offsetProp.bottom;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var counterRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    rootRect = _useState2[0],
    setRootRect = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    fixed = _useState4[0],
    setFixed = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState6 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    transform = _useState6[0],
    setTransform = _useState6[1];
  var offsetValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var _ref;
    return (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.unitToPx)((_ref = position === "top" ? offsetTop : offsetBottom) !== null && _ref !== void 0 ? _ref : 0);
  }, [offsetBottom, offsetTop, position]);
  var rootStyle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (!fixed) {
      return {
        height: "",
        width: ""
      };
    }
    var style = {};
    if (rootRect.height) {
      style.height = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(rootRect.height);
    }
    if (rootRect.width) {
      style.width = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(rootRect.width);
    }
    return style;
  }, [fixed, rootRect.height, rootRect.width]);
  var stickyStyle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (!fixed) {
      return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({
        height: "",
        width: ""
      }, position, "");
    }
    var style = {};
    if (rootRect.height) {
      style.height = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(rootRect.height);
    }
    if (rootRect.width) {
      style.width = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(rootRect.width);
    }
    style.transform = transform ? "translate3d(0, ".concat((0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(transform), ", 0)") : "";
    style[position] = (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_6__.addUnitPx)(offsetValue);
    return style;
  }, [fixed, rootRect.height, rootRect.width, transform, position, offsetValue]);
  function invokeScroll(_x) {
    return _invokeScroll.apply(this, arguments);
  }
  function _invokeScroll() {
    _invokeScroll = _asyncToGenerator( /*#__PURE__*/(0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee(_ref2) {
      var scrollTop, __rootRect__, containerRect, difference, _yield$getSystemRect, windowHeight, _containerRect, _difference;
      return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            scrollTop = _ref2.scrollTop;
            _context.next = 3;
            return (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_5__.getRect)(rootRef);
          case 3:
            __rootRect__ = _context.sent;
            if (!__rootRect__) {
              _context.next = 33;
              break;
            }
            setRootRect(__rootRect__);
            if (!(position === "top")) {
              _context.next = 19;
              break;
            }
            if (!containerRef) {
              _context.next = 16;
              break;
            }
            _context.next = 10;
            return (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_5__.getRect)(containerRef);
          case 10:
            containerRect = _context.sent;
            difference = containerRect.bottom - offsetValue - __rootRect__.height;
            setTransform(difference < 0 ? difference : 0);
            setFixed(offsetValue > __rootRect__.top && containerRect.bottom > 0);
            _context.next = 17;
            break;
          case 16:
            setFixed(offsetValue > __rootRect__.top);
          case 17:
            _context.next = 33;
            break;
          case 19:
            _context.next = 21;
            return (0,_utils_system__WEBPACK_IMPORTED_MODULE_7__.getSystemRect)();
          case 21:
            _yield$getSystemRect = _context.sent;
            windowHeight = _yield$getSystemRect.windowHeight;
            if (!containerRef) {
              _context.next = 32;
              break;
            }
            _context.next = 26;
            return (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_5__.getRect)(containerRef);
          case 26:
            _containerRect = _context.sent;
            _difference = windowHeight - _containerRect.top - offsetValue - __rootRect__.height;
            setTransform(_difference < 0 ? _difference : 0);
            setFixed(windowHeight - offsetValue < __rootRect__.bottom && windowHeight > _containerRect.top);
            _context.next = 33;
            break;
          case 32:
            setFixed(windowHeight - offsetValue < __rootRect__.bottom);
          case 33:
            onScroll === null || onScroll === void 0 ? void 0 : onScroll({
              scrollTop: scrollTop
            });
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _invokeScroll.apply(this, arguments);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (counterRef.current > 0) {
      onChange === null || onChange === void 0 ? void 0 : onChange(fixed);
    }
    counterRef.current++;
  }, [fixed, onChange]);
  (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useMounted)(function () {
    return invokeScroll({
      scrollTop: 0
    });
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.usePageScroll)(function (_ref3) {
    var scrollTop = _ref3.scrollTop;
    return invokeScroll({
      scrollTop: scrollTop
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, _objectSpread({
    ref: rootRef,
    style: _objectSpread(_objectSpread({}, styleProp), rootStyle)
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    style: stickyStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("sticky"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_12__.prefixClassname)("sticky--fixed"), fixed), className),
    children: children
  }));
}

/***/ }),

/***/ "./node_modules/@taroify/core/styles/hairline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@taroify/core/styles/hairline.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HAIRLINE_BORDER": function() { return /* binding */ HAIRLINE_BORDER; },
/* harmony export */   "HAIRLINE_BORDER_TOP": function() { return /* binding */ HAIRLINE_BORDER_TOP; },
/* harmony export */   "HAIRLINE_BORDER_TOP_BOTTOM": function() { return /* binding */ HAIRLINE_BORDER_TOP_BOTTOM; }
/* harmony export */ });
/* unused harmony exports HAIRLINE_BORDER_LEFT, HAIRLINE_BORDER_BOTTOM, HAIRLINE_BORDER_SURROUND, HAIRLINE_BORDER_UNSET_TOP_BOTTOM */
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefix */ "./node_modules/@taroify/core/styles/prefix.js");

var HAIRLINE_BORDER = (0,_prefix__WEBPACK_IMPORTED_MODULE_0__.prefixClassname)("hairline");
var HAIRLINE_BORDER_TOP = "".concat(HAIRLINE_BORDER, "--top");
var HAIRLINE_BORDER_LEFT = "".concat(HAIRLINE_BORDER, "--left");
var HAIRLINE_BORDER_BOTTOM = "".concat(HAIRLINE_BORDER, "--bottom");
var HAIRLINE_BORDER_SURROUND = "".concat(HAIRLINE_BORDER, "--surround");
var HAIRLINE_BORDER_TOP_BOTTOM = "".concat(HAIRLINE_BORDER, "--top-bottom");
var HAIRLINE_BORDER_UNSET_TOP_BOTTOM = "".concat(HAIRLINE_BORDER, "-unset--top-bottom");

/***/ }),

/***/ "./node_modules/@taroify/core/switch/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/core/switch/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _switch__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./node_modules/@taroify/core/switch/switch.js");


/***/ }),

/***/ "./node_modules/@taroify/core/switch/switch.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/switch/switch.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ "./node_modules/@taroify/core/loading/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_format_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format/unit */ "./node_modules/@taroify/core/utils/format/unit.js");


var _excluded = ["className", "style", "defaultChecked", "checked", "loading", "disabled", "size", "onChange", "onClick"];
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







function Switch(props) {
  var className = props.className,
    style = props.style,
    defaultChecked = props.defaultChecked,
    checkedProp = props.checked,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    size = props.size,
    onChangeProp = props.onChange,
    onClick = props.onClick,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_1__.useUncontrolled)({
      value: checkedProp,
      defaultValue: defaultChecked,
      onChange: onChangeProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    checked = _useUncontrolled$valu === void 0 ? false : _useUncontrolled$valu,
    setValue = _useUncontrolled.setValue;
  function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (disabled || loading) {
      return;
    }
    setValue(!checked);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch--checked"), checked), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch--loading"), loading), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch--disabled"), disabled), className),
    style: _objectSpread({
      fontSize: (0,_utils_format_unit__WEBPACK_IMPORTED_MODULE_5__.addUnitPx)(size)
    }, style),
    onClick: handleClick
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch__node")
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("switch__loading")
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tab_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-pane */ "./node_modules/@taroify/core/tabs/tab-pane.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./node_modules/@taroify/core/tabs/tabs.js");


var Tabs = _tabs__WEBPACK_IMPORTED_MODULE_1__["default"];
Tabs.TabPane = _tab_pane__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tab-pane-base.js":
/*!**********************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tab-pane-base.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabPaneBase; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiper */ "./node_modules/@taroify/core/swiper/index.js");
/* harmony import */ var _tabs_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.context */ "./node_modules/@taroify/core/tabs/tabs.context.js");


var _excluded = ["className", "style", "index", "value", "children", "title"];
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







function TabPaneBase(props) {
  var className = props.className,
    style = props.style,
    index = props.index,
    value = props.value,
    children = props.children,
    title = props.title,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_tabs_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
    activeValue = _useContext.value,
    lazyRender = _useContext.lazyRender,
    animated = _useContext.animated,
    swipeable = _useContext.swipeable;
  var active = activeValue === value;
  var initializedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  var shouldRender = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (!lazyRender) {
      return true;
    }
    if (initializedRef.current) {
      return true;
    }
    if (active && !initializedRef.current) {
      initializedRef.current = true;
    }
    return active;
  }, [active, lazyRender]);
  var tabPane = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, _objectSpread({
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: !(animated || swipeable) && !active ? "none" : ""
    }),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("tabs__tab-pane"), className),
    children: shouldRender ? children : undefined
  }, restProps));
  if (animated || swipeable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_swiper__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("tabs__tab-pane-wrapper"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("tabs__tab-pane-wrapper--inactive"), !active)),
      children: tabPane
    });
  }
  return tabPane;
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tab-pane.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tab-pane.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabPane; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TabPane(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tab.js":
/*!************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tab.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Tab; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _tabs_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-line */ "./node_modules/@taroify/core/tabs/tabs-line.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../badge */ "./node_modules/@taroify/core/badge/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validate */ "./node_modules/@taroify/core/utils/validate/index.js");


var _excluded = ["className", "active", "disabled", "underline", "ellipsis", "flexBasis", "dot", "badge", "children"];
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







function Tab(props) {
  var className = props.className,
    active = props.active,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    underline = props.underline,
    ellipsis = props.ellipsis,
    flexBasis = props.flexBasis,
    dot = props.dot,
    badge = props.badge,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var ContentBadgeWrapper = (0,_badge__WEBPACK_IMPORTED_MODULE_4__.createBadgeWrapper)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, null));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    style: {
      flexBasis: flexBasis
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("tabs__tab"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("tabs__tab--active"), active), (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("tabs__tab--disabled"), disabled), className)
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ContentBadgeWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("tabs__tab__content"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("tabs__tab__content-ellipsis"), ellipsis))
  }, children)), (dot || (0,_utils_validate__WEBPACK_IMPORTED_MODULE_5__.isDef)(badge) && badge !== "") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_badge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dot: dot,
    content: badge,
    fixed: true
  })), underline && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tabs_line__WEBPACK_IMPORTED_MODULE_3__["default"], {
    active: active
  }));
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tabs-content.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tabs-content.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsContent": function() { return /* binding */ TabsContent; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../swiper */ "./node_modules/@taroify/core/swiper/index.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _tab_pane_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-pane-base */ "./node_modules/@taroify/core/tabs/tab-pane-base.js");





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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}








function useTabPanes(tabObjects) {
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(tabObjects, function (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tab_pane_base__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({}, props));
    });
  }, [tabObjects]);
}
function TabsContent(props) {
  var activeValue = props.value,
    duration = props.duration,
    animated = props.animated,
    swipeable = props.swipeable,
    tabObjects = props.tabObjects,
    onTabChange = props.onTabChange;
  var activeIndex = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    var _find2;
    return (_find2 = lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(tabObjects, function (tab) {
      return tab.value === activeValue;
    })) === null || _find2 === void 0 ? void 0 : _find2.index;
  }, [activeValue, tabObjects]);
  var panes = useTabPanes(tabObjects);
  function onSwiperChange(index) {
    var tabObject = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(tabObjects, index);
    if (tabObject) {
      var value = tabObject.value,
        title = tabObject.title,
        disabled = tabObject.disabled;
      if (!disabled) {
        onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange({
          value: value,
          title: title,
          disabled: disabled
        });
      }
    }
  }
  var childrenRender = (0,_utils_state__WEBPACK_IMPORTED_MODULE_7__.useRendered)(function () {
    if (animated || swipeable) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_swiper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: activeIndex,
        loop: false,
        className: (0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("tabs__track"),
        duration: duration,
        touchable: swipeable,
        children: panes,
        stopPropagation: false,
        onChange: onSwiperChange
      });
    }
    return panes;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("tabs__content"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_9__.prefixClassname)("tabs__content--animated"), animated)),
    children: childrenRender
  });
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tabs-header.js":
/*!********************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tabs-header.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabsHeader; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _styles_hairline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/hairline */ "./node_modules/@taroify/core/styles/hairline.js");
/* harmony import */ var _utils_dom_rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dom/rect */ "./node_modules/@taroify/core/utils/dom/rect.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab */ "./node_modules/@taroify/core/tabs/tab.js");















function TabsHeader(props) {
  var activeValue = props.value,
    theme = props.theme,
    ellipsis = props.ellipsis,
    bordered = props.bordered,
    tabObjects = props.tabObjects,
    swipeThreshold = props.swipeThreshold,
    onTabClick = props.onTabClick;
  var themeLine = theme === "line";
  var themeCard = theme === "card";
  var navRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({}),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    navOffset = _useState2[0],
    setNavOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState4 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    tabOffsets = _useState4[0],
    setTabOffsets = _useState4[1];
  var activeIndex = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(tabObjects, function (tab) {
      return tab.value === activeValue;
    });
  }, [tabObjects, activeValue]);
  var activeOffset = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(tabOffsets) || activeIndex === -1 || activeIndex >= lodash_size__WEBPACK_IMPORTED_MODULE_1___default()(tabOffsets)) {
      return {};
    }
    var width = tabOffsets[activeIndex].width;
    var left = tabOffsets.slice(0, activeIndex).reduce(function (prev, curr) {
      var _curr$width;
      return prev + ((_curr$width = curr.width) !== null && _curr$width !== void 0 ? _curr$width : 0);
    }, 0);
    return {
      left: left,
      width: width
    };
  }, [tabOffsets, activeIndex]);
  var scrollLeft = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    if (navOffset) {
      var _navOffset$width = navOffset.width,
        navOffsetWidth = _navOffset$width === void 0 ? 0 : _navOffset$width;
      var _activeOffset$left = activeOffset.left,
        offsetLeft = _activeOffset$left === void 0 ? 0 : _activeOffset$left,
        _activeOffset$width = activeOffset.width,
        offsetWidth = _activeOffset$width === void 0 ? 0 : _activeOffset$width;
      return offsetLeft - (navOffsetWidth - offsetWidth) / 2;
    }
    return 0;
  }, [navOffset, activeOffset]);
  var resize = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    Promise.all([(0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_8__.getRect)(navRef), (0,_utils_dom_rect__WEBPACK_IMPORTED_MODULE_8__.getRects)(navRef, " .".concat((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__tab")))]).then(function (_ref) {
      var _ref2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, 2),
        navRect = _ref2[0],
        tabRects = _ref2[1];
      setNavOffset(navRect);
      setTabOffsets(tabRects);
    });
  }, []);
  var flexBasis = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return ellipsis && themeLine ? "".concat(88 / swipeThreshold, "%") : "";
  }, [ellipsis, themeLine, swipeThreshold]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    return (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.nextTick)(resize);
  }, [resize, tabObjects]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.onWindowResize === null || _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.onWindowResize === void 0 ? void 0 : (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.onWindowResize)(resize);
    return function () {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.offWindowResize === null || _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.offWindowResize === void 0 ? void 0 : (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.offWindowResize)(resize);
    };
  }, [resize]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__wrap"), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__wrap--scrollable"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, _styles_hairline__WEBPACK_IMPORTED_MODULE_7__.HAIRLINE_BORDER_TOP_BOTTOM, bordered && themeLine))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.ScrollView, {
    scrollX: tabObjects.length > swipeThreshold || !ellipsis,
    scrollWithAnimation: true,
    scrollLeft: scrollLeft,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__wrap__scroll"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__wrap__scroll--line"), themeLine), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__wrap__scroll--card"), themeCard))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    ref: navRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__nav"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__nav--line"), themeLine), (0,_styles__WEBPACK_IMPORTED_MODULE_11__.prefixClassname)("tabs__nav--card"), themeCard))
  }, lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(tabObjects, function (tabObject) {
    var _tabObject$classNames;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: tabObject.key,
      flexBasis: flexBasis,
      className: tabObject === null || tabObject === void 0 || (_tabObject$classNames = tabObject.classNames) === null || _tabObject$classNames === void 0 ? void 0 : _tabObject$classNames.title,
      dot: tabObject.dot,
      badge: tabObject.badge,
      active: activeValue === tabObject.value,
      disabled: tabObject.disabled,
      underline: themeLine,
      ellipsis: themeLine && ellipsis,
      children: tabObject.title,
      onClick: function onClick() {
        return onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick({
          value: tabObject.value,
          title: tabObject.title,
          disabled: tabObject.disabled
        });
      }
    });
  }))));
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tabs-line.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tabs-line.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabsLine; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _tabs_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.context */ "./node_modules/@taroify/core/tabs/tabs.context.js");







function TabsLine(props) {
  var active = props.active;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_tabs_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
    duration = _useContext.duration;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("tabs__line"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("tabs__line--active"), active)),
    style: {
      transitionDuration: "".concat(duration, "ms")
    }
  });
}

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tabs.context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tabs.context.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TabsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  value: undefined,
  lazyRender: true,
  animated: false,
  swipeable: false,
  swipeThreshold: 5,
  tabObjects: []
});
/* harmony default export */ __webpack_exports__["default"] = (TabsContext);

/***/ }),

/***/ "./node_modules/@taroify/core/tabs/tabs.js":
/*!*************************************************!*\
  !*** ./node_modules/@taroify/core/tabs/tabs.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isBoolean */ "./node_modules/lodash/isBoolean.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sticky */ "./node_modules/@taroify/core/sticky/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _tab_pane__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-pane */ "./node_modules/@taroify/core/tabs/tab-pane.js");
/* harmony import */ var _tabs_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs-content */ "./node_modules/@taroify/core/tabs/tabs-content.js");
/* harmony import */ var _tabs_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs-header */ "./node_modules/@taroify/core/tabs/tabs-header.js");
/* harmony import */ var _tabs_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs.context */ "./node_modules/@taroify/core/tabs/tabs.context.js");





var _excluded = ["value"],
  _excluded2 = ["className", "defaultValue", "value", "duration", "lazyRender", "animated", "swipeable", "sticky", "theme", "ellipsis", "bordered", "swipeThreshold", "children", "onTabClick", "onChange", "onScroll"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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











function useTabObjects(children) {
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    var tabObjects = [];
    react__WEBPACK_IMPORTED_MODULE_5__.Children.forEach(children, function (node) {
      if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(node)) {
        return node;
      }
      var element = node;
      if (element.type !== _tab_pane__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        return element;
      }
      var key = element.key,
        props = element.props;
      var index = lodash_size__WEBPACK_IMPORTED_MODULE_1___default()(tabObjects);
      var value = props.value,
        restProps = _objectWithoutProperties(props, _excluded);
      tabObjects.push(_objectSpread({
        key: key !== null && key !== void 0 ? key : index,
        index: index,
        value: value !== null && value !== void 0 ? value : index
      }, restProps));
    });
    return tabObjects;
  }, [children]);
}
function useTabsSticky(sticky) {
  if (sticky === false) {
    return undefined;
  }
  if (lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default()(sticky) && sticky) {
    return {
      offsetTop: 0
    };
  }
  return sticky;
}
function Tabs(props) {
  var className = props.className,
    defaultValue = props.defaultValue,
    valueProp = props.value,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 300 : _props$duration,
    _props$lazyRender = props.lazyRender,
    lazyRender = _props$lazyRender === void 0 ? true : _props$lazyRender,
    _props$animated = props.animated,
    animated = _props$animated === void 0 ? false : _props$animated,
    _props$swipeable = props.swipeable,
    swipeable = _props$swipeable === void 0 ? false : _props$swipeable,
    _props$sticky = props.sticky,
    sticky = _props$sticky === void 0 ? false : _props$sticky,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? "line" : _props$theme,
    _props$ellipsis = props.ellipsis,
    ellipsis = _props$ellipsis === void 0 ? true : _props$ellipsis,
    bordered = props.bordered,
    _props$swipeThreshold = props.swipeThreshold,
    swipeThreshold = _props$swipeThreshold === void 0 ? 5 : _props$swipeThreshold,
    childrenProp = props.children,
    onTabClick = props.onTabClick,
    onChange = props.onChange,
    onScroll = props.onScroll,
    restProps = _objectWithoutProperties(props, _excluded2);
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)({
      defaultValue: defaultValue,
      value: valueProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    value = _useUncontrolled$valu === void 0 ? 0 : _useUncontrolled$valu,
    getValue = _useUncontrolled.getValue,
    setValue = _useUncontrolled.setValue;
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var stickyProps = useTabsSticky(sticky);
  var tabObjects = useTabObjects(childrenProp);
  var index = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    var _iterator = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(tabObjects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tab = _step.value;
        if (tab.value === value) {
          return tab.index;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, [tabObjects, value]);
  var onTabChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (event) {
    if (!event.disabled) {
      if (getValue() !== event.value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event.value, event);
        setValue(event.value);
      }
    }
  }, [getValue, onChange, setValue]);
  var handleTabClick = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function (event) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(event);
    onTabChange(event);
  }, [onTabChange, onTabClick]);
  var headerRender = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tabs_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: value,
      theme: theme,
      bordered: bordered,
      ellipsis: ellipsis,
      tabObjects: tabObjects,
      swipeThreshold: swipeThreshold,
      onTabClick: handleTabClick
    });
  }, [bordered, ellipsis, handleTabClick, tabObjects, theme, value, swipeThreshold]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tabs_context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: {
      index: index,
      value: value,
      duration: duration,
      lazyRender: lazyRender,
      animated: animated,
      swipeable: swipeable,
      theme: theme,
      ellipsis: ellipsis,
      bordered: bordered,
      tabObjects: tabObjects,
      swipeThreshold: swipeThreshold
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, _objectSpread({
    ref: rootRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_styles__WEBPACK_IMPORTED_MODULE_13__.prefixClassname)("tabs"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_13__.prefixClassname)("tabs--line"), theme === "line"), (0,_styles__WEBPACK_IMPORTED_MODULE_13__.prefixClassname)("tabs--card"), theme === "card"), className)
  }, restProps), stickyProps ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_sticky__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: rootRef,
    offsetTop: stickyProps.offsetTop,
    children: headerRender,
    onScroll: onScroll
  }) : headerRender, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tabs_content__WEBPACK_IMPORTED_MODULE_8__.TabsContent, {
    value: value,
    lazyRender: lazyRender,
    duration: duration,
    animated: animated,
    swipeable: swipeable,
    tabObjects: tabObjects,
    onTabChange: onTabChange
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/@taroify/core/textarea/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/textarea/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _textarea__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea */ "./node_modules/@taroify/core/textarea/textarea.js");


/***/ }),

/***/ "./node_modules/@taroify/core/textarea/native-textarea.js":
/*!****************************************************************!*\
  !*** ./node_modules/@taroify/core/textarea/native-textarea.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");


var _excluded = ["nativeProps", "readonly"],
  _excluded2 = ["className"];
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




function NativeTextarea(props) {
  var _props$nativeProps = props.nativeProps,
    nativeProps = _props$nativeProps === void 0 ? {} : _props$nativeProps,
    readonly = props.readonly,
    restProps = _objectWithoutProperties(props, _excluded);
  var nativeClassname = nativeProps.className,
    restNativeProps = _objectWithoutProperties(nativeProps, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Textarea, _objectSpread({
    nativeProps: _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("native-textarea"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_4__.prefixClassname)("native-textarea--readonly"), readonly), nativeClassname)
    }, restNativeProps)
  }, restProps));
}
/* harmony default export */ __webpack_exports__["default"] = (NativeTextarea);

/***/ }),

/***/ "./node_modules/@taroify/core/textarea/textarea.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/textarea/textarea.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _native_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./native-textarea */ "./node_modules/@taroify/core/textarea/native-textarea.js");
/* harmony import */ var _textarea_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textarea.shared */ "./node_modules/@taroify/core/textarea/textarea.shared.js");



var _excluded = ["className", "placeholderClass", "value", "readonly", "disabled", "limit", "maxlength", "onInput", "onChange"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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







function Textarea(props) {
  var className = props.className,
    placeholderClass = props.placeholderClass,
    valueProp = props.value,
    readonly = props.readonly,
    disabled = props.disabled,
    limit = props.limit,
    maxlengthProp = props.maxlength,
    _onInput = props.onInput,
    onChange = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var maxlength = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(limit) ? limit : maxlengthProp;
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_2__.useUncontrolled)({
      value: valueProp
    }),
    value = _useUncontrolled.value,
    setValue = _useUncontrolled.setValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea__wrapper")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_native_textarea__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea--readonly"), readonly), className),
    placeholderClass: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea__placeholder"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea__placeholder--readonly"), readonly), placeholderClass),
    disabled: readonly || disabled,
    readonly: readonly,
    maxlength: maxlength,
    value: value,
    onInput: function onInput(e) {
      setValue(e.detail.value);
      _onInput === null || _onInput === void 0 ? void 0 : _onInput(e);
      onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }
  }, restProps)), limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("textarea__limit")
  }, (0,_textarea_shared__WEBPACK_IMPORTED_MODULE_6__.getStringLength)(value), "/", maxlength));
}
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./node_modules/@taroify/core/textarea/textarea.shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/@taroify/core/textarea/textarea.shared.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStringLength": function() { return /* binding */ getStringLength; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);


function getStringLength() {
  var chars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return lodash_size__WEBPACK_IMPORTED_MODULE_0___default()((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(chars));
}

/***/ }),

/***/ "./node_modules/@taroify/core/toast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/toast/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup */ "./node_modules/@taroify/core/popup/index.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast */ "./node_modules/@taroify/core/toast/toast.js");
/* harmony import */ var _toast_imperative__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.imperative */ "./node_modules/@taroify/core/toast/toast.imperative.js");



var Toast = _toast__WEBPACK_IMPORTED_MODULE_1__["default"];
Toast.Backdrop = _popup__WEBPACK_IMPORTED_MODULE_0__["default"].Backdrop;
Toast.open = _toast_imperative__WEBPACK_IMPORTED_MODULE_2__.openToast;
Toast.loading = (0,_toast_imperative__WEBPACK_IMPORTED_MODULE_2__.createToast)("loading");
Toast.success = (0,_toast_imperative__WEBPACK_IMPORTED_MODULE_2__.createToast)("success");
Toast.fail = (0,_toast_imperative__WEBPACK_IMPORTED_MODULE_2__.createToast)("fail");
Toast.close = _toast_imperative__WEBPACK_IMPORTED_MODULE_2__.closeToast;
Toast.setDefaultOptions = _toast_imperative__WEBPACK_IMPORTED_MODULE_2__.setDefaultToastOptions;
Toast.resetDefaultOptions = _toast_imperative__WEBPACK_IMPORTED_MODULE_2__.resetDefaultToastOptions;
/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./node_modules/@taroify/core/toast/toast.imperative.js":
/*!**************************************************************!*\
  !*** ./node_modules/@taroify/core/toast/toast.imperative.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeToast": function() { return /* binding */ closeToast; },
/* harmony export */   "createToast": function() { return /* binding */ createToast; },
/* harmony export */   "openToast": function() { return /* binding */ openToast; },
/* harmony export */   "resetDefaultToastOptions": function() { return /* binding */ resetDefaultToastOptions; },
/* harmony export */   "setDefaultToastOptions": function() { return /* binding */ setDefaultToastOptions; },
/* harmony export */   "useToastClose": function() { return /* binding */ useToastClose; },
/* harmony export */   "useToastOpen": function() { return /* binding */ useToastOpen; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _excluded = ["selector"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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


var initialToastOptions = {
  className: undefined,
  style: undefined,
  backdrop: undefined,
  type: undefined,
  position: undefined,
  icon: undefined,
  duration: undefined,
  message: undefined
};
var DEFAULT_TOAST_SELECTOR = "#toast";
var defaultToastOptions = {};
resetDefaultToastOptions();
function setDefaultToastOptions(options) {
  lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()(defaultToastOptions, options);
}
function resetDefaultToastOptions() {
  lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()(defaultToastOptions, {
    selector: DEFAULT_TOAST_SELECTOR
  });
}
var toastEvents = new _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.Events();
function useToastOpen(cb) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    toastEvents.on("open", cb);
    return function () {
      toastEvents.off("open", cb);
    };
  }, []);
}
function useToastClose(cb) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    toastEvents.on("close", cb);
    return function () {
      toastEvents.off("close", cb);
    };
  }, []);
}
function parseToastOptions(message) {
  var options = ! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.isValidElement)(message) && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(message) ? message : {
    message: message
  };
  return lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, initialToastOptions, defaultToastOptions, options);
}
function openToast(args) {
  var _parseToastOptions = parseToastOptions(args),
    selector = _parseToastOptions.selector,
    restOptions = _objectWithoutProperties(_parseToastOptions, _excluded);
  toastEvents.trigger("open", _objectSpread({
    selector: selector
  }, restOptions));
}
function createToast(type) {
  return function (args) {
    var options = parseToastOptions(args);
    options.type = type;
    openToast(options);
  };
}
function closeToast(selector) {
  toastEvents.trigger("close", selector !== null && selector !== void 0 ? selector : defaultToastOptions.selector);
}

/***/ }),

/***/ "./node_modules/@taroify/core/toast/toast.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/core/toast/toast.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toast; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_Fail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Fail */ "./node_modules/@taroify/icons/Fail.js");
/* harmony import */ var _taroify_icons_Success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/icons/Success */ "./node_modules/@taroify/icons/Success.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../backdrop */ "./node_modules/@taroify/core/backdrop/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading */ "./node_modules/@taroify/core/loading/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popup */ "./node_modules/@taroify/core/popup/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _utils_dom_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom/element */ "./node_modules/@taroify/core/utils/dom/element.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/state */ "./node_modules/@taroify/core/utils/state.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/validate */ "./node_modules/@taroify/core/utils/validate/index.js");
/* harmony import */ var _toast_imperative__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toast.imperative */ "./node_modules/@taroify/core/toast/toast.imperative.js");






var _excluded = ["id", "className", "defaultOpen", "open", "icon", "type", "position", "duration", "children", "backdrop", "onClose"],
  _excluded2 = ["selector", "message"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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














var TOAST_PRESET_TYPES = ["text", "loading", "success", "fail", "html"];
var TOAST_PRESET_POSITIONS = ["top", "middle", "bottom"];
function defaultToastIcon(icon, type) {
  if (icon) {
    return icon;
  }
  if (type === "success") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_taroify_icons_Success__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }
  if (type === "loading") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast__loading")
    });
  }
  if (type === "fail") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_taroify_icons_Fail__WEBPACK_IMPORTED_MODULE_0__["default"], null);
  }
  return undefined;
}
function useToastIcon(node, type) {
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    var icon = defaultToastIcon(node, type);
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(icon)) {
      return icon;
    }
    var element = icon;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.cloneElement)(icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast__icon"), element.props.className)
    });
  }, [node, type]);
}
function useToastChildren(children) {
  return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    var __children__ = {
      content: []
    };
    react__WEBPACK_IMPORTED_MODULE_5__.Children.forEach(children, function (child) {
      if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.isValidElement)(child)) {
        var element = child;
        if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_12__.isElementOf)(element, _backdrop__WEBPACK_IMPORTED_MODULE_6__["default"])) {
          __children__.backdrop = element;
        } else {
          var _children__$content;
          (_children__$content = __children__.content) === null || _children__$content === void 0 ? void 0 : _children__$content.push(child);
        }
      } else {
        var _children__$content2;
        (_children__$content2 = __children__.content) === null || _children__$content2 === void 0 ? void 0 : _children__$content2.push(child);
      }
    });
    if (!__children__.backdrop) {
      __children__.backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_popup__WEBPACK_IMPORTED_MODULE_9__["default"].Backdrop, {
        open: false
      });
    }
    return __children__;
  }, [children]);
}
function Toast(props) {
  var _useObject = (0,_utils_state__WEBPACK_IMPORTED_MODULE_11__.useObject)(props),
    _useObject$object = _useObject.object,
    id = _useObject$object.id,
    className = _useObject$object.className,
    defaultOpen = _useObject$object.defaultOpen,
    openProp = _useObject$object.open,
    iconProp = _useObject$object.icon,
    _useObject$object$typ = _useObject$object.type,
    type = _useObject$object$typ === void 0 ? "text" : _useObject$object$typ,
    _useObject$object$pos = _useObject$object.position,
    position = _useObject$object$pos === void 0 ? "middle" : _useObject$object$pos,
    _useObject$object$dur = _useObject$object.duration,
    duration = _useObject$object$dur === void 0 ? 3000 : _useObject$object$dur,
    childrenProp = _useObject$object.children,
    backdropOptions = _useObject$object.backdrop,
    onClose = _useObject$object.onClose,
    setObject = _useObject.setObject,
    restProps = _objectWithoutProperties(_useObject.object, _excluded);
  var rootSelectorRef = (0,_utils_state__WEBPACK_IMPORTED_MODULE_11__.useToRef)((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.usePrependPageSelector)((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.getElementSelector)(id)));
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)({
      defaultValue: defaultOpen,
      value: openProp,
      onChange: function onChange(aOpened) {
        return !aOpened && (onClose === null || onClose === void 0 ? void 0 : onClose(aOpened));
      }
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    open = _useUncontrolled$valu === void 0 ? false : _useUncontrolled$valu,
    setOpen = _useUncontrolled.setValue;
  var _useToastChildren = useToastChildren(childrenProp),
    backdropElement = _useToastChildren.backdrop,
    content = _useToastChildren.content;
  var backdrop = (0,_popup__WEBPACK_IMPORTED_MODULE_9__.usePopupBackdrop)(backdropElement, backdropOptions);
  var icon = useToastIcon(iconProp, type);
  var _useTimeout = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useTimeout)(),
    stopAutoClose = _useTimeout.stop,
    restartAutoClose = _useTimeout.restart;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (open) {
      restartAutoClose(function () {
        setOpen(false);
        stopAutoClose();
      }, duration);
    } else {
      stopAutoClose();
    }
    return function () {
      return stopAutoClose();
    };
  }, [duration, open, restartAutoClose, setObject, setOpen, stopAutoClose]);
  (0,_toast_imperative__WEBPACK_IMPORTED_MODULE_13__.useToastOpen)(function (_ref) {
    var selector = _ref.selector,
      message = _ref.message,
      restOptions = _objectWithoutProperties(_ref, _excluded2);
    if ((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.matchSelector)((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.prependPageSelector)(selector), rootSelectorRef.current)) {
      restartAutoClose();
      setObject(_objectSpread({
        children: message
      }, restOptions));
      setOpen(true);
    }
  });
  (0,_toast_imperative__WEBPACK_IMPORTED_MODULE_13__.useToastClose)(function (selector) {
    if ((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.matchSelector)((0,_utils_dom_element__WEBPACK_IMPORTED_MODULE_10__.prependPageSelector)(selector), rootSelectorRef.current)) {
      setOpen(false);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_popup__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
    open: open,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast--".concat(position)), TOAST_PRESET_POSITIONS.includes(position)), (0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast--".concat(type)), !icon && TOAST_PRESET_TYPES.includes(type)), className)
  }, restProps), backdrop, icon, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_14__.prefixClassname)("toast__message"),
    children: content
  }) : content);
}

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader */ "./node_modules/@taroify/core/uploader/uploader.js");
/* harmony import */ var _uploader_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader-image */ "./node_modules/@taroify/core/uploader/uploader-image.js");
/* harmony import */ var _uploader_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader-upload */ "./node_modules/@taroify/core/uploader/uploader-upload.js");



var Uploader = _uploader__WEBPACK_IMPORTED_MODULE_0__["default"];
Uploader.Upload = _uploader_upload__WEBPACK_IMPORTED_MODULE_2__["default"];
Uploader.Image = _uploader_image__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Uploader);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader-image.js":
/*!***************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader-image.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _taroify_icons_Description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Description */ "./node_modules/@taroify/icons/Description.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./node_modules/@taroify/core/image/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _uploader_remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploader-remove */ "./node_modules/@taroify/core/uploader/uploader-remove.js");
/* harmony import */ var _uploader_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploader.context */ "./node_modules/@taroify/core/uploader/uploader.context.js");
/* harmony import */ var _uploader_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploader.utils */ "./node_modules/@taroify/core/uploader/uploader.utils.js");



var _excluded = ["className", "type", "url", "name", "removable", "mode", "alt", "round", "children", "onRemove"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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









function UploaderImage(props) {
  var className = props.className,
    type = props.type,
    url = props.url,
    name = props.name,
    removableProp = props.removable,
    mode = props.mode,
    alt = props.alt,
    round = props.round,
    children = props.children,
    onRemove = props.onRemove,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_uploader_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
    ctxRemovable = _useContext.removable;
  var removable = removableProp !== null && removableProp !== void 0 ? removableProp : ctxRemovable;
  function renderFile() {
    if ((0,_uploader_utils__WEBPACK_IMPORTED_MODULE_7__.isImageFile)({
      type: type,
      url: url
    })) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("uploader__preview-image"),
        src: url,
        mode: mode,
        alt: alt,
        round: round
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("uploader__file")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_taroify_icons_Description__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("uploader__file-icon")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("uploader__file-name"), (0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("ellipsis")),
      children: name !== null && name !== void 0 ? name : url
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_8__.prefixClassname)("uploader__preview"), className)
  }, restProps), renderFile(), children, removable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_uploader_remove__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onRemove
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (UploaderImage);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader-mask.js":
/*!**************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader-mask.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ "./node_modules/@taroify/core/loading/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");

var _excluded = ["className"];
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







function renderIcon(icon) {
  if ((0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__.isIconElement)(icon)) {
    return (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_1__.cloneIconElement)(icon, {
      className: (0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("uploader__mask-icon")
    });
  }
  if ( /*#__PURE__*/ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(icon) && icon.type === _loading__WEBPACK_IMPORTED_MODULE_4__["default"]) {
    var _icon$props = icon.props,
      className = _icon$props.className,
      restProps = _objectWithoutProperties(_icon$props, _excluded);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(icon, _objectSpread(_objectSpread({}, restProps), {}, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("uploader__loading"), className)
    }));
  }
}
function UploaderMask(props) {
  var className = props.className,
    icon = props.icon,
    message = props.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("uploader__mask"), className)
  }, renderIcon(icon), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_5__.prefixClassname)("uploader__mask-message"),
    children: message
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (UploaderMask);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader-remove.js":
/*!****************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader-remove.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _taroify_icons_Cross__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Cross */ "./node_modules/@taroify/icons/Cross.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");



var _excluded = ["className", "icon"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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





function UploaderRemove(props) {
  var className = props.className,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_taroify_icons_Cross__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$icon,
    restProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("uploader__preview-remove"), className)
  }, restProps), (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_2__.cloneIconElement)(icon, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_6__.prefixClassname)("uploader__preview-remove-icon")
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (UploaderRemove);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader-upload.js":
/*!****************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader-upload.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_Photograph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Photograph */ "./node_modules/@taroify/icons/Photograph.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _taroify_icons_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/icons/utils */ "./node_modules/@taroify/icons/utils/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _uploader_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploader.context */ "./node_modules/@taroify/core/uploader/uploader.context.js");




var _excluded = ["className", "readonly", "icon", "onClick"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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







function UploaderUpload(props) {
  var className = props.className,
    readonly = props.readonly,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_taroify_icons_Photograph__WEBPACK_IMPORTED_MODULE_0__["default"], null) : _props$icon,
    onClick = props.onClick,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_uploader_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
    disabled = _useContext.disabled,
    onUpload = _useContext.onUpload;
  function handleClick(event) {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    if (!readonly && !disabled) {
      onUpload === null || onUpload === void 0 ? void 0 : onUpload();
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("uploader__upload"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("uploader__upload--readonly"), readonly), className),
    onClick: handleClick
  }, restProps), (0,_taroify_icons_utils__WEBPACK_IMPORTED_MODULE_2__.cloneIconElement)(icon, {
    className: (0,_styles__WEBPACK_IMPORTED_MODULE_7__.prefixClassname)("uploader__upload-icon")
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (UploaderUpload);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader.context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader.context.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UploaderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["default"] = (UploaderContext);

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader.js":
/*!*********************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Uploader; }
/* harmony export */ });
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _taroify_icons_Close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/icons/Close */ "./node_modules/@taroify/icons/Close.js");
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _taroify_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taroify/hooks */ "./node_modules/@taroify/hooks/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading */ "./node_modules/@taroify/core/loading/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles */ "./node_modules/@taroify/core/styles/prefix.js");
/* harmony import */ var _uploader_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uploader-image */ "./node_modules/@taroify/core/uploader/uploader-image.js");
/* harmony import */ var _uploader_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploader-mask */ "./node_modules/@taroify/core/uploader/uploader-mask.js");
/* harmony import */ var _uploader_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uploader-upload */ "./node_modules/@taroify/core/uploader/uploader-upload.js");
/* harmony import */ var _uploader_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uploader.context */ "./node_modules/@taroify/core/uploader/uploader.context.js");
/* harmony import */ var _uploader_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uploader.shared */ "./node_modules/@taroify/core/uploader/uploader.shared.js");







var _excluded = ["className", "defaultValue", "value", "disabled", "removable", "maxFiles", "multiple", "children", "onUpload", "onChange"];
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
  return (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__["default"])(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_4__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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












function renderUploaderMask(file) {
  return ((file === null || file === void 0 ? void 0 : file.status) === "uploading" || (file === null || file === void 0 ? void 0 : file.status) === "failed") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_uploader_mask__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: (file === null || file === void 0 ? void 0 : file.status) === "uploading" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_loading__WEBPACK_IMPORTED_MODULE_8__["default"], null) : (file === null || file === void 0 ? void 0 : file.status) === "failed" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_taroify_icons_Close__WEBPACK_IMPORTED_MODULE_0__["default"], null) : undefined,
    message: file.message
  });
}
function UploadFilesRender(props) {
  var defaultValue = props.defaultValue,
    valueProp = props.value,
    disabled = props.disabled,
    multiple = props.multiple,
    _props$maxFiles = props.maxFiles,
    maxFiles = _props$maxFiles === void 0 ? Number.MAX_VALUE : _props$maxFiles,
    onChangeProp = props.onChange;
  var _useUncontrolled = (0,_taroify_hooks__WEBPACK_IMPORTED_MODULE_5__.useUncontrolled)({
      defaultValue: defaultValue,
      value: valueProp,
      onChange: onChangeProp
    }),
    _useUncontrolled$valu = _useUncontrolled.value,
    value = _useUncontrolled$valu === void 0 ? [] : _useUncontrolled$valu,
    setValue = _useUncontrolled.setValue;
  var renderImage = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (file, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_uploader_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      type: file === null || file === void 0 ? void 0 : file.type,
      url: file === null || file === void 0 ? void 0 : file.url,
      name: file === null || file === void 0 ? void 0 : file.name,
      removable: file !== null && file !== void 0 && file.removable && (file === null || file === void 0 ? void 0 : file.status) !== "uploading" ? true : undefined,
      children: renderUploaderMask(file),
      onRemove: function onRemove() {
        if (!disabled) {
          if (multiple) {
            setValue(lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(value, function (item) {
              return item !== file;
            }));
          } else {
            setValue(null);
          }
        }
      }
    });
  }, [disabled, multiple, setValue, value]);
  var files = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    if (!multiple) {
      return [];
    }
    var __files__ = lodash_map__WEBPACK_IMPORTED_MODULE_2___default()((0,_uploader_shared__WEBPACK_IMPORTED_MODULE_13__.getUploadFiles)(value), renderImage);
    if (__files__.length < maxFiles) {
      __files__.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_uploader_upload__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: "upload"
      }));
    }
    return __files__;
  }, [maxFiles, multiple, renderImage, value]);
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_uploader_upload__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }
  if (!multiple) {
    var file = (0,_uploader_shared__WEBPACK_IMPORTED_MODULE_13__.getOneUploadFile)(value);
    return renderImage(file);
  }
  return files;
}
function Uploader(props) {
  var className = props.className,
    defaultValue = props.defaultValue,
    value = props.value,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$removable = props.removable,
    removable = _props$removable === void 0 ? true : _props$removable,
    maxFiles = props.maxFiles,
    multiple = props.multiple,
    children = props.children,
    onUpload = props.onUpload,
    onChange = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_uploader_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
    value: {
      removable: removable,
      disabled: disabled,
      onUpload: onUpload
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, _objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("uploader"), className)
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("uploader__wrapper"), (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, (0,_styles__WEBPACK_IMPORTED_MODULE_15__.prefixClassname)("uploader__wrapper--disabled"), disabled))
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(UploadFilesRender, {
    defaultValue: defaultValue,
    value: value,
    disabled: disabled,
    maxFiles: maxFiles,
    multiple: multiple,
    onChange: onChange
  }))));
}

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader.shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader.shared.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOneUploadFile": function() { return /* binding */ getOneUploadFile; },
/* harmony export */   "getUploadFiles": function() { return /* binding */ getUploadFiles; }
/* harmony export */ });
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_0__);

function getOneUploadFile(files) {
  return lodash_isArray__WEBPACK_IMPORTED_MODULE_0___default()(files) ? files[0] : files;
}
function getUploadFiles(files) {
  return lodash_isArray__WEBPACK_IMPORTED_MODULE_0___default()(files) ? files : [files];
}

/***/ }),

/***/ "./node_modules/@taroify/core/uploader/uploader.utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@taroify/core/uploader/uploader.utils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isImageFile": function() { return /* binding */ isImageFile; }
/* harmony export */ });
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageFile(item) {
  if (item.type) {
    return item.type.indexOf("image") === 0;
  }
  if (item.url) {
    return IMAGE_REGEXP.test(item.url);
  }
  return false;
}

/***/ }),

/***/ "./node_modules/@taroify/core/utils/element.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/core/utils/element.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVariantElement": function() { return /* binding */ createVariantElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ "./node_modules/@taroify/core/utils/validate/index.js");


function createVariantComponentWrapper(children, displayName) {
  var Component = function Component() {
    return children;
  };
  Component.displayName = displayName;
  return Component;
}
function createVariantElement(type, node) {
  if ((0,_validate__WEBPACK_IMPORTED_MODULE_1__.isTextElement)(node)) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(type, {
      children: node
    });
  }
  if ((0,_validate__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(node)) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(type, node);
  }
  if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)) {
    var ComponentWrapper = createVariantComponentWrapper(node, type.displayName);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComponentWrapper);
  }
  return node;
}

/***/ }),

/***/ "./node_modules/@taroify/core/utils/format/number.js":
/*!***********************************************************!*\
  !*** ./node_modules/@taroify/core/utils/format/number.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNumber": function() { return /* binding */ addNumber; },
/* harmony export */   "formatNumber": function() { return /* binding */ formatNumber; }
/* harmony export */ });
/* unused harmony export padZero */
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/toString */ "./node_modules/lodash/toString.js");
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/padStart */ "./node_modules/lodash/padStart.js");
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__);



function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  if (index === -1) {
    return value;
  }
  if (_char === "-" && index !== 0) {
    return value.slice(0, index);
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}
function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.split(".")[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }
  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}
function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(num1) + lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(num2)) * cardinal) / cardinal;
}
function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return lodash_padStart__WEBPACK_IMPORTED_MODULE_1___default()(lodash_toString__WEBPACK_IMPORTED_MODULE_0___default()(num), targetLength, "0");
}

/***/ }),

/***/ "./node_modules/@taroify/core/utils/system.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/core/utils/system.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSystemRect": function() { return /* binding */ getSystemRect; }
/* harmony export */ });
/* unused harmony export useSystemRect */
/* harmony import */ var D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/@taroify/core/hooks/index.js");




var INITIAL_RECT = {
  screenHeight: 0,
  screenWidth: 0,
  windowHeight: 0,
  windowWidth: 0
};
function getSystemRect() {
  return (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo)().then(function (_ref) {
    var screenHeight = _ref.screenHeight,
      screenWidth = _ref.screenWidth,
      windowHeight = _ref.windowHeight,
      windowWidth = _ref.windowWidth;
    return {
      screenHeight: screenHeight,
      screenWidth: screenWidth,
      windowHeight: windowHeight,
      windowWidth: windowWidth
    };
  });
}
function useSystemRect() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INITIAL_RECT),
    _useState2 = (0,D_codedir_web_taro_taro_store_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    rect = _useState2[0],
    setRect = _useState2[1];
  (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useMounted)(function () {
    return getSystemRect().then(setRect);
  });
  return rect;
}

/***/ }),

/***/ "./node_modules/@taroify/icons/Clear.js":
/*!**********************************************!*\
  !*** ./node_modules/@taroify/icons/Clear.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Clear = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("clear");
/* harmony default export */ __webpack_exports__["default"] = (Clear);

/***/ }),

/***/ "./node_modules/@taroify/icons/Close.js":
/*!**********************************************!*\
  !*** ./node_modules/@taroify/icons/Close.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Close = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("close");
/* harmony default export */ __webpack_exports__["default"] = (Close);

/***/ }),

/***/ "./node_modules/@taroify/icons/Description.js":
/*!****************************************************!*\
  !*** ./node_modules/@taroify/icons/Description.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Description = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("description");
/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./node_modules/@taroify/icons/Fail.js":
/*!*********************************************!*\
  !*** ./node_modules/@taroify/icons/Fail.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Fail = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("fail");
/* harmony default export */ __webpack_exports__["default"] = (Fail);

/***/ }),

/***/ "./node_modules/@taroify/icons/Photograph.js":
/*!***************************************************!*\
  !*** ./node_modules/@taroify/icons/Photograph.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Photograph = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("photograph");
/* harmony default export */ __webpack_exports__["default"] = (Photograph);

/***/ }),

/***/ "./node_modules/@taroify/icons/Search.js":
/*!***********************************************!*\
  !*** ./node_modules/@taroify/icons/Search.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Search = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("search");
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./node_modules/@taroify/icons/Star.js":
/*!*********************************************!*\
  !*** ./node_modules/@taroify/icons/Star.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Star = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("star");
/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ }),

/***/ "./node_modules/@taroify/icons/StarOutlined.js":
/*!*****************************************************!*\
  !*** ./node_modules/@taroify/icons/StarOutlined.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var StarOutlined = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("star-o");
/* harmony default export */ __webpack_exports__["default"] = (StarOutlined);

/***/ }),

/***/ "./node_modules/@taroify/icons/Success.js":
/*!************************************************!*\
  !*** ./node_modules/@taroify/icons/Success.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _van__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./van */ "./node_modules/@taroify/icons/van/index.js");

var Success = (0,_van__WEBPACK_IMPORTED_MODULE_0__.createVanIconComponent)("success");
/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ }),

/***/ "./src/compoent/tbs/index.tsx":
/*!************************************!*\
  !*** ./src/compoent/tbs/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/core/tabs */ "./node_modules/@taroify/core/tabs/index.js");
/* harmony import */ var _taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taroify/core/grid */ "./node_modules/@taroify/core/grid/index.js");
/* harmony import */ var _taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taroify/icons/CartOutlined */ "./node_modules/@taroify/icons/CartOutlined.js");
/* harmony import */ var _taroify_core_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taroify/core/tag */ "./node_modules/@taroify/core/tag/index.js");
/* harmony import */ var _taroify_core_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taroify/core/image */ "./node_modules/@taroify/core/image/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









 // import { useState } from 'react';




function navto() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().navigateTo({
    url: "/pages/goods_details/index"
  });
}
function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__["default"], {
    animated: true,
    swipeable: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].TabPane, {
      title: "\u7CBE\u9009\u63A8\u8350",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "grid",
        columns: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
          className: "grid-item",
          onClick: navto,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "imgwarp",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "grid-image",
              src: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "taroify-ellipsis--l2 imgtext",
            children: "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
              color: "danger",
              shape: "rounded",
              variant: "outlined",
              children: "\u9650\u65F6\u62A2\u8D2D"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "price_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "price",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "now_p",
                children: "\uFFE5298"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "pre_p",
                children: "\uFFE5400"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "cart_icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
                style: {
                  color: "#ff5252"
                },
                size: "40px"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
          className: "grid-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "imgwarp",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "grid-image",
              src: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "taroify-ellipsis--l2 imgtext",
            children: "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
              color: "danger",
              shape: "rounded",
              variant: "outlined",
              children: "\u9650\u65F6\u62A2\u8D2D"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "price_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "price",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "now_p",
                children: "\uFFE5298"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "pre_p",
                children: "\uFFE5400"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "cart_icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
                style: {
                  color: "#ff5252"
                },
                size: "40px"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
          className: "grid-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "imgwarp",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "grid-image",
              src: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "taroify-ellipsis--l2 imgtext",
            children: "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
              color: "danger",
              shape: "rounded",
              variant: "outlined",
              children: "\u9650\u65F6\u62A2\u8D2D"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "price_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "price",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "now_p",
                children: "\uFFE5298"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "pre_p",
                children: "\uFFE5400"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "cart_icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
                style: {
                  color: "#ff5252"
                },
                size: "40px"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_taroify_core_grid__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
          className: "grid-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "imgwarp",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "grid-image",
              src: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "taroify-ellipsis--l2 imgtext",
            children: "\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "tag",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
              color: "danger",
              shape: "rounded",
              variant: "outlined",
              children: "\u9650\u65F6\u62A2\u8D2D"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "price_box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "price",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "now_p",
                children: "\uFFE5298"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: "pre_p",
                children: "\uFFE5400"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "cart_icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_icons_CartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
                style: {
                  color: "#ff5252"
                },
                size: "40px"
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].TabPane, {
      title: "\u6807\u7B7E 2",
      children: "\u5185\u5BB9 2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].TabPane, {
      title: "\u6807\u7B7E 3",
      children: "\u5185\u5BB9 3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_taroify_core_tabs__WEBPACK_IMPORTED_MODULE_0__["default"].TabPane, {
      title: "\u6807\u7B7E 4",
      children: "\u5185\u5BB9 4"
    })]
  });
}

/***/ }),

/***/ "./src/model/swiper.js":
/*!*****************************!*\
  !*** ./src/model/swiper.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// const images = [
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
//     text: '1',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
//     text: '2',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
//     text: '3',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
//     text: '4',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
//     text: '5',
//   },
//   {
//     img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
//     text: '6',
//   },
// ];

var images = [{
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png"
}, {
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png"
}, {
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png"
}, {
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png"
}, {
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png"
}, {
  src: "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ (function(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseReduce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_iteratorToArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_iteratorToArray.js ***!
  \*************************************************/
/***/ (function(module) {

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

module.exports = iteratorToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ (function(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/flatMap.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatMap.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    map = __webpack_require__(/*! ./map */ "./node_modules/lodash/map.js");

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/isError.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isError.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/padStart.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/padStart.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createPadding = __webpack_require__(/*! ./_createPadding */ "./node_modules/lodash/_createPadding.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (createPadding(length - strLength, chars) + string)
    : string;
}

module.exports = padStart;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ "./node_modules/lodash/_baseReduce.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/toArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/toArray.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    iteratorToArray = __webpack_require__(/*! ./_iteratorToArray */ "./node_modules/lodash/_iteratorToArray.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

module.exports = toArray;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map