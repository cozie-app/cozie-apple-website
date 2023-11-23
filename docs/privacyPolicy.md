---
id: privacyPolicy
title: Cozie Privacy Policy
sidebar_label: Privacy Policy
---

# Privacy Statement

## Purpose
The mobile application “Cozie” aims to demonstrate the use of the Apple Watch and iPhone for micro Environmental Momentary Assessments (uEMA). The app is available on the App Store for demonstration purposes only. People interested in the uEMA can use the app to explore the technology, its usefulness, and the quality of the collected data. If Cozie is to be used beyond demonstration purposes, we suggest you fork the source code and deploy your own version of Cozie with your database and backend. All source code is available at <https://github.com/cozie-app/cozie-apple>. Documentation is available at <https://cozie-apple.app/>. 

## Data Collection
The Cozie app does not explicitly collect any personal data. It is designed to collect measurement data without any relation to individuals. However, in some circumstances, this data can bear a connection to personal data. For example, GPS data can exhibit a location.

All data that the Cozie app collects is listed below. 

- Physiological and Environmental Data
  - Heart rate
  - Heart rate variability
  - Resting heart rate
  - Blood pressure
  - Noise level
  - Blood oxygen saturation
  - Step count
  - Stand time
  - Walking distance
  - Wrist temperature
  - Sleep analysis
- Location (background)
   - Longitude
   - Latitude
   - Altitude
- Watch survey
  - Time at the start of the micro-survey
  - Time at the end of the micro-survey
  - Location (longitude, latitude, altitude)
  - Responses
- Phone survey (3rd party service)
  - Responses
- Settings
  - Experiment ID
  - Participant ID
  - Watch survey response goal
  - Watch survey reminder enabled
  - Watch survey participation days
  - Watch survey participation start time
  - Watch survey participation end time
  - Watch survey reminder interval
  - Phone survey reminder enabled
  - Phone survey reminder time
  - Phone survey reminder days
  - Build number
  - Bundle Version
  - App name
  - OneSignal Player ID (3rd party push notification service)

Users of the Cozie app will be asked to provide permission to share physiological data and location data. Users can revoke the permission in several ways:
  - in the iOS Settings app, under the menu point 'Privacy' and the submenu points 'Location Services' and 'Health'
  - in the Health app from Apple, in the 'Sharing' tab under apps
  - in the iOS Settings app, under the menu point 'Cozie'

All data transmitted by the Cozie app to the Database and requested by the Cozie app from the database is transmitted using HTTPS requests. All data transmitted by the Cozie app is stored in a password-protected database. The data in the database is stored in clear text. All data transmitted to the database is tagged with the “experiment ID” and “participant ID”.

The data in the database can be retrieved using web API calls, as shown in the documentation. Only the “experiment ID” and the ”participant ID” are required to retrieve any data that is associated with those two identifiers. Hence, the “experiment ID” and “participant ID” have password character and should not be shared with anyone.

## Data Storage
The database and related services are located in Singapore.

The data will not be deleted on a regular basis. However, we reserve the right to delete any data submitted with the Cozie app at any time.

## Data Processing
The data is used for the purpose of improving the Cozie app and the accompanying documentation website.

## 3rd Party Services
Cozie uses OneSignal as the provider of push notification services. Please see their privacy policy for more information: https://onesignal.com/privacy_policy
