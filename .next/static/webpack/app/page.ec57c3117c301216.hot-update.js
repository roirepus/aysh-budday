"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/CountdownTimer.tsx":
/*!*******************************************!*\
  !*** ./src/components/CountdownTimer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CountdownTimer = ()=>{\n    _s();\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        days: 0,\n        hours: 0,\n        minutes: 0,\n        seconds: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const targetDate = new Date(\"August 20, 2025 00:00:00\").getTime();\n        const updateCountdown = ()=>{\n            const now = new Date().getTime();\n            const distance = targetDate - now;\n            if (distance < 0) {\n                clearInterval(timer);\n                return;\n            }\n            const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(distance % (1000 * 60) / 1000);\n            setTimeLeft({\n                days,\n                hours,\n                minutes,\n                seconds\n            });\n        };\n        const timer = setInterval(updateCountdown, 1000);\n        return ()=>clearInterval(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: [\n                timeLeft.days,\n                \"d \",\n                timeLeft.hours,\n                \"h \",\n                timeLeft.minutes,\n                \"m \",\n                timeLeft.seconds,\n                \"s\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/charm/projects/ayshi-budday/src/components/CountdownTimer.tsx\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(CountdownTimer, \"oZ0hmyHHyK2tdLmzYTGUiP3Yycw=\");\n_c = CountdownTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFFNUMsTUFBTUUsaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFDdkNJLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGFBQWEsSUFBSUMsS0FBSyw0QkFBNEJDLE9BQU87UUFFL0QsTUFBTUMsa0JBQWtCO1lBQ3RCLE1BQU1DLE1BQU0sSUFBSUgsT0FBT0MsT0FBTztZQUM5QixNQUFNRyxXQUFXTCxhQUFhSTtZQUU5QixJQUFJQyxXQUFXLEdBQUc7Z0JBQ2hCQyxjQUFjQztnQkFDZDtZQUNGO1lBRUEsTUFBTVgsT0FBT1ksS0FBS0MsS0FBSyxDQUFDSixXQUFZLFFBQU8sS0FBSyxLQUFLLEVBQUM7WUFDdEQsTUFBTVIsUUFBUVcsS0FBS0MsS0FBSyxDQUFDLFdBQWEsUUFBTyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxFQUFDO1lBQzVFLE1BQU1YLFVBQVVVLEtBQUtDLEtBQUssQ0FBQyxXQUFhLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQ3BFLE1BQU1WLFVBQVVTLEtBQUtDLEtBQUssQ0FBQyxXQUFhLFFBQU8sRUFBQyxJQUFNO1lBRXREZCxZQUFZO2dCQUFFQztnQkFBTUM7Z0JBQU9DO2dCQUFTQztZQUFRO1FBQzlDO1FBRUEsTUFBTVEsUUFBUUcsWUFBWVAsaUJBQWlCO1FBRTNDLE9BQU8sSUFBTUcsY0FBY0M7SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0EsNEVBQUNJOztnQkFDRWpCLFNBQVNFLElBQUk7Z0JBQUM7Z0JBQUdGLFNBQVNHLEtBQUs7Z0JBQUM7Z0JBQUdILFNBQVNJLE9BQU87Z0JBQUM7Z0JBQUdKLFNBQVNLLE9BQU87Z0JBQUM7Ozs7Ozs7O0FBSy9FO0dBekNNTjtLQUFBQTtBQTJDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd25UaW1lci50c3g/OTRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3VudGRvd25UaW1lciA9ICgpID0+IHtcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7XG4gICAgZGF5czogMCxcbiAgICBob3VyczogMCxcbiAgICBtaW51dGVzOiAwLFxuICAgIHNlY29uZHM6IDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKFwiQXVndXN0IDIwLCAyMDI1IDAwOjAwOjAwXCIpLmdldFRpbWUoKTtcblxuICAgIGNvbnN0IHVwZGF0ZUNvdW50ZG93biA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXREYXRlIC0gbm93O1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICBzZXRUaW1lTGVmdCh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgzPlxuICAgICAge3RpbWVMZWZ0LmRheXN9ZCB7dGltZUxlZnQuaG91cnN9aCB7dGltZUxlZnQubWludXRlc31tIHt0aW1lTGVmdC5zZWNvbmRzfXNcbiAgICA8L2gzPlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50ZG93blRpbWVyIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGFyZ2V0RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwidXBkYXRlQ291bnRkb3duIiwibm93IiwiZGlzdGFuY2UiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJNYXRoIiwiZmxvb3IiLCJzZXRJbnRlcnZhbCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CountdownTimer.tsx\n"));

/***/ })

});