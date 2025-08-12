---
id: coziepy
title: CoziePy
sidebar_label: Cozie Python Package
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# CoziePy: Python Package for Cozie

**CoziePy** is a Python package designed to make working with Cozie data easy and efficient. 
It provides tools for downloading, parsing, and visualizing data collected from the Cozie app.

- **PyPI:** [coziepy](https://pypi.org/project/coziepy/)

## Features

- Download data from the Cozie backend via API
- Parse log files exported from the Cozie app
- Save and load data in efficient formats (Parquet, CSV)
- Basic plotting for experiment monitoring and debugging

> **Note:** CoziePy is in early development. Expect frequent updates and changes.

## Installation

Install the latest version from PyPI:

```bash
pip install coziepy
```

## Getting Started

### 1. Import CoziePy and Create a `Cozie` Instance

```python
from coziepy import Cozie

cozie = Cozie()
```

### 2. Parse Data from a Cozie App Log File

- `log_file`: Path to the log file [downloaded from the Cozie app](/docs/download_data/download).
- `output_file`: (Optional) Path to save the parsed data (recommended: `.parquet.gzip` for efficiency).
- `clean_up`: Set to `False` when parsing offline log files.

```python
df = cozie.load(
    log_file="/path/to/cozie_log.txt",
    clean_up=False,
    output_file="example.parquet.gzip",
)
df.head()
```

### 3. Download Data Using the Web API

- `api_key`: Provided by the Cozie team. [Request one](mailto:cozie.app@gmail.com?subject=Cozie%20Apple%20API%20key%20request).
- `id_experiment`: Experiment identifier.
- `participant_list`: List of participant IDs.
- `timezone`: E.g., `"Asia/Singapore"`.
- `api_url`: Default API endpoint.

```python
df = cozie.load(
    id_experiment="example_experiment",
    participant_list=["example_participant_01", "example_participant_02"],
    timezone="Asia/Singapore",
    api_url="https://m7cy76lxmi.execute-api.ap-southeast-1.amazonaws.com/default/cozie-apple-researcher-read-influx",
    api_key="YOUR_API_KEY",
    output_file="example.parquet.gzip",
)
df.head()
```

### 4. Load Data from a Previously Processed File

```python
df = cozie.load(input_file="example.parquet.gzip")
df.head()
```

## Plotting

CoziePy includes basic plotting tools for quick data inspection. These are mainly intended for experiment monitoring and debugging.

### Plot Time-Series Data for One Participant

```python
fig = cozie.ts_inspection(
    id_participant="example_participant_01", column_name="ts_heart_rate"
)
fig.show()
```

## Troubleshooting

- **Installation issues:** Ensure you are using Python 3.7+ and the latest `pip`.
- **API access:** Contact [cozie.app@gmail.com](mailto:cozie.app@gmail.com) for API keys.
- **Large files:** Prefer `.parquet.gzip` over `.csv` for storage efficiency.
- **Questions or bugs:** Please reach out to the Cozie team.

## Learn More

- [CoziePy on PyPI](https://pypi.org/project/coziepy/)
- [Contact us](mailto:cozie.app@gmail.com)

---
_Last updated: 2025-08_
