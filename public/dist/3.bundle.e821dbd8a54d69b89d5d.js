(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=(a(172),a(159),a(4)),o=a.n(r),u=(a(37),a(10));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m(e);if(t){var l=m(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return d(this,a)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(d,e);var t,a,n,r=c(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=r.call(this,e)).handleChangeDatePicker=function(e){t.setState({workoutDate:e})},t.state={threeDotsHide:"hide",threeDotsShow:"",planEditting:"",editing:!1,name:"",templates:[{templateName:""},{templateName:""}],workoutName:"Custom",hideButtons:"",username:" ",workout1:[" "," "," "],workout2:[" "," "," "],workout3:[" "," "," "],workout4:[" "," "," "],workout5:[" "," "," "],workout6:[" "," "," "],workout7:[" "," "," "],notes:"",workoutDate:new Date,submitted:!1,clicked:!1},t.handleShowOptions=t.handleShowOptions.bind(p(t)),t.handleChangeColorPicker=t.handleChangeColorPicker.bind(p(t)),t.handleDeleteClick=t.handleDeleteClick.bind(p(t)),t.handleClickCreateTemplate=t.handleClickCreateTemplate.bind(p(t)),t.handleChangeWorkoutName=t.handleChangeWorkoutName.bind(p(t)),t.handleChangeDatePicker=t.handleChangeDatePicker.bind(p(t)),t.handleDateChange=t.handleDateChange.bind(p(t)),t.handleSubmitWorkout=t.handleSubmitWorkout.bind(p(t)),t.handleChangeSquat0=t.handleChangeSquat0.bind(p(t)),t.handleChangeSquat1=t.handleChangeSquat1.bind(p(t)),t.handleChangeSquat2=t.handleChangeSquat2.bind(p(t)),t.handleChangeSquat3=t.handleChangeSquat3.bind(p(t)),t.handleChangeSquat4=t.handleChangeSquat4.bind(p(t)),t.handleChangeSquat5=t.handleChangeSquat5.bind(p(t)),t.handleChangeSquat6=t.handleChangeSquat6.bind(p(t)),t.handleChangeHipThrust0=t.handleChangeHipThrust0.bind(p(t)),t.handleChangeHipThrust1=t.handleChangeHipThrust1.bind(p(t)),t.handleChangeHipThrust2=t.handleChangeHipThrust2.bind(p(t)),t.handleChangeHipThrust3=t.handleChangeHipThrust3.bind(p(t)),t.handleChangeHipThrust4=t.handleChangeHipThrust4.bind(p(t)),t.handleChangeHipThrust5=t.handleChangeHipThrust5.bind(p(t)),t.handleChangeHipThrust6=t.handleChangeHipThrust6.bind(p(t)),t.handleChangeBenchPress0=t.handleChangeBenchPress0.bind(p(t)),t.handleChangeBenchPress1=t.handleChangeBenchPress1.bind(p(t)),t.handleChangeBenchPress2=t.handleChangeBenchPress2.bind(p(t)),t.handleChangeBenchPress3=t.handleChangeBenchPress3.bind(p(t)),t.handleChangeBenchPress4=t.handleChangeBenchPress4.bind(p(t)),t.handleChangeBenchPress5=t.handleChangeBenchPress5.bind(p(t)),t.handleChangeBenchPress6=t.handleChangeBenchPress6.bind(p(t)),t.handleChangeChinUps0=t.handleChangeChinUps0.bind(p(t)),t.handleChangeChinUps1=t.handleChangeChinUps1.bind(p(t)),t.handleChangeChinUps2=t.handleChangeChinUps2.bind(p(t)),t.handleChangeChinUps3=t.handleChangeChinUps3.bind(p(t)),t.handleChangeChinUps4=t.handleChangeChinUps4.bind(p(t)),t.handleChangeChinUps5=t.handleChangeChinUps5.bind(p(t)),t.handleChangeChinUps6=t.handleChangeChinUps6.bind(p(t)),t.handleChangeDBFarmerCarry0=t.handleChangeDBFarmerCarry0.bind(p(t)),t.handleChangeDBFarmerCarry1=t.handleChangeDBFarmerCarry1.bind(p(t)),t.handleChangeDBFarmerCarry2=t.handleChangeDBFarmerCarry2.bind(p(t)),t.handleChangeDBFarmerCarry3=t.handleChangeDBFarmerCarry3.bind(p(t)),t.handleChangeDBFarmerCarry4=t.handleChangeDBFarmerCarry4.bind(p(t)),t.handleChangeDBFarmerCarry5=t.handleChangeDBFarmerCarry5.bind(p(t)),t.handleChangeDBFarmerCarry6=t.handleChangeDBFarmerCarry6.bind(p(t)),t.handleChangeFacePulls0=t.handleChangeFacePulls0.bind(p(t)),t.handleChangeFacePulls1=t.handleChangeFacePulls1.bind(p(t)),t.handleChangeFacePulls2=t.handleChangeFacePulls2.bind(p(t)),t.handleChangeFacePulls3=t.handleChangeFacePulls3.bind(p(t)),t.handleChangeFacePulls4=t.handleChangeFacePulls4.bind(p(t)),t.handleChangeFacePulls5=t.handleChangeFacePulls5.bind(p(t)),t.handleChangeFacePulls6=t.handleChangeFacePulls6.bind(p(t)),t.handleChangeExtraWorkout0=t.handleChangeExtraWorkout0.bind(p(t)),t.handleChangeExtraWorkout1=t.handleChangeExtraWorkout1.bind(p(t)),t.handleChangeExtraWorkout2=t.handleChangeExtraWorkout2.bind(p(t)),t.handleChangeExtraWorkout3=t.handleChangeExtraWorkout3.bind(p(t)),t.handleChangeExtraWorkout4=t.handleChangeExtraWorkout4.bind(p(t)),t.handleChangeExtraWorkout5=t.handleChangeExtraWorkout5.bind(p(t)),t.handleChangeExtraWorkout6=t.handleChangeExtraWorkout6.bind(p(t)),t.handleNotes=t.handleNotes.bind(p(t)),t.handleHomeClick=t.handleHomeClick.bind(p(t)),t.handlePreviousClick=t.handlePreviousClick.bind(p(t)),t.handleEditTemplateClick=t.handleEditTemplateClick.bind(p(t)),t.handleCancelTemplateUpdate=t.handleCancelTemplateUpdate.bind(p(t)),t.handleSaveChanges=t.handleSaveChanges.bind(p(t)),t}return t=d,(a=[{key:"handleShowOptions",value:function(e){this.setState({threeDotsHide:"",threeDotsShow:"hide"})}},{key:"handleSaveChanges",value:function(e){var t=this;e.preventDefault();var a=this;Object(u.confirmAlert)({title:"Save changes?",buttons:[{label:"Yes",onClick:function(){o.a.post("/deleteTemplate","".concat([t.state.planEditting,t.state.name])).then((function(e){t.setState({editing:!1});for(var n=[[t.state.workout1,t.state.workout2,t.state.workout3,t.state.workout4,t.state.workout5,t.state.workout6,t.state.workout7],[t.state.notes],t.props.location.state.name,t.props.day,t.state.workoutName],l=n[4].split(""),r=0;r<l.length;r++)"\\"!==l[r]&&'"'!==l[r]||l.splice(r,1);for(n[4]=l.join(""),r=0;r<n.length-3;r++)for(var u=0;u<n[r].length;u++)if("string"==typeof n[r][u])s=(s=n[r][u]).split(",").join(""),n[r][u]=s;else for(var i=0;i<n[r][u].length;i++){var s;s=(s=n[r][u][i]).split(",").join(""),n[r][u][i]=s}o.a.post("/createTemplate","".concat(n)).then((function(e){console.log("colorhere: ",a.state.planEditting,a.state.currentColor),o.a.post("/changeColor","".concat([a.state.planEditting,a.state.currentColor])).then((function(e){o.a.post("/getTemplates","".concat([a.props.location.state.name])).then((function(e){e.data.reverse();for(var t=e.data,n=0;n<t.length;n++)t[n].editable=!1;a.setState({templates:t}),a.setState({name:e.data[0].name.toUpperCase(),templates:t})}),(function(e){alert(e)}))})),console.log("saved template!")}),(function(e){alert(e)})),a.setState({workoutName:"Custom",clicked:!1,workout1:[" "," "," "],workout2:[" "," "," "],workout3:[" "," "," "],workout4:[" "," "," "],workout5:[" "," "," "],workout6:[" "," "," "],workout7:[" "," "," "],notes:""})}))}},{label:"No",onClick:function(){return console.log("Click No")}}]})}},{key:"handleCancelTemplateUpdate",value:function(e){var t=e.target.getAttribute("data-id");e.preventDefault();for(var a=this.state.templates,n=0;n<a.length;n++)a[n].templateName===t&&this.state.editing&&(a[n].editable=!1);this.setState({editing:!1,templates:a})}},{key:"handleEditTemplateClick",value:function(e){var t=this;this.setState({threeDotsHide:"hide",threeDotsShow:""}),e.preventDefault();var a,n,l=e.target.getAttribute("data-id");this.setState({planEditting:l});for(var r=0;r<this.state.templates.length;r++)this.state.templates[r].templateName===l&&(n=this.state.templates[r],a=this.state.templates[r].color);this.setState({currentColor:a}),console.log("color: ",a,l),this.state.editing?alert("Please finish editing your current template before editting another"):this.setState({workoutName:l,workout1:[n.workout1.split(",")[0],n.workout1.split(",")[1],n.workout1.split(",")[2]],workout2:[n.workout2.split(",")[0],n.workout2.split(",")[1],n.workout2.split(",")[2]],workout3:[n.workout3.split(",")[0],n.workout3.split(",")[1],n.workout3.split(",")[2]],workout4:[n.workout4.split(",")[0],n.workout4.split(",")[1],n.workout4.split(",")[2]],workout5:[n.workout5.split(",")[0],n.workout5.split(",")[1],n.workout5.split(",")[2]],workout6:[n.workout6.split(",")[0],n.workout6.split(",")[1],n.workout6.split(",")[2]],workout7:[n.workout7.split(",")[0],n.workout7.split(",")[1],n.workout7.split(",")[2]],editing:!0});var o=this.state.templates;for(console.log("value: ",l),r=0;r<o.length;r++)o[r].templateName!==l||this.state.editing||(o[r].editable=!0);this.setState({templates:o}),console.log("templates:",this.state.templates),setTimeout((function(){console.log("updatedState: ",t.state.workout1,t.state.workout7)}),1e3)}},{key:"handleChangeColorPicker",value:function(e){e.preventDefault();var t=this,a=e.nativeEvent.target.selectedIndex,n=e.nativeEvent.target[a].text,l=e.target.value;"Color"!==n&&o.a.post("/changeColor","".concat([l,n])).then((function(e){console.log(e),o.a.post("/getTemplates","".concat([t.props.location.state.name])).then((function(e){e.data.reverse();for(var a=e.data,n=0;n<a.length;n++)a[n].editable=!1;t.setState({templates:a})}),(function(e){alert(e)}))}),(function(e){alert(e)}))}},{key:"handleDeleteClick",value:function(e){var t=this;e.preventDefault();var a=this,n=e.target.getAttribute("data-id");Object(u.confirmAlert)({title:"Delete template?",buttons:[{label:"Delete",onClick:function(){a.setState({threeDotsHide:"hide",threeDotsShow:""}),o.a.post("/deleteTemplate","".concat([n,t.state.name])).then((function(e){"object"===i(e)&&(o.a.post("/getTemplates","".concat([a.props.location.state.name])).then((function(e){console.log(e.data),e.data.reverse();for(var t=e.data,n=0;n<t.length;n++)t[n].editable=!1;a.setState({templates:t})}),(function(e){alert(e)})),console.log("deleted!"))}),(function(e){alert(e)}))}},{label:"Cancel",onClick:function(){return console.log("Click No")}}]})}},{key:"handleClickCreateTemplate",value:function(e){e.preventDefault(),this.setState({clicked:!0})}},{key:"handleChangeWorkoutName",value:function(e){e.preventDefault(),this.setState({workoutName:e.target.value}),""!==e.target.value&&" "!==e.target.value||this.setState({workoutName:e.target.getAttribute("data-id")})}},{key:"handleHomeClick",value:function(){this.setState({hideButtons:"hide"})}},{key:"handlePreviousClick",value:function(){this.setState({hideButtons:"hide"})}},{key:"handleNotes",value:function(e){e.preventDefault(),this.setState({notes:e.target.value})}},{key:"handleDateChange",value:function(e){e.preventDefault();var t=e.target.value;this.setState({workoutDate:t})}},{key:"handleChangeSquat0",value:function(e){e.preventDefault(),this.state.workout1[0]=e.target.value}},{key:"handleChangeSquat1",value:function(e){e.preventDefault(),this.state.workout1[1]=e.target.value}},{key:"handleChangeSquat2",value:function(e){e.preventDefault(),this.state.workout1[2]=e.target.value}},{key:"handleChangeSquat3",value:function(e){e.preventDefault(),this.state.workout1[3]=e.target.value}},{key:"handleChangeSquat4",value:function(e){e.preventDefault(),this.state.workout1[4]=e.target.value}},{key:"handleChangeSquat5",value:function(e){e.preventDefault(),this.state.workout1[5]=e.target.value}},{key:"handleChangeSquat6",value:function(e){e.preventDefault(),this.state.workout1[6]=e.target.value}},{key:"handleChangeHipThrust0",value:function(e){e.preventDefault(),this.state.workout2[0]=e.target.value}},{key:"handleChangeHipThrust1",value:function(e){e.preventDefault(),this.state.workout2[1]=e.target.value}},{key:"handleChangeHipThrust2",value:function(e){e.preventDefault(),this.state.workout2[2]=e.target.value}},{key:"handleChangeHipThrust3",value:function(e){e.preventDefault(),this.state.workout2[3]=e.target.value}},{key:"handleChangeHipThrust4",value:function(e){e.preventDefault(),this.state.workout2[4]=e.target.value}},{key:"handleChangeHipThrust5",value:function(e){e.preventDefault(),this.state.workout2[5]=e.target.value}},{key:"handleChangeHipThrust6",value:function(e){e.preventDefault(),this.state.workout2[6]=e.target.value}},{key:"handleChangeBenchPress0",value:function(e){e.preventDefault(),this.state.workout3[0]=e.target.value}},{key:"handleChangeBenchPress1",value:function(e){e.preventDefault(),this.state.workout3[1]=e.target.value}},{key:"handleChangeBenchPress2",value:function(e){e.preventDefault(),this.state.workout3[2]=e.target.value}},{key:"handleChangeBenchPress3",value:function(e){e.preventDefault(),this.state.workout3[3]=e.target.value}},{key:"handleChangeBenchPress4",value:function(e){e.preventDefault(),this.state.workout3[4]=e.target.value}},{key:"handleChangeBenchPress5",value:function(e){e.preventDefault(),this.state.workout3[5]=e.target.value}},{key:"handleChangeBenchPress6",value:function(e){e.preventDefault(),this.state.workout3[6]=e.target.value}},{key:"handleChangeChinUps0",value:function(e){e.preventDefault(),this.state.workout4[0]=e.target.value}},{key:"handleChangeChinUps1",value:function(e){e.preventDefault(),this.state.workout4[1]=e.target.value}},{key:"handleChangeChinUps2",value:function(e){e.preventDefault(),this.state.workout4[2]=e.target.value}},{key:"handleChangeChinUps3",value:function(e){e.preventDefault(),this.state.workout4[3]=e.target.value}},{key:"handleChangeChinUps4",value:function(e){e.preventDefault(),this.state.workout4[4]=e.target.value}},{key:"handleChangeChinUps5",value:function(e){e.preventDefault(),this.state.workout4[5]=e.target.value}},{key:"handleChangeChinUps6",value:function(e){e.preventDefault(),this.state.workout4[6]=e.target.value}},{key:"handleChangeDBFarmerCarry0",value:function(e){e.preventDefault(),this.state.workout5[0]=e.target.value}},{key:"handleChangeDBFarmerCarry1",value:function(e){e.preventDefault(),this.state.workout5[1]=e.target.value}},{key:"handleChangeDBFarmerCarry2",value:function(e){e.preventDefault(),this.state.workout5[2]=e.target.value}},{key:"handleChangeDBFarmerCarry3",value:function(e){e.preventDefault(),this.state.workout5[3]=e.target.value}},{key:"handleChangeDBFarmerCarry4",value:function(e){e.preventDefault(),this.state.workout5[4]=e.target.value}},{key:"handleChangeDBFarmerCarry5",value:function(e){e.preventDefault(),this.state.workout5[5]=e.target.value}},{key:"handleChangeDBFarmerCarry6",value:function(e){e.preventDefault(),this.state.workout5[6]=e.target.value}},{key:"handleChangeFacePulls0",value:function(e){e.preventDefault(),this.state.workout6[0]=e.target.value}},{key:"handleChangeFacePulls1",value:function(e){e.preventDefault(),this.state.workout6[1]=e.target.value}},{key:"handleChangeFacePulls2",value:function(e){e.preventDefault(),this.state.workout6[2]=e.target.value}},{key:"handleChangeFacePulls3",value:function(e){e.preventDefault(),this.state.workout6[3]=e.target.value}},{key:"handleChangeFacePulls4",value:function(e){e.preventDefault(),this.state.workout6[4]=e.target.value}},{key:"handleChangeFacePulls5",value:function(e){e.preventDefault(),this.state.workout6[5]=e.target.value}},{key:"handleChangeFacePulls6",value:function(e){e.preventDefault(),this.state.workout6[6]=e.target.value}},{key:"handleChangeExtraWorkout3",value:function(e){e.preventDefault(),this.state.workout7[3]=e.target.value}},{key:"handleChangeExtraWorkout4",value:function(e){e.preventDefault(),this.state.workout7[4]=e.target.value}},{key:"handleChangeExtraWorkout5",value:function(e){e.preventDefault(),this.state.workout7[5]=e.target.value}},{key:"handleChangeExtraWorkout6",value:function(e){e.preventDefault(),this.state.workout7[6]=e.target.value}},{key:"handleChangeExtraWorkout0",value:function(e){e.preventDefault(),this.state.workout7[0]=e.target.value}},{key:"handleChangeExtraWorkout1",value:function(e){e.preventDefault(),this.state.workout7[1]=e.target.value}},{key:"handleChangeExtraWorkout2",value:function(e){e.preventDefault(),this.state.workout7[2]=e.target.value}},{key:"componentDidMount",value:function(){var e=this,t=this;void 0!==this.props.location.state?o.a.post("/getTemplates","".concat([t.props.location.state.name])).then((function(a){a.data.reverse(),t.setState({name:a.data[0].name.toUpperCase(),templates:a.data});for(var n=e.state.templates,l=0;l<n.length;l++)n[l].editable=!1;t.setState({templates:n})}),(function(e){alert(e)})):this.props.history.push("/Home"),setTimeout((function(){return console.log("temps: ",e.state.templates)}),2e3)}},{key:"handleSubmitWorkout",value:function(e){var t=this,a=this;e.preventDefault(),Object(u.confirmAlert)({title:"Create template?",buttons:[{label:"Submit",onClick:function(){t.setState({submitted:!0});for(var e=[[t.state.workout1,t.state.workout2,t.state.workout3,t.state.workout4,t.state.workout5,t.state.workout6,t.state.workout7],[t.state.notes],t.props.location.state.name,t.props.day,t.state.workoutName],n=0;n<e.length-3;n++)for(var l=0;l<e[n].length;l++)if("string"==typeof e[n][l])u=(u=e[n][l]).split(",").join(""),e[n][l]=u;else for(var r=0;r<e[n][l].length;r++){var u;u=(u=e[n][l][r]).split(",").join(""),e[n][l][r]=u}o.a.post("/createTemplate","".concat(e)).then((function(e){o.a.post("/getTemplates","".concat([a.props.location.state.name])).then((function(e){e.data.reverse();for(var t=e.data,n=0;n<t.length;n++)t[n].editable=!1;a.setState({name:e.data[0].name.toUpperCase(),templates:t})}),(function(e){alert(e)})),console.log("saved template!")}),(function(e){alert(e)})),a.setState({workoutName:"Custom",clicked:!1,workout1:[" "," "," "],workout2:[" "," "," "],workout3:[" "," "," "],workout4:[" "," "," "],workout5:[" "," "," "],workout6:[" "," "," "],workout7:[" "," "," "],notes:""})}},{label:"Cancel",onClick:function(){return console.log("user clicked no")}}]})}},{key:"render",value:function(){var e=this,t=this.state.templates.map((function(t,a){if(t.templateName.length>0)return l.a.createElement("div",{className:"block forwardInAnimation templatesWrapper"},l.a.createElement("section",{id:"".concat(t.color,"2"),className:"hero roundedCorners"},l.a.createElement("div",{className:"hero-body heroBody"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:e.state.threeDotsHide},l.a.createElement("span",{"data-id":t.templateName,"data-attr":t.color,onClick:e.handleDeleteClick,className:"delete is-medium deleteButton forwardInAnimation"})),l.a.createElement("div",{id:e.state.threeDotsShow},l.a.createElement("span",{onClick:e.handleShowOptions,className:"fa fa-ellipsis-v threeDots"})),"Black"===t.color||"Blue"===t.color||"Red"===t.color?l.a.createElement("span",{id:"whiteText",className:"title heroTitle is-small templateTitle"},t.templateName.slice(1,t.templateName.length-1),l.a.createElement("span",{id:e.state.threeDotsHide},l.a.createElement("span",{id:"colorSelector",className:"forwardInAnimation field selector"},l.a.createElement("span",{className:"select"},l.a.createElement("select",{id:"Gray2",onChange:e.handleChangeColorPicker},l.a.createElement("option",null,t.color),l.a.createElement("option",{value:t.templateName},"Green"),l.a.createElement("option",{value:t.templateName},"Blue"),l.a.createElement("option",{value:t.templateName},"Turquoise"),l.a.createElement("option",{value:t.templateName},"Yellow"),l.a.createElement("option",{value:t.templateName},"Cyan"),l.a.createElement("option",{value:t.templateName},"Red"),l.a.createElement("option",{value:t.templateName},"Black"),l.a.createElement("option",{value:t.templateName},"Gray")))),l.a.createElement("span",{"data-id":t.templateName,onClick:e.handleEditTemplateClick,className:"forwardInAnimation editButton2 fa fa-edit fa-2x"}))):l.a.createElement("span",{id:"heroTitle",className:"title heroTitle templateTitle"},t.templateName.slice(1,t.templateName.length-1),l.a.createElement("span",{id:e.state.threeDotsHide},l.a.createElement("span",{id:"colorSelector",className:"forwardInAnimation field selector"},l.a.createElement("span",{className:"select "},l.a.createElement("select",{onChange:e.handleChangeColorPicker},l.a.createElement("option",null,t.color),l.a.createElement("option",{value:t.templateName},"Green"),l.a.createElement("option",{value:t.templateName},"Blue"),l.a.createElement("option",{value:t.templateName},"Turquoise"),l.a.createElement("option",{value:t.templateName},"Yellow"),l.a.createElement("option",{value:t.templateName},"Cyan"),l.a.createElement("option",{value:t.templateName},"Red"),l.a.createElement("option",{value:t.templateName},"Black"),l.a.createElement("option",{value:t.templateName},"Gray")))),l.a.createElement("span",{"data-id":t.templateName,onClick:e.handleEditTemplateClick,id:"editButton1",className:"forwardInAnimation editButton fa fa-edit fa-2x"}))),!1===e.state.templates[a].editable?l.a.createElement("table",{id:"customTable2",className:"content is-small table is-bordered"},l.a.createElement("thead",{id:"workoutheader"},l.a.createElement("tr",{id:"workoutHeader4"},l.a.createElement("th",null,"Workout"),l.a.createElement("th",null,"Sets"),l.a.createElement("th",null,"Reps"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,t.workout1.split(",")[0]),l.a.createElement("td",null,t.workout1.split(",")[1]),l.a.createElement("td",null,t.workout1.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout2.split(",")[0]),l.a.createElement("td",null,t.workout2.split(",")[1]),l.a.createElement("td",null,t.workout2.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout3.split(",")[0]),l.a.createElement("td",null,t.workout3.split(",")[1]),l.a.createElement("td",null,t.workout3.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout4.split(",")[0]),l.a.createElement("td",null,t.workout4.split(",")[1]),l.a.createElement("td",null,t.workout4.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout5.split(",")[0]),l.a.createElement("td",null,t.workout5.split(",")[1]),l.a.createElement("td",null,t.workout5.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout6.split(",")[0]),l.a.createElement("td",null,t.workout6.split(",")[1]),l.a.createElement("td",null,t.workout6.split(",")[2])),l.a.createElement("tr",null,l.a.createElement("td",null,t.workout7.split(",")[0]),l.a.createElement("td",null,t.workout7.split(",")[1]),l.a.createElement("td",null,t.workout7.split(",")[2])))):l.a.createElement("div",{className:"modal templateModal is-active"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{id:"modalCardTemplate",className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title modalTitle"},l.a.createElement("input",{"data-id":t.templateName,placeholder:t.templateName.slice(1,t.templateName.length-1),className:"modalInputBoxTitle",onChange:e.handleChangeWorkoutName,type:"text"}))),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("div",null,l.a.createElement("form",{autocomplete:"off"},l.a.createElement("table",{id:"customTable4",className:"forwardInAnimation content is-small table is-bordered"},l.a.createElement("thead",{id:"workoutheader"},l.a.createElement("tr",{id:"workoutHeader4"},l.a.createElement("th",null,"Workout"),l.a.createElement("th",null,"Sets"),l.a.createElement("th",null,"Reps"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout1.split(",")[0],id:"tdinput",onChange:e.handleChangeSquat0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout1.split(",")[1],id:"tdinput",onChange:e.handleChangeSquat1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout1.split(",")[2],id:"tdinput",onChange:e.handleChangeSquat2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout2.split(",")[0],id:"tdinput",onChange:e.handleChangeHipThrust0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout2.split(",")[1],id:"tdinput",onChange:e.handleChangeHipThrust1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout2.split(",")[2],id:"tdinput",onChange:e.handleChangeHipThrust2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout3.split(",")[0],id:"tdinput",onChange:e.handleChangeBenchPress0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout3.split(",")[1],id:"tdinput",onChange:e.handleChangeBenchPress1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout3.split(",")[2],id:"tdinput",onChange:e.handleChangeBenchPress2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout4.split(",")[0],id:"tdinput",onChange:e.handleChangeChinUps0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout4.split(",")[1],id:"tdinput",onChange:e.handleChangeChinUps1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout4.split(",")[2],id:"tdinput",onChange:e.handleChangeChinUps2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout5.split(",")[0],id:"tdinput",onChange:e.handleChangeDBFarmerCarry0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout5.split(",")[1],id:"tdinput",onChange:e.handleChangeDBFarmerCarry1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout5.split(",")[2],id:"tdinput",onChange:e.handleChangeDBFarmerCarry2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout6.split(",")[0],id:"tdinput",onChange:e.handleChangeFacePulls0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout6.split(",")[1],id:"tdinput",onChange:e.handleChangeFacePulls1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout6.split(",")[2],id:"tdinput",onChange:e.handleChangeFacePulls2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout7.split(",")[0],id:"tdinput",onChange:e.handleChangeExtraWorkout0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout7.split(",")[1],id:"tdinput",onChange:e.handleChangeExtraWorkout1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{placeholder:t.workout7.split(",")[2],id:"tdinput",onChange:e.handleChangeExtraWorkout2,type:"text",className:"input"})))))))),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("button",{onClick:e.handleSaveChanges,className:"button is-success"},"Save changes"),l.a.createElement("button",{"data-id":t.templateName,onClick:e.handleCancelTemplateUpdate,className:"button"},"Cancel"))))))))}));return!1===this.state.clicked?l.a.createElement("div",{className:"block"},l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav-right nav-menu"},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("p",{className:"control"}))))),l.a.createElement("div",{className:"block"},l.a.createElement("div",{id:"createTemplateButton1",className:"buttonContainer"},l.a.createElement("div",{onClick:this.handleClickCreateTemplate,id:"loginButton",className:" marginbottom createTemplateButton is-dark"},l.a.createElement("i",{className:"fa fa-plus fa-xs plusSign","aria-hidden":"true"}))),t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"block forwardInAnimation "},l.a.createElement("form",{autocomplete:"off"},l.a.createElement("div",{class:"block nameYourWorkout templateName"},l.a.createElement("form",null,l.a.createElement("div",{class:"field"},l.a.createElement("input",{onChange:this.handleChangeWorkoutName,type:"text",class:"input",placeholder:"Template Name"})))),l.a.createElement("table",{id:"customTable",className:"margin content is-small table is-bordered is-striped"},l.a.createElement("thead",{id:"workoutheader"},l.a.createElement("tr",null,l.a.createElement("th",null,"Workout"),l.a.createElement("th",null,"Sets"),l.a.createElement("th",null,"Reps"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"  ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeSquat0,type:"text",className:"input"})),l.a.createElement("td",null,"  ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeSquat1,type:"text",className:"input"})),l.a.createElement("td",null,"  ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeSquat2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeHipThrust0,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeHipThrust1,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeHipThrust2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeBenchPress0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeBenchPress1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeBenchPress2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeChinUps0,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeChinUps1,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeChinUps2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeDBFarmerCarry0,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeDBFarmerCarry1,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeDBFarmerCarry2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeFacePulls0,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeFacePulls1,type:"text",className:"input"})),l.a.createElement("td",null," ",l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeFacePulls2,type:"text",className:"input"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeExtraWorkout0,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeExtraWorkout1,type:"text",className:"input"})),l.a.createElement("td",null,l.a.createElement("input",{id:"tdinput",onChange:this.handleChangeExtraWorkout2,type:"text",className:"input"})," ")))),l.a.createElement("button",{onClick:this.handleSubmitWorkout,href:"",className:"margin button is-danger"}," ",l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fa fa-check"})),l.a.createElement("span",null," Create template")))))}}])&&s(t.prototype,a),n&&s(t,n),d}(n.Component);t.default=g}}]);