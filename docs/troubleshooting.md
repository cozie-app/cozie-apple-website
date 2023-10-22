---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# Troubleshooting
 
* **When I press the sync button in the *Data* or *Backend* tab I get an 
"JSON error"**

  - Make sure you have internet access.
  - Make sure you have a good network connection. Flakey Wifi can cause this 
  error.
  - Make sure the JSON file for the watch survey is reachable from Safari on 
  the iPhone.
  - Make sure the JSON file for the watch survey is valid JSON and has all fields required by the Cozie specification. There are online tools available to check the JSON validity, e.g., we use [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/#)
  - Firewalls can cause this error.
  
* **Watch survey data is not logged (e.g. `ws_heart_rate`)**
  - Make sure that the Apple Watch is connected to the iPhone.
  - Make sure that the iPhone has access to the internet.
  - Make sure there is no update for the WatchOS pending.

* **I added a new data field to be stored in the InfluxDB. However, when I submit data it is not stored**
  - The first time data with a new field name is saved in the database, the database sets the data type, e.g., if you were to implement to extraction of stride length information, you could save it as `ts_stride_length`. If you submit the value `1.04`, the value will be stored as a floating point number (float). The stride length might vary. If you happen to submit the value `1`, the database would attempt to store it as an integer. It would then see that there is already a floating point number stored under `ts_stride_length` and reject the new value of `ts_stride_length` which is then lost. 

  To avoid this issue, we force cast the type for each field name in the backend. If you let us know what type and field name you would like to add to Cozie, we can help you with this issue.

* **Push notifications from OneSignal don't show up on my device.**
  - Check the correctness of the Player ID (on OneSignal.com and in the Cozie data)
  - Check the correctness of the API key
  - Check correctness of the *Backend* tab and in your Python notebook
  - Make sure you created the .p12 certificate for the main identifier.
  - Try to send a test push notification from the dashboard on one-signal com
