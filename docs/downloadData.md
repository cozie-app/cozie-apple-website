---
id: downloadData
title: Download Data
sidebar_label: Download Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Download the data collected using the Cozie Apple Watch survey

You can download the data you have collected using the Cozie Apple Watch survey using the following Python code.
Please note that you will have to specify your `ID_PARTICIPANT`, `ID_EXPERIMENT` and `API_KEY`.
You can request an `API_KEY` by emailing us a request at cozie.app@gmail.com

All the data you have queried are saved inside the Pandas dataframe called `df`.

```
import requests
import json
import pandas as pd
import matplotlib.pyplot as plt

# Settings
YOUR_TIMEZONE = 'Asia/Singapore'
ID_PARTICIPANT = 'ExternalUser'
ID_EXPERIMENT = 'AppleStore'
WEEKS = "2"  # Number of weeks from which the data is retrived, starting from now
API_KEY = '' # reach out to cozie.app@gmail.com for an API_KEY

# Query data
payload = {'id_participant': ID_PARTICIPANT,'id_experiment': ID_EXPERIMENT, 'weeks': WEEKS}
headers = {"Accept": "application/json", 'x-api-key': API_KEY}
response = requests.get('https://m7cy76lxmi.execute-api.ap-southeast-1.amazonaws.com/default/cozie-apple-researcher-read-influx', params=payload, headers=headers)
data = json.loads(response.content)

# Convert response in Pandas Dataframe
df = pd.DataFrame.from_dict(data).T
df.index = pd.to_datetime(df.index, unit='ms')
df.index = df.index.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)
pd.options.display.max_columns = None

# Display dataframe
df.head()
```

### Watch survey data
If you want to focus on the analysis of the watch-based survey data use the code below to filter the dataframe retrieved above.

```
# Get only question flow responses
df_questions = df[~df["vote_count"].isna()]
df_questions.style
```

### Physiological data
Use the code below to plot noise and heart rate data contained in the dataframe retrieved above. 

```
# Plot time-series data
fig, ax = plt.subplots(1,2, figsize =(15, 7))

# Heart rate
df["heart_rate"].plot(ax=ax[0], style='.')
ax[0].set_title("Heart Rate", fontsize=18)
ax[0].set_ylabel("Heart Rate [bpm]", fontsize=14)
ax[0].set_xlabel("Time", fontsize=14)

# Sound pressure
df["sound_pressure"].plot(ax=ax[1], style='.')
ax[1].set_title("Sound Pressure", fontsize=18)
ax[1].set_ylabel("Sound Pressure [dB?]", fontsize=14)
ax[1].set_xlabel("Time", fontsize=14)
```

## Features

| Feature name | Type | Description/Question |
|--------------|------|----------------------|
| `id_participant` | String | Unique identifier for each participant |
| `id_experiment` | String | Unique identifier for each experiment |
| `vote_count` | Integer | Increasing key for each micro-survey response. Resets when Cozie app is (re-)installed. |
| `longitude` | Float | longitude in ° provided by GPS |
| `latitude` | Float | Latitude in ° provided by GPS |
| `body_mass` | Integer | Body mass in kg, provided by Apple Health Kit, only available if manually provided in the Apple Health App. Not used for Osk or Orenth |
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

## Watch surveys
### Thermal (short)
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `tc_preference` | How would you prefer to be? | String |  "Cooler", "No Change", "Warmer" |
| `are_you` | Are you? | String | "Outdoor", "Indoor" |
| `clo` | What clothes are you wearing? | String | "Very light", "Light", "Medium", "Heavy" |

### Thermal (long)
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `tc_preference` | How would you prefer to be? | String |  "Cooler", "No Change", "Warmer" |
| `light_preference` | Light preference | String | "Dimmer", "No Change", "Brighter" |
| `sound_preference` | Sound preference | String | "Quieter", "No Change", "Louder" |
| `are_you` | Are you? | String | "Outdoor", "Indoor" | 
| `location_place` | Where are you? | String | "Home", "Office", "Vehicle", "Other" |
| `mood` | What mood are you in?  | String | "Bad", "Good", "Neither"|
| `clo` | What clothes are you wearing? | String | "Very light", "Light", "Medium", "Heavy" |
| `changed_location` | Have you changed location, activity or clothing over the last 10-min? | String |  "Yes", "No" |

### Noise and Privacy
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `noise-nearby` | Noise distractions nearby? (without earphones) | String | "None", "A Little", "A lot" |
| `noise-kind` | What kind of noise? | String |"Talking", "Traffic", "Weather","Appliances", "Construction", "Other"|
| `earphones` | Wearing earphones? | String | "No earphones", "Earphones", "Noise cancelling" |
| `thermal-preference` | Thermally, what do you prefer now? | String |"Cooler", "No change", "Warmer" |
| `location` | Where are you? | String | "Indoor - Office", "Indoor - Class", "Indoor - Home", "Indoor - Other", "Outdoor","Transportation" |
| `location-office` | What kind of office? | String | "Individual", "Small shared", "Large open plan", "Cubicles", "Conference room" |
| `location-transport` | What kind of transport? | String |"Bus", "Train", "Car", "Taxi", "Other"|
| `alone-group` | Alone or in a group? | String | "Alone", "Group", "Online group"|
| `activity-category` | Category of activity? | String | "Focus", "Leisure", "Other"|
| `activity-category` | Category of activity? | String | "Socialize", "Collaborate", "Learn", "Other"|

### Infection Risk
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `surroundings_infection` | Do your surroundings increase infection risk? | String | "Not at all", "A Little", "A lot"|
| `cause_risk` | What causes more risk? | String | "Ventilation", "People", "Surface" |
| `concerns` | Specifically, what concerns you? | String |  "Density", "Proximity", "Both" |
| `within_5m` | Currently, how many people within 5m? | String | "0 pax", "1-4 pax", "5+ pax" |

### Movement
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `last_60min` | In the past 60min, I used | String | "Lift", "Stairs", "Both", "Neither" |
| `lift_why` | Took lift, why? | String | "Convenient", "Less effort", "No stairs" |
| `stairs_why` | Took stairs, why? | String | "Convenient", "No lift", "Save energy", "Healthy" |
| `lift_con` | Lift convenient because? | String |  "Easiest", "Fastest", "Both" |
| `stairs_con` | Stairs convenient because | String | "Easiest", "Fastest", Both" |
| `working` | Are you working right now? | String | "Yes", "No" |
| `workstation` | What kind of workstation? | String |  "Adjustable", "Standing", "Sitting" |
| `adj_height` | Adjusted height today? | String |   "Up & down", "Down", "Up", "Never" |
| `current` | Are you | String | "Standing", "Sitting" |

### Privacy
| Feature name | Question | Type | Response options |
|--------------|----------|------|------------------|
| `alone_group` | Alone or in a group? | String |  "Alone", "Online", "Group" |
| `activity` | Category of activity? | String |  "Socialize", "Collaborate", "Learn" |
| `distracting` | Possibly distracting others? | String |   "Yes", "No" |
| `distractions` | Distractions nearby? | String | "None", "A little", "A lot" |
| `activity` | Category of activity? | String | "Focus", "Leisure" |
| `more_privacy` | Feeling like you need more privacy? | String |  "Yes", "No" |
| `kind_distraction` | What kind of distraction | String | "Visual", "Audio", "Others" |
| `why_more_privacy` | Why is more privacy needed? | String |  "See me", "Hear me", "Both" |
| `what_privacy` | What is it? | String | "Thermal", "Scent", "Glare" |
| `people_see` | What do people see? | String | "Appearance", "Work", "Behaviour" |
| `activity` | "Category of activity? | String | "Socialize", "Collaborate", "Learn" |
