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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ spotifyTopWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_u_widgets_spotifytop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/u/widgets/spotifytop.css */ \"(app-pages-browser)/./app/u/widgets/spotifytop.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/signin/apps/spotifybutton */ \"(app-pages-browser)/./app/signin/apps/spotifybutton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fetcher = (param)=>{\n    let [url, token] = param;\n    return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url, {\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    }).then((res)=>res.data);\n};\nconst widgetContents = (props)=>{\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [musicdata, setMusicData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    if (props.token == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 17,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 17,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n        props.token.access_token\n    ], fetcher);\n    setMusicData(data);\n    if (error && error.response.status == 401) {\n        console.log(\"Refetching Data\");\n        fetch(\"http://localhost:3000/api/auth/spotify/refresh_token\").then((res)=>res.json()).then((newtoken)=>{\n            setToken(newtoken);\n        }).catch((err)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 27,\n                columnNumber: 20\n            }, undefined);\n        });\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n            \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n            token.access_token\n        ], fetcher);\n        setMusicData(data);\n    }\n    // useEffect(()=>{\n    //     console.log('USEEFFECT CALLED');\n    //     if (refetch){\n    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //             setToken(newtoken);\n    //         }).catch((err) => {\n    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //         });\n    //     }\n    // }, [refetch]);\n    // if (token.error == \"invalid_grant\"){\n    //     console.log(\"CALLING USEEFFECT\");\n    //     setRefetch(true);\n    // };\n    // function App () {\n    //     const [mounted, setMounted] = useState(false)\n    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)\n    //     useEffect(() => {\n    //         setMounted(true)\n    //     }, [])\n    // }\n    if (!musicdata) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 60,\n            columnNumber: 30\n        }, undefined);\n    }\n    const songs = data.items.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"track\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: song.album.images[0].url\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        window.open(song.external_urls.spotify);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: song.artists[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Your Top 5\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 26\n                }, undefined),\n                songs\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 74,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 74,\n            columnNumber: 61\n        }, undefined)\n    }, void 0, false);\n};\n_s(widgetContents, \"6p5aV7XU2xwz1evuQoO+8Yq7Mig=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\nfunction spotifyTopWidget(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tracklist-con\",\n        children: widgetContents(props)\n    }, void 0, false, {\n        fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV5QjtBQUNDO0FBQ2E7QUFDSTtBQUVpQjtBQUU1RCxNQUFNSSxVQUFVO1FBQUMsQ0FBQ0MsS0FBS0MsTUFBWTtXQUFLTCw2Q0FBS0EsQ0FDdENNLEdBQUcsQ0FBQ0YsS0FBSztRQUFFRyxTQUFTO1lBQUVDLGVBQWUsWUFBWUg7UUFBTTtJQUFFLEdBQ3pESSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFBO0FBRTdCLE1BQU1DLGlCQUFpQixDQUFDQzs7SUFDcEIsTUFBTSxDQUFDUixPQUFPUyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxJQUFJWSxNQUFNUixLQUFLLElBQUksTUFBTSxxQkFBUTs7MEJBQUUsOERBQUNZOzBCQUFHOzs7Ozs7MEJBQWUsOERBQUNmLHNFQUFhQTs7Ozs7OztJQUdwRSxNQUFNLEVBQUVTLElBQUksRUFBRU8sS0FBSyxFQUFFLEdBQUduQiwrQ0FBTUEsQ0FBQztRQUFFO1FBQW1EYyxNQUFNUixLQUFLLENBQUNjLFlBQVk7S0FBQyxFQUFFaEI7SUFDL0dhLGFBQWFMO0lBQ2IsSUFBSU8sU0FBU0EsTUFBTUUsUUFBUSxDQUFDQyxNQUFNLElBQUksS0FBSztRQUN2Q0MsUUFBUUMsR0FBRyxDQUFDO1FBQ1pDLE1BQU0sd0RBQXdEZixJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUllLElBQUksSUFBSWhCLElBQUksQ0FBQ2lCLENBQUFBO1lBQ3ZGWixTQUFTWTtRQUNiLEdBQUdDLEtBQUssQ0FBQyxDQUFDQztZQUNOLHFCQUFPLDhEQUFDQzswQkFBSTs7Ozs7O1FBQ2hCO1FBQ0EsTUFBTSxFQUFFbEIsSUFBSSxFQUFFTyxLQUFLLEVBQUUsR0FBR25CLCtDQUFNQSxDQUFDO1lBQUU7WUFBbURNLE1BQU1jLFlBQVk7U0FBQyxFQUFFaEI7UUFDekdhLGFBQWFMO0lBQ2pCO0lBSUEsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsbUhBQW1IO0lBQ25ILGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsNkpBQTZKO0lBQzdKLGNBQWM7SUFDZCxRQUFRO0lBQ1IsaUJBQWlCO0lBRWpCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLEtBQUs7SUFFTCxvQkFBb0I7SUFDcEIsb0RBQW9EO0lBQ3BELHVFQUF1RTtJQUV2RSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixJQUFJO0lBRUosSUFBSSxDQUFDSSxXQUFXO1FBQUMscUJBQVEsOERBQUNjO3NCQUFJOzs7Ozs7SUFBeUI7SUFFdkQsTUFBTUMsUUFBUSxLQUFNQyxLQUFLLENBQUVDLEdBQUcsQ0FBQyxDQUFDQyxNQUFZQyxzQkFDeEMsOERBQUNMO1lBQUlNLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUMsS0FBS0osS0FBS0ssS0FBSyxDQUFDQyxNQUFNLENBQUMsRUFBRSxDQUFDbkMsR0FBRzs7Ozs7OzhCQUNsQyw4REFBQ3lCO29CQUFJVyxTQUFTO3dCQUFLQyxPQUFPQyxJQUFJLENBQUNULEtBQUtVLGFBQWEsQ0FBQ0MsT0FBTztvQkFBQzs7c0NBQ3RELDhEQUFDQztzQ0FBSVosS0FBS2EsSUFBSTs7Ozs7O3NDQUNkLDhEQUFDQztzQ0FBR2QsS0FBS2UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0YsSUFBSTs7Ozs7Ozs7Ozs7OztXQUpKWjs7Ozs7SUFTaEMscUJBQ0k7a0JBQ0t2QixxQkFBTyw4REFBQ2tCOzs4QkFBSSw4REFBQ1o7OEJBQUc7Ozs7OztnQkFBZ0JhOzs7Ozs7c0NBQWUsOERBQUNEO3NCQUFJOzs7Ozs7O0FBR2pFO0dBL0RNakI7O1FBTXNCYiwyQ0FBTUE7OztBQTJEbkIsU0FBU2tELGlCQUFpQnBDLEtBQVc7SUFDaEQscUJBQ0ksOERBQUNnQjtRQUFJTSxXQUFVO2tCQUNWdkIsZUFBZUM7Ozs7OztBQUk1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdS93aWRnZXRzL3Nwb3RpZnl0b3AudHN4P2I3NzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBcIkAvYXBwL3Uvd2lkZ2V0cy9zcG90aWZ5dG9wLmNzc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcG90aWZ5QnV0dG9uIGZyb20gXCJAL2FwcC9zaWduaW4vYXBwcy9zcG90aWZ5YnV0dG9uXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoW3VybCwgdG9rZW5dIDogYW55KSA9PiBheGlvc1xuICAgICAgLmdldCh1cmwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuIH0gfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcblxuY29uc3Qgd2lkZ2V0Q29udGVudHMgPSAocHJvcHMgOiBhbnkpID0+IHtcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFttdXNpY2RhdGEsIHNldE11c2ljRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gbnVsbCkgcmV0dXJuICg8PjxoMj5Zb3VyIFRvcCA1PC9oMj48U3BvdGlmeUJ1dHRvbj48L1Nwb3RpZnlCdXR0b24+PC8+KTtcblxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFtgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz9saW1pdD01YCwgcHJvcHMudG9rZW4uYWNjZXNzX3Rva2VuXSwgZmV0Y2hlcik7XG4gICAgc2V0TXVzaWNEYXRhKGRhdGEpO1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVmZXRjaGluZyBEYXRhXCIpO1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3Nwb3RpZnkvcmVmcmVzaF90b2tlbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4obmV3dG9rZW4gPT4ge1xuICAgICAgICAgICAgc2V0VG9rZW4obmV3dG9rZW4pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oPGRpdj5TcG90aWZ5IGRpZCBub3QgZ3JhbnQgYWNjZXNzLiBFaXRoZXIgeW91IG5lZWQgdG8gYmUgYWRkZWQgdG8gZGV2ZWxvcGVyIGJldGEgb3IgeW91ciByZWZyZXNoIHRva2VuIGV4cGlyZWQuIENvbnRhY3QgSmF5c29uLjwvZGl2Pik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoW2BodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvdHJhY2tzP2xpbWl0PTVgLCB0b2tlbi5hY2Nlc3NfdG9rZW5dLCBmZXRjaGVyKTtcbiAgICAgICAgc2V0TXVzaWNEYXRhKGRhdGEpO1xuICAgIH1cblxuXG5cbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1VTRUVGRkVDVCBDQUxMRUQnKTtcbiAgICAvLyAgICAgaWYgKHJlZmV0Y2gpe1xuICAgIC8vICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9zcG90aWZ5L3JlZnJlc2hfdG9rZW4nKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKG5ld3Rva2VuID0+IHtcbiAgICAvLyAgICAgICAgICAgICBzZXRUb2tlbihuZXd0b2tlbik7XG4gICAgLy8gICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuKDxkaXY+U3BvdGlmeSBkaWQgbm90IGdyYW50IGFjY2Vzcy4gRWl0aGVyIHlvdSBuZWVkIHRvIGJlIGFkZGVkIHRvIGRldmVsb3BlciBiZXRhIG9yIHlvdXIgcmVmcmVzaCB0b2tlbiBleHBpcmVkLiBDb250YWN0IEpheXNvbi48L2Rpdj4pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbcmVmZXRjaF0pO1xuXG4gICAgLy8gaWYgKHRva2VuLmVycm9yID09IFwiaW52YWxpZF9ncmFudFwiKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJDQUxMSU5HIFVTRUVGRkVDVFwiKTtcbiAgICAvLyAgICAgc2V0UmVmZXRjaCh0cnVlKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gZnVuY3Rpb24gQXBwICgpIHtcbiAgICAvLyAgICAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKG1vdW50ZWQgPyAnL2FwaS9kYXRhJyA6IG51bGwsIGZldGNoRGF0YSlcblxuICAgIC8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAgICAgc2V0TW91bnRlZCh0cnVlKVxuICAgIC8vICAgICB9LCBbXSlcbiAgICAvLyB9XG4gICAgICAgIFxuICAgIGlmICghbXVzaWNkYXRhKSB7cmV0dXJuICg8ZGl2PkxvYWRpbmcgVG9wIFRyYWNrczwvZGl2Pil9XG5cbiAgICBjb25zdCBzb25ncyA9IChkYXRhLml0ZW1zKS5tYXAoKHNvbmcgOiBhbnksIGluZGV4IDogYW55KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzb25nLmFsYnVtLmltYWdlc1swXS51cmx9PjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5vcGVuKHNvbmcuZXh0ZXJuYWxfdXJscy5zcG90aWZ5KX19PlxuICAgICAgICAgICAgICAgIDxoMT57c29uZy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e3NvbmcuYXJ0aXN0c1swXS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtkYXRhID8gPGRpdj48aDI+WW91ciBUb3AgNTwvaDI+e3NvbmdzfTwvZGl2PiA6IDxkaXY+TG9hZGluZyBUb3AgVHJhY2tzPC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcG90aWZ5VG9wV2lkZ2V0KHByb3BzIDogYW55KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1jb25cIj5cbiAgICAgICAgICAgIHt3aWRnZXRDb250ZW50cyhwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIlNwb3RpZnlCdXR0b24iLCJmZXRjaGVyIiwidXJsIiwidG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwid2lkZ2V0Q29udGVudHMiLCJwcm9wcyIsInNldFRva2VuIiwibXVzaWNkYXRhIiwic2V0TXVzaWNEYXRhIiwiaDIiLCJlcnJvciIsImFjY2Vzc190b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwianNvbiIsIm5ld3Rva2VuIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJzb25ncyIsIml0ZW1zIiwibWFwIiwic29uZyIsImluZGV4IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwiaDEiLCJuYW1lIiwicCIsImFydGlzdHMiLCJzcG90aWZ5VG9wV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/u/widgets/spotifytop.tsx\n"));

/***/ })

});