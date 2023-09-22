---
id: faq
title: FAQ
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

* Does Cozie work without internet connection?

* Do the reminders work without internet connection?

* Does the Apple Watch to be connected to the iPhone for Cozie to work?

* How frequently is the physiological data logged?

* How long does it take for a watch survey to be stored in the online database?

* How long does it take for a push notification from OneSignal to arrive on the iPhone or Apple Watch?

* Is it possible to manage more than one Apple Watch with just one iPhone?

* Is Cozie available on Android devices?
Cozie Apple is only available for iOS devices. 

* What is the minimum and maximum reminder frequency?
  * minimum 30 minutes
  * maximum 24 hours
  * maximum of 64 reminders total

* Does the Apple Watch need to be connected to the iPhone in order to work?
  * Watch survey is sent later but location data might be off
  * Reminders for watch survey and phone survey won't be shown on watch

* Does the iPhone need an internet connection while using Cozie?

* The location data is shows 0.0 for longitude and latitude. What is wrong?

* Can Cozie be used with only one iPhone and multiple Apple Watches?


# Issues
* Push notifications from OneSignal don't show up on my device.
 - Check player id (on onesignal.com and in the Cozie data)
 - check api key
 - check app id in Xcode and in your Python notebook
 - make sure you created the .p12 certificate for the main identifier.
 - Try to send a test push notification from the dashboard on one-signal com
  
* Watch survey data is not logged (e.g., 'ws_heart_rate')
 - Make sure that the Apple Watch is connected to the iPhone
 - Make sure that the iPhone has access to the internet 
 - Make sure there is no update for the WatchOS pending

* I added a new data field to be stored in the InfluxDB. However, when I submit data it is not stored
 - The first time 
 
* JSON error
  - Make sure you have internet access.
  - Make sure you have a good network connection. Flakey wifi can cause this error.
  - Make sure the JSON file for the watch survey is reachable.
  - Make sure the JSON file for the watch survey is valid JSON and correctly formatted.
  - Firewalls can also cause this error, e.g., in mainland China.
