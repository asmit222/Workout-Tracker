(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-confirm-alert/src/react-confirm-alert.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-confirm-alert/src/react-confirm-alert.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body.react-confirm-alert-body-element {\\n  overflow: hidden;\\n}\\n\\n.react-confirm-alert-blur {\\n  filter: url(#gaussian-blur);\\n  filter: blur(2px);\\n  -webkit-filter: blur(2px);\\n}\\n\\n.react-confirm-alert-overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  z-index: 99;\\n  background: rgba(255, 255, 255, 0.9);\\n  display: -webkit-flex;\\n  display: -moz-flex;\\n  display: -ms-flex;\\n  display: -o-flex;\\n  display: flex;\\n  justify-content: center;\\n  -ms-align-items: center;\\n  align-items: center;\\n  opacity: 0;\\n  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\\n  -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\\n  -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\\n  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\\n}\\n\\n.react-confirm-alert-body {\\n  font-family: Arial, Helvetica, sans-serif;\\n  width: 400px;\\n  padding: 30px;\\n  text-align: left;\\n  background: #fff;\\n  border-radius: 10px;\\n  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);\\n  color: #666;\\n}\\n\\n.react-confirm-alert-svg {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.react-confirm-alert-body > h1 {\\n  margin-top: 0;\\n}\\n\\n.react-confirm-alert-body > h3 {\\n  margin: 0;\\n  font-size: 16px;\\n}\\n\\n.react-confirm-alert-button-group {\\n  display: -webkit-flex;\\n  display: -moz-flex;\\n  display: -ms-flex;\\n  display: -o-flex;\\n  display: flex;\\n  justify-content: flex-start;\\n  margin-top: 20px;\\n}\\n\\n.react-confirm-alert-button-group > button {\\n  outline: none;\\n  background: #333;\\n  border: none;\\n  display: inline-block;\\n  padding: 6px 18px;\\n  color: #eee;\\n  margin-right: 10px;\\n  border-radius: 5px;\\n  font-size: 12px;\\n  cursor: pointer;\\n}\\n\\n@-webkit-keyframes react-confirm-alert-fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@-moz-keyframes react-confirm-alert-fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@-o-keyframes react-confirm-alert-fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes react-confirm-alert-fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./node_modules/react-confirm-alert/src/react-confirm-alert.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/react-confirm-alert/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-confirm-alert/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class, _temp2;\n\nexports.confirmAlert = confirmAlert;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ReactConfirmAlert = (_temp2 = _class = function (_Component) {\n  _inherits(ReactConfirmAlert, _Component);\n\n  function ReactConfirmAlert() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ReactConfirmAlert);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactConfirmAlert.__proto__ || Object.getPrototypeOf(ReactConfirmAlert)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickButton = function (button) {\n      if (button.onClick) button.onClick();\n      _this.close();\n    }, _this.handleClickOverlay = function (e) {\n      var _this$props = _this.props,\n          closeOnClickOutside = _this$props.closeOnClickOutside,\n          onClickOutside = _this$props.onClickOutside;\n\n      var isClickOutside = e.target === _this.overlay;\n\n      if (closeOnClickOutside && isClickOutside) {\n        onClickOutside();\n        _this.close();\n      }\n    }, _this.close = function () {\n      var afterClose = _this.props.afterClose;\n\n      removeBodyClass();\n      removeElementReconfirm();\n      removeSVGBlurReconfirm(afterClose);\n    }, _this.keyboardClose = function (event) {\n      var _this$props2 = _this.props,\n          closeOnEscape = _this$props2.closeOnEscape,\n          onKeypressEscape = _this$props2.onKeypressEscape;\n\n      var isKeyCodeEscape = event.keyCode === 27;\n\n      if (closeOnEscape && isKeyCodeEscape) {\n        onKeypressEscape(event);\n        _this.close();\n      }\n    }, _this.componentDidMount = function () {\n      document.addEventListener('keydown', _this.keyboardClose, false);\n    }, _this.componentWillUnmount = function () {\n      document.removeEventListener('keydown', _this.keyboardClose, false);\n      _this.props.willUnmount();\n    }, _this.renderCustomUI = function () {\n      var _this$props3 = _this.props,\n          title = _this$props3.title,\n          message = _this$props3.message,\n          buttons = _this$props3.buttons,\n          customUI = _this$props3.customUI;\n\n      var dataCustomUI = {\n        title: title,\n        message: message,\n        buttons: buttons,\n        onClose: _this.close\n      };\n\n      return customUI(dataCustomUI);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(ReactConfirmAlert, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          title = _props.title,\n          message = _props.message,\n          buttons = _props.buttons,\n          childrenElement = _props.childrenElement,\n          customUI = _props.customUI;\n\n\n      return _react2.default.createElement(\n        'div',\n        {\n          className: 'react-confirm-alert-overlay',\n          ref: function ref(dom) {\n            return _this2.overlay = dom;\n          },\n          onClick: this.handleClickOverlay\n        },\n        _react2.default.createElement(\n          'div',\n          { className: 'react-confirm-alert' },\n          customUI ? this.renderCustomUI() : _react2.default.createElement(\n            'div',\n            { className: 'react-confirm-alert-body' },\n            title && _react2.default.createElement(\n              'h1',\n              null,\n              title\n            ),\n            message,\n            childrenElement(),\n            _react2.default.createElement(\n              'div',\n              { className: 'react-confirm-alert-button-group' },\n              buttons.map(function (button, i) {\n                return _react2.default.createElement(\n                  'button',\n                  { key: i, onClick: function onClick() {\n                      return _this2.handleClickButton(button);\n                    }, className: button.className },\n                  button.label\n                );\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ReactConfirmAlert;\n}(_react.Component), _class.propTypes = {\n  title: _propTypes2.default.string,\n  message: _propTypes2.default.string,\n  buttons: _propTypes2.default.array.isRequired,\n  childrenElement: _propTypes2.default.func,\n  customUI: _propTypes2.default.func,\n  closeOnClickOutside: _propTypes2.default.bool,\n  closeOnEscape: _propTypes2.default.bool,\n  willUnmount: _propTypes2.default.func,\n  afterClose: _propTypes2.default.func,\n  onClickOutside: _propTypes2.default.func,\n  onKeypressEscape: _propTypes2.default.func\n}, _class.defaultProps = {\n  buttons: [{\n    label: 'Cancel',\n    onClick: function onClick() {\n      return null;\n    },\n    className: null\n  }, {\n    label: 'Confirm',\n    onClick: function onClick() {\n      return null;\n    },\n    className: null\n  }],\n  childrenElement: function childrenElement() {\n    return null;\n  },\n  closeOnClickOutside: true,\n  closeOnEscape: true,\n  willUnmount: function willUnmount() {\n    return null;\n  },\n  afterClose: function afterClose() {\n    return null;\n  },\n  onClickOutside: function onClickOutside() {\n    return null;\n  },\n  onKeypressEscape: function onKeypressEscape() {\n    return null;\n  }\n}, _temp2);\nexports.default = ReactConfirmAlert;\n\n\nfunction createSVGBlurReconfirm() {\n  // If has svg ignore to create the svg\n  var svg = document.getElementById('react-confirm-alert-firm-svg');\n  if (svg) return;\n  var svgNS = 'http://www.w3.org/2000/svg';\n  var feGaussianBlur = document.createElementNS(svgNS, 'feGaussianBlur');\n  feGaussianBlur.setAttribute('stdDeviation', '0.3');\n\n  var filter = document.createElementNS(svgNS, 'filter');\n  filter.setAttribute('id', 'gaussian-blur');\n  filter.appendChild(feGaussianBlur);\n\n  var svgElem = document.createElementNS(svgNS, 'svg');\n  svgElem.setAttribute('id', 'react-confirm-alert-firm-svg');\n  svgElem.setAttribute('class', 'react-confirm-alert-svg');\n  svgElem.appendChild(filter);\n\n  document.body.appendChild(svgElem);\n}\n\nfunction removeSVGBlurReconfirm(afterClose) {\n  var svg = document.getElementById('react-confirm-alert-firm-svg');\n  svg.parentNode.removeChild(svg);\n  document.body.children[0].classList.remove('react-confirm-alert-blur');\n  afterClose();\n}\n\nfunction createElementReconfirm(properties) {\n  var divTarget = document.getElementById('react-confirm-alert');\n  if (divTarget) {\n    // Rerender - the mounted ReactConfirmAlert\n    (0, _reactDom.render)(_react2.default.createElement(ReactConfirmAlert, properties), divTarget);\n  } else {\n    // Mount the ReactConfirmAlert component\n    document.body.children[0].classList.add('react-confirm-alert-blur');\n    divTarget = document.createElement('div');\n    divTarget.id = 'react-confirm-alert';\n    document.body.appendChild(divTarget);\n    (0, _reactDom.render)(_react2.default.createElement(ReactConfirmAlert, properties), divTarget);\n  }\n}\n\nfunction removeElementReconfirm() {\n  var target = document.getElementById('react-confirm-alert');\n  if (target) {\n    (0, _reactDom.unmountComponentAtNode)(target);\n    target.parentNode.removeChild(target);\n  }\n}\n\nfunction addBodyClass() {\n  document.body.classList.add('react-confirm-alert-body-element');\n}\n\nfunction removeBodyClass() {\n  document.body.classList.remove('react-confirm-alert-body-element');\n}\n\nfunction confirmAlert(properties) {\n  addBodyClass();\n  createSVGBlurReconfirm();\n  createElementReconfirm(properties);\n}\n\n//# sourceURL=webpack:///./node_modules/react-confirm-alert/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-confirm-alert/src/react-confirm-alert.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-confirm-alert/src/react-confirm-alert.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./react-confirm-alert.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/react-confirm-alert/src/react-confirm-alert.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./node_modules/react-confirm-alert/src/react-confirm-alert.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

}]);