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

* Is it possible to call the function that pulls the GPS location, heart rate data,etc in a set interval without the participant interacting with the survey?
 - Well, having a live stream of all data is the dream. We've been working on that for a while. Here is the result:
All HealthKit data is submitted twice: When the watch survey is submitted. In that case, the prefix is ws_, e.g., ws_heart_rate.
And then the HealthKit data is submitted a second time with the prefix ts_, e.g., ts_heart_rate. ts_ data has various triggers, e.g., when you open the app, when press the sync buttons in the app, sometimes it is sent in the background.
You can check what triggered the transmission of the data and when it arrived in the database with the fields with the postfix _trigger and _lambda, e.g., ts_heart_rate_trigger and ts_heart_rate_lambda or ws_heart_rate_trigger and ws_heart_rate_lambda or.
You can increase the chances of the data being sent by using the iPhone. Because Cozie can only access HealthKit data when the phone is unlocked. But in my experience, the ws_ data has the highest update frequency provided participants are reminded every hour.
For location, you already know about ws_latitude and ws_longitude.  There is also ts_latitude, and ts_longitude. These are location data that are sent when you are changing your location. The minimum location change is 10m. It works good enough to send a push notification while people are commuting. I don't exactly know how little location change it takes for the location data to be sent. (edited) 