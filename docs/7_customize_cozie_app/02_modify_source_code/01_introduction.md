---
id: introduction
title: Modifying the Cozie App Source Code
sidebar_label: Modifying Cozie Source Code
sidebar_position: 4
---

import Admonition from '@theme/Admonition';

# Introduction: Modifying the Cozie App Source Code

This guide explains how to set up the Cozie Apple source code, configure your own app identifiers, and build and run the app locally for development.

It is intended for developers who want to run Cozie from source, modify the app, test it on simulators or physical devices, or publish their own build through TestFlight or the App Store.

## Purpose and Scope

Cozie Apple contains multiple app targets that must agree with each other before Xcode can build and run the project successfully:

- the iPhone app target, `Cozie`
- the Apple Watch app target, `Cozie Watch App`
- the notification service extension target, `OneSignalNotificationServiceExtension`

If you use the original Cozie bundle identifiers, Xcode may fail to register or sign them for your Apple Developer Team. For custom development, you should replace the app identifiers, App Group, and OneSignal App ID with values that belong to your own team and services.

## Prerequisites

Before you start, install and prepare the following:

- A Mac with [Xcode](https://developer.apple.com/xcode/) installed.
- iPhone and Apple Watch simulators installed in Xcode.
- Git installed on your computer.
- [Homebrew](https://brew.sh/) installed on your Mac.
- An Apple Developer account or Apple Developer Program membership.

Install CocoaPods with Homebrew:

```bash
brew install cocoapods
```

Do not install CocoaPods with `sudo gem install cocoapods`.

Verify that CocoaPods is available:

```bash
pod --version
```

<Admonition type="info" title="Simulator and physical device requirements">
  You can often start with the simulator while setting up the project. Running on physical devices, using the Apple Watch app, distributing through TestFlight, and testing push notifications require correct signing, Bundle IDs, App Groups, and service configuration.
</Admonition>

## Clone and Install Dependencies

Clone the Cozie Apple repository:

```bash
git clone https://github.com/cozie-app/cozie-apple.git
cd cozie-apple
```

Install the iOS dependencies from the directory that contains the `Podfile`:

```bash
pod install
```

Open the Xcode workspace:

```bash
open Cozie.xcworkspace
```

After running `pod install`, always open `Cozie.xcworkspace`. Do not open `Cozie.xcodeproj` directly.

## Prepare App Identifiers and Service Values

Prepare the values that you will use for your custom app build:

| Name | Placeholder | Example format |
| --- | --- | --- |
| Apple Developer Team | `<YOUR_APPLE_TEAM>` | Select your team in Xcode |
| iPhone App Bundle ID | `<IOS_BUNDLE_ID>` | `com.yourorg.cozie` |
| Watch App Bundle ID | `<WATCH_BUNDLE_ID>` | `com.yourorg.cozie.watchkitapp` |
| Notification Extension Bundle ID | `<EXTENSION_BUNDLE_ID>` | `com.yourorg.cozie.OneSignalNotificationServiceExtension` |
| App Group ID | `<APP_GROUP_ID>` | `group.com.yourorg.cozie` |
| OneSignal App ID | `<ONESIGNAL_APP_ID>` | The UUID generated in OneSignal |

We recommend using the same prefix for all three Bundle IDs:

- `<IOS_BUNDLE_ID>`
- `<IOS_BUNDLE_ID>.watchkitapp`
- `<IOS_BUNDLE_ID>.OneSignalNotificationServiceExtension`

We also recommend deriving the App Group from the iPhone Bundle ID:

- `group.<IOS_BUNDLE_ID>`

## Configure Signing and Bundle Identifiers

In Xcode, select the `Cozie` project in the Project Navigator. Then configure the following targets under `TARGETS`.

### Cozie

Open `Cozie > Signing & Capabilities`:

- Enable `Automatically manage signing`.
- Set `Team` to `<YOUR_APPLE_TEAM>`.
- Set `Bundle Identifier` to `<IOS_BUNDLE_ID>`.

### Cozie Watch App

Open `Cozie Watch App > Signing & Capabilities`:

- Enable `Automatically manage signing`.
- Set `Team` to `<YOUR_APPLE_TEAM>`.
- Set `Bundle Identifier` to `<WATCH_BUNDLE_ID>`.

Open `Cozie Watch App > Build Settings`, search for `WKCompanionAppBundleIdentifier`, and set it to:

```text
<IOS_BUNDLE_ID>
```

This value must match the iPhone app Bundle ID.

### OneSignalNotificationServiceExtension

Open `OneSignalNotificationServiceExtension > Signing & Capabilities`:

- Enable `Automatically manage signing`.
- Set `Team` to `<YOUR_APPLE_TEAM>`.
- Set `Bundle Identifier` to `<EXTENSION_BUNDLE_ID>`.

## Configure App Groups

The iPhone app and the notification service extension must use the same App Group.

In Xcode, set the App Group to `<APP_GROUP_ID>` in both places:

- `Cozie > Signing & Capabilities > App Groups`
- `OneSignalNotificationServiceExtension > Signing & Capabilities > App Groups`

If an old App Group is already enabled, remove or uncheck it, then add and enable `<APP_GROUP_ID>`.

Next, confirm that the same App Group value is set in the target `Info` settings:

- `Cozie > Info > OneSignal_app_groups_key = <APP_GROUP_ID>`
- `OneSignalNotificationServiceExtension > Info > OneSignal_app_groups_key = <APP_GROUP_ID>`

Finally, update the app group constant in:

```text
Cozie/Controller/PushNotificationController/GroupCommon.swift
```

Set the `storageName` value to:

```text
<APP_GROUP_ID>
```

## Configure OneSignal

Create or open your OneSignal app and copy the OneSignal App ID. Use it as `<ONESIGNAL_APP_ID>`.

In Xcode, open the following files and replace the OneSignal App ID in both of them:

- `Cozie/Common/CommunicationKeys.swift`
- `Cozie/Common/Defaults.swift`

Both files must use the same `<ONESIGNAL_APP_ID>`.

After configuring the OneSignal App ID, send a test push notification to a physical iPhone before using the app in the field. For direct OneSignal API calls and scheduled push notifications, see [Direct OneSignal API Push](/docs/push_notifications/direct_onesignal_api_push).

## Run the App Locally

### Run the iPhone App in the Simulator

In Xcode:

1. Select an iPhone simulator, such as an iPhone Pro Max simulator.
2. Select the `Cozie` scheme.
3. Press the play button to build and launch the app.
4. Accept the permission requests for location, HealthKit, and notifications when prompted.

### Run the Watch App in the Simulator

In Xcode:

1. Select the `Cozie Watch App` scheme.
2. Select an Apple Watch simulator.
3. Press the play button to build and launch the watch app.
4. Accept permission requests when prompted.

### Run on Physical Devices

To run Cozie on a physical iPhone and Apple Watch:

1. Connect your iPhone and Apple Watch.
2. Enable Developer Mode on the iPhone: `Settings > Privacy & Security > Developer Mode`.
3. Enable Developer Mode on the Apple Watch: `Settings > General > Developer`.
4. Trust the device when prompted.
5. Allow Xcode time to prepare the devices.
6. Select your physical iPhone as the target device in Xcode.
7. Build and run the `Cozie` scheme.

If the physical-device build fails, check the Xcode error message first. Common causes are an invalid Team, incorrect Bundle IDs, missing App Groups, incorrect provisioning profiles, missing permissions, or an untrusted device.

## Preflight Checklist

Before building your custom app, confirm the following:

- All three targets use `<YOUR_APPLE_TEAM>`.
- The `Cozie` target Bundle ID is `<IOS_BUNDLE_ID>`.
- The `Cozie Watch App` target Bundle ID is `<WATCH_BUNDLE_ID>`.
- The `OneSignalNotificationServiceExtension` target Bundle ID is `<EXTENSION_BUNDLE_ID>`.
- `WKCompanionAppBundleIdentifier` is `<IOS_BUNDLE_ID>`.
- `Cozie` and `OneSignalNotificationServiceExtension` both use `<APP_GROUP_ID>` under App Groups.
- Both `OneSignal_app_groups_key` values are `<APP_GROUP_ID>`.
- `GroupCommon.swift` has `storageName` set to `<APP_GROUP_ID>`.
- `CommunicationKeys.swift` and `Defaults.swift` both use `<ONESIGNAL_APP_ID>`.

Do not manually edit `Cozie.xcodeproj/project.pbxproj` for these settings. Configure Team, Bundle IDs, App Groups, target `Info` settings, and Build Settings through the Xcode interface where possible.

## Troubleshooting

- **Xcode cannot register the Bundle Identifier:** Replace the original Cozie Bundle IDs with Bundle IDs that belong to your Apple Developer Team. Configure the iPhone app, Apple Watch app, and notification service extension targets.
- **The watch app does not connect to the iPhone app:** Confirm that `WKCompanionAppBundleIdentifier` matches `<IOS_BUNDLE_ID>`.
- **Push notification or notification extension errors:** Confirm that the App Group and OneSignal App ID are identical in all places listed above.
- **Syncing issues in the Cozie iPhone app:** Keep pressing the sync button in the Cozie iPhone app until it works.
