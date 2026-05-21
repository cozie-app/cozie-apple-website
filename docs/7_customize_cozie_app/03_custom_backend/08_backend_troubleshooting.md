---
id: backend_troubleshooting
title: Backend Troubleshooting
sidebar_label: Backend Troubleshooting
---

# Backend Troubleshooting

This page covers backend, API, and database issues. For general installation, sync, and data collection issues, see [Troubleshooting](/docs/troubleshooting). For custom app, TestFlight, and custom survey issues, see [App Developer Troubleshooting](/docs/customize_cozie_app/app_developer_troubleshooting).

## Push notifications

* **Push notifications from OneSignal don't show up on my device.**

  - Ensure focus modes on the iPhone and Apple Watch are disabled during the installation of the Cozie app and testing of the push notifications.
  - Check the correctness of the Player ID in the Cozie data tab.
  - Check the correctness of the API key.
  - Check the correctness of the information in the *Advanced* tab and in your Python notebook.
  - If you have created your own Cozie app:
    - Check the correctness of the Player ID on [OneSignal.com](https://onesignal.com/).
    - Make sure you created the .p12 certificate for the main identifier.
    - Send a test push notification from the dashboard on [OneSignal.com](https://onesignal.com/).
    - Check the "Subscriptions" under the user profile in the OneSignal dashboard. If it is marked with "Never Subscribed", do the following:
      - Check if push notifications are enabled on the iPhone for Cozie.
      - Force close and open the Cozie app.
      - Restart the iPhone.
      - Re-install the Cozie app.

## Missing data

* **I added a new data field to be stored in the InfluxDB. However, when I submit data, it is not stored**

  The first time data with a new field name is saved in the database, the database sets the data type, e.g., if you were to implement the extraction of stride length information, you could save it as `ts_stride_length`. If you submit the value `1.04`, the value will be stored as a floating-point number (float). The stride length might vary. If you happen to submit the value `1`, the database will attempt to store it as an integer. It would then see that there is already a floating point number stored under `ts_stride_length` and reject the new value of `ts_stride_length`, which is then lost. 

  To avoid this issue, we force-cast the type for each field name in the backend. Let us know what type and field name you would like to add to Cozie, we can help you with this issue.
