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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ spotifyTopWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_u_widgets_spotifytop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/u/widgets/spotifytop.css */ \"(app-pages-browser)/./app/u/widgets/spotifytop.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/signin/apps/spotifybutton */ \"(app-pages-browser)/./app/signin/apps/spotifybutton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fetcher = (param)=>{\n    let [url, token] = param;\n    return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url, {\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    }).then((res)=>res.data);\n};\nconst widgetContents = (props)=>{\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [musicdata, setMusicData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    if (props.token == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 17,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 17,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n        props.token.access_token\n    ], fetcher);\n    setMusicData(data);\n    // if (error && error.response.status == 401) {\n    //     console.log(\"Refetching Data\");\n    //     fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //         setToken(newtoken);\n    //     }).catch((err) => {\n    //         return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //     });\n    //     const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, token.access_token], fetcher);\n    //     setMusicData(data);\n    // }\n    // useEffect(()=>{\n    //     console.log('USEEFFECT CALLED');\n    //     if (refetch){\n    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //             setToken(newtoken);\n    //         }).catch((err) => {\n    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //         });\n    //     }\n    // }, [refetch]);\n    // if (token.error == \"invalid_grant\"){\n    //     console.log(\"CALLING USEEFFECT\");\n    //     setRefetch(true);\n    // };\n    // function App () {\n    //     const [mounted, setMounted] = useState(false)\n    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)\n    //     useEffect(() => {\n    //         setMounted(true)\n    //     }, [])\n    // }\n    if (!musicdata) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 60,\n            columnNumber: 30\n        }, undefined);\n    }\n    const songs = data.items.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"track\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: song.album.images[0].url\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        window.open(song.external_urls.spotify);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: song.artists[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Your Top 5\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 26\n                }, undefined),\n                songs\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 74,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 74,\n            columnNumber: 61\n        }, undefined)\n    }, void 0, false);\n};\n_s(widgetContents, \"6p5aV7XU2xwz1evuQoO+8Yq7Mig=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\nfunction spotifyTopWidget(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tracklist-con\",\n        children: widgetContents(props)\n    }, void 0, false, {\n        fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV5QjtBQUNDO0FBQ2E7QUFDSTtBQUVpQjtBQUU1RCxNQUFNSSxVQUFVO1FBQUMsQ0FBQ0MsS0FBS0MsTUFBWTtXQUFLTCw2Q0FBS0EsQ0FDdENNLEdBQUcsQ0FBQ0YsS0FBSztRQUFFRyxTQUFTO1lBQUVDLGVBQWUsWUFBWUg7UUFBTTtJQUFFLEdBQ3pESSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFBO0FBRTdCLE1BQU1DLGlCQUFpQixDQUFDQzs7SUFDcEIsTUFBTSxDQUFDUixPQUFPUyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxJQUFJWSxNQUFNUixLQUFLLElBQUksTUFBTSxxQkFBUTs7MEJBQUUsOERBQUNZOzBCQUFHOzs7Ozs7MEJBQWUsOERBQUNmLHNFQUFhQTs7Ozs7OztJQUdwRSxNQUFNLEVBQUVTLElBQUksRUFBRU8sS0FBSyxFQUFFLEdBQUduQiwrQ0FBTUEsQ0FBQztRQUFFO1FBQW1EYyxNQUFNUixLQUFLLENBQUNjLFlBQVk7S0FBQyxFQUFFaEI7SUFDL0dhLGFBQWFMO0lBQ2IsK0NBQStDO0lBQy9DLHNDQUFzQztJQUN0QywrR0FBK0c7SUFDL0csOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix5SkFBeUo7SUFDekosVUFBVTtJQUNWLHlIQUF5SDtJQUN6SCwwQkFBMEI7SUFDMUIsSUFBSTtJQUlKLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1IQUFtSDtJQUNuSCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDZKQUE2SjtJQUM3SixjQUFjO0lBQ2QsUUFBUTtJQUNSLGlCQUFpQjtJQUVqQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCx1RUFBdUU7SUFFdkUsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsSUFBSTtJQUVKLElBQUksQ0FBQ0ksV0FBVztRQUFDLHFCQUFRLDhEQUFDSztzQkFBSTs7Ozs7O0lBQXlCO0lBRXZELE1BQU1DLFFBQVEsS0FBTUMsS0FBSyxDQUFFQyxHQUFHLENBQUMsQ0FBQ0MsTUFBWUMsc0JBQ3hDLDhEQUFDTDtZQUFJTSxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUlDLEtBQUtKLEtBQUtLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQzFCLEdBQUc7Ozs7Ozs4QkFDbEMsOERBQUNnQjtvQkFBSVcsU0FBUzt3QkFBS0MsT0FBT0MsSUFBSSxDQUFDVCxLQUFLVSxhQUFhLENBQUNDLE9BQU87b0JBQUM7O3NDQUN0RCw4REFBQ0M7c0NBQUlaLEtBQUthLElBQUk7Ozs7OztzQ0FDZCw4REFBQ0M7c0NBQUdkLEtBQUtlLE9BQU8sQ0FBQyxFQUFFLENBQUNGLElBQUk7Ozs7Ozs7Ozs7Ozs7V0FKSlo7Ozs7O0lBU2hDLHFCQUNJO2tCQUNLZCxxQkFBTyw4REFBQ1M7OzhCQUFJLDhEQUFDSDs4QkFBRzs7Ozs7O2dCQUFnQkk7Ozs7OztzQ0FBZSw4REFBQ0Q7c0JBQUk7Ozs7Ozs7QUFHakU7R0EvRE1SOztRQU1zQmIsMkNBQU1BOzs7QUEyRG5CLFNBQVN5QyxpQkFBaUIzQixLQUFXO0lBQ2hELHFCQUNJLDhEQUFDTztRQUFJTSxXQUFVO2tCQUNWZCxlQUFlQzs7Ozs7O0FBSTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3g/Yjc3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFwiQC9hcHAvdS93aWRnZXRzL3Nwb3RpZnl0b3AuY3NzXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwb3RpZnlCdXR0b24gZnJvbSBcIkAvYXBwL3NpZ25pbi9hcHBzL3Nwb3RpZnlidXR0b25cIjtcblxuY29uc3QgZmV0Y2hlciA9IChbdXJsLCB0b2tlbl0gOiBhbnkpID0+IGF4aW9zXG4gICAgICAuZ2V0KHVybCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4gfSB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG5jb25zdCB3aWRnZXRDb250ZW50cyA9IChwcm9wcyA6IGFueSkgPT4ge1xuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW211c2ljZGF0YSwgc2V0TXVzaWNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGlmIChwcm9wcy50b2tlbiA9PSBudWxsKSByZXR1cm4gKDw+PGgyPllvdXIgVG9wIDU8L2gyPjxTcG90aWZ5QnV0dG9uPjwvU3BvdGlmeUJ1dHRvbj48Lz4pO1xuXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoW2BodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvdHJhY2tzP2xpbWl0PTVgLCBwcm9wcy50b2tlbi5hY2Nlc3NfdG9rZW5dLCBmZXRjaGVyKTtcbiAgICBzZXRNdXNpY0RhdGEoZGF0YSk7XG4gICAgLy8gaWYgKGVycm9yICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJSZWZldGNoaW5nIERhdGFcIik7XG4gICAgLy8gICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvc3BvdGlmeS9yZWZyZXNoX3Rva2VuJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihuZXd0b2tlbiA9PiB7XG4gICAgLy8gICAgICAgICBzZXRUb2tlbihuZXd0b2tlbik7XG4gICAgLy8gICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybig8ZGl2PlNwb3RpZnkgZGlkIG5vdCBncmFudCBhY2Nlc3MuIEVpdGhlciB5b3UgbmVlZCB0byBiZSBhZGRlZCB0byBkZXZlbG9wZXIgYmV0YSBvciB5b3VyIHJlZnJlc2ggdG9rZW4gZXhwaXJlZC4gQ29udGFjdCBKYXlzb24uPC9kaXY+KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihbYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RvcC90cmFja3M/bGltaXQ9NWAsIHRva2VuLmFjY2Vzc190b2tlbl0sIGZldGNoZXIpO1xuICAgIC8vICAgICBzZXRNdXNpY0RhdGEoZGF0YSk7XG4gICAgLy8gfVxuXG5cblxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnVVNFRUZGRUNUIENBTExFRCcpO1xuICAgIC8vICAgICBpZiAocmVmZXRjaCl7XG4gICAgLy8gICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3Nwb3RpZnkvcmVmcmVzaF90b2tlbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4obmV3dG9rZW4gPT4ge1xuICAgIC8vICAgICAgICAgICAgIHNldFRva2VuKG5ld3Rva2VuKTtcbiAgICAvLyAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4oPGRpdj5TcG90aWZ5IGRpZCBub3QgZ3JhbnQgYWNjZXNzLiBFaXRoZXIgeW91IG5lZWQgdG8gYmUgYWRkZWQgdG8gZGV2ZWxvcGVyIGJldGEgb3IgeW91ciByZWZyZXNoIHRva2VuIGV4cGlyZWQuIENvbnRhY3QgSmF5c29uLjwvZGl2Pik7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFtyZWZldGNoXSk7XG5cbiAgICAvLyBpZiAodG9rZW4uZXJyb3IgPT0gXCJpbnZhbGlkX2dyYW50XCIpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNBTExJTkcgVVNFRUZGRUNUXCIpO1xuICAgIC8vICAgICBzZXRSZWZldGNoKHRydWUpO1xuICAgIC8vIH07XG5cbiAgICAvLyBmdW5jdGlvbiBBcHAgKCkge1xuICAgIC8vICAgICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICAvLyAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IobW91bnRlZCA/ICcvYXBpL2RhdGEnIDogbnVsbCwgZmV0Y2hEYXRhKVxuXG4gICAgLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgLy8gICAgIH0sIFtdKVxuICAgIC8vIH1cbiAgICAgICAgXG4gICAgaWYgKCFtdXNpY2RhdGEpIHtyZXR1cm4gKDxkaXY+TG9hZGluZyBUb3AgVHJhY2tzPC9kaXY+KX1cblxuICAgIGNvbnN0IHNvbmdzID0gKGRhdGEuaXRlbXMpLm1hcCgoc29uZyA6IGFueSwgaW5kZXggOiBhbnkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3NvbmcuYWxidW0uaW1hZ2VzWzBdLnVybH0+PC9pbWc+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4oc29uZy5leHRlcm5hbF91cmxzLnNwb3RpZnkpfX0+XG4gICAgICAgICAgICAgICAgPGgxPntzb25nLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57c29uZy5hcnRpc3RzWzBdLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGEgPyA8ZGl2PjxoMj5Zb3VyIFRvcCA1PC9oMj57c29uZ3N9PC9kaXY+IDogPGRpdj5Mb2FkaW5nIFRvcCBUcmFja3M8L2Rpdj59XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwb3RpZnlUb3BXaWRnZXQocHJvcHMgOiBhbnkpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWNvblwiPlxuICAgICAgICAgICAge3dpZGdldENvbnRlbnRzKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZVN0YXRlIiwiU3BvdGlmeUJ1dHRvbiIsImZldGNoZXIiLCJ1cmwiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJ3aWRnZXRDb250ZW50cyIsInByb3BzIiwic2V0VG9rZW4iLCJtdXNpY2RhdGEiLCJzZXRNdXNpY0RhdGEiLCJoMiIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwiZGl2Iiwic29uZ3MiLCJpdGVtcyIsIm1hcCIsInNvbmciLCJpbmRleCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsYnVtIiwiaW1hZ2VzIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJleHRlcm5hbF91cmxzIiwic3BvdGlmeSIsImgxIiwibmFtZSIsInAiLCJhcnRpc3RzIiwic3BvdGlmeVRvcFdpZGdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/u/widgets/spotifytop.tsx\n"));

/***/ })

});