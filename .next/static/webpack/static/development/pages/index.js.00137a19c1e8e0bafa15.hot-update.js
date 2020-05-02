webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _unform_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @unform/web */ "./node_modules/@unform/web/dist/index.es.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/input */ "./components/input.js");
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Volumes/Samsung_T5/NihonGOJS/Next.js/bootcamp-landing/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Container = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "mytn3e-0"
})(["display:flex;position:absolute;flex-direction:column;align-items:center;justify-content:stretch;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "mytn3e-1"
})(["margin-top:10px;font-size:38px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Mission = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Mission",
  componentId: "mytn3e-2"
})(["margin-top:0px;font-size:44px;font-weight:bold;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text;
});
var Explanation = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__Explanation",
  componentId: "mytn3e-3"
})(["font-size:22px;margin-top:-20px;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});
var Formulary = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Formulary",
  componentId: "mytn3e-4"
})(["padding:25px 0px;border-radius:12px;justify-content:center;align-items:center;flex-direction:row;display:flex;flex-wrap:wrap;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Action",
  componentId: "mytn3e-5"
})(["margin-top:20px;padding:15px;width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);align-items:center;justify-content:center;display:flex;"]);
var TechContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__TechContainer",
  componentId: "mytn3e-6"
})(["margin:20px;max-width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);flex-direction:row;align-items:center;justify-content:center;display:flex;flex-wrap:wrap;"]);
var Tech = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "pages__Tech",
  componentId: "mytn3e-7"
})(["margin:20px 30px;width:25;height:25%;max-height:150px;max-width:150px;border-radius:12px;flex-direction:column;align-items:stretch;justify-content:center;display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "mytn3e-8"
})(["font-size:20px;margin-top:20px;font-weight:500;min-height:44px;height:auto;width:80%;background-color:", ";color:", ";border-radius:7px;justify-content:center;align-item:flex-end;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.button;
}, function (_ref5) {
  var theme = _ref5.theme;
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
  var animBox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function handleSubmit(data) {
    console.log(data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, "Nihongo Javascript Bootcamp"), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "body { background-color: #402b52  }")), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
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
      lineNumber: 139,
      columnNumber: 9
    }
  }), __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "NihonGoJS"), __jsx(Mission, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7"), __jsx(Explanation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "JavaScript\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u5B66\u3093\u3067\u6B21\u306E\u30D9\u30EB\u3078\u884C\u3053\u3046\u3002"), __jsx(Action, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx(_unform_web__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(Formulary, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "email",
    type: "email",
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }), __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "name",
    type: "input",
    label: "\u540D\u524D",
    placeholder: "\u540D\u524D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }), __jsx(Button, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
      animObj.setSpeed(3);
    },
    onMouseLeave: function onMouseLeave() {
      animObj.setSpeed(1);
    },
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, "\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7\u306B\u767B\u9332\u3059\u308B")))), __jsx(TechContainer, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(Tech, {
    src: _static_logoJS_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoReact_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }), __jsx(Tech, {
    src: _static_logoNode_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.00137a19c1e8e0bafa15.hot-update.js.map