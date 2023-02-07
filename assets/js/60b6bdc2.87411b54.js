"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2976],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3920:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],p={slug:"web_api_update",title:"Update - Web API",author:"Mario Frei",author_title:"Postodoc at BUDS Lab",author_url:"https://github.com/mariofrei",author_image_url:"../img/mario.jpeg",tags:["cozie-apple","cozie","app store","web API"]},l=void 0,c={permalink:"/blog/web_api_update",editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2023-02-07-web_api_update.md",source:"@site/blog/2023-02-07-web_api_update.md",title:"Update - Web API",description:"We have updated the web APi for Cozie data retrieval. The change became necessary as the requests from some users exceeded the current payload limit of 6 MB.",date:"2023-02-07T00:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"cozie-apple",permalink:"/blog/tags/cozie-apple"},{label:"cozie",permalink:"/blog/tags/cozie"},{label:"app store",permalink:"/blog/tags/app-store"},{label:"web API",permalink:"/blog/tags/web-api"}],readingTime:.825,hasTruncateMarker:!1,authors:[{name:"Mario Frei",title:"Postodoc at BUDS Lab",url:"https://github.com/mariofrei",imageURL:"../img/mario.jpeg"}],frontMatter:{slug:"web_api_update",title:"Update - Web API",author:"Mario Frei",author_title:"Postodoc at BUDS Lab",author_url:"https://github.com/mariofrei",author_image_url:"../img/mario.jpeg",tags:["cozie-apple","cozie","app store","web API"]},nextItem:{title:"Update - Cozie is now on the App Store",permalink:"/blog/appStore"}},s={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have updated the web APi for ",(0,o.kt)("a",{parentName:"p",href:"/docs/downloadData"},"Cozie data retrieval"),". The change became necessary as the requests from some users exceeded the current payload limit of 6 MB.\n",(0,o.kt)("a",{parentName:"p",href:"/docs/downloadData"},"The example script")," was changed in to places:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The 'shutil' module needs to be imported at the beginning")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import shutil\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The new web API doesn't serve the data as JSON string. Instead, it is a two-step process. Firstly, a link is provided to a zipped .csv-file containing the data. Hence, the provided link needs to be called to then download the actual data.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Download zipped CSV file with Cozie data\nwith requests.get(url, stream=True) as r:\n    with open('cozie.zip', 'wb') as f:\n        shutil.copyfileobj(r.raw, f)\n\n# Convert zipped CSV file with Cozie to dataframe\nwith open('cozie.zip', 'rb') as f:\n      df = pd.read_csv(f, compression={'method': 'zip', 'archive_name': 'sample.csv'})\n\ndf = df.drop(columns=['Unnamed: 0'])\n")),(0,o.kt)("p",null,"The initial call of the web API and the timezone manipulation of the dataframe remains the same, as does the resulting Pandas dataframe."))}m.isMDXComponent=!0}}]);