"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/u/[uid]/page",{

/***/ "(app-pages-browser)/./app/u/widgets/spotifytop.tsx":
/*!**************************************!*\
  !*** ./app/u/widgets/spotifytop.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ spotifyTopWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_u_widgets_spotifytop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/u/widgets/spotifytop.css */ \"(app-pages-browser)/./app/u/widgets/spotifytop.css\");\n/* harmony import */ var _app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/signin/apps/spotifybutton */ \"(app-pages-browser)/./app/signin/apps/spotifybutton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (param)=>{\n    let [url, token] = param;\n    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url, {\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    }).then((res)=>res.data);\n};\nconst widgetContents = (props)=>{\n    _s();\n    if (props.token == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 15,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 15,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n        props.token.access_token\n    ], fetcher);\n    if (error) {\n        console.log(error);\n    }\n    // useEffect(()=>{\n    //     console.log('USEEFFECT CALLED');\n    //     if (refetch){\n    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //             setToken(newtoken);\n    //         }).catch((err) => {\n    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //         });\n    //     }\n    // }, [refetch]);\n    // if (token.error == \"invalid_grant\"){\n    //     console.log(\"CALLING USEEFFECT\");\n    //     setRefetch(true);\n    // };\n    // function App () {\n    //     const [mounted, setMounted] = useState(false)\n    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)\n    //     useEffect(() => {\n    //         setMounted(true)\n    //     }, [])\n    // }\n    if (refetch) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 47,\n            columnNumber: 27\n        }, undefined);\n    }\n    const songs = data.items.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"track\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: song.album.images[0].url\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        window.open(song.external_urls.spotify);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: song.artists[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Your Top 5\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 26\n                }, undefined),\n                songs\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 61,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 61,\n            columnNumber: 61\n        }, undefined)\n    }, void 0, false);\n};\n_s(widgetContents, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\nfunction spotifyTopWidget(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tracklist-con\",\n        children: widgetContents(props)\n    }, void 0, false, {\n        fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUI7QUFDQztBQUNhO0FBR3FCO0FBRTVELE1BQU1HLFVBQVU7UUFBQyxDQUFDQyxLQUFLQyxNQUFZO1dBQUtKLDZDQUFLQSxDQUN0Q0ssR0FBRyxDQUFDRixLQUFLO1FBQUVHLFNBQVM7WUFBRUMsZUFBZSxZQUFZSDtRQUFNO0lBQUUsR0FDekRJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUE7QUFFN0IsTUFBTUMsaUJBQWlCLENBQUNDOztJQUNwQixJQUFJQSxNQUFNUixLQUFLLElBQUksTUFBTSxxQkFBUTs7MEJBQUUsOERBQUNTOzBCQUFHOzs7Ozs7MEJBQWUsOERBQUNaLHNFQUFhQTs7Ozs7OztJQUdwRSxNQUFNLEVBQUVTLElBQUksRUFBRUksS0FBSyxFQUFFLEdBQUdmLCtDQUFNQSxDQUFDO1FBQUU7UUFBbURhLE1BQU1SLEtBQUssQ0FBQ1csWUFBWTtLQUFDLEVBQUViO0lBQy9HLElBQUlZLE9BQU87UUFBQ0UsUUFBUUMsR0FBRyxDQUFDSDtJQUFPO0lBRy9CLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1IQUFtSDtJQUNuSCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDZKQUE2SjtJQUM3SixjQUFjO0lBQ2QsUUFBUTtJQUNSLGlCQUFpQjtJQUVqQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCx1RUFBdUU7SUFFdkUsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsSUFBSTtJQUVKLElBQUlJLFNBQVM7UUFBQyxxQkFBUSw4REFBQ0M7c0JBQUk7Ozs7OztJQUF5QjtJQUVwRCxNQUFNQyxRQUFRLEtBQU1DLEtBQUssQ0FBRUMsR0FBRyxDQUFDLENBQUNDLE1BQVlDLHNCQUN4Qyw4REFBQ0w7WUFBSU0sV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJQyxLQUFLSixLQUFLSyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUFFLENBQUMxQixHQUFHOzs7Ozs7OEJBQ2xDLDhEQUFDZ0I7b0JBQUlXLFNBQVM7d0JBQUtDLE9BQU9DLElBQUksQ0FBQ1QsS0FBS1UsYUFBYSxDQUFDQyxPQUFPO29CQUFDOztzQ0FDdEQsOERBQUNDO3NDQUFJWixLQUFLYSxJQUFJOzs7Ozs7c0NBQ2QsOERBQUNDO3NDQUFHZCxLQUFLZSxPQUFPLENBQUMsRUFBRSxDQUFDRixJQUFJOzs7Ozs7Ozs7Ozs7O1dBSkpaOzs7OztJQVNoQyxxQkFDSTtrQkFDS2QscUJBQU8sOERBQUNTOzs4QkFBSSw4REFBQ047OEJBQUc7Ozs7OztnQkFBZ0JPOzs7Ozs7c0NBQWUsOERBQUNEO3NCQUFJOzs7Ozs7O0FBR2pFO0dBbERNUjs7UUFJc0JaLDJDQUFNQTs7O0FBZ0RuQixTQUFTd0MsaUJBQWlCM0IsS0FBVztJQUNoRCxxQkFDSSw4REFBQ087UUFBSU0sV0FBVTtrQkFDVmQsZUFBZUM7Ozs7OztBQUk1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdS93aWRnZXRzL3Nwb3RpZnl0b3AudHN4P2I3NzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBcIkAvYXBwL3Uvd2lkZ2V0cy9zcG90aWZ5dG9wLmNzc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcG90aWZ5QnV0dG9uIGZyb20gXCJAL2FwcC9zaWduaW4vYXBwcy9zcG90aWZ5YnV0dG9uXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoW3VybCwgdG9rZW5dIDogYW55KSA9PiBheGlvc1xuICAgICAgLmdldCh1cmwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuIH0gfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcblxuY29uc3Qgd2lkZ2V0Q29udGVudHMgPSAocHJvcHMgOiBhbnkpID0+IHtcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gbnVsbCkgcmV0dXJuICg8PjxoMj5Zb3VyIFRvcCA1PC9oMj48U3BvdGlmeUJ1dHRvbj48L1Nwb3RpZnlCdXR0b24+PC8+KTtcblxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFtgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz9saW1pdD01YCwgcHJvcHMudG9rZW4uYWNjZXNzX3Rva2VuXSwgZmV0Y2hlcik7XG4gICAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpO31cblxuXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdVU0VFRkZFQ1QgQ0FMTEVEJyk7XG4gICAgLy8gICAgIGlmIChyZWZldGNoKXtcbiAgICAvLyAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvc3BvdGlmeS9yZWZyZXNoX3Rva2VuJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihuZXd0b2tlbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgc2V0VG9rZW4obmV3dG9rZW4pO1xuICAgIC8vICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybig8ZGl2PlNwb3RpZnkgZGlkIG5vdCBncmFudCBhY2Nlc3MuIEVpdGhlciB5b3UgbmVlZCB0byBiZSBhZGRlZCB0byBkZXZlbG9wZXIgYmV0YSBvciB5b3VyIHJlZnJlc2ggdG9rZW4gZXhwaXJlZC4gQ29udGFjdCBKYXlzb24uPC9kaXY+KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3JlZmV0Y2hdKTtcblxuICAgIC8vIGlmICh0b2tlbi5lcnJvciA9PSBcImludmFsaWRfZ3JhbnRcIil7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ0FMTElORyBVU0VFRkZFQ1RcIik7XG4gICAgLy8gICAgIHNldFJlZmV0Y2godHJ1ZSk7XG4gICAgLy8gfTtcblxuICAgIC8vIGZ1bmN0aW9uIEFwcCAoKSB7XG4gICAgLy8gICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihtb3VudGVkID8gJy9hcGkvZGF0YScgOiBudWxsLCBmZXRjaERhdGEpXG5cbiAgICAvLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgICAvLyAgICAgfSwgW10pXG4gICAgLy8gfVxuICAgICAgICBcbiAgICBpZiAocmVmZXRjaCkge3JldHVybiAoPGRpdj5Mb2FkaW5nIFRvcCBUcmFja3M8L2Rpdj4pfVxuXG4gICAgY29uc3Qgc29uZ3MgPSAoZGF0YS5pdGVtcykubWFwKChzb25nIDogYW55LCBpbmRleCA6IGFueSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17c29uZy5hbGJ1bS5pbWFnZXNbMF0udXJsfT48L2ltZz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9Pnt3aW5kb3cub3Blbihzb25nLmV4dGVybmFsX3VybHMuc3BvdGlmeSl9fT5cbiAgICAgICAgICAgICAgICA8aDE+e3NvbmcubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPntzb25nLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ZGF0YSA/IDxkaXY+PGgyPllvdXIgVG9wIDU8L2gyPntzb25nc308L2Rpdj4gOiA8ZGl2PkxvYWRpbmcgVG9wIFRyYWNrczwvZGl2Pn1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BvdGlmeVRvcFdpZGdldChwcm9wcyA6IGFueSkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja2xpc3QtY29uXCI+XG4gICAgICAgICAgICB7d2lkZ2V0Q29udGVudHMocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsImF4aW9zIiwiU3BvdGlmeUJ1dHRvbiIsImZldGNoZXIiLCJ1cmwiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJ3aWRnZXRDb250ZW50cyIsInByb3BzIiwiaDIiLCJlcnJvciIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJyZWZldGNoIiwiZGl2Iiwic29uZ3MiLCJpdGVtcyIsIm1hcCIsInNvbmciLCJpbmRleCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsYnVtIiwiaW1hZ2VzIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJleHRlcm5hbF91cmxzIiwic3BvdGlmeSIsImgxIiwibmFtZSIsInAiLCJhcnRpc3RzIiwic3BvdGlmeVRvcFdpZGdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/u/widgets/spotifytop.tsx\n"));

/***/ })

});