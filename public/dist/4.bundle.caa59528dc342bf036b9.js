(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{57:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=(n(15),n(10)),a=n.n(l),c=n(66);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,l=m(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(f(t)),t}return t=u,(n=[{key:"handleDeleteClick",value:function(e){var t=this;e.preventDefault();var n=this,r=e.target.value;console.log("workout: ",r),Object(c.confirmAlert)({title:"Delete ".concat(r.split(",")[1]," - ").concat(r.split(",")[2]," from history?"),buttons:[{label:"Delete",onClick:function(){console.log("here",[r.split(",")[1],r.split(",")[0],n.props.location.state.getName()]),a.a.post("/deleteWorkout","".concat([r.split(",")[1],r.split(",")[0],n.props.location.state.getName()])).then((function(e){t._isMounted=!0,void 0!==t.props.location.state?a.a.post("/getWorkouts","".concat([n.props.location.state.getName()])).then((function(e){e.data.reverse(),n.setState({data:e.data})}),(function(e){alert(e)})):t.props.history.push("/Home")}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?a.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"previousWorkoutsWrapper"},this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?o.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},o.a.createElement("div",{className:"workoutName is-info"},o.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),o.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),o.a.createElement("div",{className:"scrollContainer2"},o.a.createElement("table",{className:"content is-small table is-bordered"},o.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),o.a.createElement("thead",{id:"workoutheader",className:t.color},o.a.createElement("tr",null,o.a.createElement("th",null,"Workout"),o.a.createElement("th",null,"Sets"),o.a.createElement("th",null,"Reps"),o.a.createElement("th",null,"1"),o.a.createElement("th",null,"2"),o.a.createElement("th",null,"3"),o.a.createElement("th",null,"4"))),o.a.createElement("tbody",{className:t.color},o.a.createElement("tr",null,o.a.createElement("td",null,t.workout1.split(",")[0]),o.a.createElement("td",null,t.workout1.split(",")[1]),o.a.createElement("td",null,t.workout1.split(",")[2]),o.a.createElement("td",null,t.workout1.split(",")[3]),o.a.createElement("td",null,t.workout1.split(",")[4]),o.a.createElement("td",null,t.workout1.split(",")[5]),o.a.createElement("td",null,t.workout1.split(",")[6])),o.a.createElement("tr",null,o.a.createElement("td",null,t.workout2.split(",")[0]),o.a.createElement("td",null,t.workout2.split(",")[1]),o.a.createElement("td",null,t.workout2.split(",")[2]),o.a.createElement("td",null,t.workout2.split(",")[3]),o.a.createElement("td",null,t.workout2.split(",")[4]),o.a.createElement("td",null,t.workout2.split(",")[5]),o.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout3.split(",")[0]),o.a.createElement("td",null,t.workout3.split(",")[1]),o.a.createElement("td",null,t.workout3.split(",")[2]),o.a.createElement("td",null,t.workout3.split(",")[3]),o.a.createElement("td",null,t.workout3.split(",")[4]),o.a.createElement("td",null,t.workout3.split(",")[5]),o.a.createElement("td",null,t.workout3.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout4.split(",")[0]),o.a.createElement("td",null,t.workout4.split(",")[1]),o.a.createElement("td",null,t.workout4.split(",")[2]),o.a.createElement("td",null,t.workout4.split(",")[3]),o.a.createElement("td",null,t.workout4.split(",")[4]),o.a.createElement("td",null,t.workout4.split(",")[5]),o.a.createElement("td",null,t.workout4.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout5.split(",")[0]),o.a.createElement("td",null,t.workout5.split(",")[1]),o.a.createElement("td",null,t.workout5.split(",")[2]),o.a.createElement("td",null,t.workout5.split(",")[3]),o.a.createElement("td",null,t.workout5.split(",")[4]),o.a.createElement("td",null,t.workout5.split(",")[5]),o.a.createElement("td",null,t.workout5.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout6.split(",")[0]),o.a.createElement("td",null,t.workout6.split(",")[1]),o.a.createElement("td",null,t.workout6.split(",")[2]),o.a.createElement("td",null,t.workout6.split(",")[3]),o.a.createElement("td",null,t.workout6.split(",")[4]),o.a.createElement("td",null,t.workout6.split(",")[5]),o.a.createElement("td",null,t.workout6.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout7.split(",")[0]),o.a.createElement("td",null,t.workout7.split(",")[1]),o.a.createElement("td",null,t.workout7.split(",")[2]),o.a.createElement("td",null,t.workout7.split(",")[3]),o.a.createElement("td",null,t.workout7.split(",")[4]),o.a.createElement("td",null,t.workout7.split(",")[5]),o.a.createElement("td",null,t.workout7.split(",")[6])):o.a.createElement("tr",{id:"hide"})))),t.notes.length>0?o.a.createElement("article",{className:"content is-small message notes"},o.a.createElement("div",{id:"notesheader2",className:"message-header"},o.a.createElement("p",null,"Notes")),o.a.createElement("div",{className:"message-body notesBody"},t.notes)):o.a.createElement("div",{id:"hide"}," ")):o.a.createElement("div",{className:"runHistoryContainer"},o.a.createElement("button",{id:"runButtonHistory",className:"button"}),o.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"miles: "),o.a.createElement("span",{className:"milesandtimedata"},t.workout1)),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"time: "),o.a.createElement("span",{className:"milesandtimedata"},t.workout2)))})))}}])&&i(t.prototype,n),r&&i(t,r),u}(r.Component);t.default=E},59:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(15),n(57);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,r,l=i(s);function s(){return a(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"bg-img"},o.a.createElement("section",{className:"hero"},o.a.createElement("div",{className:"hero-body"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"}),o.a.createElement("h2",{className:"subtitle"})))))}}])&&c(t.prototype,n),r&&c(t,r),s}(r.Component);t.default=d},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(c.default.createElement(f,e),t)}(e)};var a=n(0),c=s(a),u=s(n(9)),i=n(11);function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(o=r=function(e){function t(){var e,n,r;m(this,t);for(var o=arguments.length,l=Array(o),a=0;a<o;a++)l[a]=arguments[a];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,o=t.onClickOutside,l=e.target===r.overlay;n&&l&&(o(),r.close())},r.close=function(){var e=r.props.afterClose;y(),E(),p(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,o=t.onKeypressEscape,l=27===e.keyCode;n&&l&&(o(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,o=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:o,onClose:r.close})},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,o=t.buttons,l=t.childrenElement,a=t.customUI;return c.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},n&&c.default.createElement("h1",null,n),r,l(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map((function(t,n){return c.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(a.Component),r.propTypes={title:u.default.string,message:u.default.string,buttons:u.default.array.isRequired,childrenElement:u.default.func,customUI:u.default.func,closeOnClickOutside:u.default.bool,closeOnEscape:u.default.bool,willUnmount:u.default.func,afterClose:u.default.func,onClickOutside:u.default.func,onKeypressEscape:u.default.func},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function E(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f}}]);