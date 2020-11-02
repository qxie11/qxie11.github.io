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
    if (img && !img.current.complete) {
      img.current.addEventListener('load', function () {
        setTimeout(function () {
          setImagesLoaded(true);
        }, 1500);
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
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, !isImagesLoaded && __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img1, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading1),
    ref: loading1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img2, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading2),
    ref: loading2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "".concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img3, " ").concat(_styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading3),
    ref: loading3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 38,
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
      lineNumber: 46,
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
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flex_wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, name), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn_wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, link && __jsx("a", {
    href: link,
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.view,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 22
    }
  }, "view"), __jsx("a", {
    href: github,
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.code,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "code"))), __jsx("p", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, desc), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.technologies,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, listOfTechnologies && listOfTechnologies.map(function (tech) {
    return __jsx("div", {
      className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tech,
      key: tech,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 20
      }
    }, tech);
  })), __jsx("div", {
    className: _styles_components_portfolio_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.decor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3J0Zm9saW9JdGVtLnRzeCJdLCJuYW1lcyI6WyJQb3J0Zm9saW9JdGVtIiwibmFtZSIsImRlc2MiLCJnaXRodWIiLCJpbWFnZXMiLCJsaW5rIiwibGlzdE9mVGVjaG5vbG9naWVzIiwiaW1nIiwidXNlUmVmIiwibG9hZGluZzEiLCJsb2FkaW5nMiIsImxvYWRpbmczIiwidXNlU3RhdGUiLCJpc0ltYWdlc0xvYWRlZCIsInNldEltYWdlc0xvYWRlZCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjb21wbGV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGVzIiwicG9ydGZvbGlvX2l0ZW0iLCJ3cmFwcGVyIiwibG9hZGluZ193cmFwcGVyIiwiaW1nMSIsImltZzIiLCJpbWczIiwiaGVpZ2h0IiwiZmxleF93cmFwIiwiYnRuX3dyYXAiLCJ2aWV3IiwiY29kZSIsInRlY2hub2xvZ2llcyIsIm1hcCIsInRlY2giLCJkZWNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGFBQXVDLEdBQUcsU0FBMUNBLGFBQTBDLE9BTzFDO0FBQUE7O0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsSUFFSSxRQUZKQSxJQUVJO0FBQUEsTUFESkMsa0JBQ0ksUUFESkEsa0JBQ0k7QUFDSixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQTBCLElBQTFCLENBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxvREFBTSxDQUF3QixJQUF4QixDQUF2QjtBQUNBLE1BQU1FLFFBQVEsR0FBR0Ysb0RBQU0sQ0FBd0IsSUFBeEIsQ0FBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUdILG9EQUFNLENBQXdC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QUE7QUFBQSxJQXpDRixDQURGLENBREY7QUErQ0QsQ0F4RUQ7O0dBQU1uQyxhOztLQUFBQSxhO0FBMEVTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3J0Zm9saW8uZWZjNDVhOTRhODA1MTEzODM0ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvcG9ydGZvbGlvLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgSVBvcnRmb2xpb0l0ZW0gfSBmcm9tICcuLy4uL2NvbnN0YW5zL3BvcnRmb2xpbyc7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9JdGVtOiBSZWFjdC5GQzxJUG9ydGZvbGlvSXRlbT4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgZGVzYyxcclxuICBnaXRodWIsXHJcbiAgaW1hZ2VzLFxyXG4gIGxpbmssXHJcbiAgbGlzdE9mVGVjaG5vbG9naWVzXHJcbn0pID0+IHtcclxuICBjb25zdCBpbWcgPSB1c2VSZWY8bnVsbCB8IEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGxvYWRpbmcxID0gdXNlUmVmPG51bGwgfCBIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgbG9hZGluZzIgPSB1c2VSZWY8bnVsbCB8IEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBsb2FkaW5nMyA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBbaXNJbWFnZXNMb2FkZWQsIHNldEltYWdlc0xvYWRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1nICYmICFpbWcuY3VycmVudCEuY29tcGxldGUpIHtcclxuICAgICAgaW1nLmN1cnJlbnQhLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbWFnZXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgfSwgMTUwMClcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgeyBzZXRJbWFnZXNMb2FkZWQodHJ1ZSk7IH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9ydGZvbGlvX2l0ZW19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIHshaXNJbWFnZXNMb2FkZWQgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWcxfSAke3N0eWxlcy5sb2FkaW5nMX1gfSByZWY9e2xvYWRpbmcxfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWcyfSAke3N0eWxlcy5sb2FkaW5nMn1gfSByZWY9e2xvYWRpbmcyfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWczfSAke3N0eWxlcy5sb2FkaW5nM31gfSByZWY9e2xvYWRpbmczfSAvPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByZWY9e2ltZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzF9XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXX1cclxuICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogIWlzSW1hZ2VzTG9hZGVkID8gJzAnIDogJycgfX1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzJ9XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1sxXX1cclxuICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogIWlzSW1hZ2VzTG9hZGVkID8gJzAnIDogJycgfX1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzN9XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1syXX1cclxuICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogIWlzSW1hZ2VzTG9hZGVkID8gJzAnIDogJycgfX1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleF93cmFwfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5fd3JhcH0+XHJcbiAgICAgICAgICAgIHtsaW5rICYmIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT17c3R5bGVzLnZpZXd9IHRhcmdldD1cIl9ibGFua1wiPnZpZXc8L2E+fVxyXG4gICAgICAgICAgICA8YSBocmVmPXtnaXRodWJ9IGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9IHRhcmdldD1cIl9ibGFua1wiPmNvZGU8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57ZGVzY308L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXN9PntcclxuICAgICAgICAgIGxpc3RPZlRlY2hub2xvZ2llcyAmJiBsaXN0T2ZUZWNobm9sb2dpZXMubWFwKCh0ZWNoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2h9IGtleT17dGVjaH0+e3RlY2h9PC9kaXY+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlY29yfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9JdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=