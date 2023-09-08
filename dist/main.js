/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n\n#content {\n    min-width: 1000px;\n}\n\n/*HEADER*/\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 2rem;\n    align-items: center;\n    font-size: 2rem;\n    background-color: #AEC670;\n}\n\n.header-right {\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n\n/*CONTENT */\n.content {\n    padding: 0.5rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 0.5rem;\n    min-height: 400px;\n}\n\n.task-line {\n    display: grid;\n    grid-template-columns: 1fr 3fr 2fr 1fr 1fr;\n    grid-template-rows: 2rem;\n    justify-items: center;\n    align-items: center;\n    font-size: 1.3rem;\n    background-color: #AEC09A;\n    overflow: hidden;\n    cursor: pointer;\n    transition: ease-in 0.1s;\n}\n\n.task-line:hover{\n    transform: scaleY(1.1);\n}\n\n.task-line.low {\n    border-left: 0.5rem solid green;\n}\n\n.task-line.medium {\n    border-left: 0.5rem solid orange;\n}\n\n.task-line.high {\n    border-left: 0.5rem solid red;\n}\n\n.checked,\n.fa-pencil-square,\n.fa-trash {\n    cursor: pointer;\n}\n\n/* DIALOG */\ndialog {\n    width: 600px;\n    height: 400px;\n    border: 0;\n    border-radius: 10px;\n    font-size: 1.5rem;\n    box-shadow: 1px 3px 6px 6px rgba(61, 58, 58, 0.75);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n}\n\n.dialog-header,\n.task-card-header {\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    background-color: #AEC670;\n    font-size: 2rem;\n    padding: 0.5rem 1rem;\n    text-align: end;\n}\n\n.dialog-header i,\n.task-card-header i {\n    cursor: pointer;\n}\n\ninput,\ntextarea {\n    border: none;\n    outline: none;\n    font-size: 1.2rem;\n    resize: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n    padding: 1rem;\n    gap: 0.5rem;\n\n}\n\n.text-inputs {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 2;\n    gap: 0.5rem;\n}\n\n.priority {\n    display: flex;\n    gap: 1rem;\n}\n\n#dua-date,\n.priority-box {\n    border: 1px solid;\n    font-size: 1rem;\n    align-self: center;\n    padding: 0.2rem 0.5rem;\n    cursor: pointer\n}\n\n#dua-date {\n    color: #344C11;\n}\n\n.submit-btn:hover,\n.priority-box:hover,\n.priority-box.active {\n    color: white;\n}\n\n.priority-low {\n    border-color: green;\n    color: green;\n}\n\n.priority-low:hover,\n.priority-low.active {\n    background-color: green;\n}\n\n.priority-medium {\n    border-color: orange;\n    color: orange;\n}\n\n.priority-medium:hover,\n.priority-medium.active {\n    background-color: orange;\n}\n\n\n.priority-high {\n    border-color: red;\n    color: red;\n}\n\n.priority-high:hover,\n.priority-high.active {\n    background-color: red;\n}\n\n\n.submit-btn {\n    margin-right: 2rem;\n    width: fit-content;\n    padding: 0.2rem 0.5rem;\n    align-self: flex-end;\n    background-color: white;\n    cursor: pointer;\n    border-color: #344C11;\n    color: #344C11;\n}\n\n.submit-btn:hover {\n    background-color: #344C11;\n}\n\n/* TASK CARD*/\n\n.task-card{\n    width: 500px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    border-radius: 10px;\n    font-size: 1.5rem;\n    box-shadow: 1px 3px 6px 6px rgba(61, 58, 58, 0.75);\n}\n\n.task-card.remove{\n    display: none;\n}\n\n.task-card-container{\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 0.8rem;\n}\n\n.card-title{\n    align-self: center;\n    font-size: 1.8rem;\n    padding-bottom: 0.5rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dialogFunctions.js":
/*!********************************!*\
  !*** ./src/dialogFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogFunctions: () => (/* binding */ dialogFunctions),\n/* harmony export */   openDialog: () => (/* binding */ openDialog)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\nfunction dialogFunctions() {\n\n    const dialog = document.querySelector('dialog');\n    const form = document.querySelector('#form')\n    const title = document.querySelector('#title');\n    const description = document.querySelector('#description');\n    const date = document.querySelector('#dua-date');\n    const prioritys = document.querySelectorAll('.priority-box');\n    const dialogCloseBtn = document.querySelector('.fa-close');\n\n    prioritys.forEach(priority => {\n        priority.addEventListener('click', (e) => {\n            prioritys.forEach(priority => !priority.classList.remove('active'));\n            e.target.classList.add('active');\n        })\n    })\n\n    function getPriority() {\n        let returnPriority;\n        prioritys.forEach(priority => {\n            if (priority.classList.contains('active')) {\n                returnPriority = priority.innerHTML.toLowerCase();\n                return returnPriority\n            }\n        })\n        return returnPriority\n    }\n\n    function closeDialog() {\n        dialog.close()\n    }\n\n    function newProject(title, description, date, priority) {\n        if(priority === undefined){\n            priority = 'low';\n        }\n        if(date === undefined) return\n \n        return {\n            title: title.value,\n            description: description.value,\n            date: new Date(date.value).toLocaleDateString(),\n            priority: priority,\n            checked: 'false',\n        }\n    }\n\n    form.addEventListener('submit', () => {\n        (0,_projects__WEBPACK_IMPORTED_MODULE_2__.addProject)(newProject(title, description, date, getPriority()))\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createList)();\n    })\n\n    dialogCloseBtn.addEventListener('click', closeDialog)\n}\n\nfunction openDialog(dialog) {\n    dialog.showModal()\n}\n\n\n//# sourceURL=webpack://todo-list/./src/dialogFunctions.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   \"default\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _dialogFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogFunctions */ \"./src/dialogFunctions.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\nfunction dom() {\n    const container = document.querySelector('#content');\n\n    //HEADER\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const headerLeft = document.createElement('div');\n    headerLeft.classList.add('header-left');\n    headerLeft.innerHTML = `TO - DO <i class=\"fa fa-sticky-note\"></i>`;\n\n    const headerRight = document.createElement('div');\n    headerRight.classList.add('header-right');\n    headerRight.innerHTML = `<i class=\"fa fa-plus\"></i>`;\n\n    header.append(headerLeft, headerRight)\n\n    //DIALOG\n    const dialog = document.querySelector('dialog')\n    headerRight.addEventListener('click', () => {\n        ;(0,_dialogFunctions__WEBPACK_IMPORTED_MODULE_0__.openDialog)(dialog)\n    })\n\n    //CONTENT\n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('content-container');\n\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    contentContainer.append(content);\n    container.append(header, contentContainer);\n}\n\n\nfunction createList() {\n    const tasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)()?.map(element => element)\n    const content = document.querySelector('.content');\n    content.innerHTML = \"\";\n\n    const taskCard = document.createElement('div');\n    taskCard.classList.add('task-card', 'remove');\n\n    const taskCardHeader = document.createElement('div');\n    taskCardHeader.classList.add('task-card-header');\n\n    const cardCloseBtn = document.createElement('i');\n    cardCloseBtn.classList.add(\"fa\", \"fa-close\");\n    taskCardHeader.append(cardCloseBtn)\n    cardCloseBtn.addEventListener('click', ()=>{\n        taskCard.innerHTML = \"\";\n        taskCard.classList.add('remove');\n    })\n\n    tasks?.forEach((task, idx) => {\n\n        const taskLine = document.createElement('div');\n        taskLine.classList.add('task-line');\n        \n\n        if (task.priority === 'high') {\n            taskLine.classList.add('high');\n        }\n        else if (task.priority === 'medium') {\n            taskLine.classList.add('medium');\n        }\n        else if (task.priority === 'low') {\n            taskLine.classList.add('low');\n        }\n\n        const checked = document.createElement(\"input\");\n        checked.classList.add('checked');\n        checked.setAttribute(\"type\", \"checkbox\");\n\n        const title = document.createElement('div');\n        title.classList.add('title');\n        title.innerText = task.title;\n        title.addEventListener('click', ()=>{\n            taskCard.innerHTML = \"\";\n            taskCard.classList.remove('remove')\n            taskCard.append(taskCardHeader, showSingleTask(idx))\n        })\n\n        const description = document.createElement('div');\n        description.classList.add('description');\n        description.innerText = task.description;\n\n        const date = document.createElement('div');\n        date.classList.add('date');\n        date.innerText = task.date\n\n        const edit = document.createElement('i');\n        edit.classList.add('fa', 'fa-pencil-square')\n\n        const deleteBtn = document.createElement('i');\n        deleteBtn.classList.add('fa', 'fa-trash')\n        deleteBtn.addEventListener('click', ()=>{\n            ;(0,_projects__WEBPACK_IMPORTED_MODULE_2__.removeProject)(idx)})\n\n        taskLine.append(checked, title, date, edit, deleteBtn);\n        content.append(taskLine, taskCard)\n\n    })\n}\n\nfunction showSingleTask(idx){\n    const tasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)().map(task =>task);\n    const task = tasks[idx]\n\n    const taskCardContainer = document.createElement('div');\n    taskCardContainer.classList.add('task-card-container');\n\n    const cardTitle = document.createElement('div');\n    cardTitle.classList.add('card-title');\n    cardTitle.innerHTML = `<strong>${task.title}`;\n\n    const cardDescription = document.createElement('div');\n    cardDescription.classList.add('card-description');\n    cardDescription.innerHTML = `<strong>Details:</strong> ${task.description}`;\n\n    const cardPriority = document.createElement('div');\n    cardPriority.classList.add('card-priority');\n    cardPriority.innerHTML = `<strong>Priority:</strong> ${task.priority}`;\n\n    const cardDate = document.createElement('div');\n    cardDate.classList.add('card-date');\n    cardDate.innerHTML = `<strong>Due date:</strong> ${task.date}`;\n    \n    taskCardContainer.append(cardTitle, cardDescription, cardPriority, cardDate)\n\n    return taskCardContainer;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _dialogFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogFunctions */ \"./src/dialogFunctions.js\");\n\n\n\n\n\n(0,_projects__WEBPACK_IMPORTED_MODULE_2__.setProjects)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createList)();\n(0,_dialogFunctions__WEBPACK_IMPORTED_MODULE_3__.dialogFunctions)()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearDatas: () => (/* binding */ clearDatas),\n/* harmony export */   getDatas: () => (/* binding */ getDatas),\n/* harmony export */   setData: () => (/* binding */ setData)\n/* harmony export */ });\nfunction getDatas(){\n   return JSON.parse(localStorage.getItem('projects'))\n}\n\nfunction setData(data){\n    localStorage.setItem('projects', JSON.stringify(data))\n}\n\nfunction clearDatas(){\n    localStorage.clear();\n}\n\n//# sourceURL=webpack://todo-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   projectSetting: () => (/* binding */ projectSetting),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   setProjects: () => (/* binding */ setProjects)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\nfunction setProjects() {\n    let projectArray = [];\n\n    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)() === null) {\n        projectArray = [\n            {\n                title: 'Cleaning',\n                description: 'just clean the house pls',\n                date: new Date().toLocaleDateString(),\n                priority: 'low',\n                checked: 'false,'\n            },\n            {\n                title: 'Gym',\n                description: 'arm day',\n                date: new Date().toLocaleDateString(),\n                priority: 'high',\n                checked: 'true',\n            },\n            {\n                title: 'Family time',\n                description: 'play with kids',\n                date: new Date().toLocaleDateString(),\n                priority: 'high',\n                checked: 'false',\n            },\n            {\n                title: 'Walk the doggy',\n                description: 'also dont forget to pick up the shit',\n                date: new Date().toLocaleDateString(),\n                priority: 'medium',\n                checked: 'false',\n            },\n        ]\n        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setData)(projectArray)\n    }\n    else if((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)() !== null){\n        projectArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)();\n    }\n}\n\nfunction addProject(project) {\n    const projectArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)()\n    projectArray.push(project);\n    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setData)(projectArray);\n}\n\nfunction removeProject(idx) {\n    let projectArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)()\n    const newArray = projectArray.filter((project) => project != projectArray[idx]);\n    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setData)(newArray);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createList)();\n}\n\nfunction projectSetting(idx){\n    let projectArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDatas)();\n    reWriteProject(projectArray[idx].title, projectArray[idx].description, projectArray[idx].date, projectArray[idx].priority, projectArray[idx].checked)\n}\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;