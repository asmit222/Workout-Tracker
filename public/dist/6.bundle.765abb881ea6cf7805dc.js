(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var l=document.createElementNS(e,"svg");l.setAttribute("id","react-confirm-alert-firm-svg"),l.setAttribute("class","react-confirm-alert-svg"),l.appendChild(n),document.body.appendChild(l)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(u.default.createElement(p,e),t)}(e)};var r=n(0),u=s(r),c=s(n(10)),i=n(13);function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(o=l=function(e){function t(){var e,n,l;m(this,t);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return n=l=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.handleClickButton=function(e){e.onClick&&e.onClick(),l.close()},l.handleClickOverlay=function(e){var t=l.props,n=t.closeOnClickOutside,o=t.onClickOutside,a=e.target===l.overlay;n&&a&&(o(),l.close())},l.close=function(){var e=l.props.afterClose;k(),E(),f(e)},l.keyboardClose=function(e){var t=l.props,n=t.closeOnEscape,o=t.onKeypressEscape,a=27===e.keyCode;n&&a&&(o(e),l.close())},l.componentDidMount=function(){document.addEventListener("keydown",l.keyboardClose,!1)},l.componentWillUnmount=function(){document.removeEventListener("keydown",l.keyboardClose,!1),l.props.willUnmount()},l.renderCustomUI=function(){var e=l.props,t=e.title,n=e.message,o=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:o,onClose:l.close})},d(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,l=t.message,o=t.buttons,a=t.childrenElement,r=t.customUI;return u.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},u.default.createElement("div",{className:"react-confirm-alert"},r?this.renderCustomUI():u.default.createElement("div",{className:"react-confirm-alert-body"},n&&u.default.createElement("h1",null,n),l,a(),u.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map((function(t,n){return u.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(r.Component),l.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},l.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);function f(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function E(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function k(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=p},71:function(e,t,n){"use strict";n.r(t);var l=n(0),o=n.n(l),a=(n(18),n(12)),r=n.n(a),u=n(70);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,n,l,a=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={name:"",data:[]},t.handleDeleteClick=t.handleDeleteClick.bind(p(t)),t.avgMile=t.avgMile.bind(p(t)),t.minTommss=t.minTommss.bind(p(t)),t}return t=c,(n=[{key:"minTommss",value:function(e){var t=e<0?"-":"",n=Math.floor(Math.abs(e)),l=Math.floor(60*Math.abs(e)%60);return t+(n<10?"0":"")+n+":"+(l<10?"0":"")+l}},{key:"avgMile",value:function(e,t){var n=t.split(":"),l=Number(n[0]),o=Number(n[1]),a=(Number(n[2])+60*o+60*l*60)/e/60;return this.minTommss(a)}},{key:"handleDeleteClick",value:function(e){var t=this,n=this,l=e.target.value;(l=l.split(","))[1]="run",l=l.join(","),console.log("workoutt: ",l),Object(u.confirmAlert)({title:"Delete ".concat(l.split(",")[1]," - ").concat(l.split(",")[2]," from history?"),buttons:[{label:"Delete",onClick:function(){console.log("here",[l.split(",")[1],l.split(",")[0],n.props.location.state.getName()]),r.a.post("/deleteWorkout","".concat([l.split(",")[1],l.split(",")[0],n.props.location.state.getName()])).then((function(e){t._isMounted=!0,void 0!==t.props.location.state?r.a.post("/getWorkouts","".concat([n.props.location.state.getName()])).then((function(e){e.data.reverse(),n.setState({data:e.data})}),(function(e){alert(e)})):t.props.history.push("/Home")}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,console.log("mounted");var t=this;void 0!==this.props.location.state?r.a.post("/getWorkouts","".concat([t.props.location.state.getName()])).then((function(e){e.data.reverse(),t.setState({data:e.data})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("data:",e.state.data)}),1e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"previousWorkoutsWrapper"},this.state.data.map((function(t){return"354634563dfghdfgh439003235"!==t.workoutPlan?o.a.createElement("div",{className:"previousContainer previousWorkout forwardInAnimation"},o.a.createElement("div",{className:"workoutName is-info"},o.a.createElement("span",null,t.workoutPlan.slice(1,t.workoutPlan.length-1))),o.a.createElement("button",{value:[t.id,t.workoutPlan.slice(1,t.workoutPlan.length-1),t.workoutDate],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory is-small "}),o.a.createElement("div",{className:"scrollContainer2"},o.a.createElement("table",{className:"content is-small table is-bordered"},o.a.createElement("thead",{className:"dateaboveprev"},t.workoutDate),o.a.createElement("thead",{id:"workoutheader",className:t.color},o.a.createElement("tr",null,o.a.createElement("th",null,"Workout"),o.a.createElement("th",null,"Sets"),o.a.createElement("th",null,"Reps"),o.a.createElement("th",null,"1"),o.a.createElement("th",null,"2"),o.a.createElement("th",null,"3"),o.a.createElement("th",null,"4"))),o.a.createElement("tbody",{className:t.color},o.a.createElement("tr",null,o.a.createElement("td",null,t.workout1.split(",")[0]),o.a.createElement("td",null,t.workout1.split(",")[1]),o.a.createElement("td",null,t.workout1.split(",")[2]),o.a.createElement("td",null,t.workout1.split(",")[3]),o.a.createElement("td",null,t.workout1.split(",")[4]),o.a.createElement("td",null,t.workout1.split(",")[5]),o.a.createElement("td",null,t.workout1.split(",")[6])),o.a.createElement("tr",null,o.a.createElement("td",null,t.workout2.split(",")[0]),o.a.createElement("td",null,t.workout2.split(",")[1]),o.a.createElement("td",null,t.workout2.split(",")[2]),o.a.createElement("td",null,t.workout2.split(",")[3]),o.a.createElement("td",null,t.workout2.split(",")[4]),o.a.createElement("td",null,t.workout2.split(",")[5]),o.a.createElement("td",null,t.workout2.split(",")[6]))," "!==t.workout3.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout3.split(",")[0]),o.a.createElement("td",null,t.workout3.split(",")[1]),o.a.createElement("td",null,t.workout3.split(",")[2]),o.a.createElement("td",null,t.workout3.split(",")[3]),o.a.createElement("td",null,t.workout3.split(",")[4]),o.a.createElement("td",null,t.workout3.split(",")[5]),o.a.createElement("td",null,t.workout3.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout4.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout4.split(",")[0]),o.a.createElement("td",null,t.workout4.split(",")[1]),o.a.createElement("td",null,t.workout4.split(",")[2]),o.a.createElement("td",null,t.workout4.split(",")[3]),o.a.createElement("td",null,t.workout4.split(",")[4]),o.a.createElement("td",null,t.workout4.split(",")[5]),o.a.createElement("td",null,t.workout4.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout5.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout5.split(",")[0]),o.a.createElement("td",null,t.workout5.split(",")[1]),o.a.createElement("td",null,t.workout5.split(",")[2]),o.a.createElement("td",null,t.workout5.split(",")[3]),o.a.createElement("td",null,t.workout5.split(",")[4]),o.a.createElement("td",null,t.workout5.split(",")[5]),o.a.createElement("td",null,t.workout5.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout6.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout6.split(",")[0]),o.a.createElement("td",null,t.workout6.split(",")[1]),o.a.createElement("td",null,t.workout6.split(",")[2]),o.a.createElement("td",null,t.workout6.split(",")[3]),o.a.createElement("td",null,t.workout6.split(",")[4]),o.a.createElement("td",null,t.workout6.split(",")[5]),o.a.createElement("td",null,t.workout6.split(",")[6])):o.a.createElement("tr",{id:"hide"})," "!==t.workout7.split(",")[0]&&""!==t.workout3.split(",")[0]?o.a.createElement("tr",null,o.a.createElement("td",null,t.workout7.split(",")[0]),o.a.createElement("td",null,t.workout7.split(",")[1]),o.a.createElement("td",null,t.workout7.split(",")[2]),o.a.createElement("td",null,t.workout7.split(",")[3]),o.a.createElement("td",null,t.workout7.split(",")[4]),o.a.createElement("td",null,t.workout7.split(",")[5]),o.a.createElement("td",null,t.workout7.split(",")[6])):o.a.createElement("tr",{id:"hide"})))),t.notes.length>0?o.a.createElement("article",{className:"content is-small message notes"},o.a.createElement("div",{id:"notesheader2",className:"message-header"},o.a.createElement("p",null,"Notes")),o.a.createElement("div",{className:"message-body notesBody"},t.notes)):o.a.createElement("div",{id:"hide"}," ")):o.a.createElement("div",{className:"runHistoryContainer"},o.a.createElement("button",{value:[],onClick:e.handleDeleteClick,className:"delete deleteButtonHistory2 is-small "}),o.a.createElement("button",{id:"runButtonHistory",className:"button"}),o.a.createElement("span",{className:"dateaboveprev2"},t.workoutDate),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"miles: "),o.a.createElement("span",{className:"milesandtimedata"},t.workout1)),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"time: "),o.a.createElement("span",{className:"milesandtimedata"},t.workout2)),o.a.createElement("div",null,o.a.createElement("span",{className:"milesAndTimeSpan"},"avg mile: "),o.a.createElement("span",{className:"milesandtimedata"},e.avgMile(t.workout1,t.workout2))))})))}}])&&i(t.prototype,n),l&&i(t,l),c}(l.Component);t.default=E}}]);