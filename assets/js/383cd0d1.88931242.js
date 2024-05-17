"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7693],{7748:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var n=l(4848),s=l(8453),i=l(6025);const d={id:"backend_cozie_to_database",title:"Sending Cozie data",sidebar_label:"Sending Cozie data"},r=void 0,a={id:"backend/backend_cozie_to_database",title:"Sending Cozie data",description:"\x3c!--",source:"@site/docs/7_backend/02_cozie_to_database.md",sourceDirName:"7_backend",slug:"/backend/backend_cozie_to_database",permalink:"/docs/backend/backend_cozie_to_database",draft:!1,unlisted:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/7_backend/02_cozie_to_database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backend_cozie_to_database",title:"Sending Cozie data",sidebar_label:"Sending Cozie data"},sidebar:"myAutogeneratedSidebar",previous:{title:"Custom backend",permalink:"/docs/backend/custom_backend"},next:{title:"Reading Cozie data",permalink:"/docs/backend/backend_database_to_cozie"}},x={},c=[{value:"Overview",id:"overview",level:2},{value:"Changes in the Cozie app",id:"changes-in-the-cozie-app",level:2},{value:"Payload data structure",id:"payload-data-structure",level:2},{value:"Payload data structure for watch survey",id:"payload-data-structure-for-watch-survey",level:2},{value:"Payload data structure for HealthKit data",id:"payload-data-structure-for-healthkit-data",level:2},{value:"Lambda function code",id:"lambda-function-code",level:3},{value:"Lambda configuration",id:"lambda-configuration",level:3},{value:"cozie-apple-v3-app-write-queue",id:"cozie-apple-v3-app-write-queue",level:4},{value:"cozie-apple-v3-app-write-influx-queue",id:"cozie-apple-v3-app-write-influx-queue",level:4},{value:"SQS configuration",id:"sqs-configuration",level:3},{value:"API Gateway configuration",id:"api-gateway-configuration",level:3},{value:"Notes",id:"notes",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{alt:"Data flow from Cozie app to database",src:(0,i.A)("img/backend/backend_write_influx_with_SQS.jpg"),width:"30%"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["The Cozie app calls the AWS API Gateway using the API Gateway Key. The ",(0,n.jsx)(t.code,{children:"API Write URL"})," and ",(0,n.jsx)(t.code,{children:"API Write Key"})," are provided in the 'Backend' tab of the Cozie app. The API Gateway checks the API key and then forwards the request to the Lambda function 'cozie-apple-v3-app-write-queue'. This Lambda function splits the payload into chunks of 100 rows each and inserts it into the SQS queue 'cozie-apple-app-write-influx-queue'."]}),"\n",(0,n.jsx)(t.p,{children:"The SQS queue, then triggers the Lambda function 'cozie-apple-v3-app-write-influx-queue' which then processes the payload and inserts it into InfluxDB. The processing includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"checking the datatype of field values"}),"\n",(0,n.jsxs)(t.li,{children:["adding ",(0,n.jsx)(t.code,{children:"timestamp_lambda"}),", ",(0,n.jsx)(t.code,{children:"transmit_trigger"}),", ",(0,n.jsx)(t.code,{children:"_lambda"}),", ",(0,n.jsx)(t.code,{children:"_trigger"})," to the row"]}),"\n",(0,n.jsx)(t.li,{children:"SQL sanitization"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"changes-in-the-cozie-app",children:"Changes in the Cozie app"}),"\n",(0,n.jsxs)(t.p,{children:["In order to have Cozie app send the data to your own backend, you need to update ",(0,n.jsx)(t.code,{children:"API Write URL"})," and the ",(0,n.jsx)(t.code,{children:"API Write Key"})," in the 'Backend' tab of the Cozie app."]}),"\n",(0,n.jsx)(t.h2,{id:"payload-data-structure",children:"Payload data structure"}),"\n",(0,n.jsxs)(t.p,{children:["The Cozie app sends data to the backend in the same payload format for all types of data. The payload format is inspired by the InfluxDB Python client and how it can use dictionaries as input.\nThe example below shows a minimal payload that is sent from the Cozie app to the backend. It represents one row in a InfluxDB table or ",(0,n.jsx)(t.code,{children:"measurement"}),". All data, i.e., watch survey, HealthKit data, and GPS data follows this structure.\nThe field names listed under ",(0,n.jsx)(t.code,{children:"fields"})," are listed in the ",(0,n.jsx)(t.a,{href:"../download_data/data_overview",children:"data overview"}),", e.g., instead of ",(0,n.jsx)(t.code,{children:"example_integer"})," you could use ",(0,n.jsx)(t.code,{children:"ts_HRV"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="Watch survey payload example"',children:'[\n   {\n      "time":"2022-09-01T07:02:51.578+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "example_integer":3,\n         "example_string":"test",\n      }\n   }\n]\n'})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Field name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"time"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Timestamp that is save to InfluxDB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"measurement"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["This is similar to a Table in MySQL. See ",(0,n.jsx)(t.a,{href:"https://docs.influxdata.com/influxdb/v1/concepts/key_concepts/",children:"InfluxDB key concepts for more information"}),". Within the Cozie framework data from each experiment is saved into a separate measurement/table. Hence, the ",(0,n.jsx)(t.code,{children:"id_experiment"})," and measururement are synonym. In the example above the ",(0,n.jsx)(t.code,{children:"id_experiment"})," is 'dev'."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"tags"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"id_onesignal"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Player ID provided by OneSignal. This ID is needed to send a push notification to this particular participant using the OneSignal API."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"id_participant"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unique identifier for Participant"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"id_password"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Password for participant. This password should be unique for reach participant. It is needed to send push notifications and retrieve Cozie data using our web API for researchers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"fields"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"example_integer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Example for an integer. Any string can be chosen as field key. The datatype of the field value needs to be checked before insertion into InfluxDB."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"example_string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Example for a string."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"payload-data-structure-for-watch-survey",children:"Payload data structure for watch survey"}),"\n",(0,n.jsxs)(t.p,{children:["The example below shows the payload from a watch survey response. The fields with the prefix ",(0,n.jsx)(t.code,{children:"q_"})," are defined in the ",(0,n.jsx)(t.a,{href:"../custom_surveys/custom_watch_survey",children:"JSON file for the watch survey"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="Watch survey payload example"',children:'[\n   {\n      "time":"2022-09-01T07:02:51.578+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "ws_survey_count":3,\n         "ws_timestamp_start":"2022-09-02T05:03:21.066+0800",\n         "ws_timestamp_location":"2022-09-02T05:01:22.645+0800",\n         "ws_longitude":103.77041753262827,\n         "ws_latitude":1.2965471870539595,\n         "ws_altitude": 73.4,\n         "ws_location_floor":3,\n         "ws_location_accuracy_horizontal":5.4,\n         "ws_location_accuracy_vertical":2.8,\n         "ws_location_acquisition_method":"GPS",\n         "ws_location_source_device":"Apple Watch",\n         "q_preference_thermal":"No Change",\n         "q_preference_noise":"Quieter",\n         "q_noise_source":"Appliances",\n         "q_headphones":"No",\n         "q_preference":"Cooler",\n         "transmit_trigger":"watch_survey",\n      }\n   }\n]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"payload-data-structure-for-healthkit-data",children:"Payload data structure for HealthKit data"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="HealthKit payload example"',children:'[\n   {\n      "time":"2022-09-01T07:42:24.471+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "heart_rate":74,\n         "transmit_trigger":"background_task"\n      }\n   },\n   {\n      "time":"2022-09-01T07:47:24.471+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "heart_rate":74,\n         "transmit_trigger":"background_task"\n      }\n   },\n   {\n      "time":"2022-09-01T08:46:30.479+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "ts_audio_exposure_environment":57,\n         "transmit_trigger":"background_task"\n      }\n   },\n   {\n      "time":"2022-09-02T04:22:59.454+0800",\n      "measurement":"dev",\n      "tags":{\n         "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n         "id_participant":"dev01",\n         "id_password":"5DAC30B6E86"\n      },\n      "fields":{\n         "ts_audio_exposure_environment":60,\n         "transmit_trigger":"background_task"\n      }\n   }\n]\n'})}),"\n",(0,n.jsx)(t.h3,{id:"lambda-function-code",children:"Lambda function code"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-app-write-queue",children:"cozie-apple-v3-app-write-queue"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/cozie-app/cozie-apple-backend/tree/main/lambda_cozie-apple-v3-app-write-influx-queue",children:"cozie-apple-v3-app-write-influx-queue"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"lambda-configuration",children:"Lambda configuration"}),"\n",(0,n.jsx)(t.h4,{id:"cozie-apple-v3-app-write-queue",children:"cozie-apple-v3-app-write-queue"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"General configuration"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Memory"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2048 MB"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Ephemeral storage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"512 MB"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0 min 29 sec"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout limit for API Gateway is 30 seconds"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Triggers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"API Gateway"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cozie-apple-v3-researcher-api"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environment variables"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SQS_URL"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"https:\u200b//sqs.ap-southeast-1.amazonaws.com/XXX/cozie-apple-app-write-influx-queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(replace 'XXX')"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Layers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"No layers required"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"cozie-apple-v3-app-write-influx-queue",children:"cozie-apple-v3-app-write-influx-queue"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"General configuration"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Memory"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2047 MB"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Ephemeral storage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"512 MB"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4 min 0 sec"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Triggers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SQS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cozie-apple-app-write-influx-queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environment variables"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DB_HOST"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XXX.influxcloud.net"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(replace 'XXX')"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DB_NAME"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cozie-apple"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DB_PASSWORD"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XXX"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(replace 'XXX')"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DB_PORT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8086"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DB_USER"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cozie-Apple-Lambda-Writer-App-API"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Layers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AWSSDKPandas-Python311"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AWS Layer for Pandas"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Influx"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Custom layer for InfluxDB client"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sqs-configuration",children:"SQS configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Details"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Standard"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cozie-apple-app-write-influx-queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Configuration"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Visibility timeout"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"30 seconds"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Message retention period"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4 days"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Maximum Message size"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"256KB"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"maximum value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delivery delay"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0 seconds"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Receive message wait time"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"o seconds"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Encryption"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Server-side encryption"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Encryption key type"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Amazon SQS key (SSE-SQS)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Access policy"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Basic"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Define who can send messages to the queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Only the queue owner"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Define who can receive messages from the queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Only the queue owner"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Redrive allow policy"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Disabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Dead-letter queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Disabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"api-gateway-configuration",children:"API Gateway configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Proxy resource"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"disabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resource path"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resource name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"write-queue"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CORS (Cross Origin Resource Sharing)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Method details"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Method type"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ANY"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Integration type"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Lambda function"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Lambda proxy integration"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Lambda function"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["arn:aws:lambda:[region]:[Accound ID]:function",":cozie-apple-v3-app-write-queue"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"check dropdown menu"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Default timeout"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"29 seconds (default)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Method request settings"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"None"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Request validator"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"None"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"API key required"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"URL query string parameters"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"leave default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"HTTP request headers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"leave default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Request body"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"leave default"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Initially, the write chain was shorter, only including the AWS API Gateway and one lambda function. Overtime, the amount of data logged by the Cozie app increased and the duration for the Lambda function to process the data increased as well. Eventually, it could take 20-30 seconds to process the request. The participant needed to wait this amount of time for the watch app to submit the survey. Python Lambda functions don't support streaming. Hence, Python Lambda functions cannot return a response early. Hence, we decided to make the data transfer from the app to the backend independent from the data insertion into the database."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Currently, it the datatype of field values needs to be checked on the backend. Otherwise, one risks loosing data if the datatype varies. This can happen in unfortunate circumstances, e.g., a field value that is normally a float (",(0,n.jsx)(t.code,{children:"50.56"}),"), but also can happen to be an integer (",(0,n.jsx)(t.code,{children:"51"}),"). Whatever datatype is inserted first into InfluxDB defines the datatype of the column of a particular experiment ID (or ",(0,n.jsx)(t.code,{children:"measurement"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"This could be avoided if the datatype is encoded in the payload. This will likely be addressed in the near future, e.g.,"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="Watch survey payload example"',children:' [\n    {\n       "time":"2022-09-01T07:02:51.578+0800",\n       "measurement":"dev",\n       "tags":{\n          "id_onesignal":"35E2A783-35DA-4C5F-B54E-5DAC30B6E860",\n          "id_participant":"dev01",\n          "id_password":"5DAC30B6E86"\n       },\n       "fields_int":{\n          "example_integer_1":3,\n          "example_integer_2":5,\n       },\n       "fields_float":{\n          "example_float_1":1.23,\n          "example_float_2":90.45,\n       },\n       "fields_str":{\n          "example_string_1":"test",\n          "example_string_2":"asdf",\n       }\n    }\n ]\n'})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var n=l(6540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);