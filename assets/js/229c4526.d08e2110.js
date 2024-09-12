"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7878],{1680:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=a(4848),o=a(8453);a(6025);const s={id:"data_download_online",title:"Download Data (online)",sidebar_label:"Download Data (online)",sidebar_position:1,slug:"download"},i=void 0,d={id:"download_data/data_download_online",title:"Download Data (online)",description:"Download the data collected using the Cozie Apple Watch survey",source:"@site/docs/2_download_data/01_data_download_online.md",sourceDirName:"2_download_data",slug:"/download_data/download",permalink:"/docs/download_data/download",draft:!1,unlisted:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/2_download_data/01_data_download_online.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"data_download_online",title:"Download Data (online)",sidebar_label:"Download Data (online)",sidebar_position:1,slug:"download"},sidebar:"myAutogeneratedSidebar",previous:{title:"Glossary",permalink:"/docs/overview/glossary"},next:{title:"Download Data (offline)",permalink:"/docs/download_data/data_download_offline"}},l={},r=[{value:"Download the data collected using the Cozie Apple Watch survey",id:"download-the-data-collected-using-the-cozie-apple-watch-survey",level:2},{value:"Watch survey data",id:"watch-survey-data",level:3},{value:"Physiological data",id:"physiological-data",level:3},{value:"Column names &amp; watch surveys",id:"column-names--watch-surveys",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"download-the-data-collected-using-the-cozie-apple-watch-survey",children:"Download the data collected using the Cozie Apple Watch survey"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the data you have collected using the Cozie Apple Watch survey using the following Python code.\nPlease note that you will have to specify your ",(0,t.jsx)(n.code,{children:"ID_PARTICIPANT"}),", ",(0,t.jsx)(n.code,{children:"ID_EXPERIMENT"}),", ",(0,t.jsx)(n.code,{children:"ID_PASSWORD"})," and ",(0,t.jsx)(n.code,{children:"API_KEY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can request an ",(0,t.jsx)(n.code,{children:"API_KEY"})," by emailing us a request at ",(0,t.jsx)(n.a,{href:"mailto:cozie.app@gmail.com",children:"cozie.app@gmail.com"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ID_PARTICIPANT"}),", ",(0,t.jsx)(n.code,{children:"ID_EXPERIMENT"})," are available in the 'Settings' tab of the Cozie phone app."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ID_PASSWORD"})," is available in the 'Backend' tab of the Cozie phone app."]}),"\n",(0,t.jsxs)(n.p,{children:["All the data saved inside the Pandas dataframe called ",(0,t.jsx)(n.code,{children:"df"}),". The example below is tested with Pandas version 1.3.5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport shutil\n\n# Settings\nYOUR_TIMEZONE = "Asia/Singapore"\nID_PARTICIPANT = "ExternalUser"\nID_EXPERIMENT = "AppleStore"\nID_PASSWORD = ""\nCOLUMNS = [\'ws_survey_count\', \'ws_heart_rate\']\nDAYS = "2"  # Number of weeks from which the data is retrieved, ending now, i.e., start date look up: now - WEEKS, end date look up: now\nAPI_KEY = ""  # reach out to cozie.app@gmail.com for an API_KEY\n\n# Query data\npayload = {\n    "id_participant": ID_PARTICIPANT,\n    "id_experiment": ID_EXPERIMENT,\n    "id_password": ID_PASSWORD,\n    "days": DAYS,\n    "columns": COLUMNS\n}\nheaders = {"Accept": "application/json", "x-api-key": API_KEY}\nresponse = requests.get(\n    "https://69xmiejax4.execute-api.ap-southeast-1.amazonaws.com/prod/retrieve",\n    params=payload,\n    headers=headers,\n)\nurl = response.content\n\n# Download zipped CSV file with Cozie data\nwith requests.get(url, stream=True) as r:\n    with open("cozie.zip", "wb") as f:\n        shutil.copyfileobj(r.raw, f)\n\n# Convert zipped CSV file with Cozie to dataframe\nwith open("cozie.zip", "rb") as f:\n    df = pd.read_csv(f, compression={"method": "zip", "archive_name": "sample.csv"})\n\ndf = df.drop(columns=["Unnamed: 0"])\ndf["index"] = pd.to_datetime(df["index"])\ndf = df.set_index("index")\ndf.index = df.index.tz_convert(YOUR_TIMEZONE)\n\n# Display dataframe\ndf.head()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"watch-survey-data",children:"Watch survey data"}),"\n",(0,t.jsx)(n.p,{children:"If you want to focus on the analysis of the watch-based survey data use the code below to filter the dataframe retrieved above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Get only question flow responses\ndf_questions = df[df["ws_survey_count"].notna()]\ndf_questions.head()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"physiological-data",children:"Physiological data"}),"\n",(0,t.jsx)(n.p,{children:"Use the code below to plot noise and heart rate data contained in the dataframe retrieved above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Plot time-series data\nfig, ax = plt.subplots(1,2, figsize =(15, 7))\n\n# Heart rate\ndf["ts_heart_rate"].plot(ax=ax[0], style=\'.\')\nax[0].set_title("Heart Rate", fontsize=18)\nax[0].set_ylabel("Heart Rate [bpm]", fontsize=14)\nax[0].set_xlabel("Time", fontsize=14)\n\n# Noise\ndf["ts_audio_exposure_environment"].plot(ax=ax[1], style=\'.\')\nax[1].set_title("Sound Pressure", fontsize=18)\nax[1].set_ylabel("Sound Pressure [dBA]", fontsize=14)\nax[1].set_xlabel("Time", fontsize=14)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"column-names--watch-surveys",children:"Column names & watch surveys"}),"\n",(0,t.jsx)(n.p,{children:"The description for all features and the watch survey questions are available on separate pages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"data_overview",children:"Column names"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_thermal_short",children:"Thermal (short)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_thermal_long",children:"Thermal (long)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_noise_and_privacy",children:"Noise and Privacy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_infection_risk",children:"Infection Risk"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_movement",children:"Movement"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_privacy",children:"Privacy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"ws_interaction",children:"Interaction"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>d});var t=a(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);