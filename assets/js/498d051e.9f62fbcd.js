"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4733],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return _},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"custom_watch_survey",title:"How to Create a Custom Watch Survey",sidebar_label:"Watch Survey",sidebar_position:1},u=void 0,c={unversionedId:"custom_surveys/custom_watch_survey",id:"custom_surveys/custom_watch_survey",title:"How to Create a Custom Watch Survey",description:"In Cozie, it is possible to create a custom watch survey. The watch",source:"@site/docs/3_custom_surveys/01_watch_survey.md",sourceDirName:"3_custom_surveys",slug:"/custom_surveys/custom_watch_survey",permalink:"/docs/custom_surveys/custom_watch_survey",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/3_custom_surveys/01_watch_survey.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"custom_watch_survey",title:"How to Create a Custom Watch Survey",sidebar_label:"Watch Survey",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Watch Survey - Interaction",permalink:"/docs/download_data/ws_interaction"},next:{title:"Watch Survey Icons",permalink:"/docs/custom_surveys/watch_survey_icons"}},p={},d=[{value:"How to load the watch survey into the Cozie app:",id:"how-to-load-the-watch-survey-into-the-cozie-app",level:2}],m={toc:d},h="wrapper";function _(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Cozie, it is possible to create a custom watch survey. The watch\nsurvey is defined in a JSON file. An example is shown below."),(0,o.kt)("p",null,"Example of JSON file for custom watch survey"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example_survey.json"',title:'"example_survey.json"'},'{\n  "survey_name": "Example Survey",\n  "survey_id": "example_survey",\n  "survey": [{\n      "question": "How would you prefer to be?",\n      "question_id": "q_thermal",\n      "response_options": [{\n          "text": "Cooler",\n          "icon": "snowflake",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_location"\n        },\n        {\n          "text": "No Change",\n          "icon": "emoticon_happy",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_location"\n        },\n        {\n          "text": "Warmer",\n          "icon": "flame.fill",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": true,\n          "sf_symbols_color": "#FF0000",\n          "next_question_id": "q_location"\n        }\n      ]\n    },\n    {\n      "question": "Where are you?",\n      "question_id": "q_location",\n      "response_options": [{\n          "text": "Outdoor",\n          "icon": "person_walking",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_clothing"\n        },\n        {\n          "text": "Indoor",\n          "icon": "indoor",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_clothing"\n        }\n      ]\n    },\n    {\n      "question": "What clothes are you wearing?",\n      "question_id": "q_clothing",\n      "response_options": [{\n          "text": "Very light",\n          "icon": "clothes_shirt_sleeveless",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Light",\n          "icon": "clothes_shirt_short",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Medium",\n          "icon": "clothes_shirt_pants",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Heavy",\n          "icon": "clothes_pullover",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"survey_name")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of watch survey that is shown in the 'Settings' tab of the Cozie iPhone app"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Thermal (short)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"survey_id")),(0,o.kt)("td",{parentName:"tr",align:null},"Survey ID"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"thermal_short"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"survey")),(0,o.kt)("td",{parentName:"tr",align:null},"Array with questions"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"question")),(0,o.kt)("td",{parentName:"tr",align:null},"Question that is shown in the watch survey on the Apple Watch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"How would you prefer to be?"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"question_id")),(0,o.kt)("td",{parentName:"tr",align:null},"The question ID is used as column name in the database. It has to have the prefix ",(0,o.kt)("inlineCode",{parentName:"td"},"q_")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"q_preference_thermal"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"response_options")),(0,o.kt)("td",{parentName:"tr",align:null},"Array of response options objects"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text")),(0,o.kt)("td",{parentName:"tr",align:null},"Response text that is show in the watch survey on the Apple Watch and text that is stored in the database."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Cooler"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"watch_survey_icons"},"Filename or SF symbol name")," of icon that is shown on the left hand side of the response option text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"snow_flake"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon_background_color")),(0,o.kt)("td",{parentName:"tr",align:null},"Background color that is shown for image based icons and SF Symbol based icons"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#F1A62E"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"use_sf_symbols")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean that indicates whether the value specified in ",(0,o.kt)("inlineCode",{parentName:"td"},"icon")," is a filename or an SF symbol name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sf_symbols_color")),(0,o.kt)("td",{parentName:"tr",align:null},"Foreground color that is shown for SF symbols"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#000000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"next_question_id")),(0,o.kt)("td",{parentName:"tr",align:null},"Question ID of the next question shown if this response option is selected. If it watch survey should end after selecting the response option, then the ",(0,o.kt)("inlineCode",{parentName:"td"},"next question_id")," is an empty string."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"q_location"))))),(0,o.kt)("h2",{id:"how-to-load-the-watch-survey-into-the-cozie-app"},"How to load the watch survey into the Cozie app:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open to the Cozie app and go to the ",(0,o.kt)("em",{parentName:"p"},"Backend")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the URL to the watch survey file in the input field labelled ",(0,o.kt)("em",{parentName:"p"},"Watch\nSurvey Link")," (",(0,o.kt)("a",{href:(0,i.Z)("watch_surveys/watch_survey_example.json"),target:"_blank"},"Link to example survey"),")"),(0,o.kt)("img",{alt:"Screenshot backend watch survey configuration",src:(0,i.Z)("img/backend_watch_survey.png"),width:"30%"}),"  \xa0"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the sync button in the ",(0,o.kt)("em",{parentName:"p"},"Backend")," tab. The watch survey should now be available to select in the ",(0,o.kt)("em",{parentName:"p"},"Settings")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("em",{parentName:"p"},"Settings")," tab and select your watch survey. The watch survey defined in the JSON file provided with the link above should be listed in the pop-up list. Select it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sync the settings with the Apple Watch while the Cozie app is open on the Apple Watch, just like described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup"},"Setup guide"),"."))))}_.isMDXComponent=!0}}]);