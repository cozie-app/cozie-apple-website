"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4384],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return x}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,x=p["".concat(s,".").concat(d)]||p[d]||f[d]||r;return n?o.createElement(x,a(a({ref:t},u),{},{components:n})):o.createElement(x,a({ref:t},u))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=(n(4996),["components"]),c={id:"notifications",title:"Send Notifications with OneSignal",sidebar_label:"iOS - Push notifications",sidebar_position:11},s=void 0,l={unversionedId:"customize_cozie/notifications",id:"customize_cozie/notifications",title:"Send Notifications with OneSignal",description:"Please follow the instructions in the video below to learn more on how to send notifications with OneSignal.",source:"@site/docs/2_customize_cozie/notifications.md",sourceDirName:"2_customize_cozie",slug:"/customize_cozie/notifications",permalink:"/docs/customize_cozie/notifications",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/2_customize_cozie/notifications.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"notifications",title:"Send Notifications with OneSignal",sidebar_label:"iOS - Push notifications",sidebar_position:11},sidebar:"myAutogeneratedSidebar",previous:{title:"iOS - Research Kit",permalink:"/docs/customize_cozie/researchKit"},next:{title:"Watch OS - Intro",permalink:"/docs/customize_cozie/watchIntro"}},u={},p=[{value:"Sending custom notifications",id:"sending-custom-notifications",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please follow the instructions in the video below to learn more on how to send notifications with OneSignal."),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/KgJbdKgmtsQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h2",{id:"sending-custom-notifications"},"Sending custom notifications"),(0,r.kt)("p",null,"You can send custom notifications to users by using the following code. You will need to specify your ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," key in the header and the ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id")," in the payload. You can then set filters and target specific users as shown in the example below. You can read more about the different types of filter on the OneSignal ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.onesignal.com/reference/create-notification#example-code---create-notification"},"official documentation website"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport json\n\nheader = {"Content-Type": "application/json; charset=utf-8",\n          "Authorization": "Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}\n\npayload = {"app_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n           "filters": [\n                {"field": "country", "relation": "=", "value": "SG"},\n                {"operator": "AND"}, {"field": "app_version", "relation": "=", "value": "15"}\n            ],\n           "included_segments": ["All"],\n           "contents": {"en": "Please complete the Cozie survey, app version 15."}}\n\nreq = requests.post("https://onesignal.com/api/v1/notifications", headers=header, data=json.dumps(payload))\n\nprint(req.status_code, req.reason)\n')))}d.isMDXComponent=!0}}]);