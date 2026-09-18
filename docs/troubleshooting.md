---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Troubleshooting

This page covers general installation, sync, and data collection issues for the Cozie AppStore app. For backend, API, and database issues, see [Backend Troubleshooting](/docs/customize_cozie_app/custom_backend/backend_troubleshooting). For custom app, TestFlight, and custom survey issues, see [App Developer Troubleshooting](/docs/customize_cozie_app/app_developer_troubleshooting).

## Installation and setup

* **I cannot install the Cozie app on the Apple Watch.**

  * Make sure that the Apple Watch and iPhone are still fully supported by Apple (see [here](https://cozie-apple.app/docs/faq/#what-is-the-minimal-requirement-for-the-apple-watch-and-iphone-to-run-cozie) for more information).
  * Make sure that the Apple Watch is currently connected to the iPhone.
  * Make sure that the iPhone is connected to the internet.
  * Make sure there is no update for WatchOS or iOS pending. If there are updates available, install the iOS and watchOS first. Then, proceed to install the Cozie watch app.
  * Turn airplane mode on the Apple Watch on and off.
  * Turn on 'Automatic downloads' and 'Automatic Updates' in the Settings of the App Store app on the Apple Watch.
  * On the Apple Watch, in the Settings app, turn off and on Wifi, Mobile data, and Bluetooth.
  * On the iPhone, in the Settings app, turn off and on Wifi, Mobile data, and Bluetooth.
  * Restart the iPhone and the Apple Watch.
  * [Force restart the iPhone.](https://support.apple.com/en-sg/guide/iphone/iph8903c3ee6/ios#:~:text=If%20iPhone%20isn't%20responding,and%20hold%20the%20side%20button.)
  * [Force restart the Apple Watch.](https://support.apple.com/en-sg/guide/watch/apd521a8a902/watchos)

* **The Cozie setting cannot be synced between the iPhone and the Apple Watch.**

  Don't worry. This can happen sometimes. Ensure the Cozie app is open simultaneously on the iPhone and the Apple Watch. Here are a few tricks on how to fix it:
  * Make sure that on the Cozie Watch app, you either see the message 'Please press the sync button in the Settings tab of the Cozie phone app.' or the first question of a watch survey. If the watch survey is in progress, either complete the watch survey or press the 'Reset' button.
  * Turn Bluetooth off and on again on the iPhone. Then try again to sync.
  * Force close the Cozie app [on the iPhone](https://support.apple.com/en-sg/HT201330) and the [Apple Watch (remove the app from app switcher](https://support.apple.com/en-gb/guide/watch/apda1bf1a95b/watchos)). Then, open both apps again and try to sync the settings again.
  * Make sure you have a good and stable internet connection.
  * Wait a few minutes and try again. We've noticed that when the app is installed freshly, it might take 2-3 minutes until syncing is possible.
  * Uninstall the Cozie app from the iPhone and the Apple Watch. Then, install the app again on both devices.

## Missing data

* **No data from the Cozie Watch app is logged (e.g., `ws_survey_count`, `ws_heart_rate`, `q_...`)**

  - Make sure that the Apple Watch is connected to the iPhone.
  - Make sure that the iPhone has access to the internet.
  - Make sure there is no update for the WatchOS pending.
  - Make sure there is no VPN service active. See iPhone/Settings/General/VPN & Device Management:<br/><br/>
    <img alt="Screenshot of settings menu" src={useBaseUrl('img/troubleshooting_vpn_1.jpeg')}width="30%" /> &nbsp;
    <img alt="Screenshot of General submenu in settings menu" src={useBaseUrl('img/troubleshooting_vpn_2.jpeg')}width="30%" /> &nbsp;
    <img alt="Screenshot of VPN submenu in settings menu" src={useBaseUrl('img/troubleshooting_vpn_3.jpeg')}width="30%" /> &nbsp;

* **Heart rate data is not being logged in Cozie nor in the Apple Health app (e.g., `ts_heart_rate`, `ws_heart_rate`)**

  - Ensure the Cozie app has permission to access the heart rate data (Settings / Privacy & Security / Health / Cozie)
  - Restart the Apple Watch.
  - There are some phyiscal issue that can cause gaps in the heart rate data:
    - Dust, sweat, water, oils on the heart rate sensor.
    - Tattoos and/or dark skin where the watch is worn.
    - Body lotion on the wrist.

* **Sleep data is missing.**

  - Check if sleep data is recorded in the Apple Health app.
  - Ensure the Cozie app is allowed to access sleep data. (Settings / Privacy & Security / Health / Cozie)
  - Enable sleep tracking (Watch App / Sleep / Track Sleep with Apple Watch)
    - Note: [Reportedly, the Apple Watch (watchOS 11 and newer) can track sleep without enabling Sleep Focus Mode.](https://support.apple.com/en-sg/guide/watch/apd830528336/watchos)
  - Ensure the Apple Watch is worn at night.
  - Ensure the Apple Watch is worn snug enough.
  - Ensure battery charge state is above 30% before going to sleep.
  - Enable sleep focus
  - Enable sleep schedule and use it for Sleep Focus (Health App / Browse / Sleep)
  - [Apple's user guide for sleep tracking with the Apple Watch.](https://support.apple.com/en-sg/guide/watch/apd830528336/watchos)
 
* **Location data is missing.**

  - Ensure iOS and watchOS are up-to-date.
  - Ensure Cozie has been given permission to access location data. (Settings / Privacy & Security / Location Services)
