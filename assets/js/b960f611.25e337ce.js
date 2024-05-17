"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7803],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4762:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=(a(4996),["components"]),s={id:"custom_backend",title:"Custom Backend",sidebar_label:"Custom backend"},l=void 0,c={unversionedId:"backend/custom_backend",id:"backend/custom_backend",title:"Custom Backend",description:"The backend of Cozie is fairly simple and the creation of your own Cozie backend should be manageable provided you have some experience with web technology and databases. By creating your own backend you can operate the Cozie app fully independent and you can make changes in order to be compliant with your domestic data privacy laws.",source:"@site/docs/7_backend/01_introduction.md",sourceDirName:"7_backend",slug:"/backend/custom_backend",permalink:"/docs/backend/custom_backend",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/7_backend/01_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"custom_backend",title:"Custom Backend",sidebar_label:"Custom backend"},sidebar:"myAutogeneratedSidebar",previous:{title:"Design Decisions",permalink:"/docs/customize_cozie_app/design_decisions"},next:{title:"Sending Cozie data",permalink:"/docs/backend/backend_cozie_to_database"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"AWS",id:"aws",level:2},{value:"InfluxDB",id:"influxdb",level:2},{value:"Costs",id:"costs",level:2}],p={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The backend of Cozie is fairly simple and the creation of your own Cozie backend should be manageable provided you have some experience with web technology and databases. By creating your own backend you can operate the Cozie app fully independent and you can make changes in order to be compliant with your domestic data privacy laws."),(0,o.kt)("p",null,"Most changes in the backend of Cozie can be accommodated by updating the settings in the 'Backend tab' of the Cozie app. However, if you want to send push notifications independent of us, you will need create a copy of the Cozie app and publish your own version. We will show how it can be done."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Cozie backend is created using Amazon Web Services (AWS). We primarily use AWS Lambda functions for web interfaces and data processing and InfluxDB as database engine. All services are hosted in the AWS region South East Asia (Singapore) / ap-southeast-1."),(0,o.kt)("p",null,"There is only 4 backend functions in the Cozie backend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"backend_cozie_to_database"},"Write data sent by the Cozie app to the Influx DB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"backend_database_to_cozie"},"Read data from the InfluxDB and send it to the Cozie app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"backend_retrieving_cozie_data"},"Retrieve data from the InfluxDB and sent it to the researcher")),(0,o.kt)("li",{parentName:"ul"},"Send push notification to the Cozie app (not yet documented)")),(0,o.kt)("h2",{id:"aws"},"AWS"),(0,o.kt)("p",null,"Amazon Web Services (AWS) offers countless services. It is quite difficult to keep an overview. Fortunately, the Cozie backend only uses one such service at its core, which is AWS Lambda. AWS Lambda allows you to execute code in the cloud and send requests and data to the lambda function The service is available for many programming languages. For Cozie, we focus on Python."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core services"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AWS Lambda"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Management"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AWS Cost Explorer"),(0,o.kt)("li",{parentName:"ul"},"AWS CloudWatch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Advanced features"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AWS API Gateway"),(0,o.kt)("li",{parentName:"ul"},"AWS EventBridge"),(0,o.kt)("li",{parentName:"ul"},"AWS Simple Queue Service (SQS)"),(0,o.kt)("li",{parentName:"ul"},"AWS Simple Storage Service (S3)")))),(0,o.kt)("p",null,"To make the operation and management of the Cozie backend a bit easier, we use a few more services. "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"AWS Cost Explorer")," allows you to monitor the cost of the AWS services. However, most of the Cozie operation should fit into the free tier of AWS provided it is dialed in."),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"AWS CloudWatch"),", we monitor the Lambda function and detect errors. Normally, there are no errors, but we like stay on top of things."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AWS API Gateway")," allows you to route request and do authentication, e.g., with API keys. Instead of using AWS API Gateway, it is also possible to send requests directly to the URL of and AWS Lambda function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AWS API EventBridge")," offers scheduling. This comes in handy if you want to execute a Lambda function at a certain interval or time of day. This could be the case if you want to monitor Cozie data and send push notification if certain conditions are met. See ",(0,o.kt)("a",{parentName:"p",href:"https://cozie.app/docs/research/publications-jitai"},"Just-in-Time-Adaptive Interventions (JITAI)")," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AWS Simple Queue Sevice (SQS)")," can help to speed up the process of the Cozie app sending data to backend. The Cozie app can accumulate data over several hours, e.g., overnight. If the participant then submits a watch survey in the morning, a fair bit of data is sent to the backend. The respective Lambda function can take several seconds to complete and respond to the Cozie app, which feels like an eternity for the participant. "),(0,o.kt)("p",null,"To remedy the situation, the data can be sent to the SQS first instead to a Lambda function. The SQS buffers the data and responds to the app quickly. Then SQS can call the Lambda function that ingests the Cozie data and inserts it into InfluxDB."),(0,o.kt)("p",null,"Similarly, retrieving Cozie data for research, can take a few minutes if the dataset includes dozens of participants who provided data for several weeks. This can lead to memory issues in InfluxDB and/or wait times for the researcher requesting the data. "),(0,o.kt)("p",null,"To speed up the data retrieval, Cozie data can be retrieved and pre-processed in regular intervals. The pre-processed data can then be cached using ",(0,o.kt)("strong",{parentName:"p"},"AWS Simple Storage Service (S3)"),". When a research wants to retrieve the Cozie data, the pre-processed data is fetched from the S3 cache and only the Cozie data that has not already been cached needs to be fetched from the database. This process is much faster and more gentle on the memory of the InfluxDB."),(0,o.kt)("h2",{id:"influxdb"},"InfluxDB"),(0,o.kt)("p",null,"InfluxDB is the database engine that we use in the backend of Cozie. It is a database optimized for time-series data. It uses a query language that is similar to SQL. "),(0,o.kt)("p",null,"There are a few key differences on the surface. Being aware of these conventions makes it much easier to understand this documentation.\nWhat is called a ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," in MySQL is a ",(0,o.kt)("inlineCode",{parentName:"p"},"measurement")," in InfluxDB.\nThere are two different kinds of ",(0,o.kt)("inlineCode",{parentName:"p"},"column")," types in InfluxDB. They are called ",(0,o.kt)("inlineCode",{parentName:"p"},"tags")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"column name")," is either a ",(0,o.kt)("inlineCode",{parentName:"p"},"field key")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tag key"),". The value in a column is either a ",(0,o.kt)("inlineCode",{parentName:"p"},"tag value")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"key value"),".\nIn an SQL query, you can only ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," interval and tag ",(0,o.kt)("inlineCode",{parentName:"p"},"values"),".\nInfluxDB identifies unique data points by their measurement, tag set, and timestamp (See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2/write-data/best-practices/duplicate-points/"},"here")," for more information.).\nIf you insert data with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"measurement"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," values that already exist in the database, then the row is overwritten without warning."),(0,o.kt)("p",null,"See Influx' documentation for the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v1/concepts/key_concepts/"},"InfluxDB Key concepts"),"."),(0,o.kt)("h2",{id:"costs"},"Costs"),(0,o.kt)("p",null,"We have experience with approximately 50-100 participants enrolled in an experiment using the Cozie app."))}h.isMDXComponent=!0}}]);