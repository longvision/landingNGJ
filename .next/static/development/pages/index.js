(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/input.js":
/*!*****************************!*\
  !*** ./components/input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @unform/core */ "./node_modules/@unform/core/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/components/input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var InputField = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "input__InputField",
  componentId: "men1dl-0"
})(["font-size:18px;height:40px;margin-top:10px;background-color:#fff;border-width:1px;border-radius:7px;width:80%;max-width:80%;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "input__Label",
  componentId: "men1dl-1"
})(["font-size:14px;margin:10px;color:#fff;width:80%;font-weight:700;"]);
function Input(_ref) {
  var name = _ref.name,
      type = _ref.type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["name", "type", "label", "placeholder"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, label), __jsx(InputField, {
    type: type,
    name: name,
    placeholder: placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@unform/core/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@unform/core/dist/index.es.js ***!
  \****************************************************/
/*! exports provided: Form, FormContext, Scope, useField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return p; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dot-object */ "./node_modules/dot-object/index.js");
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_object__WEBPACK_IMPORTED_MODULE_1__);
var s=Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});function p(r){var n=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(s),i=n.initialData,a=n.errors,c=n.scopePath,f=n.unregisterField,p=n.registerField,v=n.clearFieldError,d=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])((function(){return c?c+"."+r:r}),[r,c]),h=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])((function(){return dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.pick(d,i)}),[d,i]),b=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])((function(){return a[d]}),[a,d]),y=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(){v(d)}),[v,d]);return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){return function(){return f(d)}}),[d,f]),{fieldName:d,registerField:p,defaultValue:h,clearError:y,error:b}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var v=function(){return(v=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)};function d(r,n){var t,e,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,e=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(r,i)}catch(r){u=[6,r],e=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var h=Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((function(n,t){var e=n.initialData,u=void 0===e?{}:e,i=n.children,p=n.onSubmit,h=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),b=h[0],y=h[1],m=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]),g=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){return m.current.find((function(n){return n.name===r}))}),[]),E=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){var n=r.ref,t=r.getValue,e=r.path;return t?t(n):e&&dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.pick(e,n)}),[]),F=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r,n){var t=r.path,e=r.ref,o=r.setValue;return o?o(e,n):!!t&&dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.set(t,n,e)}),[]),w=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){var n=r.clearValue,t=r.ref,e=r.path;return n?n(t,""):e&&dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.set(e,"",t)}),[]),O=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){void 0===r&&(r={}),m.current.forEach((function(n){var t=n.name,e=n.ref,o=n.path,u=n.clearValue;return u?u(e,r[t]):o&&dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.set(o,r[t]?r[t]:"",e)}))}),[]),P=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){var n={};m.current.forEach((function(t){n[t.name]=dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.pick(t.name,r)})),Object.entries(n).forEach((function(r){var n=r[0],t=r[1],e=g(n);e&&F(e,t)}))}),[g,F]),j=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){var n=dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.dot(r);y(n)}),[]),x=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(){var r={};return m.current.forEach((function(n){r[n.name]=E(n)})),dot_object__WEBPACK_IMPORTED_MODULE_1___default.a.object(r),r}),[E]),k=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){return n=void 0,t=void 0,o=function(){var n;return d(this,(function(t){return r&&r.preventDefault(),n=x(),p(n,{reset:O},r),[2]}))},new((e=void 0)||(e=Promise))((function(r,u){function i(r){try{c(o.next(r))}catch(r){u(r)}}function a(r){try{c(o.throw(r))}catch(r){u(r)}}function c(n){n.done?r(n.value):new e((function(r){r(n.value)})).then(i,a)}c((o=o.apply(n,t||[])).next())}));var n,t,e,o}),[p,x,O]),V=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){m.current.push(r)}),[]),D=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){var n=m.current.findIndex((function(n){return n.name===r}));n>-1&&m.current.splice(n,1)}),[]),S=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((function(r){y((function(n){var t;return v(v({},n),((t={})[r]=void 0,t))}))}),[]);return Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(t,(function(){return{getFieldValue:function(r){var n=g(r);return!!n&&E(n)},setFieldValue:function(r,n){var t=g(r);return!!t&&F(t,n)},getFieldError:function(r){return b[r]},setFieldError:function(r,n){y((function(t){var e;return v(v({},t),((e={})[r]=n,e))}))},clearField:function(r){var n=g(r);n&&w(n)},getErrors:function(){return b},setErrors:function(r){return j(r)},getData:function(){return x()},getFieldRef:function(r){var n=g(r);return!!n&&n.ref},setData:function(r){return P(r)},reset:function(r){return O(r)},submitForm:function(){k()}}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s.Provider,{value:{initialData:u,errors:b,scopePath:"",registerField:V,unregisterField:D,clearFieldError:S,handleSubmit:k}},i)}));function b(n){var e=n.path,o=n.children,u=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(s),i=u.scopePath,a=function(r,n){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(t[e]=r[e]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(r);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(r,e[o])&&(t[e[o]]=r[e[o]])}return t}(u,["scopePath"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s.Provider,{value:v(v({},a),{scopePath:i.concat(i?"."+e:e)})},o)}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/dot-object/index.js":
/*!******************************************!*\
  !*** ./node_modules/dot-object/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _process (v, mod) {
  var i
  var r

  if (typeof mod === 'function') {
    r = mod(v)
    if (r !== undefined) {
      v = r
    }
  } else if (Array.isArray(mod)) {
    for (i = 0; i < mod.length; i++) {
      r = mod[i](v)
      if (r !== undefined) {
        v = r
      }
    }
  }

  return v
}

function parseKey (key, val) {
  // detect negative index notation
  if (key[0] === '-' && Array.isArray(val) && /^-\d+$/.test(key)) {
    return val.length + parseInt(key, 10)
  }
  return key
}

function isIndex (k) {
  return /^\d+$/.test(k)
}

function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArrayOrObject (val) {
  return Object(val) === val
}

function isEmptyObject (val) {
  return Object.keys(val).length === 0
}

var blacklist = ['__proto__', 'prototype', 'constructor']
var blacklistFilter = function (part) { return blacklist.indexOf(part) === -1 }

function parsePath (path, sep) {
  if (path.indexOf('[') >= 0) {
    path = path.replace(/\[/g, '.').replace(/]/g, '')
  }

  var parts = path.split(sep)

  var check = parts.filter(blacklistFilter)

  if (check.length !== parts.length) {
    throw Error('Refusing to update blacklisted property ' + path)
  }

  return parts
}

var hasOwnProperty = Object.prototype.hasOwnProperty

function DotObject (separator, override, useArray, useBrackets) {
  if (!(this instanceof DotObject)) {
    return new DotObject(separator, override, useArray, useBrackets)
  }

  if (typeof override === 'undefined') override = false
  if (typeof useArray === 'undefined') useArray = true
  if (typeof useBrackets === 'undefined') useBrackets = true
  this.separator = separator || '.'
  this.override = override
  this.useArray = useArray
  this.useBrackets = useBrackets
  this.keepArray = false

  // contains touched arrays
  this.cleanup = []
}

var dotDefault = new DotObject('.', false, true, true)
function wrap (method) {
  return function () {
    return dotDefault[method].apply(dotDefault, arguments)
  }
}

DotObject.prototype._fill = function (a, obj, v, mod) {
  var k = a.shift()

  if (a.length > 0) {
    obj[k] = obj[k] || (this.useArray && isIndex(a[0]) ? [] : {})

    if (!isArrayOrObject(obj[k])) {
      if (this.override) {
        obj[k] = {}
      } else {
        if (!(isArrayOrObject(v) && isEmptyObject(v))) {
          throw new Error(
            'Trying to redefine `' + k + '` which is a ' + typeof obj[k]
          )
        }

        return
      }
    }

    this._fill(a, obj[k], v, mod)
  } else {
    if (!this.override && isArrayOrObject(obj[k]) && !isEmptyObject(obj[k])) {
      if (!(isArrayOrObject(v) && isEmptyObject(v))) {
        throw new Error("Trying to redefine non-empty obj['" + k + "']")
      }

      return
    }

    obj[k] = _process(v, mod)
  }
}

/**
 *
 * Converts an object with dotted-key/value pairs to it's expanded version
 *
 * Optionally transformed by a set of modifiers.
 *
 * Usage:
 *
 *   var row = {
 *     'nr': 200,
 *     'doc.name': '  My Document  '
 *   }
 *
 *   var mods = {
 *     'doc.name': [_s.trim, _s.underscored]
 *   }
 *
 *   dot.object(row, mods)
 *
 * @param {Object} obj
 * @param {Object} mods
 */
DotObject.prototype.object = function (obj, mods) {
  var self = this

  Object.keys(obj).forEach(function (k) {
    var mod = mods === undefined ? null : mods[k]
    // normalize array notation.
    var ok = parsePath(k, self.separator).join(self.separator)

    if (ok.indexOf(self.separator) !== -1) {
      self._fill(ok.split(self.separator), obj, obj[k], mod)
      delete obj[k]
    } else {
      obj[k] = _process(obj[k], mod)
    }
  })

  return obj
}

/**
 * @param {String} path dotted path
 * @param {String} v value to be set
 * @param {Object} obj object to be modified
 * @param {Function|Array} mod optional modifier
 */
DotObject.prototype.str = function (path, v, obj, mod) {
  var ok = parsePath(path, this.separator).join(this.separator)

  if (path.indexOf(this.separator) !== -1) {
    this._fill(ok.split(this.separator), obj, v, mod)
  } else {
    obj[path] = _process(v, mod)
  }

  return obj
}

/**
 *
 * Pick a value from an object using dot notation.
 *
 * Optionally remove the value
 *
 * @param {String} path
 * @param {Object} obj
 * @param {Boolean} remove
 */
DotObject.prototype.pick = function (path, obj, remove, reindexArray) {
  var i
  var keys
  var val
  var key
  var cp

  keys = parsePath(path, this.separator)
  for (i = 0; i < keys.length; i++) {
    key = parseKey(keys[i], obj)
    if (obj && typeof obj === 'object' && key in obj) {
      if (i === keys.length - 1) {
        if (remove) {
          val = obj[key]
          if (reindexArray && Array.isArray(obj)) {
            obj.splice(key, 1)
          } else {
            delete obj[key]
          }
          if (Array.isArray(obj)) {
            cp = keys.slice(0, -1).join('.')
            if (this.cleanup.indexOf(cp) === -1) {
              this.cleanup.push(cp)
            }
          }
          return val
        } else {
          return obj[key]
        }
      } else {
        obj = obj[key]
      }
    } else {
      return undefined
    }
  }
  if (remove && Array.isArray(obj)) {
    obj = obj.filter(function (n) {
      return n !== undefined
    })
  }
  return obj
}
/**
 *
 * Delete value from an object using dot notation.
 *
 * @param {String} path
 * @param {Object} obj
 * @return {any} The removed value
 */
DotObject.prototype.delete = function (path, obj) {
  return this.remove(path, obj, true)
}

/**
 *
 * Remove value from an object using dot notation.
 *
 * Will remove multiple items if path is an array.
 * In this case array indexes will be retained until all
 * removals have been processed.
 *
 * Use dot.delete() to automatically  re-index arrays.
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */
DotObject.prototype.remove = function (path, obj, reindexArray) {
  var i

  this.cleanup = []
  if (Array.isArray(path)) {
    for (i = 0; i < path.length; i++) {
      this.pick(path[i], obj, true, reindexArray)
    }
    if (!reindexArray) {
      this._cleanup(obj)
    }
    return obj
  } else {
    return this.pick(path, obj, true, reindexArray)
  }
}

DotObject.prototype._cleanup = function (obj) {
  var ret
  var i
  var keys
  var root
  if (this.cleanup.length) {
    for (i = 0; i < this.cleanup.length; i++) {
      keys = this.cleanup[i].split('.')
      root = keys.splice(0, -1).join('.')
      ret = root ? this.pick(root, obj) : obj
      ret = ret[keys[0]].filter(function (v) {
        return v !== undefined
      })
      this.set(this.cleanup[i], ret, obj)
    }
    this.cleanup = []
  }
}

/**
 * Alias method  for `dot.remove`
 *
 * Note: this is not an alias for dot.delete()
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */
DotObject.prototype.del = DotObject.prototype.remove

/**
 *
 * Move a property from one place to the other.
 *
 * If the source path does not exist (undefined)
 * the target property will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.move = function (source, target, obj, mods, merge) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(target, _process(this.pick(source, obj, true), mods), obj, merge)
  } else {
    merge = mods
    this.set(target, this.pick(source, obj, true), obj, merge)
  }

  return obj
}

/**
 *
 * Transfer a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.transfer = function (
  source,
  target,
  obj1,
  obj2,
  mods,
  merge
) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(
      target,
      _process(this.pick(source, obj1, true), mods),
      obj2,
      merge
    )
  } else {
    merge = mods
    this.set(target, this.pick(source, obj1, true), obj2, merge)
  }

  return obj2
}

/**
 *
 * Copy a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.copy = function (source, target, obj1, obj2, mods, merge) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(
      target,
      _process(
        // clone what is picked
        JSON.parse(JSON.stringify(this.pick(source, obj1, false))),
        mods
      ),
      obj2,
      merge
    )
  } else {
    merge = mods
    this.set(target, this.pick(source, obj1, false), obj2, merge)
  }

  return obj2
}

/**
 *
 * Set a property on an object using dot notation.
 *
 * @param {String} path
 * @param {any} val
 * @param {Object} obj
 * @param {Boolean} merge
 */
DotObject.prototype.set = function (path, val, obj, merge) {
  var i
  var k
  var keys
  var key

  // Do not operate if the value is undefined.
  if (typeof val === 'undefined') {
    return obj
  }
  keys = parsePath(path, this.separator)

  for (i = 0; i < keys.length; i++) {
    key = keys[i]
    if (i === keys.length - 1) {
      if (merge && isObject(val) && isObject(obj[key])) {
        for (k in val) {
          if (hasOwnProperty.call(val, k)) {
            obj[key][k] = val[k]
          }
        }
      } else if (merge && Array.isArray(obj[key]) && Array.isArray(val)) {
        for (var j = 0; j < val.length; j++) {
          obj[keys[i]].push(val[j])
        }
      } else {
        obj[key] = val
      }
    } else if (
      // force the value to be an object
      !hasOwnProperty.call(obj, key) ||
      (!isObject(obj[key]) && !Array.isArray(obj[key]))
    ) {
      // initialize as array if next key is numeric
      if (/^\d+$/.test(keys[i + 1])) {
        obj[key] = []
      } else {
        obj[key] = {}
      }
    }
    obj = obj[key]
  }
  return obj
}

/**
 *
 * Transform an object
 *
 * Usage:
 *
 *   var obj = {
 *     "id": 1,
 *    "some": {
 *      "thing": "else"
 *    }
 *   }
 *
 *   var transform = {
 *     "id": "nr",
 *    "some.thing": "name"
 *   }
 *
 *   var tgt = dot.transform(transform, obj)
 *
 * @param {Object} recipe Transform recipe
 * @param {Object} obj Object to be transformed
 * @param {Array} mods modifiers for the target
 */
DotObject.prototype.transform = function (recipe, obj, tgt) {
  obj = obj || {}
  tgt = tgt || {}
  Object.keys(recipe).forEach(
    function (key) {
      this.set(recipe[key], this.pick(key, obj), tgt)
    }.bind(this)
  )
  return tgt
}

/**
 *
 * Convert object to dotted-key/value pair
 *
 * Usage:
 *
 *   var tgt = dot.dot(obj)
 *
 *   or
 *
 *   var tgt = {}
 *   dot.dot(obj, tgt)
 *
 * @param {Object} obj source object
 * @param {Object} tgt target object
 * @param {Array} path path array (internal)
 */
DotObject.prototype.dot = function (obj, tgt, path) {
  tgt = tgt || {}
  path = path || []
  var isArray = Array.isArray(obj)

  Object.keys(obj).forEach(
    function (key) {
      var index = isArray && this.useBrackets ? '[' + key + ']' : key
      if (
        isArrayOrObject(obj[key]) &&
        ((isObject(obj[key]) && !isEmptyObject(obj[key])) ||
          (Array.isArray(obj[key]) && !this.keepArray && obj[key].length !== 0))
      ) {
        if (isArray && this.useBrackets) {
          var previousKey = path[path.length - 1] || ''
          return this.dot(
            obj[key],
            tgt,
            path.slice(0, -1).concat(previousKey + index)
          )
        } else {
          return this.dot(obj[key], tgt, path.concat(index))
        }
      } else {
        if (isArray && this.useBrackets) {
          tgt[path.join(this.separator).concat('[' + key + ']')] = obj[key]
        } else {
          tgt[path.concat(index).join(this.separator)] = obj[key]
        }
      }
    }.bind(this)
  )
  return tgt
}

DotObject.pick = wrap('pick')
DotObject.move = wrap('move')
DotObject.transfer = wrap('transfer')
DotObject.transform = wrap('transform')
DotObject.copy = wrap('copy')
DotObject.object = wrap('object')
DotObject.str = wrap('str')
DotObject.set = wrap('set')
DotObject.delete = wrap('delete')
DotObject.del = DotObject.remove = wrap('remove')
DotObject.dot = wrap('dot');
['override', 'overwrite'].forEach(function (prop) {
  Object.defineProperty(DotObject, prop, {
    get: function () {
      return dotDefault.override
    },
    set: function (val) {
      dotDefault.override = !!val
    }
  })
});
['useArray', 'keepArray', 'useBrackets'].forEach(function (prop) {
  Object.defineProperty(DotObject, prop, {
    get: function () {
      return dotDefault[prop]
    },
    set: function (val) {
      dotDefault[prop] = val
    }
  })
})

DotObject._process = _process

module.exports = DotObject


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/lottie-web/build/player/lottie.js":
/*!********************************************************!*\
  !*** ./node_modules/lottie-web/build/player/lottie.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(typeof navigator !== "undefined") && (function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}((window || {}), function(window) {
	"use strict";
var svgNS = "http://www.w3.org/2000/svg";

var locationHref = '';

var initialDefaultFrame = -999999;

var subframeEnabled = true;
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bm_rounder = Math.round;
var bm_rnd;
var bm_pow = Math.pow;
var bm_sqrt = Math.sqrt;
var bm_abs = Math.abs;
var bm_floor = Math.floor;
var bm_max = Math.max;
var bm_min = Math.min;
var blitter = 10;

var BMMath = {};
(function(){
    var propertyNames = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"];
    var i, len = propertyNames.length;
    for(i=0;i<len;i+=1){
        BMMath[propertyNames[i]] = Math[propertyNames[i]];
    }
}());

function ProjectInterface(){return {};}

BMMath.random = Math.random;
BMMath.abs = function(val){
    var tOfVal = typeof val;
    if(tOfVal === 'object' && val.length){
        var absArr = createSizedArray(val.length);
        var i, len = val.length;
        for(i=0;i<len;i+=1){
            absArr[i] = Math.abs(val[i]);
        }
        return absArr;
    }
    return Math.abs(val);

};
var defaultCurveSegments = 150;
var degToRads = Math.PI/180;
var roundCorner = 0.5519;

function roundValues(flag){
    if(flag){
        bm_rnd = Math.round;
    }else{
        bm_rnd = function(val){
            return val;
        };
    }
}
roundValues(false);

function styleDiv(element){
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.display = 'block';
    element.style.transformOrigin = element.style.webkitTransformOrigin = '0 0';
    element.style.backfaceVisibility  = element.style.webkitBackfaceVisibility = 'visible';
    element.style.transformStyle = element.style.webkitTransformStyle = element.style.mozTransformStyle = "preserve-3d";
}

function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier){
    this.type = type;
    this.currentTime = currentTime;
    this.totalTime = totalTime;
    this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteEvent(type, frameMultiplier){
    this.type = type;
    this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier){
    this.type = type;
    this.currentLoop = currentLoop;
    this.totalLoops = totalLoops;
    this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMSegmentStartEvent(type, firstFrame, totalFrames){
    this.type = type;
    this.firstFrame = firstFrame;
    this.totalFrames = totalFrames;
}

function BMDestroyEvent(type, target){
    this.type = type;
    this.target = target;
}

function BMRenderFrameErrorEvent(nativeError, currentTime) {
    this.type = 'renderFrameError';
    this.nativeError = nativeError;
    this.currentTime = currentTime;
}

function BMConfigErrorEvent(nativeError) {
    this.type = 'configError';
    this.nativeError = nativeError;
}

function BMAnimationConfigErrorEvent(type, nativeError) {
    this.type = type;
    this.nativeError = nativeError;
    this.currentTime = currentTime;
}

var createElementID = (function(){
    var _count = 0;
    return function createID() {
        return '__lottie_element_' + ++_count
    }
}())

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }
    return [ r,
        g,
         b ];
}

function RGBtoHSV(r, g, b) {
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return [
         h,
         s,
         v
    ];
}

function addSaturationToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[1] += offset;
    if (hsv[1] > 1) {
        hsv[1] = 1;
    }
    else if (hsv[1] <= 0) {
        hsv[1] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addBrightnessToRGB(color,offset){
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[2] += offset;
    if (hsv[2] > 1) {
        hsv[2] = 1;
    }
    else if (hsv[2] < 0) {
        hsv[2] = 0;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

function addHueToRGB(color,offset) {
    var hsv = RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);
    hsv[0] += offset/360;
    if (hsv[0] > 1) {
        hsv[0] -= 1;
    }
    else if (hsv[0] < 0) {
        hsv[0] += 1;
    }
    return HSVtoRGB(hsv[0],hsv[1],hsv[2]);
}

var rgbToHex = (function(){
    var colorMap = [];
    var i;
    var hex;
    for(i=0;i<256;i+=1){
        hex = i.toString(16);
        colorMap[i] = hex.length == 1 ? '0' + hex : hex;
    }

    return function(r, g, b) {
        if(r<0){
            r = 0;
        }
        if(g<0){
            g = 0;
        }
        if(b<0){
            b = 0;
        }
        return '#' + colorMap[r] + colorMap[g] + colorMap[b];
    };
}());
function BaseEvent(){}
BaseEvent.prototype = {
	triggerEvent: function (eventName, args) {
	    if (this._cbs[eventName]) {
	        var len = this._cbs[eventName].length;
	        for (var i = 0; i < len; i++){
	            this._cbs[eventName][i](args);
	        }
	    }
	},
	addEventListener: function (eventName, callback) {
	    if (!this._cbs[eventName]){
	        this._cbs[eventName] = [];
	    }
	    this._cbs[eventName].push(callback);

		return function() {
			this.removeEventListener(eventName, callback);
		}.bind(this);
	},
	removeEventListener: function (eventName,callback){
	    if (!callback){
	        this._cbs[eventName] = null;
	    }else if(this._cbs[eventName]){
	        var i = 0, len = this._cbs[eventName].length;
	        while(i<len){
	            if(this._cbs[eventName][i] === callback){
	                this._cbs[eventName].splice(i,1);
	                i -=1;
	                len -= 1;
	            }
	            i += 1;
	        }
	        if(!this._cbs[eventName].length){
	            this._cbs[eventName] = null;
	        }
	    }
	}
};
var createTypedArray = (function(){
	function createRegularArray(type, len){
		var i = 0, arr = [], value;
		switch(type) {
			case 'int16':
			case 'uint8c':
				value = 1;
				break;
			default:
				value = 1.1;
				break;
		}
		for(i = 0; i < len; i += 1) {
			arr.push(value);
		}
		return arr;
	}
	function createTypedArray(type, len){
		if(type === 'float32') {
			return new Float32Array(len);
		} else if(type === 'int16') {
			return new Int16Array(len);
		} else if(type === 'uint8c') {
			return new Uint8ClampedArray(len);
		}
	}
	if(typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
		return createTypedArray;
	} else {
		return createRegularArray;
	}
}());

function createSizedArray(len) {
	return Array.apply(null,{length:len});
}
function createNS(type) {
	//return {appendChild:function(){},setAttribute:function(){},style:{}}
	return document.createElementNS(svgNS, type);
}
function createTag(type) {
	//return {appendChild:function(){},setAttribute:function(){},style:{}}
	return document.createElement(type);
}
function DynamicPropertyContainer(){};
DynamicPropertyContainer.prototype = {
	addDynamicProperty: function(prop) {
		if(this.dynamicProperties.indexOf(prop) === -1) {
	        this.dynamicProperties.push(prop);
	        this.container.addDynamicProperty(this);
	    	this._isAnimated = true;
	    }
	},
	iterateDynamicProperties: function(){
	    this._mdf = false;
	    var i, len = this.dynamicProperties.length;
	    for(i=0;i<len;i+=1){
	        this.dynamicProperties[i].getValue();
	        if(this.dynamicProperties[i]._mdf) {
	            this._mdf = true;
	        }
	    }
	},
	initDynamicPropertyContainer: function(container){
	    this.container = container;
	    this.dynamicProperties = [];
	    this._mdf = false;
	    this._isAnimated = false;
	}
}
var getBlendMode = (function() {

	var blendModeEnums = {
        0:'source-over',
        1:'multiply',
        2:'screen',
        3:'overlay',
        4:'darken',
        5:'lighten',
        6:'color-dodge',
        7:'color-burn',
        8:'hard-light',
        9:'soft-light',
        10:'difference',
        11:'exclusion',
        12:'hue',
        13:'saturation',
        14:'color',
        15:'luminosity'
    }

	return function(mode) {
		return blendModeEnums[mode] || '';
	}
}())
/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function(){

    var _cos = Math.cos;
    var _sin = Math.sin;
    var _tan = Math.tan;
    var _rnd = Math.round;

    function reset(){
        this.props[0] = 1;
        this.props[1] = 0;
        this.props[2] = 0;
        this.props[3] = 0;
        this.props[4] = 0;
        this.props[5] = 1;
        this.props[6] = 0;
        this.props[7] = 0;
        this.props[8] = 0;
        this.props[9] = 0;
        this.props[10] = 1;
        this.props[11] = 0;
        this.props[12] = 0;
        this.props[13] = 0;
        this.props[14] = 0;
        this.props[15] = 1;
        return this;
    }

    function rotate(angle) {
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
    }

    function rotateX(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin,  mCos, 0, 0, 0, 0, 1);
    }

    function rotateY(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos,  0,  mSin, 0, 0, 1, 0, 0, -mSin,  0,  mCos, 0, 0, 0, 0, 1);
    }

    function rotateZ(angle){
        if(angle === 0){
            return this;
        }
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
    }

    function shear(sx,sy){
        return this._t(1, sy, sx, 1, 0, 0);
    }

    function skew(ax, ay){
        return this.shear(_tan(ax), _tan(ay));
    }

    function skewFromAxis(ax, angle){
        var mCos = _cos(angle);
        var mSin = _sin(angle);
        return this._t(mCos, mSin,  0, 0, -mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1)
            ._t(1, 0,  0, 0, _tan(ax),  1, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1)
            ._t(mCos, -mSin,  0, 0, mSin,  mCos, 0, 0, 0,  0,  1, 0, 0, 0, 0, 1);
        //return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
    }

    function scale(sx, sy, sz) {
        if(!sz && sz !== 0) {
            sz = 1;
        }
        if(sx === 1 && sy === 1 && sz === 1){
            return this;
        }
        return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }

    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.props[0] = a;
        this.props[1] = b;
        this.props[2] = c;
        this.props[3] = d;
        this.props[4] = e;
        this.props[5] = f;
        this.props[6] = g;
        this.props[7] = h;
        this.props[8] = i;
        this.props[9] = j;
        this.props[10] = k;
        this.props[11] = l;
        this.props[12] = m;
        this.props[13] = n;
        this.props[14] = o;
        this.props[15] = p;
        return this;
    }

    function translate(tx, ty, tz) {
        tz = tz || 0;
        if(tx !== 0 || ty !== 0 || tz !== 0){
            return this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1);
        }
        return this;
    }

    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {

        var _p = this.props;

        if(a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0){
            //NOTE: commenting this condition because TurboFan deoptimizes code when present
            //if(m2 !== 0 || n2 !== 0 || o2 !== 0){
                _p[12] = _p[12] * a2 + _p[15] * m2;
                _p[13] = _p[13] * f2 + _p[15] * n2;
                _p[14] = _p[14] * k2 + _p[15] * o2;
                _p[15] = _p[15] * p2;
            //}
            this._identityCalculated = false;
            return this;
        }

        var a1 = _p[0];
        var b1 = _p[1];
        var c1 = _p[2];
        var d1 = _p[3];
        var e1 = _p[4];
        var f1 = _p[5];
        var g1 = _p[6];
        var h1 = _p[7];
        var i1 = _p[8];
        var j1 = _p[9];
        var k1 = _p[10];
        var l1 = _p[11];
        var m1 = _p[12];
        var n1 = _p[13];
        var o1 = _p[14];
        var p1 = _p[15];

        /* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */
        _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
        _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2 ;
        _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2 ;
        _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2 ;

        _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2 ;
        _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2 ;
        _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2 ;
        _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2 ;

        _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2 ;
        _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2 ;
        _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2 ;
        _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2 ;

        _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2 ;
        _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2 ;
        _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2 ;
        _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2 ;

        this._identityCalculated = false;
        return this;
    }

    function isIdentity() {
        if(!this._identityCalculated){
            this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
            this._identityCalculated = true;
        }
        return this._identity;
    }

    function equals(matr){
        var i = 0;
        while (i < 16) {
            if(matr.props[i] !== this.props[i]) {
                return false;
            }
            i+=1;
        }
        return true;
    }

    function clone(matr){
        var i;
        for(i=0;i<16;i+=1){
            matr.props[i] = this.props[i];
        }
    }

    function cloneFromProps(props){
        var i;
        for(i=0;i<16;i+=1){
            this.props[i] = props[i];
        }
    }

    function applyToPoint(x, y, z) {

        return {
            x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
            y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
            z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
        };
        /*return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         };*/
    }
    function applyToX(x, y, z) {
        return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
    }
    function applyToY(x, y, z) {
        return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
    }
    function applyToZ(x, y, z) {
        return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
    }

    function getInverseMatrix() {
        var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
        var a = this.props[5]/determinant;
        var b = - this.props[1]/determinant;
        var c = - this.props[4]/determinant;
        var d = this.props[0]/determinant;
        var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12])/determinant;
        var f = - (this.props[0] * this.props[13] - this.props[1] * this.props[12])/determinant;
        var inverseMatrix = new Matrix();
        inverseMatrix.props[0] = a;
        inverseMatrix.props[1] = b;
        inverseMatrix.props[4] = c;
        inverseMatrix.props[5] = d;
        inverseMatrix.props[12] = e;
        inverseMatrix.props[13] = f;
        return inverseMatrix;
    }

    function inversePoint(pt) {
        var inverseMatrix = this.getInverseMatrix();
        return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0)
    }

    function inversePoints(pts){
        var i, len = pts.length, retPts = [];
        for(i=0;i<len;i+=1){
            retPts[i] = inversePoint(pts[i]);
        }
        return retPts;
    }

    function applyToTriplePoints(pt1, pt2, pt3) {
        var arr = createTypedArray('float32', 6);
        if(this.isIdentity()) {
            arr[0] = pt1[0];
            arr[1] = pt1[1];
            arr[2] = pt2[0];
            arr[3] = pt2[1];
            arr[4] = pt3[0];
            arr[5] = pt3[1];
        } else {
            var p0 = this.props[0], p1 = this.props[1], p4 = this.props[4], p5 = this.props[5], p12 = this.props[12], p13 = this.props[13];
            arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
            arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
            arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
            arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
            arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
            arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
        }
        return arr;
    }

    function applyToPointArray(x,y,z){
        var arr;
        if(this.isIdentity()) {
            arr = [x,y,z];
        } else {
            arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
        }
        return arr;
    }

    function applyToPointStringified(x, y) {
        if(this.isIdentity()) {
            return x + ',' + y;
        }
        var _p = this.props;
        return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100+','+ Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
    }

    function toCSS() {
        //Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
        /*if(this.isIdentity()) {
            return '';
        }*/
        var i = 0;
        var props = this.props;
        var cssValue = 'matrix3d(';
        var v = 10000;
        while(i<16){
            cssValue += _rnd(props[i]*v)/v;
            cssValue += i === 15 ? ')':',';
            i += 1;
        }
        return cssValue;
    }

    function roundMatrixProperty(val) {
        var v = 10000;
        if((val < 0.000001 && val > 0) || (val > -0.000001 && val < 0)) {
            return _rnd(val * v) / v;
        }
        return val;
    }

    function to2dCSS() {
        //Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
        /*if(this.isIdentity()) {
            return '';
        }*/
        var props = this.props;
        var _a = roundMatrixProperty(props[0]);
        var _b = roundMatrixProperty(props[1]);
        var _c = roundMatrixProperty(props[4]);
        var _d = roundMatrixProperty(props[5]);
        var _e = roundMatrixProperty(props[12]);
        var _f = roundMatrixProperty(props[13]);
        return "matrix(" + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ")";
    }

    return function(){
        this.reset = reset;
        this.rotate = rotate;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
        this.skew = skew;
        this.skewFromAxis = skewFromAxis;
        this.shear = shear;
        this.scale = scale;
        this.setTransform = setTransform;
        this.translate = translate;
        this.transform = transform;
        this.applyToPoint = applyToPoint;
        this.applyToX = applyToX;
        this.applyToY = applyToY;
        this.applyToZ = applyToZ;
        this.applyToPointArray = applyToPointArray;
        this.applyToTriplePoints = applyToTriplePoints;
        this.applyToPointStringified = applyToPointStringified;
        this.toCSS = toCSS;
        this.to2dCSS = to2dCSS;
        this.clone = clone;
        this.cloneFromProps = cloneFromProps;
        this.equals = equals;
        this.inversePoints = inversePoints;
        this.inversePoint = inversePoint;
        this.getInverseMatrix = getInverseMatrix;
        this._t = this.transform;
        this.isIdentity = isIdentity;
        this._identity = true;
        this._identityCalculated = false;

        this.props = createTypedArray('float32', 16);
        this.reset();
    };
}());

/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
    function seedrandom(seed, options, callback) {
        var key = [];
        options = (options === true) ? { entropy: true } : (options || {});

        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] :
                (seed === null) ? autoseed() : seed, 3), key);

        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
                d = startdenom,                 //   and denominator d = 2 ^ 48.
                x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        prng.int32 = function() { return arc4.g(4) | 0; };
        prng.quick = function() { return arc4.g(4) / 0x100000000; };
        prng.double = prng;

        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);

        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) { copy(state, arc4); }
                // Only provide the .state method if requested via options.state.
                prng.state = function() { return copy(arc4, {}); };
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
        })(
            prng,
            shortseed,
            'global' in options ? options.global : (this == math),
            options.state);
    }
    math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
    function ARC4(key) {
        var t, keylen = key.length,
            me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) {
            s[i] = i++;
        }
        for (i = 0; i < width; i++) {
            s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
            s[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0,
                i = me.i, j = me.j, s = me.S;
            while (count--) {
                t = s[i = mask & (i + 1)];
                r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
            }
            me.i = i; me.j = j;
            return r;
            // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
        };
    }

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
    function flatten(obj, depth) {
        var result = [], typ = (typeof obj), prop;
        if (depth && typ == 'object') {
            for (prop in obj) {
                try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
            }
        }
        return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while (j < stringseed.length) {
            key[mask & j] =
                mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
        }
        return tostring(key);
    }

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
    function autoseed() {
        try {
            if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
            var out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
        } catch (e) {
            var browser = global.navigator,
                plugins = browser && browser.plugins;
            return [+new Date(), global, plugins, global.screen, tostring(pool)];
        }
    }

//
// tostring()
// Converts an array of charcodes to a string
//
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
    mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//

// End anonymous scope, and pass initial values.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
var BezierFactory = (function(){
    /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

        var ob = {};
    ob.getBezierEasing = getBezierEasing;
    var beziers = {};

    function getBezierEasing(a,b,c,d,nm){
        var str = nm || ('bez_' + a+'_'+b+'_'+c+'_'+d).replace(/\./g, 'p');
        if(beziers[str]){
            return beziers[str];
        }
        var bezEasing = new BezierEasing([a,b,c,d]);
        beziers[str] = bezEasing;
        return bezEasing;
    }

// These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;

    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    var float32ArraySupported = typeof Float32Array === "function";

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
    function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    function calcBezier (aT, aA1, aA2) {
        return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
    }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    function getSlope (aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide (aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    }

    function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }

    /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
     */
    function BezierEasing (points) {
        this._p = points;
        this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        this._precomputed = false;

        this.get = this.get.bind(this);
    }

    BezierEasing.prototype = {

        get: function (x) {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            if (!this._precomputed) this._precompute();
            if (mX1 === mY1 && mX2 === mY2) return x; // linear
            // Because JavaScript number are imprecise, we should guarantee the extremes are right.
            if (x === 0) return 0;
            if (x === 1) return 1;
            return calcBezier(this._getTForX(x), mY1, mY2);
        },

        // Private part

        _precompute: function () {
            var mX1 = this._p[0],
                mY1 = this._p[1],
                mX2 = this._p[2],
                mY2 = this._p[3];
            this._precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2)
                this._calcSampleValues();
        },

        _calcSampleValues: function () {
            var mX1 = this._p[0],
                mX2 = this._p[2];
            for (var i = 0; i < kSplineTableSize; ++i) {
                this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
        },

        /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
        _getTForX: function (aX) {
            var mX1 = this._p[0],
                mX2 = this._p[2],
                mSampleValues = this._mSampleValues;

            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
            }
            --currentSample;

            // Interpolate to provide an initial guess for t
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;

            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
        }
    };

    return ob;

}());
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if(!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if(!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

function extendPrototype(sources,destination){
    var i, len = sources.length, sourcePrototype;
    for (i = 0;i < len;i += 1) {
        sourcePrototype = sources[i].prototype;
        for (var attr in sourcePrototype) {
            if (sourcePrototype.hasOwnProperty(attr)) destination.prototype[attr] = sourcePrototype[attr];
        }
    }
}

function getDescriptor(object, prop) {
    return Object.getOwnPropertyDescriptor(object, prop);
}

function createProxyFunction(prototype) {
	function ProxyFunction(){}
	ProxyFunction.prototype = prototype;
	return ProxyFunction;
}
function bezFunction(){

    var easingFunctions = [];
    var math = Math;

    function pointOnLine2D(x1,y1, x2,y2, x3,y3){
        var det1 = (x1*y2) + (y1*x3) + (x2*y3) - (x3*y2) - (y3*x1) - (x2*y1);
        return det1 > -0.001 && det1 < 0.001;
    }

    function pointOnLine3D(x1,y1,z1, x2,y2,z2, x3,y3,z3){
        if(z1 === 0 && z2 === 0 && z3 === 0) {
            return pointOnLine2D(x1,y1, x2,y2, x3,y3);
        }
        var dist1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        var dist2 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2) + Math.pow(z3 - z1, 2));
        var dist3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2) + Math.pow(z3 - z2, 2));
        var diffDist;
        if(dist1 > dist2){
            if(dist1 > dist3){
                diffDist = dist1 - dist2 - dist3;
            } else {
                diffDist = dist3 - dist2 - dist1;
            }
        } else if(dist3 > dist2){
            diffDist = dist3 - dist2 - dist1;
        } else {
            diffDist = dist2 - dist1 - dist3;
        }
        return diffDist > -0.0001 && diffDist < 0.0001;
    }

    var getBezierLength = (function(){

        return function(pt1,pt2,pt3,pt4){
            var curveSegments = defaultCurveSegments;
            var k;
            var i, len;
            var ptCoord,perc,addedLength = 0;
            var ptDistance;
            var point = [],lastPoint = [];
            var lengthData = bezier_length_pool.newElement();
            len = pt3.length;
            for(k=0;k<curveSegments;k+=1){
                perc = k/(curveSegments-1);
                ptDistance = 0;
                for(i=0;i<len;i+=1){
                    ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*pt3[i]+3*(1-perc)*bm_pow(perc,2)*pt4[i]+bm_pow(perc,3)*pt2[i];
                    point[i] = ptCoord;
                    if(lastPoint[i] !== null){
                        ptDistance += bm_pow(point[i] - lastPoint[i],2);
                    }
                    lastPoint[i] = point[i];
                }
                if(ptDistance){
                    ptDistance = bm_sqrt(ptDistance);
                    addedLength += ptDistance;
                }
                lengthData.percents[k] = perc;
                lengthData.lengths[k] = addedLength;
            }
            lengthData.addedLength = addedLength;
            return lengthData;
        };
    }());

    function getSegmentsLength(shapeData) {
        var segmentsLength = segments_length_pool.newElement();
        var closed = shapeData.c;
        var pathV = shapeData.v;
        var pathO = shapeData.o;
        var pathI = shapeData.i;
        var i, len = shapeData._length;
        var lengths = segmentsLength.lengths;
        var totalLength = 0;
        for(i=0;i<len-1;i+=1){
            lengths[i] = getBezierLength(pathV[i],pathV[i+1],pathO[i],pathI[i+1]);
            totalLength += lengths[i].addedLength;
        }
        if(closed && len){
            lengths[i] = getBezierLength(pathV[i],pathV[0],pathO[i],pathI[0]);
            totalLength += lengths[i].addedLength;
        }
        segmentsLength.totalLength = totalLength;
        return segmentsLength;
    }

    function BezierData(length){
        this.segmentLength = 0;
        this.points = new Array(length);
    }

    function PointData(partial,point){
        this.partialLength = partial;
        this.point = point;
    }

    var buildBezierData = (function(){

        var storedData = {};

        return function (pt1, pt2, pt3, pt4){
            var bezierName = (pt1[0]+'_'+pt1[1]+'_'+pt2[0]+'_'+pt2[1]+'_'+pt3[0]+'_'+pt3[1]+'_'+pt4[0]+'_'+pt4[1]).replace(/\./g, 'p');
            if(!storedData[bezierName]){
                var curveSegments = defaultCurveSegments;
                var k, i, len;
                var ptCoord,perc,addedLength = 0;
                var ptDistance;
                var point,lastPoint = null;
                if (pt1.length === 2 && (pt1[0] != pt2[0] || pt1[1] != pt2[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt1[0]+pt3[0],pt1[1]+pt3[1]) && pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt2[0]+pt4[0],pt2[1]+pt4[1])){
                    curveSegments = 2;
                }
                var bezierData = new BezierData(curveSegments);
                len = pt3.length;
                for (k = 0; k < curveSegments; k += 1) {
                    point = createSizedArray(len);
                    perc = k / (curveSegments - 1);
                    ptDistance = 0;
                    for (i = 0; i < len; i += 1){
                        ptCoord = bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*(pt1[i] + pt3[i])+3*(1-perc)*bm_pow(perc,2)*(pt2[i] + pt4[i])+bm_pow(perc,3)*pt2[i];
                        point[i] = ptCoord;
                        if(lastPoint !== null){
                            ptDistance += bm_pow(point[i] - lastPoint[i],2);
                        }
                    }
                    ptDistance = bm_sqrt(ptDistance);
                    addedLength += ptDistance;
                    bezierData.points[k] = new PointData(ptDistance, point);
                    lastPoint = point;
                }
                bezierData.segmentLength = addedLength;
                storedData[bezierName] = bezierData;
            }
            return storedData[bezierName];
        };
    }());

    function getDistancePerc(perc,bezierData){
        var percents = bezierData.percents;
        var lengths = bezierData.lengths;
        var len = percents.length;
        var initPos = bm_floor((len-1)*perc);
        var lengthPos = perc*bezierData.addedLength;
        var lPerc = 0;
        if(initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]){
            return percents[initPos];
        }else{
            var dir = lengths[initPos] > lengthPos ? -1 : 1;
            var flag = true;
            while(flag){
                if(lengths[initPos] <= lengthPos && lengths[initPos+1] > lengthPos){
                    lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos+1] - lengths[initPos]);
                    flag = false;
                }else{
                    initPos += dir;
                }
                if(initPos < 0 || initPos >= len - 1){
                    //FIX for TypedArrays that don't store floating point values with enough accuracy
                    if(initPos === len - 1) {
                        return percents[initPos];
                    }
                    flag = false;
                }
            }
            return percents[initPos] + (percents[initPos+1] - percents[initPos])*lPerc;
        }
    }

    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
        var t1 = getDistancePerc(percent,bezierData);
        var u0 = 1;
        var u1 = 1 - t1;
        var ptX = Math.round((u1*u1*u1* pt1[0] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[0] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[0] + t1*t1*t1* pt2[0])* 1000) / 1000;
        var ptY = Math.round((u1*u1*u1* pt1[1] + (t1*u1*u1 + u1*t1*u1 + u1*u1*t1)* pt3[1] + (t1*t1*u1 + u1*t1*t1 + t1*u1*t1)*pt4[1] + t1*t1*t1* pt2[1])* 1000) / 1000;
        return [ptX, ptY];
    }

    function getSegmentArray() {

    }

    var bezier_segment_points = createTypedArray('float32', 8);

    function getNewSegment(pt1,pt2,pt3,pt4,startPerc,endPerc, bezierData){

        startPerc = startPerc < 0 ? 0 : startPerc > 1 ? 1 : startPerc;
        var t0 = getDistancePerc(startPerc,bezierData);
        endPerc = endPerc > 1 ? 1 : endPerc;
        var t1 = getDistancePerc(endPerc,bezierData);
        var i, len = pt1.length;
        var u0 = 1 - t0;
        var u1 = 1 - t1;
        var u0u0u0 = u0*u0*u0;
        var t0u0u0_3 = t0*u0*u0*3;
        var t0t0u0_3 = t0*t0*u0*3;
        var t0t0t0 = t0*t0*t0;
        //
        var u0u0u1 = u0*u0*u1;
        var t0u0u1_3 = t0*u0*u1 + u0*t0*u1 + u0*u0*t1;
        var t0t0u1_3 = t0*t0*u1 + u0*t0*t1 + t0*u0*t1;
        var t0t0t1 = t0*t0*t1;
        //
        var u0u1u1 = u0*u1*u1;
        var t0u1u1_3 = t0*u1*u1 + u0*t1*u1 + u0*u1*t1;
        var t0t1u1_3 = t0*t1*u1 + u0*t1*t1 + t0*u1*t1;
        var t0t1t1 = t0*t1*t1;
        //
        var u1u1u1 = u1*u1*u1;
        var t1u1u1_3 = t1*u1*u1 + u1*t1*u1 + u1*u1*t1;
        var t1t1u1_3 = t1*t1*u1 + u1*t1*t1 + t1*u1*t1;
        var t1t1t1 = t1*t1*t1;
        for(i=0;i<len;i+=1){
            bezier_segment_points[i * 4] = Math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 1] = Math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 2] = Math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000;
            bezier_segment_points[i * 4 + 3] = Math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000;
        }

        return bezier_segment_points;
    }

    return {
        getSegmentsLength : getSegmentsLength,
        getNewSegment : getNewSegment,
        getPointInSegment : getPointInSegment,
        buildBezierData : buildBezierData,
        pointOnLine2D : pointOnLine2D,
        pointOnLine3D : pointOnLine3D
    };
}

var bez = bezFunction();
function dataFunctionManager(){

    //var tCanvasHelper = createTag('canvas').getContext('2d');

    function completeLayers(layers, comps, fontManager){
        var layerData;
        var animArray, lastFrame;
        var i, len = layers.length;
        var j, jLen, k, kLen;
        for(i=0;i<len;i+=1){
            layerData = layers[i];
            if(!('ks' in layerData) || layerData.completed){
                continue;
            }
            layerData.completed = true;
            if(layerData.tt){
                layers[i-1].td = layerData.tt;
            }
            animArray = [];
            lastFrame = -1;
            if(layerData.hasMask){
                var maskProps = layerData.masksProperties;
                jLen = maskProps.length;
                for(j=0;j<jLen;j+=1){
                    if(maskProps[j].pt.k.i){
                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
                    }else{
                        kLen = maskProps[j].pt.k.length;
                        for(k=0;k<kLen;k+=1){
                            if(maskProps[j].pt.k[k].s){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                            }
                            if(maskProps[j].pt.k[k].e){
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                            }
                        }
                    }
                }
            }
            if(layerData.ty===0){
                layerData.layers = findCompLayers(layerData.refId, comps);
                completeLayers(layerData.layers,comps, fontManager);
            }else if(layerData.ty === 4){
                completeShapes(layerData.shapes);
            }else if(layerData.ty == 5){
                completeText(layerData, fontManager);
            }
        }
    }

    function findCompLayers(id,comps){
        var i = 0, len = comps.length;
        while(i<len){
            if(comps[i].id === id){
                if(!comps[i].layers.__used) {
                    comps[i].layers.__used = true;
                    return comps[i].layers;
                }
                return JSON.parse(JSON.stringify(comps[i].layers));
            }
            i += 1;
        }
    }

    function completeShapes(arr){
        var i, len = arr.length;
        var j, jLen;
        var hasPaths = false;
        for(i=len-1;i>=0;i-=1){
            if(arr[i].ty == 'sh'){
                if(arr[i].ks.k.i){
                    convertPathsToAbsoluteValues(arr[i].ks.k);
                }else{
                    jLen = arr[i].ks.k.length;
                    for(j=0;j<jLen;j+=1){
                        if(arr[i].ks.k[j].s){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                        }
                        if(arr[i].ks.k[j].e){
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                        }
                    }
                }
                hasPaths = true;
            }else if(arr[i].ty == 'gr'){
                completeShapes(arr[i].it);
            }
        }
        /*if(hasPaths){
            //mx: distance
            //ss: sensitivity
            //dc: decay
            arr.splice(arr.length-1,0,{
                "ty": "ms",
                "mx":20,
                "ss":10,
                 "dc":0.001,
                "maxDist":200
            });
        }*/
    }

    function convertPathsToAbsoluteValues(path){
        var i, len = path.i.length;
        for(i=0;i<len;i+=1){
            path.i[i][0] += path.v[i][0];
            path.i[i][1] += path.v[i][1];
            path.o[i][0] += path.v[i][0];
            path.o[i][1] += path.v[i][1];
        }
    }

    function checkVersion(minimum,animVersionString){
        var animVersion = animVersionString ? animVersionString.split('.') : [100,100,100];
        if(minimum[0]>animVersion[0]){
            return true;
        } else if(animVersion[0] > minimum[0]){
            return false;
        }
        if(minimum[1]>animVersion[1]){
            return true;
        } else if(animVersion[1] > minimum[1]){
            return false;
        }
        if(minimum[2]>animVersion[2]){
            return true;
        } else if(animVersion[2] > minimum[2]){
            return false;
        }
    }

    var checkText = (function(){
        var minimumVersion = [4,4,14];

        function updateTextLayer(textLayer){
            var documentData = textLayer.t.d;
            textLayer.t.d = {
                k: [
                    {
                        s:documentData,
                        t:0
                    }
                ]
            };
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 5){
                    updateTextLayer(layers[i]);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    var checkChars = (function() {
        var minimumVersion = [4,7,99];
        return function (animationData){
            if(animationData.chars && !checkVersion(minimumVersion,animationData.v)){
                var i, len = animationData.chars.length, j, jLen, k, kLen;
                var pathData, paths;
                for(i = 0; i < len; i += 1) {
                    if(animationData.chars[i].data && animationData.chars[i].data.shapes) {
                        paths = animationData.chars[i].data.shapes[0].it;
                        jLen = paths.length;

                        for(j = 0; j < jLen; j += 1) {
                            pathData = paths[j].ks.k;
                            if(!pathData.__converted) {
                                convertPathsToAbsoluteValues(paths[j].ks.k);
                                pathData.__converted = true;
                            }
                        }
                    }
                }
            }
        };
    }());

    var checkColors = (function(){
        var minimumVersion = [4,1,9];

        function iterateShapes(shapes){
            var i, len = shapes.length;
            var j, jLen;
            for(i=0;i<len;i+=1){
                if(shapes[i].ty === 'gr'){
                    iterateShapes(shapes[i].it);
                }else if(shapes[i].ty === 'fl' || shapes[i].ty === 'st'){
                    if(shapes[i].c.k && shapes[i].c.k[0].i){
                        jLen = shapes[i].c.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(shapes[i].c.k[j].s){
                                shapes[i].c.k[j].s[0] /= 255;
                                shapes[i].c.k[j].s[1] /= 255;
                                shapes[i].c.k[j].s[2] /= 255;
                                shapes[i].c.k[j].s[3] /= 255;
                            }
                            if(shapes[i].c.k[j].e){
                                shapes[i].c.k[j].e[0] /= 255;
                                shapes[i].c.k[j].e[1] /= 255;
                                shapes[i].c.k[j].e[2] /= 255;
                                shapes[i].c.k[j].e[3] /= 255;
                            }
                        }
                    } else {
                        shapes[i].c.k[0] /= 255;
                        shapes[i].c.k[1] /= 255;
                        shapes[i].c.k[2] /= 255;
                        shapes[i].c.k[3] /= 255;
                    }
                }
            }
        }

        function iterateLayers(layers){
            var i, len = layers.length;
            for(i=0;i<len;i+=1){
                if(layers[i].ty === 4){
                    iterateShapes(layers[i].shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    var checkShapes = (function(){
        var minimumVersion = [4,4,18];



        function completeShapes(arr){
            var i, len = arr.length;
            var j, jLen;
            var hasPaths = false;
            for(i=len-1;i>=0;i-=1){
                if(arr[i].ty == 'sh'){
                    if(arr[i].ks.k.i){
                        arr[i].ks.k.c = arr[i].closed;
                    }else{
                        jLen = arr[i].ks.k.length;
                        for(j=0;j<jLen;j+=1){
                            if(arr[i].ks.k[j].s){
                                arr[i].ks.k[j].s[0].c = arr[i].closed;
                            }
                            if(arr[i].ks.k[j].e){
                                arr[i].ks.k[j].e[0].c = arr[i].closed;
                            }
                        }
                    }
                    hasPaths = true;
                }else if(arr[i].ty == 'gr'){
                    completeShapes(arr[i].it);
                }
            }
        }

        function iterateLayers(layers){
            var layerData;
            var i, len = layers.length;
            var j, jLen, k, kLen;
            for(i=0;i<len;i+=1){
                layerData = layers[i];
                if(layerData.hasMask){
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;
                    for(j=0;j<jLen;j+=1){
                        if(maskProps[j].pt.k.i){
                            maskProps[j].pt.k.c = maskProps[j].cl;
                        }else{
                            kLen = maskProps[j].pt.k.length;
                            for(k=0;k<kLen;k+=1){
                                if(maskProps[j].pt.k[k].s){
                                    maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                                }
                                if(maskProps[j].pt.k[k].e){
                                    maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                                }
                            }
                        }
                    }
                }
                if(layerData.ty === 4){
                    completeShapes(layerData.shapes);
                }
            }
        }

        return function (animationData){
            if(checkVersion(minimumVersion,animationData.v)){
                iterateLayers(animationData.layers);
                if(animationData.assets){
                    var i, len = animationData.assets.length;
                    for(i=0;i<len;i+=1){
                        if(animationData.assets[i].layers){
                            iterateLayers(animationData.assets[i].layers);

                        }
                    }
                }
            }
        };
    }());

    function completeData(animationData, fontManager){
        if(animationData.__complete){
            return;
        }
        checkColors(animationData);
        checkText(animationData);
        checkChars(animationData);
        checkShapes(animationData);
        completeLayers(animationData.layers, animationData.assets, fontManager);
        animationData.__complete = true;
        //blitAnimation(animationData, animationData.assets, fontManager);
    }

    function completeText(data, fontManager){
        if(data.t.a.length === 0 && !('m' in data.t.p)){
            data.singleShape = true;
        }
    }

    var moduleOb = {};
    moduleOb.completeData = completeData;
    moduleOb.checkColors = checkColors;
    moduleOb.checkChars = checkChars;
    moduleOb.checkShapes = checkShapes;
    moduleOb.completeLayers = completeLayers;

    return moduleOb;
}

var dataManager = dataFunctionManager();

var FontManager = (function(){

    var maxWaitingTime = 5000;
    var emptyChar = {
        w: 0,
        size:0,
        shapes:[]
    };
    var combinedCharacters = [];
    //Hindi characters
    combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366
    , 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379
    , 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);

    function setUpNode(font, family){
        var parentNode = createTag('span');
        parentNode.style.fontFamily    = family;
        var node = createTag('span');
        // Characters that vary significantly among different fonts
        node.innerHTML = 'giItT1WQy@!-/#';
        // Visible - so we can measure it - but not on the screen
        parentNode.style.position      = 'absolute';
        parentNode.style.left          = '-10000px';
        parentNode.style.top           = '-10000px';
        // Large font size makes even subtle changes obvious
        parentNode.style.fontSize      = '300px';
        // Reset any font properties
        parentNode.style.fontVariant   = 'normal';
        parentNode.style.fontStyle     = 'normal';
        parentNode.style.fontWeight    = 'normal';
        parentNode.style.letterSpacing = '0';
        parentNode.appendChild(node);
        document.body.appendChild(parentNode);

        // Remember width with no applied web font
        var width = node.offsetWidth;
        node.style.fontFamily = font + ', '+family;
        return {node:node, w:width, parent:parentNode};
    }

    function checkLoadedFonts() {
        var i, len = this.fonts.length;
        var node, w;
        var loadedCount = len;
        for(i=0;i<len; i+= 1){
            if(this.fonts[i].loaded){
                loadedCount -= 1;
                continue;
            }
            if(this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0){
                this.fonts[i].loaded = true;
            } else{
                node = this.fonts[i].monoCase.node;
                w = this.fonts[i].monoCase.w;
                if(node.offsetWidth !== w){
                    loadedCount -= 1;
                    this.fonts[i].loaded = true;
                }else{
                    node = this.fonts[i].sansCase.node;
                    w = this.fonts[i].sansCase.w;
                    if(node.offsetWidth !== w){
                        loadedCount -= 1;
                        this.fonts[i].loaded = true;
                    }
                }
                if(this.fonts[i].loaded){
                    this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                    this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
                }
            }
        }

        if(loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime){
            setTimeout(this.checkLoadedFonts.bind(this),20);
        }else{
            setTimeout(function(){this.isLoaded = true;}.bind(this),0);

        }
    }

    function createHelper(def, fontData){
        var tHelper = createNS('text');
        tHelper.style.fontSize = '100px';
        //tHelper.style.fontFamily = fontData.fFamily;
        tHelper.setAttribute('font-family', fontData.fFamily);
        tHelper.setAttribute('font-style', fontData.fStyle);
        tHelper.setAttribute('font-weight', fontData.fWeight);
        tHelper.textContent = '1';
        if(fontData.fClass){
            tHelper.style.fontFamily = 'inherit';
            tHelper.setAttribute('class', fontData.fClass);
        } else {
            tHelper.style.fontFamily = fontData.fFamily;
        }
        def.appendChild(tHelper);
        var tCanvasHelper = createTag('canvas').getContext('2d');
        tCanvasHelper.font = fontData.fWeight + ' ' + fontData.fStyle + ' 100px '+ fontData.fFamily;
        //tCanvasHelper.font = ' 100px '+ fontData.fFamily;
        return tHelper;
    }

    function addFonts(fontData, defs){
        if(!fontData){
            this.isLoaded = true;
            return;
        }
        if(this.chars){
            this.isLoaded = true;
            this.fonts = fontData.list;
            return;
        }


        var fontArr = fontData.list;
        var i, len = fontArr.length;
        var _pendingFonts = len;
        for(i=0; i<len; i+= 1){
            var shouldLoadFont = true;
            var loadedSelector;
            var j;
            fontArr[i].loaded = false;
            fontArr[i].monoCase = setUpNode(fontArr[i].fFamily,'monospace');
            fontArr[i].sansCase = setUpNode(fontArr[i].fFamily,'sans-serif');
            if(!fontArr[i].fPath) {
                fontArr[i].loaded = true;
                _pendingFonts -= 1;
            }else if(fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3){
                loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="'+ fontArr[i].fFamily +'"], style[f-origin="3"][f-family="'+ fontArr[i].fFamily +'"]');

                if (loadedSelector.length > 0) {
                    shouldLoadFont = false;
                }

                if (shouldLoadFont) {
                    var s = createTag('style');
                    s.setAttribute('f-forigin', fontArr[i].fOrigin);
                    s.setAttribute('f-origin', fontArr[i].origin);
                    s.setAttribute('f-family', fontArr[i].fFamily);
                    s.type = "text/css";
                    s.innerHTML = "@font-face {" + "font-family: "+fontArr[i].fFamily+"; font-style: normal; src: url('"+fontArr[i].fPath+"');}";
                    defs.appendChild(s);
                }
            } else if(fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1){
                loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

                for (j = 0; j < loadedSelector.length; j++) {
                    if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
                        // Font is already loaded
                        shouldLoadFont = false;
                    }
                }

                if (shouldLoadFont) {
                    var l = createTag('link');
                    l.setAttribute('f-forigin', fontArr[i].fOrigin);
                    l.setAttribute('f-origin', fontArr[i].origin);
                    l.type = "text/css";
                    l.rel = "stylesheet";
                    l.href = fontArr[i].fPath;
                    document.body.appendChild(l);
                }
            } else if(fontArr[i].fOrigin === 't' || fontArr[i].origin === 2){
                loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

                for (j = 0; j < loadedSelector.length; j++) {
                    if (fontArr[i].fPath === loadedSelector[j].src) {
                        // Font is already loaded
                        shouldLoadFont = false;
                    }
                }

                if (shouldLoadFont) {
                    var sc = createTag('link');
                    sc.setAttribute('f-forigin', fontArr[i].fOrigin);
                    sc.setAttribute('f-origin', fontArr[i].origin);
                    sc.setAttribute('rel','stylesheet');
                    sc.setAttribute('href',fontArr[i].fPath);
                    defs.appendChild(sc);
                }
            }
            fontArr[i].helper = createHelper(defs,fontArr[i]);
            fontArr[i].cache = {};
            this.fonts.push(fontArr[i]);
        }
        if (_pendingFonts === 0) {
            this.isLoaded = true;
        } else {
            //On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
            //Adding this timeout seems to fix it
           setTimeout(this.checkLoadedFonts.bind(this), 100);
        }
    }

    function addChars(chars){
        if(!chars){
            return;
        }
        if(!this.chars){
            this.chars = [];
        }
        var i, len = chars.length;
        var j, jLen = this.chars.length, found;
        for(i=0;i<len;i+=1){
            j = 0;
            found = false;
            while(j<jLen){
                if(this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch){
                    found = true;
                }
                j += 1;
            }
            if(!found){
                this.chars.push(chars[i]);
                jLen += 1;
            }
        }
    }

    function getCharData(char, style, font){
        var i = 0, len = this.chars.length;
        while( i < len) {
            if(this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font){

                return this.chars[i];
            }
            i+= 1;
        }
        if((typeof char === 'string' && char.charCodeAt(0) !== 13 || !char) && console && console.warn) {
            console.warn('Missing character from exported characters list: ', char, style, font);
        }
        return emptyChar;
    }

    function measureText(char, fontName, size) {
        var fontData = this.getFontByName(fontName);
        var index = char.charCodeAt(0);
        if(!fontData.cache[index + 1]) {
            var tHelper = fontData.helper;
            //Canvas version
            //fontData.cache[index] = tHelper.measureText(char).width / 100;
            //SVG version
            //console.log(tHelper.getBBox().width)
            if (char === ' ') {
                tHelper.textContent = '|' + char + '|';
                var doubleSize = tHelper.getComputedTextLength();
                tHelper.textContent = '||';
                var singleSize = tHelper.getComputedTextLength();
                fontData.cache[index + 1] = (doubleSize - singleSize)/100;
            } else {
                tHelper.textContent = char;
                fontData.cache[index + 1] = (tHelper.getComputedTextLength())/100;
            }
        }
        return fontData.cache[index + 1] * size;
    }

    function getFontByName(name){
        var i = 0, len = this.fonts.length;
        while(i<len){
            if(this.fonts[i].fName === name) {
                return this.fonts[i];
            }
            i += 1;
        }
        return this.fonts[0];
    }

    function getCombinedCharacterCodes() {
        return combinedCharacters;
    }

    function loaded() {
        return this.isLoaded;
    }

    var Font = function(){
        this.fonts = [];
        this.chars = null;
        this.typekitLoaded = 0;
        this.isLoaded = false;
        this.initTime = Date.now();
    };
    //TODO: for now I'm adding these methods to the Class and not the prototype. Think of a better way to implement it. 
    Font.getCombinedCharacterCodes = getCombinedCharacterCodes;

    Font.prototype.addChars = addChars;
    Font.prototype.addFonts = addFonts;
    Font.prototype.getCharData = getCharData;
    Font.prototype.getFontByName = getFontByName;
    Font.prototype.measureText = measureText;
    Font.prototype.checkLoadedFonts = checkLoadedFonts;
    Font.prototype.loaded = loaded;

    return Font;

}());
var PropertyFactory = (function(){

    var initFrame = initialDefaultFrame;
    var math_abs = Math.abs;

    function interpolateValue(frameNum, caching) {
        var offsetTime = this.offsetTime;
        var newValue;
        if (this.propType === 'multidimensional') {
            newValue = createTypedArray('float32', this.pv.length);
        }
        var iterationIndex = caching.lastIndex;
        var i = iterationIndex;
        var len = this.keyframes.length - 1, flag = true;
        var keyData, nextKeyData;

        while (flag) {
            keyData = this.keyframes[i];
            nextKeyData = this.keyframes[i + 1];
            if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime){
                if(keyData.h){
                    keyData = nextKeyData;
                }
                iterationIndex = 0;
                break;
            }
            if ((nextKeyData.t - offsetTime) > frameNum){
                iterationIndex = i;
                break;
            }
            if (i < len - 1){
                i += 1;
            } else {
                iterationIndex = 0;
                flag = false;
            }
        }

        var k, kLen, perc, jLen, j, fnc;
        var nextKeyTime = nextKeyData.t - offsetTime;
        var keyTime = keyData.t - offsetTime;
        var endValue;
        if (keyData.to) {
            if (!keyData.bezierData) {
                keyData.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
            }
            var bezierData = keyData.bezierData;
            if (frameNum >= nextKeyTime || frameNum < keyTime) {
                var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
                kLen = bezierData.points[ind].point.length;
                for (k = 0; k < kLen; k += 1) {
                    newValue[k] = bezierData.points[ind].point[k];
                }
                // caching._lastKeyframeIndex = -1;
            } else {
                if (keyData.__fnct) {
                    fnc = keyData.__fnct;
                } else {
                    fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
                    keyData.__fnct = fnc;
                }
                perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
                var distanceInLine = bezierData.segmentLength*perc;

                var segmentPerc;
                var addedLength =  (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastAddedLength : 0;
                j =  (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastPoint : 0;
                flag = true;
                jLen = bezierData.points.length;
                while (flag) {
                    addedLength += bezierData.points[j].partialLength;
                    if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
                        kLen = bezierData.points[j].point.length;
                        for (k = 0; k < kLen; k += 1) {
                            newValue[k] = bezierData.points[j].point[k];
                        }
                        break;
                    } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
                        segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
                        kLen = bezierData.points[j].point.length;
                        for (k = 0; k < kLen; k += 1) {
                            newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
                        }
                        break;
                    }
                    if (j < jLen - 1){
                        j += 1;
                    } else {
                        flag = false;
                    }
                }
                caching._lastPoint = j;
                caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
                caching._lastKeyframeIndex = i;
            }
        } else {
            var outX, outY, inX, inY, keyValue;
            len = keyData.s.length;
            endValue = nextKeyData.s || keyData.e;
            if (this.sh && keyData.h !== 1) {
                if (frameNum >= nextKeyTime) {
                    newValue[0] = endValue[0];
                    newValue[1] = endValue[1];
                    newValue[2] = endValue[2];
                } else if (frameNum <= keyTime) {
                    newValue[0] = keyData.s[0];
                    newValue[1] = keyData.s[1];
                    newValue[2] = keyData.s[2];
                } else {
                    var quatStart = createQuaternion(keyData.s);
                    var quatEnd = createQuaternion(endValue);
                    var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
                    quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
                }
                
            } else {
                for(i = 0; i < len; i += 1) {
                    if (keyData.h !== 1) {
                        if (frameNum >= nextKeyTime) {
                            perc = 1;
                        } else if(frameNum < keyTime) {
                            perc = 0;
                        } else {
                            if(keyData.o.x.constructor === Array) {
                                if (!keyData.__fnct) {
                                    keyData.__fnct = [];
                                }
                                if (!keyData.__fnct[i]) {
                                    outX = (typeof keyData.o.x[i] === 'undefined') ? keyData.o.x[0] : keyData.o.x[i];
                                    outY = (typeof keyData.o.y[i] === 'undefined') ? keyData.o.y[0] : keyData.o.y[i];
                                    inX = (typeof keyData.i.x[i] === 'undefined') ? keyData.i.x[0] : keyData.i.x[i];
                                    inY = (typeof keyData.i.y[i] === 'undefined') ? keyData.i.y[0] : keyData.i.y[i];
                                    fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                                    keyData.__fnct[i] = fnc;
                                } else {
                                    fnc = keyData.__fnct[i];
                                }
                            } else {
                                if (!keyData.__fnct) {
                                    outX = keyData.o.x;
                                    outY = keyData.o.y;
                                    inX = keyData.i.x;
                                    inY = keyData.i.y;
                                    fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                                    keyData.__fnct = fnc;
                                } else {
                                    fnc = keyData.__fnct;
                                }
                            }
                            perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime ));
                        }
                    }

                    endValue = nextKeyData.s || keyData.e;
                    keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

                    if (this.propType === 'multidimensional') {
                        newValue[i] = keyValue;
                    } else {
                        newValue = keyValue;
                    }
                }
            }
        }
        caching.lastIndex = iterationIndex;
        return newValue;
    }

    //based on @Toji's https://github.com/toji/gl-matrix/
    function slerp(a, b, t) {
        var out = [];
        var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3]

        var omega, cosom, sinom, scale0, scale1;

        cosom = ax * bx + ay * by + az * bz + aw * bw;
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        if ((1.0 - cosom) > 0.000001) {
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        } else {
            scale0 = 1.0 - t;
            scale1 = t;
        }
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;

        return out;
    }

    function quaternionToEuler(out, quat) {
        var qx = quat[0];
        var qy = quat[1];
        var qz = quat[2];
        var qw = quat[3];
        var heading = Math.atan2(2*qy*qw-2*qx*qz , 1 - 2*qy*qy - 2*qz*qz)
        var attitude = Math.asin(2*qx*qy + 2*qz*qw) 
        var bank = Math.atan2(2*qx*qw-2*qy*qz , 1 - 2*qx*qx - 2*qz*qz);
        out[0] = heading/degToRads;
        out[1] = attitude/degToRads;
        out[2] = bank/degToRads;
    }

    function createQuaternion(values) {
        var heading = values[0] * degToRads;
        var attitude = values[1] * degToRads;
        var bank = values[2] * degToRads;
        var c1 = Math.cos(heading / 2);
        var c2 = Math.cos(attitude / 2);
        var c3 = Math.cos(bank / 2);
        var s1 = Math.sin(heading / 2);
        var s2 = Math.sin(attitude / 2);
        var s3 = Math.sin(bank / 2);
        var w = c1 * c2 * c3 - s1 * s2 * s3;
        var x = s1 * s2 * c3 + c1 * c2 * s3;
        var y = s1 * c2 * c3 + c1 * s2 * s3;
        var z = c1 * s2 * c3 - s1 * c2 * s3;

        return [x,y,z,w];
    }

    function getValueAtCurrentTime(){
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        var initTime = this.keyframes[0].t - this.offsetTime;
        var endTime = this.keyframes[this.keyframes.length- 1].t-this.offsetTime;
        if(!(frameNum === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= endTime && frameNum >= endTime) || (this._caching.lastFrame < initTime && frameNum < initTime))))){
            if(this._caching.lastFrame >= frameNum) {
                this._caching._lastKeyframeIndex = -1;
                this._caching.lastIndex = 0;
            }

            var renderResult = this.interpolateValue(frameNum, this._caching);
            this.pv = renderResult;
        }
        this._caching.lastFrame = frameNum;
        return this.pv;
    }

    function setVValue(val) {
        var multipliedValue;
        if(this.propType === 'unidimensional') {
            multipliedValue = val * this.mult;
            if(math_abs(this.v - multipliedValue) > 0.00001) {
                this.v = multipliedValue;
                this._mdf = true;
            }
        } else {
            var i = 0, len = this.v.length;
            while (i < len) {
                multipliedValue = val[i] * this.mult;
                if (math_abs(this.v[i] - multipliedValue) > 0.00001) {
                    this.v[i] = multipliedValue;
                    this._mdf = true;
                }
                i += 1;
            }
        }
    }

    function processEffectsSequence() {
        if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
            return;
        }
        if(this.lock) {
            this.setVValue(this.pv);
            return;
        }
        this.lock = true;
        this._mdf = this._isFirstFrame;
        var multipliedValue;
        var i, len = this.effectsSequence.length;
        var finalValue = this.kf ? this.pv : this.data.k;
        for(i = 0; i < len; i += 1) {
            finalValue = this.effectsSequence[i](finalValue);
        }
        this.setVValue(finalValue);
        this._isFirstFrame = false;
        this.lock = false;
        this.frameId = this.elem.globalData.frameId;
    }

    function addEffect(effectFunction) {
        this.effectsSequence.push(effectFunction);
        this.container.addDynamicProperty(this);
    }

    function ValueProperty(elem, data, mult, container){
        this.propType = 'unidimensional';
        this.mult = mult || 1;
        this.data = data;
        this.v = mult ? data.k * mult : data.k;
        this.pv = data.k;
        this._mdf = false;
        this.elem = elem;
        this.container = container;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.vel = 0;
        this.effectsSequence = [];
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
    }

    function MultiDimensionalProperty(elem, data, mult, container) {
        this.propType = 'multidimensional';
        this.mult = mult || 1;
        this.data = data;
        this._mdf = false;
        this.elem = elem;
        this.container = container;
        this.comp = elem.comp;
        this.k = false;
        this.kf = false;
        this.frameId = -1;
        var i, len = data.k.length;
        this.v = createTypedArray('float32', len);
        this.pv = createTypedArray('float32', len);
        var arr = createTypedArray('float32', len);
        this.vel = createTypedArray('float32', len);
        for (i = 0; i < len; i += 1) {
            this.v[i] = data.k[i] * this.mult;
            this.pv[i] = data.k[i];
        }
        this._isFirstFrame = true;
        this.effectsSequence = [];
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
    }

    function KeyframedValueProperty(elem, data, mult, container) {
        this.propType = 'unidimensional';
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.frameId = -1;
        this._caching = {lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1};
        this.k = true;
        this.kf = true;
        this.data = data;
        this.mult = mult || 1;
        this.elem = elem;
        this.container = container;
        this.comp = elem.comp;
        this.v = initFrame;
        this.pv = initFrame;
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.effectsSequence = [getValueAtCurrentTime.bind(this)];
        this.addEffect = addEffect;
    }

    function KeyframedMultidimensionalProperty(elem, data, mult, container){
        this.propType = 'multidimensional';
        var i, len = data.k.length;
        var s, e,to,ti;
        for (i = 0; i < len - 1; i += 1) {
            if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
                s = data.k[i].s;
                e = data.k[i + 1].s;
                to = data.k[i].to;
                ti = data.k[i].ti;
                if((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],s[0] + to[0],s[1] + to[1]) && bez.pointOnLine2D(s[0],s[1],e[0],e[1],e[0] + ti[0],e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],s[0] + to[0],s[1] + to[1],s[2] + to[2]) && bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],e[0] + ti[0],e[1] + ti[1],e[2] + ti[2]))){
                    data.k[i].to = null;
                    data.k[i].ti = null;
                }
                if(s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
                    if(s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
                        data.k[i].to = null;
                        data.k[i].ti = null;
                    }
                }
            }
        }
        this.effectsSequence = [getValueAtCurrentTime.bind(this)];
        this.keyframes = data.k;
        this.offsetTime = elem.data.st;
        this.k = true;
        this.kf = true;
        this._isFirstFrame = true;
        this.mult = mult || 1;
        this.elem = elem;
        this.container = container;
        this.comp = elem.comp;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.frameId = -1;
        var arrLen = data.k[0].s.length;
        this.v = createTypedArray('float32', arrLen);
        this.pv = createTypedArray('float32', arrLen);
        for (i = 0; i < arrLen; i += 1) {
            this.v[i] = initFrame;
            this.pv[i] = initFrame;
        }
        this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray('float32', arrLen)};
        this.addEffect = addEffect;
    }

    function getProp(elem,data,type, mult, container) {
        var p;
        if(!data.k.length){
            p = new ValueProperty(elem,data, mult, container);
        }else if(typeof(data.k[0]) === 'number'){
            p = new MultiDimensionalProperty(elem,data, mult, container);
        }else{
            switch(type){
                case 0:
                    p = new KeyframedValueProperty(elem,data,mult, container);
                    break;
                case 1:
                    p = new KeyframedMultidimensionalProperty(elem,data,mult, container);
                    break;
            }
        }
        if(p.effectsSequence.length){
            container.addDynamicProperty(p);
        }
        return p;
    }

    var ob = {
        getProp: getProp
    };
    return ob;
}());
var TransformPropertyFactory = (function() {

    var defaultVector = [0,0]

    function applyToMatrix(mat) {
        var _mdf = this._mdf;
        this.iterateDynamicProperties();
        this._mdf = this._mdf || _mdf;
        if (this.a) {
            mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        }
        if (this.s) {
            mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        }
        if (this.sk) {
            mat.skewFromAxis(-this.sk.v, this.sa.v);
        }
        if (this.r) {
            mat.rotate(-this.r.v);
        } else {
            mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        }
        if (this.data.p.s) {
            if (this.data.p.z) {
                mat.translate(this.px.v, this.py.v, -this.pz.v);
            } else {
                mat.translate(this.px.v, this.py.v, 0);
            }
        } else {
            mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
    }
    function processKeys(forceRender){
        if (this.elem.globalData.frameId === this.frameId) {
            return;
        }
        if(this._isDirty) {
            this.precalculateMatrix();
            this._isDirty = false;
        }

        this.iterateDynamicProperties();

        if (this._mdf || forceRender) {
            this.v.cloneFromProps(this.pre.props);
            if (this.appliedTransformations < 1) {
                this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if(this.appliedTransformations < 2) {
                this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.sk && this.appliedTransformations < 3) {
                this.v.skewFromAxis(-this.sk.v, this.sa.v);
            }
            if (this.r && this.appliedTransformations < 4) {
                this.v.rotate(-this.r.v);
            } else if (!this.r && this.appliedTransformations < 4){
                this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.autoOriented) {
                var v1,v2, frameRate = this.elem.globalData.frameRate;
                if(this.p && this.p.keyframes && this.p.getValueAtTime) {
                    if (this.p._caching.lastFrame+this.p.offsetTime <= this.p.keyframes[0].t) {
                        v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate,0);
                        v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
                    } else if(this.p._caching.lastFrame+this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                        v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / frameRate), 0);
                        v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
                    } else {
                        v1 = this.p.pv;
                        v2 = this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
                    }
                } else if(this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    v1 = [];
                    v2 = [];
                    var px = this.px, py = this.py, frameRate;
                    if (px._caching.lastFrame+px.offsetTime <= px.keyframes[0].t) {
                        v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate,0);
                        v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate,0);
                        v2[0] = px.getValueAtTime((px.keyframes[0].t) / frameRate,0);
                        v2[1] = py.getValueAtTime((py.keyframes[0].t) / frameRate,0);
                    } else if(px._caching.lastFrame+px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
                        v1[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t / frameRate),0);
                        v1[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t / frameRate),0);
                        v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate,0);
                        v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate,0);
                    } else {
                        v1 = [px.pv, py.pv];
                        v2[0] = px.getValueAtTime((px._caching.lastFrame+px.offsetTime - 0.01) / frameRate,px.offsetTime);
                        v2[1] = py.getValueAtTime((py._caching.lastFrame+py.offsetTime - 0.01) / frameRate,py.offsetTime);
                    }
                } else {
                    v1 = v2 = defaultVector
                }
                this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
            }
            if(this.data.p && this.data.p.s){
                if(this.data.p.z) {
                    this.v.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                    this.v.translate(this.px.v, this.py.v, 0);
                }
            }else{
                this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);
            }
        }
        this.frameId = this.elem.globalData.frameId;
    }

    function precalculateMatrix() {
        if(!this.a.k) {
            this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            this.appliedTransformations = 1;
        } else {
            return;
        }
        if(!this.s.effectsSequence.length) {
            this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            this.appliedTransformations = 2;
        } else {
            return;
        }
        if(this.sk) {
            if(!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
                this.pre.skewFromAxis(-this.sk.v, this.sa.v);
            this.appliedTransformations = 3;
            } else {
                return;
            }
        }
        if (this.r) {
            if(!this.r.effectsSequence.length) {
                this.pre.rotate(-this.r.v);
                this.appliedTransformations = 4;
            } else {
                return;
            }
        } else if(!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
            this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            this.appliedTransformations = 4;
        }
    }

    function autoOrient(){
        //
        //var prevP = this.getValueAtTime();
    }

    function addDynamicProperty(prop) {
        this._addDynamicProperty(prop);
        this.elem.addDynamicProperty(prop);
        this._isDirty = true;
    }

    function TransformProperty(elem,data,container){
        this.elem = elem;
        this.frameId = -1;
        this.propType = 'transform';
        this.data = data;
        this.v = new Matrix();
        //Precalculated matrix with non animated properties
        this.pre = new Matrix();
        this.appliedTransformations = 0;
        this.initDynamicPropertyContainer(container || elem);
        if(data.p && data.p.s){
            this.px = PropertyFactory.getProp(elem,data.p.x,0,0,this);
            this.py = PropertyFactory.getProp(elem,data.p.y,0,0,this);
            if(data.p.z){
                this.pz = PropertyFactory.getProp(elem,data.p.z,0,0,this);
            }
        }else{
            this.p = PropertyFactory.getProp(elem,data.p || {k:[0,0,0]},1,0,this);
        }
        if(data.rx) {
            this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
            this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
            this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
            if(data.or.k[0].ti) {
                var i, len = data.or.k.length;
                for(i=0;i<len;i+=1) {
                    data.or.k[i].to = data.or.k[i].ti = null;
                }
            }
            this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
            //sh Indicates it needs to be capped between -180 and 180
            this.or.sh = true;
        } else {
            this.r = PropertyFactory.getProp(elem, data.r || {k: 0}, 0, degToRads, this);
        }
        if(data.sk){
            this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
            this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
        }
        this.a = PropertyFactory.getProp(elem,data.a || {k:[0,0,0]},1,0,this);
        this.s = PropertyFactory.getProp(elem,data.s || {k:[100,100,100]},1,0.01,this);
        // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
        if(data.o){
            this.o = PropertyFactory.getProp(elem,data.o,0,0.01,elem);
        } else {
            this.o = {_mdf:false,v:1};
        }
        this._isDirty = true;
        if(!this.dynamicProperties.length){
            this.getValue(true);
        }
    }

    TransformProperty.prototype = {
        applyToMatrix: applyToMatrix,
        getValue: processKeys,
        precalculateMatrix: precalculateMatrix,
        autoOrient: autoOrient
    }

    extendPrototype([DynamicPropertyContainer], TransformProperty);
    TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
    TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

    function getTransformProperty(elem,data,container){
        return new TransformProperty(elem,data,container);
    }

    return {
        getTransformProperty: getTransformProperty
    };

}());
function ShapePath(){
	this.c = false;
	this._length = 0;
	this._maxLength = 8;
	this.v = createSizedArray(this._maxLength);
	this.o = createSizedArray(this._maxLength);
	this.i = createSizedArray(this._maxLength);
}

ShapePath.prototype.setPathData = function(closed, len) {
	this.c = closed;
	this.setLength(len);
	var i = 0;
	while(i < len){
		this.v[i] = point_pool.newElement();
		this.o[i] = point_pool.newElement();
		this.i[i] = point_pool.newElement();
		i += 1;
	}
};

ShapePath.prototype.setLength = function(len) {
	while(this._maxLength < len) {
		this.doubleArrayLength();
	}
	this._length = len;
};

ShapePath.prototype.doubleArrayLength = function() {
	this.v = this.v.concat(createSizedArray(this._maxLength));
	this.i = this.i.concat(createSizedArray(this._maxLength));
	this.o = this.o.concat(createSizedArray(this._maxLength));
	this._maxLength *= 2;
};

ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
	var arr;
	this._length = Math.max(this._length, pos + 1);
	if(this._length >= this._maxLength) {
		this.doubleArrayLength();
	}
	switch(type){
		case 'v':
			arr = this.v;
			break;
		case 'i':
			arr = this.i;
			break;
		case 'o':
			arr = this.o;
			break;
	}
	if(!arr[pos] || (arr[pos] && !replace)){
		arr[pos] = point_pool.newElement();
	}
	arr[pos][0] = x;
	arr[pos][1] = y;
};

ShapePath.prototype.setTripleAt = function(vX,vY,oX,oY,iX,iY,pos, replace) {
	this.setXYAt(vX,vY,'v',pos, replace);
	this.setXYAt(oX,oY,'o',pos, replace);
	this.setXYAt(iX,iY,'i',pos, replace);
};

ShapePath.prototype.reverse = function() {
	var newPath = new ShapePath();
	newPath.setPathData(this.c, this._length);
	var vertices = this.v, outPoints = this.o, inPoints = this.i;
	var init = 0;
	if (this.c) {
		newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
        init = 1;
    }
    var cnt = this._length - 1;
    var len = this._length;

    var i;
    for (i = init; i < len; i += 1) {
    	newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
        cnt -= 1;
    }
    return newPath;
};
var ShapePropertyFactory = (function(){

    var initFrame = -999999;

    function interpolateShape(frameNum, previousValue, caching) {
        var iterationIndex = caching.lastIndex;
        var keyPropS,keyPropE,isHold, j, k, jLen, kLen, perc, vertexValue;
        var kf = this.keyframes;
        if(frameNum < kf[0].t-this.offsetTime){
            keyPropS = kf[0].s[0];
            isHold = true;
            iterationIndex = 0;
        }else if(frameNum >= kf[kf.length - 1].t-this.offsetTime){
            keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
            /*if(kf[kf.length - 1].s){
                keyPropS = kf[kf.length - 1].s[0];
            }else{
                keyPropS = kf[kf.length - 2].e[0];
            }*/
            isHold = true;
        }else{
            var i = iterationIndex;
            var len = kf.length- 1,flag = true,keyData,nextKeyData;
            while(flag){
                keyData = kf[i];
                nextKeyData = kf[i+1];
                if((nextKeyData.t - this.offsetTime) > frameNum){
                    break;
                }
                if(i < len - 1){
                    i += 1;
                }else{
                    flag = false;
                }
            }
            isHold = keyData.h === 1;
            iterationIndex = i;
            if(!isHold){
                if(frameNum >= nextKeyData.t-this.offsetTime){
                    perc = 1;
                }else if(frameNum < keyData.t-this.offsetTime){
                    perc = 0;
                }else{
                    var fnc;
                    if(keyData.__fnct){
                        fnc = keyData.__fnct;
                    }else{
                        fnc = BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y).get;
                        keyData.__fnct = fnc;
                    }
                    perc = fnc((frameNum-(keyData.t-this.offsetTime))/((nextKeyData.t-this.offsetTime)-(keyData.t-this.offsetTime)));
                }
                keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
            }
            keyPropS = keyData.s[0];
        }
        jLen = previousValue._length;
        kLen = keyPropS.i[0].length;
        caching.lastIndex = iterationIndex;

        for(j=0;j<jLen;j+=1){
            for(k=0;k<kLen;k+=1){
                vertexValue = isHold ? keyPropS.i[j][k] :  keyPropS.i[j][k]+(keyPropE.i[j][k]-keyPropS.i[j][k])*perc;
                previousValue.i[j][k] = vertexValue;
                vertexValue = isHold ? keyPropS.o[j][k] :  keyPropS.o[j][k]+(keyPropE.o[j][k]-keyPropS.o[j][k])*perc;
                previousValue.o[j][k] = vertexValue;
                vertexValue = isHold ? keyPropS.v[j][k] :  keyPropS.v[j][k]+(keyPropE.v[j][k]-keyPropS.v[j][k])*perc;
                previousValue.v[j][k] = vertexValue;
            }
        }
    }

    function interpolateShapeCurrentTime(){
        var frameNum = this.comp.renderedFrame - this.offsetTime;
        var initTime = this.keyframes[0].t - this.offsetTime;
        var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        var lastFrame = this._caching.lastFrame;
        if(!(lastFrame !== initFrame && ((lastFrame < initTime && frameNum < initTime) || (lastFrame > endTime && frameNum > endTime)))){
            ////
            this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
            this.interpolateShape(frameNum, this.pv, this._caching);
            ////
        }
        this._caching.lastFrame = frameNum;
        return this.pv;
    }

    function resetShape(){
        this.paths = this.localShapeCollection;
    }

    function shapesEqual(shape1, shape2) {
        if(shape1._length !== shape2._length || shape1.c !== shape2.c){
            return false;
        }
        var i, len = shape1._length;
        for(i = 0; i < len; i += 1) {
            if(shape1.v[i][0] !== shape2.v[i][0] 
            || shape1.v[i][1] !== shape2.v[i][1] 
            || shape1.o[i][0] !== shape2.o[i][0] 
            || shape1.o[i][1] !== shape2.o[i][1] 
            || shape1.i[i][0] !== shape2.i[i][0] 
            || shape1.i[i][1] !== shape2.i[i][1]) {
                return false;
            }
        }
        return true;
    }

    function setVValue(newPath) {
        if(!shapesEqual(this.v, newPath)) {
            this.v = shape_pool.clone(newPath);
            this.localShapeCollection.releaseShapes();
            this.localShapeCollection.addShape(this.v);
            this._mdf = true;
            this.paths = this.localShapeCollection;
        }
    }

    function processEffectsSequence() {
        if (this.elem.globalData.frameId === this.frameId) {
            return;
        } else if (!this.effectsSequence.length) {
            this._mdf = false;
            return;
        }
        if (this.lock) {
            this.setVValue(this.pv);
            return;
        }
        this.lock = true;
        this._mdf = false;
        var finalValue = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
        var i, len = this.effectsSequence.length;
        for(i = 0; i < len; i += 1) {
            finalValue = this.effectsSequence[i](finalValue);
        }
        this.setVValue(finalValue);
        this.lock = false;
        this.frameId = this.elem.globalData.frameId;
    };

    function ShapeProperty(elem, data, type){
        this.propType = 'shape';
        this.comp = elem.comp;
        this.container = elem;
        this.elem = elem;
        this.data = data;
        this.k = false;
        this.kf = false;
        this._mdf = false;
        var pathData = type === 3 ? data.pt.k : data.ks.k;
        this.v = shape_pool.clone(pathData);
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.reset = resetShape;
        this.effectsSequence = [];
    }

    function addEffect(effectFunction) {
        this.effectsSequence.push(effectFunction);
        this.container.addDynamicProperty(this);
    }

    ShapeProperty.prototype.interpolateShape = interpolateShape;
    ShapeProperty.prototype.getValue = processEffectsSequence;
    ShapeProperty.prototype.setVValue = setVValue;
    ShapeProperty.prototype.addEffect = addEffect;

    function KeyframedShapeProperty(elem,data,type){
        this.propType = 'shape';
        this.comp = elem.comp;
        this.elem = elem;
        this.container = elem;
        this.offsetTime = elem.data.st;
        this.keyframes = type === 3 ? data.pt.k : data.ks.k;
        this.k = true;
        this.kf = true;
        var i, len = this.keyframes[0].s[0].i.length;
        var jLen = this.keyframes[0].s[0].i[0].length;
        this.v = shape_pool.newElement();
        this.v.setPathData(this.keyframes[0].s[0].c, len);
        this.pv = shape_pool.clone(this.v);
        this.localShapeCollection = shapeCollection_pool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.paths.addShape(this.v);
        this.lastFrame = initFrame;
        this.reset = resetShape;
        this._caching = {lastFrame: initFrame, lastIndex: 0};
        this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
    }
    KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
    KeyframedShapeProperty.prototype.setVValue = setVValue;
    KeyframedShapeProperty.prototype.addEffect = addEffect;

    var EllShapeProperty = (function(){

        var cPoint = roundCorner;

        function EllShapeProperty(elem,data) {
            /*this.v = {
                v: createSizedArray(4),
                i: createSizedArray(4),
                o: createSizedArray(4),
                c: true
            };*/
            this.v = shape_pool.newElement();
            this.v.setPathData(true, 4);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.localShapeCollection.addShape(this.v);
            this.d = data.d;
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this.initDynamicPropertyContainer(elem);
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.k = false;
                this.convertEllToPath();
            }
        };

        EllShapeProperty.prototype = {
            reset: resetShape,
            getValue: function (){
                if(this.elem.globalData.frameId === this.frameId){
                    return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();

                if(this._mdf){
                    this.convertEllToPath();
                }
            },
            convertEllToPath: function() {
                var p0 = this.p.v[0], p1 = this.p.v[1], s0 = this.s.v[0]/2, s1 = this.s.v[1]/2;
                var _cw = this.d !== 3;
                var _v = this.v;
                _v.v[0][0] = p0;
                _v.v[0][1] = p1 - s1;
                _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.v[1][1] = p1;
                _v.v[2][0] = p0;
                _v.v[2][1] = p1 + s1;
                _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.v[3][1] = p1;
                _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.i[0][1] = p1 - s1;
                _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.i[1][1] = p1 - s1 * cPoint;
                _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.i[2][1] = p1 + s1;
                _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.i[3][1] = p1 + s1 * cPoint;
                _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.o[0][1] = p1 - s1;
                _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.o[1][1] = p1 + s1 * cPoint;
                _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.o[2][1] = p1 + s1;
                _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.o[3][1] = p1 - s1 * cPoint;
            }
        }

        extendPrototype([DynamicPropertyContainer], EllShapeProperty);

        return EllShapeProperty;
    }());

    var StarShapeProperty = (function() {

        function StarShapeProperty(elem,data) {
            this.v = shape_pool.newElement();
            this.v.setPathData(true, 0);
            this.elem = elem;
            this.comp = elem.comp;
            this.data = data;
            this.frameId = -1;
            this.d = data.d;
            this.initDynamicPropertyContainer(elem);
            if(data.sy === 1){
                this.ir = PropertyFactory.getProp(elem,data.ir,0,0,this);
                this.is = PropertyFactory.getProp(elem,data.is,0,0.01,this);
                this.convertToPath = this.convertStarToPath;
            } else {
                this.convertToPath = this.convertPolygonToPath;
            }
            this.pt = PropertyFactory.getProp(elem,data.pt,0,0,this);
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this);
            this.r = PropertyFactory.getProp(elem,data.r,0,degToRads,this);
            this.or = PropertyFactory.getProp(elem,data.or,0,0,this);
            this.os = PropertyFactory.getProp(elem,data.os,0,0.01,this);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.k = false;
                this.convertToPath();
            }
        };

        StarShapeProperty.prototype = {
            reset: resetShape,
            getValue: function() {
                if(this.elem.globalData.frameId === this.frameId){
                    return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if(this._mdf){
                    this.convertToPath();
                }
            },
            convertStarToPath: function() {
                var numPts = Math.floor(this.pt.v)*2;
                var angle = Math.PI*2/numPts;
                /*this.v.v.length = numPts;
                this.v.i.length = numPts;
                this.v.o.length = numPts;*/
                var longFlag = true;
                var longRad = this.or.v;
                var shortRad = this.ir.v;
                var longRound = this.os.v;
                var shortRound = this.is.v;
                var longPerimSegment = 2*Math.PI*longRad/(numPts*2);
                var shortPerimSegment = 2*Math.PI*shortRad/(numPts*2);
                var i, rad,roundness,perimSegment, currentAng = -Math.PI/ 2;
                currentAng += this.r.v;
                var dir = this.data.d === 3 ? -1 : 1;
                this.v._length = 0;
                for(i=0;i<numPts;i+=1){
                    rad = longFlag ? longRad : shortRad;
                    roundness = longFlag ? longRound : shortRound;
                    perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                    var x = rad * Math.cos(currentAng);
                    var y = rad * Math.sin(currentAng);
                    var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                    var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                    x +=  + this.p.v[0];
                    y +=  + this.p.v[1];
                    this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);

                    /*this.v.v[i] = [x,y];
                    this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                    this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                    this.v._length = numPts;*/
                    longFlag = !longFlag;
                    currentAng += angle*dir;
                }
            },
            convertPolygonToPath: function() {
                var numPts = Math.floor(this.pt.v);
                var angle = Math.PI*2/numPts;
                var rad = this.or.v;
                var roundness = this.os.v;
                var perimSegment = 2*Math.PI*rad/(numPts*4);
                var i, currentAng = -Math.PI/ 2;
                var dir = this.data.d === 3 ? -1 : 1;
                currentAng += this.r.v;
                this.v._length = 0;
                for(i=0;i<numPts;i+=1){
                    var x = rad * Math.cos(currentAng);
                    var y = rad * Math.sin(currentAng);
                    var ox = x === 0 && y === 0 ? 0 : y/Math.sqrt(x*x + y*y);
                    var oy = x === 0 && y === 0 ? 0 : -x/Math.sqrt(x*x + y*y);
                    x +=  + this.p.v[0];
                    y +=  + this.p.v[1];
                    this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir, i, true);
                    currentAng += angle*dir;
                }
                this.paths.length = 0;
                this.paths[0] = this.v;
            }

        }
        extendPrototype([DynamicPropertyContainer], StarShapeProperty);

        return StarShapeProperty;
    }());

    var RectShapeProperty = (function() {

         function RectShapeProperty(elem,data) {
            this.v = shape_pool.newElement();
            this.v.c = true;
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            this.elem = elem;
            this.comp = elem.comp;
            this.frameId = -1;
            this.d = data.d;
            this.initDynamicPropertyContainer(elem);
            this.p = PropertyFactory.getProp(elem,data.p,1,0,this);
            this.s = PropertyFactory.getProp(elem,data.s,1,0,this);
            this.r = PropertyFactory.getProp(elem,data.r,0,0,this);
            if(this.dynamicProperties.length){
                this.k = true;
            }else{
                this.k = false;
                this.convertRectToPath();
            }
        };

        RectShapeProperty.prototype = {
            convertRectToPath: function (){
                var p0 = this.p.v[0], p1 = this.p.v[1], v0 = this.s.v[0]/2, v1 = this.s.v[1]/2;
                var round = bm_min(v0,v1,this.r.v);
                var cPoint = round*(1-roundCorner);
                this.v._length = 0;

                if(this.d === 2 || this.d === 1) {
                    this.v.setTripleAt(p0+v0, p1-v1+round,p0+v0, p1-v1+round,p0+v0,p1-v1+cPoint,0, true);
                    this.v.setTripleAt(p0+v0, p1+v1-round,p0+v0, p1+v1-cPoint,p0+v0, p1+v1-round,1, true);
                    if(round!== 0){
                        this.v.setTripleAt(p0+v0-round, p1+v1,p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,2, true);
                        this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,p0-v0+round,p1+v1,3, true);
                        this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,4, true);
                        this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,p0-v0,p1-v1+round,5, true);
                        this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,6, true);
                        this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,p0+v0-round,p1-v1,7, true);
                    } else {
                        this.v.setTripleAt(p0-v0,p1+v1,p0-v0+cPoint,p1+v1,p0-v0,p1+v1,2);
                        this.v.setTripleAt(p0-v0,p1-v1,p0-v0,p1-v1+cPoint,p0-v0,p1-v1,3);
                    }
                }else{
                    this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,p0+v0,p1-v1+round,0, true);
                    if(round!== 0){
                        this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,1, true);
                        this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,p0-v0+round,p1-v1,2, true);
                        this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,3, true);
                        this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,p0-v0,p1+v1-round,4, true);
                        this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,5, true);
                        this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,p0+v0-round,p1+v1,6, true);
                        this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,7, true);
                    } else {
                        this.v.setTripleAt(p0-v0,p1-v1,p0-v0+cPoint,p1-v1,p0-v0,p1-v1,1, true);
                        this.v.setTripleAt(p0-v0,p1+v1,p0-v0,p1+v1-cPoint,p0-v0,p1+v1,2, true);
                        this.v.setTripleAt(p0+v0,p1+v1,p0+v0-cPoint,p1+v1,p0+v0,p1+v1,3, true);

                    }
                }
            },
            getValue: function(frameNum){
                if(this.elem.globalData.frameId === this.frameId){
                    return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if(this._mdf){
                    this.convertRectToPath();
                }

            },
            reset: resetShape
        }
        extendPrototype([DynamicPropertyContainer], RectShapeProperty);

        return RectShapeProperty;
    }());

    function getShapeProp(elem,data,type){
        var prop;
        if(type === 3 || type === 4){
            var dataProp = type === 3 ? data.pt : data.ks;
            var keys = dataProp.k;
            if(keys.length){
                prop = new KeyframedShapeProperty(elem, data, type);
            }else{
                prop = new ShapeProperty(elem, data, type);
            }
        }else if(type === 5){
            prop = new RectShapeProperty(elem, data);
        }else if(type === 6){
            prop = new EllShapeProperty(elem, data);
        }else if(type === 7){
            prop = new StarShapeProperty(elem, data);
        }
        if(prop.k){
            elem.addDynamicProperty(prop);
        }
        return prop;
    }

    function getConstructorFunction() {
        return ShapeProperty;
    }

    function getKeyframedConstructorFunction() {
        return KeyframedShapeProperty;
    }

    var ob = {};
    ob.getShapeProp = getShapeProp;
    ob.getConstructorFunction = getConstructorFunction;
    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
    return ob;
}());
var ShapeModifiers = (function(){
    var ob = {};
    var modifiers = {};
    ob.registerModifier = registerModifier;
    ob.getModifier = getModifier;

    function registerModifier(nm,factory){
        if(!modifiers[nm]){
            modifiers[nm] = factory;
        }
    }

    function getModifier(nm,elem, data){
        return new modifiers[nm](elem, data);
    }

    return ob;
}());

function ShapeModifier(){}
ShapeModifier.prototype.initModifierProperties = function(){};
ShapeModifier.prototype.addShapeToModifier = function(){};
ShapeModifier.prototype.addShape = function(data){
    if (!this.closed) {
        // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
        data.sh.container.addDynamicProperty(data.sh);
        var shapeData = {shape:data.sh, data: data, localShapeCollection:shapeCollection_pool.newShapeCollection()};
        this.shapes.push(shapeData);
        this.addShapeToModifier(shapeData);
        if (this._isAnimated) {
            data.setAsAnimated();
        }
    }
};
ShapeModifier.prototype.init = function(elem,data){
    this.shapes = [];
    this.elem = elem;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem,data);
    this.frameId = initialDefaultFrame;
    this.closed = false;
    this.k = false;
    if(this.dynamicProperties.length){
        this.k = true;
    }else{
        this.getValue(true);
    }
};
ShapeModifier.prototype.processKeys = function(){
    if(this.elem.globalData.frameId === this.frameId){
        return;
    }
    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
};

extendPrototype([DynamicPropertyContainer], ShapeModifier);
function TrimModifier(){
}
extendPrototype([ShapeModifier], TrimModifier);
TrimModifier.prototype.initModifierProperties = function(elem, data) {
    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
    this.sValue = 0;
    this.eValue = 0;
    this.getValue = this.processKeys;
    this.m = data.m;
    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
};

TrimModifier.prototype.addShapeToModifier = function(shapeData){
    shapeData.pathsData = [];
};

TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
    var segments = [];
    if (e <= 1) {
        segments.push({
            s: s,
            e: e
        });
    } else if (s >= 1) {
        segments.push({
            s: s - 1,
            e: e - 1
        });
    } else {
        segments.push({
            s: s,
            e: 1
        });
        segments.push({
            s: 0,
            e: e - 1
        });
    }
    var shapeSegments = [];
    var i, len = segments.length, segmentOb;
    for (i = 0; i < len; i += 1) {
        segmentOb = segments[i];
        if (segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength) {
            
        } else {
            var shapeS, shapeE;
            if (segmentOb.s * totalModifierLength <= addedLength) {
                shapeS = 0;
            } else {
                shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
            }
            if(segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
                shapeE = 1;
            } else {
                shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
            }
            shapeSegments.push([shapeS, shapeE]);
        }
    }
    if (!shapeSegments.length) {
        shapeSegments.push([0, 0]);
    }
    return shapeSegments;
};

TrimModifier.prototype.releasePathsData = function(pathsData) {
    var i, len = pathsData.length;
    for (i = 0; i < len; i += 1) {
        segments_length_pool.release(pathsData[i]);
    }
    pathsData.length = 0;
    return pathsData;
};

TrimModifier.prototype.processShapes = function(_isFirstFrame) {
    var s, e;
    if (this._mdf || _isFirstFrame) {
        var o = (this.o.v % 360) / 360;
        if (o < 0) {
            o += 1;
        }
        s = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + o;
        e = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + o;
        if (s === e) {

        }
        if (s > e) {
            var _s = s;
            s = e;
            e = _s;
        }
        s = Math.round(s * 10000) * 0.0001;
        e = Math.round(e * 10000) * 0.0001;
        this.sValue = s;
        this.eValue = e;
    } else {
        s = this.sValue;
        e = this.eValue;
    }
    var shapePaths;
    var i, len = this.shapes.length, j, jLen;
    var pathsData, pathData, totalShapeLength, totalModifierLength = 0;

    if (e === s) {
        for (i = 0; i < len; i += 1) {
            this.shapes[i].localShapeCollection.releaseShapes();
            this.shapes[i].shape._mdf = true;
            this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
        }
    } else if (!((e === 1 && s === 0) || (e===0 && s === 1))){
        var segments = [], shapeData, localShapeCollection;
        for (i = 0; i < len; i += 1) {
            shapeData = this.shapes[i];
            // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
            if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
                shapeData.shape.paths = shapeData.localShapeCollection;
            } else {
                shapePaths = shapeData.shape.paths;
                jLen = shapePaths._length;
                totalShapeLength = 0;
                if (!shapeData.shape._mdf && shapeData.pathsData.length) {
                    totalShapeLength = shapeData.totalShapeLength;
                } else {
                    pathsData = this.releasePathsData(shapeData.pathsData);
                    for (j = 0; j < jLen; j += 1) {
                        pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
                        pathsData.push(pathData);
                        totalShapeLength += pathData.totalLength;
                    }
                    shapeData.totalShapeLength = totalShapeLength;
                    shapeData.pathsData = pathsData;
                }

                totalModifierLength += totalShapeLength;
                shapeData.shape._mdf = true;
            }
        }
        var shapeS = s, shapeE = e, addedLength = 0, edges;
        for (i = len - 1; i >= 0; i -= 1) {
            shapeData = this.shapes[i];
            if (shapeData.shape._mdf) {
                localShapeCollection = shapeData.localShapeCollection;
                localShapeCollection.releaseShapes();
                //if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
                if (this.m === 2 && len > 1) {
                    edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                    addedLength += shapeData.totalShapeLength;
                } else {
                    edges = [[shapeS, shapeE]];
                }
                jLen = edges.length;
                for (j = 0; j < jLen; j += 1) {
                    shapeS = edges[j][0];
                    shapeE = edges[j][1];
                    segments.length = 0;
                    if (shapeE <= 1) {
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength * shapeE
                        });
                    } else if (shapeS >= 1) {
                        segments.push({
                            s:shapeData.totalShapeLength * (shapeS - 1),
                            e:shapeData.totalShapeLength * (shapeE - 1)
                        });
                    } else {
                        segments.push({
                            s:shapeData.totalShapeLength * shapeS,
                            e:shapeData.totalShapeLength
                        });
                        segments.push({
                            s:0,
                            e:shapeData.totalShapeLength * (shapeE - 1)
                        });
                    }
                    var newShapesData = this.addShapes(shapeData,segments[0]);
                    if (segments[0].s !== segments[0].e) {
                        if (segments.length > 1) {
                            var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
                            if (lastShapeInCollection.c) {
                                var lastShape = newShapesData.pop();
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                            } else {
                                this.addPaths(newShapesData, localShapeCollection);
                                newShapesData = this.addShapes(shapeData, segments[1]);
                            }
                        } 
                        this.addPaths(newShapesData, localShapeCollection);
                    }
                    
                }
                shapeData.shape.paths = localShapeCollection;
            }
        }
    } else if (this._mdf) {
        for (i = 0; i < len; i += 1) {
            //Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
            //Don't remove this even if it's losing cached info.
            this.shapes[i].pathsData.length = 0;
            this.shapes[i].shape._mdf = true;
        }
    }
};

TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) {
    var i, len = newPaths.length;
    for (i = 0; i < len; i += 1) {
        localShapeCollection.addShape(newPaths[i]);
    }
};

TrimModifier.prototype.addSegment = function(pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
    if(newShape){
        shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
    }
    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
};

TrimModifier.prototype.addSegmentFromArray = function(points, shapePath, pos, newShape) {
    shapePath.setXYAt(points[1], points[5], 'o', pos);
    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
    if(newShape){
        shapePath.setXYAt(points[0], points[4], 'v', pos);
    }
    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
};

TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath) {
    var pathsData = shapeData.pathsData;
    var shapePaths = shapeData.shape.paths.shapes;
    var i, len = shapeData.shape.paths._length, j, jLen;
    var addedLength = 0;
    var currentLengthData,segmentCount;
    var lengths;
    var segment;
    var shapes = [];
    var initPos;
    var newShape = true;
    if (!shapePath) {
        shapePath = shape_pool.newElement();
        segmentCount = 0;
        initPos = 0;
    } else {
        segmentCount = shapePath._length;
        initPos = shapePath._length;
    }
    shapes.push(shapePath);
    for (i = 0; i < len; i += 1) {
        lengths = pathsData[i].lengths;
        shapePath.c = shapePaths[i].c;
        jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
        for (j = 1; j < jLen; j +=1) {
            currentLengthData = lengths[j-1];
            if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
                addedLength += currentLengthData.addedLength;
                shapePath.c = false;
            } else if(addedLength > shapeSegment.e) {
                shapePath.c = false;
                break;
            } else {
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
                    this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
                    newShape = false;
                } else {
                    segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength)/currentLengthData.addedLength,(shapeSegment.e - addedLength)/currentLengthData.addedLength, lengths[j-1]);
                    this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                    // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                    newShape = false;
                    shapePath.c = false;
                }
                addedLength += currentLengthData.addedLength;
                segmentCount += 1;
            }
        }
        if (shapePaths[i].c && lengths.length) {
            currentLengthData = lengths[j - 1];
            if (addedLength <= shapeSegment.e) {
                var segmentLength = lengths[j - 1].addedLength;
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
                    this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
                    newShape = false;
                } else {
                    segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
                    this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                    // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                    newShape = false;
                    shapePath.c = false;
                }
            } else {
                shapePath.c = false;
            }
            addedLength += currentLengthData.addedLength;
            segmentCount += 1;
        }
        if (shapePath._length) {
            shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
            shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1],'o', shapePath._length - 1);
        }
        if (addedLength > shapeSegment.e) {
            break;
        }
        if (i < len - 1) {
            shapePath = shape_pool.newElement();
            newShape = true;
            shapes.push(shapePath);
            segmentCount = 0;
        }
    }
    return shapes;
};


ShapeModifiers.registerModifier('tm', TrimModifier);
function RoundCornersModifier(){}
extendPrototype([ShapeModifier],RoundCornersModifier);
RoundCornersModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.rd = PropertyFactory.getProp(elem,data.r,0,null,this);
    this._isAnimated = !!this.rd.effectsSequence.length;
};

RoundCornersModifier.prototype.processPath = function(path, round){
    var cloned_path = shape_pool.newElement();
    cloned_path.c = path.c;
    var i, len = path._length;
    var currentV,currentI,currentO,closerV, newV,newO,newI,distance,newPosPerc,index = 0;
    var vX,vY,oX,oY,iX,iY;
    for(i=0;i<len;i+=1){
        currentV = path.v[i];
        currentO = path.o[i];
        currentI = path.i[i];
        if(currentV[0]===currentO[0] && currentV[1]===currentO[1] && currentV[0]===currentI[0] && currentV[1]===currentI[1]){
            if((i===0 || i === len - 1) && !path.c){
                cloned_path.setTripleAt(currentV[0],currentV[1],currentO[0],currentO[1],currentI[0],currentI[1],index);
                /*cloned_path.v[index] = currentV;
                cloned_path.o[index] = currentO;
                cloned_path.i[index] = currentI;*/
                index += 1;
            } else {
                if(i===0){
                    closerV = path.v[len-1];
                } else {
                    closerV = path.v[i-1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = iX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = iY = currentV[1]-(currentV[1]-closerV[1])*newPosPerc;
                oX = vX-(vX-currentV[0])*roundCorner;
                oY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);
                index += 1;

                if(i === len - 1){
                    closerV = path.v[0];
                } else {
                    closerV = path.v[i+1];
                }
                distance = Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));
                newPosPerc = distance ? Math.min(distance/2,round)/distance : 0;
                vX = oX = currentV[0]+(closerV[0]-currentV[0])*newPosPerc;
                vY = oY = currentV[1]+(closerV[1]-currentV[1])*newPosPerc;
                iX = vX-(vX-currentV[0])*roundCorner;
                iY = vY-(vY-currentV[1])*roundCorner;
                cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);
                index += 1;
            }
        } else {
            cloned_path.setTripleAt(path.v[i][0],path.v[i][1],path.o[i][0],path.o[i][1],path.i[i][0],path.i[i][1],index);
            index += 1;
        }
    }
    return cloned_path;
};

RoundCornersModifier.prototype.processShapes = function(_isFirstFrame){
    var shapePaths;
    var i, len = this.shapes.length;
    var j, jLen;
    var rd = this.rd.v;

    if(rd !== 0){
        var shapeData, newPaths, localShapeCollection;
        for(i=0;i<len;i+=1){
            shapeData = this.shapes[i];
            newPaths = shapeData.shape.paths;
            localShapeCollection = shapeData.localShapeCollection;
            if(!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)){
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for(j=0;j<jLen;j+=1){
                    localShapeCollection.addShape(this.processPath(shapePaths[j],rd));
                }
            }
            shapeData.shape.paths = shapeData.localShapeCollection;
        }

    }
    if(!this.dynamicProperties.length){
        this._mdf = false;
    }
};

ShapeModifiers.registerModifier('rd',RoundCornersModifier);
function RepeaterModifier(){}
extendPrototype([ShapeModifier], RepeaterModifier);

RepeaterModifier.prototype.initModifierProperties = function(elem,data){
    this.getValue = this.processKeys;
    this.c = PropertyFactory.getProp(elem,data.c,0,null,this);
    this.o = PropertyFactory.getProp(elem,data.o,0,null,this);
    this.tr = TransformPropertyFactory.getTransformProperty(elem,data.tr,this);
    this.so = PropertyFactory.getProp(elem,data.tr.so,0,0.01,this);
    this.eo = PropertyFactory.getProp(elem,data.tr.eo,0,0.01,this);
    this.data = data;
    if(!this.dynamicProperties.length){
        this.getValue(true);
    }
    this._isAnimated = !!this.dynamicProperties.length;
    this.pMatrix = new Matrix();
    this.rMatrix = new Matrix();
    this.sMatrix = new Matrix();
    this.tMatrix = new Matrix();
    this.matrix = new Matrix();
};

RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform, perc, inv){
    var dir = inv ? -1 : 1;
    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    rMatrix.rotate(-transform.r.v * dir * perc);
    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    sMatrix.scale(inv ? 1/scaleX : scaleX, inv ? 1/scaleY : scaleY);
    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
};

RepeaterModifier.prototype.init = function(elem, arr, pos, elemsData) {
    this.elem = elem;
    this.arr = arr;
    this.pos = pos;
    this.elemsData = elemsData;
    this._currentCopies = 0;
    this._elements = [];
    this._groups = [];
    this.frameId = -1;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem,arr[pos]);
    var cont = 0;
    while(pos>0){
        pos -= 1;
        //this._elements.unshift(arr.splice(pos,1)[0]);
        this._elements.unshift(arr[pos]);
        cont += 1;
    }
    if(this.dynamicProperties.length){
        this.k = true;
    }else{
        this.getValue(true);
    }
};

RepeaterModifier.prototype.resetElements = function(elements){
    var i, len = elements.length;
    for(i = 0; i < len; i += 1) {
        elements[i]._processed = false;
        if(elements[i].ty === 'gr'){
            this.resetElements(elements[i].it);
        }
    }
};

RepeaterModifier.prototype.cloneElements = function(elements){
    var i, len = elements.length;
    var newElements = JSON.parse(JSON.stringify(elements));
    this.resetElements(newElements);
    return newElements;
};

RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) {
    var i, len = elements.length;
    for(i = 0; i < len; i += 1) {
        elements[i]._render = renderFlag;
        if(elements[i].ty === 'gr') {
            this.changeGroupRender(elements[i].it, renderFlag);
        }
    }
};

RepeaterModifier.prototype.processShapes = function(_isFirstFrame) {
    var items, itemsTransform, i, dir, cont;
    if(this._mdf || _isFirstFrame){
        var copies = Math.ceil(this.c.v);
        if(this._groups.length < copies){
            while(this._groups.length < copies){
                var group = {
                    it:this.cloneElements(this._elements),
                    ty:'gr'
                };
                group.it.push({"a":{"a":0,"ix":1,"k":[0,0]},"nm":"Transform","o":{"a":0,"ix":7,"k":100},"p":{"a":0,"ix":2,"k":[0,0]},"r":{"a":1,"ix":6,"k":[{s:0,e:0,t:0},{s:0,e:0,t:1}]},"s":{"a":0,"ix":3,"k":[100,100]},"sa":{"a":0,"ix":5,"k":0},"sk":{"a":0,"ix":4,"k":0},"ty":"tr"});
                
                this.arr.splice(0,0,group);
                this._groups.splice(0,0,group);
                this._currentCopies += 1;
            }
            this.elem.reloadShapes();
        }
        cont = 0;
        var renderFlag;
        for(i = 0; i  <= this._groups.length - 1; i += 1){
            renderFlag = cont < copies;
            this._groups[i]._render = renderFlag;
            this.changeGroupRender(this._groups[i].it, renderFlag);
            cont += 1;
        }
        
        this._currentCopies = copies;
        ////

        var offset = this.o.v;
        var offsetModulo = offset%1;
        var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
        var k;
        var tMat = this.tr.v.props;
        var pProps = this.pMatrix.props;
        var rProps = this.rMatrix.props;
        var sProps = this.sMatrix.props;
        this.pMatrix.reset();
        this.rMatrix.reset();
        this.sMatrix.reset();
        this.tMatrix.reset();
        this.matrix.reset();
        var iteration = 0;

        if(offset > 0) {
            while(iteration<roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                iteration += 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
                iteration += offsetModulo;
            }
        } else if(offset < 0) {
            while(iteration>roundOffset){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                iteration -= 1;
            }
            if(offsetModulo){
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, - offsetModulo, true);
                iteration -= offsetModulo;
            }
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1;
        dir = this.data.m === 1 ? 1 : -1;
        cont = this._currentCopies;
        var j, jLen;
        while(cont){
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            jLen = itemsTransform.length;
            items[items.length - 1].transform.mProps._mdf = true;
            items[items.length - 1].transform.op._mdf = true;
            items[items.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
            if(iteration !== 0){
                if((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)){
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                }
                this.matrix.transform(rProps[0],rProps[1],rProps[2],rProps[3],rProps[4],rProps[5],rProps[6],rProps[7],rProps[8],rProps[9],rProps[10],rProps[11],rProps[12],rProps[13],rProps[14],rProps[15]);
                this.matrix.transform(sProps[0],sProps[1],sProps[2],sProps[3],sProps[4],sProps[5],sProps[6],sProps[7],sProps[8],sProps[9],sProps[10],sProps[11],sProps[12],sProps[13],sProps[14],sProps[15]);
                this.matrix.transform(pProps[0],pProps[1],pProps[2],pProps[3],pProps[4],pProps[5],pProps[6],pProps[7],pProps[8],pProps[9],pProps[10],pProps[11],pProps[12],pProps[13],pProps[14],pProps[15]);
                
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
                this.matrix.reset();
            } else {
                this.matrix.reset();
                for(j=0;j<jLen;j+=1) {
                    itemsTransform[j] = this.matrix.props[j];
                }
            }
            iteration += 1;
            cont -= 1;
            i += dir;
        }
    } else {
        cont = this._currentCopies;
        i = 0;
        dir = 1;
        while(cont){
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            items[items.length - 1].transform.mProps._mdf = false;
            items[items.length - 1].transform.op._mdf = false;
            cont -= 1;
            i += dir;
        }
    }
};

RepeaterModifier.prototype.addShape = function(){};

ShapeModifiers.registerModifier('rp',RepeaterModifier);
function ShapeCollection(){
	this._length = 0;
	this._maxLength = 4;
	this.shapes = createSizedArray(this._maxLength);
}

ShapeCollection.prototype.addShape = function(shapeData){
	if(this._length === this._maxLength){
		this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
		this._maxLength *= 2;
	}
	this.shapes[this._length] = shapeData;
	this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function(){
	var i;
	for(i = 0; i < this._length; i += 1) {
		shape_pool.release(this.shapes[i]);
	}
	this._length = 0;
};
function DashProperty(elem, data, renderer, container) {
    this.elem = elem;
    this.frameId = -1;
    this.dataProps = createSizedArray(data.length);
    this.renderer = renderer;
    this.k = false;
    this.dashStr = '';
    this.dashArray = createTypedArray('float32',  data.length ? data.length - 1 : 0);
    this.dashoffset = createTypedArray('float32',  1);
    this.initDynamicPropertyContainer(container);
    var i, len = data.length || 0, prop;
    for(i = 0; i < len; i += 1) {
        prop = PropertyFactory.getProp(elem,data[i].v,0, 0, this);
        this.k = prop.k || this.k;
        this.dataProps[i] = {n:data[i].n,p:prop};
    }
    if(!this.k){
        this.getValue(true);
    }
    this._isAnimated = this.k;
}

DashProperty.prototype.getValue = function(forceRender) {
    if(this.elem.globalData.frameId === this.frameId && !forceRender){
        return;
    }
    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
    this._mdf = this._mdf || forceRender;
    if (this._mdf) {
        var i = 0, len = this.dataProps.length;
        if(this.renderer === 'svg') {
            this.dashStr = '';
        }
        for(i=0;i<len;i+=1){
            if(this.dataProps[i].n != 'o'){
                if(this.renderer === 'svg') {
                    this.dashStr += ' ' + this.dataProps[i].p.v;
                }else{
                    this.dashArray[i] = this.dataProps[i].p.v;
                }
            }else{
                this.dashoffset[0] = this.dataProps[i].p.v;
            }
        }
    }
};
extendPrototype([DynamicPropertyContainer], DashProperty);
function GradientProperty(elem,data,container){
    this.data = data;
    this.c = createTypedArray('uint8c', data.p*4);
    var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p*4) : data.k.k.length - data.p*4;
    this.o = createTypedArray('float32', cLength);
    this._cmdf = false;
    this._omdf = false;
    this._collapsable = this.checkCollapsable();
    this._hasOpacity = cLength;
    this.initDynamicPropertyContainer(container);
    this.prop = PropertyFactory.getProp(elem,data.k,1,null,this);
    this.k = this.prop.k;
    this.getValue(true);
}

GradientProperty.prototype.comparePoints = function(values, points) {
    var i = 0, len = this.o.length/2, diff;
    while(i < len) {
        diff = Math.abs(values[i*4] - values[points*4 + i*2]);
        if(diff > 0.01){
            return false;
        }
        i += 1;
    }
    return true;
};

GradientProperty.prototype.checkCollapsable = function() {
    if (this.o.length/2 !== this.c.length/4) {
        return false;
    }
    if (this.data.k.k[0].s) {
        var i = 0, len = this.data.k.k.length;
        while (i < len) {
            if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
                return false;
            }
            i += 1;
        }
    } else if(!this.comparePoints(this.data.k.k, this.data.p)) {
        return false;
    }
    return true;
};

GradientProperty.prototype.getValue = function(forceRender){
    this.prop.getValue();
    this._mdf = false;
    this._cmdf = false;
    this._omdf = false;
    if(this.prop._mdf || forceRender){
        var i, len = this.data.p*4;
        var mult, val;
        for(i=0;i<len;i+=1){
            mult = i%4 === 0 ? 100 : 255;
            val = Math.round(this.prop.v[i]*mult);
            if(this.c[i] !== val){
                this.c[i] = val;
                this._cmdf = !forceRender;
            }
        }
        if(this.o.length){
            len = this.prop.v.length;
            for(i=this.data.p*4;i<len;i+=1){
                mult = i%2 === 0 ? 100 : 1;
                val = i%2 === 0 ?  Math.round(this.prop.v[i]*100):this.prop.v[i];
                if(this.o[i-this.data.p*4] !== val){
                    this.o[i-this.data.p*4] = val;
                    this._omdf = !forceRender;
                }
            }
        }
        this._mdf = !forceRender;
    }
};

extendPrototype([DynamicPropertyContainer], GradientProperty);
var buildShapeString = function(pathNodes, length, closed, mat) {
	if(length === 0) {
            return '';
        }
        var _o = pathNodes.o;
        var _i = pathNodes.i;
        var _v = pathNodes.v;
        var i, shapeString = " M" + mat.applyToPointStringified(_v[0][0], _v[0][1]);
        for(i = 1; i < length; i += 1) {
            shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[i][0], _i[i][1]) + " " + mat.applyToPointStringified(_v[i][0], _v[i][1]);
        }
        if (closed && length) {
            shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[0][0], _i[0][1]) + " " + mat.applyToPointStringified(_v[0][0], _v[0][1]);
            shapeString += 'z';
        }
        return shapeString;
}
var ImagePreloader = (function(){

    var proxyImage = (function(){
        var canvas = createTag('canvas');
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 1, 1);
        return canvas;
    }())

    function imageLoaded(){
        this.loadedAssets += 1;
        if(this.loadedAssets === this.totalImages){
            if(this.imagesLoadedCb) {
                this.imagesLoadedCb(null);
            }
        }
    }

    function getAssetsPath(assetData, assetsPath, original_path) {
        var path = '';
        if (assetData.e) {
            path = assetData.p;
        } else if(assetsPath) {
            var imagePath = assetData.p;
            if (imagePath.indexOf('images/') !== -1) {
                imagePath = imagePath.split('/')[1];
            }
            path = assetsPath + imagePath;
        } else {
            path = original_path;
            path += assetData.u ? assetData.u : '';
            path += assetData.p;
        }
        return path;
    }

    function createImageData(assetData) {
        var path = getAssetsPath(assetData, this.assetsPath, this.path);
        var img = createTag('img');
        img.crossOrigin = 'anonymous';
        img.addEventListener('load', this._imageLoaded.bind(this), false);
        img.addEventListener('error', function() {
            ob.img = proxyImage;
            this._imageLoaded();
        }.bind(this), false);
        img.src = path;
        var ob = {
            img: img,
            assetData: assetData
        }
        return ob;
    }

    function loadAssets(assets, cb){
        this.imagesLoadedCb = cb;
        var i, len = assets.length;
        for (i = 0; i < len; i += 1) {
            if(!assets[i].layers){
                this.totalImages += 1;
                this.images.push(this._createImageData(assets[i]));
            }
        }
    }

    function setPath(path){
        this.path = path || '';
    }

    function setAssetsPath(path){
        this.assetsPath = path || '';
    }

    function getImage(assetData) {
        var i = 0, len = this.images.length;
        while (i < len) {
            if (this.images[i].assetData === assetData) {
                return this.images[i].img;
            }
            i += 1;
        }
    }

    function destroy() {
        this.imagesLoadedCb = null;
        this.images.length = 0;
    }

    function loaded() {
        return this.totalImages === this.loadedAssets;
    }

    return function ImagePreloader(){
        this.loadAssets = loadAssets;
        this.setAssetsPath = setAssetsPath;
        this.setPath = setPath;
        this.loaded = loaded;
        this.destroy = destroy;
        this.getImage = getImage;
        this._createImageData = createImageData;
        this._imageLoaded = imageLoaded;
        this.assetsPath = '';
        this.path = '';
        this.totalImages = 0;
        this.loadedAssets = 0;
        this.imagesLoadedCb = null;
        this.images = [];
    };
}());
var featureSupport = (function(){
	var ob = {
		maskType: true
	};
	if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
	   ob.maskType = false;
	}
	return ob;
}());
var filtersFactory = (function(){
	var ob = {};
	ob.createFilter = createFilter;
	ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

	function createFilter(filId){
        	var fil = createNS('filter');
        	fil.setAttribute('id',filId);
                fil.setAttribute('filterUnits','objectBoundingBox');
                fil.setAttribute('x','0%');
                fil.setAttribute('y','0%');
                fil.setAttribute('width','100%');
                fil.setAttribute('height','100%');
                return fil;
	}

	function createAlphaToLuminanceFilter(){
                var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type','matrix');
                feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
                feColorMatrix.setAttribute('values','0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
                return feColorMatrix;
	}

	return ob;
}());
var assetLoader = (function(){

	function formatResponse(xhr) {
		if(xhr.response && typeof xhr.response === 'object') {
			return xhr.response;
		} else if(xhr.response && typeof xhr.response === 'string') {
			return JSON.parse(xhr.response);
		} else if(xhr.responseText) {
			return JSON.parse(xhr.responseText);
		}
	}

	function loadAsset(path, callback, errorCallback) {
		var response;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		// set responseType after calling open or IE will break.
		try {
		    // This crashes on Android WebView prior to KitKat
		    xhr.responseType = "json";
		} catch (err) {}
	    xhr.send();
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	            if(xhr.status == 200){
	            	response = formatResponse(xhr);
	            	callback(response);
	            }else{
	                try{
	            		response = formatResponse(xhr);
	            		callback(response);
	                }catch(err){
	                	if(errorCallback) {
	                		errorCallback(err);
	                	}
	                }
	            }
	        }
	    };
	}
	return {
		load: loadAsset
	}
}())

function TextAnimatorProperty(textData, renderType, elem){
    this._isFirstFrame = true;
	this._hasMaskedPath = false;
	this._frameId = -1;
	this._textData = textData;
	this._renderType = renderType;
    this._elem = elem;
	this._animatorsData = createSizedArray(this._textData.a.length);
	this._pathData = {};
	this._moreOptions = {
		alignment: {}
	};
	this.renderedLetters = [];
    this.lettersChangedFlag = false;
    this.initDynamicPropertyContainer(elem);

}

TextAnimatorProperty.prototype.searchProperties = function(){
    var i, len = this._textData.a.length, animatorProps;
    var getProp = PropertyFactory.getProp;
    for(i=0;i<len;i+=1){
        animatorProps = this._textData.a[i];
        this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
    }
    if(this._textData.p && 'm' in this._textData.p){
        this._pathData = {
            f: getProp(this._elem,this._textData.p.f,0,0,this),
            l: getProp(this._elem,this._textData.p.l,0,0,this),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        };
        this._hasMaskedPath = true;
    } else {
        this._hasMaskedPath = false;
    }
    this._moreOptions.alignment = getProp(this._elem,this._textData.m.a,1,0,this);
};

TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag){
    this.lettersChangedFlag = lettersChangedFlag;
    if(!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
        return;
    }
    this._isFirstFrame = false;
    var alignment = this._moreOptions.alignment.v;
    var animators = this._animatorsData;
    var textData = this._textData;
    var matrixHelper = this.mHelper;
    var renderType = this._renderType;
    var renderedLettersCount = this.renderedLetters.length;
    var data = this.data;
    var xPos,yPos;
    var i, len;
    var letters = documentData.l, pathInfo, currentLength, currentPoint, segmentLength, flag, pointInd, segmentInd, prevPoint, points, segments, partialLength, totalLength, perc, tanAngle, mask;
    if(this._hasMaskedPath) {
        mask = this._pathData.m;
        if(!this._pathData.n || this._pathData._mdf){
            var paths = mask.v;
            if(this._pathData.r){
                paths = paths.reverse();
            }
            // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
            pathInfo = {
                tLength: 0,
                segments: []
            };
            len = paths._length - 1;
            var bezierData;
            totalLength = 0;
            for (i = 0; i < len; i += 1) {
                bezierData = bez.buildBezierData(paths.v[i]
                    , paths.v[i + 1]
                    , [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]]
                    , [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
                pathInfo.tLength += bezierData.segmentLength;
                pathInfo.segments.push(bezierData);
                totalLength += bezierData.segmentLength;
            }
            i = len;
            if (mask.v.c) {
                bezierData = bez.buildBezierData(paths.v[i]
                    , paths.v[0]
                    , [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]]
                    , [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
                pathInfo.tLength += bezierData.segmentLength;
                pathInfo.segments.push(bezierData);
                totalLength += bezierData.segmentLength;
            }
            this._pathData.pi = pathInfo;
        }
        pathInfo = this._pathData.pi;

        currentLength = this._pathData.f.v;
        segmentInd = 0;
        pointInd = 1;
        segmentLength = 0;
        flag = true;
        segments = pathInfo.segments;
        if (currentLength < 0 && mask.v.c) {
            if (pathInfo.tLength < Math.abs(currentLength)) {
                currentLength = -Math.abs(currentLength) % pathInfo.tLength;
            }
            segmentInd = segments.length - 1;
            points = segments[segmentInd].points;
            pointInd = points.length - 1;
            while (currentLength < 0) {
                currentLength += points[pointInd].partialLength;
                pointInd -= 1;
                if (pointInd < 0) {
                    segmentInd -= 1;
                    points = segments[segmentInd].points;
                    pointInd = points.length - 1;
                }
            }

        }
        points = segments[segmentInd].points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        partialLength = currentPoint.partialLength;
    }


    len = letters.length;
    xPos = 0;
    yPos = 0;
    var yOff = documentData.finalSize * 1.2 * 0.714;
    var firstLine = true;
    var animatorProps, animatorSelector;
    var j, jLen;
    var letterValue;

    jLen = animators.length;
    var lastLetter;

    var mult, ind = -1, offf, xPathPos, yPathPos;
    var initPathPos = currentLength,initSegmentInd = segmentInd, initPointInd = pointInd, currentLine = -1;
    var elemOpacity;
    var sc,sw,fc,k;
    var lineLength = 0;
    var letterSw, letterSc, letterFc, letterM = '', letterP = this.defaultPropsArray, letterO;

    //
    if(documentData.j === 2 || documentData.j === 1) {
        var animatorJustifyOffset = 0;
        var animatorFirstCharOffset = 0;
        var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
        var lastIndex = 0;
        var isNewLine = true;

        for (i = 0; i < len; i += 1) {
            if (letters[i].n) {
                if(animatorJustifyOffset) {
                    animatorJustifyOffset += animatorFirstCharOffset;
                }
                while (lastIndex < i) {
                    letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
                    lastIndex += 1;
                }
                animatorJustifyOffset = 0;
                isNewLine = true;
            } else {
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.t.propType) {
                        if (isNewLine && documentData.j === 2) {
                            animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
                        }
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                        if (mult.length) {
                            animatorJustifyOffset += animatorProps.t.v*mult[0] * justifyOffsetMult;
                        } else {
                            animatorJustifyOffset += animatorProps.t.v*mult * justifyOffsetMult;
                        }
                    }
                }
                isNewLine = false;
            }
        }
        if(animatorJustifyOffset) {
            animatorJustifyOffset += animatorFirstCharOffset;
        }
        while(lastIndex < i) {
            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
            lastIndex += 1;
        }
    }
    //

    for( i = 0; i < len; i += 1) {

        matrixHelper.reset();
        elemOpacity = 1;
        if(letters[i].n) {
            xPos = 0;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            currentLength = initPathPos ;
            firstLine = false;
            lineLength = 0;
            if(this._hasMaskedPath) {
                segmentInd = initSegmentInd;
                pointInd = initPointInd;
                points = segments[segmentInd].points;
                prevPoint = points[pointInd - 1];
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
                segmentLength = 0;
            }
            letterO = letterSw = letterFc = letterM = '';
            letterP = this.defaultPropsArray;
        }else{
            if(this._hasMaskedPath) {
                if(currentLine !== letters[i].line){
                    switch(documentData.j){
                        case 1:
                            currentLength += totalLength - documentData.lineWidths[letters[i].line];
                            break;
                        case 2:
                            currentLength += (totalLength - documentData.lineWidths[letters[i].line])/2;
                            break;
                    }
                    currentLine = letters[i].line;
                }
                if (ind !== letters[i].ind) {
                    if (letters[ind]) {
                        currentLength += letters[ind].extra;
                    }
                    currentLength += letters[i].an / 2;
                    ind = letters[i].ind;
                }
                currentLength += alignment[0] * letters[i].an / 200;
                var animatorOffset = 0;
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.p.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.p.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.p.v[0] * mult;
                        }

                    }
                    if (animatorProps.a.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                        if(mult.length){
                            animatorOffset += animatorProps.a.v[0] * mult[0];
                        } else{
                            animatorOffset += animatorProps.a.v[0] * mult;
                        }

                    }
                }
                flag = true;
                while (flag) {
                    if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                        perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                        xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                        yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                        matrixHelper.translate(-alignment[0]*letters[i].an/200, -(alignment[1] * yOff / 100));
                        flag = false;
                    } else if (points) {
                        segmentLength += currentPoint.partialLength;
                        pointInd += 1;
                        if (pointInd >= points.length) {
                            pointInd = 0;
                            segmentInd += 1;
                            if (!segments[segmentInd]) {
                                if (mask.v.c) {
                                    pointInd = 0;
                                    segmentInd = 0;
                                    points = segments[segmentInd].points;
                                } else {
                                    segmentLength -= currentPoint.partialLength;
                                    points = null;
                                }
                            } else {
                                points = segments[segmentInd].points;
                            }
                        }
                        if (points) {
                            prevPoint = currentPoint;
                            currentPoint = points[pointInd];
                            partialLength = currentPoint.partialLength;
                        }
                    }
                }
                offf = letters[i].an / 2 - letters[i].add;
                matrixHelper.translate(-offf, 0, 0);
            } else {
                offf = letters[i].an/2 - letters[i].add;
                matrixHelper.translate(-offf,0,0);

                // Grouping alignment
                matrixHelper.translate(-alignment[0]*letters[i].an/200, -alignment[1]*yOff/100, 0);
            }

            lineLength += letters[i].l/2;
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.t.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    //This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
                    if(xPos !== 0 || documentData.j !== 0) {
                        if(this._hasMaskedPath) {
                            if(mult.length) {
                                currentLength += animatorProps.t.v*mult[0];
                            } else {
                                currentLength += animatorProps.t.v*mult;
                            }
                        }else{
                            if(mult.length) {
                                xPos += animatorProps.t.v*mult[0];
                            } else {
                                xPos += animatorProps.t.v*mult;
                            }
                        }
                    }
                }
            }
            lineLength += letters[i].l/2;
            if(documentData.strokeWidthAnim) {
                sw = documentData.sw || 0;
            }
            if(documentData.strokeColorAnim) {
                if(documentData.sc){
                    sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
                }else{
                    sc = [0,0,0];
                }
            }
            if(documentData.fillColorAnim && documentData.fc) {
                fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.a.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);

                    if(mult.length){
                        matrixHelper.translate(-animatorProps.a.v[0]*mult[0], -animatorProps.a.v[1]*mult[1], animatorProps.a.v[2]*mult[2]);
                    } else {
                        matrixHelper.translate(-animatorProps.a.v[0]*mult, -animatorProps.a.v[1]*mult, animatorProps.a.v[2]*mult);
                    }
                }
            }
            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;
                if (animatorProps.s.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(mult.length){
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult[0]),1+((animatorProps.s.v[1]-1)*mult[1]),1);
                    } else {
                        matrixHelper.scale(1+((animatorProps.s.v[0]-1)*mult),1+((animatorProps.s.v[1]-1)*mult),1);
                    }
                }
            }
            for(j=0;j<jLen;j+=1) {
                animatorProps = animators[j].a;
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                if (animatorProps.sk.propType) {
                    if(mult.length) {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
                    } else {
                        matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
                    }
                }
                if (animatorProps.r.propType) {
                    if(mult.length) {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
                    } else {
                        matrixHelper.rotateZ(-animatorProps.r.v * mult);
                    }
                }
                if (animatorProps.ry.propType) {

                    if(mult.length) {
                        matrixHelper.rotateY(animatorProps.ry.v*mult[1]);
                    }else{
                        matrixHelper.rotateY(animatorProps.ry.v*mult);
                    }
                }
                if (animatorProps.rx.propType) {
                    if(mult.length) {
                        matrixHelper.rotateX(animatorProps.rx.v*mult[0]);
                    } else {
                        matrixHelper.rotateX(animatorProps.rx.v*mult);
                    }
                }
                if (animatorProps.o.propType) {
                    if(mult.length) {
                        elemOpacity += ((animatorProps.o.v)*mult[0] - elemOpacity)*mult[0];
                    } else {
                        elemOpacity += ((animatorProps.o.v)*mult - elemOpacity)*mult;
                    }
                }
                if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
                    if(mult.length) {
                        sw += animatorProps.sw.v*mult[0];
                    } else {
                        sw += animatorProps.sw.v*mult;
                    }
                }
                if (documentData.strokeColorAnim && animatorProps.sc.propType) {
                    for(k=0;k<3;k+=1){
                        if(mult.length) {
                            sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k])*mult[0];
                        } else {
                            sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k])*mult;
                        }
                    }
                }
                if (documentData.fillColorAnim && documentData.fc) {
                    if(animatorProps.fc.propType){
                        for(k=0;k<3;k+=1){
                            if(mult.length) {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult[0];
                            } else {
                                fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k])*mult;
                            }
                        }
                    }
                    if(animatorProps.fh.propType){
                        if(mult.length) {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult[0]);
                        } else {
                            fc = addHueToRGB(fc,animatorProps.fh.v*mult);
                        }
                    }
                    if(animatorProps.fs.propType){
                        if(mult.length) {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult[0]);
                        } else {
                            fc = addSaturationToRGB(fc,animatorProps.fs.v*mult);
                        }
                    }
                    if(animatorProps.fb.propType){
                        if(mult.length) {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult[0]);
                        } else {
                            fc = addBrightnessToRGB(fc,animatorProps.fb.v*mult);
                        }
                    }
                }
            }

            for(j=0;j<jLen;j+=1){
                animatorProps = animators[j].a;

                if (animatorProps.p.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);
                    if(this._hasMaskedPath) {
                        if(mult.length) {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
                        } else {
                            matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        }
                    }else{
                        if(mult.length) {
                            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
                        } else {
                            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                        
                        }
                    }
                }
            }
            if(documentData.strokeWidthAnim){
                letterSw = sw < 0 ? 0 : sw;
            }
            if(documentData.strokeColorAnim){
                letterSc = 'rgb('+Math.round(sc[0]*255)+','+Math.round(sc[1]*255)+','+Math.round(sc[2]*255)+')';
            }
            if(documentData.fillColorAnim && documentData.fc){
                letterFc = 'rgb('+Math.round(fc[0]*255)+','+Math.round(fc[1]*255)+','+Math.round(fc[2]*255)+')';
            }

            if(this._hasMaskedPath) {
                matrixHelper.translate(0,-documentData.ls);

                matrixHelper.translate(0, alignment[1]*yOff/100 + yPos,0);
                if (textData.p.p) {
                    tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                    var rot = Math.atan(tanAngle) * 180 / Math.PI;
                    if (currentPoint.point[0] < prevPoint.point[0]) {
                        rot += 180;
                    }
                    matrixHelper.rotate(-rot * Math.PI / 180);
                }
                matrixHelper.translate(xPathPos, yPathPos, 0);
                currentLength -= alignment[0]*letters[i].an/200;
                if(letters[i+1] && ind !== letters[i+1].ind){
                    currentLength += letters[i].an / 2;
                    currentLength += documentData.tr/1000*documentData.finalSize;
                }
            }else{

                matrixHelper.translate(xPos,yPos,0);

                if(documentData.ps){
                    //matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
                    matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
                }
                switch(documentData.j){
                    case 1:
                        matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]),0,0);
                        break;
                    case 2:
                        matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line])/2,0,0);
                        break;
                }
                matrixHelper.translate(0,-documentData.ls);
                matrixHelper.translate(offf,0,0);
                matrixHelper.translate(alignment[0]*letters[i].an/200,alignment[1]*yOff/100,0);
                xPos += letters[i].l + documentData.tr/1000*documentData.finalSize;
            }
            if(renderType === 'html'){
                letterM = matrixHelper.toCSS();
            }else if(renderType === 'svg'){
                letterM = matrixHelper.to2dCSS();
            }else{
                letterP = [matrixHelper.props[0],matrixHelper.props[1],matrixHelper.props[2],matrixHelper.props[3],matrixHelper.props[4],matrixHelper.props[5],matrixHelper.props[6],matrixHelper.props[7],matrixHelper.props[8],matrixHelper.props[9],matrixHelper.props[10],matrixHelper.props[11],matrixHelper.props[12],matrixHelper.props[13],matrixHelper.props[14],matrixHelper.props[15]];
            }
            letterO = elemOpacity;
        }

        if(renderedLettersCount <= i) {
            letterValue = new LetterProps(letterO,letterSw,letterSc,letterFc,letterM,letterP);
            this.renderedLetters.push(letterValue);
            renderedLettersCount += 1;
            this.lettersChangedFlag = true;
        } else {
            letterValue = this.renderedLetters[i];
            this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
        }
    }
};

TextAnimatorProperty.prototype.getValue = function(){
	if(this._elem.globalData.frameId === this._frameId){
        return;
    }
    this._frameId = this._elem.globalData.frameId;
    this.iterateDynamicProperties();
};

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
function TextAnimatorDataProperty(elem, animatorProps, container) {
	var defaultData = {propType:false};
	var getProp = PropertyFactory.getProp;
	var textAnimator_animatables = animatorProps.a;
	this.a = {
		r: textAnimator_animatables.r ? getProp(elem, textAnimator_animatables.r, 0, degToRads, container) : defaultData,
		rx: textAnimator_animatables.rx ? getProp(elem, textAnimator_animatables.rx, 0, degToRads, container) : defaultData,
		ry: textAnimator_animatables.ry ? getProp(elem, textAnimator_animatables.ry, 0, degToRads, container) : defaultData,
		sk: textAnimator_animatables.sk ? getProp(elem, textAnimator_animatables.sk, 0, degToRads, container) : defaultData,
		sa: textAnimator_animatables.sa ? getProp(elem, textAnimator_animatables.sa, 0, degToRads, container) : defaultData,
		s: textAnimator_animatables.s ? getProp(elem, textAnimator_animatables.s, 1, 0.01, container) : defaultData,
		a: textAnimator_animatables.a ? getProp(elem, textAnimator_animatables.a, 1, 0, container) : defaultData,
		o: textAnimator_animatables.o ? getProp(elem, textAnimator_animatables.o, 0, 0.01, container) : defaultData,
		p: textAnimator_animatables.p ? getProp(elem,textAnimator_animatables.p, 1, 0, container) : defaultData,
		sw: textAnimator_animatables.sw ? getProp(elem, textAnimator_animatables.sw, 0, 0, container) : defaultData,
		sc: textAnimator_animatables.sc ? getProp(elem, textAnimator_animatables.sc, 1, 0, container) : defaultData,
		fc: textAnimator_animatables.fc ? getProp(elem, textAnimator_animatables.fc, 1, 0, container) : defaultData,
		fh: textAnimator_animatables.fh ? getProp(elem, textAnimator_animatables.fh, 0, 0, container) : defaultData,
		fs: textAnimator_animatables.fs ? getProp(elem, textAnimator_animatables.fs, 0, 0.01, container) : defaultData,
		fb: textAnimator_animatables.fb ? getProp(elem, textAnimator_animatables.fb, 0, 0.01, container) : defaultData,
		t: textAnimator_animatables.t ? getProp(elem, textAnimator_animatables.t, 0, 0, container) : defaultData
	};

	this.s = TextSelectorProp.getTextSelectorProp(elem,animatorProps.s, container);
    this.s.t = animatorProps.s.t;
}
function LetterProps(o, sw, sc, fc, m, p){
    this.o = o;
    this.sw = sw;
    this.sc = sc;
    this.fc = fc;
    this.m = m;
    this.p = p;
    this._mdf = {
    	o: true,
    	sw: !!sw,
    	sc: !!sc,
    	fc: !!fc,
    	m: true,
    	p: true
    };
}

LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
	this._mdf.o = false;
	this._mdf.sw = false;
	this._mdf.sc = false;
	this._mdf.fc = false;
	this._mdf.m = false;
	this._mdf.p = false;
	var updated = false;

	if(this.o !== o) {
		this.o = o;
		this._mdf.o = true;
		updated = true;
	}
	if(this.sw !== sw) {
		this.sw = sw;
		this._mdf.sw = true;
		updated = true;
	}
	if(this.sc !== sc) {
		this.sc = sc;
		this._mdf.sc = true;
		updated = true;
	}
	if(this.fc !== fc) {
		this.fc = fc;
		this._mdf.fc = true;
		updated = true;
	}
	if(this.m !== m) {
		this.m = m;
		this._mdf.m = true;
		updated = true;
	}
	if(p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
		this.p = p;
		this._mdf.p = true;
		updated = true;
	}
	return updated;
};
function TextProperty(elem, data){
	this._frameId = initialDefaultFrame;
	this.pv = '';
	this.v = '';
	this.kf = false;
	this._isFirstFrame = true;
	this._mdf = false;
    this.data = data;
	this.elem = elem;
    this.comp = this.elem.comp;
	this.keysIndex = 0;
    this.canResize = false;
    this.minimumFontSize = 1;
    this.effectsSequence = [];
	this.currentData = {
		ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: '',
        fStyle: '',
        fWeight: '',
        fc: '',
        j: '',
        justifyOffset: '',
        l: [],
        lh: 0,
        lineWidths: [],
        ls: '',
        of: '',
        s: '',
        sc: '',
        sw: 0,
        t: 0,
        tr: 0,
        sz:0,
        ps:null,
        fillColorAnim: false,
        strokeColorAnim: false,
        strokeWidthAnim: false,
        yOffset: 0,
        finalSize:0,
        finalText:[],
        finalLineHeight: 0,
        __complete: false

	};
    this.copyData(this.currentData, this.data.d.k[0].s);

    if(!this.searchProperty()) {
        this.completeTextData(this.currentData);
    }
}

TextProperty.prototype.defaultBoxWidth = [0,0];

TextProperty.prototype.copyData = function(obj, data) {
    for(var s in data) {
        if(data.hasOwnProperty(s)) {
            obj[s] = data[s];
        }
    }
    return obj;
}

TextProperty.prototype.setCurrentData = function(data){
    if(!data.__complete) {
        this.completeTextData(data);
    }
    this.currentData = data;
    this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
    this._mdf = true;
};

TextProperty.prototype.searchProperty = function() {
    return this.searchKeyframes();
};

TextProperty.prototype.searchKeyframes = function() {
    this.kf = this.data.d.k.length > 1;
    if(this.kf) {
        this.addEffect(this.getKeyframeValue.bind(this));
    }
    return this.kf;
}

TextProperty.prototype.addEffect = function(effectFunction) {
	this.effectsSequence.push(effectFunction);
    this.elem.addDynamicProperty(this);
};

TextProperty.prototype.getValue = function(_finalValue) {
    if((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
        return;
    }
    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
    var currentValue = this.currentData;
    var currentIndex = this.keysIndex;
    if(this.lock) {
        this.setCurrentData(this.currentData);
        return;
    }
    this.lock = true;
    this._mdf = false;
    var multipliedValue;
    var i, len = this.effectsSequence.length;
    var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
    for(i = 0; i < len; i += 1) {
        //Checking if index changed to prevent creating a new object every time the expression updates.
        if(currentIndex !== this.keysIndex) {
            finalValue = this.effectsSequence[i](finalValue, finalValue.t);
        } else {
            finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
        }
    }
    if(currentValue !== finalValue) {
        this.setCurrentData(finalValue);
    }
    this.pv = this.v = this.currentData;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
}

TextProperty.prototype.getKeyframeValue = function() {
    var textKeys = this.data.d.k, textDocumentData;
    var frameNum = this.elem.comp.renderedFrame;
    var i = 0, len = textKeys.length;
    while(i <= len - 1) {
        textDocumentData = textKeys[i].s;
        if(i === len - 1 || textKeys[i+1].t > frameNum){
            break;
        }
        i += 1;
    }
    if(this.keysIndex !== i) {
        this.keysIndex = i;
    }
    return this.data.d.k[this.keysIndex].s;
};

TextProperty.prototype.buildFinalText = function(text) {
    var combinedCharacters = FontManager.getCombinedCharacterCodes();
    var charactersArray = [];
    var i = 0, len = text.length;
    var charCode;
    while (i < len) {
        charCode = text.charCodeAt(i);
        if (combinedCharacters.indexOf(charCode) !== -1) {
            charactersArray[charactersArray.length - 1] += text.charAt(i);
        } else {
            if (charCode >= 0xD800 && charCode <= 0xDBFF) {
                charCode = text.charCodeAt(i + 1);
                if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
                    charactersArray.push(text.substr(i, 2));
                    ++i;
                } else {
                    charactersArray.push(text.charAt(i));
                }
            } else {
                charactersArray.push(text.charAt(i));
            }
        }
        i += 1;
    }
    return charactersArray;
}

TextProperty.prototype.completeTextData = function(documentData) {
    documentData.__complete = true;
    var fontManager = this.elem.globalData.fontManager;
    var data = this.data;
    var letters = [];
    var i, len;
    var newLineFlag, index = 0, val;
    var anchorGrouping = data.m.g;
    var currentSize = 0, currentPos = 0, currentLine = 0, lineWidths = [];
    var lineWidth = 0;
    var maxLineWidth = 0;
    var j, jLen;
    var fontData = fontManager.getFontByName(documentData.f);
    var charData, cLength = 0;
    var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];

    var fWeight = 'normal', fStyle = 'normal';
    len = styles.length;
    var styleName;
    for(i=0;i<len;i+=1){
        styleName = styles[i].toLowerCase();
        switch(styleName) {
            case 'italic':
            fStyle = 'italic';
            break;
            case 'bold':
            fWeight = '700';
            break;
            case 'black':
            fWeight = '900';
            break;
            case 'medium':
            fWeight = '500';
            break;
            case 'regular':
            case 'normal':
            fWeight = '400';
            break;
            case 'light':
            case 'thin':
            fWeight = '200';
            break;
        }
    }
    documentData.fWeight = fontData.fWeight || fWeight;
    documentData.fStyle = fStyle;
    documentData.finalSize = documentData.s;
    documentData.finalText = this.buildFinalText(documentData.t);
    len = documentData.finalText.length;
    documentData.finalLineHeight = documentData.lh;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    var charCode;
    if(documentData.sz){
        var flag = true;
        var boxWidth = documentData.sz[0];
        var boxHeight = documentData.sz[1];
        var currentHeight, finalText;
        while(flag) {
            finalText = this.buildFinalText(documentData.t);
            currentHeight = 0;
            lineWidth = 0;
            len = finalText.length;
            trackingOffset = documentData.tr/1000*documentData.finalSize;
            var lastSpaceIndex = -1;
            for(i=0;i<len;i+=1){
                charCode = finalText[i].charCodeAt(0);
                newLineFlag = false;
                if(finalText[i] === ' '){
                    lastSpaceIndex = i;
                }else if(charCode === 13 || charCode === 3){
                    lineWidth = 0;
                    newLineFlag = true;
                    currentHeight += documentData.finalLineHeight || documentData.finalSize*1.2;
                }
                if(fontManager.chars){
                    charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
                    cLength = newLineFlag ? 0 : charData.w*documentData.finalSize/100;
                }else{
                    //tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
                    cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
                }
                if(lineWidth + cLength > boxWidth && finalText[i] !== ' '){
                    if(lastSpaceIndex === -1){
                        len += 1;
                    } else {
                        i = lastSpaceIndex;
                    }
                    currentHeight += documentData.finalLineHeight || documentData.finalSize*1.2;
                    finalText.splice(i, lastSpaceIndex === i ? 1 : 0,"\r");
                    //finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
                    lastSpaceIndex = -1;
                    lineWidth = 0;
                }else {
                    lineWidth += cLength;
                    lineWidth += trackingOffset;
                }
            }
            currentHeight += fontData.ascent*documentData.finalSize/100;
            if(this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
                documentData.finalSize -= 1;
                documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
            } else {
                documentData.finalText = finalText;
                len = documentData.finalText.length;
                flag = false;
            }
        }

    }
    lineWidth = - trackingOffset;
    cLength = 0;
    var uncollapsedSpaces = 0;
    var currentChar;
    for (i = 0;i < len ;i += 1) {
        newLineFlag = false;
        currentChar = documentData.finalText[i];
        charCode = currentChar.charCodeAt(0);
        if (charCode === 13 || charCode === 3) {
            uncollapsedSpaces = 0;
            lineWidths.push(lineWidth);
            maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
            lineWidth = - 2 * trackingOffset;
            val = '';
            newLineFlag = true;
            currentLine += 1;
        }else{
            val = currentChar;
        }
        if(fontManager.chars){
            charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
            cLength = newLineFlag ? 0 : charData.w*documentData.finalSize/100;
        }else{
            //var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
            //tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
            cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
        }

        //
        if(currentChar === ' '){
            uncollapsedSpaces += cLength + trackingOffset;
        } else {
            lineWidth += cLength + trackingOffset + uncollapsedSpaces;
            uncollapsedSpaces = 0;
        }
        letters.push({l:cLength,an:cLength,add:currentSize,n:newLineFlag, anIndexes:[], val: val, line: currentLine, animatorJustifyOffset: 0});
        if(anchorGrouping == 2){
            currentSize += cLength;
            if(val === '' || val === ' ' || i === len - 1){
                if(val === '' || val === ' '){
                    currentSize -= cLength;
                }
                while(currentPos<=i){
                    letters[currentPos].an = currentSize;
                    letters[currentPos].ind = index;
                    letters[currentPos].extra = cLength;
                    currentPos += 1;
                }
                index += 1;
                currentSize = 0;
            }
        }else if(anchorGrouping == 3){
            currentSize += cLength;
            if(val === '' || i === len - 1){
                if(val === ''){
                    currentSize -= cLength;
                }
                while(currentPos<=i){
                    letters[currentPos].an = currentSize;
                    letters[currentPos].ind = index;
                    letters[currentPos].extra = cLength;
                    currentPos += 1;
                }
                currentSize = 0;
                index += 1;
            }
        }else{
            letters[index].ind = index;
            letters[index].extra = 0;
            index += 1;
        }
    }
    documentData.l = letters;
    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
    lineWidths.push(lineWidth);
    if(documentData.sz){
        documentData.boxWidth = documentData.sz[0];
        documentData.justifyOffset = 0;
    }else{
        documentData.boxWidth = maxLineWidth;
        switch(documentData.j){
            case 1:
                documentData.justifyOffset = - documentData.boxWidth;
                break;
            case 2:
                documentData.justifyOffset = - documentData.boxWidth/2;
                break;
            default:
                documentData.justifyOffset = 0;
        }
    }
    documentData.lineWidths = lineWidths;

    var animators = data.a, animatorData, letterData;
    jLen = animators.length;
    var based, ind, indexes = [];
    for(j=0;j<jLen;j+=1){
        animatorData = animators[j];
        if(animatorData.a.sc){
            documentData.strokeColorAnim = true;
        }
        if(animatorData.a.sw){
            documentData.strokeWidthAnim = true;
        }
        if(animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb){
            documentData.fillColorAnim = true;
        }
        ind = 0;
        based = animatorData.s.b;
        for(i=0;i<len;i+=1){
            letterData = letters[i];
            letterData.anIndexes[j] = ind;
            if((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== ' ') || (based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))){
                if(animatorData.s.rn === 1){
                    indexes.push(ind);
                }
                ind += 1;
            }
        }
        data.a[j].s.totalChars = ind;
        var currentInd = -1, newInd;
        if(animatorData.s.rn === 1){
            for(i = 0; i < len; i += 1){
                letterData = letters[i];
                if(currentInd != letterData.anIndexes[j]){
                    currentInd = letterData.anIndexes[j];
                    newInd = indexes.splice(Math.floor(Math.random()*indexes.length),1)[0];
                }
                letterData.anIndexes[j] = newInd;
            }
        }
    }
    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize*1.2;
    documentData.ls = documentData.ls || 0;
    documentData.ascent = fontData.ascent*documentData.finalSize/100;
};

TextProperty.prototype.updateDocumentData = function(newData, index) {
	index = index === undefined ? this.keysIndex : index;
    var dData = this.copyData({}, this.data.d.k[index].s);
    dData = this.copyData(dData, newData);
    this.data.d.k[index].s = dData;
    this.recalculate(index);
    this.elem.addDynamicProperty(this);
};

TextProperty.prototype.recalculate = function(index) {
    var dData = this.data.d.k[index].s;
    dData.__complete = false;
    this.keysIndex = 0;
    this._isFirstFrame = true;
    this.getValue(dData);
}

TextProperty.prototype.canResizeFont = function(_canResize) {
    this.canResize = _canResize;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
};

TextProperty.prototype.setMinimumFontSize = function(_fontValue) {
    this.minimumFontSize = Math.floor(_fontValue) || 1;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
};

var TextSelectorProp = (function(){
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;

    function TextSelectorProp(elem,data){
        this._currentTextLength = -1;
        this.k = false;
        this.data = data;
        this.elem = elem;
        this.comp = elem.comp;
        this.finalS = 0;
        this.finalE = 0;
        this.initDynamicPropertyContainer(elem);
        this.s = PropertyFactory.getProp(elem,data.s || {k:0},0,0,this);
        if('e' in data){
            this.e = PropertyFactory.getProp(elem,data.e,0,0,this);
        }else{
            this.e = {v:100};
        }
        this.o = PropertyFactory.getProp(elem,data.o || {k:0},0,0,this);
        this.xe = PropertyFactory.getProp(elem,data.xe || {k:0},0,0,this);
        this.ne = PropertyFactory.getProp(elem,data.ne || {k:0},0,0,this);
        this.a = PropertyFactory.getProp(elem,data.a,0,0.01,this);
        if(!this.dynamicProperties.length){
            this.getValue();
        }
    }

    TextSelectorProp.prototype = {
        getMult: function(ind) {
            if(this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
                this.getValue();
            }
            //var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
            var x1 = 0;
            var y1 = 0;
            var x2 = 1;
            var y2 = 1;
            if(this.ne.v > 0) {
                x1 = this.ne.v / 100.0;
            }
            else {
                y1 = -this.ne.v / 100.0;
            }
            if(this.xe.v > 0) {
                x2 = 1.0 - this.xe.v / 100.0;
            }
            else {
                y2 = 1.0 + this.xe.v / 100.0;
            }
            var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;

            var mult = 0;
            var s = this.finalS;
            var e = this.finalE;
            var type = this.data.sh;
            if (type === 2){
                if (e === s) {
                    mult = ind >= e ? 1 : 0;
                } else {
                    mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                }
                mult = easer(mult);
            } else if(type === 3) {
                if (e === s) {
                    mult = ind >= e ? 0 : 1;
                }else{
                    mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s),1));
                }

                mult = easer(mult);
            } else if (type === 4) {
                if (e === s) {
                    mult = 0;
                } else {
                    mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                    if (mult < 0.5) {
                        mult *= 2;
                    } else {
                        mult = 1 - 2 * (mult - 0.5);
                    }
                }
                mult = easer(mult);
            } else if (type === 5) {
                if (e === s){
                    mult = 0;
                } else {
                    var tot = e - s;
                    /*ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind;*/
                    ind = min(max(0, ind + 0.5 - s), e - s);
                    var x = -tot/2+ind;
                    var a = tot/2;
                    mult = Math.sqrt(1 - (x * x) / (a * a));
                }
                mult = easer(mult);
            } else if (type === 6) {
                if (e === s){
                    mult = 0;
                } else {
                    ind = min(max(0, ind + 0.5 - s), e - s);
                    mult = (1 + (Math.cos((Math.PI + Math.PI * 2 * (ind) / (e - s))))) / 2;
                }
                mult = easer(mult);
            } else {
                if (ind >= floor(s)) {
                    if (ind - s < 0) {
                        mult = max(0, min(min(e, 1) - (s - ind), 1));
                    } else {
                        mult = max(0, min(e - ind, 1));
                    }
                }
                mult = easer(mult);
            }
            return mult*this.a.v;
        },
        getValue: function(newCharsFlag) {
            this.iterateDynamicProperties();
            this._mdf = newCharsFlag || this._mdf;
            this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
            if(newCharsFlag && this.data.r === 2) {
                this.e.v = this._currentTextLength;
            }
            var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
            var o = this.o.v/divisor;
            var s = this.s.v/divisor + o;
            var e = (this.e.v/divisor) + o;
            if(s>e){
                var _s = s;
                s = e;
                e = _s;
            }
            this.finalS = s;
            this.finalE = e;
        }
    }
    extendPrototype([DynamicPropertyContainer], TextSelectorProp);

    function getTextSelectorProp(elem, data,arr) {
        return new TextSelectorProp(elem, data, arr);
    }

    return {
        getTextSelectorProp: getTextSelectorProp
    };
}());

    
var pool_factory = (function() {
	return function(initialLength, _create, _release, _clone) {

		var _length = 0;
		var _maxLength = initialLength;
		var pool = createSizedArray(_maxLength);

		var ob = {
			newElement: newElement,
			release: release
		};

		function newElement(){
			var element;
			if(_length){
				_length -= 1;
				element = pool[_length];
			} else {
				element = _create();
			}
			return element;
		}

		function release(element) {
			if(_length === _maxLength) {
				pool = pooling.double(pool);
				_maxLength = _maxLength*2;
			}
			if (_release) {
				_release(element);
			}
			pool[_length] = element;
			_length += 1;
		}

		function clone() {
			var clonedElement = newElement();
			return _clone(clonedElement);
		}

		return ob;
	};
}());

var pooling = (function(){

	function double(arr){
		return arr.concat(createSizedArray(arr.length));
	}

	return {
		double: double
	};
}());
var point_pool = (function(){

	function create() {
		return createTypedArray('float32', 2);
	}
	return pool_factory(8, create);
}());
var shape_pool = (function(){

	function create() {
		return new ShapePath();
	}

	function release(shapePath) {
		var len = shapePath._length, i;
		for(i = 0; i < len; i += 1) {
			point_pool.release(shapePath.v[i]);
			point_pool.release(shapePath.i[i]);
			point_pool.release(shapePath.o[i]);
			shapePath.v[i] = null;
			shapePath.i[i] = null;
			shapePath.o[i] = null;
		}
		shapePath._length = 0;
		shapePath.c = false;
	}

	function clone(shape) {
		var cloned = factory.newElement();
		var i, len = shape._length === undefined ? shape.v.length : shape._length;
		cloned.setLength(len);
		cloned.c = shape.c;
		var pt;
		
		for(i = 0; i < len; i += 1) {
			cloned.setTripleAt(shape.v[i][0],shape.v[i][1],shape.o[i][0],shape.o[i][1],shape.i[i][0],shape.i[i][1], i);
		}
		return cloned;
	}

	var factory = pool_factory(4, create, release);
	factory.clone = clone;

	return factory;
}());
var shapeCollection_pool = (function(){
	var ob = {
		newShapeCollection: newShapeCollection,
		release: release
	};

	var _length = 0;
	var _maxLength = 4;
	var pool = createSizedArray(_maxLength);

	function newShapeCollection(){
		var shapeCollection;
		if(_length){
			_length -= 1;
			shapeCollection = pool[_length];
		} else {
			shapeCollection = new ShapeCollection();
		}
		return shapeCollection;
	}

	function release(shapeCollection) {
		var i, len = shapeCollection._length;
		for(i = 0; i < len; i += 1) {
			shape_pool.release(shapeCollection.shapes[i]);
		}
		shapeCollection._length = 0;

		if(_length === _maxLength) {
			pool = pooling.double(pool);
			_maxLength = _maxLength*2;
		}
		pool[_length] = shapeCollection;
		_length += 1;
	}

	return ob;
}());
var segments_length_pool = (function(){

	function create() {
		return {
			lengths: [],
			totalLength: 0
		};
	}

	function release(element) {
		var i, len = element.lengths.length;
		for(i=0;i<len;i+=1) {
			bezier_length_pool.release(element.lengths[i]);
		}
		element.lengths.length = 0;
	}

	return pool_factory(8, create, release);
}());
var bezier_length_pool = (function(){

	function create() {
		return {
            addedLength: 0,
            percents: createTypedArray('float32', defaultCurveSegments),
            lengths: createTypedArray('float32', defaultCurveSegments),
        };
	}
	return pool_factory(8, create);
}());
function BaseRenderer(){}
BaseRenderer.prototype.checkLayers = function(num){
    var i, len = this.layers.length, data;
    this.completeLayers = true;
    for (i = len - 1; i >= 0; i--) {
        if (!this.elements[i]) {
            data = this.layers[i];
            if(data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st))
            {
                this.buildItem(i);
            }
        }
        this.completeLayers = this.elements[i] ? this.completeLayers:false;
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.createItem = function(layer){
    switch(layer.ty){
        case 2:
            return this.createImage(layer);
        case 0:
            return this.createComp(layer);
        case 1:
            return this.createSolid(layer);
        case 3:
            return this.createNull(layer);
        case 4:
            return this.createShape(layer);
        case 5:
            return this.createText(layer);
        case 13:
            return this.createCamera(layer);
    }
    return this.createNull(layer);
};

BaseRenderer.prototype.createCamera = function(){
    throw new Error('You\'re using a 3d camera. Try the html renderer.');
};

BaseRenderer.prototype.buildAllItems = function(){
    var i, len = this.layers.length;
    for(i=0;i<len;i+=1){
        this.buildItem(i);
    }
    this.checkPendingElements();
};

BaseRenderer.prototype.includeLayers = function(newLayers){
    this.completeLayers = false;
    var i, len = newLayers.length;
    var j, jLen = this.layers.length;
    for(i=0;i<len;i+=1){
        j = 0;
        while(j<jLen){
            if(this.layers[j].id == newLayers[i].id){
                this.layers[j] = newLayers[i];
                break;
            }
            j += 1;
        }
    }
};

BaseRenderer.prototype.setProjectInterface = function(pInterface){
    this.globalData.projectInterface = pInterface;
};

BaseRenderer.prototype.initItems = function(){
    if(!this.globalData.progressiveLoad){
        this.buildAllItems();
    }
};
BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy) {
    var elements = this.elements;
    var layers = this.layers;
    var i=0, len = layers.length;
    while (i < len) {
        if (layers[i].ind == parentName) {
            if (!elements[i] || elements[i] === true) {
                this.buildItem(i);
                this.addPendingElement(element);
            } else {
                hierarchy.push(elements[i]);
                elements[i].setAsParent();
                if(layers[i].parent !== undefined) {
                    this.buildElementParenting(element, layers[i].parent, hierarchy);
                } else {
                    element.setHierarchy(hierarchy);
                }
            }
        }
        i += 1;
    }
};

BaseRenderer.prototype.addPendingElement = function(element){
    this.pendingElements.push(element);
};

BaseRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i]);
            comp.initExpressions();
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};

BaseRenderer.prototype.setupGlobalData = function(animData, fontsContainer) {
    this.globalData.fontManager = new FontManager();
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.imageLoader = this.animationItem.imagePreloader;
    this.globalData.frameId = 0;
    this.globalData.frameRate = animData.fr;
    this.globalData.nm = animData.nm;
    this.globalData.compSize = {
        w: animData.w,
        h: animData.h
    }
}
function SVGRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.svgElement = createNS('svg');
    var ariaLabel = '';
    if (config && config.title) {
        var titleElement = createNS('title');
        var titleId = createElementID();
        titleElement.setAttribute('id', titleId);
        titleElement.textContent = config.title;
        this.svgElement.appendChild(titleElement);
        ariaLabel += titleId;
    }
    if (config && config.description) {
        var descElement = createNS('desc');
        var descId = createElementID();
        descElement.setAttribute('id', descId);
        descElement.textContent = config.description;
        this.svgElement.appendChild(descElement);
        ariaLabel += ' ' + descId;
    }
    if (ariaLabel) {
        this.svgElement.setAttribute('aria-labelledby', ariaLabel)
    }
    var defs = createNS( 'defs');
    this.svgElement.appendChild(defs);
    var maskElement = createNS('g');
    this.svgElement.appendChild(maskElement);
    this.layerElement = maskElement;
    this.renderConfig = {
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
        imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
        progressiveLoad: (config && config.progressiveLoad) || false,
        hideOnTransparent: (config && config.hideOnTransparent === false) ? false : true,
        viewBoxOnly: (config && config.viewBoxOnly) || false,
        viewBoxSize: (config && config.viewBoxSize) || false,
        className: (config && config.className) || '',
        id: (config && config.id) || '',
        focusable: config && config.focusable,
        filterSize: {
            width: config && config.filterSize && config.filterSize.width || '100%',
            height: config && config.filterSize && config.filterSize.height || '100%',
            x: config && config.filterSize && config.filterSize.x || '0%',
            y: config && config.filterSize && config.filterSize.y || '0%',
        }
    };

    this.globalData = {
        _mdf: false,
        frameNum: -1,
        defs: defs,
        renderConfig: this.renderConfig
    };
    this.elements = [];
    this.pendingElements = [];
    this.destroyed = false;
    this.rendererType = 'svg';

}

extendPrototype([BaseRenderer],SVGRenderer);

SVGRenderer.prototype.createNull = function (data) {
    return new NullElement(data,this.globalData,this);
};

SVGRenderer.prototype.createShape = function (data) {
    return new SVGShapeElement(data,this.globalData,this);
};

SVGRenderer.prototype.createText = function (data) {
    return new SVGTextElement(data,this.globalData,this);

};

SVGRenderer.prototype.createImage = function (data) {
    return new IImageElement(data,this.globalData,this);
};

SVGRenderer.prototype.createComp = function (data) {
    return new SVGCompElement(data,this.globalData,this);

};

SVGRenderer.prototype.createSolid = function (data) {
    return new ISolidElement(data,this.globalData,this);
};

SVGRenderer.prototype.configAnimation = function(animData){
    this.svgElement.setAttribute('xmlns','http://www.w3.org/2000/svg');
    if(this.renderConfig.viewBoxSize) {
        this.svgElement.setAttribute('viewBox',this.renderConfig.viewBoxSize);
    } else {
        this.svgElement.setAttribute('viewBox','0 0 '+animData.w+' '+animData.h);
    }

    if(!this.renderConfig.viewBoxOnly) {
        this.svgElement.setAttribute('width',animData.w);
        this.svgElement.setAttribute('height',animData.h);
        this.svgElement.style.width = '100%';
        this.svgElement.style.height = '100%';
        this.svgElement.style.transform = 'translate3d(0,0,0)';
    }
    if (this.renderConfig.className) {
        this.svgElement.setAttribute('class', this.renderConfig.className);
    }
    if (this.renderConfig.id) {
        this.svgElement.setAttribute('id', this.renderConfig.id);
    }
    if (this.renderConfig.focusable !== undefined) {
        this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
    }
    this.svgElement.setAttribute('preserveAspectRatio',this.renderConfig.preserveAspectRatio);
    //this.layerElement.style.transform = 'translate3d(0,0,0)';
    //this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
    this.animationItem.wrapper.appendChild(this.svgElement);
    //Mask animation
    var defs = this.globalData.defs;

    this.setupGlobalData(animData, defs);
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.data = animData;

    var maskElement = createNS( 'clipPath');
    var rect = createNS('rect');
    rect.setAttribute('width',animData.w);
    rect.setAttribute('height',animData.h);
    rect.setAttribute('x',0);
    rect.setAttribute('y',0);
    var maskId = createElementID();
    maskElement.setAttribute('id', maskId);
    maskElement.appendChild(rect);
    this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#"+maskId+")");

    defs.appendChild(maskElement);
    this.layers = animData.layers;
    this.elements = createSizedArray(animData.layers.length);
};


SVGRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.layerElement = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem  = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    elements[pos] = true;
    var element = this.createItem(this.layers[pos]);

    elements[pos] = element;
    if(expressionsPlugin){
        if(this.layers[pos].ty === 0){
            this.globalData.projectInterface.registerComposition(element);
        }
        element.initExpressions();
    }
    this.appendElementInPos(element,pos);
    if(this.layers[pos].tt){
        if(!this.elements[pos - 1] || this.elements[pos - 1] === true){
            this.buildItem(pos - 1);
            this.addPendingElement(element);
        } else {
            element.setMatte(elements[pos - 1].layerId);
        }
    }
};

SVGRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
        if(element.data.tt){
            var i = 0, len = this.elements.length;
            while(i<len){
                if(this.elements[i] === element){
                    element.setMatte(this.elements[i - 1].layerId);
                    break;
                }
                i += 1;
            }
        }
    }
};

SVGRenderer.prototype.renderFrame = function(num){
    if(this.renderedFrame === num || this.destroyed){
        return;
    }
    if(num === null){
        num = this.renderedFrame;
    }else{
        this.renderedFrame = num;
    }
    // console.log('-------');
    // console.log('FRAME ',num);
    this.globalData.frameNum = num;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    this.globalData._mdf = false;
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }
    for (i = len - 1; i >= 0; i--) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    if(this.globalData._mdf) {
        for (i = 0; i < len; i += 1) {
            if(this.completeLayers || this.elements[i]){
                this.elements[i].renderFrame();
            }
        }
    }
};

SVGRenderer.prototype.appendElementInPos = function(element, pos){
    var newElement = element.getBaseElement();
    if(!newElement){
        return;
    }
    var i = 0;
    var nextElement;
    while(i<pos){
        if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement()){
            nextElement = this.elements[i].getBaseElement();
        }
        i += 1;
    }
    if(nextElement){
        this.layerElement.insertBefore(newElement, nextElement);
    } else {
        this.layerElement.appendChild(newElement);
    }
};

SVGRenderer.prototype.hide = function(){
    this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function(){
    this.layerElement.style.display = 'block';
};

function CanvasRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.renderConfig = {
        clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
        context: (config && config.context) || null,
        progressiveLoad: (config && config.progressiveLoad) || false,
        preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
        imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
        className: (config && config.className) || '',
        id: (config && config.id) || '',
    };
    this.renderConfig.dpr = (config && config.dpr) || 1;
    if (this.animationItem.wrapper) {
        this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
    }
    this.renderedFrame = -1;
    this.globalData = {
        frameNum: -1,
        _mdf: false,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
    };
    this.contextData = new CVContextData();
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
    this.rendererType = 'canvas';
}
extendPrototype([BaseRenderer],CanvasRenderer);

CanvasRenderer.prototype.createShape = function (data) {
    return new CVShapeElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createText = function (data) {
    return new CVTextElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createImage = function (data) {
    return new CVImageElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createSolid = function (data) {
    return new CVSolidElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

CanvasRenderer.prototype.ctxTransform = function(props){
    if(props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0){
        return;
    }
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.transform(props[0],props[1],props[4],props[5],props[12],props[13]);
        return;
    }
    this.transformMat.cloneFromProps(props);
    var cProps = this.contextData.cTr.props;
    this.transformMat.transform(cProps[0],cProps[1],cProps[2],cProps[3],cProps[4],cProps[5],cProps[6],cProps[7],cProps[8],cProps[9],cProps[10],cProps[11],cProps[12],cProps[13],cProps[14],cProps[15]);
    //this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
    this.contextData.cTr.cloneFromProps(this.transformMat.props);
    var trProps = this.contextData.cTr.props;
    this.canvasContext.setTransform(trProps[0],trProps[1],trProps[4],trProps[5],trProps[12],trProps[13]);
};

CanvasRenderer.prototype.ctxOpacity = function(op){
    /*if(op === 1){
        return;
    }*/
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
        this.globalData.currentGlobalAlpha = this.contextData.cO;
        return;
    }
    this.contextData.cO *= op < 0 ? 0 : op;
    if(this.globalData.currentGlobalAlpha !== this.contextData.cO) {
        this.canvasContext.globalAlpha = this.contextData.cO;
        this.globalData.currentGlobalAlpha = this.contextData.cO;
    }
};

CanvasRenderer.prototype.reset = function(){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    this.contextData.reset();
};

CanvasRenderer.prototype.save = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.save();
        return;
    }
    if(actionFlag){
        this.canvasContext.save();
    }
    var props = this.contextData.cTr.props;
    if(this.contextData._length <= this.contextData.cArrPos) {
        this.contextData.duplicate();
    }
    var i, arr = this.contextData.saved[this.contextData.cArrPos];
    for (i = 0; i < 16; i += 1) {
        arr[i] = props[i];
    }
    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
    this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function(actionFlag){
    if(!this.renderConfig.clearCanvas){
        this.canvasContext.restore();
        return;
    }
    if(actionFlag){
        this.canvasContext.restore();
        this.globalData.blendMode = 'source-over';
    }
    this.contextData.cArrPos -= 1;
    var popped = this.contextData.saved[this.contextData.cArrPos];
    var i,arr = this.contextData.cTr.props;
    for(i=0;i<16;i+=1){
        arr[i] = popped[i];
    }
    this.canvasContext.setTransform(popped[0],popped[1],popped[4],popped[5],popped[12],popped[13]);
    popped = this.contextData.savedOp[this.contextData.cArrPos];
    this.contextData.cO = popped;
    if(this.globalData.currentGlobalAlpha !== popped) {
        this.canvasContext.globalAlpha = popped;
        this.globalData.currentGlobalAlpha = popped;
    }
};

CanvasRenderer.prototype.configAnimation = function(animData){
    if(this.animationItem.wrapper){
        this.animationItem.container = createTag('canvas');
        this.animationItem.container.style.width = '100%';
        this.animationItem.container.style.height = '100%';
        //this.animationItem.container.style.transform = 'translate3d(0,0,0)';
        //this.animationItem.container.style.webkitTransform = 'translate3d(0,0,0)';
        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style['-webkit-transform'] = "0px 0px 0px";
        this.animationItem.wrapper.appendChild(this.animationItem.container);
        this.canvasContext = this.animationItem.container.getContext('2d');
        if(this.renderConfig.className) {
            this.animationItem.container.setAttribute('class', this.renderConfig.className);
        }
        if(this.renderConfig.id) {
            this.animationItem.container.setAttribute('id', this.renderConfig.id);
        }
    }else{
        this.canvasContext = this.renderConfig.context;
    }
    this.data = animData;
    this.layers = animData.layers;
    this.transformCanvas = {
        w: animData.w,
        h:animData.h,
        sx:0,
        sy:0,
        tx:0,
        ty:0
    };
    this.setupGlobalData(animData, document.body);
    this.globalData.canvasContext = this.canvasContext;
    this.globalData.renderer = this;
    this.globalData.isDashed = false;
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.globalData.transformCanvas = this.transformCanvas;
    this.elements = createSizedArray(animData.layers.length);

    this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
    this.reset();
    var elementWidth,elementHeight;
    if(this.animationItem.wrapper && this.animationItem.container){
        elementWidth = this.animationItem.wrapper.offsetWidth;
        elementHeight = this.animationItem.wrapper.offsetHeight;
        this.animationItem.container.setAttribute('width',elementWidth * this.renderConfig.dpr );
        this.animationItem.container.setAttribute('height',elementHeight * this.renderConfig.dpr);
    }else{
        elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
        elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
    }
    var elementRel,animationRel;
    if(this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1){
        var par = this.renderConfig.preserveAspectRatio.split(' ');
        var fillType = par[1] || 'meet';
        var pos = par[0] || 'xMidYMid';
        var xPos = pos.substr(0,4);
        var yPos = pos.substr(4);
        elementRel = elementWidth/elementHeight;
        animationRel = this.transformCanvas.w/this.transformCanvas.h;
        if(animationRel>elementRel && fillType === 'meet' || animationRel<elementRel && fillType === 'slice'){
            this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
            this.transformCanvas.sy = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        }else{
            this.transformCanvas.sx = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight/(this.transformCanvas.h / this.renderConfig.dpr);
        }

        if(xPos === 'xMid' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))/2*this.renderConfig.dpr;
        } else if(xPos === 'xMax' && ((animationRel<elementRel && fillType==='meet') || (animationRel>elementRel && fillType === 'slice'))){
            this.transformCanvas.tx = (elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.tx = 0;
        }
        if(yPos === 'YMid' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w))/2)*this.renderConfig.dpr;
        } else if(yPos === 'YMax' && ((animationRel>elementRel && fillType==='meet') || (animationRel<elementRel && fillType === 'slice'))){
            this.transformCanvas.ty = ((elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w)))*this.renderConfig.dpr;
        } else {
            this.transformCanvas.ty = 0;
        }

    }else if(this.renderConfig.preserveAspectRatio == 'none'){
        this.transformCanvas.sx = elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);
        this.transformCanvas.sy = elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }else{
        this.transformCanvas.sx = this.renderConfig.dpr;
        this.transformCanvas.sy = this.renderConfig.dpr;
        this.transformCanvas.tx = 0;
        this.transformCanvas.ty = 0;
    }
    this.transformCanvas.props = [this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];
    /*var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    }*/
    this.ctxTransform(this.transformCanvas.props);
    this.canvasContext.beginPath();
    this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h);
    this.canvasContext.closePath();
    this.canvasContext.clip();

    this.renderFrame(this.renderedFrame, true);
};

CanvasRenderer.prototype.destroy = function () {
    if(this.renderConfig.clearCanvas) {
        this.animationItem.wrapper.innerHTML = '';
    }
    var i, len = this.layers ? this.layers.length : 0;
    for (i = len - 1; i >= 0; i-=1) {
        if(this.elements[i]) {
            this.elements[i].destroy();
        }
    }
    this.elements.length = 0;
    this.globalData.canvasContext = null;
    this.animationItem.container = null;
    this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function(num, forceRender){
    if((this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender) || this.destroyed || num === -1){
        return;
    }
    this.renderedFrame = num;
    this.globalData.frameNum = num - this.animationItem._isFirstFrame;
    this.globalData.frameId += 1;
    this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
    this.globalData.projectInterface.currentFrame = num;

     // console.log('--------');
     // console.log('NEW: ',num);
    var i, len = this.layers.length;
    if(!this.completeLayers){
        this.checkLayers(num);
    }

    for (i = 0; i < len; i++) {
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(num - this.layers[i].st);
        }
    }
    if(this.globalData._mdf) {
        if(this.renderConfig.clearCanvas === true){
            this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
        }else{
            this.save();
        }
        for (i = len - 1; i >= 0; i-=1) {
            if(this.completeLayers || this.elements[i]){
                this.elements[i].renderFrame();
            }
        }
        if(this.renderConfig.clearCanvas !== true){
            this.restore();
        }
    }
};

CanvasRenderer.prototype.buildItem = function(pos){
    var elements = this.elements;
    if(elements[pos] || this.layers[pos].ty == 99){
        return;
    }
    var element = this.createItem(this.layers[pos], this,this.globalData);
    elements[pos] = element;
    element.initExpressions();
    /*if(this.layers[pos].ty === 0){
        element.resize(this.globalData.transformCanvas);
    }*/
};

CanvasRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

CanvasRenderer.prototype.hide = function(){
    this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototype.show = function(){
    this.animationItem.container.style.display = 'block';
};

function HybridRenderer(animationItem, config){
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
        className: (config && config.className) || '',
        imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
        hideOnTransparent: (config && config.hideOnTransparent === false) ? false : true,
        filterSize: {
            width: config && config.filterSize && config.filterSize.width || '400%',
            height: config && config.filterSize && config.filterSize.height || '400%',
            x: config && config.filterSize && config.filterSize.x || '-100%',
            y: config && config.filterSize && config.filterSize.y || '-100%',
        }
    };
    this.globalData = {
        _mdf: false,
        frameNum: -1,
        renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;
    this.rendererType = 'html';

}

extendPrototype([BaseRenderer],HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingElements  = function(){
    while(this.pendingElements.length){
        var element = this.pendingElements.pop();
        element.checkParenting();
    }
};

HybridRenderer.prototype.appendElementInPos = function(element, pos){
    var newDOMElement = element.getBaseElement();
    if(!newDOMElement){
        return;
    }
    var layer = this.layers[pos];
    if(!layer.ddd || !this.supports3d){
        if(this.threeDElements) {
            this.addTo3dContainer(newDOMElement,pos);
        } else {
            var i = 0;
            var nextDOMElement, nextLayer, tmpDOMElement;
            while(i<pos){
                if(this.elements[i] && this.elements[i]!== true && this.elements[i].getBaseElement){
                    nextLayer = this.elements[i];
                    tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
                    nextDOMElement = tmpDOMElement || nextDOMElement;
                }
                i += 1;
            }
            if(nextDOMElement){
                if(!layer.ddd || !this.supports3d){
                    this.layerElement.insertBefore(newDOMElement, nextDOMElement);
                }
            } else {
                if(!layer.ddd || !this.supports3d){
                    this.layerElement.appendChild(newDOMElement);
                }
            }
        }
        
    } else {
        this.addTo3dContainer(newDOMElement,pos);
    }
};

HybridRenderer.prototype.createShape = function (data) {
    if(!this.supports3d){
        return new SVGShapeElement(data, this.globalData, this);
    }
    return new HShapeElement(data, this.globalData, this);
};

HybridRenderer.prototype.createText = function (data) {
    if(!this.supports3d){
        return new SVGTextElement(data, this.globalData, this);
    }
    return new HTextElement(data, this.globalData, this);
};

HybridRenderer.prototype.createCamera = function (data) {
    this.camera = new HCameraElement(data, this.globalData, this);
    return this.camera;
};

HybridRenderer.prototype.createImage = function (data) {
    if(!this.supports3d){
        return new IImageElement(data, this.globalData, this);
    }
    return new HImageElement(data, this.globalData, this);
};

HybridRenderer.prototype.createComp = function (data) {
    if(!this.supports3d){
        return new SVGCompElement(data, this.globalData, this);
    }
    return new HCompElement(data, this.globalData, this);

};

HybridRenderer.prototype.createSolid = function (data) {
    if(!this.supports3d){
        return new ISolidElement(data, this.globalData, this);
    }
    return new HSolidElement(data, this.globalData, this);
};

HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

HybridRenderer.prototype.getThreeDContainerByPos = function(pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len) {
        if(this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
            return this.threeDElements[i].perspectiveElem;
        }
        i += 1;
    }
};

HybridRenderer.prototype.createThreeDContainer = function(pos, type){
    var perspectiveElem = createTag('div');
    styleDiv(perspectiveElem);
    var container = createTag('div');
    styleDiv(container);
    if(type === '3d') {
        perspectiveElem.style.width = this.globalData.compSize.w+'px';
        perspectiveElem.style.height = this.globalData.compSize.h+'px';
        perspectiveElem.style.transformOrigin = perspectiveElem.style.mozTransformOrigin = perspectiveElem.style.webkitTransformOrigin = "50% 50%";
        container.style.transform = container.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    }
    
    perspectiveElem.appendChild(container);
    //this.resizerElem.appendChild(perspectiveElem);
    var threeDContainerData = {
        container:container,
        perspectiveElem:perspectiveElem,
        startPos: pos,
        endPos: pos,
        type: type
    };
    this.threeDElements.push(threeDContainerData);
    return threeDContainerData;
};

HybridRenderer.prototype.build3dContainers = function(){
    var i, len = this.layers.length;
    var lastThreeDContainerData;
    var currentContainer = '';
    for(i=0;i<len;i+=1){
        if(this.layers[i].ddd && this.layers[i].ty !== 3){
            if(currentContainer !== '3d'){
                currentContainer = '3d';
                lastThreeDContainerData = this.createThreeDContainer(i,'3d');
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos,i);
        } else {
            if(currentContainer !== '2d'){
                currentContainer = '2d';
                lastThreeDContainerData = this.createThreeDContainer(i,'2d');
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos,i);
        }
    }
    len = this.threeDElements.length;
    for(i = len - 1; i >= 0; i --) {
        this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
    }
};

HybridRenderer.prototype.addTo3dContainer = function(elem,pos){
    var i = 0, len = this.threeDElements.length;
    while(i<len){
        if(pos <= this.threeDElements[i].endPos){
            var j = this.threeDElements[i].startPos;
            var nextElement;
            while(j<pos){
                if(this.elements[j] && this.elements[j].getBaseElement){
                    nextElement = this.elements[j].getBaseElement();
                }
                j += 1;
            }
            if(nextElement){
                this.threeDElements[i].container.insertBefore(elem, nextElement);
            } else {
                this.threeDElements[i].container.appendChild(elem);
            }
            break;
        }
        i += 1;
    }
};

HybridRenderer.prototype.configAnimation = function(animData){
    var resizerElem = createTag('div');
    var wrapper = this.animationItem.wrapper;
    resizerElem.style.width = animData.w+'px';
    resizerElem.style.height = animData.h+'px';
    this.resizerElem = resizerElem;
    styleDiv(resizerElem);
    resizerElem.style.transformStyle = resizerElem.style.webkitTransformStyle = resizerElem.style.mozTransformStyle = "flat";
    if(this.renderConfig.className) {
      resizerElem.setAttribute('class', this.renderConfig.className);
    }
    wrapper.appendChild(resizerElem);

    resizerElem.style.overflow = 'hidden';
    var svg = createNS('svg');
    svg.setAttribute('width','1');
    svg.setAttribute('height','1');
    styleDiv(svg);
    this.resizerElem.appendChild(svg);
    var defs = createNS('defs');
    svg.appendChild(defs);
    this.data = animData;
    //Mask animation
    this.setupGlobalData(animData, svg);
    this.globalData.defs = defs;
    this.layers = animData.layers;
    this.layerElement = this.resizerElem;
    this.build3dContainers();
    this.updateContainerSize();
};

HybridRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = '';
    this.animationItem.container = null;
    this.globalData.defs = null;
    var i, len = this.layers ? this.layers.length : 0;
    for (i = 0; i < len; i++) {
        this.elements[i].destroy();
    }
    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
};

HybridRenderer.prototype.updateContainerSize = function () {
    var elementWidth = this.animationItem.wrapper.offsetWidth;
    var elementHeight = this.animationItem.wrapper.offsetHeight;
    var elementRel = elementWidth/elementHeight;
    var animationRel = this.globalData.compSize.w/this.globalData.compSize.h;
    var sx,sy,tx,ty;
    if(animationRel>elementRel){
        sx = elementWidth/(this.globalData.compSize.w);
        sy = elementWidth/(this.globalData.compSize.w);
        tx = 0;
        ty = ((elementHeight-this.globalData.compSize.h*(elementWidth/this.globalData.compSize.w))/2);
    }else{
        sx = elementHeight/(this.globalData.compSize.h);
        sy = elementHeight/(this.globalData.compSize.h);
        tx = (elementWidth-this.globalData.compSize.w*(elementHeight/this.globalData.compSize.h))/2;
        ty = 0;
    }
    this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,'+sy+',0,0,0,0,1,0,'+tx+','+ty+',0,1)';
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function(){
    this.resizerElem.style.display = 'none';
};

HybridRenderer.prototype.show = function(){
    this.resizerElem.style.display = 'block';
};

HybridRenderer.prototype.initItems = function(){
    this.buildAllItems();
    if(this.camera){
        this.camera.setup();
    } else {
        var cWidth = this.globalData.compSize.w;
        var cHeight = this.globalData.compSize.h;
        var i, len = this.threeDElements.length;
        for(i=0;i<len;i+=1){
            this.threeDElements[i].perspectiveElem.style.perspective = this.threeDElements[i].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(cWidth,2) + Math.pow(cHeight,2)) + 'px';
        }
    }
};

HybridRenderer.prototype.searchExtraCompositions = function(assets){
    var i, len = assets.length;
    var floatingContainer = createTag('div');
    for(i=0;i<len;i+=1){
        if(assets[i].xt){
            var comp = this.createComp(assets[i],floatingContainer,this.globalData.comp,null);
            comp.initExpressions();
            this.globalData.projectInterface.registerComposition(comp);
        }
    }
};

function MaskElement(data,element,globalData) {
    this.data = data;
    this.element = element;
    this.globalData = globalData;
    this.storedData = [];
    this.masksProperties = this.data.masksProperties || [];
    this.maskElement = null;
    var defs = this.globalData.defs;
    var i, len = this.masksProperties ? this.masksProperties.length : 0;
    this.viewData = createSizedArray(len);
    this.solidPath = '';


    var path, properties = this.masksProperties;
    var count = 0;
    var currentMasks = [];
    var j, jLen;
    var layerId = createElementID();
    var rect, expansor, feMorph,x;
    var maskType = 'clipPath', maskRef = 'clip-path';
    for (i = 0; i < len; i++) {
        if((properties[i].mode !== 'a' && properties[i].mode !== 'n')|| properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x){
            maskType = 'mask';
            maskRef = 'mask';
        }

        if((properties[i].mode == 's' || properties[i].mode == 'i') && count === 0){
            rect = createNS( 'rect');
            rect.setAttribute('fill', '#ffffff');
            rect.setAttribute('width', this.element.comp.data.w || 0);
            rect.setAttribute('height', this.element.comp.data.h || 0);
            currentMasks.push(rect);
        } else {
            rect = null;
        }

        path = createNS( 'path');
        if(properties[i].mode == 'n') {
            // TODO move this to a factory or to a constructor
            this.viewData[i] = {
                op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element,properties[i],3),
                elem: path,
                lastPath: ''
            };
            defs.appendChild(path);
            continue;
        }
        count += 1;

        path.setAttribute('fill', properties[i].mode === 's' ? '#000000':'#ffffff');
        path.setAttribute('clip-rule','nonzero');
        var filterID;

        if (properties[i].x.k !== 0) {
            maskType = 'mask';
            maskRef = 'mask';
            x = PropertyFactory.getProp(this.element,properties[i].x,0,null,this.element);
            filterID = createElementID();
            expansor = createNS('filter');
            expansor.setAttribute('id',filterID);
            feMorph = createNS('feMorphology');
            feMorph.setAttribute('operator','erode');
            feMorph.setAttribute('in','SourceGraphic');
            feMorph.setAttribute('radius','0');
            expansor.appendChild(feMorph);
            defs.appendChild(expansor);
            path.setAttribute('stroke', properties[i].mode === 's' ? '#000000':'#ffffff');
        } else {
            feMorph = null;
            x = null;
        }

        // TODO move this to a factory or to a constructor
        this.storedData[i] = {
             elem: path,
             x: x,
             expan: feMorph,
            lastPath: '',
            lastOperator:'',
            filterId:filterID,
            lastRadius:0
        };
        if(properties[i].mode == 'i'){
            jLen = currentMasks.length;
            var g = createNS('g');
            for(j=0;j<jLen;j+=1){
                g.appendChild(currentMasks[j]);
            }
            var mask = createNS('mask');
            mask.setAttribute('mask-type','alpha');
            mask.setAttribute('id',layerId+'_'+count);
            mask.appendChild(path);
            defs.appendChild(mask);
            g.setAttribute('mask','url(' + locationHref + '#'+layerId+'_'+count+')');

            currentMasks.length = 0;
            currentMasks.push(g);
        }else{
            currentMasks.push(path);
        }
        if(properties[i].inv && !this.solidPath){
            this.solidPath = this.createLayerSolidPath();
        }
        // TODO move this to a factory or to a constructor
        this.viewData[i] = {
            elem: path,
            lastPath: '',
            op: PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),
            prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3),
            invRect: rect
        };
        if(!this.viewData[i].prop.k){
            this.drawPath(properties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
    }

    this.maskElement = createNS( maskType);

    len = currentMasks.length;
    for(i=0;i<len;i+=1){
        this.maskElement.appendChild(currentMasks[i]);
    }

    if(count > 0){
        this.maskElement.setAttribute('id', layerId);
        this.element.maskedElement.setAttribute(maskRef, "url(" + locationHref + "#" + layerId + ")");
        defs.appendChild(this.maskElement);
    }
    if (this.viewData.length) {
        this.element.addRenderableComponent(this);
    }

}

MaskElement.prototype.getMaskProperty = function(pos){
    return this.viewData[pos].prop;
};

MaskElement.prototype.renderFrame = function (isFirstFrame) {
    var finalMat = this.element.finalTransform.mat;
    var i, len = this.masksProperties.length;
    for (i = 0; i < len; i++) {
        if(this.viewData[i].prop._mdf || isFirstFrame){
            this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]);
        }
        if(this.viewData[i].op._mdf || isFirstFrame){
            this.viewData[i].elem.setAttribute('fill-opacity',this.viewData[i].op.v);
        }
        if(this.masksProperties[i].mode !== 'n'){
            if(this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)){
                this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS())
            }
            if(this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)){
                var feMorph = this.storedData[i].expan;
                if(this.storedData[i].x.v < 0){
                    if(this.storedData[i].lastOperator !== 'erode'){
                        this.storedData[i].lastOperator = 'erode';
                        this.storedData[i].elem.setAttribute('filter','url(' + locationHref + '#'+this.storedData[i].filterId+')');
                    }
                    feMorph.setAttribute('radius',-this.storedData[i].x.v);
                }else{
                    if(this.storedData[i].lastOperator !== 'dilate'){
                        this.storedData[i].lastOperator = 'dilate';
                        this.storedData[i].elem.setAttribute('filter',null);
                    }
                    this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v*2);

                }
            }
        }
    }
};

MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
};

MaskElement.prototype.createLayerSolidPath = function(){
    var path = 'M0,0 ';
    path += ' h' + this.globalData.compSize.w ;
    path += ' v' + this.globalData.compSize.h ;
    path += ' h-' + this.globalData.compSize.w ;
    path += ' v-' + this.globalData.compSize.h + ' ';
    return path;
};

MaskElement.prototype.drawPath = function(pathData,pathNodes,viewData){
    var pathString = " M"+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    var i, len;
    len = pathNodes._length;
    for(i=1;i<len;i+=1){
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
        pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
    }
        //pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    if(pathNodes.c && len > 1){
        pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
    }
    //pathNodes.__renderedString = pathString;

    if(viewData.lastPath !== pathString){
        var pathShapeValue = '';
        if(viewData.elem){
            if(pathNodes.c){
                pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
            }
            viewData.elem.setAttribute('d',pathShapeValue);
        }
        viewData.lastPath = pathString;
    }
};

MaskElement.prototype.destroy = function(){
    this.element = null;
    this.globalData = null;
    this.maskElement = null;
    this.data = null;
    this.masksProperties = null;
};

/**
 * @file 
 * Handles AE's layer parenting property.
 *
 */

function HierarchyElement(){}

HierarchyElement.prototype = {
	/**
     * @function 
     * Initializes hierarchy properties
     *
     */
	initHierarchy: function() {
		//element's parent list
	    this.hierarchy = [];
	    //if element is parent of another layer _isParent will be true
	    this._isParent = false;
	    this.checkParenting();
	},
	/**
     * @function 
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */ 
	setHierarchy: function(hierarchy){
	    this.hierarchy = hierarchy;
	},
	/**
     * @function 
     * Sets layer as parent.
     *
     */ 
	setAsParent: function() {
	    this._isParent = true;
	},
	/**
     * @function 
     * Searches layer's parenting chain
     *
     */ 
	checkParenting: function(){
	    if (this.data.parent !== undefined){
	        this.comp.buildElementParenting(this, this.data.parent, []);
	    }
	}
};
/**
 * @file 
 * Handles element's layer frame update.
 * Checks layer in point and out point
 *
 */

function FrameElement(){}

FrameElement.prototype = {
    /**
     * @function 
     * Initializes frame related properties.
     *
     */
    initFrame: function(){
        //set to true when inpoint is rendered
        this._isFirstFrame = false;
        //list of animated properties
        this.dynamicProperties = [];
        // If layer has been modified in current tick this will be true
        this._mdf = false;
    },
    /**
     * @function 
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     * 
     */
    prepareProperties: function(num, isVisible) {
        var i, len = this.dynamicProperties.length;
        for (i = 0;i < len; i += 1) {
            if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
                this.dynamicProperties[i].getValue();
                if (this.dynamicProperties[i]._mdf) {
                    this.globalData._mdf = true;
                    this._mdf = true;
                }
            }
        }
    },
    addDynamicProperty: function(prop) {
        if(this.dynamicProperties.indexOf(prop) === -1) {
            this.dynamicProperties.push(prop);
        }
    }
};
function TransformElement(){}

TransformElement.prototype = {
    initTransform: function() {
        this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o:0},
            _matMdf: false,
            _opMdf: false,
            mat: new Matrix()
        };
        if (this.data.ao) {
            this.finalTransform.mProp.autoOriented = true;
        }

        //TODO: check TYPE 11: Guided elements
        if (this.data.ty !== 11) {
            //this.createElements();
        }
    },
    renderTransform: function() {

        this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
        this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

        if (this.hierarchy) {
            var mat;
            var finalMat = this.finalTransform.mat;
            var i = 0, len = this.hierarchy.length;
            //Checking if any of the transformation matrices in the hierarchy chain has changed.
            if (!this.finalTransform._matMdf) {
                while (i < len) {
                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = true;
                        break;
                    }
                    i += 1;
                }
            }
            
            if (this.finalTransform._matMdf) {
                mat = this.finalTransform.mProp.v.props;
                finalMat.cloneFromProps(mat);
                for (i = 0; i < len; i += 1) {
                    mat = this.hierarchy[i].finalTransform.mProp.v.props;
                    finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
                }
            }
        }
    },
    globalToLocal: function(pt) {
        var transforms = [];
        transforms.push(this.finalTransform);
        var flag = true;
        var comp = this.comp;
        while (flag) {
            if (comp.finalTransform) {
                if (comp.data.hasMask) {
                    transforms.splice(0, 0, comp.finalTransform);
                }
                comp = comp.comp;
            } else {
                flag = false;
            }
        }
        var i, len = transforms.length,ptNew;
        for (i = 0; i < len; i += 1) {
            ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
            //ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
            pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
        }
        return pt;
    },
    mHelper: new Matrix()
};
function RenderableElement(){

}

RenderableElement.prototype = {
    initRenderable: function() {
        //layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
        this.isInRange = false;
        //layer's display state
        this.hidden = false;
        // If layer's transparency equals 0, it can be hidden
        this.isTransparent = false;
        //list of animated components
        this.renderableComponents = [];
    },
    addRenderableComponent: function(component) {
        if(this.renderableComponents.indexOf(component) === -1) {
            this.renderableComponents.push(component);
        }
    },
    removeRenderableComponent: function(component) {
        if(this.renderableComponents.indexOf(component) !== -1) {
            this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
        }
    },
    prepareRenderableFrame: function(num) {
        this.checkLayerLimits(num);
    },
    checkTransparency: function(){
        if(this.finalTransform.mProp.o.v <= 0) {
            if(!this.isTransparent && this.globalData.renderConfig.hideOnTransparent){
                this.isTransparent = true;
                this.hide();
            }
        } else if(this.isTransparent) {
            this.isTransparent = false;
            this.show();
        }
    },
    /**
     * @function 
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     * 
     */
    checkLayerLimits: function(num) {
        if(this.data.ip - this.data.st <= num && this.data.op - this.data.st > num)
        {
            if(this.isInRange !== true){
                this.globalData._mdf = true;
                this._mdf = true;
                this.isInRange = true;
                this.show();
            }
        } else {
            if(this.isInRange !== false){
                this.globalData._mdf = true;
                this.isInRange = false;
                this.hide();
            }
        }
    },
    renderRenderable: function() {
        var i, len = this.renderableComponents.length;
        for(i = 0; i < len; i += 1) {
            this.renderableComponents[i].renderFrame(this._isFirstFrame);
        }
        /*this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame);*/
    },
    sourceRectAtTime: function(){
        return {
            top:0,
            left:0,
            width:100,
            height:100
        };
    },
    getLayerSize: function(){
        if(this.data.ty === 5){
            return {w:this.data.textData.width,h:this.data.textData.height};
        }else{
            return {w:this.data.width,h:this.data.height};
        }
    }
};
function RenderableDOMElement() {}

(function(){
    var _prototype = {
        initElement: function(data,globalData,comp) {
            this.initFrame();
            this.initBaseData(data, globalData, comp);
            this.initTransform(data, globalData, comp);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            this.createContent();
            this.hide();
        },
        hide: function(){
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                var elem = this.baseElement || this.layerElement;
                elem.style.display = 'none';
                this.hidden = true;
            }
        },
        show: function(){
            if (this.isInRange && !this.isTransparent){
                if (!this.data.hd) {
                    var elem = this.baseElement || this.layerElement;
                    elem.style.display = 'block';
                }
                this.hidden = false;
                this._isFirstFrame = true;
            }
        },
        renderFrame: function() {
            //If it is exported as hidden (data.hd === true) no need to render
            //If it is not visible no need to render
            if (this.data.hd || this.hidden) {
                return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            if (this._isFirstFrame) {
                this._isFirstFrame = false;
            }
        },
        renderInnerContent: function() {},
        prepareFrame: function(num) {
            this._mdf = false;
            this.prepareRenderableFrame(num);
            this.prepareProperties(num, this.isInRange);
            this.checkTransparency();
        },
        destroy: function(){
            this.innerElem =  null;
            this.destroyBaseElement();
        }
    };
    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
}());
function ProcessedElement(element, position) {
	this.elem = element;
	this.pos = position;
}
function SVGStyleData(data, level) {
	this.data = data;
	this.type = data.ty;
	this.d = '';
	this.lvl = level;
	this._mdf = false;
	this.closed = data.hd === true;
	this.pElem = createNS('path');
	this.msElem = null;
}

SVGStyleData.prototype.reset = function() {
	this.d = '';
	this._mdf = false;
};
function SVGShapeData(transformers, level, shape) {
    this.caches = [];
    this.styles = [];
    this.transformers = transformers;
    this.lStr = '';
    this.sh = shape;
    this.lvl = level;
    //TODO find if there are some cases where _isAnimated can be false. 
    // For now, since shapes add up with other shapes. They have to be calculated every time.
    // One way of finding out is checking if all styles associated to this shape depend only of this shape
    this._isAnimated = !!shape.k;
    // TODO: commenting this for now since all shapes are animated
    var i = 0, len = transformers.length;
    while(i < len) {
    	if(transformers[i].mProps.dynamicProperties.length) {
    		this._isAnimated = true;
    		break;
    	}
    	i += 1;
    }
}

SVGShapeData.prototype.setAsAnimated = function() {
    this._isAnimated = true;
}
function SVGTransformData(mProps, op, container) {
	this.transform = {
		mProps: mProps,
		op: op,
		container: container
	};
	this.elements = [];
    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
}
function SVGStrokeStyleData(elem, data, styleOb){
	this.initDynamicPropertyContainer(elem);
	this.getValue = this.iterateDynamicProperties;
	this.o = PropertyFactory.getProp(elem,data.o,0,0.01,this);
	this.w = PropertyFactory.getProp(elem,data.w,0,null,this);
	this.d = new DashProperty(elem,data.d||{},'svg',this);
	this.c = PropertyFactory.getProp(elem,data.c,1,255,this);
	this.style = styleOb;
    this._isAnimated = !!this._isAnimated;
}

extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
function SVGFillStyleData(elem, data, styleOb){
	this.initDynamicPropertyContainer(elem);
	this.getValue = this.iterateDynamicProperties;
	this.o = PropertyFactory.getProp(elem,data.o,0,0.01,this);
	this.c = PropertyFactory.getProp(elem,data.c,1,255,this);
	this.style = styleOb;
}

extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
function SVGGradientFillStyleData(elem, data, styleOb){
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.initGradientData(elem, data, styleOb);
}

SVGGradientFillStyleData.prototype.initGradientData = function(elem, data, styleOb){
    this.o = PropertyFactory.getProp(elem,data.o,0,0.01,this);
    this.s = PropertyFactory.getProp(elem,data.s,1,null,this);
    this.e = PropertyFactory.getProp(elem,data.e,1,null,this);
    this.h = PropertyFactory.getProp(elem,data.h||{k:0},0,0.01,this);
    this.a = PropertyFactory.getProp(elem,data.a||{k:0},0,degToRads,this);
    this.g = new GradientProperty(elem,data.g,this);
    this.style = styleOb;
    this.stops = [];
    this.setGradientData(styleOb.pElem, data);
    this.setGradientOpacity(data, styleOb);
    this._isAnimated = !!this._isAnimated;

};

SVGGradientFillStyleData.prototype.setGradientData = function(pathElement,data){

    var gradientId = createElementID();
    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    gfill.setAttribute('id',gradientId);
    gfill.setAttribute('spreadMethod','pad');
    gfill.setAttribute('gradientUnits','userSpaceOnUse');
    var stops = [];
    var stop, j, jLen;
    jLen = data.g.p*4;
    for(j=0;j<jLen;j+=4){
        stop = createNS('stop');
        gfill.appendChild(stop);
        stops.push(stop);
    }
    pathElement.setAttribute( data.ty === 'gf' ? 'fill':'stroke','url(' + locationHref + '#'+gradientId+')');
    
    this.gf = gfill;
    this.cst = stops;
};

SVGGradientFillStyleData.prototype.setGradientOpacity = function(data, styleOb){
    if(this.g._hasOpacity && !this.g._collapsable){
        var stop, j, jLen;
        var mask = createNS("mask");
        var maskElement = createNS( 'path');
        mask.appendChild(maskElement);
        var opacityId = createElementID();
        var maskId = createElementID();
        mask.setAttribute('id',maskId);
        var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
        opFill.setAttribute('id',opacityId);
        opFill.setAttribute('spreadMethod','pad');
        opFill.setAttribute('gradientUnits','userSpaceOnUse');
        jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
        var stops = this.stops;
        for(j=data.g.p*4;j<jLen;j+=2){
            stop = createNS('stop');
            stop.setAttribute('stop-color','rgb(255,255,255)');
            opFill.appendChild(stop);
            stops.push(stop);
        }
        maskElement.setAttribute( data.ty === 'gf' ? 'fill':'stroke','url(' + locationHref + '#'+opacityId+')');
        this.of = opFill;
        this.ms = mask;
        this.ost = stops;
        this.maskId = maskId;
        styleOb.msElem = maskElement;
    }
};

extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
function SVGGradientStrokeStyleData(elem, data, styleOb){
	this.initDynamicPropertyContainer(elem);
	this.getValue = this.iterateDynamicProperties;
	this.w = PropertyFactory.getProp(elem,data.w,0,null,this);
	this.d = new DashProperty(elem,data.d||{},'svg',this);
    this.initGradientData(elem, data, styleOb);
    this._isAnimated = !!this._isAnimated;
}

extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
function ShapeGroupData() {
	this.it = [];
    this.prevViewData = [];
    this.gr = createNS('g');
}
var SVGElementsRenderer = (function() {
	var _identityMatrix = new Matrix();
	var _matrixHelper = new Matrix();

	var ob = {
		createRenderFunction: createRenderFunction
	}

	function createRenderFunction(data) {
	    var ty = data.ty;
	    switch(data.ty) {
	        case 'fl':
	        return renderFill;
	        case 'gf':
	        return renderGradient;
	        case 'gs':
	        return renderGradientStroke;
	        case 'st':
	        return renderStroke;
	        case 'sh':
	        case 'el':
	        case 'rc':
	        case 'sr':
	        return renderPath;
	        case 'tr':
	        return renderContentTransform;
	    }
	}

	function renderContentTransform(styleData, itemData, isFirstFrame) {
	    if(isFirstFrame || itemData.transform.op._mdf){
	        itemData.transform.container.setAttribute('opacity',itemData.transform.op.v);
	    }
	    if(isFirstFrame || itemData.transform.mProps._mdf){
	        itemData.transform.container.setAttribute('transform',itemData.transform.mProps.v.to2dCSS());
	    }
	}

	function renderPath(styleData, itemData, isFirstFrame) {
	    var j, jLen,pathStringTransformed,redraw,pathNodes,l, lLen = itemData.styles.length;
	    var lvl = itemData.lvl;
	    var paths, mat, props, iterations, k;
	    for(l=0;l<lLen;l+=1){
	        redraw = itemData.sh._mdf || isFirstFrame;
	        if(itemData.styles[l].lvl < lvl){
	            mat = _matrixHelper.reset();
	            iterations = lvl - itemData.styles[l].lvl;
	            k = itemData.transformers.length-1;
	            while(!redraw && iterations > 0) {
	                redraw = itemData.transformers[k].mProps._mdf || redraw;
	                iterations --;
	                k --;
	            }
	            if(redraw) {
	                iterations = lvl - itemData.styles[l].lvl;
	                k = itemData.transformers.length-1;
	                while(iterations > 0) {
	                    props = itemData.transformers[k].mProps.v.props;
	                    mat.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
	                    iterations --;
	                    k --;
	                }
	            }
	        } else {
	            mat = _identityMatrix;
	        }
	        paths = itemData.sh.paths;
	        jLen = paths._length;
	        if(redraw){
	            pathStringTransformed = '';
	            for(j=0;j<jLen;j+=1){
	                pathNodes = paths.shapes[j];
	                if(pathNodes && pathNodes._length){
	                    pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
	                }
	            }
	            itemData.caches[l] = pathStringTransformed;
	        } else {
	            pathStringTransformed = itemData.caches[l];
	        }
	        itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
	        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
	    }
	}

	function renderFill (styleData,itemData, isFirstFrame){
	    var styleElem = itemData.style;

	    if(itemData.c._mdf || isFirstFrame){
	        styleElem.pElem.setAttribute('fill','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');
	    }
	    if(itemData.o._mdf || isFirstFrame){
	        styleElem.pElem.setAttribute('fill-opacity',itemData.o.v);
	    }
	};

	function renderGradientStroke (styleData, itemData, isFirstFrame) {
	    renderGradient(styleData, itemData, isFirstFrame);
	    renderStroke(styleData, itemData, isFirstFrame);
	}

	function renderGradient(styleData, itemData, isFirstFrame) {
	    var gfill = itemData.gf;
	    var hasOpacity = itemData.g._hasOpacity;
	    var pt1 = itemData.s.v, pt2 = itemData.e.v;

	    if (itemData.o._mdf || isFirstFrame) {
	        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
	        itemData.style.pElem.setAttribute(attr, itemData.o.v);
	    }
	    if (itemData.s._mdf || isFirstFrame) {
	        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
	        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
	        gfill.setAttribute(attr1, pt1[0]);
	        gfill.setAttribute(attr2, pt1[1]);
	        if (hasOpacity && !itemData.g._collapsable) {
	            itemData.of.setAttribute(attr1, pt1[0]);
	            itemData.of.setAttribute(attr2, pt1[1]);
	        }
	    }
	    var stops, i, len, stop;
	    if (itemData.g._cmdf || isFirstFrame) {
	        stops = itemData.cst;
	        var cValues = itemData.g.c;
	        len = stops.length;
	        for (i = 0; i < len; i += 1){
	            stop = stops[i];
	            stop.setAttribute('offset', cValues[i * 4] + '%');
	            stop.setAttribute('stop-color','rgb('+ cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ','+cValues[i * 4 + 3] + ')');
	        }
	    }
	    if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
	        var oValues = itemData.g.o;
	        if(itemData.g._collapsable) {
	            stops = itemData.cst;
	        } else {
	            stops = itemData.ost;
	        }
	        len = stops.length;
	        for (i = 0; i < len; i += 1) {
	            stop = stops[i];
	            if(!itemData.g._collapsable) {
	                stop.setAttribute('offset', oValues[i * 2] + '%');
	            }
	            stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
	        }
	    }
	    if (styleData.t === 1) {
	        if (itemData.e._mdf  || isFirstFrame) {
	            gfill.setAttribute('x2', pt2[0]);
	            gfill.setAttribute('y2', pt2[1]);
	            if (hasOpacity && !itemData.g._collapsable) {
	                itemData.of.setAttribute('x2', pt2[0]);
	                itemData.of.setAttribute('y2', pt2[1]);
	            }
	        }
	    } else {
	        var rad;
	        if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
	            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
	            gfill.setAttribute('r', rad);
	            if(hasOpacity && !itemData.g._collapsable){
	                itemData.of.setAttribute('r', rad);
	            }
	        }
	        if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
	            if (!rad) {
	                rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
	            }
	            var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

	            var percent = itemData.h.v >= 1 ? 0.99 : itemData.h.v <= -1 ? -0.99: itemData.h.v;
	            var dist = rad * percent;
	            var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
	            var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
	            gfill.setAttribute('fx', x);
	            gfill.setAttribute('fy', y);
	            if (hasOpacity && !itemData.g._collapsable) {
	                itemData.of.setAttribute('fx', x);
	                itemData.of.setAttribute('fy', y);
	            }
	        }
	        //gfill.setAttribute('fy','200');
	    }
	};

	function renderStroke(styleData, itemData, isFirstFrame) {
	    var styleElem = itemData.style;
	    var d = itemData.d;
	    if (d && (d._mdf || isFirstFrame) && d.dashStr) {
	        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
	        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
	    }
	    if(itemData.c && (itemData.c._mdf || isFirstFrame)){
	        styleElem.pElem.setAttribute('stroke','rgb(' + bm_floor(itemData.c.v[0]) + ',' + bm_floor(itemData.c.v[1]) + ',' + bm_floor(itemData.c.v[2]) + ')');
	    }
	    if(itemData.o._mdf || isFirstFrame){
	        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
	    }
	    if(itemData.w._mdf || isFirstFrame){
	        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);
	        if(styleElem.msElem){
	            styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
	        }
	    }
	};

	return ob;
}())
function ShapeTransformManager() {
	this.sequences = {};
	this.sequenceList = [];
    this.transform_key_count = 0;
}

ShapeTransformManager.prototype = {
	addTransformSequence: function(transforms) {
		var i, len = transforms.length;
		var key = '_';
		for(i = 0; i < len; i += 1) {
			key += transforms[i].transform.key + '_';
		}
		var sequence = this.sequences[key];
		if(!sequence) {
			sequence = {
				transforms: [].concat(transforms),
				finalTransform: new Matrix(),
				_mdf: false
			};
			this.sequences[key] = sequence;
			this.sequenceList.push(sequence);
		}
		return sequence;
	},
	processSequence: function(sequence, isFirstFrame) {
		var i = 0, len = sequence.transforms.length, _mdf = isFirstFrame;
		while (i < len && !isFirstFrame) {
			if (sequence.transforms[i].transform.mProps._mdf) {
				_mdf = true;
				break;
			}
			i += 1
		}
		if (_mdf) {
			var props;
			sequence.finalTransform.reset();
			for (i = len - 1; i >= 0; i -= 1) {
		        props = sequence.transforms[i].transform.mProps.v.props;
		        sequence.finalTransform.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
			}
		}
		sequence._mdf = _mdf;
		
	},
	processSequences: function(isFirstFrame) {
		var i, len = this.sequenceList.length;
		for (i = 0; i < len; i += 1) {
			this.processSequence(this.sequenceList[i], isFirstFrame);
		}

	},
	getNewKey: function() {
		return '_' + this.transform_key_count++;
	}
}
function CVShapeData(element, data, styles, transformsManager) {
    this.styledShapes = [];
    this.tr = [0,0,0,0,0,0];
    var ty = 4;
    if(data.ty == 'rc'){
        ty = 5;
    }else if(data.ty == 'el'){
        ty = 6;
    }else if(data.ty == 'sr'){
        ty = 7;
    }
    this.sh = ShapePropertyFactory.getShapeProp(element,data,ty,element);
    var i , len = styles.length,styledShape;
    for (i = 0; i < len; i += 1) {
        if (!styles[i].closed) {
            styledShape = {
                transforms: transformsManager.addTransformSequence(styles[i].transforms),
                trNodes: []
            }
            this.styledShapes.push(styledShape);
            styles[i].elements.push(styledShape);
        }
    }
}

CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
function BaseElement(){
}

BaseElement.prototype = {
    checkMasks: function(){
        if(!this.data.hasMask){
            return false;
        }
        var i = 0, len = this.data.masksProperties.length;
        while(i<len) {
            if((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
                return true;
            }
            i += 1;
        }
        return false;
    },
    initExpressions: function(){
        this.layerInterface = LayerExpressionInterface(this);
        if(this.data.hasMask && this.maskManager) {
            this.layerInterface.registerMaskInterface(this.maskManager);
        }
        var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);
        this.layerInterface.registerEffectsInterface(effectsInterface);

        if(this.data.ty === 0 || this.data.xt){
            this.compInterface = CompExpressionInterface(this);
        } else if(this.data.ty === 4){
            this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface);
            this.layerInterface.content = this.layerInterface.shapeInterface;
        } else if(this.data.ty === 5){
            this.layerInterface.textInterface = TextExpressionInterface(this);
            this.layerInterface.text = this.layerInterface.textInterface;
        }
    },
    setBlendMode: function(){
        var blendModeValue = getBlendMode(this.data.bm);
        var elem = this.baseElement || this.layerElement;

        elem.style['mix-blend-mode'] = blendModeValue;
    },
    initBaseData: function(data, globalData, comp){
        this.globalData = globalData;
        this.comp = comp;
        this.data = data;
        this.layerId = createElementID();
        
        //Stretch factor for old animations missing this property.
        if(!this.data.sr){
            this.data.sr = 1;
        }
        // effects manager
        this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties);
        
    },
    getType: function(){
        return this.type;
    }
    ,sourceRectAtTime: function(){}
}
function NullElement(data,globalData,comp){
    this.initFrame();
	this.initBaseData(data, globalData, comp);
    this.initFrame();
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
}

NullElement.prototype.prepareFrame = function(num) {
    this.prepareProperties(num, true);
};

NullElement.prototype.renderFrame = function() {
};

NullElement.prototype.getBaseElement = function() {
	return null;
};

NullElement.prototype.destroy = function() {
};

NullElement.prototype.sourceRectAtTime = function() {
};

NullElement.prototype.hide = function() {
};

extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement], NullElement);

function SVGBaseElement(){
}

SVGBaseElement.prototype = {
    initRendererElement: function() {
        this.layerElement = createNS('g');
    },
    createContainerElements: function(){
        this.matteElement = createNS('g');
        this.transformedElement = this.layerElement;
        this.maskedElement = this.layerElement;
        this._sizeChanged = false;
        var layerElementParent = null;
        //If this layer acts as a mask for the following layer
        var filId, fil, gg;
        if (this.data.td) {
            if (this.data.td == 3 || this.data.td == 1) {
                var masker = createNS('mask');
                masker.setAttribute('id', this.layerId);
                masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha');
                masker.appendChild(this.layerElement);
                layerElementParent = masker;
                this.globalData.defs.appendChild(masker);
                // This is only for IE and Edge when mask if of type alpha
                if (!featureSupport.maskType && this.data.td == 1) {
                    masker.setAttribute('mask-type', 'luminance');
                    filId = createElementID();
                    fil = filtersFactory.createFilter(filId);
                    this.globalData.defs.appendChild(fil);
                    fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    gg = createNS('g');
                    gg.appendChild(this.layerElement);
                    layerElementParent = gg;
                    masker.appendChild(gg);
                    gg.setAttribute('filter','url(' + locationHref + '#' + filId + ')');
                }
            } else if(this.data.td == 2) {
                var maskGroup = createNS('mask');
                maskGroup.setAttribute('id', this.layerId);
                maskGroup.setAttribute('mask-type','alpha');
                var maskGrouper = createNS('g');
                maskGroup.appendChild(maskGrouper);
                filId = createElementID();
                fil = filtersFactory.createFilter(filId);
                ////

                // This solution doesn't work on Android when meta tag with viewport attribute is set
                /*var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix);*/
                ////
                var feCTr = createNS('feComponentTransfer');
                feCTr.setAttribute('in','SourceGraphic');
                fil.appendChild(feCTr);
                var feFunc = createNS('feFuncA');
                feFunc.setAttribute('type','table');
                feFunc.setAttribute('tableValues','1.0 0.0');
                feCTr.appendChild(feFunc);
                ////
                this.globalData.defs.appendChild(fil);
                var alphaRect = createNS('rect');
                alphaRect.setAttribute('width',  this.comp.data.w);
                alphaRect.setAttribute('height', this.comp.data.h);
                alphaRect.setAttribute('x','0');
                alphaRect.setAttribute('y','0');
                alphaRect.setAttribute('fill','#ffffff');
                alphaRect.setAttribute('opacity','0');
                maskGrouper.setAttribute('filter', 'url(' + locationHref + '#'+filId+')');
                maskGrouper.appendChild(alphaRect);
                maskGrouper.appendChild(this.layerElement);
                layerElementParent = maskGrouper;
                if (!featureSupport.maskType) {
                    maskGroup.setAttribute('mask-type', 'luminance');
                    fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    gg = createNS('g');
                    maskGrouper.appendChild(alphaRect);
                    gg.appendChild(this.layerElement);
                    layerElementParent = gg;
                    maskGrouper.appendChild(gg);
                }
                this.globalData.defs.appendChild(maskGroup);
            }
        } else if (this.data.tt) {
            this.matteElement.appendChild(this.layerElement);
            layerElementParent = this.matteElement;
            this.baseElement = this.matteElement;
        } else {
            this.baseElement = this.layerElement;
        }
        if (this.data.ln) {
            this.layerElement.setAttribute('id', this.data.ln);
        }
        if (this.data.cl) {
            this.layerElement.setAttribute('class', this.data.cl);
        }
        //Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
        if (this.data.ty === 0 && !this.data.hd) {
            var cp = createNS( 'clipPath');
            var pt = createNS('path');
            pt.setAttribute('d','M0,0 L' + this.data.w + ',0' + ' L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
            var clipId = createElementID();
            cp.setAttribute('id',clipId);
            cp.appendChild(pt);
            this.globalData.defs.appendChild(cp);

            if (this.checkMasks()) {
                var cpGroup = createNS('g');
                cpGroup.setAttribute('clip-path','url(' + locationHref + '#'+clipId + ')');
                cpGroup.appendChild(this.layerElement);
                this.transformedElement = cpGroup;
                if (layerElementParent) {
                    layerElementParent.appendChild(this.transformedElement);
                } else {
                    this.baseElement = this.transformedElement;
                }
            } else {
                this.layerElement.setAttribute('clip-path','url(' + locationHref + '#'+clipId+')');
            }
            
        }
        if (this.data.bm !== 0) {
            this.setBlendMode();
        }

    },
    renderElement: function() {
        if (this.finalTransform._matMdf) {
            this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS());
        }
        if (this.finalTransform._opMdf) {
            this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
        }
    },
    destroyBaseElement: function() {
        this.layerElement = null;
        this.matteElement = null;
        this.maskManager.destroy();
    },
    getBaseElement: function() {
        if (this.data.hd) {
            return null;
        }
        return this.baseElement;
    },
    createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData);
        this.renderableEffectsManager = new SVGEffects(this);
    },
    setMatte: function(id) {
        if (!this.matteElement) {
            return;
        }
        this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + id + ")");
    }
};
function IShapeElement(){
}

IShapeElement.prototype = {
    addShapeToModifiers: function(data) {
        var i, len = this.shapeModifiers.length;
        for(i=0;i<len;i+=1){
            this.shapeModifiers[i].addShape(data);
        }
    },
    isShapeInAnimatedModifiers: function(data) {
        var i = 0, len = this.shapeModifiers.length;
        while(i < len) {
            if(this.shapeModifiers[i].isAnimatedWithShape(data)) {
                return true;
            }
        }
        return false;
    },
    renderModifiers: function() {
        if(!this.shapeModifiers.length){
            return;
        }
        var i, len = this.shapes.length;
        for(i=0;i<len;i+=1){
            this.shapes[i].sh.reset();
        }

        len = this.shapeModifiers.length;
        for(i=len-1;i>=0;i-=1){
            this.shapeModifiers[i].processShapes(this._isFirstFrame);
        }
    },
    lcEnum: {
        '1': 'butt',
        '2': 'round',
        '3': 'square'
    },
    ljEnum: {
        '1': 'miter',
        '2': 'round',
        '3': 'bevel'
    },
    searchProcessedElement: function(elem){
        var elements = this.processedElements;
        var i = 0, len = elements.length;
        while (i < len) {
            if (elements[i].elem === elem) {
                return elements[i].pos;
            }
            i += 1;
        }
        return 0;
    },
    addProcessedElement: function(elem, pos){
        var elements = this.processedElements;
        var i = elements.length;
        while(i) {
            i -= 1;
            if (elements[i].elem === elem) {
                elements[i].pos = pos;
                return;
            }
        }
        elements.push(new ProcessedElement(elem, pos));
    },
    prepareFrame: function(num) {
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
    }
};
function ITextElement(){
}

ITextElement.prototype.initElement = function(data,globalData,comp){
    this.lettersChangedFlag = true;
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
    this.initRenderable();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();
    this.createContent();
    this.hide();
    this.textAnimator.searchProperties(this.dynamicProperties);
};

ITextElement.prototype.prepareFrame = function(num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
    if(this.textProperty._mdf || this.textProperty._isFirstFrame) {
        this.buildNewText();
        this.textProperty._isFirstFrame = false;
        this.textProperty._mdf = false;
    }
};

ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
    var j,jLen = shapes.length;
    var k, kLen, pathNodes;
    var shapeStr = '';
    for(j=0;j<jLen;j+=1){
        pathNodes = shapes[j].ks.k;
        shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
    }
    return shapeStr;
};

ITextElement.prototype.updateDocumentData = function(newData, index) {
    this.textProperty.updateDocumentData(newData, index);
};

ITextElement.prototype.canResizeFont = function(_canResize) {
    this.textProperty.canResizeFont(_canResize);
};

ITextElement.prototype.setMinimumFontSize = function(_fontSize) {
    this.textProperty.setMinimumFontSize(_fontSize);
};

ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData, matrixHelper, lineNumber, xPos, yPos) {
    if(documentData.ps){
        matrixHelper.translate(documentData.ps[0],documentData.ps[1] + documentData.ascent,0);
    }
    matrixHelper.translate(0,-documentData.ls,0);
    switch(documentData.j){
        case 1:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]),0,0);
            break;
        case 2:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber] )/2,0,0);
            break;
    }
    matrixHelper.translate(xPos, yPos, 0);
};


ITextElement.prototype.buildColor = function(colorData) {
    return 'rgb(' + Math.round(colorData[0]*255) + ',' + Math.round(colorData[1]*255) + ',' + Math.round(colorData[2]*255) + ')';
};

ITextElement.prototype.emptyProp = new LetterProps();

ITextElement.prototype.destroy = function(){
    
};
function ICompElement(){}

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

ICompElement.prototype.initElement = function(data,globalData,comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initTransform(data, globalData, comp);
    this.initRenderable();
    this.initHierarchy();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();
    if(this.data.xt || !globalData.progressiveLoad){
        this.buildAllItems();
    }
    this.hide();
};

/*ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
};*/

ICompElement.prototype.prepareFrame = function(num){
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
    if(!this.isInRange && !this.data.xt){
        return;
    }

    if (!this.tm._placeholder) {
        var timeRemapped = this.tm.v;
        if(timeRemapped === this.data.op){
            timeRemapped = this.data.op - 1;
        }
        this.renderedFrame = timeRemapped;
    } else {
        this.renderedFrame = num/this.data.sr;
    }
    var i,len = this.elements.length;
    if(!this.completeLayers){
        this.checkLayers(this.renderedFrame);
    }
    //This iteration needs to be backwards because of how expressions connect between each other
    for( i = len - 1; i >= 0; i -= 1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
            if(this.elements[i]._mdf) {
                this._mdf = true;
            }
        }
    }
};

ICompElement.prototype.renderInnerContent = function() {
    var i,len = this.layers.length;
    for( i = 0; i < len; i += 1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
};

ICompElement.prototype.setElements = function(elems){
    this.elements = elems;
};

ICompElement.prototype.getElements = function(){
    return this.elements;
};

ICompElement.prototype.destroyElements = function(){
    var i,len = this.layers.length;
    for( i = 0; i < len; i+=1 ){
        if(this.elements[i]){
            this.elements[i].destroy();
        }
    }
};

ICompElement.prototype.destroy = function(){
    this.destroyElements();
    this.destroyBaseElement();
};

function IImageElement(data,globalData,comp){
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data,globalData,comp);
    this.sourceRect = {top:0,left:0,width:this.assetData.w,height:this.assetData.h};
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement], IImageElement);

IImageElement.prototype.createContent = function(){

    var assetPath = this.globalData.getAssetsPath(this.assetData);

    this.innerElem = createNS('image');
    this.innerElem.setAttribute('width',this.assetData.w+"px");
    this.innerElem.setAttribute('height',this.assetData.h+"px");
    this.innerElem.setAttribute('preserveAspectRatio',this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
    
    this.layerElement.appendChild(this.innerElem);
};

IImageElement.prototype.sourceRectAtTime = function() {
	return this.sourceRect;
}
function ISolidElement(data,globalData,comp){
    this.initElement(data,globalData,comp);
}
extendPrototype([IImageElement], ISolidElement);

ISolidElement.prototype.createContent = function(){

    var rect = createNS('rect');
    ////rect.style.width = this.data.sw;
    ////rect.style.height = this.data.sh;
    ////rect.style.fill = this.data.sc;
    rect.setAttribute('width',this.data.sw);
    rect.setAttribute('height',this.data.sh);
    rect.setAttribute('fill',this.data.sc);
    this.layerElement.appendChild(rect);
};
function SVGCompElement(data,globalData,comp){
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    //this.layerElement = createNS('g');
    this.initElement(data,globalData,comp);
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this) : {_placeholder:true};
}

extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);
function SVGTextElement(data,globalData,comp){
    this.textSpans = [];
    this.renderType = 'svg';
    this.initElement(data,globalData,comp);
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement], SVGTextElement);

SVGTextElement.prototype.createContent = function(){

    if (this.data.singleShape && !this.globalData.fontManager.chars) {
        this.textContainer = createNS('text');
    }
};

SVGTextElement.prototype.buildTextContents = function(textArray) {
    var i = 0, len = textArray.length;
    var textContents = [], currentTextContent = '';
    while (i < len) {
        if(textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
            textContents.push(currentTextContent);
            currentTextContent = '';
        } else {
            currentTextContent += textArray[i];
        }
        i += 1;
    }
    textContents.push(currentTextContent);
    return textContents;
}

SVGTextElement.prototype.buildNewText = function(){
    var i, len;

    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
    if(documentData.fc) {
        this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
    }else{
        this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
    }
    if(documentData.sc){
        this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
        this.layerElement.setAttribute('stroke-width', documentData.sw);
    }
    this.layerElement.setAttribute('font-size', documentData.finalSize);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(fontData.fClass){
        this.layerElement.setAttribute('class',fontData.fClass);
    } else {
        this.layerElement.setAttribute('font-family', fontData.fFamily);
        var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
        this.layerElement.setAttribute('font-style', fStyle);
        this.layerElement.setAttribute('font-weight', fWeight);
    }
    this.layerElement.setAttribute('aria-label', documentData.t);

    var letters = documentData.l || [];
    var usesGlyphs = !!this.globalData.fontManager.chars;
    len = letters.length;

    var tSpan;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '', singleShape = this.data.singleShape;
    var xPos = 0, yPos = 0, firstLine = true;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    if(singleShape && !usesGlyphs && !documentData.sz) {
        var tElement = this.textContainer;
        var justify = 'start';
        switch(documentData.j) {
            case 1:
                justify = 'end';
                break;
            case 2:
                justify = 'middle';
                break;
        }
        tElement.setAttribute('text-anchor',justify);
        tElement.setAttribute('letter-spacing',trackingOffset);
        var textContent = this.buildTextContents(documentData.finalText);
        len = textContent.length;
        yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
        for ( i = 0; i < len; i += 1) {
            tSpan = this.textSpans[i] || createNS('tspan');
            tSpan.textContent = textContent[i];
            tSpan.setAttribute('x', 0);
            tSpan.setAttribute('y', yPos);
            tSpan.style.display = 'inherit';
            tElement.appendChild(tSpan);
            this.textSpans[i] = tSpan;
            yPos += documentData.finalLineHeight;
        }
        
        this.layerElement.appendChild(tElement);
    } else {
        var cachedSpansLength = this.textSpans.length;
        var shapeData, charData;
        for (i = 0; i < len; i += 1) {
            if(!usesGlyphs || !singleShape || i === 0){
                tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs?'path':'text');
                if (cachedSpansLength <= i) {
                    tSpan.setAttribute('stroke-linecap', 'butt');
                    tSpan.setAttribute('stroke-linejoin','round');
                    tSpan.setAttribute('stroke-miterlimit','4');
                    this.textSpans[i] = tSpan;
                    this.layerElement.appendChild(tSpan);
                }
                tSpan.style.display = 'inherit';
            }
            
            matrixHelper.reset();
            matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
            if (singleShape) {
                if(letters[i].n) {
                    xPos = -trackingOffset;
                    yPos += documentData.yOffset;
                    yPos += firstLine ? 1 : 0;
                    firstLine = false;
                }
                this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
                xPos += letters[i].l || 0;
                //xPos += letters[i].val === ' ' ? 0 : trackingOffset;
                xPos += trackingOffset;
            }
            if(usesGlyphs) {
                charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
                shapeData = charData && charData.data || {};
                shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
                if(!singleShape){
                    tSpan.setAttribute('d',this.createPathShape(matrixHelper,shapes));
                } else {
                    shapeStr += this.createPathShape(matrixHelper,shapes);
                }
            } else {
                if(singleShape) {
                    tSpan.setAttribute("transform", "translate(" + matrixHelper.props[12] + "," + matrixHelper.props[13] + ")");
                }
                tSpan.textContent = letters[i].val;
                tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            }
            //
        }
        if (singleShape && tSpan) {
            tSpan.setAttribute('d',shapeStr);
        }
    }
    while (i < this.textSpans.length){
        this.textSpans[i].style.display = 'none';
        i += 1;
    }
    
    this._sizeChanged = true;
};

SVGTextElement.prototype.sourceRectAtTime = function(time){
    this.prepareFrame(this.comp.renderedFrame - this.data.st);
    this.renderInnerContent();
    if(this._sizeChanged){
        this._sizeChanged = false;
        var textBox = this.layerElement.getBBox();
        this.bbox = {
            top: textBox.y,
            left: textBox.x,
            width: textBox.width,
            height: textBox.height
        };
    }
    return this.bbox;
};

SVGTextElement.prototype.renderInnerContent = function(){

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        if(this.lettersChangedFlag || this.textAnimator.lettersChangedFlag){
            this._sizeChanged = true;
            var  i,len;
            var renderedLetters = this.textAnimator.renderedLetters;

            var letters = this.textProperty.currentData.l;

            len = letters.length;
            var renderedLetter, textSpan;
            for(i=0;i<len;i+=1){
                if(letters[i].n){
                    continue;
                }
                renderedLetter = renderedLetters[i];
                textSpan = this.textSpans[i];
                if(renderedLetter._mdf.m) {
                    textSpan.setAttribute('transform',renderedLetter.m);
                }
                if(renderedLetter._mdf.o) {
                    textSpan.setAttribute('opacity',renderedLetter.o);
                }
                if(renderedLetter._mdf.sw){
                    textSpan.setAttribute('stroke-width',renderedLetter.sw);
                }
                if(renderedLetter._mdf.sc){
                    textSpan.setAttribute('stroke',renderedLetter.sc);
                }
                if(renderedLetter._mdf.fc){
                    textSpan.setAttribute('fill',renderedLetter.fc);
                }
            }
        }
    }
};

function SVGShapeElement(data,globalData,comp){
    //List of drawable elements
    this.shapes = [];
    // Full shape data
    this.shapesData = data.shapes;
    //List of styles that will be applied to shapes
    this.stylesList = [];
    //List of modifiers that will be applied to shapes
    this.shapeModifiers = [];
    //List of items in shape tree
    this.itemsData = [];
    //List of items in previous shape tree
    this.processedElements = [];
    // List of animated components
    this.animatedContents = [];
    this.initElement(data,globalData,comp);
    //Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created
    this.prevViewData = [];
    //Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
}

extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement], SVGShapeElement);

SVGShapeElement.prototype.initSecondaryElement = function() {
};

SVGShapeElement.prototype.identityMatrix = new Matrix();

SVGShapeElement.prototype.buildExpressionInterface = function(){};

SVGShapeElement.prototype.createContent = function(){
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement, 0, [], true);
    this.filterUniqueShapes();
};

/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/
SVGShapeElement.prototype.filterUniqueShapes = function(){
    var i, len = this.shapes.length, shape;
    var j, jLen = this.stylesList.length;
    var style, count = 0;
    var tempShapes = [];
    var areAnimated = false;
    for(j = 0; j < jLen; j += 1) {
        style = this.stylesList[j];
        areAnimated = false;
        tempShapes.length = 0;
        for(i = 0; i < len; i += 1) {
            shape = this.shapes[i];
            if(shape.styles.indexOf(style) !== -1) {
                tempShapes.push(shape);
                areAnimated = shape._isAnimated || areAnimated;
            }
        }
        if(tempShapes.length > 1 && areAnimated) {
            this.setShapesAsAnimated(tempShapes);
        }
    }
}

SVGShapeElement.prototype.setShapesAsAnimated = function(shapes){
    var i, len = shapes.length;
    for(i = 0; i < len; i += 1) {
        shapes[i].setAsAnimated();
    }
}

SVGShapeElement.prototype.createStyleElement = function(data, level){
    //TODO: prevent drawing of hidden styles
    var elementData;
    var styleOb = new SVGStyleData(data, level);

    var pathElement = styleOb.pElem;
    if(data.ty === 'st') {
        elementData = new SVGStrokeStyleData(this, data, styleOb);
    } else if(data.ty === 'fl') {
        elementData = new SVGFillStyleData(this, data, styleOb);
    } else if(data.ty === 'gf' || data.ty === 'gs') {
        var gradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        elementData = new gradientConstructor(this, data, styleOb);
        this.globalData.defs.appendChild(elementData.gf);
        if (elementData.maskId) {
            this.globalData.defs.appendChild(elementData.ms);
            this.globalData.defs.appendChild(elementData.of);
            pathElement.setAttribute('mask','url(' + locationHref + '#' + elementData.maskId + ')');
        }
    }
    
    if(data.ty === 'st' || data.ty === 'gs') {
        pathElement.setAttribute('stroke-linecap', this.lcEnum[data.lc] || 'round');
        pathElement.setAttribute('stroke-linejoin',this.ljEnum[data.lj] || 'round');
        pathElement.setAttribute('fill-opacity','0');
        if(data.lj === 1) {
            pathElement.setAttribute('stroke-miterlimit',data.ml);
        }
    }

    if(data.r === 2) {
        pathElement.setAttribute('fill-rule', 'evenodd');
    }

    if(data.ln){
        pathElement.setAttribute('id',data.ln);
    }
    if(data.cl){
        pathElement.setAttribute('class',data.cl);
    }
    if(data.bm){
        pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
    }
    this.stylesList.push(styleOb);
    this.addToAnimatedContents(data, elementData);
    return elementData;
};

SVGShapeElement.prototype.createGroupElement = function(data) {
    var elementData = new ShapeGroupData();
    if(data.ln){
        elementData.gr.setAttribute('id',data.ln);
    }
    if(data.cl){
        elementData.gr.setAttribute('class',data.cl);
    }
    if(data.bm){
        elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
    }
    return elementData;
};

SVGShapeElement.prototype.createTransformElement = function(data, container) {
    var transformProperty = TransformPropertyFactory.getTransformProperty(this,data,this);
    var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
    this.addToAnimatedContents(data, elementData);
    return elementData;
};

SVGShapeElement.prototype.createShapeElement = function(data, ownTransformers, level) {
    var ty = 4;
    if(data.ty === 'rc'){
        ty = 5;
    }else if(data.ty === 'el'){
        ty = 6;
    }else if(data.ty === 'sr'){
        ty = 7;
    }
    var shapeProperty = ShapePropertyFactory.getShapeProp(this,data,ty,this);
    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    this.addToAnimatedContents(data, elementData);
    return elementData;
};

SVGShapeElement.prototype.addToAnimatedContents = function(data, element) {
    var i = 0, len = this.animatedContents.length;
    while(i < len) {
        if(this.animatedContents[i].element === element) {
            return;
        }
        i += 1;
    }
    this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(data),
        element: element,
        data: data
    });
};

SVGShapeElement.prototype.setElementStyles = function(elementData){
    var arr = elementData.styles;
    var j, jLen = this.stylesList.length;
    for (j = 0; j < jLen; j += 1) {
        if (!this.stylesList[j].closed) {
            arr.push(this.stylesList[j]);
        }
    }
};

SVGShapeElement.prototype.reloadShapes = function(){
    this._isFirstFrame = true;
    var i, len = this.itemsData.length;
    for( i = 0; i < len; i += 1) {
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement, 0, [], true);
    this.filterUniqueShapes();
    len = this.dynamicProperties.length;
    for(i = 0; i < len; i += 1) {
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
};

SVGShapeElement.prototype.searchShapes = function(arr,itemsData,prevViewData,container, level, transformers, render){
    var ownTransformers = [].concat(transformers);
    var i, len = arr.length - 1;
    var j, jLen;
    var ownStyles = [], ownModifiers = [], styleOb, currentTransform, modifier, processedPos;
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._render = render;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st' || arr[i].ty == 'gf' || arr[i].ty == 'gs'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], level);
            } else {
                itemsData[i].style.closed = false;
            }
            if(arr[i]._render){
                container.appendChild(itemsData[i].style.pElem);
            }
            ownStyles.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,itemsData[i].gr, level + 1, ownTransformers, render);
            if(arr[i]._render){
                container.appendChild(itemsData[i].gr);
            }
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                itemsData[i] = this.createTransformElement(arr[i], container);
            }
            currentTransform = itemsData[i].transform;
            ownTransformers.push(currentTransform);
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
            }
            this.setElementStyles(itemsData[i]);

        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd' || arr[i].ty == 'ms'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i]);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        }else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData);
                this.shapeModifiers.push(modifier);
                render = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    len = ownStyles.length;
    for(i=0;i<len;i+=1){
        ownStyles[i].closed = true;
    }
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

SVGShapeElement.prototype.renderInnerContent = function() {
    this.renderModifiers();
    var i, len = this.stylesList.length;
    for(i=0;i<len;i+=1){
        this.stylesList[i].reset();
    }
    this.renderShape();

    for (i = 0; i < len; i += 1) {
        if (this.stylesList[i]._mdf || this._isFirstFrame) {
            if(this.stylesList[i].msElem){
                this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
                //Adding M0 0 fixes same mask bug on all browsers
                this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
            }
            this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
        }
    }
};

SVGShapeElement.prototype.renderShape = function() {
    var i, len = this.animatedContents.length;
    var animatedContent;
    for(i = 0; i < len; i += 1) {
        animatedContent = this.animatedContents[i];
        if((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
            animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
        }
    }
}

SVGShapeElement.prototype.destroy = function(){
    this.destroyBaseElement();
    this.shapesData = null;
    this.itemsData = null;
};

function SVGTintFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f2');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
    if(filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k){
        var feMerge = createNS('feMerge');
        filter.appendChild(feMerge);
        var feMergeNode;
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in','SourceGraphic');
        feMerge.appendChild(feMergeNode);
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in','f2');
        feMerge.appendChild(feMergeNode);
    }
}

SVGTintFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var colorBlack = this.filterManager.effectElements[0].p.v;
        var colorWhite = this.filterManager.effectElements[1].p.v;
        var opacity = this.filterManager.effectElements[2].p.v/100;
        this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGFillFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','sRGB');
    feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
}
SVGFillFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var color = this.filterManager.effectElements[2].p.v;
        var opacity = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute('values','0 0 0 0 '+color[0]+' 0 0 0 0 '+color[1]+' 0 0 0 0 '+color[2]+' 0 0 0 '+opacity+' 0');
    }
};
function SVGGaussianBlurEffect(filter, filterManager){
    // Outset the filter region by 100% on all sides to accommodate blur expansion.
    filter.setAttribute('x','-100%');
    filter.setAttribute('y','-100%');
    filter.setAttribute('width','300%');
    filter.setAttribute('height','300%');

    this.filterManager = filterManager;
    var feGaussianBlur = createNS('feGaussianBlur');
    filter.appendChild(feGaussianBlur);
    this.feGaussianBlur = feGaussianBlur;
}

SVGGaussianBlurEffect.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        // Empirical value, matching AE's blur appearance.
        var kBlurrinessToSigma = 0.3;
        var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;

        // Dimensions mapping:
        //
        //   1 -> horizontal & vertical
        //   2 -> horizontal only
        //   3 -> vertical only
        //
        var dimensions = this.filterManager.effectElements[1].p.v;
        var sigmaX = (dimensions == 3) ? 0 : sigma;
        var sigmaY = (dimensions == 2) ? 0 : sigma;

        this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + " " + sigmaY);

        // Repeat edges mapping:
        //
        //   0 -> off -> duplicate
        //   1 -> on  -> wrap
        var edgeMode = (this.filterManager.effectElements[2].p.v == 1) ? 'wrap' : 'duplicate';
        this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
    }
}
function SVGStrokeEffect(elem, filterManager){
    this.initialized = false;
    this.filterManager = filterManager;
    this.elem = elem;
    this.paths = [];
}

SVGStrokeEffect.prototype.initialize = function(){

    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
    var path,groupPath, i, len;
    if(this.filterManager.effectElements[1].p.v === 1){
        len = this.elem.maskManager.masksProperties.length;
        i = 0;
    } else {
        i = this.filterManager.effectElements[0].p.v - 1;
        len = i + 1;
    }
    groupPath = createNS('g'); 
    groupPath.setAttribute('fill','none');
    groupPath.setAttribute('stroke-linecap','round');
    groupPath.setAttribute('stroke-dashoffset',1);
    for(i;i<len;i+=1){
        path = createNS('path');
        groupPath.appendChild(path);
        this.paths.push({p:path,m:i});
    }
    if(this.filterManager.effectElements[10].p.v === 3){
        var mask = createNS('mask');
        var id = createElementID();
        mask.setAttribute('id',id);
        mask.setAttribute('mask-type','alpha');
        mask.appendChild(groupPath);
        this.elem.globalData.defs.appendChild(mask);
        var g = createNS('g');
        g.setAttribute('mask','url(' + locationHref + '#'+id+')');
        while (elemChildren[0]) {
            g.appendChild(elemChildren[0]);
        }
        this.elem.layerElement.appendChild(g);
        this.masker = mask;
        groupPath.setAttribute('stroke','#fff');
    } else if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(this.filterManager.effectElements[10].p.v === 2){
            elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            while(elemChildren.length){
                this.elem.layerElement.removeChild(elemChildren[0]);
            }
        }
        this.elem.layerElement.appendChild(groupPath);
        this.elem.layerElement.removeAttribute('mask');
        groupPath.setAttribute('stroke','#fff');
    }
    this.initialized = true;
    this.pathMasker = groupPath;
};

SVGStrokeEffect.prototype.renderFrame = function(forceRender){
    if(!this.initialized){
        this.initialize();
    }
    var i, len = this.paths.length;
    var mask, path;
    for(i=0;i<len;i+=1){
        if(this.paths[i].m === -1) {
            continue;
        }
        mask = this.elem.maskManager.viewData[this.paths[i].m];
        path = this.paths[i].p;
        if(forceRender || this.filterManager._mdf || mask.prop._mdf){
            path.setAttribute('d',mask.lastPath);
        }
        if(forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf){
            var dasharrayValue;
            if(this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100){
                var s = Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var e = Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;
                var l = path.getTotalLength();
                dasharrayValue = '0 0 0 ' + l*s + ' ';
                var lineLength = l*(e-s);
                var segment = 1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
                var units = Math.floor(lineLength/segment);
                var j;
                for(j=0;j<units;j+=1){
                    dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100 + ' ';
                }
                dasharrayValue += '0 ' + l*10 + ' 0 0';
            } else {
                dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;
            }
            path.setAttribute('stroke-dasharray',dasharrayValue);
        }
    }
    if(forceRender || this.filterManager.effectElements[4].p._mdf){
        this.pathMasker.setAttribute('stroke-width',this.filterManager.effectElements[4].p.v*2);
    }
    
    if(forceRender || this.filterManager.effectElements[6].p._mdf){
        this.pathMasker.setAttribute('opacity',this.filterManager.effectElements[6].p.v);
    }
    if(this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2){
        if(forceRender || this.filterManager.effectElements[3].p._mdf){
            var color = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute('stroke','rgb('+bm_floor(color[0]*255)+','+bm_floor(color[1]*255)+','+bm_floor(color[2]*255)+')');
        }
    }
};
function SVGTritoneFilter(filter, filterManager){
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type','matrix');
    feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');
    feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result','f1');
    filter.appendChild(feColorMatrix);
    var feComponentTransfer = createNS('feComponentTransfer');
    feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
    filter.appendChild(feComponentTransfer);
    this.matrixFilter = feComponentTransfer;
    var feFuncR = createNS('feFuncR');
    feFuncR.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncR);
    this.feFuncR = feFuncR;
    var feFuncG = createNS('feFuncG');
    feFuncG.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncG);
    this.feFuncG = feFuncG;
    var feFuncB = createNS('feFuncB');
    feFuncB.setAttribute('type','table');
    feComponentTransfer.appendChild(feFuncB);
    this.feFuncB = feFuncB;
}

SVGTritoneFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var color1 = this.filterManager.effectElements[0].p.v;
        var color2 = this.filterManager.effectElements[1].p.v;
        var color3 = this.filterManager.effectElements[2].p.v;
        var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
        var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
        var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
        this.feFuncR.setAttribute('tableValues', tableR);
        this.feFuncG.setAttribute('tableValues', tableG);
        this.feFuncB.setAttribute('tableValues', tableB);
        //var opacity = this.filterManager.effectElements[2].p.v/100;
        //this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
    }
};
function SVGProLevelsFilter(filter, filterManager){
    this.filterManager = filterManager;
    var effectElements = this.filterManager.effectElements;
    var feComponentTransfer = createNS('feComponentTransfer');
    var feFuncR, feFuncG, feFuncB;
    
    if(effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1){
        this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
    }
    if(effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1){
        this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
    }
    if(effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1){
        this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
    }
    if(effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1){
        this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
    }
    
    if(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA){
        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        feComponentTransfer = createNS('feComponentTransfer');
    }

    if(effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1){

        feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');
        filter.appendChild(feComponentTransfer);
        this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
        this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
        this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
    }
}

SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
    var feFunc = createNS(type);
    feFunc.setAttribute('type','table');
    feComponentTransfer.appendChild(feFunc);
    return feFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null,{length:segments});
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack; 
    var inputDelta = inputWhite - inputBlack; 
    while(cnt <= 256) {
        perc = cnt/256;
        if(perc <= min){
            colorValue = inputDelta < 0 ? outputWhite : outputBlack;
        } else if(perc >= max){
            colorValue = inputDelta < 0 ? outputBlack : outputWhite;
        } else {
            colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
        }
        table[pos++] = colorValue;
        cnt += 256/(segments-1);
    }
    return table.join(' ');
};

SVGProLevelsFilter.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        var val, cnt, perc, bezier;
        var effectElements = this.filterManager.effectElements;
        if(this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)){
            val = this.getTableValue(effectElements[3].p.v,effectElements[4].p.v,effectElements[5].p.v,effectElements[6].p.v,effectElements[7].p.v);
            this.feFuncRComposed.setAttribute('tableValues',val);
            this.feFuncGComposed.setAttribute('tableValues',val);
            this.feFuncBComposed.setAttribute('tableValues',val);
        }


        if(this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)){
            val = this.getTableValue(effectElements[10].p.v,effectElements[11].p.v,effectElements[12].p.v,effectElements[13].p.v,effectElements[14].p.v);
            this.feFuncR.setAttribute('tableValues',val);
        }

        if(this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)){
            val = this.getTableValue(effectElements[17].p.v,effectElements[18].p.v,effectElements[19].p.v,effectElements[20].p.v,effectElements[21].p.v);
            this.feFuncG.setAttribute('tableValues',val);
        }

        if(this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)){
            val = this.getTableValue(effectElements[24].p.v,effectElements[25].p.v,effectElements[26].p.v,effectElements[27].p.v,effectElements[28].p.v);
            this.feFuncB.setAttribute('tableValues',val);
        }

        if(this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)){
            val = this.getTableValue(effectElements[31].p.v,effectElements[32].p.v,effectElements[33].p.v,effectElements[34].p.v,effectElements[35].p.v);
            this.feFuncA.setAttribute('tableValues',val);
        }
        
    }
};
function SVGDropShadowEffect(filter, filterManager) {
    var filterSize = filterManager.container.globalData.renderConfig.filterSize
    filter.setAttribute('x', filterSize.x);
    filter.setAttribute('y', filterSize.y);
    filter.setAttribute('width', filterSize.width);
    filter.setAttribute('height', filterSize.height);
    this.filterManager = filterManager;

    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('in','SourceAlpha');
    feGaussianBlur.setAttribute('result','drop_shadow_1');
    feGaussianBlur.setAttribute('stdDeviation','0');
    this.feGaussianBlur = feGaussianBlur;
    filter.appendChild(feGaussianBlur);

    var feOffset = createNS('feOffset');
    feOffset.setAttribute('dx','25');
    feOffset.setAttribute('dy','0');
    feOffset.setAttribute('in','drop_shadow_1');
    feOffset.setAttribute('result','drop_shadow_2');
    this.feOffset = feOffset;
    filter.appendChild(feOffset);
    var feFlood = createNS('feFlood');
    feFlood.setAttribute('flood-color','#00ff00');
    feFlood.setAttribute('flood-opacity','1');
    feFlood.setAttribute('result','drop_shadow_3');
    this.feFlood = feFlood;
    filter.appendChild(feFlood);

    var feComposite = createNS('feComposite');
    feComposite.setAttribute('in','drop_shadow_3');
    feComposite.setAttribute('in2','drop_shadow_2');
    feComposite.setAttribute('operator','in');
    feComposite.setAttribute('result','drop_shadow_4');
    filter.appendChild(feComposite);


    var feMerge = createNS('feMerge');
    filter.appendChild(feMerge);
    var feMergeNode;
    feMergeNode = createNS('feMergeNode');
    feMerge.appendChild(feMergeNode);
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in','SourceGraphic');
    this.feMergeNode = feMergeNode;
    this.feMerge = feMerge;
    this.originalNodeAdded = false;
    feMerge.appendChild(feMergeNode);
}

SVGDropShadowEffect.prototype.renderFrame = function(forceRender){
    if(forceRender || this.filterManager._mdf){
        if(forceRender || this.filterManager.effectElements[4].p._mdf){
            this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
        }
        if(forceRender || this.filterManager.effectElements[0].p._mdf){
            var col = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute('flood-color',rgbToHex(Math.round(col[0]*255),Math.round(col[1]*255),Math.round(col[2]*255)));
        }
        if(forceRender || this.filterManager.effectElements[1].p._mdf){
            this.feFlood.setAttribute('flood-opacity',this.filterManager.effectElements[1].p.v/255);
        }
        if(forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf){
            var distance = this.filterManager.effectElements[3].p.v;
            var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
            var x = distance * Math.cos(angle);
            var y = distance * Math.sin(angle);
            this.feOffset.setAttribute('dx', x);
            this.feOffset.setAttribute('dy', y);
        }
        /*if(forceRender || this.filterManager.effectElements[5].p._mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        }*/
    }
};
var _svgMatteSymbols = [];

function SVGMatte3Effect(filterElem, filterManager, elem){
    this.initialized = false;
    this.filterManager = filterManager;
    this.filterElem = filterElem;
    this.elem = elem;
    elem.matteElement = createNS('g');
    elem.matteElement.appendChild(elem.layerElement);
    elem.matteElement.appendChild(elem.transformedElement);
    elem.baseElement = elem.matteElement;
}

SVGMatte3Effect.prototype.findSymbol = function(mask) {
    var i = 0, len = _svgMatteSymbols.length;
    while(i < len) {
        if(_svgMatteSymbols[i] === mask) {
            return _svgMatteSymbols[i];
        }
        i += 1;
    }
    return null;
};

SVGMatte3Effect.prototype.replaceInParent = function(mask, symbolId) {
    var parentNode = mask.layerElement.parentNode;
    if(!parentNode) {
        return;
    }
    var children = parentNode.children;
    var i = 0, len = children.length;
    while (i < len) {
        if (children[i] === mask.layerElement) {
            break;
        }
        i += 1;
    }
    var nextChild;
    if (i <= len - 2) {
        nextChild = children[i + 1];
    }
    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);
    if(nextChild) {
        parentNode.insertBefore(useElem, nextChild);
    } else {
        parentNode.appendChild(useElem);
    }
};

SVGMatte3Effect.prototype.setElementAsMask = function(elem, mask) {
    if(!this.findSymbol(mask)) {
        var symbolId = createElementID();
        var masker = createNS('mask');
        masker.setAttribute('id', mask.layerId);
        masker.setAttribute('mask-type', 'alpha');
        _svgMatteSymbols.push(mask);
        var defs = elem.globalData.defs;
        defs.appendChild(masker);
        var symbol = createNS('symbol');
        symbol.setAttribute('id', symbolId);
        this.replaceInParent(mask, symbolId);
        symbol.appendChild(mask.layerElement);
        defs.appendChild(symbol);
        var useElem = createNS('use');
        useElem.setAttribute('href', '#' + symbolId);
        masker.appendChild(useElem);
        mask.data.hd = false;
        mask.show();
    }
    elem.setMatte(mask.layerId);
};

SVGMatte3Effect.prototype.initialize = function() {
    var ind = this.filterManager.effectElements[0].p.v;
    var elements = this.elem.comp.elements;
    var i = 0, len = elements.length;
    while (i < len) {
    	if (elements[i] && elements[i].data.ind === ind) {
    		this.setElementAsMask(this.elem, elements[i]);
    	}
    	i += 1;
    }
    this.initialized = true;
};

SVGMatte3Effect.prototype.renderFrame = function() {
	if(!this.initialized) {
		this.initialize();
	}
};
function SVGEffects(elem){
    var i, len = elem.data.ef ? elem.data.ef.length : 0;
    var filId = createElementID();
    var fil = filtersFactory.createFilter(filId);
    var count = 0;
    this.filters = [];
    var filterManager;
    for(i=0;i<len;i+=1){
        filterManager = null;
        if(elem.data.ef[i].ty === 20){
            count += 1;
            filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 21){
            count += 1;
            filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 22){
            filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 23){
            count += 1;
            filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 24){
            count += 1;
            filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 25){
            count += 1;
            filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i]);
        }else if(elem.data.ef[i].ty === 28){
            //count += 1;
            filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem);
        }else if(elem.data.ef[i].ty === 29){
            count += 1;
            filterManager = new SVGGaussianBlurEffect(fil, elem.effectsManager.effectElements[i]);
        }
        if(filterManager) {
            this.filters.push(filterManager);
        }
    }
    if(count){
        elem.globalData.defs.appendChild(fil);
        elem.layerElement.setAttribute('filter','url(' + locationHref + '#'+filId+')');
    }
    if (this.filters.length) {
        elem.addRenderableComponent(this);
    }
}

SVGEffects.prototype.renderFrame = function(_isFirstFrame){
    var i, len = this.filters.length;
    for(i=0;i<len;i+=1){
        this.filters[i].renderFrame(_isFirstFrame);
    }
};
function CVContextData() {
	this.saved = [];
    this.cArrPos = 0;
    this.cTr = new Matrix();
    this.cO = 1;
    var i, len = 15;
    this.savedOp = createTypedArray('float32', len);
    for(i=0;i<len;i+=1){
        this.saved[i] = createTypedArray('float32', 16);
    }
    this._length = len;
}

CVContextData.prototype.duplicate = function() {
	var newLength = this._length * 2;
	var currentSavedOp = this.savedOp;
    this.savedOp = createTypedArray('float32', newLength);
    this.savedOp.set(currentSavedOp);
    var i = 0;
    for(i = this._length; i < newLength; i += 1) {
        this.saved[i] = createTypedArray('float32', 16);
    }
    this._length = newLength;
};

CVContextData.prototype.reset = function() {
	this.cArrPos = 0;
	this.cTr.reset();
    this.cO = 1;
};
function CVBaseElement(){
}

CVBaseElement.prototype = {
    createElements: function(){},
    initRendererElement: function(){},
    createContainerElements: function(){
        this.canvasContext = this.globalData.canvasContext;
        this.renderableEffectsManager = new CVEffects(this);
    },
    createContent: function(){},
    setBlendMode: function(){
        var globalData = this.globalData;
        if(globalData.blendMode !== this.data.bm) {
            globalData.blendMode = this.data.bm;
            var blendModeValue = getBlendMode(this.data.bm);
            globalData.canvasContext.globalCompositeOperation = blendModeValue;
        }
    },
    createRenderableComponents: function(){
        this.maskManager = new CVMaskElement(this.data, this);
    },
    hideElement: function(){
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            this.hidden = true;
        }
    },
    showElement: function(){
        if (this.isInRange && !this.isTransparent){
            this.hidden = false;
            this._isFirstFrame = true;
            this.maskManager._isFirstFrame = true;
        }
    },
    renderFrame: function() {
        if (this.hidden || this.data.hd) {
            return;
        }
        this.renderTransform();
        this.renderRenderable();
        this.setBlendMode();
        var forceRealStack = this.data.ty === 0;
        this.globalData.renderer.save(forceRealStack);
        this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
        this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
        this.renderInnerContent();
        this.globalData.renderer.restore(forceRealStack);
        if(this.maskManager.hasMasks) {
            this.globalData.renderer.restore(true);
        }
        if (this._isFirstFrame) {
            this._isFirstFrame = false;
        }
    },
    destroy: function(){
        this.canvasContext = null;
        this.data = null;
        this.globalData = null;
        this.maskManager.destroy();
    },
    mHelper: new Matrix()
};
CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

function CVImageElement(data, globalData, comp){
    this.assetData = globalData.getAssetData(data.refId);
    this.img = globalData.imageLoader.getImage(this.assetData);
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);

CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVImageElement.prototype.createContent = function(){

    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var canvas = createTag('canvas');
        canvas.width = this.assetData.w;
        canvas.height = this.assetData.h;
        var ctx = canvas.getContext('2d');

        var imgW = this.img.width;
        var imgH = this.img.height;
        var imgRel = imgW / imgH;
        var canvasRel = this.assetData.w/this.assetData.h;
        var widthCrop, heightCrop;
        var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        if((imgRel > canvasRel && par === 'xMidYMid slice') || (imgRel < canvasRel && par !== 'xMidYMid slice')) {
            heightCrop = imgH;
            widthCrop = heightCrop*canvasRel;
        } else {
            widthCrop = imgW;
            heightCrop = widthCrop/canvasRel;
        }
        ctx.drawImage(this.img,(imgW-widthCrop)/2,(imgH-heightCrop)/2,widthCrop,heightCrop,0,0,this.assetData.w,this.assetData.h);
        this.img = canvas;
    }

};

CVImageElement.prototype.renderInnerContent = function(parentMatrix){
    this.canvasContext.drawImage(this.img, 0, 0);
};

CVImageElement.prototype.destroy = function(){
    this.img = null;
};
function CVCompElement(data, globalData, comp) {
    this.completeLayers = false;
    this.layers = data.layers;
    this.pendingElements = [];
    this.elements = createSizedArray(this.layers.length);
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate, this) : {_placeholder:true};
}

extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement);

CVCompElement.prototype.renderInnerContent = function() {
    var ctx = this.canvasContext;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.data.w, 0);
    ctx.lineTo(this.data.w, this.data.h);
    ctx.lineTo(0, this.data.h);
    ctx.lineTo(0, 0);
    ctx.clip();
    var i,len = this.layers.length;
    for( i = len - 1; i >= 0; i -= 1 ){
        if(this.completeLayers || this.elements[i]){
            this.elements[i].renderFrame();
        }
    }
};

CVCompElement.prototype.destroy = function(){
    var i,len = this.layers.length;
    for( i = len - 1; i >= 0; i -= 1 ){
        if(this.elements[i]) {
            this.elements[i].destroy();
        }
    }
    this.layers = null;
    this.elements = null;
};

function CVMaskElement(data,element){
    this.data = data;
    this.element = element;
    this.masksProperties = this.data.masksProperties || [];
    this.viewData = createSizedArray(this.masksProperties.length);
    var i, len = this.masksProperties.length, hasMasks = false;
    for (i = 0; i < len; i++) {
        if(this.masksProperties[i].mode !== 'n'){
            hasMasks = true;
        }
        this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);
    }
    this.hasMasks = hasMasks;
    if(hasMasks) {
        this.element.addRenderableComponent(this);
    }
}

CVMaskElement.prototype.renderFrame = function () {
    if(!this.hasMasks){
        return;
    }
    var transform = this.element.finalTransform.mat;
    var ctx = this.element.canvasContext;
    var i, len = this.masksProperties.length;
    var pt,pts,data;
    ctx.beginPath();
    for (i = 0; i < len; i++) {
        if(this.masksProperties[i].mode !== 'n'){
            if (this.masksProperties[i].inv) {
                ctx.moveTo(0, 0);
                ctx.lineTo(this.element.globalData.compSize.w, 0);
                ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
                ctx.lineTo(0, this.element.globalData.compSize.h);
                ctx.lineTo(0, 0);
            }
            data = this.viewData[i].v;
            pt = transform.applyToPointArray(data.v[0][0],data.v[0][1],0);
            ctx.moveTo(pt[0], pt[1]);
            var j, jLen = data._length;
            for (j = 1; j < jLen; j++) {
                pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
                ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
            }
            pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
            ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
        }
    }
    this.element.globalData.renderer.save(true);
    ctx.clip();
};

CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

CVMaskElement.prototype.destroy = function(){
    this.element = null;
};
function CVShapeElement(data, globalData, comp) {
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this.transformsManager = new ShapeTransformManager();
    this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement], CVShapeElement);

CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;

CVShapeElement.prototype.transformHelper = {opacity:1,_opMdf:false};

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.createContent = function(){
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData, true, []);
};

CVShapeElement.prototype.createStyleElement = function(data, transforms) {
    var styleElem = {
        data: data,
        type: data.ty,
        preTransforms: this.transformsManager.addTransformSequence(transforms),
        transforms: [],
        elements: [],
        closed: data.hd === true
    };
    var elementData = {};
    if(data.ty == 'fl' || data.ty == 'st'){
        elementData.c = PropertyFactory.getProp(this,data.c,1,255,this);
        if(!elementData.c.k){
            styleElem.co = 'rgb('+bm_floor(elementData.c.v[0])+','+bm_floor(elementData.c.v[1])+','+bm_floor(elementData.c.v[2])+')';
        }
    } else if (data.ty === 'gf' || data.ty === 'gs') {
        elementData.s = PropertyFactory.getProp(this,data.s,1,null,this);
        elementData.e = PropertyFactory.getProp(this,data.e,1,null,this);
        elementData.h = PropertyFactory.getProp(this,data.h||{k:0},0,0.01,this);
        elementData.a = PropertyFactory.getProp(this,data.a||{k:0},0,degToRads,this);
        elementData.g = new GradientProperty(this,data.g,this);
    }
    elementData.o = PropertyFactory.getProp(this,data.o,0,0.01,this);
    if(data.ty == 'st' || data.ty == 'gs') {
        styleElem.lc = this.lcEnum[data.lc] || 'round';
        styleElem.lj = this.ljEnum[data.lj] || 'round';
        if(data.lj == 1) {
            styleElem.ml = data.ml;
        }
        elementData.w = PropertyFactory.getProp(this,data.w,0,null,this);
        if(!elementData.w.k){
            styleElem.wi = elementData.w.v;
        }
        if(data.d){
            var d = new DashProperty(this,data.d,'canvas', this);
            elementData.d = d;
            if(!elementData.d.k){
                styleElem.da = elementData.d.dashArray;
                styleElem.do = elementData.d.dashoffset[0];
            }
        }
    } else {
        styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
    }
    this.stylesList.push(styleElem);
    elementData.style = styleElem;
    return elementData;
};

CVShapeElement.prototype.createGroupElement = function(data) {
    var elementData = {
        it: [],
        prevViewData: []
    };
    return elementData;
};

CVShapeElement.prototype.createTransformElement = function(data) {
    var elementData = {
        transform : {
            opacity: 1,
            _opMdf:false,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this,data.o,0,0.01,this),
            mProps: TransformPropertyFactory.getTransformProperty(this,data,this)
        }
    };
    return elementData;
};

CVShapeElement.prototype.createShapeElement = function(data) {
    var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);
    
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    return elementData;
};

CVShapeElement.prototype.reloadShapes = function() {
    this._isFirstFrame = true;
    var i, len = this.itemsData.length;
    for (i = 0; i < len; i += 1) {
        this.prevViewData[i] = this.itemsData[i];
    }
    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData, true, []);
    len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
        this.dynamicProperties[i].getValue();
    }
    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
};

CVShapeElement.prototype.addTransformToStyleList = function(transform) {
    var i, len = this.stylesList.length;
    for (i = 0; i < len; i += 1) {
        if(!this.stylesList[i].closed) {
            this.stylesList[i].transforms.push(transform);
        }
    }
}

CVShapeElement.prototype.removeTransformFromStyleList = function() {
    var i, len = this.stylesList.length;
    for (i = 0; i < len; i += 1) {
        if(!this.stylesList[i].closed) {
            this.stylesList[i].transforms.pop();
        }
    }
}

CVShapeElement.prototype.closeStyles = function(styles) {
    var i, len = styles.length, j, jLen;
    for (i = 0; i < len; i += 1) {
        styles[i].closed = true;
    }
}

CVShapeElement.prototype.searchShapes = function(arr,itemsData, prevViewData, shouldRender, transforms){
    var i, len = arr.length - 1;
    var j, jLen;
    var ownStyles = [], ownModifiers = [], processedPos, modifier, currentTransform;
    var ownTransforms = [].concat(transforms);
    for(i=len;i>=0;i-=1){
        processedPos = this.searchProcessedElement(arr[i]);
        if(!processedPos){
            arr[i]._shouldRender = shouldRender;
        } else {
            itemsData[i] = prevViewData[processedPos - 1];
        }
        if(arr[i].ty == 'fl' || arr[i].ty == 'st'|| arr[i].ty == 'gf'|| arr[i].ty == 'gs'){
            if(!processedPos){
                itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
            } else {
                itemsData[i].style.closed = false;
            }
            
            ownStyles.push(itemsData[i].style);
        }else if(arr[i].ty == 'gr'){
            if(!processedPos){
                itemsData[i] = this.createGroupElement(arr[i]);
            } else {
                jLen = itemsData[i].it.length;
                for(j=0;j<jLen;j+=1){
                    itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
            }
            this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData, shouldRender, ownTransforms);
        }else if(arr[i].ty == 'tr'){
            if(!processedPos){
                currentTransform = this.createTransformElement(arr[i]);
                itemsData[i] = currentTransform;
            }
            ownTransforms.push(itemsData[i]);
            this.addTransformToStyleList(itemsData[i]);
        }else if(arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr'){
            if(!processedPos){
                itemsData[i] = this.createShapeElement(arr[i]);
            }
            
        }else if(arr[i].ty == 'tm' || arr[i].ty == 'rd'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this,arr[i]);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
            } else {
                modifier = itemsData[i];
                modifier.closed = false;
            }
            ownModifiers.push(modifier);
        } else if(arr[i].ty == 'rp'){
            if(!processedPos){
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this,arr,i,itemsData);
                this.shapeModifiers.push(modifier);
                shouldRender = false;
            }else{
                modifier = itemsData[i];
                modifier.closed = true;
            }
            ownModifiers.push(modifier);
        }
        this.addProcessedElement(arr[i], i + 1);
    }
    this.removeTransformFromStyleList();
    this.closeStyles(ownStyles);
    len = ownModifiers.length;
    for(i=0;i<len;i+=1){
        ownModifiers[i].closed = true;
    }
};

CVShapeElement.prototype.renderInnerContent = function() {
    this.transformHelper.opacity = 1;
    this.transformHelper._opMdf = false;
    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
    this.renderShape(this.transformHelper,this.shapesData,this.itemsData,true);
};

CVShapeElement.prototype.renderShapeTransform = function(parentTransform, groupTransform) {
    var props, groupMatrix;
    if(parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
        groupTransform.opacity = parentTransform.opacity;
        groupTransform.opacity *= groupTransform.op.v;
        groupTransform._opMdf = true;
    }
};

CVShapeElement.prototype.drawLayer = function() {
    var i, len = this.stylesList.length;
    var j, jLen, k, kLen,elems,nodes, renderer = this.globalData.renderer, ctx = this.globalData.canvasContext, type, currentStyle;
    for(i=0;i<len;i+=1){
        currentStyle = this.stylesList[i];
        type = currentStyle.type;

        //Skipping style when
        //Stroke width equals 0
        //style should not be rendered (extra unused repeaters)
        //current opacity equals 0
        //global opacity equals 0
        if(((type === 'st' || type === 'gs') && currentStyle.wi === 0) || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0){
            continue;
        }
        renderer.save();
        elems = currentStyle.elements;
        if(type === 'st' || type === 'gs'){
            ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
            ctx.lineWidth = currentStyle.wi;
            ctx.lineCap = currentStyle.lc;
            ctx.lineJoin = currentStyle.lj;
            ctx.miterLimit = currentStyle.ml || 0;
        } else {
            ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
        }
        renderer.ctxOpacity(currentStyle.coOp);
        if(type !== 'st' && type !== 'gs'){
            ctx.beginPath();
        }
        renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
        jLen = elems.length;
        for(j=0;j<jLen;j+=1){
            if(type === 'st' || type === 'gs'){
                ctx.beginPath();
                if(currentStyle.da){
                    ctx.setLineDash(currentStyle.da);
                    ctx.lineDashOffset = currentStyle.do;
                }
            }
            nodes = elems[j].trNodes;
            kLen = nodes.length;

            for(k=0;k<kLen;k+=1){
                if(nodes[k].t == 'm'){
                    ctx.moveTo(nodes[k].p[0],nodes[k].p[1]);
                }else if(nodes[k].t == 'c'){
                    ctx.bezierCurveTo(nodes[k].pts[0],nodes[k].pts[1],nodes[k].pts[2],nodes[k].pts[3],nodes[k].pts[4],nodes[k].pts[5]);
                }else{
                    ctx.closePath();
                }
            }
            if(type === 'st' || type === 'gs'){
                ctx.stroke();
                if(currentStyle.da){
                    ctx.setLineDash(this.dashResetter);
                }
            }
        }
        if(type !== 'st' && type !== 'gs'){
            ctx.fill(currentStyle.r);
        }
        renderer.restore();
    }
};

CVShapeElement.prototype.renderShape = function(parentTransform,items,data,isMain){
    var i, len = items.length - 1;
    var groupTransform;
    groupTransform = parentTransform;
    for(i=len;i>=0;i-=1){
        if(items[i].ty == 'tr'){
            groupTransform = data[i].transform;
            this.renderShapeTransform(parentTransform, groupTransform);
        }else if(items[i].ty == 'sh' || items[i].ty == 'el' || items[i].ty == 'rc' || items[i].ty == 'sr'){
            this.renderPath(items[i],data[i]);
        }else if(items[i].ty == 'fl'){
            this.renderFill(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'st'){
            this.renderStroke(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'gf' || items[i].ty == 'gs'){
            this.renderGradientFill(items[i],data[i],groupTransform);
        }else if(items[i].ty == 'gr'){
            this.renderShape(groupTransform,items[i].it,data[i].it);
        }else if(items[i].ty == 'tm'){
            //
        }
    }
    if(isMain){
        this.drawLayer();
    }
    
};

CVShapeElement.prototype.renderStyledShape = function(styledShape, shape){
    if(this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
        var shapeNodes = styledShape.trNodes;
        var paths = shape.paths;
        var i, len, j, jLen = paths._length;
        shapeNodes.length = 0;
        var groupTransformMat = styledShape.transforms.finalTransform;
        for (j = 0; j < jLen; j += 1) {
            var pathNodes = paths.shapes[j];
            if(pathNodes && pathNodes.v){
                len = pathNodes._length;
                for (i = 1; i < len; i += 1) {
                    if (i === 1) {
                        shapeNodes.push({
                            t: 'm',
                            p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                        });
                    }
                    shapeNodes.push({
                        t: 'c',
                        pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
                    });
                }
                if (len === 1) {
                    shapeNodes.push({
                        t: 'm',
                        p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                    });
                }
                if (pathNodes.c && len) {
                    shapeNodes.push({
                        t: 'c',
                        pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
                    });
                    shapeNodes.push({
                        t: 'z'
                    });
                }
            }
        }
        styledShape.trNodes = shapeNodes;
    }
}

CVShapeElement.prototype.renderPath = function(pathData,itemData){
    if(pathData.hd !== true && pathData._shouldRender) {
        var i, len = itemData.styledShapes.length;
        for (i = 0; i < len; i += 1) {
            this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
        }
    }
};

CVShapeElement.prototype.renderFill = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;

    if (itemData.c._mdf || this._isFirstFrame) {
        styleElem.co = 'rgb(' 
        + bm_floor(itemData.c.v[0]) + ',' 
        + bm_floor(itemData.c.v[1]) + ',' 
        + bm_floor(itemData.c.v[2]) + ')';
    }
    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
        styleElem.coOp = itemData.o.v * groupTransform.opacity;
    }
};

CVShapeElement.prototype.renderGradientFill = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;
    if(!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || (styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf))) {
        var ctx = this.globalData.canvasContext;
        var grd;
        var pt1 = itemData.s.v, pt2 = itemData.e.v;
        if (styleData.t === 1) {
            grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
        } else {
            var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
            var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

            var percent = itemData.h.v >= 1 ? 0.99 : itemData.h.v <= -1 ? -0.99: itemData.h.v;
            var dist = rad * percent;
            var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
            var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
            var grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
        }

        var i, len = styleData.g.p;
        var cValues = itemData.g.c;
        var opacity = 1;

        for (i = 0; i < len; i += 1){
            if(itemData.g._hasOpacity && itemData.g._collapsable) {
                opacity = itemData.g.o[i*2 + 1];
            }
            grd.addColorStop(cValues[i * 4] / 100,'rgba('+ cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ','+cValues[i * 4 + 3] + ',' + opacity + ')');
        }
        styleElem.grd = grd;
    }
    styleElem.coOp = itemData.o.v*groupTransform.opacity;
    
};

CVShapeElement.prototype.renderStroke = function(styleData,itemData, groupTransform){
    var styleElem = itemData.style;
    var d = itemData.d;
    if(d && (d._mdf  || this._isFirstFrame)){
        styleElem.da = d.dashArray;
        styleElem.do = d.dashoffset[0];
    }
    if(itemData.c._mdf || this._isFirstFrame){
        styleElem.co = 'rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';
    }
    if(itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame){
        styleElem.coOp = itemData.o.v*groupTransform.opacity;
    }
    if(itemData.w._mdf || this._isFirstFrame){
        styleElem.wi = itemData.w.v;
    }
};


CVShapeElement.prototype.destroy = function(){
    this.shapesData = null;
    this.globalData = null;
    this.canvasContext = null;
    this.stylesList.length = 0;
    this.itemsData.length = 0;
};


function CVSolidElement(data, globalData, comp) {
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);

CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVSolidElement.prototype.renderInnerContent = function() {
    var ctx = this.canvasContext;
    ctx.fillStyle = this.data.sc;
    ctx.fillRect(0, 0, this.data.sw, this.data.sh);
    //
};
function CVTextElement(data, globalData, comp){
    this.textSpans = [];
    this.yOffset = 0;
    this.fillColorAnim = false;
    this.strokeColorAnim = false;
    this.strokeWidthAnim = false;
    this.stroke = false;
    this.fill = false;
    this.justifyOffset = 0;
    this.currentRender = null;
    this.renderType = 'canvas';
    this.values = {
        fill: 'rgba(0,0,0,0)',
        stroke: 'rgba(0,0,0,0)',
        sWidth: 0,
        fValue: ''
    };
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement], CVTextElement);

CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

CVTextElement.prototype.buildNewText = function(){
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);

    var hasFill = false;
    if(documentData.fc) {
        hasFill = true;
        this.values.fill = this.buildColor(documentData.fc);
    }else{
        this.values.fill = 'rgba(0,0,0,0)';
    }
    this.fill = hasFill;
    var hasStroke = false;
    if(documentData.sc){
        hasStroke = true;
        this.values.stroke = this.buildColor(documentData.sc);
        this.values.sWidth = documentData.sw;
    }
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    var i, len;
    var letters = documentData.l;
    var matrixHelper = this.mHelper;
    this.stroke = hasStroke;
    this.values.fValue = documentData.finalSize + 'px '+ this.globalData.fontManager.getFontByName(documentData.f).fFamily;
    len = documentData.finalText.length;
    //this.tHelper.font = this.values.fValue;
    var charData, shapeData, k, kLen, shapes, j, jLen, pathNodes, commands, pathArr, singleShape = this.data.singleShape;
    var trackingOffset = documentData.tr/1000*documentData.finalSize;
    var xPos = 0, yPos = 0, firstLine = true;
    var cnt = 0;
    for (i = 0; i < len; i += 1) {
        charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        shapeData = charData && charData.data || {};
        matrixHelper.reset();
        if(singleShape && letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
        }

        shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
        jLen = shapes.length;
        matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);
        if(singleShape){
            this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
        }
        commands = createSizedArray(jLen);
        for(j=0;j<jLen;j+=1){
            kLen = shapes[j].ks.k.i.length;
            pathNodes = shapes[j].ks.k;
            pathArr = [];
            for(k=1;k<kLen;k+=1){
                if(k==1){
                    pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
                }
                pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToY(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToX(pathNodes.v[k][0],pathNodes.v[k][1],0),matrixHelper.applyToY(pathNodes.v[k][0],pathNodes.v[k][1],0));
            }
            pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToY(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));
            commands[j] = pathArr;
        }
        if(singleShape){
            xPos += letters[i].l;
            xPos += trackingOffset;
        }
        if(this.textSpans[cnt]){
            this.textSpans[cnt].elem = commands;
        } else {
            this.textSpans[cnt] = {elem: commands};
        }
        cnt +=1;
    }
};

CVTextElement.prototype.renderInnerContent = function(){
    var ctx = this.canvasContext;
    var finalMat = this.finalTransform.mat.props;
    ctx.font = this.values.fValue;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;

    if(!this.data.singleShape){
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    }

    var  i,len, j, jLen, k, kLen;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.textProperty.currentData.l;

    len = letters.length;
    var renderedLetter;
    var lastFill = null, lastStroke = null, lastStrokeW = null, commands, pathArr;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            continue;
        }
        renderedLetter = renderedLetters[i];
        if(renderedLetter){
            this.globalData.renderer.save();
            this.globalData.renderer.ctxTransform(renderedLetter.p);
            this.globalData.renderer.ctxOpacity(renderedLetter.o);
        }
        if(this.fill){
            if(renderedLetter && renderedLetter.fc){
                if(lastFill !== renderedLetter.fc){
                    lastFill = renderedLetter.fc;
                    ctx.fillStyle = renderedLetter.fc;
                }
            }else if(lastFill !== this.values.fill){
                lastFill = this.values.fill;
                ctx.fillStyle = this.values.fill;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.fill();
            ///ctx.fillText(this.textSpans[i].val,0,0);
        }
        if(this.stroke){
            if(renderedLetter && renderedLetter.sw){
                if(lastStrokeW !== renderedLetter.sw){
                    lastStrokeW = renderedLetter.sw;
                    ctx.lineWidth = renderedLetter.sw;
                }
            }else if(lastStrokeW !== this.values.sWidth){
                lastStrokeW = this.values.sWidth;
                ctx.lineWidth = this.values.sWidth;
            }
            if(renderedLetter && renderedLetter.sc){
                if(lastStroke !== renderedLetter.sc){
                    lastStroke = renderedLetter.sc;
                    ctx.strokeStyle = renderedLetter.sc;
                }
            }else if(lastStroke !== this.values.stroke){
                lastStroke = this.values.stroke;
                ctx.strokeStyle = this.values.stroke;
            }
            commands = this.textSpans[i].elem;
            jLen = commands.length;
            this.globalData.canvasContext.beginPath();
            for(j=0;j<jLen;j+=1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
            }
            this.globalData.canvasContext.closePath();
            this.globalData.canvasContext.stroke();
            ///ctx.strokeText(letters[i].val,0,0);
        }
        if(renderedLetter) {
            this.globalData.renderer.restore();
        }
    }
};
function CVEffects() {

}
CVEffects.prototype.renderFrame = function(){};
function HBaseElement(data,globalData,comp){}
HBaseElement.prototype = {
    checkBlendMode: function(){},
    initRendererElement: function(){
        this.baseElement = createTag(this.data.tg || 'div');
        if(this.data.hasMask) {
            this.svgElement = createNS('svg');
            this.layerElement = createNS('g');
            this.maskedElement = this.layerElement;
            this.svgElement.appendChild(this.layerElement);
            this.baseElement.appendChild(this.svgElement);
        } else {
            this.layerElement = this.baseElement;
        }
        styleDiv(this.baseElement);
    },
    createContainerElements: function(){
        this.renderableEffectsManager = new CVEffects(this);
        this.transformedElement = this.baseElement;
        this.maskedElement = this.layerElement;
        if (this.data.ln) {
            this.layerElement.setAttribute('id',this.data.ln);
        }
        if (this.data.cl) {
            this.layerElement.setAttribute('class', this.data.cl);
        }
        if (this.data.bm !== 0) {
            this.setBlendMode();
        }
    },
    renderElement: function() {
        if(this.finalTransform._matMdf){
            this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS();
        }
        if(this.finalTransform._opMdf){
            this.transformedElement.style.opacity = this.finalTransform.mProp.o.v;
        }
    },
    renderFrame: function() {
        //If it is exported as hidden (data.hd === true) no need to render
        //If it is not visible no need to render
        if (this.data.hd || this.hidden) {
            return;
        }
        this.renderTransform();
        this.renderRenderable();
        this.renderElement();
        this.renderInnerContent();
        if (this._isFirstFrame) {
            this._isFirstFrame = false;
        }
    },
    destroy: function(){
        this.layerElement = null;
        this.transformedElement = null;
        if(this.matteElement) {
            this.matteElement = null;
        }
        if(this.maskManager) {
            this.maskManager.destroy();
            this.maskManager = null;
        }
    },
    createRenderableComponents: function(){
        this.maskManager = new MaskElement(this.data, this, this.globalData);
    },
    addEffects: function(){
    },
    setMatte: function(){}
};
HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;
function HSolidElement(data,globalData,comp){
    this.initElement(data,globalData,comp);
}
extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement], HSolidElement);

HSolidElement.prototype.createContent = function(){
    var rect;
    if(this.data.hasMask){
        rect = createNS('rect');
        rect.setAttribute('width',this.data.sw);
        rect.setAttribute('height',this.data.sh);
        rect.setAttribute('fill',this.data.sc);
        this.svgElement.setAttribute('width',this.data.sw);
        this.svgElement.setAttribute('height',this.data.sh);
    } else {
        rect = createTag('div');
        rect.style.width = this.data.sw + 'px';
        rect.style.height = this.data.sh + 'px';
        rect.style.backgroundColor = this.data.sc;
    }
    this.layerElement.appendChild(rect);
};

function HCompElement(data,globalData,comp){
    this.layers = data.layers;
    this.supports3d = !data.hasMask;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.initElement(data,globalData,comp);
    this.tm = data.tm ? PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this) : {_placeholder:true};
}

extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement);
HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

HCompElement.prototype.createContainerElements = function(){
    this._createBaseContainerElements();
    //divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
    if(this.data.hasMask){
        this.svgElement.setAttribute('width',this.data.w);
        this.svgElement.setAttribute('height',this.data.h);
        this.transformedElement = this.baseElement;
    } else {
        this.transformedElement = this.layerElement;
    }
};

HCompElement.prototype.addTo3dContainer = function(elem,pos) {
    var j = 0;
    var nextElement;
    while(j<pos){
        if(this.elements[j] && this.elements[j].getBaseElement){
            nextElement = this.elements[j].getBaseElement();
        }
        j += 1;
    }
    if(nextElement){
        this.layerElement.insertBefore(elem, nextElement);
    } else {
        this.layerElement.appendChild(elem);
    }
}

function HShapeElement(data,globalData,comp){
    //List of drawable elements
    this.shapes = [];
    // Full shape data
    this.shapesData = data.shapes;
    //List of styles that will be applied to shapes
    this.stylesList = [];
    //List of modifiers that will be applied to shapes
    this.shapeModifiers = [];
    //List of items in shape tree
    this.itemsData = [];
    //List of items in previous shape tree
    this.processedElements = [];
    // List of animated components
    this.animatedContents = [];
    this.shapesContainer = createNS('g');
    this.initElement(data,globalData,comp);
    //Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created
    this.prevViewData = [];
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    };
}
extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement], HShapeElement);
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

HShapeElement.prototype.createContent = function(){
    var cont;
    this.baseElement.style.fontSize = 0;
    if (this.data.hasMask) {
        this.layerElement.appendChild(this.shapesContainer);
        cont = this.svgElement;
    } else {
        cont = createNS('svg');
        var size = this.comp.data ? this.comp.data : this.globalData.compSize;
        cont.setAttribute('width',size.w);
        cont.setAttribute('height',size.h);
        cont.appendChild(this.shapesContainer);
        this.layerElement.appendChild(cont);
    }

    this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0, [], true);
    this.filterUniqueShapes();
    this.shapeCont = cont;
};

HShapeElement.prototype.getTransformedPoint = function(transformers, point) {
    var i, len = transformers.length;
    for(i = 0; i < len; i += 1) {
        point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
    }
    return point;
}

HShapeElement.prototype.calculateShapeBoundingBox = function(item, boundingBox) {
    var shape = item.sh.v;
    var transformers = item.transformers;
    var i, len = shape._length, vPoint, oPoint, nextIPoint, nextVPoint, bounds;
    if (len <= 1) {
        return;
    }
    for (i = 0; i < len - 1; i += 1) {
        vPoint = this.getTransformedPoint(transformers, shape.v[i]);
        oPoint = this.getTransformedPoint(transformers, shape.o[i]);
        nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
        nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
        this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }
    if(shape.c) {
        vPoint = this.getTransformedPoint(transformers, shape.v[i]);
        oPoint = this.getTransformedPoint(transformers, shape.o[i]);
        nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
        nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
        this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }
}

HShapeElement.prototype.checkBounds = function(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
    this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
    var bounds = this.shapeBoundingBox;
    boundingBox.x = bm_min(bounds.left, boundingBox.x);
    boundingBox.xMax = bm_max(bounds.right, boundingBox.xMax);
    boundingBox.y = bm_min(bounds.top, boundingBox.y);
    boundingBox.yMax = bm_max(bounds.bottom, boundingBox.yMax);
}

HShapeElement.prototype.shapeBoundingBox = {
    left:0,
    right:0,
    top:0,
    bottom:0,
}

HShapeElement.prototype.tempBoundingBox = {
    x:0,
    xMax:0,
    y:0,
    yMax:0,
    width:0,
    height:0
}

HShapeElement.prototype.getBoundsOfCurve = function(p0, p1, p2, p3) {

    var bounds = [[p0[0],p3[0]], [p0[1],p3[1]]];

    for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {

      b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
      a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
      c = 3 * p1[i] - 3 * p0[i];

      b = b | 0;
      a = a | 0;
      c = c | 0;

      if (a === 0) {

        if (b === 0) {
          continue;
        }

        t = -c / b;

        if (0 < t && t < 1) {
          bounds[i].push(this.calculateF(t,p0,p1,p2,p3,i));
        }
        continue;
      }

      b2ac = b * b - 4 * c * a;

      if (b2ac < 0) {
        continue;
      }

      t1 = (-b + bm_sqrt(b2ac))/(2 * a);
      if (0 < t1 && t1 < 1) bounds[i].push(this.calculateF(t1,p0,p1,p2,p3,i));

      t2 = (-b - bm_sqrt(b2ac))/(2 * a);
      if (0 < t2 && t2 < 1) bounds[i].push(this.calculateF(t2,p0,p1,p2,p3,i));

    }

    this.shapeBoundingBox.left = bm_min.apply(null, bounds[0]);
    this.shapeBoundingBox.top = bm_min.apply(null, bounds[1]);
    this.shapeBoundingBox.right = bm_max.apply(null, bounds[0]);
    this.shapeBoundingBox.bottom = bm_max.apply(null, bounds[1]);
  };

  HShapeElement.prototype.calculateF = function(t, p0, p1, p2, p3, i) {
    return bm_pow(1-t, 3) * p0[i]
        + 3 * bm_pow(1-t, 2) * t * p1[i]
        + 3 * (1-t) * bm_pow(t, 2) * p2[i]
        + bm_pow(t, 3) * p3[i];
  }

HShapeElement.prototype.calculateBoundingBox = function(itemsData, boundingBox) {
    var i, len = itemsData.length, path;
    for(i = 0; i < len; i += 1) {
        if(itemsData[i] && itemsData[i].sh) {
            this.calculateShapeBoundingBox(itemsData[i], boundingBox)
        } else if(itemsData[i] && itemsData[i].it) {
            this.calculateBoundingBox(itemsData[i].it, boundingBox)
        }
    }
}

HShapeElement.prototype.currentBoxContains = function(box) {
    return this.currentBBox.x <= box.x 
    && this.currentBBox.y <= box.y 
    && this.currentBBox.width + this.currentBBox.x >= box.x + box.width
    && this.currentBBox.height + this.currentBBox.y >= box.y + box.height
}

HShapeElement.prototype.renderInnerContent = function() {
    this._renderShapeFrame();

    if(!this.hidden && (this._isFirstFrame || this._mdf)) {
        var tempBoundingBox = this.tempBoundingBox;
        var max = 999999;
        tempBoundingBox.x = max;
        tempBoundingBox.xMax = -max;
        tempBoundingBox.y = max;
        tempBoundingBox.yMax = -max;
        this.calculateBoundingBox(this.itemsData, tempBoundingBox);
        tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
        tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
        //var tempBoundingBox = this.shapeCont.getBBox();
        if(this.currentBoxContains(tempBoundingBox)) {
            return;
        }
        var changed = false;
        if(this.currentBBox.w !== tempBoundingBox.width){
            this.currentBBox.w = tempBoundingBox.width;
            this.shapeCont.setAttribute('width',tempBoundingBox.width);
            changed = true;
        }
        if(this.currentBBox.h !== tempBoundingBox.height){
            this.currentBBox.h = tempBoundingBox.height;
            this.shapeCont.setAttribute('height',tempBoundingBox.height);
            changed = true;
        }
        if(changed  || this.currentBBox.x !== tempBoundingBox.x  || this.currentBBox.y !== tempBoundingBox.y){
            this.currentBBox.w = tempBoundingBox.width;
            this.currentBBox.h = tempBoundingBox.height;
            this.currentBBox.x = tempBoundingBox.x;
            this.currentBBox.y = tempBoundingBox.y;

            this.shapeCont.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
            this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        }
    }

};
function HTextElement(data,globalData,comp){
    this.textSpans = [];
    this.textPaths = [];
    this.currentBBox = {
        x:999999,
        y: -999999,
        h: 0,
        w: 0
    };
    this.renderType = 'svg';
    this.isMasked = false;
    this.initElement(data,globalData,comp);

}
extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement], HTextElement);

HTextElement.prototype.createContent = function(){
    this.isMasked = this.checkMasks();
    if(this.isMasked){
        this.renderType = 'svg';
        this.compW = this.comp.data.w;
        this.compH = this.comp.data.h;
        this.svgElement.setAttribute('width',this.compW);
        this.svgElement.setAttribute('height',this.compH);
        var g = createNS('g');
        this.maskedElement.appendChild(g);
        this.innerElem = g;
    } else {
        this.renderType = 'html';
        this.innerElem = this.layerElement;
    }

    this.checkParenting();

};

HTextElement.prototype.buildNewText = function(){
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
    var innerElemStyle = this.innerElem.style;
    innerElemStyle.color = innerElemStyle.fill = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
    if(documentData.sc){
        innerElemStyle.stroke = this.buildColor(documentData.sc);
        innerElemStyle.strokeWidth = documentData.sw+'px';
    }
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    if(!this.globalData.fontManager.chars){
        innerElemStyle.fontSize = documentData.finalSize+'px';
        innerElemStyle.lineHeight = documentData.finalSize+'px';
        if(fontData.fClass){
            this.innerElem.className = fontData.fClass;
        } else {
            innerElemStyle.fontFamily = fontData.fFamily;
            var fWeight = documentData.fWeight, fStyle = documentData.fStyle;
            innerElemStyle.fontStyle = fStyle;
            innerElemStyle.fontWeight = fWeight;
        }
    }
    var i, len;

    var letters = documentData.l;
    len = letters.length;
    var tSpan,tParent,tCont;
    var matrixHelper = this.mHelper;
    var shapes, shapeStr = '';
    var cnt = 0;
    for (i = 0;i < len ;i += 1) {
        if(this.globalData.fontManager.chars){
            if(!this.textPaths[cnt]){
                tSpan = createNS('path');
                tSpan.setAttribute('stroke-linecap', 'butt');
                tSpan.setAttribute('stroke-linejoin','round');
                tSpan.setAttribute('stroke-miterlimit','4');
            } else {
                tSpan = this.textPaths[cnt];
            }
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tCont = tParent.children[0];
                } else {

                    tParent = createTag('div');
                    tParent.style.lineHeight = 0;
                    tCont = createNS('svg');
                    tCont.appendChild(tSpan);
                    styleDiv(tParent);
                }
            }
        }else{
            if(!this.isMasked){
                if(this.textSpans[cnt]){
                    tParent = this.textSpans[cnt];
                    tSpan = this.textPaths[cnt];
                } else {
                    tParent = createTag('span');
                    styleDiv(tParent);
                    tSpan = createTag('span');
                    styleDiv(tSpan);
                    tParent.appendChild(tSpan);
                }
            } else {
                tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
            }
        }
        //tSpan.setAttribute('visibility', 'hidden');
        if(this.globalData.fontManager.chars){
            var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            var shapeData;
            if(charData){
                shapeData = charData.data;
            } else {
                shapeData = null;
            }
            matrixHelper.reset();
            if(shapeData && shapeData.shapes){
                shapes = shapeData.shapes[0].it;
                matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);
                shapeStr = this.createPathShape(matrixHelper,shapes);
                tSpan.setAttribute('d',shapeStr);
            }
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                if(shapeData && shapeData.shapes){

                    //document.body.appendChild is needed to get exact measure of shape
                    document.body.appendChild(tCont);
                    var boundingBox = tCont.getBBox();
                    tCont.setAttribute('width',boundingBox.width + 2);
                    tCont.setAttribute('height',boundingBox.height + 2);
                    tCont.setAttribute('viewBox',(boundingBox.x-1)+' '+ (boundingBox.y-1)+' '+ (boundingBox.width+2)+' '+ (boundingBox.height+2));
                    tCont.style.transform = tCont.style.webkitTransform = 'translate(' + (boundingBox.x-1) + 'px,' + (boundingBox.y-1) + 'px)';

                    letters[i].yOffset = boundingBox.y-1;

                } else{
                    tCont.setAttribute('width',1);
                    tCont.setAttribute('height',1);
                }
                    tParent.appendChild(tCont);
            }else{
                this.innerElem.appendChild(tSpan);
            }
        }else{
            tSpan.textContent = letters[i].val;
            tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
            if(!this.isMasked){
                this.innerElem.appendChild(tParent);
                //
                tSpan.style.transform = tSpan.style.webkitTransform = 'translate3d(0,'+ -documentData.finalSize/1.2+'px,0)';
            } else {
                this.innerElem.appendChild(tSpan);
            }
        }
        //
        if(!this.isMasked){
            this.textSpans[cnt] = tParent;
        }else{
            this.textSpans[cnt] = tSpan;
        }
        this.textSpans[cnt].style.display = 'block';
        this.textPaths[cnt] = tSpan;
        cnt += 1;
    }
    while(cnt < this.textSpans.length){
        this.textSpans[cnt].style.display = 'none';
        cnt += 1;
    }
};

HTextElement.prototype.renderInnerContent = function() {

    if(this.data.singleShape){
        if(!this._isFirstFrame && !this.lettersChangedFlag){
            return;
        } else {
            // Todo Benchmark if using this is better than getBBox
             if(this.isMasked && this.finalTransform._matMdf){
                 this.svgElement.setAttribute('viewBox',-this.finalTransform.mProp.p.v[0]+' '+ -this.finalTransform.mProp.p.v[1]+' '+this.compW+' '+this.compH);
                this.svgElement.style.transform = this.svgElement.style.webkitTransform = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
             }
        }
    }

    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    if(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag){
        return;
    }
    var  i,len, count = 0;
    var renderedLetters = this.textAnimator.renderedLetters;

    var letters = this.textProperty.currentData.l;

    len = letters.length;
    var renderedLetter, textSpan, textPath;
    for(i=0;i<len;i+=1){
        if(letters[i].n){
            count += 1;
            continue;
        }
        textSpan = this.textSpans[i];
        textPath = this.textPaths[i];
        renderedLetter = renderedLetters[count];
        count += 1;
        if(renderedLetter._mdf.m) {
            if(!this.isMasked){
                textSpan.style.transform = textSpan.style.webkitTransform = renderedLetter.m;
            }else{
                textSpan.setAttribute('transform',renderedLetter.m);
            }
        }
        ////textSpan.setAttribute('opacity',renderedLetter.o);
        textSpan.style.opacity = renderedLetter.o;
        if(renderedLetter.sw && renderedLetter._mdf.sw){
            textPath.setAttribute('stroke-width',renderedLetter.sw);
        }
        if(renderedLetter.sc && renderedLetter._mdf.sc){
            textPath.setAttribute('stroke',renderedLetter.sc);
        }
        if(renderedLetter.fc && renderedLetter._mdf.fc){
            textPath.setAttribute('fill',renderedLetter.fc);
            textPath.style.color = renderedLetter.fc;
        }
    }

    if(this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)){
        var boundingBox = this.innerElem.getBBox();

        if(this.currentBBox.w !== boundingBox.width){
            this.currentBBox.w = boundingBox.width;
            this.svgElement.setAttribute('width',boundingBox.width);
        }
        if(this.currentBBox.h !== boundingBox.height){
            this.currentBBox.h = boundingBox.height;
            this.svgElement.setAttribute('height',boundingBox.height);
        }

        var margin = 1;
        if(this.currentBBox.w !== (boundingBox.width + margin*2) || this.currentBBox.h !== (boundingBox.height + margin*2)  || this.currentBBox.x !== (boundingBox.x - margin)  || this.currentBBox.y !== (boundingBox.y - margin)){
            this.currentBBox.w = boundingBox.width + margin*2;
            this.currentBBox.h = boundingBox.height + margin*2;
            this.currentBBox.x = boundingBox.x - margin;
            this.currentBBox.y = boundingBox.y - margin;

            this.svgElement.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);
            this.svgElement.style.transform = this.svgElement.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        }
    }
};
function HImageElement(data,globalData,comp){
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data,globalData,comp);
}

extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement], HImageElement);


HImageElement.prototype.createContent = function(){
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    var img = new Image();

    if(this.data.hasMask){
        this.imageElem = createNS('image');
        this.imageElem.setAttribute('width',this.assetData.w+"px");
        this.imageElem.setAttribute('height',this.assetData.h+"px");
        this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);
        this.layerElement.appendChild(this.imageElem);
        this.baseElement.setAttribute('width',this.assetData.w);
        this.baseElement.setAttribute('height',this.assetData.h);
    } else {
        this.layerElement.appendChild(img);
    }
    img.src = assetPath;
    if(this.data.ln){
        this.baseElement.setAttribute('id',this.data.ln);
    }
};
function HCameraElement(data,globalData,comp){
    this.initFrame();
    this.initBaseData(data,globalData,comp);
    this.initHierarchy();
    var getProp = PropertyFactory.getProp;
    this.pe = getProp(this,data.pe,0,0,this);
    if(data.ks.p.s){
        this.px = getProp(this,data.ks.p.x,1,0,this);
        this.py = getProp(this,data.ks.p.y,1,0,this);
        this.pz = getProp(this,data.ks.p.z,1,0,this);
    }else{
        this.p = getProp(this,data.ks.p,1,0,this);
    }
    if(data.ks.a){
        this.a = getProp(this,data.ks.a,1,0,this);
    }
    if(data.ks.or.k.length && data.ks.or.k[0].to){
        var i,len = data.ks.or.k.length;
        for(i=0;i<len;i+=1){
            data.ks.or.k[i].to = null;
            data.ks.or.k[i].ti = null;
        }
    }
    this.or = getProp(this,data.ks.or,1,degToRads,this);
    this.or.sh = true;
    this.rx = getProp(this,data.ks.rx,0,degToRads,this);
    this.ry = getProp(this,data.ks.ry,0,degToRads,this);
    this.rz = getProp(this,data.ks.rz,0,degToRads,this);
    this.mat = new Matrix();
    this._prevMat = new Matrix();
    this._isFirstFrame = true;
    
    // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
    this.finalTransform = {
        mProp: this
    };
}
extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

HCameraElement.prototype.setup = function() {
    var i, len = this.comp.threeDElements.length, comp;
    for(i=0;i<len;i+=1){
        //[perspectiveElem,container]
        comp = this.comp.threeDElements[i];
        if(comp.type === '3d') {
            comp.perspectiveElem.style.perspective = comp.perspectiveElem.style.webkitPerspective = this.pe.v+'px';
            comp.container.style.transformOrigin = comp.container.style.mozTransformOrigin = comp.container.style.webkitTransformOrigin = "0px 0px 0px";
            comp.perspectiveElem.style.transform = comp.perspectiveElem.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
        }
    }
};

HCameraElement.prototype.createElements = function(){
};

HCameraElement.prototype.hide = function(){
};

HCameraElement.prototype.renderFrame = function(){
    var _mdf = this._isFirstFrame;
    var i, len;
    if(this.hierarchy){
        len = this.hierarchy.length;
        for(i=0;i<len;i+=1){
            _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
        }
    }
    if(_mdf || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
        this.mat.reset();

        if(this.hierarchy){
            var mat;
            len = this.hierarchy.length - 1;
            for (i = len; i >= 0; i -= 1) {
                var mTransf = this.hierarchy[i].finalTransform.mProp;
                this.mat.translate(-mTransf.p.v[0],-mTransf.p.v[1],mTransf.p.v[2]);
                this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
                this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
                this.mat.scale(1/mTransf.s.v[0],1/mTransf.s.v[1],1/mTransf.s.v[2]);
                this.mat.translate(mTransf.a.v[0],mTransf.a.v[1],mTransf.a.v[2]);
            }
        }
        if (this.p) {
            this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]);
        } else {
            this.mat.translate(-this.px.v,-this.py.v,this.pz.v);
        }
        if (this.a) {
            var diffVector
            if (this.p) {
                diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
            } else {
                diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            }
            var mag = Math.sqrt(Math.pow(diffVector[0],2)+Math.pow(diffVector[1],2)+Math.pow(diffVector[2],2));
            //var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
            var lookDir = [diffVector[0]/mag,diffVector[1]/mag,diffVector[2]/mag];
            var lookLengthOnXZ = Math.sqrt( lookDir[2]*lookDir[2] + lookDir[0]*lookDir[0] );
            var m_rotationX = (Math.atan2( lookDir[1], lookLengthOnXZ ));
            var m_rotationY = (Math.atan2( lookDir[0], -lookDir[2]));
            this.mat.rotateY(m_rotationY).rotateX(-m_rotationX);

        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
        this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
        this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0);
        this.mat.translate(0,0,this.pe.v);


        

        var hasMatrixChanged = !this._prevMat.equals(this.mat);
        if((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
            len = this.comp.threeDElements.length;
            var comp;
            for(i=0;i<len;i+=1){
                comp = this.comp.threeDElements[i];
                if(comp.type === '3d') {
                    if(hasMatrixChanged) {
                        comp.container.style.transform = comp.container.style.webkitTransform = this.mat.toCSS();
                    }
                    if(this.pe._mdf) {
                        comp.perspectiveElem.style.perspective = comp.perspectiveElem.style.webkitPerspective = this.pe.v+'px';
                    }
                }
            }
            this.mat.clone(this._prevMat);
        }
    }
    this._isFirstFrame = false;
};

HCameraElement.prototype.prepareFrame = function(num) {
    this.prepareProperties(num, true);
};

HCameraElement.prototype.destroy = function(){
};
HCameraElement.prototype.getBaseElement = function(){return null;};
function HEffects() {
}
HEffects.prototype.renderFrame = function(){};
var animationManager = (function(){
    var moduleOb = {};
    var registeredAnimations = [];
    var initTime = 0;
    var len = 0;
    var playingAnimationsNum = 0;
    var _stopped = true;
    var _isFrozen = false;

    function removeElement(ev){
        var i = 0;
        var animItem = ev.target;
        while(i<len) {
            if (registeredAnimations[i].animation === animItem) {
                registeredAnimations.splice(i, 1);
                i -= 1;
                len -= 1;
                if(!animItem.isPaused){
                    subtractPlayingCount();
                }
            }
            i += 1;
        }
    }

    function registerAnimation(element, animationData){
        if(!element){
            return null;
        }
        var i=0;
        while(i<len){
            if(registeredAnimations[i].elem == element && registeredAnimations[i].elem !== null ){
                return registeredAnimations[i].animation;
            }
            i+=1;
        }
        var animItem = new AnimationItem();
        setupAnimation(animItem, element);
        animItem.setData(element, animationData);
        return animItem;
    }

    function getRegisteredAnimations() {
        var i, len = registeredAnimations.length;
        var animations = [];
        for(i = 0; i < len; i += 1) {
            animations.push(registeredAnimations[i].animation);
        }
        return animations;
    }

    function addPlayingCount(){
        playingAnimationsNum += 1;
        activate();
    }

    function subtractPlayingCount(){
        playingAnimationsNum -= 1;
    }

    function setupAnimation(animItem, element){
        animItem.addEventListener('destroy',removeElement);
        animItem.addEventListener('_active',addPlayingCount);
        animItem.addEventListener('_idle',subtractPlayingCount);
        registeredAnimations.push({elem: element,animation:animItem});
        len += 1;
    }

    function loadAnimation(params){
        var animItem = new AnimationItem();
        setupAnimation(animItem, null);
        animItem.setParams(params);
        return animItem;
    }


    function setSpeed(val,animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setSpeed(val, animation);
        }
    }

    function setDirection(val, animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.setDirection(val, animation);
        }
    }

    function play(animation){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.play(animation);
        }
    }
    function resume(nowTime) {
        var elapsedTime = nowTime - initTime;
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.advanceTime(elapsedTime);
        }
        initTime = nowTime;
        if(playingAnimationsNum && !_isFrozen) {
            window.requestAnimationFrame(resume);
        } else {
            _stopped = true;
        }
    }

    function first(nowTime){
        initTime = nowTime;
        window.requestAnimationFrame(resume);
    }

    function pause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.pause(animation);
        }
    }

    function goToAndStop(value,isFrame,animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.goToAndStop(value,isFrame,animation);
        }
    }

    function stop(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.stop(animation);
        }
    }

    function togglePause(animation) {
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.togglePause(animation);
        }
    }

    function destroy(animation) {
        var i;
        for(i=(len-1);i>=0;i-=1){
            registeredAnimations[i].animation.destroy(animation);
        }
    }

    function searchAnimations(animationData, standalone, renderer){
        var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')),
                  [].slice.call(document.getElementsByClassName('bodymovin')));
        var i, len = animElements.length;
        for(i=0;i<len;i+=1){
            if(renderer){
                animElements[i].setAttribute('data-bm-type',renderer);
            }
            registerAnimation(animElements[i], animationData);
        }
        if(standalone && len === 0){
            if(!renderer){
                renderer = 'svg';
            }
            var body = document.getElementsByTagName('body')[0];
            body.innerHTML = '';
            var div = createTag('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.setAttribute('data-bm-type',renderer);
            body.appendChild(div);
            registerAnimation(div, animationData);
        }
    }

    function resize(){
        var i;
        for(i=0;i<len;i+=1){
            registeredAnimations[i].animation.resize();
        }
    }

    function activate(){
        if(!_isFrozen && playingAnimationsNum){
            if(_stopped) {
                window.requestAnimationFrame(first);
                _stopped = false;
            }
        }
    }

    function freeze() {
        _isFrozen = true;
    }

    function unfreeze() {
        _isFrozen = false;
        activate();
    }

    moduleOb.registerAnimation = registerAnimation;
    moduleOb.loadAnimation = loadAnimation;
    moduleOb.setSpeed = setSpeed;
    moduleOb.setDirection = setDirection;
    moduleOb.play = play;
    moduleOb.pause = pause;
    moduleOb.stop = stop;
    moduleOb.togglePause = togglePause;
    moduleOb.searchAnimations = searchAnimations;
    moduleOb.resize = resize;
    //moduleOb.start = start;
    moduleOb.goToAndStop = goToAndStop;
    moduleOb.destroy = destroy;
    moduleOb.freeze = freeze;
    moduleOb.unfreeze = unfreeze;
    moduleOb.getRegisteredAnimations = getRegisteredAnimations;
    return moduleOb;
}());

var AnimationItem = function () {
    this._cbs = [];
    this.name = '';
    this.path = '';
    this.isLoaded = false;
    this.currentFrame = 0;
    this.currentRawFrame = 0;
    this.firstFrame = 0;
    this.totalFrames = 0;
    this.frameRate = 0;
    this.frameMult = 0;
    this.playSpeed = 1;
    this.playDirection = 1;
    this.playCount = 0;
    this.animationData = {};
    this.assets = [];
    this.isPaused = true;
    this.autoplay = false;
    this.loop = true;
    this.renderer = null;
    this.animationID = createElementID();
    this.assetsPath = '';
    this.timeCompleted = 0;
    this.segmentPos = 0;
    this.subframeEnabled = subframeEnabled;
    this.segments = [];
    this._idle = true;
    this._completedLoop = false;
    this.projectInterface = ProjectInterface();
    this.imagePreloader = new ImagePreloader();
};

extendPrototype([BaseEvent], AnimationItem);

AnimationItem.prototype.setParams = function(params) {
    if(params.context){
        this.context = params.context;
    }
    if(params.wrapper || params.container){
        this.wrapper = params.wrapper || params.container;
    }
    var animType = params.animType ? params.animType : params.renderer ? params.renderer : 'svg';
    switch(animType){
        case 'canvas':
            this.renderer = new CanvasRenderer(this, params.rendererSettings);
            break;
        case 'svg':
            this.renderer = new SVGRenderer(this, params.rendererSettings);
            break;
        default:
            this.renderer = new HybridRenderer(this, params.rendererSettings);
            break;
    }
    this.renderer.setProjectInterface(this.projectInterface);
    this.animType = animType;

    if(params.loop === '' || params.loop === null){
    }else if(params.loop === false){
        this.loop = false;
    }else if(params.loop === true){
        this.loop = true;
    }else{
        this.loop = parseInt(params.loop);
    }
    this.autoplay = 'autoplay' in params ? params.autoplay : true;
    this.name = params.name ? params.name :  '';
    this.autoloadSegments = params.hasOwnProperty('autoloadSegments') ? params.autoloadSegments :  true;
    this.assetsPath = params.assetsPath;
    this.initialSegment = params.initialSegment;
    if (params.animationData) {
        this.configAnimation(params.animationData);
    } else if(params.path){

        if( params.path.lastIndexOf('\\') !== -1){
            this.path = params.path.substr(0,params.path.lastIndexOf('\\')+1);
        } else {
            this.path = params.path.substr(0,params.path.lastIndexOf('/')+1);
        }
        this.fileName = params.path.substr(params.path.lastIndexOf('/')+1);
        this.fileName = this.fileName.substr(0,this.fileName.lastIndexOf('.json'));

        assetLoader.load(params.path, this.configAnimation.bind(this), function() {
            this.trigger('data_failed');
        }.bind(this));
    }

};

AnimationItem.prototype.setData = function (wrapper, animationData) {
    var params = {
        wrapper: wrapper,
        animationData: animationData ? (typeof animationData  === "object") ? animationData : JSON.parse(animationData) : null
    };
    var wrapperAttributes = wrapper.attributes;

    params.path = wrapperAttributes.getNamedItem('data-animation-path') ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') ? wrapperAttributes.getNamedItem('data-bm-path').value :  wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
    params.animType = wrapperAttributes.getNamedItem('data-anim-type') ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') ? wrapperAttributes.getNamedItem('bm-type').value :  wrapperAttributes.getNamedItem('data-bm-renderer') ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : 'canvas';

    var loop = wrapperAttributes.getNamedItem('data-anim-loop') ? wrapperAttributes.getNamedItem('data-anim-loop').value :  wrapperAttributes.getNamedItem('data-bm-loop') ? wrapperAttributes.getNamedItem('data-bm-loop').value :  wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';
    if(loop === ''){
    }else if(loop === 'false'){
        params.loop = false;
    }else if(loop === 'true'){
        params.loop = true;
    }else{
        params.loop = parseInt(loop);
    }
    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') ? wrapperAttributes.getNamedItem('data-anim-autoplay').value :  wrapperAttributes.getNamedItem('data-bm-autoplay') ? wrapperAttributes.getNamedItem('data-bm-autoplay').value :  wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
    params.autoplay = autoplay !== "false";

    params.name = wrapperAttributes.getNamedItem('data-name') ? wrapperAttributes.getNamedItem('data-name').value :  wrapperAttributes.getNamedItem('data-bm-name') ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value :  '';
    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') ? wrapperAttributes.getNamedItem('data-anim-prerender').value :  wrapperAttributes.getNamedItem('data-bm-prerender') ? wrapperAttributes.getNamedItem('data-bm-prerender').value :  wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

    if(prerender === 'false'){
        params.prerender = false;
    }
    this.setParams(params);
};

AnimationItem.prototype.includeLayers = function(data) {
    if(data.op > this.animationData.op){
        this.animationData.op = data.op;
        this.totalFrames = Math.floor(data.op - this.animationData.ip);
    }
    var layers = this.animationData.layers;
    var i, len = layers.length;
    var newLayers = data.layers;
    var j, jLen = newLayers.length;
    for(j=0;j<jLen;j+=1){
        i = 0;
        while(i<len){
            if(layers[i].id == newLayers[j].id){
                layers[i] = newLayers[j];
                break;
            }
            i += 1;
        }
    }
    if(data.chars || data.fonts){
        this.renderer.globalData.fontManager.addChars(data.chars);
        this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
    }
    if(data.assets){
        len = data.assets.length;
        for(i = 0; i < len; i += 1){
            this.animationData.assets.push(data.assets[i]);
        }
    }
    this.animationData.__complete = false;
    dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);
    this.renderer.includeLayers(data.layers);
    if(expressionsPlugin){
        expressionsPlugin.initExpressions(this);
    }
    this.loadNextSegment();
};

AnimationItem.prototype.loadNextSegment = function() {
    var segments = this.animationData.segments;
    if(!segments || segments.length === 0 || !this.autoloadSegments){
        this.trigger('data_ready');
        this.timeCompleted = this.totalFrames;
        return;
    }
    var segment = segments.shift();
    this.timeCompleted = segment.time * this.frameRate;
    var segmentPath = this.path+this.fileName+'_' + this.segmentPos + '.json';
    this.segmentPos += 1;
    assetLoader.load(segmentPath, this.includeLayers.bind(this), function() {
        this.trigger('data_failed');
    }.bind(this));
};

AnimationItem.prototype.loadSegments = function() {
    var segments = this.animationData.segments;
    if(!segments) {
        this.timeCompleted = this.totalFrames;
    }
    this.loadNextSegment();
};

AnimationItem.prototype.imagesLoaded = function() {
    this.trigger('loaded_images');
    this.checkLoaded()
}

AnimationItem.prototype.preloadImages = function() {
    this.imagePreloader.setAssetsPath(this.assetsPath);
    this.imagePreloader.setPath(this.path);
    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
}

AnimationItem.prototype.configAnimation = function (animData) {
    if(!this.renderer){
        return;
    }
    try {
        this.animationData = animData;

        if (this.initialSegment) {
            this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
            this.firstFrame = Math.round(this.initialSegment[0]);
        } else {
            this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
            this.firstFrame = Math.round(this.animationData.ip);
        }
        this.renderer.configAnimation(animData);
        if(!animData.assets){
            animData.assets = [];
        }

        this.assets = this.animationData.assets;
        this.frameRate = this.animationData.fr;
        this.frameMult = this.animationData.fr / 1000;
        this.renderer.searchExtraCompositions(animData.assets);
        this.trigger('config_ready');
        this.preloadImages();
        this.loadSegments();
        this.updaFrameModifier();
        this.waitForFontsLoaded();
    } catch(error) {
        this.triggerConfigError(error);
    }
};

AnimationItem.prototype.waitForFontsLoaded = function(){
    if(!this.renderer) {
        return;
    }
    if(this.renderer.globalData.fontManager.loaded()){
        this.checkLoaded();
    }else{
        setTimeout(this.waitForFontsLoaded.bind(this),20);
    }
}

AnimationItem.prototype.checkLoaded = function () {
    if (!this.isLoaded && this.renderer.globalData.fontManager.loaded() && (this.imagePreloader.loaded() || this.renderer.rendererType !== 'canvas')) {
        this.isLoaded = true;
        dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
        if(expressionsPlugin){
            expressionsPlugin.initExpressions(this);
        }
        this.renderer.initItems();
        setTimeout(function() {
            this.trigger('DOMLoaded');
        }.bind(this), 0);
        this.gotoFrame();
        if(this.autoplay){
            this.play();
        }
    }
};

AnimationItem.prototype.resize = function () {
    this.renderer.updateContainerSize();
};

AnimationItem.prototype.setSubframe = function(flag){
    this.subframeEnabled = flag ? true : false;
};

AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;

    if(this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted){
        this.currentFrame = this.timeCompleted;
    }
    this.trigger('enterFrame');
    this.renderFrame();
};

AnimationItem.prototype.renderFrame = function () {
    if(this.isLoaded === false){
        return;
    }
    try {
        this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    } catch(error) {
        this.triggerRenderFrameError(error);
    }
};

AnimationItem.prototype.play = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.isPaused = false;
        if(this._idle){
            this._idle = false;
            this.trigger('_active');
        }
    }
};

AnimationItem.prototype.pause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === false){
        this.isPaused = true;
        this._idle = true;
        this.trigger('_idle');
    }
};

AnimationItem.prototype.togglePause = function (name) {
    if(name && this.name != name){
        return;
    }
    if(this.isPaused === true){
        this.play();
    }else{
        this.pause();
    }
};

AnimationItem.prototype.stop = function (name) {
    if(name && this.name != name){
        return;
    }
    this.pause();
    this.playCount = 0;
    this._completedLoop = false;
    this.setCurrentRawFrameValue(0);
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
    if(name && this.name != name){
        return;
    }
    if(isFrame){
        this.setCurrentRawFrameValue(value);
    }else{
        this.setCurrentRawFrameValue(value * this.frameModifier);
    }
    this.pause();
};

AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
    this.goToAndStop(value, isFrame, name);
    this.play();
};

AnimationItem.prototype.advanceTime = function (value) {
    if (this.isPaused === true || this.isLoaded === false) {
        return;
    }
    var nextValue = this.currentRawFrame + value * this.frameModifier;
    var _isComplete = false;
    // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
    // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
    if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
        if (!this.loop || this.playCount === this.loop) {
            if (!this.checkSegments(nextValue >  this.totalFrames ? nextValue % this.totalFrames : 0)) {
                _isComplete = true;
                nextValue = this.totalFrames - 1;
            }
        } else if (nextValue >= this.totalFrames) {
            this.playCount += 1;
            if (!this.checkSegments(nextValue % this.totalFrames)) {
                this.setCurrentRawFrameValue(nextValue % this.totalFrames);
                this._completedLoop = true;
                this.trigger('loopComplete');
            }
        } else {
            this.setCurrentRawFrameValue(nextValue);
        }
    } else if(nextValue < 0) {
        if (!this.checkSegments(nextValue % this.totalFrames)) {
            if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
                this.setCurrentRawFrameValue(this.totalFrames + (nextValue % this.totalFrames));
                if(!this._completedLoop) {
                    this._completedLoop = true;
                } else {
                    this.trigger('loopComplete');
                }
            } else {
                _isComplete = true;
                nextValue = 0;
            }
        }
    } else {
        this.setCurrentRawFrameValue(nextValue);
    }
    if (_isComplete) {
        this.setCurrentRawFrameValue(nextValue);
        this.pause();
        this.trigger('complete');
    }
};

AnimationItem.prototype.adjustSegment = function(arr, offset){
    this.playCount = 0;
    if(arr[1] < arr[0]){
        if(this.frameModifier > 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(-1);
            }
        }
        this.timeCompleted = this.totalFrames = arr[0] - arr[1];
        this.firstFrame = arr[1];
        this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
    } else if(arr[1] > arr[0]){
        if(this.frameModifier < 0){
            if(this.playSpeed < 0){
                this.setSpeed(-this.playSpeed);
            } else {
                this.setDirection(1);
            }
        }
        this.timeCompleted = this.totalFrames = arr[1] - arr[0];
        this.firstFrame = arr[0];
        this.setCurrentRawFrameValue(0.001 + offset);
    }
    this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init,end) {
    var pendingFrame = -1;
    if(this.isPaused) {
        if (this.currentRawFrame + this.firstFrame < init) {
            pendingFrame = init;
        } else if (this.currentRawFrame + this.firstFrame > end) {
            pendingFrame = end - init;
        }
    }

    this.firstFrame = init;
    this.timeCompleted = this.totalFrames = end - init;
    if(pendingFrame !== -1) {
        this.goToAndStop(pendingFrame,true);
    }
};

AnimationItem.prototype.playSegments = function (arr, forceFlag) {
    if (forceFlag) {
        this.segments.length = 0;
    }
    if (typeof arr[0] === 'object') {
        var i, len = arr.length;
        for (i = 0; i < len; i += 1) {
            this.segments.push(arr[i]);
        }
    } else {
        this.segments.push(arr);
    }
    if (this.segments.length && forceFlag) {
        this.adjustSegment(this.segments.shift(), 0);
    }
    if (this.isPaused) {
        this.play();
    }
};

AnimationItem.prototype.resetSegments = function (forceFlag) {
    this.segments.length = 0;
    this.segments.push([this.animationData.ip,this.animationData.op]);
    //this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
    if (forceFlag) {
        this.checkSegments(0);
    }
};
AnimationItem.prototype.checkSegments = function(offset) {
    if (this.segments.length) {
        this.adjustSegment(this.segments.shift(), offset);
        return true;
    }
    return false;
};

AnimationItem.prototype.destroy = function (name) {
    if ((name && this.name != name) || !this.renderer) {
        return;
    }
    this.renderer.destroy();
    this.imagePreloader.destroy();
    this.trigger('destroy');
    this._cbs = null;
    this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null;
    this.renderer = null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function(value){
    this.currentRawFrame = value;
    this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
    this.playSpeed = val;
    this.updaFrameModifier();
};

AnimationItem.prototype.setDirection = function (val) {
    this.playDirection = val < 0 ? -1 : 1;
    this.updaFrameModifier();
};

AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
};

AnimationItem.prototype.getPath = function () {
    return this.path;
};

AnimationItem.prototype.getAssetsPath = function (assetData) {
    var path = '';
    if(assetData.e) {
        path = assetData.p;
    } else if(this.assetsPath){
        var imagePath = assetData.p;
        if(imagePath.indexOf('images/') !== -1){
            imagePath = imagePath.split('/')[1];
        }
        path = this.assetsPath + imagePath;
    } else {
        path = this.path;
        path += assetData.u ? assetData.u : '';
        path += assetData.p;
    }
    return path;
};

AnimationItem.prototype.getAssetData = function (id) {
    var i = 0, len = this.assets.length;
    while (i < len) {
        if(id == this.assets[i].id){
            return this.assets[i];
        }
        i += 1;
    }
};

AnimationItem.prototype.hide = function () {
    this.renderer.hide();
};

AnimationItem.prototype.show = function () {
    this.renderer.show();
};

AnimationItem.prototype.getDuration = function (isFrame) {
    return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
};

AnimationItem.prototype.trigger = function(name){
    if(this._cbs && this._cbs[name]){
        switch(name){
            case 'enterFrame':
                this.triggerEvent(name,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameModifier));
                break;
            case 'loopComplete':
                this.triggerEvent(name,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
                break;
            case 'complete':
                this.triggerEvent(name,new BMCompleteEvent(name,this.frameMult));
                break;
            case 'segmentStart':
                this.triggerEvent(name,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
                break;
            case 'destroy':
                this.triggerEvent(name,new BMDestroyEvent(name,this));
                break;
            default:
                this.triggerEvent(name);
        }
    }
    if(name === 'enterFrame' && this.onEnterFrame){
        this.onEnterFrame.call(this,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));
    }
    if(name === 'loopComplete' && this.onLoopComplete){
        this.onLoopComplete.call(this,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));
    }
    if(name === 'complete' && this.onComplete){
        this.onComplete.call(this,new BMCompleteEvent(name,this.frameMult));
    }
    if(name === 'segmentStart' && this.onSegmentStart){
        this.onSegmentStart.call(this,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));
    }
    if(name === 'destroy' && this.onDestroy){
        this.onDestroy.call(this,new BMDestroyEvent(name,this));
    }
};

AnimationItem.prototype.triggerRenderFrameError = function(nativeError) {

    var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
        this.onError.call(this, error);
    }
}

AnimationItem.prototype.triggerConfigError = function(nativeError) {

    var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
        this.onError.call(this, error);
    }
}
var Expressions = (function(){
    var ob = {};
    ob.initExpressions = initExpressions;


    function initExpressions(animation){

    	var stackCount = 0;
    	var registers = [];

    	function pushExpression() {
			stackCount += 1;
    	}

    	function popExpression() {
			stackCount -= 1;
			if (stackCount === 0) {
				releaseInstances();
			}
    	}

    	function registerExpressionProperty(expression) {
    		if (registers.indexOf(expression) === -1) {
				registers.push(expression)
    		}
    	}

    	function releaseInstances() {
    		var i, len = registers.length;
    		for (i = 0; i < len; i += 1) {
				registers[i].release();
    		}
    		registers.length = 0;
    	}

        animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
        animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
        animation.renderer.globalData.pushExpression = pushExpression;
        animation.renderer.globalData.popExpression = popExpression;
        animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
    }
   return ob;
}());

expressionsPlugin = Expressions;

var ExpressionManager = (function(){
    'use strict';
    var ob = {};
    var Math = BMMath;
    var window = null;
    var document = null;

    function $bm_isInstanceOfArray(arr) {
        return arr.constructor === Array || arr.constructor === Float32Array;
    }

    function isNumerable(tOfV, v) {
        return tOfV === 'number' || tOfV === 'boolean' || tOfV === 'string' || v instanceof Number;
    }

    function $bm_neg(a){
        var tOfA = typeof a;
        if(tOfA === 'number' || tOfA === 'boolean'  || a instanceof Number ){
            return -a;
        }
        if($bm_isInstanceOfArray(a)){
            var i, lenA = a.length;
            var retArr = [];
            for(i=0;i<lenA;i+=1){
                retArr[i] = -a[i];
            }
            return retArr;
        }
        if (a.propType) {
            return a.v;
        }
    }

    var easeInBez = BezierFactory.getBezierEasing(0.333,0,.833,.833, 'easeIn').get;
    var easeOutBez = BezierFactory.getBezierEasing(0.167,0.167,.667,1, 'easeOut').get;
    var easeInOutBez = BezierFactory.getBezierEasing(.33,0,.667,1, 'easeInOut').get;

    function sum(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if(tOfA === 'string' || tOfB === 'string'){
            return a + b;
        }
        if(isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a + b;
        }
        if($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)){
            a = a.slice(0);
            a[0] = a[0] + b;
            return a;
        }
        if(isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)){
            b = b.slice(0);
            b[0] = a + b[0];
            return b;
        }
        if($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)){
            
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] + b[i];
                }else{
                    retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }
    var add = sum;

    function sub(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        if(isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            if(tOfA === 'string') {
                a = parseInt(a);
            }
            if(tOfB === 'string') {
                b = parseInt(b);
            }
            return a - b;
        }
        if( $bm_isInstanceOfArray(a) && isNumerable(tOfB, b)){
            a = a.slice(0);
            a[0] = a[0] - b;
            return a;
        }
        if(isNumerable(tOfA, a) &&  $bm_isInstanceOfArray(b)){
            b = b.slice(0);
            b[0] = a - b[0];
            return b;
        }
        if($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)){
            var i = 0, lenA = a.length, lenB = b.length;
            var retArr = [];
            while(i<lenA || i < lenB){
                if((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)){
                    retArr[i] = a[i] - b[i];
                }else{
                    retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
                }
                i += 1;
            }
            return retArr;
        }
        return 0;
    }

    function mul(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if(isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a * b;
        }

        var i, len;
        if($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)){
            len = a.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a[i] * b;
            }
            return arr;
        }
        if(isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)){
            len = b.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a * b[i];
            }
            return arr;
        }
        return 0;
    }

    function div(a,b) {
        var tOfA = typeof a;
        var tOfB = typeof b;
        var arr;
        if(isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a / b;
        }
        var i, len;
        if($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)){
            len = a.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a[i] / b;
            }
            return arr;
        }
        if(isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)){
            len = b.length;
            arr = createTypedArray('float32', len);
            for(i=0;i<len;i+=1){
                arr[i] = a / b[i];
            }
            return arr;
        }
        return 0;
    }
    function mod(a,b) {
        if(typeof a === 'string') {
            a = parseInt(a);
        }
        if(typeof b === 'string') {
            b = parseInt(b);
        }
        return a % b;
    }
    var $bm_sum = sum;
    var $bm_sub = sub;
    var $bm_mul = mul;
    var $bm_div = div;
    var $bm_mod = mod;

    function clamp(num, min, max) {
        if(min > max){
            var mm = max;
            max = min;
            min = mm;
        }
        return Math.min(Math.max(num, min), max);
    }

    function radiansToDegrees(val) {
        return val/degToRads;
    }
    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(val) {
        return val*degToRads;
    }
    var degrees_to_radians = radiansToDegrees;

    var helperLengthArray = [0,0,0,0,0,0];

    function length(arr1, arr2) {
        if (typeof arr1 === 'number' || arr1 instanceof Number) {
            arr2 = arr2 || 0;
            return Math.abs(arr1 - arr2);
        }
        if(!arr2) {
            arr2 = helperLengthArray;
        }
        var i, len = Math.min(arr1.length, arr2.length);
        var addedLength = 0;
        for (i = 0; i < len; i += 1) {
            addedLength += Math.pow(arr2[i] - arr1[i], 2);
        }
        return Math.sqrt(addedLength);
    }

    function normalize(vec) {
        return div(vec, length(vec));
    }

    function rgbToHsl(val) {
        var r = val[0]; var g = val[1]; var b = val[2];
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l,val[3]];
    }

    function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    function hslToRgb(val){
        var h = val[0];
        var s = val[1];
        var l = val[2];

        var r, g, b;

        if(s === 0){
            r = g = b = l; // achromatic
        }else{

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [r, g , b, val[3]];
    }

    function linear(t, tMin, tMax, value1, value2){
        if(value1 === undefined || value2 === undefined){
            value1 = tMin;
            value2 = tMax;
            tMin = 0;
            tMax = 1;
        }
        if(tMax < tMin) {
            var _tMin = tMax;
            tMax = tMin;
            tMin = _tMin;
        }
        if(t <= tMin) {
            return value1;
        }else if(t >= tMax){
            return value2;
        }
        var perc = tMax === tMin ? 0 : (t-tMin)/(tMax-tMin);
        if(!value1.length){
            return value1 + (value2-value1)*perc;
        }
        var i, len = value1.length;
        var arr = createTypedArray('float32', len);
        for(i=0;i<len;i+=1){
            arr[i] = value1[i] + (value2[i]-value1[i])*perc;
        }
        return arr;
    }
    function random(min,max){
        if(max === undefined){
            if(min === undefined){
                min = 0;
                max = 1;
            } else {
                max = min;
                min = undefined;
            }
        }
        if(max.length){
            var i, len = max.length;
            if(!min){
                min = createTypedArray('float32', len);
            }
            var arr = createTypedArray('float32', len);
            var rnd = BMMath.random();
            for(i=0;i<len;i+=1){
                arr[i] = min[i] + rnd*(max[i]-min[i]);
            }
            return arr;
        }
        if(min === undefined){
            min = 0;
        }
        var rndm = BMMath.random();
        return min + rndm*(max-min);
    }

    function createPath(points, inTangents, outTangents, closed) {
        var i, len = points.length;
        var path = shape_pool.newElement();
        path.setPathData(!!closed, len);
        var arrPlaceholder = [0,0], inVertexPoint, outVertexPoint;
        for(i = 0; i < len; i += 1) {
            inVertexPoint = (inTangents && inTangents[i]) ? inTangents[i] : arrPlaceholder;
            outVertexPoint = (outTangents && outTangents[i]) ? outTangents[i] : arrPlaceholder;
            path.setTripleAt(points[i][0],points[i][1],outVertexPoint[0] + points[i][0],outVertexPoint[1] + points[i][1],inVertexPoint[0] + points[i][0],inVertexPoint[1] + points[i][1],i,true);
        }
        return path;
    }

    function initiateExpression(elem,data,property){
        var val = data.x;
        var needsVelocity = /velocity(?![\w\d])/.test(val);
        var _needsRandom = val.indexOf('random') !== -1;
        var elemType = elem.data.ty;
        var transform,$bm_transform,content,effect;
        var thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime;
        Object.defineProperty(thisProperty, 'value', {
            get: function() {
                return thisProperty.v
            }
        })
        elem.comp.frameDuration = 1/elem.comp.globalData.frameRate;
        elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip/elem.comp.globalData.frameRate;
        var outPoint = elem.data.op/elem.comp.globalData.frameRate;
        var width = elem.data.sw ? elem.data.sw : 0;
        var height = elem.data.sh ? elem.data.sh : 0;
        var name = elem.data.nm;
        var loopIn, loop_in, loopOut, loop_out, smooth;
        var toWorld,fromWorld,fromComp,toComp,fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp,mask,valueAtTime,velocityAtTime;
        var __expression_functions = [];
        if(data.xf) {
            var i, len = data.xf.length;
            for(i = 0; i < len; i += 1) {
                __expression_functions[i] = eval('(function(){ return ' + data.xf[i] + '}())');
            }
        }

        var scoped_bm_rt;
        var expression_function = eval('[function _expression_function(){' + val+';scoped_bm_rt=$bm_rt}' + ']')[0];
        var numKeys = property.kf ? data.k.length : 0;

        var active = !this.data || this.data.hd !== true;

        var wiggle = function wiggle(freq,amp){
            var i,j, len = this.pv.length ? this.pv.length : 1;
            var addedAmps = createTypedArray('float32', len);
            freq = 5;
            var iterations = Math.floor(time*freq);
            i = 0;
            j = 0;
            while(i<iterations){
                //var rnd = BMMath.random();
                for(j=0;j<len;j+=1){
                    addedAmps[j] += -amp + amp*2*BMMath.random();
                    //addedAmps[j] += -amp + amp*2*rnd;
                }
                i += 1;
            }
            //var rnd2 = BMMath.random();
            var periods = time*freq;
            var perc = periods - Math.floor(periods);
            var arr = createTypedArray('float32', len);
            if(len>1){
                for(j=0;j<len;j+=1){
                    arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*BMMath.random())*perc;
                    //arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
                    //arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
                }
                return arr;
            } else {
                return this.pv + addedAmps[0] + (-amp + amp*2*BMMath.random())*perc;
            }
        }.bind(this);

        if(thisProperty.loopIn) {
            loopIn = thisProperty.loopIn.bind(thisProperty);
            loop_in = loopIn;
        }

        if(thisProperty.loopOut) {
            loopOut = thisProperty.loopOut.bind(thisProperty);
            loop_out = loopOut;
        }

        if(thisProperty.smooth) {
            smooth = thisProperty.smooth.bind(thisProperty);
        }

        function loopInDuration(type,duration){
            return loopIn(type,duration,true);
        }

        function loopOutDuration(type,duration){
            return loopOut(type,duration,true);
        }

        if(this.getValueAtTime) {
            valueAtTime = this.getValueAtTime.bind(this);
        }

        if(this.getVelocityAtTime) {
            velocityAtTime = this.getVelocityAtTime.bind(this);
        }

        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

        function lookAt(elem1,elem2){
            var fVec = [elem2[0]-elem1[0],elem2[1]-elem1[1],elem2[2]-elem1[2]];
            var pitch = Math.atan2(fVec[0],Math.sqrt(fVec[1]*fVec[1]+fVec[2]*fVec[2]))/degToRads;
            var yaw = -Math.atan2(fVec[1],fVec[2])/degToRads;
            return [yaw,pitch,0];
        }

        function easeOut(t, tMin, tMax, val1, val2){
            return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
        }

        function easeIn(t, tMin, tMax, val1, val2){
            return applyEase(easeInBez, t, tMin, tMax, val1, val2);
        }

        function ease(t, tMin, tMax, val1, val2){
            return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
        }

        function applyEase(fn, t, tMin, tMax, val1, val2) {
            if(val1 === undefined){
                val1 = tMin;
                val2 = tMax;
            } else {
                t = (t - tMin) / (tMax - tMin);
            }
            t = t > 1 ? 1 : t < 0 ? 0 : t;
            var mult = fn(t);
            if($bm_isInstanceOfArray(val1)) {
                var i, len = val1.length;
                var arr = createTypedArray('float32', len);
                for (i = 0; i < len; i += 1) {
                    arr[i] = (val2[i] - val1[i]) * mult + val1[i];
                }
                return arr;
            } else {
                return (val2 - val1) * mult + val1;
            }
        }

        function nearestKey(time){
            var i, len = data.k.length,index,keyTime;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                index = 0;
                keyTime = 0;
            } else {
                index = -1;
                time *= elem.comp.globalData.frameRate;
                if (time < data.k[0].t) {
                    index = 1;
                    keyTime = data.k[0].t;
                } else {
                    for(i=0;i<len-1;i+=1){
                        if(time === data.k[i].t){
                            index = i + 1;
                            keyTime = data.k[i].t;
                            break;
                        }else if(time>data.k[i].t && time<data.k[i+1].t){
                            if(time-data.k[i].t > data.k[i+1].t - time){
                                index = i + 2;
                                keyTime = data.k[i+1].t;
                            } else {
                                index = i + 1;
                                keyTime = data.k[i].t;
                            }
                            break;
                        }
                    }
                    if(index === -1){
                        index = i + 1;
                        keyTime = data.k[i].t;
                    }
                }
                
            }
            var ob = {};
            ob.index = index;
            ob.time = keyTime/elem.comp.globalData.frameRate;
            return ob;
        }

        function key(ind){
            var ob, i, len;
            if(!data.k.length || typeof(data.k[0]) === 'number'){
                throw new Error('The property has no keyframe at index ' + ind);
            }
            ind -= 1;
            ob = {
                time: data.k[ind].t/elem.comp.globalData.frameRate,
                value: []
            };
            var arr = data.k[ind].hasOwnProperty('s') ? data.k[ind].s : data.k[ind - 1].e;

            len = arr.length;
            for(i=0;i<len;i+=1){
                ob[i] = arr[i];
                ob.value[i] = arr[i]
            }
            return ob;
        }

        function framesToTime(frames, fps) { 
            if (!fps) {
                fps = elem.comp.globalData.frameRate;
            }
            return frames / fps;
        }

        function timeToFrames(t, fps) {
            if (!t && t !== 0) {
                t = time;
            }
            if (!fps) {
                fps = elem.comp.globalData.frameRate;
            }
            return t * fps;
        }

        function seedRandom(seed){
            BMMath.seedrandom(randSeed + seed);
        }

        function sourceRectAtTime() {
            return elem.sourceRectAtTime();
        }

        function substring(init, end) {
            if(typeof value === 'string') {
                if(end === undefined) {
                return value.substring(init)
                }
                return value.substring(init, end)
            }
            return '';
        }

        function substr(init, end) {
            if(typeof value === 'string') {
                if(end === undefined) {
                return value.substr(init)
                }
                return value.substr(init, end)
            }
            return '';
        }

        function posterizeTime(framesPerSecond) {
            time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond
            value = valueAtTime(time)
        }

        var time, velocity, value, text, textIndex, textTotal, selectorValue;
        var index = elem.data.ind;
        var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
        var parent;
        var randSeed = Math.floor(Math.random()*1000000);
        var globalData = elem.globalData;
        function executeExpression(_value) {
            // globalData.pushExpression();
            value = _value;
            if (_needsRandom) {
                seedRandom(randSeed);
            }
            if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
                return value;
            }
            if(this.propType === 'textSelector'){
                textIndex = this.textIndex;
                textTotal = this.textTotal;
                selectorValue = this.selectorValue;
            }
            if (!thisLayer) {
                text = elem.layerInterface.text;
                thisLayer = elem.layerInterface;
                thisComp = elem.comp.compInterface;
                toWorld = thisLayer.toWorld.bind(thisLayer);
                fromWorld = thisLayer.fromWorld.bind(thisLayer);
                fromComp = thisLayer.fromComp.bind(thisLayer);
                toComp = thisLayer.toComp.bind(thisLayer);
                mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
                fromCompToSurface = fromComp;
            }
            if (!transform) {
                transform = elem.layerInterface("ADBE Transform Group");
                $bm_transform = transform;
                if(transform) {
                    anchorPoint = transform.anchorPoint;
                    /*position = transform.position;
                    rotation = transform.rotation;
                    scale = transform.scale;*/
                }
            }
            
            if (elemType === 4 && !content) {
                content = thisLayer("ADBE Root Vectors Group");
            }
            if (!effect) {
                effect = thisLayer(4);
            }
            hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            if (hasParent && !parent) {
                parent = elem.hierarchy[0].layerInterface;
            }
            time = this.comp.renderedFrame/this.comp.globalData.frameRate;
            if (needsVelocity) {
                velocity = velocityAtTime(time);
            }
            expression_function();
            this.frameExpressionId = elem.globalData.frameId;


            //TODO: Check if it's possible to return on ShapeInterface the .v value
            if (scoped_bm_rt.propType === "shape") {
                scoped_bm_rt = scoped_bm_rt.v;
            }
            // globalData.popExpression();
            return scoped_bm_rt;
        }
        return executeExpression;
    }

    ob.initiateExpression = initiateExpression;
    return ob;
}());
var expressionHelpers = (function(){

    function searchExpressions(elem,data,prop){
        if(data.x){
            prop.k = true;
            prop.x = true;
            prop.initiateExpression = ExpressionManager.initiateExpression;
            prop.effectsSequence.push(prop.initiateExpression(elem,data,prop).bind(prop));
        }
    }

    function getValueAtTime(frameNum) {
        frameNum *= this.elem.globalData.frameRate;
        frameNum -= this.offsetTime;
        if(frameNum !== this._cachingAtTime.lastFrame) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
            this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
            this._cachingAtTime.lastFrame = frameNum;
        }
        return this._cachingAtTime.value;

    }

    function getSpeedAtTime(frameNum) {
        var delta = -0.01;
        var v1 = this.getValueAtTime(frameNum);
        var v2 = this.getValueAtTime(frameNum + delta);
        var speed = 0;
        if(v1.length){
            var i;
            for(i=0;i<v1.length;i+=1){
                speed += Math.pow(v2[i] - v1[i], 2);
            }
            speed = Math.sqrt(speed) * 100;
        } else {
            speed = 0;
        }
        return speed;
    }

    function getVelocityAtTime(frameNum) {
        if(this.vel !== undefined){
            return this.vel;
        }
        var delta = -0.001;
        //frameNum += this.elem.data.st;
        var v1 = this.getValueAtTime(frameNum);
        var v2 = this.getValueAtTime(frameNum + delta);
        var velocity;
        if(v1.length){
            velocity = createTypedArray('float32', v1.length);
            var i;
            for(i=0;i<v1.length;i+=1){
                //removing frameRate
                //if needed, don't add it here
                //velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
                velocity[i] = (v2[i] - v1[i])/delta;
            }
        } else {
            velocity = (v2 - v1)/delta;
        }
        return velocity;
    }

    function getStaticValueAtTime() {
        return this.pv;
    }

    function setGroupProperty(propertyGroup){
        this.propertyGroup = propertyGroup;
    }

	return {
		searchExpressions: searchExpressions,
		getSpeedAtTime: getSpeedAtTime,
		getVelocityAtTime: getVelocityAtTime,
		getValueAtTime: getValueAtTime,
		getStaticValueAtTime: getStaticValueAtTime,
		setGroupProperty: setGroupProperty,
	}
}());
(function addPropertyDecorator() {

    function loopOut(type,duration,durationFlag){
        if(!this.k || !this.keyframes){
            return this.pv;
        }
        type = type ? type.toLowerCase() : '';
        var currentFrame = this.comp.renderedFrame;
        var keyframes = this.keyframes;
        var lastKeyFrame = keyframes[keyframes.length - 1].t;
        if(currentFrame<=lastKeyFrame){
            return this.pv;
        }else{
            var cycleDuration, firstKeyFrame;
            if(!durationFlag){
                if(!duration || duration > keyframes.length - 1){
                    duration = keyframes.length - 1;
                }
                firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
                cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
                if(!duration){
                    cycleDuration = Math.max(0,lastKeyFrame - this.elem.data.ip);
                } else {
                    cycleDuration = Math.abs(lastKeyFrame - elem.comp.globalData.frameRate*duration);
                }
                firstKeyFrame = lastKeyFrame - cycleDuration;
            }
            var i, len, ret;
            if(type === 'pingpong') {
                var iterations = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                if(iterations % 2 !== 0){
                    return this.getValueAtTime(((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
                }
            } else if(type === 'offset'){
                var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                var repeats = Math.floor((currentFrame - firstKeyFrame)/cycleDuration);
                if(this.pv.length){
                    ret = new Array(initV.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = (endV[i]-initV[i])*repeats + current[i];
                    }
                    return ret;
                }
                return (endV-initV)*repeats + current;
            } else if(type === 'continue'){
                var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
                if(this.pv.length){
                    ret = new Array(lastValue.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = lastValue[i] + (lastValue[i]-nextLastValue[i])*((currentFrame - lastKeyFrame)/ this.comp.globalData.frameRate)/0.0005;
                    }
                    return ret;
                }
                return lastValue + (lastValue-nextLastValue)*(((currentFrame - lastKeyFrame))/0.001);
            }
            return this.getValueAtTime((((currentFrame - firstKeyFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
        }
    }

    function loopIn(type,duration, durationFlag) {
        if(!this.k){
            return this.pv;
        }
        type = type ? type.toLowerCase() : '';
        var currentFrame = this.comp.renderedFrame;
        var keyframes = this.keyframes;
        var firstKeyFrame = keyframes[0].t;
        if(currentFrame>=firstKeyFrame){
            return this.pv;
        }else{
            var cycleDuration, lastKeyFrame;
            if(!durationFlag){
                if(!duration || duration > keyframes.length - 1){
                    duration = keyframes.length - 1;
                }
                lastKeyFrame = keyframes[duration].t;
                cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
                if(!duration){
                    cycleDuration = Math.max(0,this.elem.data.op - firstKeyFrame);
                } else {
                    cycleDuration = Math.abs(elem.comp.globalData.frameRate*duration);
                }
                lastKeyFrame = firstKeyFrame + cycleDuration;
            }
            var i, len, ret;
            if(type === 'pingpong') {
                var iterations = Math.floor((firstKeyFrame - currentFrame)/cycleDuration);
                if(iterations % 2 === 0){
                    return this.getValueAtTime((((firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
                }
            } else if(type === 'offset'){
                var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
                var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame)%cycleDuration +  firstKeyFrame) / this.comp.globalData.frameRate, 0);
                var repeats = Math.floor((firstKeyFrame - currentFrame)/cycleDuration)+1;
                if(this.pv.length){
                    ret = new Array(initV.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = current[i]-(endV[i]-initV[i])*repeats;
                    }
                    return ret;
                }
                return current-(endV-initV)*repeats;
            } else if(type === 'continue'){
                var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
                var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
                if(this.pv.length){
                    ret = new Array(firstValue.length);
                    len = ret.length;
                    for(i=0;i<len;i+=1){
                        ret[i] = firstValue[i] + (firstValue[i]-nextFirstValue[i])*(firstKeyFrame - currentFrame)/0.001;
                    }
                    return ret;
                }
                return firstValue + (firstValue-nextFirstValue)*(firstKeyFrame - currentFrame)/0.001;
            }
            return this.getValueAtTime(((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration +  firstKeyFrame)) / this.comp.globalData.frameRate, 0);
        }
    }

    function smooth(width, samples) {
        if (!this.k){
            return this.pv;
        }
        width = (width || 0.4) * 0.5;
        samples = Math.floor(samples || 5);
        if (samples <= 1) {
            return this.pv;
        }
        var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
        var initFrame = currentTime - width;
        var endFrame = currentTime + width;
        var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
        var i = 0, j = 0;
        var value;
        if (this.pv.length) {
            value = createTypedArray('float32', this.pv.length);
        } else {
            value = 0;
        }
        var sampleValue;
        while (i < samples) {
            sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);
            if(this.pv.length) {
                for (j = 0; j < this.pv.length; j += 1) {
                    value[j] += sampleValue[j];
                }
            } else {
                value += sampleValue;
            }
            i += 1;
        }
        if(this.pv.length) {
            for (j = 0; j < this.pv.length; j += 1) {
                value[j] /= samples;
            }
        } else {
            value /= samples;
        }
        return value;
    }

    function getValueAtTime(frameNum) {
        frameNum *= this.elem.globalData.frameRate;
        frameNum -= this.offsetTime;
        if(frameNum !== this._cachingAtTime.lastFrame) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
            this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
            this._cachingAtTime.lastFrame = frameNum;
        }
        return this._cachingAtTime.value;

    }

    function getTransformValueAtTime(time) {
        console.warn('Transform at time not supported');
    }

    function getTransformStaticValueAtTime(time) {

    }

    var getTransformProperty = TransformPropertyFactory.getTransformProperty;
    TransformPropertyFactory.getTransformProperty = function(elem, data, container) {
        var prop = getTransformProperty(elem, data, container);
        if(prop.dynamicProperties.length) {
            prop.getValueAtTime = getTransformValueAtTime.bind(prop);
        } else {
            prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
        }
        prop.setGroupProperty = expressionHelpers.setGroupProperty;
        return prop;
    };

    var propertyGetProp = PropertyFactory.getProp;
    PropertyFactory.getProp = function(elem,data,type, mult, container){
        var prop = propertyGetProp(elem,data,type, mult, container);
        //prop.getVelocityAtTime = getVelocityAtTime;
        //prop.loopOut = loopOut;
        //prop.loopIn = loopIn;
        if(prop.kf){
            prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
        } else {
            prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
        }
        prop.setGroupProperty = expressionHelpers.setGroupProperty;
        prop.loopOut = loopOut;
        prop.loopIn = loopIn;
        prop.smooth = smooth;
        prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
        prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
        prop.numKeys = data.a === 1 ? data.k.length : 0;
        prop.propertyIndex = data.ix;
        var value = 0;
        if(type !== 0) {
            value = createTypedArray('float32', data.a === 1 ?  data.k[0].s.length : data.k.length);
        }
        prop._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: value
        };
        expressionHelpers.searchExpressions(elem,data,prop);
        if(prop.k){
            container.addDynamicProperty(prop);
        }

        return prop;
    };

    function getShapeValueAtTime(frameNum) {
        //For now this caching object is created only when needed instead of creating it when the shape is initialized.
        if (!this._cachingAtTime) {
            this._cachingAtTime = {
                shapeValue: shape_pool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
            };
        }
        
        frameNum *= this.elem.globalData.frameRate;
        frameNum -= this.offsetTime;
        if(frameNum !== this._cachingAtTime.lastTime) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
            this._cachingAtTime.lastTime = frameNum;
            this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
        }
        return this._cachingAtTime.shapeValue;
    }

    var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
    var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

    function ShapeExpressions(){}
    ShapeExpressions.prototype = {
        vertices: function(prop, time){
            if (this.k) {
                this.getValue();
            }
            var shapePath = this.v;
            if(time !== undefined) {
                shapePath = this.getValueAtTime(time, 0);
            }
            var i, len = shapePath._length;
            var vertices = shapePath[prop];
            var points = shapePath.v;
            var arr = createSizedArray(len);
            for(i = 0; i < len; i += 1) {
                if(prop === 'i' || prop === 'o') {
                    arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
                } else {
                    arr[i] = [vertices[i][0], vertices[i][1]];
                }
                
            }
            return arr;
        },
        points: function(time){
            return this.vertices('v', time);
        },
        inTangents: function(time){
            return this.vertices('i', time);
        },
        outTangents: function(time){
            return this.vertices('o', time);
        },
        isClosed: function(){
            return this.v.c;
        },
        pointOnPath: function(perc, time){
            var shapePath = this.v;
            if(time !== undefined) {
                shapePath = this.getValueAtTime(time, 0);
            }
            if(!this._segmentsLength) {
                this._segmentsLength = bez.getSegmentsLength(shapePath);
            }

            var segmentsLength = this._segmentsLength;
            var lengths = segmentsLength.lengths;
            var lengthPos = segmentsLength.totalLength * perc;
            var i = 0, len = lengths.length;
            var j = 0, jLen;
            var accumulatedLength = 0, pt;
            while(i < len) {
                if(accumulatedLength + lengths[i].addedLength > lengthPos) {
                    var initIndex = i;
                    var endIndex = (shapePath.c && i === len - 1) ? 0 : i + 1;
                    var segmentPerc = (lengthPos - accumulatedLength)/lengths[i].addedLength;
                    pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
                    break;
                } else {
                    accumulatedLength += lengths[i].addedLength;
                }
                i += 1;
            }
            if(!pt){
                pt = shapePath.c ? [shapePath.v[0][0],shapePath.v[0][1]]:[shapePath.v[shapePath._length-1][0],shapePath.v[shapePath._length-1][1]];
            }
            return pt;
        },
        vectorOnPath: function(perc, time, vectorType){
            //perc doesn't use triple equality because it can be a Number object as well as a primitive.
            perc = perc == 1 ? this.v.c ? 0 : 0.999 : perc;
            var pt1 = this.pointOnPath(perc, time);
            var pt2 = this.pointOnPath(perc + 0.001, time);
            var xLength = pt2[0] - pt1[0];
            var yLength = pt2[1] - pt1[1];
            var magnitude = Math.sqrt(Math.pow(xLength,2) + Math.pow(yLength,2));
            if (magnitude === 0) {
                return [0,0];
            }
            var unitVector = vectorType === 'tangent' ? [xLength/magnitude, yLength/magnitude] : [-yLength/magnitude, xLength/magnitude];
            return unitVector;
        },
        tangentOnPath: function(perc, time){
            return this.vectorOnPath(perc, time, 'tangent');
        },
        normalOnPath: function(perc, time){
            return this.vectorOnPath(perc, time, 'normal');
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
    };
    extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
    extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
    KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
    KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;

    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
    ShapePropertyFactory.getShapeProp = function(elem,data,type, arr, trims){
        var prop = propertyGetShapeProp(elem,data,type, arr, trims);
        prop.propertyIndex = data.ix;
        prop.lock = false;
        if(type === 3){
            expressionHelpers.searchExpressions(elem,data.pt,prop);
        } else if(type === 4){
            expressionHelpers.searchExpressions(elem,data.ks,prop);
        }
        if(prop.k){
            elem.addDynamicProperty(prop);
        }
        return prop;
    };
}());
(function addDecorator() {

    function searchExpressions(){
        if(this.data.d.x){
            this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this);
            this.addEffect(this.getExpressionValue.bind(this));
            return true;
        }
    }

    TextProperty.prototype.getExpressionValue = function(currentValue, text) {
        var newValue = this.calculateExpression(text);
        if(currentValue.t !== newValue) {
            var newData = {};
            this.copyData(newData, currentValue);
            newData.t = newValue.toString();
            newData.__complete = false;
            return newData;
        }
        return currentValue;
    }

    TextProperty.prototype.searchProperty = function(){

        var isKeyframed = this.searchKeyframes();
        var hasExpressions = this.searchExpressions();
        this.kf = isKeyframed || hasExpressions;
        return this.kf;
    };

    TextProperty.prototype.searchExpressions = searchExpressions;
    
}());
var ShapeExpressionInterface = (function(){

    function iterateElements(shapes,view, propertyGroup){
        var arr = [];
        var i, len = shapes ? shapes.length : 0;
        for(i=0;i<len;i+=1){
            if(shapes[i].ty == 'gr'){
                arr.push(groupInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'fl'){
                arr.push(fillInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'st'){
                arr.push(strokeInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tm'){
                arr.push(trimInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'tr'){
                //arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'el'){
                arr.push(ellipseInterfaceFactory(shapes[i],view[i],propertyGroup));
            }else if(shapes[i].ty == 'sr'){
                arr.push(starInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'sh'){
                arr.push(pathInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rc'){
                arr.push(rectInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rd'){
                arr.push(roundedInterfaceFactory(shapes[i],view[i],propertyGroup));
            } else if(shapes[i].ty == 'rp'){
                arr.push(repeaterInterfaceFactory(shapes[i],view[i],propertyGroup));
            }
        }
        return arr;
    }

    function contentsInterfaceFactory(shape,view, propertyGroup){
       var interfaces;
       var interfaceFunction = function _interfaceFunction(value){
           var i = 0, len = interfaces.length;
            while(i<len){
                if(interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value){
                   return interfaces[i];
                }
                i+=1;
            }
            if(typeof value === 'number'){
               return interfaces[value-1];
            }
       };
       interfaceFunction.propertyGroup = function(val){
           if(val === 1){
               return interfaceFunction;
           } else{
               return propertyGroup(val-1);
           }
       };
       interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
       interfaceFunction.numProperties = interfaces.length;
       interfaceFunction.propertyIndex = shape.cix;
       interfaceFunction._name = shape.nm;

       return interfaceFunction;
   }

    function groupInterfaceFactory(shape,view, propertyGroup){
        var interfaceFunction = function _interfaceFunction(value){
            switch(value){
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                    return interfaceFunction.content;
                //Not necessary for now. Keeping them here in case a new case appears
                //case 'ADBE Vector Transform Group':
                //case 3:
                default:
                    return interfaceFunction.transform;
            }
        };
        interfaceFunction.propertyGroup = function(val){
            if(val === 1){
                return interfaceFunction;
            } else{
                return propertyGroup(val-1);
            }
        };
        var content = contentsInterfaceFactory(shape,view,interfaceFunction.propertyGroup);
        var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1],view.it[view.it.length - 1],interfaceFunction.propertyGroup);
        interfaceFunction.content = content;
        interfaceFunction.transform = transformInterface;
        Object.defineProperty(interfaceFunction, '_name', {
            get: function(){
                return shape.nm;
            }
        });
        //interfaceFunction.content = interfaceFunction;
        interfaceFunction.numProperties = shape.np;
        interfaceFunction.propertyIndex = shape.ix;
        interfaceFunction.nm = shape.nm;
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function fillInterfaceFactory(shape,view,propertyGroup){
        function interfaceFunction(val){
            if(val === 'Color' || val === 'color'){
                return interfaceFunction.color;
            } else if(val === 'Opacity' || val === 'opacity'){
                return interfaceFunction.opacity;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'color': {
                get: ExpressionPropertyInterface(view.c)
            },
            'opacity': {
                get: ExpressionPropertyInterface(view.o)
            },
            '_name': { value: shape.nm },
            'mn': { value: shape.mn }
        });

        view.c.setGroupProperty(propertyGroup);
        view.o.setGroupProperty(propertyGroup);
        return interfaceFunction;
    }

    function strokeInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val === 1){
                return ob;
            } else{
                return propertyGroup(val-1);
            }
        }
        function _dashPropertyGroup(val){
            if(val === 1){
                return dashOb;
            } else{
                return _propertyGroup(val-1);
            }
        }
        function addPropertyToDashOb(i) {
            Object.defineProperty(dashOb, shape.d[i].nm, {
                get: ExpressionPropertyInterface(view.d.dataProps[i].p)
            });
        }
        var i, len = shape.d ? shape.d.length : 0;
        var dashOb = {};
        for (i = 0; i < len; i += 1) {
            addPropertyToDashOb(i);
            view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
        }

        function interfaceFunction(val){
            if(val === 'Color' || val === 'color'){
                return interfaceFunction.color;
            } else if(val === 'Opacity' || val === 'opacity'){
                return interfaceFunction.opacity;
            } else if(val === 'Stroke Width' || val === 'stroke width'){
                return interfaceFunction.strokeWidth;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'color': {
                get: ExpressionPropertyInterface(view.c)
            },
            'opacity': {
                get: ExpressionPropertyInterface(view.o)
            },
            'strokeWidth': {
                get: ExpressionPropertyInterface(view.w)
            },
            'dash': {
                get: function() {
                    return dashOb;
                }
            },
            '_name': { value: shape.nm },
            'mn': { value: shape.mn }
        });

        view.c.setGroupProperty(_propertyGroup);
        view.o.setGroupProperty(_propertyGroup);
        view.w.setGroupProperty(_propertyGroup);
        return interfaceFunction;
    }

    function trimInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        interfaceFunction.propertyIndex = shape.ix;

        view.s.setGroupProperty(_propertyGroup);
        view.e.setGroupProperty(_propertyGroup);
        view.o.setGroupProperty(_propertyGroup);

        function interfaceFunction(val){
            if(val === shape.e.ix || val === 'End' || val === 'end'){
                return interfaceFunction.end;
            }
            if(val === shape.s.ix){
                return interfaceFunction.start;
            }
            if(val === shape.o.ix){
                return interfaceFunction.offset;
            }
        }
        interfaceFunction.propertyIndex = shape.ix;
        interfaceFunction.propertyGroup = propertyGroup;

        Object.defineProperties(interfaceFunction, {
            'start': {
                get: ExpressionPropertyInterface(view.s)
            },
            'end': {
                get: ExpressionPropertyInterface(view.e)
            },
            'offset': {
                get: ExpressionPropertyInterface(view.o)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function transformInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        view.transform.mProps.o.setGroupProperty(_propertyGroup);
        view.transform.mProps.p.setGroupProperty(_propertyGroup);
        view.transform.mProps.a.setGroupProperty(_propertyGroup);
        view.transform.mProps.s.setGroupProperty(_propertyGroup);
        view.transform.mProps.r.setGroupProperty(_propertyGroup);
        if(view.transform.mProps.sk){
            view.transform.mProps.sk.setGroupProperty(_propertyGroup);
            view.transform.mProps.sa.setGroupProperty(_propertyGroup);
        }
        view.transform.op.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.a.ix === value || value === 'Anchor Point'){
                return interfaceFunction.anchorPoint;
            }
            if(shape.o.ix === value || value === 'Opacity'){
                return interfaceFunction.opacity;
            }
            if(shape.p.ix === value || value === 'Position'){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation'){
                return interfaceFunction.rotation;
            }
            if(shape.s.ix === value || value === 'Scale'){
                return interfaceFunction.scale;
            }
            if(shape.sk && shape.sk.ix === value || value === 'Skew'){
                return interfaceFunction.skew;
            }
            if(shape.sa && shape.sa.ix === value || value === 'Skew Axis'){
                return interfaceFunction.skewAxis;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'opacity': {
                get: ExpressionPropertyInterface(view.transform.mProps.o)
            },
            'position': {
                get: ExpressionPropertyInterface(view.transform.mProps.p)
            },
            'anchorPoint': {
                get: ExpressionPropertyInterface(view.transform.mProps.a)
            },
            'scale': {
                get: ExpressionPropertyInterface(view.transform.mProps.s)
            },
            'rotation': {
                get: ExpressionPropertyInterface(view.transform.mProps.r)
            },
            'skew': {
                get: ExpressionPropertyInterface(view.transform.mProps.sk)
            },
            'skewAxis': {
                get: ExpressionPropertyInterface(view.transform.mProps.sa)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.ty = 'tr';
        interfaceFunction.mn = shape.mn;
        interfaceFunction.propertyGroup = propertyGroup;
        return interfaceFunction;
    }

    function ellipseInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        interfaceFunction.propertyIndex = shape.ix;
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        prop.s.setGroupProperty(_propertyGroup);
        prop.p.setGroupProperty(_propertyGroup);
        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.s.ix === value){
                return interfaceFunction.size;
            }
        }

        Object.defineProperties(interfaceFunction, {
            'size': {
                get: ExpressionPropertyInterface(prop.s)
            },
            'position': {
                get: ExpressionPropertyInterface(prop.p)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function starInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        interfaceFunction.propertyIndex = shape.ix;
        prop.or.setGroupProperty(_propertyGroup);
        prop.os.setGroupProperty(_propertyGroup);
        prop.pt.setGroupProperty(_propertyGroup);
        prop.p.setGroupProperty(_propertyGroup);
        prop.r.setGroupProperty(_propertyGroup);
        if(shape.ir){
            prop.ir.setGroupProperty(_propertyGroup);
            prop.is.setGroupProperty(_propertyGroup);
        }

        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value){
                return interfaceFunction.rotation;
            }
            if(shape.pt.ix === value){
                return interfaceFunction.points;
            }
            if(shape.or.ix === value || 'ADBE Vector Star Outer Radius' === value){
                return interfaceFunction.outerRadius;
            }
            if(shape.os.ix === value){
                return interfaceFunction.outerRoundness;
            }
            if(shape.ir && (shape.ir.ix === value || 'ADBE Vector Star Inner Radius' === value)){
                return interfaceFunction.innerRadius;
            }
            if(shape.is && shape.is.ix === value){
                return interfaceFunction.innerRoundness;
            }

        }

        Object.defineProperties(interfaceFunction, {
            'position': {
                get: ExpressionPropertyInterface(prop.p)
            },
            'rotation': {
                get: ExpressionPropertyInterface(prop.r)
            },
            'points': {
                get: ExpressionPropertyInterface(prop.pt)
            },
            'outerRadius': {
                get: ExpressionPropertyInterface(prop.or)
            },
            'outerRoundness': {
                get: ExpressionPropertyInterface(prop.os)
            },
            'innerRadius': {
                get: ExpressionPropertyInterface(prop.ir)
            },
            'innerRoundness': {
                get: ExpressionPropertyInterface(prop.is)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function rectInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
        interfaceFunction.propertyIndex = shape.ix;
        prop.p.setGroupProperty(_propertyGroup);
        prop.s.setGroupProperty(_propertyGroup);
        prop.r.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.p.ix === value){
                return interfaceFunction.position;
            }
            if(shape.r.ix === value){
                return interfaceFunction.roundness;
            }
            if(shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size'){
                return interfaceFunction.size;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'position': {
                get: ExpressionPropertyInterface(prop.p)
            },
            'roundness': {
                get: ExpressionPropertyInterface(prop.r)
            },
            'size': {
                get: ExpressionPropertyInterface(prop.s)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function roundedInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view;
        interfaceFunction.propertyIndex = shape.ix;
        prop.rd.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.r.ix === value || 'Round Corners 1' === value){
                return interfaceFunction.radius;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'radius': {
                get: ExpressionPropertyInterface(prop.rd)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function repeaterInterfaceFactory(shape,view,propertyGroup){
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        var prop = view;
        interfaceFunction.propertyIndex = shape.ix;
        prop.c.setGroupProperty(_propertyGroup);
        prop.o.setGroupProperty(_propertyGroup);

        function interfaceFunction(value){
            if(shape.c.ix === value || 'Copies' === value){
                return interfaceFunction.copies;
            } else if(shape.o.ix === value || 'Offset' === value){
                return interfaceFunction.offset;
            }

        }
        Object.defineProperties(interfaceFunction, {
            'copies': {
                get: ExpressionPropertyInterface(prop.c)
            },
            'offset': {
                get: ExpressionPropertyInterface(prop.o)
            },
            '_name': { value: shape.nm }
        });
        interfaceFunction.mn = shape.mn;
        return interfaceFunction;
    }

    function pathInterfaceFactory(shape,view,propertyGroup){
        var prop = view.sh;
        function _propertyGroup(val){
            if(val == 1){
                return interfaceFunction;
            } else {
                return propertyGroup(--val);
            }
        }
        prop.setGroupProperty(_propertyGroup);

        function interfaceFunction(val){
            if(val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2){
                return interfaceFunction.path;
            }
        }
        Object.defineProperties(interfaceFunction, {
            'path': {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop;
                }
            },
            'shape': {
                get: function(){
                    if(prop.k){
                        prop.getValue();
                    }
                    return prop;
                }
            },
            '_name': { value: shape.nm },
            'ix': { value: shape.ix },
            'propertyIndex': { value: shape.ix },
            'mn': { value: shape.mn }
        });
        return interfaceFunction;
    }

    return function(shapes,view,propertyGroup) {
        var interfaces;
        function _interfaceFunction(value){
            if(typeof value === 'number'){
                return interfaces[value-1];
            } else {
                var i = 0, len = interfaces.length;
                while(i<len){
                    if(interfaces[i]._name === value){
                        return interfaces[i];
                    }
                    i+=1;
                }
            }
        }
        _interfaceFunction.propertyGroup = propertyGroup;
        interfaces = iterateElements(shapes, view, _interfaceFunction);
        _interfaceFunction.numProperties = interfaces.length;
        return _interfaceFunction;
    };
}());

var TextExpressionInterface = (function(){
	return function(elem){
        var _prevValue, _sourceText;
        function _thisLayerFunction(){
        }
        Object.defineProperty(_thisLayerFunction, "sourceText", {
            get: function(){
                elem.textProperty.getValue()
                var stringValue = elem.textProperty.currentData.t;
                if(stringValue !== _prevValue) {
                    elem.textProperty.currentData.t = _prevValue;
                    _sourceText = new String(stringValue);
                    //If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
                    _sourceText.value = stringValue ? stringValue : new String(stringValue);
                }
                return _sourceText;
            }
        });
        return _thisLayerFunction;
    };
}());
var LayerExpressionInterface = (function (){
    function toWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
        }
        return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);
    }
    function fromWorld(arr, time){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        var transformMat;
        if(time) {
            //Todo implement value at time on transform properties
            //transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
            transformMat = this._elem.finalTransform.mProp;
        } else {
            transformMat = this._elem.finalTransform.mProp;
        }
        transformMat.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }
    function fromComp(arr){
        var toWorldMat = new Matrix();
        toWorldMat.reset();
        this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
        if(this._elem.hierarchy && this._elem.hierarchy.length){
            var i, len = this._elem.hierarchy.length;
            for(i=0;i<len;i+=1){
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
        }
        return toWorldMat.inversePoint(arr);
    }

    function sampleImage() {
        return [1,1,1,1];
    }


    return function(elem){

        var transformInterface;

        function _registerMaskInterface(maskManager){
            _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
        }
        function _registerEffectsInterface(effects){
            _thisLayerFunction.effect = effects;
        }

        function _thisLayerFunction(name){
            switch(name){
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                    return _thisLayerFunction.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                    return transformInterface;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                    return _thisLayerFunction.effect;
            }
        }
        _thisLayerFunction.toWorld = toWorld;
        _thisLayerFunction.fromWorld = fromWorld;
        _thisLayerFunction.toComp = toWorld;
        _thisLayerFunction.fromComp = fromComp;
        _thisLayerFunction.sampleImage = sampleImage;
        _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
        _thisLayerFunction._elem = elem;
        transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
        var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
        Object.defineProperties(_thisLayerFunction,{
            hasParent: {
                get: function(){
                    return elem.hierarchy.length;
                }
            },
            parent: {
                get: function(){
                    return elem.hierarchy[0].layerInterface;
                }
            },
            rotation: getDescriptor(transformInterface, 'rotation'),
            scale: getDescriptor(transformInterface, 'scale'),
            position: getDescriptor(transformInterface, 'position'),
            opacity: getDescriptor(transformInterface, 'opacity'),
            anchorPoint: anchorPointDescriptor,
            anchor_point: anchorPointDescriptor,
            transform: {
                get: function () {
                    return transformInterface;
                }
            },
            active: {
                get: function(){
                    return elem.isInRange;
                }
            }
        });

        _thisLayerFunction.startTime = elem.data.st;
        _thisLayerFunction.index = elem.data.ind;
        _thisLayerFunction.source = elem.data.refId;
        _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
        _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
        _thisLayerFunction.inPoint = elem.data.ip/elem.comp.globalData.frameRate;
        _thisLayerFunction.outPoint = elem.data.op/elem.comp.globalData.frameRate;
        _thisLayerFunction._name = elem.data.nm;

        _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
        _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
        return _thisLayerFunction;
    };
}());

var CompExpressionInterface = (function () {
    return function(comp) {
        function _thisLayerFunction(name) {
            var i = 0, len = comp.layers.length;
            while ( i < len) {
                if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
                    return comp.elements[i].layerInterface;
                }
                i += 1;
            }
            return null;
            //return {active:false};
        }
        Object.defineProperty(_thisLayerFunction, "_name", { value: comp.data.nm });
        _thisLayerFunction.layer = _thisLayerFunction;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
        _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
        _thisLayerFunction.pixelAspect = 1;
        _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
        _thisLayerFunction.displayStartTime = 0;
        _thisLayerFunction.numLayers = comp.layers.length;
        return _thisLayerFunction;
    };
}());
var TransformExpressionInterface = (function (){
    return function(transform){
        function _thisFunction(name){
            switch(name){
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                    return _thisFunction.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                    return _thisFunction.rotation;
                case "ADBE Rotate X":
                    return _thisFunction.xRotation;
                case "ADBE Rotate Y":
                    return _thisFunction.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                    return _thisFunction.position;
                case 'ADBE Position_0':
                    return _thisFunction.xPosition;
                case 'ADBE Position_1':
                    return _thisFunction.yPosition;
                case 'ADBE Position_2':
                    return _thisFunction.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                    return _thisFunction.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                    return _thisFunction.opacity;
            }
        }

        Object.defineProperty(_thisFunction, "rotation", {
            get: ExpressionPropertyInterface(transform.r || transform.rz)
        });

        Object.defineProperty(_thisFunction, "zRotation", {
            get: ExpressionPropertyInterface(transform.rz || transform.r)
        });

        Object.defineProperty(_thisFunction, "xRotation", {
            get: ExpressionPropertyInterface(transform.rx)
        });

        Object.defineProperty(_thisFunction, "yRotation", {
            get: ExpressionPropertyInterface(transform.ry)
        });
        Object.defineProperty(_thisFunction, "scale", {
            get: ExpressionPropertyInterface(transform.s)
        });

        if(transform.p) {
            var _transformFactory = ExpressionPropertyInterface(transform.p);
        }
        Object.defineProperty(_thisFunction, "position", {
            get: function () {
                if(transform.p) {
                    return _transformFactory();
                } else {
                    return [transform.px.v, transform.py.v, transform.pz ? transform.pz.v : 0];
                }
            }
        });

        Object.defineProperty(_thisFunction, "xPosition", {
            get: ExpressionPropertyInterface(transform.px)
        });

        Object.defineProperty(_thisFunction, "yPosition", {
            get: ExpressionPropertyInterface(transform.py)
        });

        Object.defineProperty(_thisFunction, "zPosition", {
            get: ExpressionPropertyInterface(transform.pz)
        });

        Object.defineProperty(_thisFunction, "anchorPoint", {
            get: ExpressionPropertyInterface(transform.a)
        });

        Object.defineProperty(_thisFunction, "opacity", {
            get: ExpressionPropertyInterface(transform.o)
        });

        Object.defineProperty(_thisFunction, "skew", {
            get: ExpressionPropertyInterface(transform.sk)
        });

        Object.defineProperty(_thisFunction, "skewAxis", {
            get: ExpressionPropertyInterface(transform.sa)
        });

        Object.defineProperty(_thisFunction, "orientation", {
            get: ExpressionPropertyInterface(transform.or)
        });

        return _thisFunction;
    };
}());
var ProjectInterface = (function (){

    function registerComposition(comp){
        this.compositions.push(comp);
    }

    return function(){
        function _thisProjectFunction(name){
            var i = 0, len = this.compositions.length;
            while(i<len){
                if(this.compositions[i].data && this.compositions[i].data.nm === name){
                    if(this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
                        this.compositions[i].prepareFrame(this.currentFrame);
                    }
                    return this.compositions[i].compInterface;
                }
                i+=1;
            }
        }

        _thisProjectFunction.compositions = [];
        _thisProjectFunction.currentFrame = 0;

        _thisProjectFunction.registerComposition = registerComposition;



        return _thisProjectFunction;
    };
}());
var EffectsExpressionInterface = (function (){
    var ob = {
        createEffectsInterface: createEffectsInterface
    };

    function createEffectsInterface(elem, propertyGroup){
        if(elem.effectsManager){

            var effectElements = [];
            var effectsData = elem.data.ef;
            var i, len = elem.effectsManager.effectElements.length;
            for(i=0;i<len;i+=1){
                effectElements.push(createGroupInterface(effectsData[i],elem.effectsManager.effectElements[i],propertyGroup,elem));
            }

            return function(name){
                var effects = elem.data.ef || [], i = 0, len = effects.length;
                while(i<len) {
                    if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                        return effectElements[i];
                    }
                    i += 1;
                }
            };
        }
    }

    function createGroupInterface(data,elements, propertyGroup, elem){
        var effectElements = [];
        var i, len = data.ef.length;
        for(i=0;i<len;i+=1){
            if(data.ef[i].ty === 5){
                effectElements.push(createGroupInterface(data.ef[i],elements.effectElements[i],elements.effectElements[i].propertyGroup, elem));
            } else {
                effectElements.push(createValueInterface(elements.effectElements[i],data.ef[i].ty, elem, _propertyGroup));
            }
        }

        function _propertyGroup(val) {
            if(val === 1){
               return groupInterface;
            } else{
               return propertyGroup(val-1);
            }
        }

        var groupInterface = function(name){
            var effects = data.ef, i = 0, len = effects.length;
            while(i<len) {
                if(name === effects[i].nm || name === effects[i].mn || name === effects[i].ix){
                    if(effects[i].ty === 5){
                        return effectElements[i];
                    } else {
                        return effectElements[i]();
                    }
                }
                i += 1;
            }
            return effectElements[0]();
        };

        groupInterface.propertyGroup = _propertyGroup;

        if(data.mn === 'ADBE Color Control'){
            Object.defineProperty(groupInterface, 'color', {
                get: function(){
                    return effectElements[0]();
                }
            });
        }
        Object.defineProperty(groupInterface, 'numProperties', {
            get: function(){
                return data.np;
            }
        });
        groupInterface.active = groupInterface.enabled = data.en !== 0;
        return groupInterface;
    }

    function createValueInterface(element, type, elem, propertyGroup){
        var expressionProperty = ExpressionPropertyInterface(element.p);
        function interfaceFunction(){
            if(type === 10){
                return elem.comp.compInterface(element.p.v);
            }
            return expressionProperty();
        }

        if(element.p.setGroupProperty) {
            element.p.setGroupProperty(propertyGroup);
        }

        return interfaceFunction;
    }

    return ob;

}());
var MaskManagerInterface = (function(){

	function MaskInterface(mask, data){
		this._mask = mask;
		this._data = data;
	}
	Object.defineProperty(MaskInterface.prototype, 'maskPath', {
        get: function(){
            if(this._mask.prop.k){
                this._mask.prop.getValue();
            }
            return this._mask.prop;
        }
    });
	Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
        get: function(){
            if(this._mask.op.k){
                this._mask.op.getValue();
            }
            return this._mask.op.v * 100;
        }
    });

	var MaskManager = function(maskManager, elem){
		var _maskManager = maskManager;
		var _elem = elem;
		var _masksInterfaces = createSizedArray(maskManager.viewData.length);
		var i, len = maskManager.viewData.length;
		for(i = 0; i < len; i += 1) {
			_masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
		}

		var maskFunction = function(name){
			i = 0;
		    while(i<len){
		        if(maskManager.masksProperties[i].nm === name){
		            return _masksInterfaces[i];
		        }
		        i += 1;
		    }
		};
		return maskFunction;
	};
	return MaskManager;
}());

var ExpressionPropertyInterface = (function() {

    var defaultUnidimensionalValue = {pv:0, v:0, mult: 1}
    var defaultMultidimensionalValue = {pv:[0,0,0], v:[0,0,0], mult: 1}

    function completeProperty(expressionValue, property, type) {
        Object.defineProperty(expressionValue, 'velocity', {
            get: function(){
                return property.getVelocityAtTime(property.comp.currentFrame);
            }
        });
        expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;
        expressionValue.key = function(pos) {
            if (!expressionValue.numKeys) {
                return 0;
            } else {
                var value = '';
                if ('s' in property.keyframes[pos-1]) {
                    value = property.keyframes[pos-1].s;
                } else if ('e' in property.keyframes[pos-2]) {
                    value = property.keyframes[pos-2].e;
                } else {
                    value = property.keyframes[pos-2].s;
                }
                var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value);
                valueProp.time = property.keyframes[pos-1].t / property.elem.comp.globalData.frameRate;
                return valueProp;
            }
        };
        expressionValue.valueAtTime = property.getValueAtTime;
        expressionValue.speedAtTime = property.getSpeedAtTime;
        expressionValue.velocityAtTime = property.getVelocityAtTime;
        expressionValue.propertyGroup = property.propertyGroup;
    }

    function UnidimensionalPropertyInterface(property) {
        if(!property || !('pv' in property)) {
            property = defaultUnidimensionalValue;
        }
        var mult = 1 / property.mult;
        var val = property.pv * mult;
        var expressionValue = new Number(val);
        expressionValue.value = val;
        completeProperty(expressionValue, property, 'unidimensional');

        return function() {
            if (property.k) {
                property.getValue();
            }
            val = property.v * mult;
            if(expressionValue.value !== val) {
                expressionValue = new Number(val);
                expressionValue.value = val;
                completeProperty(expressionValue, property, 'unidimensional');
            }
            return expressionValue;
        }
    }

    function MultidimensionalPropertyInterface(property) {
        if(!property || !('pv' in property)) {
            property = defaultMultidimensionalValue;
        }
        var mult = 1 / property.mult;
        var len = property.pv.length;
        var expressionValue = createTypedArray('float32', len);
        var arrValue = createTypedArray('float32', len);
        expressionValue.value = arrValue;
        completeProperty(expressionValue, property, 'multidimensional');

        return function() {
            if (property.k) {
                property.getValue();
            }
            for (var i = 0; i < len; i += 1) {
                expressionValue[i] = arrValue[i] = property.v[i] * mult;
            }
            return expressionValue;
        }
    }

    //TODO: try to avoid using this getter
    function defaultGetter() {
        return defaultUnidimensionalValue;
    }
    
    return function(property) {
        if(!property) {
            return defaultGetter;
        } else if (property.propType === 'unidimensional') {
            return UnidimensionalPropertyInterface(property);
        } else {
            return MultidimensionalPropertyInterface(property);
        }
    }
}());

(function(){

    var TextExpressionSelectorProp = (function(){

        function getValueProxy(index,total){
            this.textIndex = index+1;
            this.textTotal = total;
            this.v = this.getValue() * this.mult;
            return this.v;
        }

        return function TextExpressionSelectorProp(elem,data){
            this.pv = 1;
            this.comp = elem.comp;
            this.elem = elem;
            this.mult = 0.01;
            this.propType = 'textSelector';
            this.textTotal = data.totalChars;
            this.selectorValue = 100;
            this.lastValue = [1,1,1];
            this.k = true;
            this.x = true;
            this.getValue = ExpressionManager.initiateExpression.bind(this)(elem,data,this);
            this.getMult = getValueProxy;
            this.getVelocityAtTime = expressionHelpers.getVelocityAtTime;
            if(this.kf){
                this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this);
            } else {
                this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this);
            }
            this.setGroupProperty = expressionHelpers.setGroupProperty;
        };
    }());

	var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
	TextSelectorProp.getTextSelectorProp = function(elem, data,arr){
	    if(data.t === 1){
	        return new TextExpressionSelectorProp(elem, data,arr);
	    } else {
	        return propertyGetTextProp(elem,data,arr);
	    }
	};
}());
function SliderEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,container);
}
function AngleEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,container);
}
function ColorEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,container);
}
function PointEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,1,0,container);
}
function LayerIndexEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,container);
}
function MaskIndexEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,container);
}
function CheckboxEffect(data,elem, container){
    this.p = PropertyFactory.getProp(elem,data.v,0,0,container);
}
function NoValueEffect(){
    this.p = {};
}
function EffectsManager(){}
function EffectsManager(data,element){
    var effects = data.ef || [];
    this.effectElements = [];
    var i,len = effects.length;
    var effectItem;
    for(i=0;i<len;i++) {
        effectItem = new GroupEffect(effects[i],element);
        this.effectElements.push(effectItem);
    }
}

function GroupEffect(data,element){
    this.init(data,element);
}

extendPrototype([DynamicPropertyContainer], GroupEffect);

GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

GroupEffect.prototype.init = function(data,element){
    this.data = data;
    this.effectElements = [];
    this.initDynamicPropertyContainer(element);
    var i, len = this.data.ef.length;
    var eff, effects = this.data.ef;
    for(i=0;i<len;i+=1){
        eff = null;
        switch(effects[i].ty){
            case 0:
                eff = new SliderEffect(effects[i],element,this);
                break;
            case 1:
                eff = new AngleEffect(effects[i],element,this);
                break;
            case 2:
                eff = new ColorEffect(effects[i],element,this);
                break;
            case 3:
                eff = new PointEffect(effects[i],element,this);
                break;
            case 4:
            case 7:
                eff = new CheckboxEffect(effects[i],element,this);
                break;
            case 10:
                eff = new LayerIndexEffect(effects[i],element,this);
                break;
            case 11:
                eff = new MaskIndexEffect(effects[i],element,this);
                break;
            case 5:
                eff = new EffectsManager(effects[i],element,this);
                break;
            //case 6:
            default:
                eff = new NoValueEffect(effects[i],element,this);
                break;
        }
        if(eff) {
            this.effectElements.push(eff);
        }
    }
};

var lottie = {};

var _isFrozen = false;

function setLocationHref (href) {
    locationHref = href;
}

function searchAnimations() {
    if (standalone === true) {
        animationManager.searchAnimations(animationData, standalone, renderer);
    } else {
        animationManager.searchAnimations();
    }
}

function setSubframeRendering(flag) {
    subframeEnabled = flag;
}

function loadAnimation(params) {
    if (standalone === true) {
        params.animationData = JSON.parse(animationData);
    }
    return animationManager.loadAnimation(params);
}

function setQuality(value) {
    if (typeof value === 'string') {
        switch (value) {
            case 'high':
                defaultCurveSegments = 200;
                break;
            case 'medium':
                defaultCurveSegments = 50;
                break;
            case 'low':
                defaultCurveSegments = 10;
                break;
        }
    } else if (!isNaN(value) && value > 1) {
        defaultCurveSegments = value;
    }
    if (defaultCurveSegments >= 50) {
        roundValues(false);
    } else {
        roundValues(true);
    }
}

function inBrowser() {
    return typeof navigator !== 'undefined';
}

function installPlugin(type, plugin) {
    if (type === 'expressions') {
        expressionsPlugin = plugin;
    }
}

function getFactory(name) {
    switch (name) {
        case "propertyFactory":
            return PropertyFactory;
        case "shapePropertyFactory":
            return ShapePropertyFactory;
        case "matrix":
            return Matrix;
    }
}

lottie.play = animationManager.play;
lottie.pause = animationManager.pause;
lottie.setLocationHref = setLocationHref;
lottie.togglePause = animationManager.togglePause;
lottie.setSpeed = animationManager.setSpeed;
lottie.setDirection = animationManager.setDirection;
lottie.stop = animationManager.stop;
lottie.searchAnimations = searchAnimations;
lottie.registerAnimation = animationManager.registerAnimation;
lottie.loadAnimation = loadAnimation;
lottie.setSubframeRendering = setSubframeRendering;
lottie.resize = animationManager.resize;
//lottie.start = start;
lottie.goToAndStop = animationManager.goToAndStop;
lottie.destroy = animationManager.destroy;
lottie.setQuality = setQuality;
lottie.inBrowser = inBrowser;
lottie.installPlugin = installPlugin;
lottie.freeze = animationManager.freeze;
lottie.unfreeze = animationManager.unfreeze;
lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
lottie.__getFactory = getFactory;
lottie.version = '5.6.8';

function checkReady() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        searchAnimations();
    }
}

function getQueryVariable(variable) {
    var vars = queryString.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
var standalone = '__[STANDALONE]__';
var animationData = '__[ANIMATIONDATA]__';
var renderer = '';
if (standalone) {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index] || {
        src: ''
    };
    var queryString = myScript.src.replace(/^[^\?]+\??/, '');
    renderer = getQueryVariable('renderer');
}
var readyStateCheckInterval = setInterval(checkReady, 100);

return lottie;
}));

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FVolumes%2FSamsung_T5%2FNihonGOJS%2FNext.js%2Fbootcamp-landing%2Fpages%2Findex.js&hotRouterUpdates=true!./":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FVolumes%2FSamsung_T5%2FNihonGOJS%2FNext.js%2Fbootcamp-landing%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
        if (true) {
          module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function () {
            if (!next.router.components["/"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
            next.router.update("/", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: pathname,
          query: query
        }), as);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  }, namedParameterizedRoute ? {
    namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.0";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.0";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/input */ "./components/input.js");
/* harmony import */ var _static_rocket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static/rocket.json */ "./pages/static/rocket.json");
var _static_rocket_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/rocket.json */ "./pages/static/rocket.json", 1);
/* harmony import */ var _static_logoJS_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/logoJS.png */ "./pages/static/logoJS.png");
/* harmony import */ var _static_logoJS_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_logoJS_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_logoReact_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/logoReact.png */ "./pages/static/logoReact.png");
/* harmony import */ var _static_logoReact_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_logoReact_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./static/logoRedux.png */ "./pages/static/logoRedux.png");
/* harmony import */ var _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_logoRedux_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_logoNode_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static/logoNode.png */ "./pages/static/logoNode.png");
/* harmony import */ var _static_logoNode_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_logoNode_png__WEBPACK_IMPORTED_MODULE_11__);
var _this = undefined,
    _jsxFileName = "/Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "mytn3e-0"
})(["flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;display:flex;"]);
var SubContainer1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__SubContainer1",
  componentId: "mytn3e-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var SubContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__SubContainer2",
  componentId: "mytn3e-2"
})(["margin-top:111px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "mytn3e-3"
})(["margin:10px;font-size:38px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Mission = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "pages__Mission",
  componentId: "mytn3e-4"
})(["margin:10px;margin-top:0px;font-size:44px;text-align:center;font-weight:bold;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text;
});
var Explanation = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__Explanation",
  componentId: "mytn3e-5"
})(["font-size:21px;margin:15px;margin-left:44px;margin-right:44px;text-align:center;margin-top:-10px;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});
var Subtext = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__Subtext",
  componentId: "mytn3e-6"
})(["font-size:15px;font-weight:500;margin:15px;text-align:center;margin-top:-10px;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text;
});
var Modal = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__Modal",
  componentId: "mytn3e-7"
})(["font-size:17px;font-weight:400;margin-top:25px;background-color:", ";color:", ";padding:15px;text-align:center;border-radius:7px;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.success;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.background;
});
var Formulary = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Formulary",
  componentId: "mytn3e-8"
})(["padding:25px 0px;border-radius:12px;justify-content:center;align-items:center;flex-direction:row;display:flex;flex-wrap:wrap;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Action",
  componentId: "mytn3e-9"
})(["margin-top:20px;padding:15px;width:60%;height:auto;min-width:150px;border-radius:12px;background-color:rgba(255,255,255,0.1);align-items:center;justify-content:center;display:flex;"]);
var TechContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__TechContainer",
  componentId: "mytn3e-10"
})(["margin:20px;max-width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);flex-direction:row;align-items:center;justify-content:center;display:flex;flex-wrap:wrap;"]);
var Tech = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "pages__Tech",
  componentId: "mytn3e-11"
})(["margin:30px 30px;width:30%;height:30%;max-height:250px;max-width:250px;min-height:75px;min-width:75px;border-radius:12px;flex-direction:column;align-items:stretch;justify-content:center;display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "mytn3e-12"
})(["font-size:20px;margin-top:20px;font-weight:500;min-height:44px;height:auto;width:80%;background-color:", ";color:", ";border-radius:7px;justify-content:center;align-item:flex-end;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.button;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.text;
}); // const Background = styled.div`
//   background-color: ${({ theme }) => theme.colors.background};
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   box-sizing: border-box;
//   /* text-rendering: optimizeLegibility !important; */
//   -webkit-font-smoothing: antialiased !important;
//   font-family: sans-serif;
// `;

var animObj = null;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modal = _useState[0],
      setModal = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var animBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function handleSubmit(data) {
    console.log(data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(" component did mount ");
    animObj = lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.loadAnimation({
      container: animBox.current,
      // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: _static_rocket_json__WEBPACK_IMPORTED_MODULE_7__ // the path to the animation json

    });
  }, []);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setModal(true);
    setTimeout(function () {
      setModal(false);
    }, 3000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, "Nihon Go Javascript Bootcamp"), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "body { background-color: #402b52  }")), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(SubContainer1, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      width: 250,
      marginTop: 15,
      margin: "0 auto"
    },
    ref: animBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }), __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, "NihonGoJS"), __jsx(Mission, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7"), __jsx(Explanation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, "JavaScript\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u5B66\u3093\u3067\u6B21\u306E\u30EC\u30D9\u30EB\u3078\u884C\u3053\u3046\u3002"), __jsx(Action, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx("form", {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.unfreeze();
      animObj.play();
      animObj.setSpeed(3);
    },
    onMouseLeave: function onMouseLeave() {
      animObj.setSpeed(1);
    },
    action: "https://api.staticforms.xyz/submit",
    method: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, __jsx(Formulary, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    name: "name",
    placeholder: "\u540D\u524D",
    label: "\u540D\u524D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }), __jsx(_components_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    name: "email",
    placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "text",
    name: "honeypot",
    style: {
      display: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "accessKey",
    value: "44974bd2-2586-4850-bbe2-25e6ceb3a59b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "replyTo",
    value: "@",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "subject",
    value: "Contact received from - https://bootcamp.nihongojs.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "replyTo",
    value: "@",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }), __jsx(Button, {
    type: "submit",
    value: "Submit",
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, "\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7\u306E\u6B21\u306E\u30B9\u30C6\u30FC\u30B8\u306B\u3002")), __jsx(Subtext, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }, "\u6642\u9593\u3092\u7121\u99C4\u306B\u3057\u306A\u3044\u541B\u306B\u4F5C\u3089\u308C\u305F\u65B0\u6280\u8853\u306E\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3002"), modal && __jsx(Modal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, "\u767B\u9332\u3057\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002")))), __jsx(SubContainer2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx(TechContainer, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_5___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, __jsx(Tech, {
    src: _static_logoJS_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoReact_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoNode_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  })))));
});

/***/ }),

/***/ "./pages/static/logoJS.png":
/*!*********************************!*\
  !*** ./pages/static/logoJS.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoJS-924ff3bee57ad2c8f28103d60cc5dcef.png";

/***/ }),

/***/ "./pages/static/logoNode.png":
/*!***********************************!*\
  !*** ./pages/static/logoNode.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoNode-00550d3aec78c2cbc6a5e17f3346c364.png";

/***/ }),

/***/ "./pages/static/logoReact.png":
/*!************************************!*\
  !*** ./pages/static/logoReact.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoReact-fd58725ced7c66f149d75e36a3b58ad7.png";

/***/ }),

/***/ "./pages/static/logoRedux.png":
/*!************************************!*\
  !*** ./pages/static/logoRedux.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoRedux-f66132fc2e411ee69d07e520ae8c5594.png";

/***/ }),

/***/ "./pages/static/rocket.json":
/*!**********************************!*\
  !*** ./pages/static/rocket.json ***!
  \**********************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.6.5\",\"fr\":29.9700012207031,\"ip\":0,\"op\":208.000008472014,\"w\":1920,\"h\":1080,\"nm\":\"Nitro\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"Null 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.276,\"y\":1},\"o\":{\"x\":1,\"y\":0},\"t\":55.5,\"s\":[185,333.5,0],\"to\":[0,251.167,0],\"ti\":[0,-716.667,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":103.5,\"s\":[177,912.5,0],\"to\":[0,716.667,0],\"ti\":[0,-465.5,0]},{\"t\":347.0000141336,\"s\":[185,2841.5,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[114,78,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":-180,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-3469.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-3049.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":-180,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-2637.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-2217.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-1797.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":-180,\"ix\":10},\"p\":{\"a\":0,\"k\":[4.494,-1398.218,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":180,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-957.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":0,\"nm\":\"stars\",\"parent\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":70,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,-537.965,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,209,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":418,\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 15\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[46.5,326,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,17],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 14\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[319.5,352,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,35],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 13\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[244.5,152,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,37],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[151.5,109,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,22],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shape Layer 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[291.5,200,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,22],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shape Layer 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[326.5,70,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,22],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Shape Layer 9\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[87.5,227,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,39],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Shape Layer 8\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[36.5,172,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,22],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Shape Layer 7\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[57.5,109,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-91,-238,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[5,22],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":20,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-91,-238],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0}]},{\"id\":\"comp_2\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Слой 1 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[52.991,46.009,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[23.351,34.989,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.449,0],[0,3.449],[-3.449,0],[0,-3.449]],\"o\":[[-3.449,0],[0,-3.449],[3.449,0],[0,3.449]],\"v\":[[0.042,-1.229],[-6.196,-7.466],[0.042,-13.704],[6.279,-7.466]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[7.249,4.544],[0.217,-0.135],[0,-14.065],[-0.393,-2.231],[1.043,-2.654],[-2.148,-2.995],[-0.547,0.672],[0,0],[-0.495,-0.393],[-0.619,0],[0,0],[-0.476,0.392],[-0.805,0.784],[0,0],[-0.505,0.712],[2.933,7.498],[2.343,1.972],[0,2.747]],\"o\":[[-0.217,-0.135],[-6.991,4.244],[0,2.747],[-2.365,1.973],[-2.923,7.508],[0.505,0.712],[0,0],[0.816,0.795],[0.476,0.392],[0,0],[0.619,0],[0.495,-0.393],[0,0],[0.547,0.672],[2.159,-2.985],[-1.043,-2.653],[0.392,-2.231],[0.041,-14.085]],\"v\":[[0.383,-34.594],[-0.31,-34.604],[-15.387,1.58],[-14.767,9.036],[-20.178,15.996],[-16.48,34.006],[-14.396,34.067],[-6.939,24.773],[-4.937,26.55],[-3.243,27.148],[3.243,27.148],[4.936,26.55],[6.93,24.784],[14.374,34.067],[16.46,34.006],[20.167,16.006],[14.788,9.057],[15.417,1.59]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[23.35,34.989],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Слой 2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[53.048,74.347,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[6.978,0.427,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":79.5,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":82.25,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":85,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":87.25,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":90,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":92.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":95.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":97.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":100.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":102.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":105.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":107.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":110.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":112.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":115.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":117.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":120.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":122.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":125.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":127.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":130.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":132.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":135.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":137.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":140.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":142.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":145.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":147.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":150.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":152.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":155.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":157.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":160.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":162.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":165.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":167.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":170.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":172.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":175.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":177.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":180.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":182.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":185.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":187.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":190.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":192.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":195.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":197.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":200.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":202.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":205.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":207.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":210.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":212.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":215.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":217.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":220.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":222.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":225.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":227.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":230.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":232.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":235.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":237.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":240.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":242.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":245.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":247.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":250.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":252.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":255.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":257.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":260.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":262.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":265.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":267.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":270.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":272.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":275.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":277.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":280.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":282.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":285.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":287.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":290.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":292.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":295.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":297.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":300.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":302.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":305.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":307.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":310.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":312.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":315.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":317.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":320.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":322.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":325.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":327.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":330.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":332.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":335.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":337.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":340.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":342.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":345.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":347.5,\"s\":[70,70,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":350.25,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":352.5,\"s\":[70,70,100]},{\"t\":355.250014469629,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.01,-0.465],[0.693,-0.981],[1.559,2.199],[-0.011,0.857],[0,0],[0.289,-0.371],[0,-1.549],[0,0],[0,3.717],[0.887,1.136]],\"o\":[[0,0.867],[-1.558,2.199],[-0.692,-0.981],[0,0],[0,-0.475],[-0.888,1.137],[0,3.718],[0,0],[0,-1.57],[-0.3,-0.361]],\"v\":[[4.415,-6.976],[3.195,-4.105],[-3.206,-4.105],[-4.424,-6.955],[-4.424,-6.976],[-5.303,-7.276],[-6.728,-3.145],[-0.005,7.647],[6.728,-3.155],[5.303,-7.286]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[6.978,7.897],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":360.000014663101,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"Main 2\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[904,544,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[185,333.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[242.703,267.316,100],\"ix\":6}},\"ao\":0,\"w\":370,\"h\":667,\"ip\":0,\"op\":209.000008512745,\"st\":-133.000005417201,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"ion-ios-rocket\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[924,562,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[53,53.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[998.113,914.953,100],\"ix\":6}},\"ao\":0,\"w\":106,\"h\":107,\"ip\":0,\"op\":209.000008512745,\"st\":-87.0000035435826,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1108,576,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[87.384,87.384,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[1200,1200],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.25098039215686274,0.16862745098039217,0.3215686274509804,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.16862745098039217,0.10980392156862745,0.2196078431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-209.031,-33.031],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":209.000008512745,\"st\":-86.0000035028518,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FVolumes%2FSamsung_T5%2FNihonGOJS%2FNext.js%2Fbootcamp-landing%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FVolumes%2FSamsung_T5%2FNihonGOJS%2FNext.js%2Fbootcamp-landing%2Fpages%2Findex.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FVolumes%2FSamsung_T5%2FNihonGOJS%2FNext.js%2Fbootcamp-landing%2Fpages%2Findex.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map