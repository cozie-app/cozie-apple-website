"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6840],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?o.createElement(h,r(r({ref:t},s),{},{components:a})):o.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4925:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),r=(a(4996),["components"]),l={id:"gettingStarted",title:"Getting Started with Cozie",sidebar_label:"Getting Started"},p=void 0,c={unversionedId:"gettingStarted",id:"gettingStarted",title:"Getting Started with Cozie",description:"This guide will explain you how to edit the source code of Cozie Apple. Please not that the following documentation applies to the Cozie Release v1.0.0. In the meantime, we've released Cozie Release v2.0.0 which is also availble on the Apple App Store.",source:"@site/docs/gettingStarted.md",sourceDirName:".",slug:"/gettingStarted",permalink:"/docs/gettingStarted",draft:!1,editUrl:"https://github.com/FedericoTartarini/cozie-apple/tree/master/my-website/docs/gettingStarted.md",tags:[],version:"current",frontMatter:{id:"gettingStarted",title:"Getting Started with Cozie",sidebar_label:"Getting Started"},sidebar:"someSidebar",previous:{title:"Download Data",permalink:"/docs/downloadData"},next:{title:"Clone repository",permalink:"/docs/cloneCozie"}},s={},u=[{value:"Steps you will need to follow",id:"steps-you-will-need-to-follow",level:2},{value:"iOS application - iPhone",id:"ios-application---iphone",level:3},{value:"WatchOS application - Apple Watch",id:"watchos-application---apple-watch",level:3},{value:"Distribute application",id:"distribute-application",level:3},{value:"Documentation Website",id:"documentation-website",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will explain you how to edit the source code of Cozie Apple. Please not that the following documentation applies to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cozie-app/cozie-apple/releases/tag/v1.0.0"},"Cozie Release v1.0.0"),". In the meantime, we've released ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cozie-app/cozie-apple/releases/tag/v2.0.0"},"Cozie Release v2.0.0")," which is also availble on the ",(0,i.kt)("a",{parentName:"p",href:"https://apps.apple.com/sg/app/cozie/id1625029501"},"Apple App Store"),"."),(0,i.kt)("p",null,"What do you need?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Apple computer"),(0,i.kt)("li",{parentName:"ol"},"Apple developer account"),(0,i.kt)("li",{parentName:"ol"},"git installed on your computer")),(0,i.kt)("p",null,"Optional but recommended:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"One Signal account"),(0,i.kt)("li",{parentName:"ol"},"Firebase account")),(0,i.kt)("p",null,"To find out more about Cozie please watch the following video."),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/5e4FwVydYRE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h2",{id:"steps-you-will-need-to-follow"},"Steps you will need to follow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/cloneCozie"},"Clone Cozie")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/projectStructure"},"Project Structure"))),(0,i.kt)("h3",{id:"ios-application---iphone"},"iOS application - iPhone"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/iosOverview"},"iOS App Intro")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/home"},"Home View")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/viewsOne"},"Views Start, Sign up, Login")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/settings"},"Settings View")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/firebaseIntro"},"Firebase Introduction")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/secureFirebase"},"Secure Firebase Database")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/researchKit"},"Research Kit")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/notifications"},"Push Notifications"))),(0,i.kt)("h3",{id:"watchos-application---apple-watch"},"WatchOS application - Apple Watch"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/watchIntro"},"Watch OS Intro")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/watchMain"},"Watch OS Interface Controller")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/watchSecondary"},"Watch OS Notifications, Complications and Health Store"))),(0,i.kt)("h3",{id:"distribute-application"},"Distribute application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/cloneCozie"},"Validate and Distribute app")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/testFlight"},"Test Flight"))),(0,i.kt)("h3",{id:"documentation-website"},"Documentation Website"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/documentationWebsite"},"Documentation Website"))))}m.isMDXComponent=!0}}]);