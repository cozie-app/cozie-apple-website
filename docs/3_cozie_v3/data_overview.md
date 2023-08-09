---
id: c3_data_overview
title: Data Overview
sidebar_label: Data Overview
sidebar_position: 6
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# Prefixes
| Prefix | Description | 
|--------|-------------|
| api_ | Backend settings |
| app_ | App related information |
| id_ | ID fields such as id_participant, id_password, id_onesignal |
| pss_ | Phone survey settings |
| q_ | Watch survey question responses |
| si_ | System information |
| ts_ | Time series |
| ws_ | Watch survey |
| wss_ | watch survey settings |

# Difference between `ts_` and `ws_`
\* The logging of time series data with the `ts_` prefix is triggered by several actions:
* Opening of the Cozie iPhone app
* Pressing of any sync button in the Cozie iPhone app
* Background task

\** The logging of time series data with the `ws_` prefix is triggered by the submit button at the end of the watch survey.

By the end of the experiment the `ts_` data and `ws_` data should me nearly identical, e.g., the values and timestamps for  `ts_heart_rate` and `ws_heart_rate` should be the same. The difference is that the device that submits the data and the time the data is submitted. Because it is very difficult to sync the Cozie app on the Apple Watch with its counter part on the Apple Watch in the background, we decided to log the data twice and then merge the two columns while processing the data. This approach maximized the data upload frequency, maintainability, and ability to debug the app.


# Field descriptions

| Field name | Type | Sampling rate | Description/Question | Field name in Cozie v2|
|--------------|------|---------------|----------------------|-------------------------|
| `api_phone_survey_url` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': URL pointing to the phone survey, e.g., Qualtrics, Google Form or similar| not available |
| `api_read_key` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': Access key for the `api_read_url` | not available |
| `api_read_url` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': URL pointing to the database read API | not available |
| `api_watch_survey_url` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': URL pointing to the JSON file with a custom watch survey | not available |
| `api_write_key` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': Access key for the `api_write_url` | not available |
| `api_write_url` | String | Logged when any sync button in the Cozie iPhone app | 'Backend tab': URL pointing to the database write API | not available |
| `app_bundle_build_number` | String | Logged when any sync button in the Cozie iPhone app | Build number of iOS application | not available |
| `app_bundle_build_version` | String | Logged when any sync button in the Cozie iPhone app | Build version of iOS application | not available |
| `app_bundle_name` | String | Logged when any sync button in the Cozie iPhone app | iOS application name | not available |
| `app_one_signal_app_id` | String | Logged when any sync button in the Cozie iPhone app | OneSignal app ID (provided by OneSignal) | not available |
| `id_experiment` | String | Logged with any other data point | Unique identifier for each experiment | `id_experiment` | 
| `id_onesignal` | String | Logged with any other data point | Unique OneSignal player id provided by OneSignal | `id_one_signal` |
| `id_participant` | String | Logged with any other data point | Unique identifier for each participant | `id_participant` |
| `id_password` | String | Logged with any other data point | 'Backend tab': Password for participant. It should be unique for each participant. It prevents data corruption by participants changing their `id_participant` or `id_experiment` | not available |
| `location_change` | Boolean | Logged when location change is more than XXm | Indicates location change of more than XXm | not available |
|  |  |  |  |  |
| `pss_reminder_days` | String | Logged when any sync button in the Cozie iPhone app | Days on which the phone survey reminder is shown. | not available |
| `pss_reminder_enabled` | Boolean | Logged when any sync button in the Cozie iPhone app | Indicates whether the a phone survey reminder is enabled. (enabled: `True`) | not available |
| `pss_reminder_time` | String | Logged when any sync button in the Cozie iPhone app | Time at which the phone survey reminder is shown. | not available |
|  |  |  |  |  |
| `q_...` | String | Logged when the submit button at the end of the watch survey is pressed. | For field names of watch survey responses see on the page for each watch survey example |  |
|  |  |  |  |  |
| `si_ios_version` | String | Logged when any sync button in the Cozie iPhone app | iOS version | not available |
| `si_iphone_battery_charge_state` | Float | Not yet implemented | iPhone battery charge state | not available |
| `si_iphone_cellular_signal_strength` | Float | Not yet implemented | Cellular signal strength on the iPhone | not available |
| `si_iphone_device_id` | String | Not yet implemented |  Unique iPhone hardware identifier | not available |
| `si_iphone_location_service_enabled` | Boolean | Not yet implemented | iPhone location services state | not available |
| `si_iphone_low_battery_mode_enabled` | Boolean | Not yet implemented | iPhone low power battery mode state | not available |
| `si_iphone_model` | String | Not yet implemented | iPhone hardware model identifier | not available |
| `si_iphone_wifi_signal_strength` | Float | Not yet implemented | Wifi signal strength on the iPhone | not available |
| `si_watch_battery_charge_state` | Float | Not yet implemented | Apple watch battery charge state | not available |
| `si_watch_cellular_signal_strength` | Float | Not yet implemented | Cellular signal strength on the Apple Watch | not available |
| `si_watch_connected_to_phone` | Boolean | Not yet implemented | State of connection between iPhone and Apple Watch | not available |
| `si_watch_device_id` | String | Not yet implemented | Unique identifier for Apple Watch hardware | not available |
| `si_watch_location_service_enabled` | Boolean | Not yet implemented | Apple Watch location services state | not available |
| `si_watch_model` | String | Not yet implemented | Apple Watch hardware model identifier | not available |
| `si_watch_wifi_signal_strength` | Float | Not yet implemented | Wifi signal strength on the Apple Watch | not available |
| `si_watchos_version` | String | Not yet implemented | WatchOS version | not available |
|  |  |  |  |  |
| `timestamp_lambda` | String | Logged with any other data point | Timestamp (UTC) of when the AWS Lambda function was invoked to insert the row into the database | `timestamp_lambda` |
| `transmit_trigger` | String | Logged with any other data point | Action that triggered the logging of the data corresponding to the same row | not available |
| `time`/`index` | String | Logged with any other data point | Timestamp (UTC) of when micro survey was submitted, also serves as index (`timestamp_end`) | `timestamp_start` |
|  |  |  |  |  |
| `ts_HRV` | Integer | * |  | not available |
| `ts_altitude` | Float? | * |  | `` |
| `ts_audio_exposure_environment` | Integer | * | Noise level in dB(A), provided by Apple Health Kit, submitted as background task. Sampled every 30 min  | `sound_pressure` | 
| XXXXXXXXXXX  | Integer | Noise level in dB(A), provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 30min  | `ts_hearingEnvironmentalExposure` |
| `ts_audio_exposure_headphones` | Float? | * |  | `` |
| `ts_heart_rate` | Integer? | * | Heart rate in bpm, provided by Apple Health Kit, submitted when iPhone Cozie app is opened. Sampled every 5 min (sometimes less) | `ts_heartRate` |
| `ts_heart_rate` | Integer | ** | Heart rate in bpm, provided by Apple Health Kit, submitted as background task. Sampled every 5 min (sometimes less) | `heart_rate` |
| `ts_latitude` | Float | * |  | `` |
| `ts_location_accuracy_horizontal` | Float? | * |  | not available |
| `ts_location_accuracy_vertical` | Float? | * |  | not available |
| `ts_location_acquisition_method` | String? | * |  | not available |
| `ts_location_floor` | Float? | * |  | not available |
| `ts_location_source_device` | String? | * |  | not available |
| `ts_longitude` | Float | * |  | `` |
| `ts_oxygen_saturation` | Integer | ** | Blood oxygen saturation in % provided by Apple Health Kit | `ts_oxygenSaturation` |
| `ts_resting_heart_rate` | Integer | * | Resting heart rate in bpm, provided by Apple Health Kit | `ts_restingHeartRate` |
| `ts_sleep_REM` | Float? | * |  | not available |
| `ts_sleep_awake` | Float? | * |  | not available |
| `ts_sleep_core` | Float? | * |  | not available |
| `ts_sleep_deep` | Float? | * |  | not available |
| `ts_sleep_in_bed` | Float? | * |  | not available |
| `ts_stand_time` | Integer | * | Stand time in ?, provided by Apple Health Kit | `ts_standTime` |
| `ts_step_count` | Integer | * | Number of steps walked, provided by Apple Health Kit | `ts_stepCount` |
| `ts_timestamp_location`| String | * | Timestamp (UTC) of when the GPS was retrieved | `timestamp_location` | 
| `ts_walking_distance` | Float | * | Distance walked in m, provided by Apple Health Kit | `ts_walkingDistance` |
| `ts_wrist_temperature` | Integer | * |  | not available |
|  |  |  |  |  |
| `ws_HRV` | Float? | ** |  | not available |
| `ws_altitude` | Float? | ** |  | not available |
| `ws_audio_exposure_environment` | Float? | ** |  | not available |
| `ws_audio_exposure_headphones` | Float? | ** |  | not available |
| `ws_latitude` | Float | ** | Latitude in ° provided by GPS | `latitude` |
| `ws_location_accuracy_horizontal` | Float? | ** |  | not available |
| `ws_location_accuracy_vertical` | Float? | ** |  | not available |
| `ws_location_acquisition_method` | String? | ** |  | not available |
| `ws_location_floor` | Integer? | ** |  | not available |
| `ws_location_source_device` | String | ** |  | not available |
| `ws_longitude` | Float | ** | longitude in ° provided by GPS | `longitude` |
| `ws_oxygen_saturation` | Integer | ** | Blood oxygen saturation in % provided by Apple Health Kit | not available |
| `ws_resting_heart_rate` | Float? | ** |  | not available |
| `ws_sleep_REM` | Float? | ** |  | not available |
| `ws_sleep_awake` | Float? | ** |  | not available |
| `ws_sleep_core` | Float? | ** |  | not available |
| `ws_sleep_deep` | Float? | ** |  | not available |
| `ws_sleep_in_bed` | Float? | ** |  | not available |
| `ws_stand_time` | Float? | ** |  | not available |
| `ws_step_count` | Integer? | ** |  | not available |
| `ws_survey_count` | Integer | ** | Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed. | `vote_count` |
| `ws_timestamp_location` | String | ** | Timestamp of the location measurement in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | `` |
| `ws_timestamp_start` | String | ** | Timestamp (UTC) of when micro survey was started |`timestamp_start` |
| `ws_walking_distance` | Float | ** | Distance walked in m, provided by Apple Health Kit | not available |
| `ws_wrist_temperature` |  | ** |  | not available |
|  |  |  |  |  |
| `wss_goal` | Integer? | Logged when any sync button in the Cozie iPhone app |  | not available |
| `wss_participation_days`| String | Logged when any sync button in the Cozie iPhone app | Participation days set in the Cozie app by the participant | `settings_participation_days` |
| `wss_participation_time_end` | String | Logged when any sync button in the Cozie iPhone app | Daily reminder end time set in the Cozie app by the participant | `settings_participation_time_end` |
| `wss_participation_time_start` | String | Logged when any sync button in the Cozie iPhone app | Daily reminder start time set in the Cozie app by the participant | `settings_participation_time_start` |
| `wss_reminder_enabled` | Boolean? | Logged when any sync button in the Cozie iPhone app |  | not available |
| `wss_reminder_interval` | String | Logged when any sync button in the Cozie iPhone app | Reminder frequency set in the Cozie app by the participant | `settings_notification_frequency` |
| `wss_time_out` | Integer | Logged when any sync button in the Cozie iPhone app |  | not available |
| `wss_title` | String | Logged when any sync button in the Cozie iPhone app |  | not available |

For some of the field names there are two more accompanying fields for the timestamp of when the data was inserted into the database and what trigger the logging action. The field `lambda_timestamp` serves the same purpose. However this field value might over written in instances where values with identical `id_participant`, `id_experiment`, and `timestamp` are logged.The table below shows an example for `ts_HRV`. The columns `ts_HRV_lambda` and `ts_HRV_trigger` are used for debugging and development purposes.

| Field name | Type | Sampling rate | Description/Question | Field name in Cozie v2|
|--------------|------|---------------|----------------------|-------------------------|
| `ts_HRV` | Integer | * |  | not available |
| `ts_HRV_lambda` | String | * | Timestamp of when the value of `ts_HRV` was logged in UTC, Format: "%Y-%m-%dT%H:%M:%S.%fZ" | not available |
| `ts_HRV_trigger` | String | * | String of what triggered the logging action of `ts_HRV` | not available |

These meta data columns shown in the example above are available for the following field names:

<table>
<tr><td>
<li><code>ts_HRV </code></li>
<li><code>ts_audio_exposure_environment </code></li>
<li><code>ts_audio_exposure_headphones </code></li>
<li><code>ts_heart_rate </code></li>
<li><code>ts_latitude </code></li>
<li><code>ts_oxygen_saturation </code></li>
<li><code>ts_resting_heart_rate </code></li>
<li><code>ts_sleep_REM </code></li>
<li><code>ts_sleep_awake </code></li>
<li><code>ts_sleep_core </code></li>
<li><code>ts_sleep_deep </code></li>
<li><code>ts_sleep_in_bed </code></li>
<li><code>ts_stand_time </code></li>
<li><code>ts_step_count </code></li>
<li><code>ts_walking_distance </code></li>
</td>
<td>
<li><code>ws_HRV </code></li>
<li><code>ws_audio_exposure_environment </code></li>
<li><code>ws_audio_exposure_headphones </code></li>
<li><code>ws_heart_rate </code></li>
<li><code>ws_latitude </code></li>
<li><code>ws_oxygen_saturation </code></li>
<li><code>ws_resting_heart_rate </code></li>
<li><code>ws_sleep_REM </code></li>
<li><code>ws_sleep_awake </code></li>
<li><code>ws_sleep_core </code></li>
<li><code>ws_sleep_deep </code></li>
<li><code>ws_sleep_in_bed </code></li>
<li><code>ws_stand_time </code></li>
<li><code>ws_step_count </code></li>
<li><code>ws_survey_count </code></li>
<li><code>ws_walking_distance </code></li>
</td></tr>
</table>

<!--
# To Do
#  - Switch 'app_bundle_build_number' and 'app_bundle_build_version' in Xcode
#  - Force string for q_ fields
#  - Check if sf_symbol_color can be used with cozie icons
#  - Check if .json files work for watch surveys
#  - Add wss_survey_id
#  - Change 'wss_reminder_enabeled' to 'wss_reminder_enabled'
#  - Add QR code generation to CoziePy
-->
<!--| `ts_body_mass` | Integer | | Body mass in kg, provided by Apple Health Kit, only available if manually provided in the Apple Health App. | `body_mass` |-->