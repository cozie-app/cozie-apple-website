---
id: dd_features
title: Features
sidebar_label: Features
slug: /dd_features
---

import useBaseUrl from '@docusaurus/useBaseUrl';


| Feature name | Type | Description/Question |
|--------------|------|----------------------|
| `id_participant` | String | Unique identifier for each participant |
| `id_experiment` | String | Unique identifier for each experiment |
| `vote_count` | Integer | Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed. |
| `longitude` | Float | longitude in ° provided by GPS |
| `latitude` | Float | Latitude in ° provided by GPS |
| `body_mass` | Integer | Body mass in kg, provided by Apple Health Kit, only available if manually provided in the Apple Health App. |
| `heart_rate` | Integer | Heart rate in bpm, provided by Apple Health Kit, submitted as background task. Sampled every 5 min (sometimes less) |
| `ts_heartRate` | Integer | Heart rate in bpm, provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 5 min (sometimes less) |
| `ts_oxygenSaturation` | Integer | Blood oxygen saturation in % provided by Apple Health Kit |
| `ts_walkingDistance` | Float | Distance walked in m, provided by Apple Health Kit |
| `ts_stepCount` | Integer | Number of steps walked, provided by Apple Health Kit |
| `ts_standTime` | Integer | Stand time in ?, provided by Apple Health Kit |
| `ts_restingHeartRate` | Integer | Resting heart rate in bpm, provided by Apple Health Kit |
| `sound_pressure` | Integer | Noise level in dB(A), provided by Apple Health Kit, submitted as background task. Sampled every 30 min  |
| `ts_hearingEnvironmentalExposure` | Integer | Noise level in dB(A), provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 30min  |
| `timestamp_start` | String | Timestamp (UTC) of when micro survey was started |
| `time` | String | Timestamp (UTC) of when micro survey was submitted, also serves as index (`timestamp_end`) |
| `timestamp_location` | String | Timestamp (UTC) of when the GPS was retrieved |
| `timestamp_lambda` | String | Timestamp (UTC) of when the AWS Lambda function was invoked to insert the row into the database |
| `settings_participation_time_start` | String | Daily reminder start time set in the Cozie app by the participant |
| `settings_participation_time_end` | String | Daily reminder end time set in the Cozie app by the participant |
| `settings_participation_days` | String | Participation days set in the Cozie app by the participant |
| `settings_notification_frequency` | String | Reminder frequency set in the Cozie app by the participant |
| `id_one_signal` | String | Unique OneSignal player id provided by OneSignal |