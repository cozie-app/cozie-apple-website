---
id: qr_code
title: Creating a QR Code for Onboarding
sidebar_label: QR Code
sidebar_position: 2

---

import useBaseUrl from '@docusaurus/useBaseUrl';

Onboarding can be accelerated by creating a deep link embedded in a QR code that contains all Cozie settings. The link can be opened on the iPhone. Alternatively, the QR code can be scanned with the camera app on the iPhone. Both actions open the 'Settings' tab in the Cozie iPhone app. To complete the change of settings, open the Cozie Watch app and press the sync button in the 'Settings' tab of the Cozie iPhone app while the Cozie watch app is open. The transfer of the settings from the iPhone to the Apple Watch is successful if the first question of the watch survey is visible on the Apple Watch.


## Deep link and QR code creation

Below is a code snippet that creates a deep link and corresponding QR code.

```python
import json
import base64
import qrcode
from IPython.display import Image

# Onboarding payload with Cozie settings
id_participant = "example_participant_01"
id_experiment = "example_experiment"
id_password = "1G8yOhPvMZ6xx"
payload = (
    f"{{"
    f'"id_participant": "{id_participant}",'
    f'"id_experiment": "{id_experiment}",'
    f'"wss_title": "Thermal (long)",'
    f'"wss_goal": 150,'
    f'"wss_time_out": 3500,'
    f'"wss_reminder_enabeled": true,'
    f'"wss_participation_time_start": "09:00",'
    f'"wss_participation_time_end": "18:00",'
    f'"wss_participation_days": "Mo,Tu,We,Th",'
    f'"wss_reminder_interval": 60,'
    f'"pss_reminder_enabled": true,'
    f'"pss_reminder_days": "Fr",'
    f'"pss_reminder_time": "14:00",'
    f'"api_read_url": "https://at6x6b7v54hmoki6dlyew72csq0ihxrn.lambda-url.ap-southeast-1.on.aws",'
    f'"api_read_key": "5LkKVBO1Zp2pbYBbnkQsb8njmf8sGB5zhMrYQmPd",'
    f'"api_write_url": "https://43cb5nnwe3mejojyftbuaow4640nsrnd.lambda-url.ap-southeast-1.on.aws",'
    f'"api_write_key": "5LkKVBO1Zp2pbYBbnkQsb8njmf8sGB5zhMrYQmPd",'
    f'"app_one_signal_app_id": "be00093b-ed75-4c2e-81af-d6b382587283",'
    f'"id_password": "{id_password}",'
    f'"api_watch_survey_url": "https://www.cozie-apple.app/watch_surveys/watch_survey_example.json",'
    f'"api_phone_survey_url": "https://docs.google.com/forms/d/e/1FAIpQLSfOj7_vVRUNDHELmwQqvpFYF5m1p6IXpXaWsQgHOF8HxuTmrw/viewform?usp=pp_url&entry.32388053={id_participant}&entry.1973683772={id_experiment}"'
    f"}}"
)

# Convert payload to deep link
payload_bytes = payload.encode("ascii")
base64_bytes = base64.b64encode(payload_bytes)
base64_payload = base64_bytes.decode("ascii")
deep_link_url = "coziedev://param?data=" + base64_payload

# Print deep link
print(deep_link_url)
print(
    "Number of characters:",
    len(deep_link_url),
    "of 2048 characters (",
    int(len(deep_link_url) / 2048 * 100),
    "%)",
)

# Generate QR code
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(deep_link_url)
qr.make(fit=True)
img = qr.make_image(fill="black", back_color="white")
img.save("qrcode001.png")
Image("qrcode001.png", width=700, height=700)
```

## Example QR Code
The above code snippet will return the deep link and QR code shown below. The QR code can be scanned with the default iPhone camera app and it will open the Cozie app with settings applied.
<img src={useBaseUrl('img/qr_code_example.png')} width="700px" />


## Example Deep Link
As an alternative to the QR code the deep link below that can be sent to the participant. Opening the link on the iPhone will open the Cozie app with settings applied.

[coziedev://param?data=eyJpZF9wYXJ0aWNpcGFudCI6ICJleGFtcGxlX3BhcnRpY2lwYW50XzAxIiwiaWRfZXhwZXJpbWVudCI6ICJleGFtcGxlX2V4cGVyaW1lbnQiLCJ3c3NfdGl0bGUiOiAiVGhlcm1hbCAobG9uZykiLCJ3c3NfZ29hbCI6IDE1MCwid3NzX3RpbWVfb3V0IjogMzUwMCwid3NzX3JlbWluZGVyX2VuYWJlbGVkIjogdHJ1ZSwid3NzX3BhcnRpY2lwYXRpb25fdGltZV9zdGFydCI6ICIwOTowMCIsIndzc19wYXJ0aWNpcGF0aW9uX3RpbWVfZW5kIjogIjE4OjAwIiwid3NzX3BhcnRpY2lwYXRpb25fZGF5cyI6ICJNbyxUdSxXZSxUaCIsIndzc19yZW1pbmRlcl9pbnRlcnZhbCI6IDYwLCJwc3NfcmVtaW5kZXJfZW5hYmxlZCI6IHRydWUsInBzc19yZW1pbmRlcl9kYXlzIjogIkZyIiwicHNzX3JlbWluZGVyX3RpbWUiOiAiMTQ6MDAiLCJhcGlfcmVhZF91cmwiOiAiaHR0cHM6Ly9hdDZ4NmI3djU0aG1va2k2ZGx5ZXc3MmNzcTBpaHhybi5sYW1iZGEtdXJsLmFwLXNvdXRoZWFzdC0xLm9uLmF3cyIsImFwaV9yZWFkX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBpX3dyaXRlX3VybCI6ICJodHRwczovLzQzY2I1bm53ZTNtZWpvanlmdGJ1YW93NDY0MG5zcm5kLmxhbWJkYS11cmwuYXAtc291dGhlYXN0LTEub24uYXdzIiwiYXBpX3dyaXRlX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBwX29uZV9zaWduYWxfYXBwX2lkIjogImJlMDAwOTNiLWVkNzUtNGMyZS04MWFmLWQ2YjM4MjU4NzI4MyIsImlkX3Bhc3N3b3JkIjogIjFHOHlPaFB2TVo2eHgiLCJhcGlfd2F0Y2hfc3VydmV5X3VybCI6ICJodHRwczovL3d3dy5jb3ppZS1hcHBsZS5hcHAvd2F0Y2hfc3VydmV5cy93YXRjaF9zdXJ2ZXlfZXhhbXBsZS5qc29uIiwiYXBpX3Bob25lX3N1cnZleV91cmwiOiAiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZk9qN192VlJVTkRIRUxtd1FxdnBGWUY1bTFwNklYcFhhV3NRZ0hPRjhIeHVUbXJ3L3ZpZXdmb3JtP3VzcD1wcF91cmwmZW50cnkuMzIzODgwNTM9ZXhhbXBsZV9wYXJ0aWNpcGFudF8wMSZlbnRyeS4xOTczNjgzNzcyPWV4YW1wbGVfZXhwZXJpbWVudCJ9
](coziedev://param?data=eyJpZF9wYXJ0aWNpcGFudCI6ICJleGFtcGxlX3BhcnRpY2lwYW50XzAxIiwiaWRfZXhwZXJpbWVudCI6ICJleGFtcGxlX2V4cGVyaW1lbnQiLCJ3c3NfdGl0bGUiOiAiVGhlcm1hbCAobG9uZykiLCJ3c3NfZ29hbCI6IDE1MCwid3NzX3RpbWVfb3V0IjogMzUwMCwid3NzX3JlbWluZGVyX2VuYWJlbGVkIjogdHJ1ZSwid3NzX3BhcnRpY2lwYXRpb25fdGltZV9zdGFydCI6ICIwOTowMCIsIndzc19wYXJ0aWNpcGF0aW9uX3RpbWVfZW5kIjogIjE4OjAwIiwid3NzX3BhcnRpY2lwYXRpb25fZGF5cyI6ICJNbyxUdSxXZSxUaCIsIndzc19yZW1pbmRlcl9pbnRlcnZhbCI6IDYwLCJwc3NfcmVtaW5kZXJfZW5hYmxlZCI6IHRydWUsInBzc19yZW1pbmRlcl9kYXlzIjogIkZyIiwicHNzX3JlbWluZGVyX3RpbWUiOiAiMTQ6MDAiLCJhcGlfcmVhZF91cmwiOiAiaHR0cHM6Ly9hdDZ4NmI3djU0aG1va2k2ZGx5ZXc3MmNzcTBpaHhybi5sYW1iZGEtdXJsLmFwLXNvdXRoZWFzdC0xLm9uLmF3cyIsImFwaV9yZWFkX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBpX3dyaXRlX3VybCI6ICJodHRwczovLzQzY2I1bm53ZTNtZWpvanlmdGJ1YW93NDY0MG5zcm5kLmxhbWJkYS11cmwuYXAtc291dGhlYXN0LTEub24uYXdzIiwiYXBpX3dyaXRlX2tleSI6ICI1TGtLVkJPMVpwMnBiWUJibmtRc2I4bmptZjhzR0I1emhNcllRbVBkIiwiYXBwX29uZV9zaWduYWxfYXBwX2lkIjogImJlMDAwOTNiLWVkNzUtNGMyZS04MWFmLWQ2YjM4MjU4NzI4MyIsImlkX3Bhc3N3b3JkIjogIjFHOHlPaFB2TVo2eHgiLCJhcGlfd2F0Y2hfc3VydmV5X3VybCI6ICJodHRwczovL3d3dy5jb3ppZS1hcHBsZS5hcHAvd2F0Y2hfc3VydmV5cy93YXRjaF9zdXJ2ZXlfZXhhbXBsZS5qc29uIiwiYXBpX3Bob25lX3N1cnZleV91cmwiOiAiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZk9qN192VlJVTkRIRUxtd1FxdnBGWUY1bTFwNklYcFhhV3NRZ0hPRjhIeHVUbXJ3L3ZpZXdmb3JtP3VzcD1wcF91cmwmZW50cnkuMzIzODgwNTM9ZXhhbXBsZV9wYXJ0aWNpcGFudF8wMSZlbnRyeS4xOTczNjgzNzcyPWV4YW1wbGVfZXhwZXJpbWVudCJ9)
