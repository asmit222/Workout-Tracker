(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{57:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),l=(n(15),n(10)),a=n.n(l),u=n(66);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,o,l=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(d(t)),t}return t=c,(n=[{key:"handleDeleteClick",value:function(e){var t=this;e.preventDefault();var n=this,o=e.target.value;console.log("workout: ",o),Object(u.confirmAlert)({title:"Delete ".concat(o.split(",")[1]," - ").concat(o.split(",")[2]," from history?"),buttons:[{label:"Delete",onClick:function(){console.log("here",[o.split(",")[1],o.split(",")[0],n.props.location.state.getName()]),a.a.post("/deleteWorkout","".concat([o.split(",")[1],o.split(",")[0],n.props.location.state.getName()])).then((function(e){t._isMounted=!0,void 0!==t.props.location.state?a.a.post("/getWorkouts","".concat([n.props.location.state.getName()])).then((function(e){e.data.reverse(),n.setState({data:e.data})}),(function(e){alert(e)})):t.props.history.push("/Home")}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?a.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"previousWorkoutsWrapper"},this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?r.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},r.a.createElement("div",{className:"workoutName is-info"},r.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),r.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),r.a.createElement("div",{className:"scrollContainer2"},r.a.createElement("table",{className:"content is-small table is-bordered"},r.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),r.a.createElement("thead",{id:"workoutheader",className:t.color},r.a.createElement("tr",null,r.a.createElement("th",null,"Workout"),r.a.createElement("th",null,"Sets"),r.a.createElement("th",null,"Reps"),r.a.createElement("th",null,"1"),r.a.createElement("th",null,"2"),r.a.createElement("th",null,"3"),r.a.createElement("th",null,"4"))),r.a.createElement("tbody",{className:t.color},r.a.createElement("tr",null,r.a.createElement("td",null,t.workout1.split(",")[0]),r.a.createElement("td",null,t.workout1.split(",")[1]),r.a.createElement("td",null,t.workout1.split(",")[2]),r.a.createElement("td",null,t.workout1.split(",")[3]),r.a.createElement("td",null,t.workout1.split(",")[4]),r.a.createElement("td",null,t.workout1.split(",")[5]),r.a.createElement("td",null,t.workout1.split(",")[6])),r.a.createElement("tr",null,r.a.createElement("td",null,t.workout2.split(",")[0]),r.a.createElement("td",null,t.workout2.split(",")[1]),r.a.createElement("td",null,t.workout2.split(",")[2]),r.a.createElement("td",null,t.workout2.split(",")[3]),r.a.createElement("td",null,t.workout2.split(",")[4]),r.a.createElement("td",null,t.workout2.split(",")[5]),r.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout3.split(",")[0]),r.a.createElement("td",null,t.workout3.split(",")[1]),r.a.createElement("td",null,t.workout3.split(",")[2]),r.a.createElement("td",null,t.workout3.split(",")[3]),r.a.createElement("td",null,t.workout3.split(",")[4]),r.a.createElement("td",null,t.workout3.split(",")[5]),r.a.createElement("td",null,t.workout3.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout4.split(",")[0]),r.a.createElement("td",null,t.workout4.split(",")[1]),r.a.createElement("td",null,t.workout4.split(",")[2]),r.a.createElement("td",null,t.workout4.split(",")[3]),r.a.createElement("td",null,t.workout4.split(",")[4]),r.a.createElement("td",null,t.workout4.split(",")[5]),r.a.createElement("td",null,t.workout4.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout5.split(",")[0]),r.a.createElement("td",null,t.workout5.split(",")[1]),r.a.createElement("td",null,t.workout5.split(",")[2]),r.a.createElement("td",null,t.workout5.split(",")[3]),r.a.createElement("td",null,t.workout5.split(",")[4]),r.a.createElement("td",null,t.workout5.split(",")[5]),r.a.createElement("td",null,t.workout5.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout6.split(",")[0]),r.a.createElement("td",null,t.workout6.split(",")[1]),r.a.createElement("td",null,t.workout6.split(",")[2]),r.a.createElement("td",null,t.workout6.split(",")[3]),r.a.createElement("td",null,t.workout6.split(",")[4]),r.a.createElement("td",null,t.workout6.split(",")[5]),r.a.createElement("td",null,t.workout6.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout7.split(",")[0]),r.a.createElement("td",null,t.workout7.split(",")[1]),r.a.createElement("td",null,t.workout7.split(",")[2]),r.a.createElement("td",null,t.workout7.split(",")[3]),r.a.createElement("td",null,t.workout7.split(",")[4]),r.a.createElement("td",null,t.workout7.split(",")[5]),r.a.createElement("td",null,t.workout7.split(",")[6])):r.a.createElement("tr",{id:"hide"})))),t.notes.length>0?r.a.createElement("article",{className:"content is-small message notes"},r.a.createElement("div",{id:"notesheader2",className:"message-header"},r.a.createElement("p",null,"Notes")),r.a.createElement("div",{className:"message-body notesBody"},t.notes)):r.a.createElement("div",{id:"hide"}," ")):r.a.createElement("div",{className:"runHistoryContainer"},r.a.createElement("button",{id:"runButtonHistory",className:"button"}),r.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate))})))}}])&&i(t.prototype,n),o&&i(t,o),c}(o.Component);t.default=E},59:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);n(15),n(57);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,o,l=i(s);function s(){return a(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-img"},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"}),r.a.createElement("h2",{className:"subtitle"})))))}}])&&u(t.prototype,n),o&&u(t,o),s}(o.Component);t.default=f},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var o=document.createElementNS(e,"svg");o.setAttribute("id","react-confirm-alert-firm-svg"),o.setAttribute("class","react-confirm-alert-svg"),o.appendChild(n),document.body.appendChild(o)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(u.default.createElement(d,e),t)}(e)};var a=n(0),u=s(a),c=s(n(9)),i=n(11);function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(r=o=function(e){function t(){var e,n,o;m(this,t);for(var r=arguments.length,l=Array(r),a=0;a<r;a++)l[a]=arguments[a];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleClickButton=function(e){e.onClick&&e.onClick(),o.close()},o.handleClickOverlay=function(e){var t=o.props,n=t.closeOnClickOutside,r=t.onClickOutside,l=e.target===o.overlay;n&&l&&(r(),o.close())},o.close=function(){var e=o.props.afterClose;y(),E(),p(e)},o.keyboardClose=function(e){var t=o.props,n=t.closeOnEscape,r=t.onKeypressEscape,l=27===e.keyCode;n&&l&&(r(e),o.close())},o.componentDidMount=function(){document.addEventListener("keydown",o.keyboardClose,!1)},o.componentWillUnmount=function(){document.removeEventListener("keydown",o.keyboardClose,!1),o.props.willUnmount()},o.renderCustomUI=function(){var e=o.props,t=e.title,n=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:r,onClose:o.close})},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.message,r=t.buttons,l=t.childrenElement,a=t.customUI;return u.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},u.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():u.default.createElement("div",{className:"react-confirm-alert-body"},n&&u.default.createElement("h1",null,n),o,l(),u.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,n){return u.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(a.Component),o.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},o.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function E(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=d}}]);