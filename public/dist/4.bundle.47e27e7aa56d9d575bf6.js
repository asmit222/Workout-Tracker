(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{57:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),o=(n(15),n(10)),a=n.n(o),u=n(66);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,l,o=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(f(t)),t.avgMile=t.avgMile.bind(f(t)),t}return t=c,(n=[{key:"avgMile",value:function(e,t){var n=t.split(":"),l=Number(n[0]),r=Number(n[1]);return(Number(n[2])+60*r+60*l*60)/e/60}},{key:"handleDeleteClick",value:function(e){var t=this;e.preventDefault();var n=this,l=e.target.value;console.log("workout: ",l),Object(u.confirmAlert)({title:"Delete ".concat(l.split(",")[1]," - ").concat(l.split(",")[2]," from history?"),buttons:[{label:"Delete",onClick:function(){console.log("here",[l.split(",")[1],l.split(",")[0],n.props.location.state.getName()]),a.a.post("/deleteWorkout","".concat([l.split(",")[1],l.split(",")[0],n.props.location.state.getName()])).then((function(e){t._isMounted=!0,void 0!==t.props.location.state?a.a.post("/getWorkouts","".concat([n.props.location.state.getName()])).then((function(e){e.data.reverse(),n.setState({data:e.data})}),(function(e){alert(e)})):t.props.history.push("/Home")}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?a.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"previousWorkoutsWrapper"},this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?r.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},r.a.createElement("div",{className:"workoutName is-info"},r.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),r.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),r.a.createElement("div",{className:"scrollContainer2"},r.a.createElement("table",{className:"content is-small table is-bordered"},r.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),r.a.createElement("thead",{id:"workoutheader",className:t.color},r.a.createElement("tr",null,r.a.createElement("th",null,"Workout"),r.a.createElement("th",null,"Sets"),r.a.createElement("th",null,"Reps"),r.a.createElement("th",null,"1"),r.a.createElement("th",null,"2"),r.a.createElement("th",null,"3"),r.a.createElement("th",null,"4"))),r.a.createElement("tbody",{className:t.color},r.a.createElement("tr",null,r.a.createElement("td",null,t.workout1.split(",")[0]),r.a.createElement("td",null,t.workout1.split(",")[1]),r.a.createElement("td",null,t.workout1.split(",")[2]),r.a.createElement("td",null,t.workout1.split(",")[3]),r.a.createElement("td",null,t.workout1.split(",")[4]),r.a.createElement("td",null,t.workout1.split(",")[5]),r.a.createElement("td",null,t.workout1.split(",")[6])),r.a.createElement("tr",null,r.a.createElement("td",null,t.workout2.split(",")[0]),r.a.createElement("td",null,t.workout2.split(",")[1]),r.a.createElement("td",null,t.workout2.split(",")[2]),r.a.createElement("td",null,t.workout2.split(",")[3]),r.a.createElement("td",null,t.workout2.split(",")[4]),r.a.createElement("td",null,t.workout2.split(",")[5]),r.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout3.split(",")[0]),r.a.createElement("td",null,t.workout3.split(",")[1]),r.a.createElement("td",null,t.workout3.split(",")[2]),r.a.createElement("td",null,t.workout3.split(",")[3]),r.a.createElement("td",null,t.workout3.split(",")[4]),r.a.createElement("td",null,t.workout3.split(",")[5]),r.a.createElement("td",null,t.workout3.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout4.split(",")[0]),r.a.createElement("td",null,t.workout4.split(",")[1]),r.a.createElement("td",null,t.workout4.split(",")[2]),r.a.createElement("td",null,t.workout4.split(",")[3]),r.a.createElement("td",null,t.workout4.split(",")[4]),r.a.createElement("td",null,t.workout4.split(",")[5]),r.a.createElement("td",null,t.workout4.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout5.split(",")[0]),r.a.createElement("td",null,t.workout5.split(",")[1]),r.a.createElement("td",null,t.workout5.split(",")[2]),r.a.createElement("td",null,t.workout5.split(",")[3]),r.a.createElement("td",null,t.workout5.split(",")[4]),r.a.createElement("td",null,t.workout5.split(",")[5]),r.a.createElement("td",null,t.workout5.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout6.split(",")[0]),r.a.createElement("td",null,t.workout6.split(",")[1]),r.a.createElement("td",null,t.workout6.split(",")[2]),r.a.createElement("td",null,t.workout6.split(",")[3]),r.a.createElement("td",null,t.workout6.split(",")[4]),r.a.createElement("td",null,t.workout6.split(",")[5]),r.a.createElement("td",null,t.workout6.split(",")[6])):r.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?r.a.createElement("tr",null,r.a.createElement("td",null,t.workout7.split(",")[0]),r.a.createElement("td",null,t.workout7.split(",")[1]),r.a.createElement("td",null,t.workout7.split(",")[2]),r.a.createElement("td",null,t.workout7.split(",")[3]),r.a.createElement("td",null,t.workout7.split(",")[4]),r.a.createElement("td",null,t.workout7.split(",")[5]),r.a.createElement("td",null,t.workout7.split(",")[6])):r.a.createElement("tr",{id:"hide"})))),t.notes.length>0?r.a.createElement("article",{className:"content is-small message notes"},r.a.createElement("div",{id:"notesheader2",className:"message-header"},r.a.createElement("p",null,"Notes")),r.a.createElement("div",{className:"message-body notesBody"},t.notes)):r.a.createElement("div",{id:"hide"}," ")):r.a.createElement("div",{className:"runHistoryContainer"},r.a.createElement("button",{id:"runButtonHistory",className:"button"}),r.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate),r.a.createElement("div",null,r.a.createElement("span",{className:"milesAndTimeSpan"},"miles: "),r.a.createElement("span",{className:"milesandtimedata"},t.workout1)),r.a.createElement("div",null,r.a.createElement("span",{className:"milesAndTimeSpan"},"time: "),r.a.createElement("span",{className:"milesandtimedata"},t.workout2)),r.a.createElement("div",null,r.a.createElement("span",{className:"milesAndTimeSpan"},"avg mile: "),r.a.createElement("span",{className:"milesandtimedata"},e.avgMile(t.workout1,t.workout2))))})))}}])&&i(t.prototype,n),l&&i(t,l),c}(l.Component);t.default=E},59:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l);n(15),n(57);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,l,o=i(s);function s(){return a(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-img"},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"}),r.a.createElement("h2",{className:"subtitle"})))))}}])&&u(t.prototype,n),l&&u(t,l),s}(l.Component);t.default=d},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var l=document.createElementNS(e,"svg");l.setAttribute("id","react-confirm-alert-firm-svg"),l.setAttribute("class","react-confirm-alert-svg"),l.appendChild(n),document.body.appendChild(l)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(u.default.createElement(f,e),t)}(e)};var a=n(0),u=s(a),c=s(n(9)),i=n(11);function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(r=l=function(e){function t(){var e,n,l;m(this,t);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=l=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),l.handleClickButton=function(e){e.onClick&&e.onClick(),l.close()},l.handleClickOverlay=function(e){var t=l.props,n=t.closeOnClickOutside,r=t.onClickOutside,o=e.target===l.overlay;n&&o&&(r(),l.close())},l.close=function(){var e=l.props.afterClose;y(),E(),p(e)},l.keyboardClose=function(e){var t=l.props,n=t.closeOnEscape,r=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(r(e),l.close())},l.componentDidMount=function(){document.addEventListener("keydown",l.keyboardClose,!1)},l.componentWillUnmount=function(){document.removeEventListener("keydown",l.keyboardClose,!1),l.props.willUnmount()},l.renderCustomUI=function(){var e=l.props,t=e.title,n=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:r,onClose:l.close})},d(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,l=t.message,r=t.buttons,o=t.childrenElement,a=t.customUI;return u.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},u.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():u.default.createElement("div",{className:"react-confirm-alert-body"},n&&u.default.createElement("h1",null,n),l,o(),u.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,n){return u.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(a.Component),l.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},l.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function E(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f}}]);