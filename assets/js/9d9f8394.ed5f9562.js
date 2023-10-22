"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9360],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:7},s="Issues",u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"When I press the sync button in the Data or Backend* tab I get an",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:7},sidebar:"myAutogeneratedSidebar",previous:{title:"Customize Cozie",permalink:"/docs/customize_cozie_app/customize_cozie"},next:{title:"Privacy Policy",permalink:"/docs/privacyPolicy"}},c={},p=[],h={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"issues"},"Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"When I press the sync button in the ",(0,o.kt)("em",{parentName:"strong"},"Data")," or ",(0,o.kt)("em",{parentName:"strong"},"Backend"),' tab I get an\n"JSON error"')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make sure you have internet access."),(0,o.kt)("li",{parentName:"ul"},"Make sure you have a good network connection. Flakey Wifi can cause this\nerror."),(0,o.kt)("li",{parentName:"ul"},"Make sure the JSON file for the watch survey is reachable from Safari on\nthe iPhone."),(0,o.kt)("li",{parentName:"ul"},"Make sure the JSON file for the watch survey is valid JSON and has all fields required by the Cozie specification. There are online tools available to check the JSON validity, e.g., we use ",(0,o.kt)("a",{parentName:"li",href:"https://jsonformatter.curiousconcept.com/#"},"JSON Formatter & Validator")),(0,o.kt)("li",{parentName:"ul"},"Firewalls can cause this error."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Watch survey data is not logged (e.g. ",(0,o.kt)("inlineCode",{parentName:"strong"},"ws_heart_rate"),")")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make sure that the Apple Watch is connected to the iPhone."),(0,o.kt)("li",{parentName:"ul"},"Make sure that the iPhone has access to the internet."),(0,o.kt)("li",{parentName:"ul"},"Make sure there is no update for the WatchOS pending."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"I added a new data field to be stored in the InfluxDB. However, when I submit data it is not stored")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The first time data with a new field name is saved in the database, the database sets the data type, e.g., if you were to implement to extraction of stride length information, you could save it as ",(0,o.kt)("inlineCode",{parentName:"li"},"ts_stride_length"),". If you submit the value ",(0,o.kt)("inlineCode",{parentName:"li"},"1.04"),", the value will be stored as a floating point number (float). The stride length might vary. If you happen to submit the value ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", the database would attempt to store it as an integer. It would then see that there is already a floating point number stored under ",(0,o.kt)("inlineCode",{parentName:"li"},"ts_stride_length")," and reject the new value of ",(0,o.kt)("inlineCode",{parentName:"li"},"ts_stride_length")," which is then lost. ")),(0,o.kt)("p",{parentName:"li"},"To avoid this issue, we force cast the type for each field name in the backend. If you let us know what type and field name you would like to add to Cozie, we can help you with this issue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Push notifications from OneSignal don't show up on my device.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check the correctness of the Player ID (on OneSignal.com and in the Cozie data)"),(0,o.kt)("li",{parentName:"ul"},"Check the correctness of the API key"),(0,o.kt)("li",{parentName:"ul"},"Check correctness of the ",(0,o.kt)("em",{parentName:"li"},"Backend")," tab and in your Python notebook"),(0,o.kt)("li",{parentName:"ul"},"Make sure you created the .p12 certificate for the main identifier."),(0,o.kt)("li",{parentName:"ul"},"Try to send a test push notification from the dashboard on one-signal com")))))}d.isMDXComponent=!0}}]);