"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8933],{8616:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4848),o=n(8453),i=n(6025);const r={id:"custom_watch_survey",title:"How to Create a Custom Watch Survey",sidebar_label:"Watch Survey",sidebar_position:1},l=void 0,c={id:"custom_surveys/custom_watch_survey",title:"How to Create a Custom Watch Survey",description:"In Cozie, it is possible to create a custom watch survey. The watch",source:"@site/docs/3_custom_surveys/01_watch_survey.md",sourceDirName:"3_custom_surveys",slug:"/custom_surveys/custom_watch_survey",permalink:"/docs/custom_surveys/custom_watch_survey",draft:!1,unlisted:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/3_custom_surveys/01_watch_survey.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"custom_watch_survey",title:"How to Create a Custom Watch Survey",sidebar_label:"Watch Survey",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Watch Survey",permalink:"/docs/custom_surveys/custom_watch_survey_intro"},next:{title:"Watch Survey Icons",permalink:"/docs/custom_surveys/watch_survey_icons"}},h={},d=[{value:"Create a JSON file",id:"create-a-json-file",level:2},{value:"How to create a watch survey link",id:"how-to-create-a-watch-survey-link",level:2},{value:"Host watch survey on Github",id:"host-watch-survey-on-github",level:3},{value:"Host watch survey on Google Drive",id:"host-watch-survey-on-google-drive",level:3},{value:"How to load the watch survey into the Cozie app",id:"how-to-load-the-watch-survey-into-the-cozie-app",level:2},{value:"Example of JSON file for a custom watch survey",id:"example-of-json-file-for-a-custom-watch-survey",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"In Cozie, it is possible to create a custom watch survey. The watch\nsurvey is defined in a JSON file. An example is shown below."}),"\n",(0,t.jsx)(s.h2,{id:"create-a-json-file",children:"Create a JSON file"}),"\n",(0,t.jsxs)(s.p,{children:["Create a JSON file. A JSON file is just a text file with the file extension.json. Below is a minimal example of a watch survey with one question and one response option. A longer example of a working watch survey is available at the ",(0,t.jsx)(s.a,{href:"#example-of-json-file-for-a-custom-watch-survey",children:"bottom of this page"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="Minimal example"',children:'{\n  "survey_name": "Example Survey",\n  "survey_id": "example_survey",\n  "survey": [{\n      "question": "How would you prefer to be?",\n      "question_id": "q_thermal",\n      "response_options": [{\n          "text": "Cooler",\n          "icon": "snowflake",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        }\n      ]\n    },\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"The table below explains the field names from the example above."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Key"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Example value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"survey_name"})}),(0,t.jsx)(s.td,{children:"Name of watch survey that is shown in the 'Settings' tab of the Cozie iPhone app"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Thermal (short)"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"survey_id"})}),(0,t.jsx)(s.td,{children:"Survey ID"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"thermal_short"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"survey"})}),(0,t.jsx)(s.td,{children:"Array with questions"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"question"})}),(0,t.jsx)(s.td,{children:"Question that is shown in the watch survey on the Apple Watch"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"How would you prefer to be?"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"question_id"})}),(0,t.jsxs)(s.td,{children:["The question ID is used as a column name in the database. It has to have the prefix ",(0,t.jsx)(s.code,{children:"q_"})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"q_preference_thermal"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"response_options"})}),(0,t.jsx)(s.td,{children:"Array of response options objects"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"text"})}),(0,t.jsx)(s.td,{children:"Response text that is shown in the watch survey on the Apple Watch and string that is stored in the database."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Cooler"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"icon"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"watch_survey_icons",children:"Filename or SF symbol name"})," of icon that is shown on the left-hand side of the response option text"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"snow_flake"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"icon_background_color"})}),(0,t.jsx)(s.td,{children:"Background color that is shown for image-based icons and SF-Symbol-based icons"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"#F1A62E"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"use_sf_symbols"})}),(0,t.jsxs)(s.td,{children:["Boolean that indicates whether the value specified in ",(0,t.jsx)(s.code,{children:"icon"})," is a filename or an SF symbol name"]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sf_symbols_color"})}),(0,t.jsx)(s.td,{children:"Foreground color that is shown for SF symbols"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"#000000"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"next_question_id"})}),(0,t.jsxs)(s.td,{children:["Question ID of the next question that is shown if this response option is selected. If the watch survey should end after selecting this response option, then the ",(0,t.jsx)(s.code,{children:"next question_id"})," is an empty string."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"q_location"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-create-a-watch-survey-link",children:"How to create a watch survey link"}),"\n",(0,t.jsx)(s.p,{children:"The watch survey JSON file needs to be made available online. It cannot be uploaded into the app as a file. Here, we show two easy ways to host a file online, but you can also use other services."}),"\n",(0,t.jsx)(s.h3,{id:"host-watch-survey-on-github",children:"Host watch survey on Github"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create the ",(0,t.jsx)(s.em,{children:"public"})," repository on Github"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add the watch survey JSON file to the repository.",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to the raw version of the file.",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{alt:"Screenshot of watch survey file on Github",src:(0,i.A)("img/custom_surveys/github_ws_file.png"),width:"100%"}),"  \xa0"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Copy the URL from the raw file.",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{alt:"Screenshot of raw watch survey file on Github",src:(0,i.A)("img/custom_surveys/github_ws_file_raw.png"),width:"100%"}),"  \xa0"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Use this URL in the app settings as shown in the next section."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"host-watch-survey-on-google-drive",children:"Host watch survey on Google Drive"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add the JSON file to a Google Drive"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Open the 'Share' options for the JSON file of the watch survey."}),"\n",(0,t.jsx)("img",{alt:"Screenshot of watch survey file on Google Drive",src:(0,i.A)("img/custom_surveys/google_ws_drive_share_1.png"),width:"100%"}),"\n",(0,t.jsx)(s.p,{children:"Make 'Anyone with link' a 'Viewer' for the JSON file."}),"\n",(0,t.jsx)("img",{alt:"Screenshot of watch survey file on Google Drive",src:(0,i.A)("img/custom_surveys/google_ws_drive_share_2.png"),width:"60%"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Copy the link of the JSON file."}),"\n",(0,t.jsx)("img",{alt:"Screenshot of watch survey file on Google Drive",src:(0,i.A)("img/custom_surveys/google_ws_drive_share_link.png"),width:"100%"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The link to the JSON file should look similar to this example:\n",(0,t.jsx)(s.code,{children:"https://drive.google.com/file/d/1ECfttYiSX7e5vQwoVAldOrJerMwH-EBt/view?usp=drive_link"})]}),"\n",(0,t.jsxs)(s.p,{children:["The important part is the file ID ",(0,t.jsx)(s.code,{children:"1ECfttYiSX7e5vQwoVAldOrJerMwH-EBt"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Add the file ID to the following URL: ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.code,{children:"https://drive.google.com/uc?export=download&id="})]}),"\n",(0,t.jsxs)(s.p,{children:["For the above example, the resulting URL is ",(0,t.jsx)(s.code,{children:"https://drive.google.com/uc?export=download&id=1ECfttYiSX7e5vQwoVAldOrJerMwH-EBt"})]}),"\n",(0,t.jsx)(s.p,{children:"If you put this URL into your web browser, it should either display the watch survey file or download it directly."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Use this URL in the app settings as shown in the next section."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-load-the-watch-survey-into-the-cozie-app",children:"How to load the watch survey into the Cozie app"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open the Cozie app and go to the ",(0,t.jsx)(s.em,{children:"Backend"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add the URL to the watch survey file in the input field labeled ",(0,t.jsx)(s.em,{children:"Watch\nSurvey Link"})," ",(0,t.jsx)(s.a,{href:"https://raw.githubusercontent.com/cozie-app/cozie-apple-website/master/static/watch_surveys/watch_survey_example.json",children:"Link to example survey"}),")\n",(0,t.jsx)("img",{alt:"Screenshot backend watch survey configuration",src:(0,i.A)("img/backend_watch_survey.png"),width:"30%"}),"  \xa0"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Press the sync button in the ",(0,t.jsx)(s.em,{children:"Backend"})," tab. The watch survey should now be available to select in the ",(0,t.jsx)(s.em,{children:"Settings"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to the ",(0,t.jsx)(s.em,{children:"Settings"})," tab and select your watch survey. The watch survey defined in the JSON file provided with the link above should be in the pop-up list. Select it."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Sync the settings with the Apple Watch while the Cozie app is open on the Apple Watch, just like described in the ",(0,t.jsx)(s.a,{href:"/docs/setup",children:"Setup guide"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"example-of-json-file-for-a-custom-watch-survey",children:"Example of JSON file for a custom watch survey"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="example_survey.json"',children:'{\n  "survey_name": "Example Survey",\n  "survey_id": "example_survey",\n  "survey": [{\n      "question": "How would you prefer to be?",\n      "question_id": "q_thermal",\n      "response_options": [{\n          "text": "Cooler",\n          "icon": "snowflake",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_location"\n        },\n        {\n          "text": "No Change",\n          "icon": "emoticon_happy",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_location"\n        },\n        {\n          "text": "Warmer",\n          "icon": "flame.fill",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": true,\n          "sf_symbols_color": "#FF0000",\n          "next_question_id": "q_location"\n        }\n      ]\n    },\n    {\n      "question": "Where are you?",\n      "question_id": "q_location",\n      "response_options": [{\n          "text": "Outdoor",\n          "icon": "person_walking",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_clothing"\n        },\n        {\n          "text": "Indoor",\n          "icon": "indoor",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": "q_clothing"\n        }\n      ]\n    },\n    {\n      "question": "What clothes are you wearing?",\n      "question_id": "q_clothing",\n      "response_options": [{\n          "text": "Very light",\n          "icon": "clothes_shirt_sleeveless",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Light",\n          "icon": "clothes_shirt_short",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Medium",\n          "icon": "clothes_shirt_pants",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        },\n        {\n          "text": "Heavy",\n          "icon": "clothes_pullover",\n          "icon_background_color": "#F1A62E",\n          "use_sf_symbols": false,\n          "sf_symbols_color": "#000000",\n          "next_question_id": ""\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);