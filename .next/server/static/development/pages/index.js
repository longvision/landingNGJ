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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Input.js":
/*!***********************************!*\
  !*** ./pages/components/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @unform/core */ "@unform/core");
/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_unform_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/pages/components/Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputField = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`
  font-size: 18px;
  height: 40px;
  background-color: #fff;
  border-width: 1px;
  width: 250px;
`;
function Input(_ref) {
  let {
    name,
    placeholder
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "placeholder"]);

  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error
  } = Object(_unform_core__WEBPACK_IMPORTED_MODULE_1__["useField"])(name);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return __jsx(InputField, _extends({
    ref: inputRef,
    placeholder: placeholder,
    defaultValue: defaultValue
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "lottie-web");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @unform/web */ "@unform/web");
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_unform_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Input */ "./pages/components/Input.js");
/* harmony import */ var _static_rocket_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/rocket.json */ "./pages/static/rocket.json");
var _static_rocket_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/rocket.json */ "./pages/static/rocket.json", 1);
/* harmony import */ var _static_logoJS_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static/logoJS.png */ "./pages/static/logoJS.png");
/* harmony import */ var _static_logoJS_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_logoJS_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_logoReact_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static/logoReact.png */ "./pages/static/logoReact.png");
/* harmony import */ var _static_logoReact_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_logoReact_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/logoRedux.png */ "./pages/static/logoRedux.png");
/* harmony import */ var _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_logoNode_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/logoNode.png */ "./pages/static/logoNode.png");
/* harmony import */ var _static_logoNode_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_logoNode_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Container = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "mytn3e-0"
})(["margin-top:100px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.h1.withConfig({
  displayName: "pages__Title",
  componentId: "mytn3e-1"
})(["margin-top:10px;font-size:38px;color:", ";"], ({
  theme
}) => theme.colors.primary);
const Mission = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.h1.withConfig({
  displayName: "pages__Mission",
  componentId: "mytn3e-2"
})(["margin-top:0px;font-size:44px;font-weight:bold;color:", ";"], ({
  theme
}) => theme.colors.text);
const Explanation = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p.withConfig({
  displayName: "pages__Explanation",
  componentId: "mytn3e-3"
})(["font-size:22px;margin-top:-20px;color:", ";"], ({
  theme
}) => theme.colors.text);
const Formulary = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__Formulary",
  componentId: "mytn3e-4"
})(["padding:25px 0px;border-radius:12px;justify-content:center;flex-direction:center;display:flex;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__Action",
  componentId: "mytn3e-5"
})(["margin-top:20px;width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);flex-direction:column;align-items:center;justify-content:center;display:flex;"]);
const TechContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__TechContainer",
  componentId: "mytn3e-6"
})(["margin:20px;width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);flex-direction:row;align-items:center;justify-content:center;display:flex;"]);
const Tech = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.img.withConfig({
  displayName: "pages__Tech",
  componentId: "mytn3e-7"
})(["margin:20px 30px;width:150px;height:auto;border-radius:12px;flex-direction:column;align-items:stretch;justify-content:center;display:flex;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.button.withConfig({
  displayName: "pages__Button",
  componentId: "mytn3e-8"
})(["font-size:20px;font-weight:500;height:44px;background-color:", ";color:", ";border-width:0px;justify-content:center;align-item:center;"], ({
  theme
}) => theme.colors.button, ({
  theme
}) => theme.colors.text);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "pages__Background",
  componentId: "mytn3e-9"
})(["background-color:", ";margin:0;padding:0;outline:0;position:absolute;bottom:0px;left:0px;right:0px;top:0px;box-sizing:border-box;-webkit-font-smoothing:antialiased !important;font-family:sans-serif;"], ({
  theme
}) => theme.colors.background);
let animObj = null;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const animBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function handleSubmit(data) {
    console.log(data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(" component did mount ");
    animObj = lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.loadAnimation({
      container: animBox.current,
      // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: _static_rocket_json__WEBPACK_IMPORTED_MODULE_5__ // the path to the animation json

    });
  }, []);
  return __jsx(Background, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: 150,
      margin: "0 auto"
    },
    ref: animBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "NihonGoJS"), __jsx(Mission, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7"), __jsx(Explanation, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "JavaScript\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u5B66\u3093\u3067\u6B21\u306E\u30D9\u30EB\u3078\u884C\u3053\u3046\u3002"), __jsx(Action, {
    onMouseEnter: () => {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: () => lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.freeze(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_unform_web__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(Formulary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    type: "email",
    placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "name",
    type: "input",
    placeholder: "\u540D\u524D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }), __jsx(Button, {
    onMouseEnter: () => {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
      animObj.setSpeed(3);
    },
    onMouseLeave: () => {
      animObj.setSpeed(1);
    },
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7\u306B\u767B\u9332\u3059\u308B")))), __jsx(TechContainer, {
    onMouseEnter: () => {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: () => lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.freeze(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx(Tech, {
    src: _static_logoJS_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoReact_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoNode_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }))));
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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@unform/core":
/*!*******************************!*\
  !*** external "@unform/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@unform/core");

/***/ }),

/***/ "@unform/web":
/*!******************************!*\
  !*** external "@unform/web" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@unform/web");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lottie-web":
/*!*****************************!*\
  !*** external "lottie-web" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lottie-web");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map