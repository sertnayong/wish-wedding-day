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

/***/ "(app-pages-browser)/./src/components/gift.tsx":
/*!*********************************!*\
  !*** ./src/components/gift.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal */ \"(app-pages-browser)/./src/components/modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Gift = (props)=>{\n    _s();\n    const accountNumber = '123-4-56789-0';\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for backup copy method\n    const handleCopy = ()=>{\n        if (navigator.clipboard && navigator.clipboard.writeText) {\n            navigator.clipboard.writeText(accountNumber).then(()=>{\n                setCopied(true);\n                setTimeout(()=>setCopied(false), 2000);\n            }).catch((err)=>{\n                console.error(\"Clipboard copy failed, falling back to input method:\", err);\n                copyWithFallback();\n            });\n        } else {\n            copyWithFallback(); // Use fallback if clipboard API is unsupported\n        }\n    };\n    const copyWithFallback = ()=>{\n        if (inputRef.current) {\n            inputRef.current.value = accountNumber;\n            inputRef.current.select();\n            document.execCommand('copy'); // Fallback for unsupported browsers\n            setCopied(true);\n            setTimeout(()=>setCopied(false), 2000);\n        }\n    };\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        threshold: 0.2\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            controls.start({\n                x: 0,\n                opacity: 1\n            });\n        } else {\n            controls.start({\n                x: -100,\n                opacity: 0\n            });\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (copied) {\n            setShowModal(true);\n            setTimeout(()=>setShowModal(false), 2000);\n        }\n    }, [\n        copied\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            ref: ref,\n            animate: controls,\n            initial: {\n                x: -100,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.8\n            },\n            className: \"h-[200px] w-full bg-gradient-to-t from-blue-300 to-blue-300 rounded-tr-[50px] rounded-br-[50px] mt-6 shadow-2xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"absolute inset-0 flex items-start justify-center p-4 text-4xl text-white font-extrabold opacity-40\",\n                    children: \"GIFT\"\n                }, void 0, false, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            value: accountNumber,\n                            readOnly: true,\n                            style: {\n                                position: 'absolute',\n                                opacity: 0,\n                                pointerEvents: 'none'\n                            },\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/5 h-[120px] flex items-center justify-center p-2 bg-gradient-to-r from-white to-gray-200 rounded-sm shadow-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full bg-gray-300 rounded-sm flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-500 font-semibold\",\n                                    children: \"QR Code\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-3/5 space-y-2 text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-bold text-black\",\n                                    children: [\n                                        \"ธนาคาร\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium\",\n                                            children: \"กสิกรไทย\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-bold text-black\",\n                                    children: [\n                                        \"ชื่อบัญชี\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium\",\n                                            children: \"น.ส. จารุวรรณ พันลำภักดิ์\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex items-center text-sm font-bold text-black\",\n                                    children: [\n                                        \"เลขที่บัญชี\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium \",\n                                            children: accountNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, undefined),\n                showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    show: showModal,\n                    message: \"Copied (คัดลอกเลขบัญชีแล้ว)\"\n                }, void 0, false, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gift, \"YKcFO6h86ae5Q93mVDJ6FJHIGAg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Gift;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gift);\nvar _c;\n$RefreshReg$(_c, \"Gift\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2dpZnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFFTjtBQUNHO0FBQ2pCO0FBSXZDLE1BQU1RLE9BQU8sQ0FBQ0M7O0lBQ1YsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTWMsV0FBV1osNkNBQU1BLENBQTBCLE9BQU8sNkJBQTZCO0lBRXJGLE1BQU1hLGFBQWE7UUFDZixJQUFJQyxVQUFVQyxTQUFTLElBQUlELFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO1lBQ3RERixVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1QsZUFDekJVLElBQUksQ0FBQztnQkFDRlIsVUFBVTtnQkFDVlMsV0FBVyxJQUFNVCxVQUFVLFFBQVE7WUFDdkMsR0FDQ1UsS0FBSyxDQUFDLENBQUNDO2dCQUNKQyxRQUFRQyxLQUFLLENBQUMsd0RBQXdERjtnQkFDdEVHO1lBQ0o7UUFDUixPQUFPO1lBQ0hBLG9CQUFvQiwrQ0FBK0M7UUFDdkU7SUFDSjtJQUVBLE1BQU1BLG1CQUFtQjtRQUNyQixJQUFJWCxTQUFTWSxPQUFPLEVBQUU7WUFDbEJaLFNBQVNZLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHbEI7WUFDekJLLFNBQVNZLE9BQU8sQ0FBQ0UsTUFBTTtZQUN2QkMsU0FBU0MsV0FBVyxDQUFDLFNBQVMsb0NBQW9DO1lBQ2xFbkIsVUFBVTtZQUNWUyxXQUFXLElBQU1ULFVBQVUsUUFBUTtRQUN2QztJQUNKO0lBRUEsTUFBTW9CLFdBQVczQiwyREFBWUE7SUFDN0IsTUFBTSxFQUFFNEIsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBRzVCLHNFQUFTQSxDQUFDO1FBQUU2QixXQUFXO0lBQUk7SUFFbkRqQyxnREFBU0EsQ0FBQztRQUNOLElBQUlnQyxRQUFRO1lBQ1JGLFNBQVNJLEtBQUssQ0FBQztnQkFBRUMsR0FBRztnQkFBR0MsU0FBUztZQUFFO1FBQ3RDLE9BQU87WUFDSE4sU0FBU0ksS0FBSyxDQUFDO2dCQUFFQyxHQUFHLENBQUM7Z0JBQUtDLFNBQVM7WUFBRTtRQUN6QztJQUNKLEdBQUc7UUFBQ047UUFBVUU7S0FBTztJQUVyQmhDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsUUFBUTtZQUNSRyxhQUFhO1lBQ2JPLFdBQVcsSUFBTVAsYUFBYSxRQUFRO1FBQzFDO0lBQ0osR0FBRztRQUFDSDtLQUFPO0lBRVgscUJBQ0k7a0JBQ0ksNEVBQUNQLGlEQUFNQSxDQUFDbUMsR0FBRztZQUNQTixLQUFLQTtZQUNMTyxTQUFTUjtZQUNUUyxTQUFTO2dCQUFFSixHQUFHLENBQUM7Z0JBQUtDLFNBQVM7WUFBRTtZQUMvQkksWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1lBQzVCQyxXQUFVOzs4QkFFViw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXFHOzs7Ozs7OEJBSWxILDhEQUFDTDtvQkFBSUssV0FBVTs7c0NBRVgsOERBQUNFOzRCQUNHYixLQUFLbEI7NEJBQ0xhLE9BQU9sQjs0QkFDUHFDLFFBQVE7NEJBQ1JDLE9BQU87Z0NBQUVDLFVBQVU7Z0NBQVlYLFNBQVM7Z0NBQUdZLGVBQWU7NEJBQU87NEJBQ2pFQyxlQUFZOzs7Ozs7c0NBSWhCLDhEQUFDWjs0QkFBSUssV0FBVTtzQ0FDWCw0RUFBQ0w7Z0NBQUlLLFdBQVU7MENBQ1gsNEVBQUNRO29DQUFLUixXQUFVOzhDQUE4Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdEQsOERBQUNMOzRCQUFJSyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUErQjtzREFFeEMsOERBQUNROzRDQUFLUixXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7OzhDQUUxRCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUErQjtzREFFeEMsOERBQUNROzRDQUFLUixXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7OzhDQUUxRCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUFpRDtzREFFMUQsOERBQUNROzRDQUFLUixXQUFVO3NEQUNYbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFRaEJHLDJCQUNHLDhEQUFDTix5REFBS0E7b0JBQ0Y4QyxNQUFNeEM7b0JBQ055QyxTQUFROzs7Ozs7Ozs7Ozs7O0FBT2hDO0dBL0dNOUM7O1FBZ0NlSCx1REFBWUE7UUFDTEMsa0VBQVNBOzs7S0FqQy9CRTtBQWlITixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9naWZ0LnRzeD82MGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCc0NvcHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbCc7XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jb25zdCBHaWZ0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGFjY291bnROdW1iZXIgPSAnMTIzLTQtNTY3ODktMCc7XG4gICAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTsgLy8gUmVmIGZvciBiYWNrdXAgY29weSBtZXRob2RcblxuICAgIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhY2NvdW50TnVtYmVyKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDIwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNsaXBib2FyZCBjb3B5IGZhaWxlZCwgZmFsbGluZyBiYWNrIHRvIGlucHV0IG1ldGhvZDpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29weVdpdGhGYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29weVdpdGhGYWxsYmFjaygpOyAvLyBVc2UgZmFsbGJhY2sgaWYgY2xpcGJvYXJkIEFQSSBpcyB1bnN1cHBvcnRlZFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvcHlXaXRoRmFsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gYWNjb3VudE51bWJlcjtcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpOyAvLyBGYWxsYmFjayBmb3IgdW5zdXBwb3J0ZWQgYnJvd3NlcnNcbiAgICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAuMiB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KHsgeDogLTEwMCwgb3BhY2l0eTogMCB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjb250cm9scywgaW5WaWV3XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY29waWVkKSB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dNb2RhbChmYWxzZSksIDIwMDApO1xuICAgICAgICB9XG4gICAgfSwgW2NvcGllZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAtMTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoLVsyMDBweF0gdy1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibHVlLTMwMCB0by1ibHVlLTMwMCByb3VuZGVkLXRyLVs1MHB4XSByb3VuZGVkLWJyLVs1MHB4XSBtdC02IHNoYWRvdy0yeGwgcmVsYXRpdmUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgcC00IHRleHQtNHhsIHRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgb3BhY2l0eS00MCc+XG4gICAgICAgICAgICAgICAgICAgIEdJRlRcbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNic+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBIaWRkZW4gSW5wdXQgZm9yIEZhbGxiYWNrICovfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogMCwgcG9pbnRlckV2ZW50czogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBRUiBDb2RlIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTIvNSBoLVsxMjBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by1ncmF5LTIwMCByb3VuZGVkLXNtIHNoYWRvdy1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBiZy1ncmF5LTMwMCByb3VuZGVkLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZCc+UVIgQ29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogTWVzc2FnZSBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zLzUgc3BhY2UteS0yIHRleHQtbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ib2xkIHRleHQtYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4mOC4meC4suC4hOC4suC4o1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXNtIHBsLTIgZm9udC1tZWRpdW0nPuC4geC4quC4tOC4geC4o+C5hOC4l+C4ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LWJvbGQgdGV4dC1ibGFjayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiK4Li34LmI4Lit4Lia4Lix4LiN4LiK4Li1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtc20gcGwtMiBmb250LW1lZGl1bSc+4LiZLuC4qi4g4LiI4Liy4Lij4Li44Lin4Lij4Lij4LiTIOC4nuC4seC4meC4peC4s+C4oOC4seC4geC4lOC4tOC5jDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ibGFjayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4LmA4Lil4LiC4LiX4Li14LmI4Lia4Lix4LiN4LiK4Li1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtc20gcGwtMiBmb250LW1lZGl1bSAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgRGlzcGxheSAqL31cbiAgICAgICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPVwiQ29waWVkICjguITguLHguJTguKXguK3guIHguYDguKXguILguJrguLHguI3guIrguLXguYHguKXguYnguKcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0gLy8gb3B0aW9uYWwgb25DbG9zZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdpZnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsIk1vZGFsIiwiR2lmdCIsInByb3BzIiwiYWNjb3VudE51bWJlciIsImNvcGllZCIsInNldENvcGllZCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImlucHV0UmVmIiwiaGFuZGxlQ29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5V2l0aEZhbGxiYWNrIiwiY3VycmVudCIsInZhbHVlIiwic2VsZWN0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImNvbnRyb2xzIiwicmVmIiwiaW5WaWV3IiwidGhyZXNob2xkIiwic3RhcnQiLCJ4Iiwib3BhY2l0eSIsImRpdiIsImFuaW1hdGUiLCJpbml0aWFsIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwicCIsImlucHV0IiwicmVhZE9ubHkiLCJzdHlsZSIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsImFyaWEtaGlkZGVuIiwic3BhbiIsInNob3ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/gift.tsx\n"));

/***/ })

});