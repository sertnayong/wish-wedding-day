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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BsCopy_react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BsCopy!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal */ \"(app-pages-browser)/./src/components/modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Gift = (props)=>{\n    _s();\n    const accountNumber = '123-4-56789-0';\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCopy = ()=>{\n        navigator.clipboard.writeText(accountNumber);\n        setCopied(true);\n        setTimeout(()=>setCopied(false), 2000);\n    };\n    // Framer motion animation controls\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        threshold: 0.2\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            controls.start({\n                x: 0,\n                opacity: 1\n            });\n        } else {\n            controls.start({\n                x: -100,\n                opacity: 0\n            });\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (copied) {\n            setShowModal(true);\n            setTimeout(()=>setShowModal(false), 2000);\n        }\n    }, [\n        copied\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            ref: ref,\n            animate: controls,\n            initial: {\n                x: -100,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.8\n            },\n            className: \"h-[200px] w-full bg-gradient-to-t from-blue-300 to-blue-300 rounded-tr-[50px] rounded-br-[50px] mt-6 shadow-2xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"absolute inset-0 flex items-start justify-center p-4 text-4xl text-white font-extrabold opacity-40\",\n                    children: \"GIFT\"\n                }, void 0, false, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/5 h-[120px] flex items-center justify-center p-2 bg-gradient-to-r from-white to-gray-200 rounded-sm shadow-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full bg-gray-300 rounded-sm flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-500 font-semibold\",\n                                    children: \"QR Code\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-3/5 space-y-2 text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-bold text-black\",\n                                    children: [\n                                        \"ธนาคาร\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium\",\n                                            children: \"กสิกรไทย\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-bold text-black\",\n                                    children: [\n                                        \"ชื่อบัญชี\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium\",\n                                            children: \"น.ส. จารุวรรณ พันลำภักดิ์\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex items-center text-sm font-bold text-black\",\n                                    children: [\n                                        \"เลขที่บัญชี\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white text-sm pl-2 font-medium\",\n                                            children: accountNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsCopy_react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCopy, {\n                                            className: \"ml-3 text-xl text-gray-300 cursor-pointer hover:text-gray-500 transition-all duration-200\",\n                                            title: \"Copy to clipboard\",\n                                            onClick: handleCopy,\n                                            \"aria-label\": \"Copy account number to clipboard\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined),\n                showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    show: showModal,\n                    message: \"Copied (คัดลอกเลขบัญชีแล้ว)\",\n                    onClose: ()=>setShowModal(false)\n                }, void 0, false, {\n                    fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sert/Documents/GitHub/wish-wedding-day/src/components/gift.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gift, \"ncoWpKayYZE7BNC2cPVW2U9mN7A=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Gift;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gift);\nvar _c;\n$RefreshReg$(_c, \"Gift\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2dpZnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDYTtBQUNHO0FBQ2pCO0FBSXZDLE1BQU1RLE9BQU8sQ0FBQ0M7O0lBQ1YsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWMsYUFBYTtRQUNmQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1I7UUFDOUJFLFVBQVU7UUFDVk8sV0FBVyxJQUFNUCxVQUFVLFFBQVE7SUFDdkM7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTVEsV0FBV2YsMkRBQVlBO0lBQzdCLE1BQU0sRUFBRWdCLEdBQUcsRUFBRUMsTUFBTSxFQUFFLEdBQUdoQixzRUFBU0EsQ0FBQztRQUFFaUIsV0FBVztJQUFJO0lBRW5EckIsZ0RBQVNBLENBQUM7UUFDTixJQUFJb0IsUUFBUTtZQUNSRixTQUFTSSxLQUFLLENBQUM7Z0JBQUVDLEdBQUc7Z0JBQUdDLFNBQVM7WUFBRTtRQUN0QyxPQUFPO1lBQ0hOLFNBQVNJLEtBQUssQ0FBQztnQkFBRUMsR0FBRyxDQUFDO2dCQUFLQyxTQUFTO1lBQUU7UUFDekM7SUFDSixHQUFHO1FBQUNOO1FBQVVFO0tBQU87SUFFckJwQixnREFBU0EsQ0FBQztRQUNOLElBQUlTLFFBQVE7WUFDUkcsYUFBYTtZQUNiSyxXQUFXLElBQU1MLGFBQWEsUUFBUTtRQUMxQztJQUNKLEdBQUc7UUFBQ0g7S0FBTztJQUVYLHFCQUNJO2tCQUNJLDRFQUFDUCxpREFBTUEsQ0FBQ3VCLEdBQUc7WUFDUE4sS0FBS0E7WUFDTE8sU0FBU1I7WUFDVFMsU0FBUztnQkFBRUosR0FBRyxDQUFDO2dCQUFLQyxTQUFTO1lBQUU7WUFDL0JJLFlBQVk7Z0JBQUVDLFVBQVU7WUFBSTtZQUM1QkMsV0FBVTs7OEJBRVYsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFxRzs7Ozs7OzhCQUlsSCw4REFBQ0w7b0JBQUlLLFdBQVU7O3NDQUVYLDhEQUFDTDs0QkFBSUssV0FBVTtzQ0FDWCw0RUFBQ0w7Z0NBQUlLLFdBQVU7MENBQ1gsNEVBQUNFO29DQUFLRixXQUFVOzhDQUE4Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdEQsOERBQUNMOzRCQUFJSyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUErQjtzREFFeEMsOERBQUNFOzRDQUFLRixXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7OzhDQUUxRCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUErQjtzREFFeEMsOERBQUNFOzRDQUFLRixXQUFVO3NEQUFzQzs7Ozs7Ozs7Ozs7OzhDQUUxRCw4REFBQ0M7b0NBQUVELFdBQVU7O3dDQUFpRDtzREFFMUQsOERBQUNFOzRDQUFLRixXQUFVO3NEQUNYdEI7Ozs7OztzREFFTCw4REFBQ1AsZ0ZBQU1BOzRDQUNINkIsV0FBVTs0Q0FDVkcsT0FBTTs0Q0FDTkMsU0FBU3JCOzRDQUNUc0IsY0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU8xQnhCLDJCQUNHLDhEQUFDTix5REFBS0E7b0JBQ0YrQixNQUFNekI7b0JBQ04wQixTQUFRO29CQUNSQyxTQUFTLElBQU0xQixhQUFhOzs7Ozs7Ozs7Ozs7O0FBTXBEO0dBdkZNTjs7UUFZZUgsdURBQVlBO1FBQ0xDLGtFQUFTQTs7O0tBYi9CRTtBQXlGTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9naWZ0LnRzeD82MGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnNDb3B5IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWwnO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IEdpZnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudE51bWJlciA9ICcxMjMtNC01Njc4OS0wJztcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhY2NvdW50TnVtYmVyKTtcbiAgICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDIwMDApO1xuICAgIH07XG5cbiAgICAvLyBGcmFtZXIgbW90aW9uIGFuaW1hdGlvbiBjb250cm9sc1xuICAgIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gICAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAwLjIgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAgICAgICBjb250cm9scy5zdGFydCh7IHg6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250cm9scy5zdGFydCh7IHg6IC0xMDAsIG9wYWNpdHk6IDAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbY29udHJvbHMsIGluVmlld10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvcGllZCkge1xuICAgICAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpLCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH0sIFtjb3BpZWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogLTEwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC1bMjAwcHhdIHctZnVsbCBiZy1ncmFkaWVudC10by10IGZyb20tYmx1ZS0zMDAgdG8tYmx1ZS0zMDAgcm91bmRlZC10ci1bNTBweF0gcm91bmRlZC1ici1bNTBweF0gbXQtNiBzaGFkb3ctMnhsIHJlbGF0aXZlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LTR4bCB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIG9wYWNpdHktNDAnPlxuICAgICAgICAgICAgICAgICAgICBHSUZUXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTYnPlxuICAgICAgICAgICAgICAgICAgICB7LyogUVIgQ29kZSBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yLzUgaC1bMTIwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8tZ3JheS0yMDAgcm91bmRlZC1zbSBzaGFkb3ctbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgYmctZ3JheS0zMDAgcm91bmRlZC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQnPlFSIENvZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1lc3NhZ2UgU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy81IHNwYWNlLXktMiB0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWJsYWNrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDguJjguJnguLLguITguLLguKNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1zbSBwbC0yIGZvbnQtbWVkaXVtJz7guIHguKrguLTguIHguKPguYTguJfguKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ib2xkIHRleHQtYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4iuC4t+C5iOC4reC4muC4seC4jeC4iuC4tVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXNtIHBsLTIgZm9udC1tZWRpdW0nPuC4mS7guKouIOC4iOC4suC4o+C4uOC4p+C4o+C4o+C4kyDguJ7guLHguJnguKXguLPguKDguLHguIHguJTguLTguYw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1ib2xkIHRleHQtYmxhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC5gOC4peC4guC4l+C4teC5iOC4muC4seC4jeC4iuC4tVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXNtIHBsLTIgZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ29weVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTMgdGV4dC14bCB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvcHkgdG8gY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvcHkgYWNjb3VudCBudW1iZXIgdG8gY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBNb2RhbCBEaXNwbGF5ICovfVxuICAgICAgICAgICAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJDb3BpZWQgKOC4hOC4seC4lOC4peC4reC4geC5gOC4peC4guC4muC4seC4jeC4iuC4teC5geC4peC5ieC4pylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0gLy8gb3B0aW9uYWwgb25DbG9zZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdpZnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJzQ29weSIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsIk1vZGFsIiwiR2lmdCIsInByb3BzIiwiYWNjb3VudE51bWJlciIsImNvcGllZCIsInNldENvcGllZCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwiY29udHJvbHMiLCJyZWYiLCJpblZpZXciLCJ0aHJlc2hvbGQiLCJzdGFydCIsIngiLCJvcGFjaXR5IiwiZGl2IiwiYW5pbWF0ZSIsImluaXRpYWwiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInRpdGxlIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJzaG93IiwibWVzc2FnZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/gift.tsx\n"));

/***/ })

});