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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ spotifyTopWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_u_widgets_spotifytop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/u/widgets/spotifytop.css */ \"(app-pages-browser)/./app/u/widgets/spotifytop.css\");\n/* harmony import */ var _app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/signin/apps/spotifybutton */ \"(app-pages-browser)/./app/signin/apps/spotifybutton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (param)=>{\n    let [url, token] = param;\n    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url, {\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    }).then((res)=>res.data);\n};\nconst widgetContents = (props)=>{\n    _s();\n    if (props.token == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 15,\n                columnNumber: 40\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_apps_spotifybutton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                lineNumber: 15,\n                columnNumber: 59\n            }, undefined)\n        ]\n    }, void 0, true);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"https://api.spotify.com/v1/me/top/tracks?limit=5\",\n        props.token.access_token\n    ], fetcher);\n    if (error) {\n        console.log(error);\n    }\n    // useEffect(()=>{\n    //     console.log('USEEFFECT CALLED');\n    //     if (refetch){\n    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {\n    //             setToken(newtoken);\n    //         }).catch((err) => {\n    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);\n    //         });\n    //     }\n    // }, [refetch]);\n    // if (token.error == \"invalid_grant\"){\n    //     console.log(\"CALLING USEEFFECT\");\n    //     setRefetch(true);\n    // };\n    // function App () {\n    //     const [mounted, setMounted] = useState(false)\n    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)\n    //     useEffect(() => {\n    //         setMounted(true)\n    //     }, [])\n    // }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 47,\n            columnNumber: 25\n        }, undefined);\n    }\n    const songs = data.items.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"track\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: song.album.images[0].url\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        window.open(song.external_urls.spotify);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: song.artists[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Your Top 5\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 26\n                }, undefined),\n                songs\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 61,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading Top Tracks\"\n        }, void 0, false, {\n            fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n            lineNumber: 61,\n            columnNumber: 61\n        }, undefined)\n    }, void 0, false);\n};\n_s(widgetContents, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\nfunction spotifyTopWidget(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tracklist-con\",\n        children: widgetContents(props)\n    }, void 0, false, {\n        fileName: \"/Users/jaysontian/Git/nebulo-alpha-v1/app/u/widgets/spotifytop.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUI7QUFDQztBQUNhO0FBR3FCO0FBRTVELE1BQU1HLFVBQVU7UUFBQyxDQUFDQyxLQUFLQyxNQUFZO1dBQUtKLDZDQUFLQSxDQUN0Q0ssR0FBRyxDQUFDRixLQUFLO1FBQUVHLFNBQVM7WUFBRUMsZUFBZSxZQUFZSDtRQUFNO0lBQUUsR0FDekRJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUE7QUFFN0IsTUFBTUMsaUJBQWlCLENBQUNDOztJQUNwQixJQUFJQSxNQUFNUixLQUFLLElBQUksTUFBTSxxQkFBUTs7MEJBQUUsOERBQUNTOzBCQUFHOzs7Ozs7MEJBQWUsOERBQUNaLHNFQUFhQTs7Ozs7OztJQUdwRSxNQUFNLEVBQUVTLElBQUksRUFBRUksS0FBSyxFQUFFLEdBQUdmLCtDQUFNQSxDQUFDO1FBQUU7UUFBbURhLE1BQU1SLEtBQUssQ0FBQ1csWUFBWTtLQUFDLEVBQUViO0lBQy9HLElBQUlZLE9BQU87UUFBQ0UsUUFBUUMsR0FBRyxDQUFDSDtJQUFPO0lBRy9CLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1IQUFtSDtJQUNuSCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDZKQUE2SjtJQUM3SixjQUFjO0lBQ2QsUUFBUTtJQUNSLGlCQUFpQjtJQUVqQix1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCx1RUFBdUU7SUFFdkUsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsSUFBSTtJQUVKLElBQUksQ0FBQ0osTUFBTTtRQUFDLHFCQUFRLDhEQUFDUTtzQkFBSTs7Ozs7O0lBQXlCO0lBRWxELE1BQU1DLFFBQVEsS0FBTUMsS0FBSyxDQUFFQyxHQUFHLENBQUMsQ0FBQ0MsTUFBWUMsc0JBQ3hDLDhEQUFDTDtZQUFJTSxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUlDLEtBQUtKLEtBQUtLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ3pCLEdBQUc7Ozs7Ozs4QkFDbEMsOERBQUNlO29CQUFJVyxTQUFTO3dCQUFLQyxPQUFPQyxJQUFJLENBQUNULEtBQUtVLGFBQWEsQ0FBQ0MsT0FBTztvQkFBQzs7c0NBQ3RELDhEQUFDQztzQ0FBSVosS0FBS2EsSUFBSTs7Ozs7O3NDQUNkLDhEQUFDQztzQ0FBR2QsS0FBS2UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0YsSUFBSTs7Ozs7Ozs7Ozs7OztXQUpKWjs7Ozs7SUFTaEMscUJBQ0k7a0JBQ0tiLHFCQUFPLDhEQUFDUTs7OEJBQUksOERBQUNMOzhCQUFHOzs7Ozs7Z0JBQWdCTTs7Ozs7O3NDQUFlLDhEQUFDRDtzQkFBSTs7Ozs7OztBQUdqRTtHQWxETVA7O1FBSXNCWiwyQ0FBTUE7OztBQWdEbkIsU0FBU3VDLGlCQUFpQjFCLEtBQVc7SUFDaEQscUJBQ0ksOERBQUNNO1FBQUlNLFdBQVU7a0JBQ1ZiLGVBQWVDOzs7Ozs7QUFJNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Uvd2lkZ2V0cy9zcG90aWZ5dG9wLnRzeD9iNzczIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgXCJAL2FwcC91L3dpZGdldHMvc3BvdGlmeXRvcC5jc3NcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BvdGlmeUJ1dHRvbiBmcm9tIFwiQC9hcHAvc2lnbmluL2FwcHMvc3BvdGlmeWJ1dHRvblwiO1xuXG5jb25zdCBmZXRjaGVyID0gKFt1cmwsIHRva2VuXSA6IGFueSkgPT4gYXhpb3NcbiAgICAgIC5nZXQodXJsLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbiB9IH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cbmNvbnN0IHdpZGdldENvbnRlbnRzID0gKHByb3BzIDogYW55KSA9PiB7XG4gICAgaWYgKHByb3BzLnRva2VuID09IG51bGwpIHJldHVybiAoPD48aDI+WW91ciBUb3AgNTwvaDI+PFNwb3RpZnlCdXR0b24+PC9TcG90aWZ5QnV0dG9uPjwvPik7XG5cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihbYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RvcC90cmFja3M/bGltaXQ9NWAsIHByb3BzLnRva2VuLmFjY2Vzc190b2tlbl0sIGZldGNoZXIpO1xuICAgIGlmIChlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTt9XG5cblxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnVVNFRUZGRUNUIENBTExFRCcpO1xuICAgIC8vICAgICBpZiAocmVmZXRjaCl7XG4gICAgLy8gICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3Nwb3RpZnkvcmVmcmVzaF90b2tlbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4obmV3dG9rZW4gPT4ge1xuICAgIC8vICAgICAgICAgICAgIHNldFRva2VuKG5ld3Rva2VuKTtcbiAgICAvLyAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4oPGRpdj5TcG90aWZ5IGRpZCBub3QgZ3JhbnQgYWNjZXNzLiBFaXRoZXIgeW91IG5lZWQgdG8gYmUgYWRkZWQgdG8gZGV2ZWxvcGVyIGJldGEgb3IgeW91ciByZWZyZXNoIHRva2VuIGV4cGlyZWQuIENvbnRhY3QgSmF5c29uLjwvZGl2Pik7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFtyZWZldGNoXSk7XG5cbiAgICAvLyBpZiAodG9rZW4uZXJyb3IgPT0gXCJpbnZhbGlkX2dyYW50XCIpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNBTExJTkcgVVNFRUZGRUNUXCIpO1xuICAgIC8vICAgICBzZXRSZWZldGNoKHRydWUpO1xuICAgIC8vIH07XG5cbiAgICAvLyBmdW5jdGlvbiBBcHAgKCkge1xuICAgIC8vICAgICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICAvLyAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IobW91bnRlZCA/ICcvYXBpL2RhdGEnIDogbnVsbCwgZmV0Y2hEYXRhKVxuXG4gICAgLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgLy8gICAgIH0sIFtdKVxuICAgIC8vIH1cbiAgICAgICAgXG4gICAgaWYgKCFkYXRhKSB7cmV0dXJuICg8ZGl2PkxvYWRpbmcgVG9wIFRyYWNrczwvZGl2Pil9XG5cbiAgICBjb25zdCBzb25ncyA9IChkYXRhLml0ZW1zKS5tYXAoKHNvbmcgOiBhbnksIGluZGV4IDogYW55KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzb25nLmFsYnVtLmltYWdlc1swXS51cmx9PjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+e3dpbmRvdy5vcGVuKHNvbmcuZXh0ZXJuYWxfdXJscy5zcG90aWZ5KX19PlxuICAgICAgICAgICAgICAgIDxoMT57c29uZy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e3NvbmcuYXJ0aXN0c1swXS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtkYXRhID8gPGRpdj48aDI+WW91ciBUb3AgNTwvaDI+e3NvbmdzfTwvZGl2PiA6IDxkaXY+TG9hZGluZyBUb3AgVHJhY2tzPC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcG90aWZ5VG9wV2lkZ2V0KHByb3BzIDogYW55KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrbGlzdC1jb25cIj5cbiAgICAgICAgICAgIHt3aWRnZXRDb250ZW50cyhwcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJTcG90aWZ5QnV0dG9uIiwiZmV0Y2hlciIsInVybCIsInRva2VuIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIndpZGdldENvbnRlbnRzIiwicHJvcHMiLCJoMiIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNvbmdzIiwiaXRlbXMiLCJtYXAiLCJzb25nIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbGJ1bSIsImltYWdlcyIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvcGVuIiwiZXh0ZXJuYWxfdXJscyIsInNwb3RpZnkiLCJoMSIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsInNwb3RpZnlUb3BXaWRnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/u/widgets/spotifytop.tsx\n"));

/***/ })

});