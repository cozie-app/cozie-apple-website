---
id: introduction
title: Modifying the Cozie App Source Code
sidebar_label: Modifying Cozie Source Code
sidebar_position: 1
---

import Admonition from '@theme/Admonition';

<Admonition type="warning" title="Page Under Development">
  This page is currently under development. Instructions may change and are not complete yet.
</Admonition>

# Introduction: Modifying the Cozie App Source Code

Follow these steps to set up your environment and run the Cozie app locally for development:

1. **Download and install Xcode**  
   - Ensure you have both the iPhone and Apple Watch simulators installed.

2. **Clone the Cozie repository locally**
   You can clone the repository using Git:
   ```bash
   git clone https://github.com/cozie-app/cozie-apple.git
   cd cozie-apple
   ```

3. **Install CocoaPods**  
   - Use Homebrew, you need to have [Homebrew](https://brew.sh/) installed on your Mac. If you don't haveit, install Homebrew first then run: 
     ```bash
     brew install cocoapods
     ```
   - _Do not use_ `sudo gem install cocoapods`.

4. **Verify CocoaPods installation**  
   - Run:
     ```bash
     pod --version
     ```

5. **Install project dependencies**  
   - Make sure you are in the project directory (where the `Podfile` is located) and run:
     ```bash
     pod install
     ```

6. **Open the project in Xcode**  
   - From the command line:
     ```bash
     open Cozie.xcworkspace
     ```

7. **Run the app on the iPhone simulator**  
   - In Xcode, select an iPhone device (e.g., iPhone Pro Max).
   - Press the play button to build and launch the app.
   - Accept all permission requests (location, health data).

8. **Run the Cozie Watch App**  
   - Change the target to "Cozie Watch App" in Xcode.
   - Press play to launch the Apple Watch simulator.
   - Accept all permission requests.

9. **(Optional) Run on physical devices**  
   - Connect your iPhone and Apple Watch via cable.
   - Trust the device when prompted.
   - Allow time for Xcode to set up the devices.

<Admonition type="warning" title="Page Under Development">
  Additional steps for modifying the source code will be provided soon.
</Admonition>

## Troubleshooting

- **Syncing issues:** Keep pressing the sync button in the Cozie iPhone app until it works.

