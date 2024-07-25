---
id: push_notifications
title: Push notifications
sidebar_label: Push notifications
sidebar_position: 1
slug: push_notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Send push notifications to the Cozie app

You can send push notifications to the Cozie app using the following Python code. 

Please note that you will have to specify your `ID_PARTICIPANT`, `ID_EXPERIMENT`, `ID_PASSWORD` and `API_KEY`.
You can request an `API_KEY` by emailing us a request at cozie.app@gmail.com.

`ID_PARTICIPANT` and `ID_EXPERIMENT` can be found in the 'Settings' tab of the Cozie iPhone app.
`ID_PASSWORD` can be found in the 'Backend' tab of the Cozie iPhone app.

```python
# Credentials
ID_PARTICIPANT = 'ExternalUser'
ID_EXPERIMENT = 'AppleStore'
ID_PASSWORD = 'xxx'
API_KEY = 'XXX'
API_URL = 'https://69xmiejax4.execute-api.ap-southeast-1.amazonaws.com/prod/notification/'

# Define payload
payload= dict()
payload['id_experiment'] = ID_EXPERIMENT
payload['id_participant'] = ID_PARTICIPANT
payload['id_password'] = ID_PASSWORD
payload['message'] = 'test_message'
payload['heading'] = 'test_heading'
payload['subtitle'] = 'test_subtitle'

headers = {'x-api-key': API_KEY,
          'Content-Type': 'application/json'}

req = requests.post(API_URL, headers=headers, json=payload)

print(req.status_code)
print(req.content)
```


The value in the `text` fields is shown on the action buttons in push notification.
The value of the `id` fields is logged with the other Cozie data under the column name `action_button`. 

Push notifications are shown on the iPhone and/or Apple Watch depending on which device is used. The screenshots below show how the push notifications look on the iPhone and Apple Watch.
   
<img alt="Screenshot of push notification on iPhone" src={useBaseUrl('img/push_notifications/push_notification_iphone.png')}width="30%" /> &nbsp;
<img alt="Screenshot of push notification on Apple Watch" src={useBaseUrl('img/push_notifications/push_notification_apple_watch_cover.png')}width="30%" /> &nbsp;
<img alt="Screenshot of push notification on Apple Watch" src={useBaseUrl('img/push_notifications/push_notification_apple_watch.png')}width="30%" /> &nbsp;


## Push notifications with action buttons
Buttons in the push notifications below the push notification message are called 'action buttons'. These can be shown by adding the `buttons` field to the payload dictionary as shown below.


```python
ID_PARTICIPANT = 'ExternalUser'
ID_EXPERIMENT = 'AppleStore'
ID_PASSWORD = 'xxx'
API_KEY = 'XXX'
API_URL = 'https://69xmiejax4.execute-api.ap-southeast-1.amazonaws.com/prod/notification/'

# Define payload
payload= dict()
payload['id_experiment'] = ID_EXPERIMENT
payload['id_participant'] = ID_PARTICIPANT
payload['id_password'] = ID_PASSWORD
payload['message'] = 'test_message'
payload['heading'] = 'test_heading'
payload['subtitle'] = 'test_subtitle'
payload['buttons'] =[{'id': 'helpful',
                      'text': 'Helpful'},
                     {'id': 'not_helpful',
                      'text': 'Not helpful'}
                     ]

headers = {'x-api-key': API_KEY,
          'Content-Type': 'application/json'}

req = requests.post(PUSH_API_URL, headers=headers, json=payload)

print(req.status_code)
print(req.content)
```
The screenshots below show how the push notifications with action buttons look on the iPhone and Apple Watch. The action buttons on the iPhone only show after the participant long-taps the push notification.

<img alt="Screenshot of push notification on iPhone with action button" src={useBaseUrl('img/push_notifications/push_notification_iphone_action_button.png')}width="30%" /> &nbsp;
<img alt="Screenshot of push notification on Apple Watch" src={useBaseUrl('img/push_notifications/push_notification_apple_watch_cover.png')}width="30%" /> &nbsp;
<img alt="Screenshot of push notification on Apple Watch with action button" src={useBaseUrl('img/push_notifications/push_notification_apple_watch_action_button.png')}width="30%" /> &nbsp;

