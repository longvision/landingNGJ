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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);
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
})(["flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;display:flex;"]);
var SubContainer1 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__SubContainer1",
  componentId: "mytn3e-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var SubContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__SubContainer2",
  componentId: "mytn3e-2"
})(["margin-top:111px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "mytn3e-3"
})(["margin:10px;font-size:38px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Mission = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Mission",
  componentId: "mytn3e-4"
})(["margin:10px;margin-top:0px;font-size:44px;text-align:center;font-weight:bold;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text;
});
var Explanation = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__Explanation",
  componentId: "mytn3e-5"
})(["font-size:21px;margin:15px;margin-left:44px;margin-right:44px;text-align:center;margin-top:-10px;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});
var Subtext = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__Subtext",
  componentId: "mytn3e-6"
})(["font-size:15px;font-weight:600;margin:15px;text-align:center;margin-top:-10px;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text;
});
var Modal = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__Modal",
  componentId: "mytn3e-7"
})(["font-size:15px;font-weight:600;background-color:", ";color:", ";margin:15px;padding:15px;text-align:center;margin-top:-10px;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.success;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.background;
});
var Formulary = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Formulary",
  componentId: "mytn3e-8"
})(["padding:25px 0px;border-radius:12px;justify-content:center;align-items:center;flex-direction:row;display:flex;flex-wrap:wrap;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Action",
  componentId: "mytn3e-9"
})(["margin-top:20px;padding:15px;width:60%;height:auto;min-width:150px;border-radius:12px;background-color:rgba(255,255,255,0.1);align-items:center;justify-content:center;display:flex;"]);
var TechContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__TechContainer",
  componentId: "mytn3e-10"
})(["margin:20px;max-width:60%;height:auto;border-radius:12px;background-color:rgba(255,255,255,0.1);flex-direction:row;align-items:center;justify-content:center;display:flex;flex-wrap:wrap;"]);
var Tech = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "pages__Tech",
  componentId: "mytn3e-11"
})(["margin:30px 30px;width:30%;height:30%;max-height:250px;max-width:250px;min-height:75px;min-width:75px;border-radius:12px;flex-direction:column;align-items:stretch;justify-content:center;display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].button.withConfig({
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
    animObj = lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.loadAnimation({
      container: animBox.current,
      // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: _static_rocket_json__WEBPACK_IMPORTED_MODULE_5__ // the path to the animation json

    });
  }, []);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setModal(true);
    setTimeout(function () {
      setModal(false);
    }, 3000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "Nihon Go Javascript Bootcamp"), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, "body { background-color: #402b52  }")), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(SubContainer1, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 190,
      columnNumber: 11
    }
  }), __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, "NihonGoJS"), __jsx(Mission, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, "\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7"), __jsx(Explanation, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, "JavaScript\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u5B66\u3093\u3067\u6B21\u306E\u30EC\u30D9\u30EB\u3078\u884C\u3053\u3046\u3002"), __jsx(Action, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("form", {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.unfreeze();
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
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx(Formulary, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    name: "name",
    placeholder: "\u540D\u524D",
    label: "\u540D\u524D",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    name: "email",
    placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
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
      lineNumber: 232,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "accessKey",
    value: "44974bd2-2586-4850-bbe2-25e6ceb3a59b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "replyTo",
    value: "@",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "subject",
    value: "Contact received from - https://bootcamp.nihongojs.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "replyTo",
    value: "@",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }), __jsx(Button, {
    type: "submit",
    value: "Submit",
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, "\u30D6\u30C3\u30C8\u30AD\u30E3\u30F3\u30D7\u306E\u6B21\u306E\u30B9\u30C6\u30FC\u30B8\u306B\u3002")), __jsx(Subtext, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, "\u6642\u9593\u3092\u7121\u99C4\u306B\u3057\u306A\u3044\u541B\u306B\u4F5C\u3089\u308C\u305F\u65B0\u6280\u8853\u306E\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3002"), modal && __jsx(Modal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, "\u767B\u9332\u3057\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002")))), __jsx(SubContainer2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, __jsx(TechContainer, {
    onMouseEnter: function onMouseEnter() {
      lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.unfreeze();
      animObj.play();
    },
    onMouseLeave: function onMouseLeave() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_3___default.a.freeze();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, __jsx(Tech, {
    src: _static_logoJS_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoReact_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoRedux_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }), __jsx(Tech, {
    src: _static_logoNode_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  })))));
});

/***/ })

})
//# sourceMappingURL=index.js.b64351a452f97f1f9f46.hot-update.js.map