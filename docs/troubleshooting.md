---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# Troubleshooting

* ### I cannot install the Cozie app on the Apple Watch.
  * Make sure that the Apple Watch is currently connected to the iPhone.
  * Make sure there is no update for WatchOS or iOS pending. If there are updates available, install the iOS and watchOS first. Then, proceed to install the Cozie watch app.
  * Turn the airplane mode on the Apple Watch on and off.
  * Turn on 'Automatic downloads' and 'Automatic Updates' in the Settings of the App Store app on the Apple Watch.
  * On the Apple Watch, in the Settings app, turn off and on Wifi, Mobile data, and Bluetooth.
  * On the iPhone, in the Settings app, turn off and on Wifi, Mobile data, and Bluetooth.
  * Restart the iPhone and the Apple Watch.
  * [Force restart the iPhone.](https://support.apple.com/en-sg/guide/iphone/iph8903c3ee6/ios#:~:text=If%20iPhone%20isn't%20responding,and%20hold%20the%20side%20button.)
  * [Force restart the Apple Watch.](https://support.apple.com/en-sg/guide/watch/apd521a8a902/watchos)


* ### The Cozie setting cannot be synced between the iPhone and the Apple Watch.
  * Don't worry. This can happen sometimes. Ensure the Cozie app is open simultaneously on the iPhone and the Apple Watch. Here are a few tricks on how to fix it:
  * Make sure that on the Cozie Watch app, you either see the message 'Please press the sync button in the Settings tab of the Cozie phone app.' or the first question of a watch survey. If the watch survey is in progress, either complete the watch survey or press the 'Reset' button.
  * Turn Bluetooth off and on again on the iPhone. Then try again to sync.
  * Force close the Cozie app [on the iPhone](https://support.apple.com/en-sg/HT201330) and the [Apple Watch (remove the app from app switcher](https://support.apple.com/en-gb/guide/watch/apda1bf1a95b/watchos)). Then, open both apps again and try to sync the settings again.
  * Make sure you have a good and stable internet connection.
  * Wait a few minutes and try again. We've noticed that when the app is installed freshly, it might take 2-3 minutes until syncing is possible.
  * Uninstall the Cozie app from the iPhone and the Apple Watch. Then, install the app again on both devices.


* ### When I press the sync button in the *Data* or *Backend* tab I get an "JSON error"
  - Make sure you have internet access.
  - Make sure you have a good network connection. Flakey Wi-Fi can cause this error.
  - Make sure the JSON file for the watch survey is reachable from Safari on the iPhone.
  - Make sure the watch survey's JSON file is valid and has all fields required by the Cozie specification. There are online tools available to check the JSON validity, e.g., we use [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/#)
  - Firewalls can cause this error.


* ### Watch survey data is not logged (e.g., `ws_heart_rate`)
  - Make sure that the Apple Watch is connected to the iPhone.
  - Make sure that the iPhone has access to the internet.
  - Make sure there is no update for the WatchOS pending.


* ### I added a new data field to be stored in the InfluxDB. However, when I submit data, it is not stored
  The first time data with a new field name is saved in the database, the database sets the data type, e.g., if you were to implement the extraction of stride length information, you could save it as `ts_stride_length`. If you submit the value `1.04`, the value will be stored as a floating point number (float). The stride length might vary. If you happen to submit the value `1`, the database will attempt to store it as an integer. It would then see that there is already a floating point number stored under `ts_stride_length` and reject the new value of `ts_stride_length`, which is then lost. 

  To avoid this issue, we force-cast the type for each field name in the backend. Let us know what type and field name you would like to add to Cozie, we can help you with this issue.


* ### Push notifications from OneSignal don't show up on my device.
  - Check the correctness of the Player ID in the Cozie data tab.
  - Check the correctness of the API key.
  - Check the correctness of the information in the *Backend* tab and in your Python notebook.
  - If you have created your own Cozie app:
    - Check the correctness of the Player ID on [OneSignal.com](https://onesignal.com/).
    - Make sure you created the .p12 certificate for the main identifier.
    - Send a test push notification from the dashboard on [OneSignal.com](https://onesignal.com/).
