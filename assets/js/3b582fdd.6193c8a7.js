"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1832],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||h[m]||o;return n?i.createElement(b,r(r({ref:t},d),{},{components:n})):i.createElement(b,r({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(4996),p=["components"],c={id:"qr_code",title:"Creating a QR Code for Onboarding",sidebar_label:"QR Code",sidebar_position:2},l=void 0,d={unversionedId:"deployment/qr_code",id:"deployment/qr_code",title:"Creating a QR Code for Onboarding",description:"Onboarding can be accelerated by creating a deep link embedded in a QR code that contains all Cozie settings. The link can be opened on the iPhone. Alternatively, the QR code can be scanned with the camera app on the iPhone. Both actions open the 'Settings' tab in the Cozie iPhone app. To complete the change of settings, open the Cozie Watch app and press the sync button in the 'Settings' tab of the Cozie iPhone app while the Cozie watch app is open. The transfer of the settings from the iPhone to the Apple Watch is successful if the first question of the watch survey is visible on the Apple Watch.",source:"@site/docs/4_deployment/qr_code.md",sourceDirName:"4_deployment",slug:"/deployment/qr_code",permalink:"/docs/deployment/qr_code",draft:!1,editUrl:"https://github.com/cozie-app/cozie-apple-website/tree/master/docs/4_deployment/qr_code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"qr_code",title:"Creating a QR Code for Onboarding",sidebar_label:"QR Code",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"Deployment",permalink:"/docs/deployment/deployment"},next:{title:"Customize Cozie",permalink:"/docs/customize_cozie_app/customize_cozie"}},s={},h=[{value:"Deep link and QR code creation",id:"deep-link-and-qr-code-creation",level:2},{value:"Example QR Code",id:"example-qr-code",level:2},{value:"Example Deep Link",id:"example-deep-link",level:2}],m={toc:h},b="wrapper";function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)(b,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Onboarding can be accelerated by creating a deep link embedded in a QR code that contains all Cozie settings. The link can be opened on the iPhone. Alternatively, the QR code can be scanned with the camera app on the iPhone. Both actions open the 'Settings' tab in the Cozie iPhone app. To complete the change of settings, open the Cozie Watch app and press the sync button in the 'Settings' tab of the Cozie iPhone app while the Cozie watch app is open. The transfer of the settings from the iPhone to the Apple Watch is successful if the first question of the watch survey is visible on the Apple Watch."),(0,o.kt)("h2",{id:"deep-link-and-qr-code-creation"},"Deep link and QR code creation"),(0,o.kt)("p",null,"Below is a code snippet that creates a deep link and corresponding QR code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport base64\nimport qrcode\nfrom IPython.display import Image\n\n# Onboarding payload with Cozie settings\nid_participant = "example_participant_01"\nid_experiment = "example_experiment"\nid_password = "1G8yOhPvMZ6xx"\npayload = (\n    f"{{"\n    f\'"id_participant": "{id_participant}",\'\n    f\'"id_experiment": "{id_experiment}",\'\n    f\'"wss_title": "Thermal (long)",\'\n    f\'"wss_goal": 150,\'\n    f\'"wss_time_out": 3500,\'\n    f\'"wss_reminder_enabeled": true,\'\n    f\'"wss_participation_time_start": "09:00",\'\n    f\'"wss_participation_time_end": "18:00",\'\n    f\'"wss_participation_days": "Mo,Tu,We,Th",\'\n    f\'"wss_reminder_interval": 60,\'\n    f\'"pss_reminder_enabled": true,\'\n    f\'"pss_reminder_days": "Fr",\'\n    f\'"pss_reminder_time": "14:00",\'\n    f\'"api_read_url": "https://at6x6b7v54hmoki6dlyew72csq0ihxrn.lambda-url.ap-southeast-1.on.aws",\'\n    f\'"api_read_key": "5LkKVBO1Zp2pbYBbnkQsb8njmf8sGB5zhMrYQmPd",\'\n    f\'"api_write_url": "https://43cb5nnwe3mejojyftbuaow4640nsrnd.lambda-url.ap-southeast-1.on.aws",\'\n    f\'"api_write_key": "5LkKVBO1Zp2pbYBbnkQsb8njmf8sGB5zhMrYQmPd",\'\n    f\'"app_one_signal_app_id": "be00093b-ed75-4c2e-81af-d6b382587283",\'\n    f\'"id_password": "{id_password}",\'\n    f\'"api_watch_survey_url": "https://www.cozie-apple.app/watch_surveys/watch_survey_example.json",\'\n    f\'"api_phone_survey_url": "https://docs.google.com/forms/d/e/1FAIpQLSfOj7_vVRUNDHELmwQqvpFYF5m1p6IXpXaWsQgHOF8HxuTmrw/viewform?usp=pp_url&entry.32388053={id_participant}&entry.1973683772={id_experiment}"\'\n    f"}}"\n)\n\n# Convert payload to deep link\npayload_bytes = payload.encode("ascii")\nbase64_bytes = base64.b64encode(payload_bytes)\nbase64_payload = base64_bytes.decode("ascii")\ndeep_link_url = "coziedev://param?data=" + base64_payload\n\n# Print deep link\nprint(deep_link_url)\nprint(\n    "Number of characters:",\n    len(deep_link_url),\n    "of 2048 characters (",\n    int(len(deep_link_url) / 2048 * 100),\n    "%)",\n)\n\n# Generate QR code\nqr = qrcode.QRCode(version=1, box_size=10, border=5)\nqr.add_data(deep_link_url)\nqr.make(fit=True)\nimg = qr.make_image(fill="black", back_color="white")\nimg.save("qrcode001.png")\nImage("qrcode001.png", width=700, height=700)\n')),(0,o.kt)("h2",{id:"example-qr-code"},"Example QR Code"),(0,o.kt)("p",null,"The above code snippet will return the deep link and QR code shown below. The QR code can be scanned with the default iPhone camera app and it will open the Cozie app with settings applied."),(0,o.kt)("img",{src:(0,r.Z)("img/qr_code_example.png"),width:"700px"}),(0,o.kt)("h2",{id:"example-deep-link"},"Example Deep Link"),(0,o.kt)("p",null,"As an alternative to the QR code the deep link below that can be sent to the participant. Opening the link on the iPhone will open the Cozie app with settings applied."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"coziedev://param?data=eyJpZF9wYXJ0aWNpcGFudCI6ICJleGFtcGxlX3BhcnRpY2lwYW50XzAxIiwiaWRfZXhwZXJpbWVudCI6ICJleGFtcGxlX2V4cGVyaW1lbnQiLCJ3c3NfdGl0bGUiOiAiVGhlcm1hbCAobG9uZykiLCJ3c3NfZ29hbCI6IDE1MCwid3NzX3RpbWVfb3V0IjogMzUwMCwid3NzX3JlbWluZGVyX2VuYWJlbGVkIjogdHJ1ZSwid3NzX3BhcnRpY2lwYXRpb25fdGltZV9zdGFydCI6ICIwOTowMCIsIndzc19wYXJ0aWNpcGF0aW9uX3RpbWVfZW5kIjogIjE4OjAwIiwid3NzX3BhcnRpY2lwYXRpb25fZGF5cyI6ICJNbyxUdSxXZSxUaCIsIndzc19yZW1pbmRlcl9pbnRlcnZhbCI6IDYwLCJwc3NfcmVtaW5kZXJfZW5hYmxlZCI6IHRydWUsInBzc19yZW1pbmRlcl9kYXlzIjogIkZyIiwicHNzX3JlbWluZGVyX3RpbWUiOiAiMTQ6MDAiLCJhcGlfcmVhZF91cmwiOiAiaHR0cHM6Ly9hdDZ4NmI3djU0aG1va2k2ZGx5ZXc3MmNzcTBpaHhybi5sYW1iZGEtdXJsLmFwLXNvdXRoZWFzdC0xLm9uLmF3cyIsImFwaV9yZWFkX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBpX3dyaXRlX3VybCI6ICJodHRwczovLzQzY2I1bm53ZTNtZWpvanlmdGJ1YW93NDY0MG5zcm5kLmxhbWJkYS11cmwuYXAtc291dGhlYXN0LTEub24uYXdzIiwiYXBpX3dyaXRlX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBwX29uZV9zaWduYWxfYXBwX2lkIjogImJlMDAwOTNiLWVkNzUtNGMyZS04MWFmLWQ2YjM4MjU4NzI4MyIsImlkX3Bhc3N3b3JkIjogIjFHOHlPaFB2TVo2eHgiLCJhcGlfd2F0Y2hfc3VydmV5X3VybCI6ICJodHRwczovL3d3dy5jb3ppZS1hcHBsZS5hcHAvd2F0Y2hfc3VydmV5cy93YXRjaF9zdXJ2ZXlfZXhhbXBsZS5qc29uIiwiYXBpX3Bob25lX3N1cnZleV91cmwiOiAiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZk9qN192VlJVTkRIRUxtd1FxdnBGWUY1bTFwNklYcFhhV3NRZ0hPRjhIeHVUbXJ3L3ZpZXdmb3JtP3VzcD1wcF91cmwmZW50cnkuMzIzODgwNTM9ZXhhbXBsZV9wYXJ0aWNpcGFudF8wMSZlbnRyeS4xOTczNjgzNzcyPWV4YW1wbGVfZXhwZXJpbWVudCJ9"},"coziedev://param?data=eyJpZF9wYXJ0aWNpcGFudCI6ICJleGFtcGxlX3BhcnRpY2lwYW50XzAxIiwiaWRfZXhwZXJpbWVudCI6ICJleGFtcGxlX2V4cGVyaW1lbnQiLCJ3c3NfdGl0bGUiOiAiVGhlcm1hbCAobG9uZykiLCJ3c3NfZ29hbCI6IDE1MCwid3NzX3RpbWVfb3V0IjogMzUwMCwid3NzX3JlbWluZGVyX2VuYWJlbGVkIjogdHJ1ZSwid3NzX3BhcnRpY2lwYXRpb25fdGltZV9zdGFydCI6ICIwOTowMCIsIndzc19wYXJ0aWNpcGF0aW9uX3RpbWVfZW5kIjogIjE4OjAwIiwid3NzX3BhcnRpY2lwYXRpb25fZGF5cyI6ICJNbyxUdSxXZSxUaCIsIndzc19yZW1pbmRlcl9pbnRlcnZhbCI6IDYwLCJwc3NfcmVtaW5kZXJfZW5hYmxlZCI6IHRydWUsInBzc19yZW1pbmRlcl9kYXlzIjogIkZyIiwicHNzX3JlbWluZGVyX3RpbWUiOiAiMTQ6MDAiLCJhcGlfcmVhZF91cmwiOiAiaHR0cHM6Ly9hdDZ4NmI3djU0aG1va2k2ZGx5ZXc3MmNzcTBpaHhybi5sYW1iZGEtdXJsLmFwLXNvdXRoZWFzdC0xLm9uLmF3cyIsImFwaV9yZWFkX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBpX3dyaXRlX3VybCI6ICJodHRwczovLzQzY2I1bm53ZTNtZWpvanlmdGJ1YW93NDY0MG5zcm5kLmxhbWJkYS11cmwuYXAtc291dGhlYXN0LTEub24uYXdzIiwiYXBpX3dyaXRlX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBwX29uZV9zaWduYWxfYXBwX2lkIjogImJlMDAwOTNiLWVkNzUtNGMyZS04MWFmLWQ2YjM4MjU4NzI4MyIsImlkX3Bhc3N3b3JkIjogIjFHOHlPaFB2TVo2eHgiLCJhcGlfd2F0Y2hfc3VydmV5X3VybCI6ICJodHRwczovL3d3dy5jb3ppZS1hcHBsZS5hcHAvd2F0Y2hfc3VydmV5cy93YXRjaF9zdXJ2ZXlfZXhhbXBsZS5qc29uIiwiYXBpX3Bob25lX3N1cnZleV91cmwiOiAiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZk9qN192VlJVTkRIRUxtd1FxdnBGWUY1bTFwNklYcFhhV3NRZ0hPRjhIeHVUbXJ3L3ZpZXdmb3JtP3VzcD1wcF91cmwmZW50cnkuMzIzODgwNTM9ZXhhbXBsZV9wYXJ0aWNpcGFudF8wMSZlbnRyeS4xOTczNjgzNzcyPWV4YW1wbGVfZXhwZXJpbWVudCJ9\n")))}u.isMDXComponent=!0}}]);