---
id: backend_push_notifcations
title: Sending Push Notifications
sidebar_label: Push Notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 


<img alt="Data flow for push notifications" src={useBaseUrl('img/backend/backend_push_notification.jpg')}width="100%" />


## Overview
We use OneSignal as a push notification service provider. We offer an API to send push notifications to Cozie. 
If you want to send push notifications to Cozie independent of us, you will need to copy the Cozie source code and publish your own version of the Cozie app, while doing so you need to setup your own OneSignal account and replace the OneSignal credentials in the Cozie source code.

## Lambda function code

```python title="Lambda function"

```

### Settings
- Memory
- Ephemoral storage
- Time out
- Environment variables



