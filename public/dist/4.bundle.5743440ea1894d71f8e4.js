(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{421:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r);n(18),n(71);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var l=m(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,r,o=i(s);function s(){return a(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return l.a.createElement("div",{className:"bg-img"},l.a.createElement("section",{className:"hero"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"}),l.a.createElement("h2",{className:"subtitle"})))))}}])&&u(t.prototype,n),r&&u(t,r),s}(r.Component);t.default=d},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(u.default.createElement(f,e),t)}(e)};var a=n(0),u=s(a),c=s(n(10)),i=n(13);function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(l=r=function(e){function t(){var e,n,r;m(this,t);for(var l=arguments.length,o=Array(l),a=0;a<l;a++)o[a]=arguments[a];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,l=t.onClickOutside,o=e.target===r.overlay;n&&o&&(l(),r.close())},r.close=function(){var e=r.props.afterClose;y(),E(),p(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,l=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(l(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,l=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:l,onClose:r.close})},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,l=t.buttons,o=t.childrenElement,a=t.customUI;return u.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},u.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():u.default.createElement("div",{className:"react-confirm-alert-body"},n&&u.default.createElement("h1",null,n),r,o(),u.default.createElement("div",{className:"react-confirm-alert-button-group"},l.map((function(t,n){return u.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(a.Component),r.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},l);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function E(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f},71:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),o=(n(18),n(12)),a=n.n(o),u=n(70);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var l=p(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,r,o=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(f(t)),t.avgMile=t.avgMile.bind(f(t)),t.minTommss=t.minTommss.bind(f(t)),t}return t=c,(n=[{key:"minTommss",value:function(e){var t=e<0?"-":"",n=Math.floor(Math.abs(e)),r=Math.floor(60*Math.abs(e)%60);return t+(n<10?"0":"")+n+":"+(r<10?"0":"")+r}},{key:"avgMile",value:function(e,t){var n=t.split(":"),r=Number(n[0]),l=Number(n[1]),o=(Number(n[2])+60*l+60*r*60)/e/60;return this.minTommss(o)}},{key:"handleDeleteClick",value:function(e){var t=e.target.value;console.log("workout: ",t),Object(u.confirmAlert)({})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?a.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"previousWorkoutsWrapper"},this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?l.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},l.a.createElement("div",{className:"workoutName is-info"},l.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),l.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),l.a.createElement("div",{className:"scrollContainer2"},l.a.createElement("table",{className:"content is-small table is-bordered"},l.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),l.a.createElement("thead",{id:"workoutheader",className:t.color},l.a.createElement("tr",null,l.a.createElement("th",null,"Workout"),l.a.createElement("th",null,"Sets"),l.a.createElement("th",null,"Reps"),l.a.createElement("th",null,"1"),l.a.createElement("th",null,"2"),l.a.createElement("th",null,"3"),l.a.createElement("th",null,"4"))),l.a.createElement("tbody",{className:t.color},l.a.createElement("tr",null,l.a.createElement("td",null,t.workout1.split(",")[0]),l.a.createElement("td",null,t.workout1.split(",")[1]),l.a.createElement("td",null,t.workout1.split(",")[2]),l.a.createElement("td",null,t.workout1.split(",")[3]),l.a.createElement("td",null,t.workout1.split(",")[4]),l.a.createElement("td",null,t.workout1.split(",")[5]),l.a.createElement("td",null,t.workout1.split(",")[6])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout2.split(",")[0]),l.a.createElement("td",null,t.workout2.split(",")[1]),l.a.createElement("td",null,t.workout2.split(",")[2]),l.a.createElement("td",null,t.workout2.split(",")[3]),l.a.createElement("td",null,t.workout2.split(",")[4]),l.a.createElement("td",null,t.workout2.split(",")[5]),l.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?l.a.createElement("tr",null,l.a.createElement("td",null,t.workout3.split(",")[0]),l.a.createElement("td",null,t.workout3.split(",")[1]),l.a.createElement("td",null,t.workout3.split(",")[2]),l.a.createElement("td",null,t.workout3.split(",")[3]),l.a.createElement("td",null,t.workout3.split(",")[4]),l.a.createElement("td",null,t.workout3.split(",")[5]),l.a.createElement("td",null,t.workout3.split(",")[6])):l.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?l.a.createElement("tr",null,l.a.createElement("td",null,t.workout4.split(",")[0]),l.a.createElement("td",null,t.workout4.split(",")[1]),l.a.createElement("td",null,t.workout4.split(",")[2]),l.a.createElement("td",null,t.workout4.split(",")[3]),l.a.createElement("td",null,t.workout4.split(",")[4]),l.a.createElement("td",null,t.workout4.split(",")[5]),l.a.createElement("td",null,t.workout4.split(",")[6])):l.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?l.a.createElement("tr",null,l.a.createElement("td",null,t.workout5.split(",")[0]),l.a.createElement("td",null,t.workout5.split(",")[1]),l.a.createElement("td",null,t.workout5.split(",")[2]),l.a.createElement("td",null,t.workout5.split(",")[3]),l.a.createElement("td",null,t.workout5.split(",")[4]),l.a.createElement("td",null,t.workout5.split(",")[5]),l.a.createElement("td",null,t.workout5.split(",")[6])):l.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?l.a.createElement("tr",null,l.a.createElement("td",null,t.workout6.split(",")[0]),l.a.createElement("td",null,t.workout6.split(",")[1]),l.a.createElement("td",null,t.workout6.split(",")[2]),l.a.createElement("td",null,t.workout6.split(",")[3]),l.a.createElement("td",null,t.workout6.split(",")[4]),l.a.createElement("td",null,t.workout6.split(",")[5]),l.a.createElement("td",null,t.workout6.split(",")[6])):l.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?l.a.createElement("tr",null,l.a.createElement("td",null,t.workout7.split(",")[0]),l.a.createElement("td",null,t.workout7.split(",")[1]),l.a.createElement("td",null,t.workout7.split(",")[2]),l.a.createElement("td",null,t.workout7.split(",")[3]),l.a.createElement("td",null,t.workout7.split(",")[4]),l.a.createElement("td",null,t.workout7.split(",")[5]),l.a.createElement("td",null,t.workout7.split(",")[6])):l.a.createElement("tr",{id:"hide"})))),t.notes.length>0?l.a.createElement("article",{className:"content is-small message notes"},l.a.createElement("div",{id:"notesheader2",className:"message-header"},l.a.createElement("p",null,"Notes")),l.a.createElement("div",{className:"message-body notesBody"},t.notes)):l.a.createElement("div",{id:"hide"}," ")):l.a.createElement("div",{className:"runHistoryContainer"},l.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),l.a.createElement("button",{id:"runButtonHistory",className:"button"}),l.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate),l.a.createElement("div",null,l.a.createElement("span",{className:"milesAndTimeSpan"},"miles: "),l.a.createElement("span",{className:"milesandtimedata"},t.workout1)),l.a.createElement("div",null,l.a.createElement("span",{className:"milesAndTimeSpan"},"time: "),l.a.createElement("span",{className:"milesandtimedata"},t.workout2)),l.a.createElement("div",null,l.a.createElement("span",{className:"milesAndTimeSpan"},"avg mile: "),l.a.createElement("span",{className:"milesandtimedata"},e.avgMile(t.workout1,t.workout2))))})))}}])&&i(t.prototype,n),r&&i(t,r),c}(r.Component);t.default=E}}]);