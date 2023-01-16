"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5605],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(a),N=r,g=u["".concat(p,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1934:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(4996),["components"]),d={id:"downloadData",title:"Download Data",sidebar_label:"Download Data"},p=void 0,o={unversionedId:"downloadData",id:"downloadData",title:"Download Data",description:"Download the data collected using the Cozie Apple Watch survey",source:"@site/docs/downloadData.md",sourceDirName:".",slug:"/downloadData",permalink:"/docs/downloadData",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/downloadData.md",tags:[],version:"current",frontMatter:{id:"downloadData",title:"Download Data",sidebar_label:"Download Data"},sidebar:"someSidebar",previous:{title:"Setup",permalink:"/docs/setup"},next:{title:"Getting Started",permalink:"/docs/gettingStarted"}},m={},u=[{value:"Download the data collected using the Cozie Apple Watch survey",id:"download-the-data-collected-using-the-cozie-apple-watch-survey",level:2},{value:"Watch survey data",id:"watch-survey-data",level:3},{value:"Physiological data",id:"physiological-data",level:3},{value:"Features",id:"features",level:2},{value:"Watch surveys",id:"watch-surveys",level:2},{value:"Thermal (short)",id:"thermal-short",level:3},{value:"Thermal (long)",id:"thermal-long",level:3},{value:"Noise and Privacy",id:"noise-and-privacy",level:3},{value:"Infection Risk",id:"infection-risk",level:3},{value:"Movement",id:"movement",level:3},{value:"Privacy",id:"privacy",level:3}],k={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"download-the-data-collected-using-the-cozie-apple-watch-survey"},"Download the data collected using the Cozie Apple Watch survey"),(0,l.kt)("p",null,"You can download the data you have collected using the Cozie Apple Watch survey using the following Python code.\nPlease note that you will have to specify your ",(0,l.kt)("inlineCode",{parentName:"p"},"ID_PARTICIPANT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ID_EXPERIMENT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"API_KEY"),".\nYou can request an ",(0,l.kt)("inlineCode",{parentName:"p"},"API_KEY")," by emailing us a request at ",(0,l.kt)("a",{parentName:"p",href:"mailto:cozie.app@gmail.com"},"cozie.app@gmail.com")),(0,l.kt)("p",null,"All the data you have queried are saved inside the Pandas dataframe called ",(0,l.kt)("inlineCode",{parentName:"p"},"df"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import requests\nimport json\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Settings\nYOUR_TIMEZONE = 'Asia/Singapore'\nID_PARTICIPANT = 'ExternalUser'\nID_EXPERIMENT = 'AppleStore'\nWEEKS = \"2\"  # Number of weeks from which the data is retrived, starting from now\nAPI_KEY = '' # reach out to cozie.app@gmail.com for an API_KEY\n\n# Query data\npayload = {'id_participant': ID_PARTICIPANT,'id_experiment': ID_EXPERIMENT, 'weeks': WEEKS}\nheaders = {\"Accept\": \"application/json\", 'x-api-key': API_KEY}\nresponse = requests.get('https://m7cy76lxmi.execute-api.ap-southeast-1.amazonaws.com/default/cozie-apple-researcher-read-influx', params=payload, headers=headers)\ndata = json.loads(response.content)\n\n# Convert response in Pandas Dataframe\ndf = pd.DataFrame.from_dict(data).T\ndf.index = pd.to_datetime(df.index, unit='ms')\ndf.index = df.index.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)\npd.options.display.max_columns = None\n\n# Display dataframe\ndf.head()\n")),(0,l.kt)("h3",{id:"watch-survey-data"},"Watch survey data"),(0,l.kt)("p",null,"If you want to focus on the analysis of the watch-based survey data use the code below to filter the dataframe retrieved above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Get only question flow responses\ndf_questions = df[~df["vote_count"].isna()]\ndf_questions.style\n')),(0,l.kt)("h3",{id:"physiological-data"},"Physiological data"),(0,l.kt)("p",null,"Use the code below to plot noise and heart rate data contained in the dataframe retrieved above. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Plot time-series data\nfig, ax = plt.subplots(1,2, figsize =(15, 7))\n\n# Heart rate\ndf["heart_rate"].plot(ax=ax[0], style=\'.\')\nax[0].set_title("Heart Rate", fontsize=18)\nax[0].set_ylabel("Heart Rate [bpm]", fontsize=14)\nax[0].set_xlabel("Time", fontsize=14)\n\n# Sound pressure\ndf["sound_pressure"].plot(ax=ax[1], style=\'.\')\nax[1].set_title("Sound Pressure", fontsize=18)\nax[1].set_ylabel("Sound Pressure [dB?]", fontsize=14)\nax[1].set_xlabel("Time", fontsize=14)\n')),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description/Question"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id_participant")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for each participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id_experiment")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for each experiment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vote_count")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"longitude")),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"longitude in \xb0 provided by GPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latitude")),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"Latitude in \xb0 provided by GPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"body_mass")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Body mass in kg, provided by Apple Health Kit, only available if manually provided in the Apple Health App. Not used for Osk or Orenth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heart_rate")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Heart rate in bpm, provided by Apple Health Kit, submitted as background task. Sampled every 5 min (sometimes less)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_heartRate")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Heart rate in bpm, provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 5 min (sometimes less)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_oxygenSaturation")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Blood oxygen saturation in % provided by Apple Health Kit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_walkingDistance")),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance walked in m, provided by Apple Health Kit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_stepCount")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of steps walked, provided by Apple Health Kit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_standTime")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Stand time in ?, provided by Apple Health Kit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_restingHeartRate")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Resting heart rate in bpm, provided by Apple Health Kit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sound_pressure")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Noise level in dB(A), provided by Apple Health Kit, submitted as background task. Sampled every 30 min")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts_hearingEnvironmentalExposure")),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Noise level in dB(A), provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 30min")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp_start")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp (UTC) of when micro survey was started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp (UTC) of when micro survey was submitted, also serves as index (",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp_end"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp_location")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp (UTC) of when the GPS was retrieved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp_lambda")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp (UTC) of when the AWS Lambda function was invoked to insert the row into the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings_participation_time_start")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Daily reminder start time set in the Cozie app by the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings_participation_time_end")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Daily reminder end time set in the Cozie app by the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings_participation_days")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Participation days set in the Cozie app by the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings_notification_frequency")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Reminder frequency set in the Cozie app by the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id_one_signal")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique OneSignal player id provided by OneSignal")))),(0,l.kt)("h2",{id:"watch-surveys"},"Watch surveys"),(0,l.kt)("h3",{id:"thermal-short"},"Thermal (short)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tc_preference")),(0,l.kt)("td",{parentName:"tr",align:null},"How would you prefer to be?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Cooler", "No Change", "Warmer"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"are_you")),(0,l.kt)("td",{parentName:"tr",align:null},"Are you?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Outdoor", "Indoor"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clo")),(0,l.kt)("td",{parentName:"tr",align:null},"What clothes are you wearing?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Very light", "Light", "Medium", "Heavy"')))),(0,l.kt)("h3",{id:"thermal-long"},"Thermal (long)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tc_preference")),(0,l.kt)("td",{parentName:"tr",align:null},"How would you prefer to be?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Cooler", "No Change", "Warmer"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"light_preference")),(0,l.kt)("td",{parentName:"tr",align:null},"Light preference"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Dimmer", "No Change", "Brighter"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sound_preference")),(0,l.kt)("td",{parentName:"tr",align:null},"Sound preference"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Quieter", "No Change", "Louder"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"are_you")),(0,l.kt)("td",{parentName:"tr",align:null},"Are you?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Outdoor", "Indoor"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location_place")),(0,l.kt)("td",{parentName:"tr",align:null},"Where are you?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Home", "Office", "Vehicle", "Other"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mood")),(0,l.kt)("td",{parentName:"tr",align:null},"What mood are you in?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Bad", "Good", "Neither"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clo")),(0,l.kt)("td",{parentName:"tr",align:null},"What clothes are you wearing?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Very light", "Light", "Medium", "Heavy"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"changed_location")),(0,l.kt)("td",{parentName:"tr",align:null},"Have you changed location, activity or clothing over the last 10-min?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Yes", "No"')))),(0,l.kt)("h3",{id:"noise-and-privacy"},"Noise and Privacy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"noise-nearby")),(0,l.kt)("td",{parentName:"tr",align:null},"Noise distractions nearby? (without earphones)"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"None", "A Little", "A lot"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"noise-kind")),(0,l.kt)("td",{parentName:"tr",align:null},"What kind of noise?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Talking", "Traffic", "Weather","Appliances", "Construction", "Other"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"earphones")),(0,l.kt)("td",{parentName:"tr",align:null},"Wearing earphones?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"No earphones", "Earphones", "Noise cancelling"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thermal-preference")),(0,l.kt)("td",{parentName:"tr",align:null},"Thermally, what do you prefer now?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Cooler", "No change", "Warmer"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location")),(0,l.kt)("td",{parentName:"tr",align:null},"Where are you?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Indoor - Office", "Indoor - Class", "Indoor - Home", "Indoor - Other", "Outdoor","Transportation"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location-office")),(0,l.kt)("td",{parentName:"tr",align:null},"What kind of office?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Individual", "Small shared", "Large open plan", "Cubicles", "Conference room"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location-transport")),(0,l.kt)("td",{parentName:"tr",align:null},"What kind of transport?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Bus", "Train", "Car", "Taxi", "Other"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alone-group")),(0,l.kt)("td",{parentName:"tr",align:null},"Alone or in a group?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Alone", "Group", "Online group"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activity-category")),(0,l.kt)("td",{parentName:"tr",align:null},"Category of activity?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Focus", "Leisure", "Other"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activity-category")),(0,l.kt)("td",{parentName:"tr",align:null},"Category of activity?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Socialize", "Collaborate", "Learn", "Other"')))),(0,l.kt)("h3",{id:"infection-risk"},"Infection Risk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"surroundings_infection")),(0,l.kt)("td",{parentName:"tr",align:null},"Do your surroundings increase infection risk?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Not at all", "A Little", "A lot"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cause_risk")),(0,l.kt)("td",{parentName:"tr",align:null},"What causes more risk?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Ventilation", "People", "Surface"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"concerns")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifically, what concerns you?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Density", "Proximity", "Both"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"within_5m")),(0,l.kt)("td",{parentName:"tr",align:null},"Currently, how many people within 5m?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"0 pax", "1-4 pax", "5+ pax"')))),(0,l.kt)("h3",{id:"movement"},"Movement"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"last_60min")),(0,l.kt)("td",{parentName:"tr",align:null},"In the past 60min, I used"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Lift", "Stairs", "Both", "Neither"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lift_why")),(0,l.kt)("td",{parentName:"tr",align:null},"Took lift, why?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Convenient", "Less effort", "No stairs"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stairs_why")),(0,l.kt)("td",{parentName:"tr",align:null},"Took stairs, why?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Convenient", "No lift", "Save energy", "Healthy"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lift_con")),(0,l.kt)("td",{parentName:"tr",align:null},"Lift convenient because?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Easiest", "Fastest", "Both"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stairs_con")),(0,l.kt)("td",{parentName:"tr",align:null},"Stairs convenient because"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Easiest", "Fastest", Both"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"working")),(0,l.kt)("td",{parentName:"tr",align:null},"Are you working right now?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Yes", "No"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"workstation")),(0,l.kt)("td",{parentName:"tr",align:null},"What kind of workstation?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Adjustable", "Standing", "Sitting"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"adj_height")),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusted height today?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Up & down", "Down", "Up", "Never"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"current")),(0,l.kt)("td",{parentName:"tr",align:null},"Are you"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Standing", "Sitting"')))),(0,l.kt)("h3",{id:"privacy"},"Privacy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,l.kt)("th",{parentName:"tr",align:null},"Question"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Response options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alone_group")),(0,l.kt)("td",{parentName:"tr",align:null},"Alone or in a group?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Alone", "Online", "Group"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activity")),(0,l.kt)("td",{parentName:"tr",align:null},"Category of activity?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Socialize", "Collaborate", "Learn"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"distracting")),(0,l.kt)("td",{parentName:"tr",align:null},"Possibly distracting others?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Yes", "No"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"distractions")),(0,l.kt)("td",{parentName:"tr",align:null},"Distractions nearby?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"None", "A little", "A lot"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activity")),(0,l.kt)("td",{parentName:"tr",align:null},"Category of activity?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Focus", "Leisure"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"more_privacy')),(0,l.kt)("td",{parentName:"tr",align:null},"Feeling like you need more privacy?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Yes", "No"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kind_distraction")),(0,l.kt)("td",{parentName:"tr",align:null},"What kind of distraction"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Visual", "Audio", "Others"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"why_more_privacy")),(0,l.kt)("td",{parentName:"tr",align:null},"Why is more privacy needed?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"See me", "Hear me", "Both"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"what_privacy")),(0,l.kt)("td",{parentName:"tr",align:null},"What is it?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Thermal", "Scent", "Glare"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"people_see")),(0,l.kt)("td",{parentName:"tr",align:null},"What do people see?"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Appearance", "Work", "Behaviour"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"activity")),(0,l.kt)("td",{parentName:"tr",align:null},'"Category of activity?'),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"Socialize", "Collaborate", "Learn"')))))}N.isMDXComponent=!0}}]);