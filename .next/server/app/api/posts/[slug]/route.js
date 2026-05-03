"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/[slug]/route";
exports.ids = ["app/api/posts/[slug]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nikhilsainemmikanti_my_blog_Blogging_blog_platform_app_api_posts_slug_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/[slug]/route.js */ \"(rsc)/./app/api/posts/[slug]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/[slug]/route\",\n        pathname: \"/api/posts/[slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/[slug]/route\"\n    },\n    resolvedPagePath: \"/Users/nikhilsainemmikanti/my-blog/Blogging-/blog-platform/app/api/posts/[slug]/route.js\",\n    nextConfigOutput,\n    userland: _Users_nikhilsainemmikanti_my_blog_Blogging_blog_platform_app_api_posts_slug_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/posts/[slug]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRiU1QnNsdWclNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBvc3RzJTJGJTVCc2x1ZyU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBvc3RzJTJGJTVCc2x1ZyU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm5pa2hpbHNhaW5lbW1pa2FudGklMkZteS1ibG9nJTJGQmxvZ2dpbmctJTJGYmxvZy1wbGF0Zm9ybSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZuaWtoaWxzYWluZW1taWthbnRpJTJGbXktYmxvZyUyRkJsb2dnaW5nLSUyRmJsb2ctcGxhdGZvcm0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dDO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1wbGF0Zm9ybS8/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmlraGlsc2FpbmVtbWlrYW50aS9teS1ibG9nL0Jsb2dnaW5nLS9ibG9nLXBsYXRmb3JtL2FwcC9hcGkvcG9zdHMvW3NsdWddL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9bc2x1Z10vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3N0cy9bc2x1Z11cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bvc3RzL1tzbHVnXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9uaWtoaWxzYWluZW1taWthbnRpL215LWJsb2cvQmxvZ2dpbmctL2Jsb2ctcGxhdGZvcm0vYXBwL2FwaS9wb3N0cy9bc2x1Z10vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Bvc3RzL1tzbHVnXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/posts/[slug]/route.js":
/*!***************************************!*\
  !*** ./app/api/posts/[slug]/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Post */ \"(rsc)/./models/Post.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n\n\n\n\nasync function GET(req, { params }) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne(isMongoId ? {\n            $or: [\n                {\n                    slug: params.slug\n                },\n                {\n                    _id: params.slug\n                }\n            ]\n        } : {\n            slug: params.slug\n        });\n        if (!post) {\n            return Response.json({\n                error: \"Post not found\"\n            }, {\n                status: 404\n            });\n        }\n        return Response.json(post);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(req, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return Response.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne(isMongoId ? {\n            $or: [\n                {\n                    slug: params.slug\n                },\n                {\n                    _id: params.slug\n                }\n            ]\n        } : {\n            slug: params.slug\n        });\n        if (!post) {\n            return Response.json({\n                error: \"Post not found\"\n            }, {\n                status: 404\n            });\n        }\n        if (post.author !== session.user.email) {\n            return Response.json({\n                error: \"Forbidden: You can only edit your own posts\"\n            }, {\n                status: 403\n            });\n        }\n        const body = await req.json();\n        post.title = body.title;\n        post.content = body.content;\n        post.image = body.image || \"\";\n        await post.save();\n        return Response.json(post);\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return Response.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne(isMongoId ? {\n            $or: [\n                {\n                    slug: params.slug\n                },\n                {\n                    _id: params.slug\n                }\n            ]\n        } : {\n            slug: params.slug\n        });\n        if (!post) {\n            return Response.json({\n                error: \"Post not found\"\n            }, {\n                status: 404\n            });\n        }\n        if (post.author !== session.user.email) {\n            return Response.json({\n                error: \"Forbidden: You can only delete your own posts\"\n            }, {\n                status: 403\n            });\n        }\n        await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(post._id);\n        return Response.json({\n            message: \"Post deleted successfully\"\n        });\n    } catch (error) {\n        return Response.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1oQix1REFBU0E7UUFFZixNQUFNTSxZQUFZLG9CQUFvQkMsSUFBSSxDQUFDRixPQUFPRyxJQUFJO1FBRXRELE1BQU1DLE9BQU8sTUFBTVIsb0RBQUlBLENBQUNTLE9BQU8sQ0FDN0JKLFlBQ0k7WUFBRUssS0FBSztnQkFBQztvQkFBRUgsTUFBTUgsT0FBT0csSUFBSTtnQkFBQztnQkFBRztvQkFBRUksS0FBS1AsT0FBT0csSUFBSTtnQkFBQzthQUFFO1FBQUMsSUFDckQ7WUFBRUEsTUFBTUgsT0FBT0csSUFBSTtRQUFDO1FBRzFCLElBQUksQ0FBQ0MsTUFBTTtZQUNULE9BQU9JLFNBQVNDLElBQUksQ0FDbEI7Z0JBQUVDLE9BQU87WUFBaUIsR0FDMUI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLElBQUlQLEtBQUtXLE1BQU0sS0FBS0QsUUFBUUUsSUFBSSxDQUFDQyxLQUFLLEVBQUU7WUFDdEMsT0FBT1QsU0FBU0MsSUFBSSxDQUNsQjtnQkFBRUMsT0FBTztZQUFnRCxHQUN6RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTWYsb0RBQUlBLENBQUM0QixpQkFBaUIsQ0FBQ3BCLEtBQUtHLEdBQUc7UUFFckMsT0FBT0MsU0FBU0MsSUFBSSxDQUFDO1lBQ25CRyxTQUFTO1FBQ1g7SUFDRixFQUFFLE9BQU9GLE9BQU87UUFDZCxPQUFPRixTQUFTQyxJQUFJLENBQ2xCO1lBQUVDLE9BQU9BLE1BQU1FLE9BQU87UUFBQyxHQUN2QjtZQUFFRCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctcGxhdGZvcm0vLi9hcHAvYXBpL3Bvc3RzL1tzbHVnXS9yb3V0ZS5qcz85ZjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIkAvbW9kZWxzL1Bvc3RcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIHsgcGFyYW1zIH0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcblxuICAgIGNvbnN0IGlzTW9uZ29JZCA9IC9eWzAtOWEtZkEtRl17MjR9JC8udGVzdChwYXJhbXMuc2x1Zyk7XG5cbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdC5maW5kT25lKFxuICAgICAgaXNNb25nb0lkXG4gICAgICAgID8geyAkb3I6IFt7IHNsdWc6IHBhcmFtcy5zbHVnIH0sIHsgX2lkOiBwYXJhbXMuc2x1ZyB9XSB9XG4gICAgICAgIDogeyBzbHVnOiBwYXJhbXMuc2x1ZyB9XG4gICAgKTtcblxuICAgIGlmICghcG9zdCkge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiUG9zdCBub3QgZm91bmRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocG9zdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxLCB7IHBhcmFtcyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuXG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG5cbiAgICBjb25zdCBpc01vbmdvSWQgPSAvXlswLTlhLWZBLUZdezI0fSQvLnRlc3QocGFyYW1zLnNsdWcpO1xuXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuZmluZE9uZShcbiAgICAgIGlzTW9uZ29JZFxuICAgICAgICA/IHsgJG9yOiBbeyBzbHVnOiBwYXJhbXMuc2x1ZyB9LCB7IF9pZDogcGFyYW1zLnNsdWcgfV0gfVxuICAgICAgICA6IHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICAgICk7XG5cbiAgICBpZiAoIXBvc3QpIHtcbiAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIlBvc3Qgbm90IGZvdW5kXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChwb3N0LmF1dGhvciAhPT0gc2Vzc2lvbi51c2VyLmVtYWlsKSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJGb3JiaWRkZW46IFlvdSBjYW4gb25seSBlZGl0IHlvdXIgb3duIHBvc3RzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgcG9zdC50aXRsZSA9IGJvZHkudGl0bGU7XG4gICAgcG9zdC5jb250ZW50ID0gYm9keS5jb250ZW50O1xuICAgIHBvc3QuaW1hZ2UgPSBib2R5LmltYWdlIHx8IFwiXCI7XG5cbiAgICBhd2FpdCBwb3N0LnNhdmUoKTtcblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHBvc3QpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcSwgeyBwYXJhbXMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xuXG4gICAgY29uc3QgaXNNb25nb0lkID0gL15bMC05YS1mQS1GXXsyNH0kLy50ZXN0KHBhcmFtcy5zbHVnKTtcblxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0LmZpbmRPbmUoXG4gICAgICBpc01vbmdvSWRcbiAgICAgICAgPyB7ICRvcjogW3sgc2x1ZzogcGFyYW1zLnNsdWcgfSwgeyBfaWQ6IHBhcmFtcy5zbHVnIH1dIH1cbiAgICAgICAgOiB7IHNsdWc6IHBhcmFtcy5zbHVnIH1cbiAgICApO1xuXG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJQb3N0IG5vdCBmb3VuZFwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocG9zdC5hdXRob3IgIT09IHNlc3Npb24udXNlci5lbWFpbCkge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiRm9yYmlkZGVuOiBZb3UgY2FuIG9ubHkgZGVsZXRlIHlvdXIgb3duIHBvc3RzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IFBvc3QuZmluZEJ5SWRBbmREZWxldGUocG9zdC5faWQpO1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJQb3N0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJjb25uZWN0REIiLCJQb3N0IiwiYXV0aE9wdGlvbnMiLCJHRVQiLCJyZXEiLCJwYXJhbXMiLCJpc01vbmdvSWQiLCJ0ZXN0Iiwic2x1ZyIsInBvc3QiLCJmaW5kT25lIiwiJG9yIiwiX2lkIiwiUmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiUFVUIiwic2Vzc2lvbiIsImF1dGhvciIsInVzZXIiLCJlbWFpbCIsImJvZHkiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsInNhdmUiLCJERUxFVEUiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/[slug]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n\n\n// import { authOptions } from \"@/lib/auth\";\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (!user) return null;\n                    const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(credentials.password, user.password);\n                    if (!isValid) return null;\n                    return {\n                        id: user._id.toString(),\n                        email: user.email\n                    };\n                } catch (err) {\n                    console.log(\"Auth error:\", err);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRTtBQUNwQztBQUM5Qiw0Q0FBNEM7QUFDRjtBQUNUO0FBRTFCLE1BQU1JLGNBQWM7SUFDekJDLFdBQVc7UUFDVEwsMkVBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBRU5DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBRUEsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSTtvQkFDRixNQUFNTCx1REFBU0E7b0JBRWYsTUFBTVcsT0FBTyxNQUFNVixvREFBSUEsQ0FBQ1csT0FBTyxDQUFDO3dCQUM5Qk4sT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7b0JBRUEsSUFBSSxDQUFDSyxNQUFNLE9BQU87b0JBRWxCLE1BQU1FLFVBQVUsTUFBTWQsd0RBQWMsQ0FDbENNLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtGLFFBQVE7b0JBR2YsSUFBSSxDQUFDSSxTQUFTLE9BQU87b0JBRXJCLE9BQU87d0JBQ0xFLElBQUlKLEtBQUtLLEdBQUcsQ0FBQ0MsUUFBUTt3QkFDckJYLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ25CO2dCQUNGLEVBQUUsT0FBT1ksS0FBSztvQkFDWkMsUUFBUUMsR0FBRyxDQUFDLGVBQWVGO29CQUMzQixPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtLQUNEO0lBRURHLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBRUFDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBRUFDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1wbGF0Zm9ybS8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG4vLyBpbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcblxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcblxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcblxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07Il0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJjb25uZWN0REIiLCJVc2VyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJpc1ZhbGlkIiwiY29tcGFyZSIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) throw new Error(\"Missing MongoDB URI\");\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose)=>mongoose);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYSxNQUFNLElBQUlHLE1BQU07QUFFbEMsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRU8sZUFBZUM7SUFDcEIsSUFBSUosT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFFbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFVLElBQUksQ0FBQyxDQUFDWCxXQUFhQTtJQUNwRTtJQUVBSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1wbGF0Zm9ybS8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIE1vbmdvREIgVVJJXCIpO1xuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSkudGhlbigobW9uZ29vc2UpID0+IG1vbmdvb3NlKTtcbiAgfVxuXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: String,\n    slug: {\n        type: String,\n        unique: true\n    },\n    content: String,\n    author: String,\n    image: String,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", PostSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxPQUFPQztJQUNQQyxNQUFNO1FBQ0pDLE1BQU1GO1FBQ05HLFFBQVE7SUFDVjtJQUNBQyxTQUFTSjtJQUNUSyxRQUFRTDtJQUNSTSxPQUFPTjtJQUNQTyxXQUFXO1FBQUVMLE1BQU1NO1FBQU1DLFNBQVNELEtBQUtFLEdBQUc7SUFBQztBQUM3QztBQUVBLGlFQUFlZCx3REFBZSxDQUFDZ0IsSUFBSSxJQUFJaEIscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1wbGF0Zm9ybS8uL21vZGVscy9Qb3N0LmpzPzQ2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBQb3N0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiBTdHJpbmcsXG4gIHNsdWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBjb250ZW50OiBTdHJpbmcsXG4gIGF1dGhvcjogU3RyaW5nLFxuICBpbWFnZTogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUG9zdCB8fCBtb25nb29zZS5tb2RlbChcIlBvc3RcIiwgUG9zdFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUG9zdFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwiU3RyaW5nIiwic2x1ZyIsInR5cGUiLCJ1bmlxdWUiLCJjb250ZW50IiwiYXV0aG9yIiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIm1vZGVscyIsIlBvc3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Post.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkosTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0FBQ0YsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRixpRUFBZVQsd0RBQWUsQ0FBQ1csSUFBSSxJQUNqQ1gscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1wbGF0Zm9ybS8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fFxuICBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnikhilsainemmikanti%2Fmy-blog%2FBlogging-%2Fblog-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();