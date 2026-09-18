---
id: app_developer_troubleshooting
title: App Developer Troubleshooting
sidebar_label: App Troubleshooting
---

# App Developer Troubleshooting

This page covers custom app, TestFlight, and custom survey issues. For general installation, sync, and data collection issues, see [Troubleshooting](/docs/troubleshooting). For backend, API, and database issues, see [Backend Troubleshooting](/docs/customize_cozie_app/custom_backend/backend_troubleshooting).

## Custom surveys

* **When I press the sync button in the *Data* or *Advanced* tab I get an "JSON error"**

  - Make sure you have internet access.
  - Make sure you have a good network connection. Flakey Wi-Fi can cause this error.
  - Make sure the JSON file for the watch survey is reachable from Safari on the iPhone.
  - Make sure the watch survey's JSON file is valid and has all fields required by the Cozie specification. There are online tools available to check the JSON validity, e.g., we use [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/#)
  - Firewalls can cause this error.

## TestFlight and custom builds

* **"Show App on Apple Watch" toggle is missing in TestFlight.**

  - Reinstall TestFlight
