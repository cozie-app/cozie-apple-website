---
slug: web_api_update
title: Update - Web API
authors: mario
tags: [cozie-apple, cozie, app store, web API]
---

We have updated the web APi for [Cozie data retrieval](/docs/download_data/data_download_offline). The change became necessary as the requests from some users exceeded the current payload limit of 6 MB. 
[The example script](/docs/download_data/data_download_offline) was changed in to places:
1. The 'shutil' module needs to be imported at the beginning

```
import shutil
```

<!--truncate-->

2. The new web API doesn't serve the data as JSON string. Instead, it is a two-step process. Firstly, a link is provided to a zipped .csv-file containing the data. Hence, the provided link needs to be called to then download the actual data.

```
# Download zipped CSV file with Cozie data
with requests.get(url, stream=True) as r:
    with open('cozie.zip', 'wb') as f:
        shutil.copyfileobj(r.raw, f)

# Convert zipped CSV file with Cozie to dataframe
with open('cozie.zip', 'rb') as f:
      df = pd.read_csv(f, compression={'method': 'zip', 'archive_name': 'sample.csv'})

df = df.drop(columns=['Unnamed: 0'])
```

The initial call of the web API and the timezone manipulation of the dataframe remains the same, as does the resulting Pandas dataframe.
