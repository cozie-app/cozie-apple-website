---
id: direct_onesignal_api_push
title: Direct OneSignal API Push
sidebar_label: Direct OneSignal API Push
sidebar_position: 2
---

If you use your own OneSignal app, you can bypass the Cozie hosted API and call the OneSignal API directly. This is useful for testing a custom app build or scheduling a simple push notification without deploying a custom backend first.

For the current OneSignal API parameters, see the OneSignal documentation for [sending messages](https://documentation.onesignal.com/reference/create-message), [push notifications](https://documentation.onesignal.com/reference/push-notification), and [API authentication](https://documentation.onesignal.com/reference/quick-start-api-guide).

Prepare the following values:

| Name | Description |
| --- | --- |
| `PROJECT_ID` | Google Cloud project that owns the Cloud Scheduler job |
| `LOCATION` | Google Cloud Scheduler location, such as `australia-southeast1` |
| `JOB_NAME` | Name of the Cloud Scheduler job |
| `APP_ID` | OneSignal App ID for your custom Cozie app |
| `API_KEY` | OneSignal REST API key for the app |
| `SUBSCRIPTION_ID` | OneSignal subscription ID for the target device |

You can create a Google Cloud Scheduler HTTP job that calls the OneSignal push notification endpoint directly:

```bash
gcloud scheduler jobs create http "${JOB_NAME}" \
  --project="${PROJECT_ID}" \
  --location="${LOCATION}" \
  --schedule="0 11 * * *" \
  --time-zone="Australia/Sydney" \
  --uri="https://api.onesignal.com/notifications?c=push" \
  --http-method=POST \
  --headers="Content-Type=application/json,Authorization=Key ${API_KEY}" \
  --message-body="{\"app_id\":\"${APP_ID}\",\"target_channel\":\"push\",\"include_subscription_ids\":[\"${SUBSCRIPTION_ID}\"],\"headings\":{\"en\":\"Cozie Test Notification\"},\"contents\":{\"en\":\"Scheduled notification at 11AM.\"}}"
```

Run the job immediately to test the notification:

```bash
gcloud scheduler jobs run "${JOB_NAME}" \
  --project="${PROJECT_ID}" \
  --location="${LOCATION}"
```

:::warning
Do not commit OneSignal REST API keys to Git. Cloud Scheduler also stores the configured HTTP headers with the job, so restrict access to the Google Cloud project and scheduler job. For production deployments, consider sending notifications through a controlled backend or storing secrets in Google Cloud Secret Manager.
:::
