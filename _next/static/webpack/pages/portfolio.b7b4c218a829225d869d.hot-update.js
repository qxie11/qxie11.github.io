webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./components/PortfolioItem.tsx":
/*!**************************************!*\
  !*** ./components/PortfolioItem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/portfolio.module.scss */ "./styles/components/portfolio.module.scss");
/* harmony import */ var _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\portfolio-2\\components\\PortfolioItem.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PortfolioItem = function PortfolioItem(_ref) {
  _s();

  var name = _ref.name,
      desc = _ref.desc,
      github = _ref.github,
      images = _ref.images,
      link = _ref.link,
      listOfTechnologies = _ref.listOfTechnologies;
  var img = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var loading1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var loading2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var loading3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isImagesLoaded = _useState[0],
      setImagesLoaded = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(img.current && !img.current.complete);

    if (img && !img.current.complete) {
      img.current.addEventListener('load', function () {
        setTimeout(function () {
          setImagesLoaded(true);
        }, 500);
      });
    } else {
      setImagesLoaded(true);
    }
  }, []);
  return __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.portfolio_item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, !isImagesLoaded && __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img1, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading1),
    ref: loading1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img2, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading2),
    ref: loading2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img3, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading3),
    ref: loading3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx("img", {
    ref: img,
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img1,
    src: images[0],
    alt: name,
    style: {
      height: !isImagesLoaded ? '0' : ''
    },
    loading: "lazy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("img", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img2,
    src: images[1],
    alt: name,
    style: {
      height: !isImagesLoaded ? '0' : ''
    },
    loading: "lazy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("img", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img3,
    src: images[2],
    alt: name,
    style: {
      height: !isImagesLoaded ? '0' : ''
    },
    loading: "lazy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flex_wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, name), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn_wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, link && __jsx("a", {
    href: link,
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.view,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }
  }, "view"), __jsx("a", {
    href: github,
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.code,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "code"))), __jsx("p", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, desc), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.technologies,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, listOfTechnologies && listOfTechnologies.map(function (tech) {
    return __jsx("div", {
      className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tech,
      key: tech,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 20
      }
    }, tech);
  })), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.decor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
};

_s(PortfolioItem, "/p2nl7G4KGcYNH+/ef6tf+z30tI=");

_c = PortfolioItem;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

var _c;

$RefreshReg$(_c, "PortfolioItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9JdGVtLnRzeCJdLCJuYW1lcyI6WyJQb3J0Zm9saW9JdGVtIiwibmFtZSIsImRlc2MiLCJnaXRodWIiLCJpbWFnZXMiLCJsaW5rIiwibGlzdE9mVGVjaG5vbG9naWVzIiwiaW1nIiwidXNlUmVmIiwibG9hZGluZzEiLCJsb2FkaW5nMiIsImxvYWRpbmczIiwidXNlU3RhdGUiLCJpc0ltYWdlc0xvYWRlZCIsInNldEltYWdlc0xvYWRlZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY29tcGxldGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInN0eWxlcyIsInBvcnRmb2xpb19pdGVtIiwid3JhcHBlciIsImxvYWRpbmdfd3JhcHBlciIsImltZzEiLCJpbWcyIiwiaW1nMyIsImhlaWdodCIsImZsZXhfd3JhcCIsImJ0bl93cmFwIiwidmlldyIsImNvZGUiLCJ0ZWNobm9sb2dpZXMiLCJtYXAiLCJ0ZWNoIiwiZGVjb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxhQUF1QyxHQUFHLFNBQTFDQSxhQUEwQyxPQU8xQztBQUFBOztBQUFBLE1BTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLElBRUksUUFGSkEsSUFFSTtBQUFBLE1BREpDLGtCQUNJLFFBREpBLGtCQUNJO0FBQ0osTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxDQUEwQixJQUExQixDQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQU0sQ0FBd0IsSUFBeEIsQ0FBdkI7QUFDQSxNQUFNRSxRQUFRLEdBQUdGLG9EQUFNLENBQXdCLElBQXhCLENBQXZCO0FBQ0EsTUFBTUcsUUFBUSxH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Q0EsSUFBekMsQ0FBUDtBQUNELEdBRnFCLENBRHhCLENBcENGLEVBeUNFO0FBQUssYUFBUyxFQUFFZCwrRUFBTSxDQUFDZSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREYsQ0FERjtBQStDRCxDQXpFRDs7R0FBTXJDLGE7O0tBQUFBLGE7QUEyRVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvcnRmb2xpby5iN2I0YzIxOGE4MjkyMjVkODY5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9wb3J0Zm9saW8ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBJUG9ydGZvbGlvSXRlbSB9IGZyb20gJy4vLi4vY29uc3RhbnMvcG9ydGZvbGlvJztcclxuXHJcbmNvbnN0IFBvcnRmb2xpb0l0ZW06IFJlYWN0LkZDPElQb3J0Zm9saW9JdGVtPiA9ICh7XHJcbiAgbmFtZSxcclxuICBkZXNjLFxyXG4gIGdpdGh1YixcclxuICBpbWFnZXMsXHJcbiAgbGluayxcclxuICBsaXN0T2ZUZWNobm9sb2dpZXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IGltZyA9IHVzZVJlZjxudWxsIHwgSFRNTEltYWdlRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgbG9hZGluZzEgPSB1c2VSZWY8bnVsbCB8IEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBsb2FkaW5nMiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGxvYWRpbmczID0gdXNlUmVmPG51bGwgfCBIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IFtpc0ltYWdlc0xvYWRlZCwgc2V0SW1hZ2VzTG9hZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltZy5jdXJyZW50ICYmICFpbWcuY3VycmVudC5jb21wbGV0ZSlcclxuICAgIGlmIChpbWcgJiYgIWltZy5jdXJyZW50IS5jb21wbGV0ZSkge1xyXG4gICAgICBpbWcuY3VycmVudCEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldEltYWdlc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHsgc2V0SW1hZ2VzTG9hZGVkKHRydWUpOyB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcnRmb2xpb19pdGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICB7IWlzSW1hZ2VzTG9hZGVkICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ193cmFwcGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1nMX0gJHtzdHlsZXMubG9hZGluZzF9YH0gcmVmPXtsb2FkaW5nMX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1nMn0gJHtzdHlsZXMubG9hZGluZzJ9YH0gcmVmPXtsb2FkaW5nMn0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1nM30gJHtzdHlsZXMubG9hZGluZzN9YH0gcmVmPXtsb2FkaW5nM30gLz5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcmVmPXtpbWd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWcxfVxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF19XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICFpc0ltYWdlc0xvYWRlZCA/ICcwJyA6ICcnIH19XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWcyfVxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMV19XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICFpc0ltYWdlc0xvYWRlZCA/ICcwJyA6ICcnIH19XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWczfVxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMl19XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICFpc0ltYWdlc0xvYWRlZCA/ICcwJyA6ICcnIH19XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfd3JhcH0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25hbWV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuX3dyYXB9PlxyXG4gICAgICAgICAgICB7bGluayAmJiA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9e3N0eWxlcy52aWV3fSB0YXJnZXQ9XCJfYmxhbmtcIj52aWV3PC9hPn1cclxuICAgICAgICAgICAgPGEgaHJlZj17Z2l0aHVifSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfSB0YXJnZXQ9XCJfYmxhbmtcIj5jb2RlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+e2Rlc2N9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzfT57XHJcbiAgICAgICAgICBsaXN0T2ZUZWNobm9sb2dpZXMgJiYgbGlzdE9mVGVjaG5vbG9naWVzLm1hcCgodGVjaCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNofSBrZXk9e3RlY2h9Pnt0ZWNofTwvZGl2PlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWNvcn0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvSXRlbTsiXSwic291cmNlUm9vdCI6IiJ9