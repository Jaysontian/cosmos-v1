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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ spotifyTopWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_u_widgets_spotifytop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/u/widgets/spotifytop.css */ \"(app-pages-browser)/./app/u/widgets/spotifytop.css\");\n/* harmony import */ var _app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/signin/apps/spotifybutton */ \"(app-pages-browser)/./app/signin/apps/spotifybutton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (param)=>{\n    let [url, token] = param;\n    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url, {\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    }).then((res)=>res.data);\n};\nconst refetch = async ()=>{\n    await fetch(\"http://localhost:3000/api/auth/spotify/refresh_token\").then((res)=>res.json()).then((token)=>{\n        console.log(\"Fetched new token: \", props.token, token);\n        return token;\n    }).catch((err)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, undefined);\n    });\n};\nconst widgetContents = (props1)=>{\n    _s();\n    if (props1.token == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 26,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 26,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n        props1.token.access_token\n    ], fetcher, {\n        onErrorRetry: (error, key, config, revalidate, param)=>{\n            let { retryCount } = param;\n            // // If not a 401 error, then return\n            if (error.response.status !== 401) return;\n            // Only retry up to 2 times.\n            if (retryCount >= 2) return;\n            console.log(\"RETRYING\");\n            refetch();\n            // Retry after 5 seconds.\n            setTimeout(()=>revalidate({\n                    retryCount\n                }), 2000);\n        }\n    });\n    // if (error && error.response.status == 401) {\n    //     console.log(\"Refetching Data\");\n    //     fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(token => {\n    //         props.token = token;\n    //     }).catch((err) => {\n    //         return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //     });\n    //     const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, props.token.access_token], fetcher);\n    //     console.log(\"Refetched Data: \", data);\n    // }\n    // useEffect(()=>{\n    //     console.log('USEEFFECT CALLED');\n    //     if (refetch){\n    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //             setToken(newtoken);\n    //         }).catch((err) => {\n    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //         });\n    //     }\n    // }, [refetch]);\n    // if (token.error == \"invalid_grant\"){\n    //     console.log(\"CALLING USEEFFECT\");\n    //     setRefetch(true);\n    // };\n    // function App () {\n    //     const [mounted, setMounted] = useState(false)\n    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)\n    //     useEffect(() => {\n    //         setMounted(true)\n    //     }, [])\n    // }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 83,\n            columnNumber: 25\n        }, undefined);\n    }\n    const songs = data.items.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"track\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: song.album.images[0].url\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        window.open(song.external_urls.spotify);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: song.artists[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Your Top 5\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 26\n                }, undefined),\n                songs\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 97,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 97,\n            columnNumber: 61\n        }, undefined)\n    }, void 0, false);\n};\n_s(widgetContents, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\nfunction spotifyTopWidget(props1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tracklist-con\",\n        children: widgetContents(props1)\n    }, void 0, false, {\n        fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUI7QUFDQztBQUNhO0FBR3FCO0FBRTVELE1BQU1HLFVBQVU7UUFBQyxDQUFDQyxLQUFLQyxNQUFZO1dBQUtKLDZDQUFLQSxDQUN0Q0ssR0FBRyxDQUFDRixLQUFLO1FBQUVHLFNBQVM7WUFBRUMsZUFBZSxZQUFZSDtRQUFNO0lBQUUsR0FDekRJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUE7QUFHN0IsTUFBTUMsVUFBVTtJQUNaLE1BQU1DLE1BQU0sd0RBQXdESixJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlJLElBQUksSUFBSUwsSUFBSSxDQUFDSixDQUFBQTtRQUM3RlUsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkMsTUFBTVosS0FBSyxFQUFFQTtRQUNoRCxPQUFPQTtJQUNYLEdBQUdhLEtBQUssQ0FBQyxDQUFDQztRQUNOLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2hCO0FBQ0o7QUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0o7O0lBRXBCLElBQUlBLE9BQU1aLEtBQUssSUFBSSxNQUFNLHFCQUFROzswQkFBRSw4REFBQ2lCOzBCQUFHOzs7Ozs7MEJBQWUsOERBQUNwQixzRUFBYUE7Ozs7Ozs7SUFFcEUsTUFBTSxFQUFFUyxJQUFJLEVBQUVZLEtBQUssRUFBRSxHQUFHdkIsK0NBQU1BLENBQUM7UUFBRTtRQUFtRGlCLE9BQU1aLEtBQUssQ0FBQ21CLFlBQVk7S0FBQyxFQUFFckIsU0FBUztRQUNwSHNCLGNBQWMsQ0FBQ0YsT0FBT0csS0FBS0MsUUFBUUM7Z0JBQVksRUFBRUMsVUFBVSxFQUFFO1lBRXpELHFDQUFxQztZQUNyQyxJQUFJTixNQUFNTyxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLO1lBQ25DLDRCQUE0QjtZQUM1QixJQUFJRixjQUFjLEdBQUc7WUFDckJkLFFBQVFDLEdBQUcsQ0FBQztZQUVaSjtZQUdBLHlCQUF5QjtZQUN6Qm9CLFdBQVcsSUFBTUosV0FBVztvQkFBRUM7Z0JBQVcsSUFBSTtRQUNqRDtJQUNKO0lBRUEsK0NBQStDO0lBQy9DLHNDQUFzQztJQUN0Qyw0R0FBNEc7SUFDNUcsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQix5SkFBeUo7SUFDekosVUFBVTtJQUNWLCtIQUErSDtJQUMvSCw2Q0FBNkM7SUFDN0MsSUFBSTtJQUlKLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1IQUFtSDtJQUNuSCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDZKQUE2SjtJQUM3SixjQUFjO0lBQ2QsUUFBUTtJQUNSLGlCQUFpQjtJQUVqQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCx1RUFBdUU7SUFFdkUsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsSUFBSTtJQUVKLElBQUksQ0FBQ2xCLE1BQU07UUFBQyxxQkFBUSw4REFBQ1M7c0JBQUk7Ozs7OztJQUF5QjtJQUVsRCxNQUFNYSxRQUFRLEtBQU1DLEtBQUssQ0FBRUMsR0FBRyxDQUFDLENBQUNDLE1BQVlDLHNCQUN4Qyw4REFBQ2pCO1lBQUlrQixXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUlDLEtBQUtKLEtBQUtLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ3RDLEdBQUc7Ozs7Ozs4QkFDbEMsOERBQUNnQjtvQkFBSXVCLFNBQVM7d0JBQUtDLE9BQU9DLElBQUksQ0FBQ1QsS0FBS1UsYUFBYSxDQUFDQyxPQUFPO29CQUFDOztzQ0FDdEQsOERBQUNDO3NDQUFJWixLQUFLYSxJQUFJOzs7Ozs7c0NBQ2QsOERBQUNDO3NDQUFHZCxLQUFLZSxPQUFPLENBQUMsRUFBRSxDQUFDRixJQUFJOzs7Ozs7Ozs7Ozs7O1dBSkpaOzs7OztJQVNoQyxxQkFDSTtrQkFDSzFCLHFCQUFPLDhEQUFDUzs7OEJBQUksOERBQUNFOzhCQUFHOzs7Ozs7Z0JBQWdCVzs7Ozs7O3NDQUFlLDhEQUFDYjtzQkFBSTs7Ozs7OztBQUdqRTtHQTVFTUM7O1FBSXNCckIsMkNBQU1BOzs7QUEwRW5CLFNBQVNvRCxpQkFBaUJuQyxNQUFXO0lBQ2hELHFCQUNJLDhEQUFDRztRQUFJa0IsV0FBVTtrQkFDVmpCLGVBQWVKOzs7Ozs7QUFJNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Uvd2lkZ2V0cy9zcG90aWZ5dG9wLnRzeD9iNzczIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgXCJAL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC5jc3NcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BvdGlmeUJ1dHRvbiBmcm9tIFwiQC9hcHAvc2lnbmluL2FwcHMvc3BvdGlmeWJ1dHRvblwiO1xuXG5jb25zdCBmZXRjaGVyID0gKFt1cmwsIHRva2VuXSA6IGFueSkgPT4gYXhpb3NcbiAgICAgIC5nZXQodXJsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbiB9IH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cblxuY29uc3QgcmVmZXRjaCA9IGFzeW5jKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvc3BvdGlmeS9yZWZyZXNoX3Rva2VuJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbih0b2tlbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBuZXcgdG9rZW46IFwiLCBwcm9wcy50b2tlbiwgdG9rZW4pO1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZXR1cm4oPGRpdj5TcG90aWZ5IGRpZCBub3QgZ3JhbnQgYWNjZXNzLiBFaXRoZXIgeW91IG5lZWQgdG8gYmUgYWRkZWQgdG8gZGV2ZWxvcGVyIGJldGEgb3IgeW91ciByZWZyZXNoIHRva2VuIGV4cGlyZWQuIENvbnRhY3QgSmF5c29uLjwvZGl2Pik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHdpZGdldENvbnRlbnRzID0gKHByb3BzIDogYW55KSA9PiB7XG5cbiAgICBpZiAocHJvcHMudG9rZW4gPT0gbnVsbCkgcmV0dXJuICg8PjxoMj5Zb3VyIFRvcCA1PC9oMj48U3BvdGlmeUJ1dHRvbj48L1Nwb3RpZnlCdXR0b24+PC8+KTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihbYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RvcC90cmFja3M/bGltaXQ9NWAsIHByb3BzLnRva2VuLmFjY2Vzc190b2tlbl0sIGZldGNoZXIsIHtcbiAgICAgICAgb25FcnJvclJldHJ5OiAoZXJyb3IsIGtleSwgY29uZmlnLCByZXZhbGlkYXRlLCB7IHJldHJ5Q291bnQgfSkgPT4ge1xuXG4gICAgICAgICAgICAvLyAvLyBJZiBub3QgYSA0MDEgZXJyb3IsIHRoZW4gcmV0dXJuXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MDEpIHJldHVyblxuICAgICAgICAgICAgLy8gT25seSByZXRyeSB1cCB0byAyIHRpbWVzLlxuICAgICAgICAgICAgaWYgKHJldHJ5Q291bnQgPj0gMikgcmV0dXJuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVUUllJTkcnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIFJldHJ5IGFmdGVyIDUgc2Vjb25kcy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmV2YWxpZGF0ZSh7IHJldHJ5Q291bnQgfSksIDIwMDApXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGlmIChlcnJvciAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUmVmZXRjaGluZyBEYXRhXCIpO1xuICAgIC8vICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3Nwb3RpZnkvcmVmcmVzaF90b2tlbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4odG9rZW4gPT4ge1xuICAgIC8vICAgICAgICAgcHJvcHMudG9rZW4gPSB0b2tlbjtcbiAgICAvLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgcmV0dXJuKDxkaXY+U3BvdGlmeSBkaWQgbm90IGdyYW50IGFjY2Vzcy4gRWl0aGVyIHlvdSBuZWVkIHRvIGJlIGFkZGVkIHRvIGRldmVsb3BlciBiZXRhIG9yIHlvdXIgcmVmcmVzaCB0b2tlbiBleHBpcmVkLiBDb250YWN0IEpheXNvbi48L2Rpdj4pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFtgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz9saW1pdD01YCwgcHJvcHMudG9rZW4uYWNjZXNzX3Rva2VuXSwgZmV0Y2hlcik7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUmVmZXRjaGVkIERhdGE6IFwiLCBkYXRhKTtcbiAgICAvLyB9XG5cblxuXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdVU0VFRkZFQ1QgQ0FMTEVEJyk7XG4gICAgLy8gICAgIGlmIChyZWZldGNoKXtcbiAgICAvLyAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvc3BvdGlmeS9yZWZyZXNoX3Rva2VuJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihuZXd0b2tlbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgc2V0VG9rZW4obmV3dG9rZW4pO1xuICAgIC8vICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybig8ZGl2PlNwb3RpZnkgZGlkIG5vdCBncmFudCBhY2Nlc3MuIEVpdGhlciB5b3UgbmVlZCB0byBiZSBhZGRlZCB0byBkZXZlbG9wZXIgYmV0YSBvciB5b3VyIHJlZnJlc2ggdG9rZW4gZXhwaXJlZC4gQ29udGFjdCBKYXlzb24uPC9kaXY+KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3JlZmV0Y2hdKTtcblxuICAgIC8vIGlmICh0b2tlbi5lcnJvciA9PSBcImludmFsaWRfZ3JhbnRcIil7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ0FMTElORyBVU0VFRkZFQ1RcIik7XG4gICAgLy8gICAgIHNldFJlZmV0Y2godHJ1ZSk7XG4gICAgLy8gfTtcblxuICAgIC8vIGZ1bmN0aW9uIEFwcCAoKSB7XG4gICAgLy8gICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vICAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihtb3VudGVkID8gJy9hcGkvZGF0YScgOiBudWxsLCBmZXRjaERhdGEpXG5cbiAgICAvLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgICAvLyAgICAgfSwgW10pXG4gICAgLy8gfVxuICAgICAgICBcbiAgICBpZiAoIWRhdGEpIHtyZXR1cm4gKDxkaXY+TG9hZGluZyBUb3AgVHJhY2tzPC9kaXY+KX1cblxuICAgIGNvbnN0IHNvbmdzID0gKGRhdGEuaXRlbXMpLm1hcCgoc29uZyA6IGFueSwgaW5kZXggOiBhbnkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3NvbmcuYWxidW0uaW1hZ2VzWzBdLnVybH0+PC9pbWc+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4oc29uZy5leHRlcm5hbF91cmxzLnNwb3RpZnkpfX0+XG4gICAgICAgICAgICAgICAgPGgxPntzb25nLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57c29uZy5hcnRpc3RzWzBdLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGEgPyA8ZGl2PjxoMj5Zb3VyIFRvcCA1PC9oMj57c29uZ3N9PC9kaXY+IDogPGRpdj5Mb2FkaW5nIFRvcCBUcmFja3M8L2Rpdj59XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwb3RpZnlUb3BXaWRnZXQocHJvcHMgOiBhbnkpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tsaXN0LWNvblwiPlxuICAgICAgICAgICAge3dpZGdldENvbnRlbnRzKHByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsIlNwb3RpZnlCdXR0b24iLCJmZXRjaGVyIiwidXJsIiwidG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVmZXRjaCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImNhdGNoIiwiZXJyIiwiZGl2Iiwid2lkZ2V0Q29udGVudHMiLCJoMiIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwib25FcnJvclJldHJ5Iiwia2V5IiwiY29uZmlnIiwicmV2YWxpZGF0ZSIsInJldHJ5Q291bnQiLCJyZXNwb25zZSIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJzb25ncyIsIml0ZW1zIiwibWFwIiwic29uZyIsImluZGV4IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwiaDEiLCJuYW1lIiwicCIsImFydGlzdHMiLCJzcG90aWZ5VG9wV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/u/widgets/spotifytop.tsx\n"));

/***/ })

});