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
import shutil

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
url = response.content

# Download zipped CSV file with Cozie data
with requests.get(url, stream=True) as r:
    with open('cozie.zip', 'wb') as f:
        shutil.copyfileobj(r.raw, f)

# Convert zipped CSV file with Cozie to dataframe
with open('cozie.zip', 'rb') as f:
      df = pd.read_csv(f, compression={'method': 'zip', 'archive_name': 'sample.csv'})

df = df.drop(columns=['Unnamed: 0'])
df['index'] = pd.to_datetime(df['index'])
df = df.set_index('index')
df.index = df.index.tz_convert(YOUR_TIMEZONE)

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

## Features & watch surveys

The description for all features and the watch survey questions are available on separate pages:
* [Features](dd_features)
* [Thermal (short)](dd_ws_thermal_short)
* [Thermal (long)](dd_ws_thermal_long)
* [Noise and Privacy](dd_ws_noise_and_privacy)
* [Infection Risk](dd_ws_infection_risk)
* [Movement](dd_ws_movement)
* [Privacy](dd_ws_privacy)