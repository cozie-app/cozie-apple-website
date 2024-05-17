---
id: coziepy
title: CoziePy
sidebar_label: Cozie Python Package
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# CoziePy: Python Package for Cozie

We have created a Python package for Cozie to make data wrangling with Cozie data as convenient as possible. The package is called CoziePy and is available on [pypi.org](https://pypi.org/project/coziepy/)

The packages helps with download in Cozie data from the backend, parsing the log file from the Cozie app, and it as some plotting functionality. 

<b>
Please note the CoziePy is still in early development. Hence, frequent changes are to be expected.
</b>

<br/>
<br/>


# Load data
There are several ways to load Cozie data. We have listed a few examples below.

### Import CoziePy and create a `Cozie` instance
```python
from coziepy import Cozie
cozie = Cozie()
```

### Parse from Cozie app log file
`log_file` is the path to the file [downloaded from within the Cozie app](/docs/download_data/download).


`output_file` is an optional input parameter to save the Cozie dataframe as zipped parquet file. Alternatively, .csv is also a valid file extension but results in approximately ten times larger files.

`clean_up` currently needs to set to 'False' when parsing offline log files.
```python
df = cozie.load(
    log_file="/content/cozie_example_participant_01_example_experiment_logs.txt",
    clean_up=False,
    output_file="example.parquet.gzip",
)
df.head()
```

### Download data using the web API
`api_key` is provided by us. Please contact us at cozie.app@gmail.com if you need one.
```python
df = cozie.load(
    id_experiment="example_experiment",
    participant_list=["example_participant_01", "example_participant_02"],
    timezone="Asia/Singapore",
    api_url="https://m7cy76lxmi.execute-api.ap-southeast-1.amazonaws.com/default/cozie-apple-researcher-read-influx",
    api_key="XXX",
    output_file="example.parquet.gzip",
)
df.head()

```

### Load data from previously processed data
```python
df = cozie.load(input_file="example.parquet.gzip")
df.head()
```

## Plotting
CoziePy has some plotting functionality which is mainly focused on experiment monitoring and debugging. In the examples below it is assumed that you have already generated a Pandas dataframe containing Cozie data using one of the examples above.

### Plot time-series data for one participant
```python
fig, ax = cp.ts_inspection(
    id_participant="example_participant_01", column_name="ts_heart_rate"
)
```