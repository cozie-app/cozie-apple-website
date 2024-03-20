---
id: backend_database_to_cozie
title: Reading Cozie data
sidebar_label: Reading Cozie data
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 


<img alt="Data flow from database to Cozie" src={useBaseUrl('img/backend/backend_read_influx.jpg')}width="30%" />

## Overview

## Changes in the Cozie app


## Lambda function code

```python title="Lambda function"

```

### Settings
- General configuration  
    - Timeout: 0 min 30 sec
    - Memory: 512 MB
    - Ephemeral storage: 512 MB
- Function URL:
    - Auth type: None
    - Invoice mode: Buffered
    - CORS: Not enabled
- Environment variables:
    - DB_HOST: XXX.influxcloud.net
    - DB_NAME: cozie-apple
    - DB_PASSWORD: XXX
    - DB_USER: Cozie-Apple-Lambda-Reader