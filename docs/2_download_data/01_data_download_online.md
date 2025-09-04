---
id: data_download_online
title: Download Data (online)
sidebar_label: Download Data (online)
sidebar_position: 1
slug: download
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Download the data collected using the Cozie Apple Watch survey

You can download the data you have collected using the Cozie Apple Watch survey using the following Python code.

Please note that you will have to specify your `ID_PARTICIPANT`, `ID_EXPERIMENT`, `ID_PASSWORD` and `API_KEY`. All
request parameters are described in the table below.

| Parameter                        | Description                                                                                                                                                                                                  |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `x-api-key` <br/>(String)        | Data retrieval API key needed in the request header. You can request an `API_KEY` by emailing us a request at [cozie.app@gmail.com](mailto:cozie.app@gmail.com?subject=Cozie%20Apple%20API%20key%20request). |
| `id_participant` <br/>(String)   | Identifier for an individual participant. <br/> Can be found in the 'Settings' tab of the Cozie phone app (Participant ID).                                                                                  |
| `id_experiment` <br/>(String)    | Identifier for a group of participants. <br/> Can be found in the 'Settings' tab of the Cozie phone app (Experiment ID).                                                                                     |
| `id_password` <br/>(String)      | Password for participant data. <br/> Can be found in the 'Backend' tab of the Cozie phone app (Participant Password).                                                                                        |
| `columns` <br/>(List of strings) | Specifies the [columns](data_overview) that are retrieved. If this parameter is omitted, all columns will be retrieved.                                                                                      |
| `days` <br/>(Integer)            | Specifies the number of days included in the query starting from now looking back. If this parameter is omitted, all data will be retrieved.                                                                 |

The example script below shows how to call the Cozie data retrieval API and convert the received data into a Pandas
dataframe (`df`). The example below is tested with Pandas version 1.3.5.

```python
import requests
import json
import pandas as pd
import matplotlib.pyplot as plt
import shutil

# Settings
YOUR_TIMEZONE = 'Asia/Singapore'
API_KEY = ''  # Reach out to cozie.app@gmail.com for an API_KEY
ID_PARTICIPANT = 'ExternalUser'
ID_EXPERIMENT = 'AppleStore'
ID_PASSWORD = ''
COLUMNS = ['ws_survey_count', 'ws_heart_rate'] # Optional
DAYS = 2  # Optional

# Query data
payload = {
    'id_participant': ID_PARTICIPANT,
    'id_experiment': ID_EXPERIMENT,
    'id_password': ID_PASSWORD,
    'days': DAYS, # Optional
    'columns': COLUMNS #Optional
}
headers = {'Accept': 'application/json', 'x-api-key': API_KEY}
response = requests.get(
    'https://69xmiejax4.execute-api.ap-southeast-1.amazonaws.com/prod/retrieve',
    params=payload,
    headers=headers,
)
url = response.content

# Download zipped CSV file with Cozie data
with requests.get(url, stream=True) as r:
    with open('cozie.zip', 'wb') as f:
        shutil.copyfileobj(r.raw, f)

# Convert zipped CSV file with Cozie to dataframe
with open('cozie.zip', 'rb') as f:
    df = pd.read_csv(f, compression={'method': 'zip', 'archive_name': 'sample.csv'}, na_values=['', 'NaN'], keep_default_na=False)

df = df.drop(columns=['Unnamed: 0'])
df['index'] = pd.to_datetime(df['index'])
df = df.set_index('index')
df.index = df.index.tz_convert(YOUR_TIMEZONE)

# Display dataframe
df.head()
```

### Watch survey data

If you want to focus on the analysis of the watch-based survey data use the code below to filter the dataframe retrieved
above.

```python
# Get only question flow responses
df_questions = df[df["ws_survey_count"].notna()]
df_questions.head()
```

### Physiological data

Use the code below to plot noise and heart rate data contained in the dataframe retrieved above.

```python
# Plot time-series data
fig, ax = plt.subplots(1,2, figsize =(15, 7))

# Heart rate
df["ts_heart_rate"].plot(ax=ax[0], style='.')
ax[0].set_title("Heart Rate", fontsize=18)
ax[0].set_ylabel("Heart Rate [bpm]", fontsize=14)
ax[0].set_xlabel("Time", fontsize=14)

# Noise
df["ts_audio_exposure_environment"].plot(ax=ax[1], style='.')
ax[1].set_title("Sound Pressure", fontsize=18)
ax[1].set_ylabel("Sound Pressure [dBA]", fontsize=14)
ax[1].set_xlabel("Time", fontsize=14)
```

## Column names & watch surveys

The description for all features and the watch survey questions are available on separate pages:

* [Column names](data_overview)
* [Thermal (short)](surveys/ws_thermal_short)
* [Thermal (long)](surveys/ws_thermal_long)
* [Noise and Privacy](surveys/ws_noise_and_privacy)
* [Infection Risk](surveys/ws_infection_risk)
* [Movement](surveys/ws_movement)
* [Privacy](surveys/ws_privacy)
* [Interaction](surveys/ws_interaction)