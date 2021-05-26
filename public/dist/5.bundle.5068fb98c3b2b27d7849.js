(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,u.render)(i.default.createElement(f,e),t)}(e)};var l=n(0),i=s(l),c=s(n(11)),u=n(13);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(o=r=function(e){function t(){var e,n,r;d(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,o=t.onClickOutside,a=e.target===r.overlay;n&&a&&(o(),r.close())},r.close=function(){var e=r.props.afterClose;v(),h(),p(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,o=t.onKeypressEscape,a=27===e.keyCode;n&&a&&(o(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,o=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:o,onClose:r.close})},m(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,o=t.buttons,a=t.childrenElement,l=t.customUI;return i.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},i.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():i.default.createElement("div",{className:"react-confirm-alert-body"},n&&i.default.createElement("h1",null,n),r,a(),i.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map((function(t,n){return i.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(l.Component),r.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function h(){var e=document.getElementById("react-confirm-alert");e&&((0,u.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function v(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f},71:function(e,t,n){var r=n(72),o=n(78);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},72:function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function i(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var d=i(s),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(l[d].references++,l[d].updater(m)):l.push({identifier:s,updater:v(m,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=p||(p=u(t)),r=m.bind(null,n,a,!1),o=m.bind(null,n,a,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);l[o].references--}for(var a=c(e,t),u=0;u<n.length;u++){var s=i(n[u]);0===l[s].references&&(l[s].updater(),l.splice(s,1))}n=a}}}},73:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(l=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var l,i,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},74:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(18),n(7)),l=n.n(a),i=n(70);n(71);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,r,a=d(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(f(t)),t.avgMile=t.avgMile.bind(f(t)),t.minTommss=t.minTommss.bind(f(t)),t}return t=c,(n=[{key:"minTommss",value:function(e){var t=e<0?"-":"",n=Math.floor(Math.abs(e)),r=Math.floor(60*Math.abs(e)%60);return t+(n<10?"0":"")+n+":"+(r<10?"0":"")+r}},{key:"avgMile",value:function(e,t){var n=t.split(":"),r=Number(n[0]),o=Number(n[1]),a=(Number(n[2])+60*o+60*r*60)/e/60;return"NaN:NaN"===this.minTommss(a)?"n/a":this.minTommss(a)}},{key:"handleDeleteClick",value:function(e){var t=this;e.preventDefault();var n=this,r=e.target.value;"54634563dfghdfgh43900323"===r.split(",")[1]&&((r=r.split(","))[1]="Run",r=r.join(",")),console.log("workoutt: ",r),Object(i.confirmAlert)({title:"Delete ".concat(r.split(",")[1]," - ").concat(r.split(",")[2]," from history?"),buttons:[{label:"Delete",onClick:function(){console.log("here2",[r.split(",")[1],r.split(",")[0],n.props.location.state.getName(),r.split(",")[2],r.split(",")[3]]),l.a.post("/deleteWorkout","".concat([r.split(",")[1],r.split(",")[0],n.props.location.state.getName(),r.split(",")[2],r.split(",")[3]])).then((function(e){t._isMounted=!0,void 0!==t.props.location.state?l.a.post("/getWorkouts","".concat([n.props.location.state.getName()])).then((function(e){e.data.reverse(),n.setState({data:e.data})}),(function(e){alert(e)})):t.props.history.push("/Home")}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?l.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"previousWorkoutsWrapper"},0===this.state.data.length?o.a.createElement("div",{className:"fadeInAnimationNoWorkoutsYet noWorkoutsYetText"},"No workouts yet"):o.a.createElement("div",{id:"hide"}),this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?o.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},o.a.createElement("div",{className:"workoutName is-info"},o.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),o.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),o.a.createElement("div",{className:"scrollContainer2"},o.a.createElement("table",{className:"content is-small table is-bordered"},o.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),o.a.createElement("thead",{id:"workoutheader",className:t.color},o.a.createElement("tr",null,o.a.createElement("th",null,"Workout"),o.a.createElement("th",null,"Sets"),o.a.createElement("th",null,"Reps"),o.a.createElement("th",null,"1"),o.a.createElement("th",null,"2"),o.a.createElement("th",null,"3"),o.a.createElement("th",null,"4"))),o.a.createElement("tbody",{className:t.color},o.a.createElement("tr",null,o.a.createElement("td",null,t.workout1.split(",")[0]),o.a.createElement("td",null,t.workout1.split(",")[1]),o.a.createElement("td",null,t.workout1.split(",")[2]),o.a.createElement("td",null,t.workout1.split(",")[3]),o.a.createElement("td",null,t.workout1.split(",")[4]),o.a.createElement("td",null,t.workout1.split(",")[5]),o.a.createElement("td",null,t.workout1.split(",")[6])),o.a.createElement("tr",null,o.a.createElement("td",null,t.workout2.split(",")[0]),o.a.createElement("td",null,t.workout2.split(",")[1]),o.a.createElement("td",null,t.workout2.split(",")[2]),o.a.createElement("td",null,t.workout2.split(",")[3]),o.a.createElement("td",null,t.workout2.split(",")[4]),o.a.createElement("td",null,t.workout2.split(",")[5]),o.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout3.split(",")[0]),o.a.createElement("td",null,t.workout3.split(",")[1]),o.a.createElement("td",null,t.workout3.split(",")[2]),o.a.createElement("td",null,t.workout3.split(",")[3]),o.a.createElement("td",null,t.workout3.split(",")[4]),o.a.createElement("td",null,t.workout3.split(",")[5]),o.a.createElement("td",null,t.workout3.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout4.split(",")[0]),o.a.createElement("td",null,t.workout4.split(",")[1]),o.a.createElement("td",null,t.workout4.split(",")[2]),o.a.createElement("td",null,t.workout4.split(",")[3]),o.a.createElement("td",null,t.workout4.split(",")[4]),o.a.createElement("td",null,t.workout4.split(",")[5]),o.a.createElement("td",null,t.workout4.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout5.split(",")[0]),o.a.createElement("td",null,t.workout5.split(",")[1]),o.a.createElement("td",null,t.workout5.split(",")[2]),o.a.createElement("td",null,t.workout5.split(",")[3]),o.a.createElement("td",null,t.workout5.split(",")[4]),o.a.createElement("td",null,t.workout5.split(",")[5]),o.a.createElement("td",null,t.workout5.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout6.split(",")[0]),o.a.createElement("td",null,t.workout6.split(",")[1]),o.a.createElement("td",null,t.workout6.split(",")[2]),o.a.createElement("td",null,t.workout6.split(",")[3]),o.a.createElement("td",null,t.workout6.split(",")[4]),o.a.createElement("td",null,t.workout6.split(",")[5]),o.a.createElement("td",null,t.workout6.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout7.split(",")[0]),o.a.createElement("td",null,t.workout7.split(",")[1]),o.a.createElement("td",null,t.workout7.split(",")[2]),o.a.createElement("td",null,t.workout7.split(",")[3]),o.a.createElement("td",null,t.workout7.split(",")[4]),o.a.createElement("td",null,t.workout7.split(",")[5]),o.a.createElement("td",null,t.workout7.split(",")[6])):o.a.createElement("tr",{id:"hide"})))),t.notes.length>0?o.a.createElement("article",{className:"content is-small message notes"},o.a.createElement("div",{id:"notesheader2",className:"message-header"},o.a.createElement("p",null,"Notes")),o.a.createElement("div",{className:"message-body notesBody"},t.notes)):o.a.createElement("div",{id:"hide"}," ")):o.a.createElement("div",{className:"runHistoryContainer forwardInAnimation"},o.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate,t.workout1,t.workout2],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory2 is-small "}),o.a.createElement("button",{id:"runButtonHistory",className:"button"}),o.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"distance: "),o.a.createElement("span",{className:"milesandtimedata"},t.workout1)),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"time: "),o.a.createElement("span",{className:"milesandtimedata"},1*Number(t.workout2.split(":")[0])!=0?t.workout2:t.workout2.split(":").slice(1).join(":"))),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"avg mile: "),o.a.createElement("span",{className:"milesandtimedata"},e.avgMile(t.workout1,t.workout2))))})))}}])&&u(t.prototype,n),r&&u(t,r),c}(r.Component);t.default=h},78:function(e,t,n){"use strict";n.r(t);var r=n(73),o=n.n(r)()(!1);o.push([e.i,"body.react-confirm-alert-body-element {\n  overflow: hidden;\n}\n\n.react-confirm-alert-blur {\n  filter: url(#gaussian-blur);\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n}\n\n.react-confirm-alert-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n  background: rgba(255, 255, 255, 0.9);\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: center;\n  -ms-align-items: center;\n  align-items: center;\n  opacity: 0;\n  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\n  -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\n  -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\n  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;\n}\n\n.react-confirm-alert-body {\n  font-family: Arial, Helvetica, sans-serif;\n  width: 400px;\n  padding: 30px;\n  text-align: left;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);\n  color: #666;\n}\n\n.react-confirm-alert-svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.react-confirm-alert-body > h1 {\n  margin-top: 0;\n}\n\n.react-confirm-alert-body > h3 {\n  margin: 0;\n  font-size: 16px;\n}\n\n.react-confirm-alert-button-group {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 20px;\n}\n\n.react-confirm-alert-button-group > button {\n  outline: none;\n  background: #333;\n  border: none;\n  display: inline-block;\n  padding: 6px 18px;\n  color: #eee;\n  margin-right: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n@-webkit-keyframes react-confirm-alert-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes react-confirm-alert-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-o-keyframes react-confirm-alert-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes react-confirm-alert-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n",""]),t.default=o}}]);