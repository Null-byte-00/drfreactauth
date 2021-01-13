/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdrfreactauth"] = self["webpackChunkdrfreactauth"] || []).push([["drfreactauth_frontend_src_translate_js"],{

/***/ "./drfreactauth/frontend/src/translate.js":
/*!************************************************!*\
  !*** ./drfreactauth/frontend/src/translate.js ***!
  \************************************************/
/***/ (() => {

eval("translate = function translate(text, language) {\n  var resp = fetch(\"/translate/\", {\n    method: \"POST\",\n    headers: {\n      'Content-Type': 'application/json',\n      \"Accept-Language\": language\n    },\n    body: JSON.stringify({\n      text: text\n    })\n  });\n  var transtext = JSON.parse(resp.text);\n  return transtext;\n};\n\n//# sourceURL=webpack://drfreactauth/./drfreactauth/frontend/src/translate.js?");

/***/ })

}]);