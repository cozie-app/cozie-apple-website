---
id: c3_download_offline
title: Data Download (offline)
sidebar_label: Data Download (offline)
sidebar_position: 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Download the data collected using the Cozie Apple Watch survey

In addition to the online logging, all Cozie data is also available offline. and can be downloaded from within the Cozie app.

Before you can download the data, you need to transfer the data that is stored in the Cozie watch app: 
 * Open the 'Settings' tab of the Cozie iPhone tab
 * Open the Cozie watch app.
 * Press the 'sync' button in the Cozie iPhone 'Settings' tab while the Cozie watch app is open

Once, the data from the Cozie watch app is transferred to the Cozie iPhone app, you can download the log file: 
* Open the 'Data' tab of the Cozie iPhone app
* Press the 'Download' button
* Save the file in a convenient location or send it to a recipient of your choice.

The log file is contains all Cozie data in a JSON format. The log file can easily be parsed with the CoziePy Python package. The same package can also be used for plotting. 

Below is a basic code snippet that parses the log file and plots the heart rate data.

```python
# Import CoziePy package
from coziepy import Cozie, CoziePlot

# Parse log file
cozie = Cozie()
df = cozie.load(log_file="/content/cozie_example_participant_01_example_experiment_logs.txt", clean_up=False)
df.head()

# Prepare plotting
df.timestamp_lambda = df.index
df = df.sort_index(ascending=True)
cp = CoziePlot(df)

# Plot ws_survey_count
fig, ax = cp.ts_inspection(id_participant='example_participant_01', column_name='ts_heart_rate')

# Plotting without CoziePy
# Remove empty rows
ts_heart_rate = df[df['ts_heart_rate'].notna()]['ts_heart_rate']

# Plot ts_heart_rate
ts_heart_rate.plot()

```

## Column names & watch surveys

The description for all column names and the watch survey questions are available on separate pages:
* [Column names](c3_data_overview)
* [Thermal (short)] <!--(dd_ws_thermal_short)-->
* [Thermal (long)]<!--(dd_ws_thermal_long)-->
* [Noise and Privacy]<!--(dd_ws_noise_and_privacy)-->
* [Infection Risk]<!--dd_ws_infection_risk)-->
* [Movement]<!--(dd_ws_movement)-->
* [Privacy]<!--(dd_ws_privacy)-->