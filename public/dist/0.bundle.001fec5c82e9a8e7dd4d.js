(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/src/components/previousworkouts.js":
/*!***************************************************!*\
  !*** ./client/src/components/previousworkouts.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ \"./client/App.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-confirm-alert */ \"./node_modules/react-confirm-alert/lib/index.js\");\n/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar Previousworkouts = /*#__PURE__*/function (_Component) {\n  _inherits(Previousworkouts, _Component);\n\n  var _super = _createSuper(Previousworkouts);\n\n  function Previousworkouts(props) {\n    var _this;\n\n    _classCallCheck(this, Previousworkouts);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      name: \"\",\n      data: []\n    };\n    _this.handleDeleteClick = _this.handleDeleteClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Previousworkouts, [{\n    key: \"handleDeleteClick\",\n    value: function handleDeleteClick(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      var thisBind = this;\n      var workout = e.target.value;\n      console.log(\"workout: \", workout);\n      Object(react_confirm_alert__WEBPACK_IMPORTED_MODULE_3__[\"confirmAlert\"])({\n        title: \"Delete \".concat(workout.split(\",\")[1], \" - \").concat(workout.split(\",\")[2], \" from history?\"),\n        buttons: [{\n          label: \"Delete\",\n          onClick: function onClick() {\n            console.log(\"here\", [workout.split(\",\")[1], workout.split(\",\")[0], thisBind.props.location.state.getName()]);\n            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/deleteWorkout\", \"\".concat([workout.split(\",\")[1], workout.split(\",\")[0], thisBind.props.location.state.getName()])).then(function (response) {\n              _this2._isMounted = true;\n\n              if (_this2.props.location.state !== undefined) {\n                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/getWorkouts\", \"\".concat([thisBind.props.location.state.getName()])).then(function (response) {\n                  response.data.reverse();\n                  thisBind.setState({\n                    data: response.data\n                  });\n                }, function (error) {\n                  alert(error);\n                });\n              } else {\n                _this2.props.history.push(\"/Home\");\n              }\n            }, function (error) {\n              alert(error);\n            });\n          }\n        }, {\n          label: \"Cancel\",\n          onClick: function onClick() {\n            return console.log(\"Click No\");\n          }\n        }]\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      this._isMounted = true;\n      var thisBind = this;\n\n      if (this.props.location.state !== undefined) {\n        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/getWorkouts\", \"\".concat([thisBind.props.location.state.getName()])).then(function (response) {\n          response.data.reverse();\n          thisBind.setState({\n            data: response.data\n          });\n        }, function (error) {\n          alert(error);\n        });\n      } else {\n        this.props.history.push(\"/Home\");\n      }\n\n      setTimeout(function () {\n        return console.log(\"data:\", _this3.state.data);\n      }, 1000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"previousWorkoutsWrapper\"\n      }, this.state.data.map(function (workout) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"previousContainer previousWorkout forwardInAnimation\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"workoutName is-info\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, workout.workoutPlan.slice(1, workout.workoutPlan.length - 1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          value: [workout.id, workout.workoutPlan.slice(1, workout.workoutPlan.length - 1), workout.workoutDate],\n          onClick: _this4.handleDeleteClick,\n          className: \"delete deleteButtonHistory is-small \"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"scrollContainer2\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n          className: \"content is-small table is-bordered\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n          className: \"dateaboveprev\"\n        }, workout.workoutDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n          id: \"workoutheader\",\n          className: workout.color\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Workout\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Sets\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Reps\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"4\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", {\n          className: workout.color\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout1.split(\",\")[6])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout2.split(\",\")[6])), workout.workout3.split(\",\")[0] !== \" \" && workout.workout3.split(\",\")[0] !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout3.split(\",\")[6])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          id: \"hide\"\n        }), workout.workout4.split(\",\")[0] !== \" \" && workout.workout3.split(\",\")[0] !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout4.split(\",\")[6])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          id: \"hide\"\n        }), workout.workout5.split(\",\")[0] !== \" \" && workout.workout3.split(\",\")[0] !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout5.split(\",\")[6])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          id: \"hide\"\n        }), workout.workout6.split(\",\")[0] !== \" \" && workout.workout3.split(\",\")[0] !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout6.split(\",\")[6])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          id: \"hide\"\n        }), workout.workout7.split(\",\")[0] !== \" \" && workout.workout3.split(\",\")[0] !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, workout.workout7.split(\",\")[6])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          id: \"hide\"\n        })))), workout.notes.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n          className: \"content is-small message notes\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"notesheader2\",\n          className: \"message-header\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Notes\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"message-body notesBody\"\n        }, workout.notes)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"hide\"\n        }, \" \"));\n      }));\n    }\n  }]);\n\n  return Previousworkouts;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Previousworkouts);\n\n//# sourceURL=webpack:///./client/src/components/previousworkouts.js?");

/***/ })

}]);