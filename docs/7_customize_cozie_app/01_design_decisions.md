---
id: design_decisions
title: App Design Decisions
sidebar_label: App Design Decisions
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before we explain in detail how to customize Cozie, we want to document some of the design decisions that we made during the development of Cozie.
It should help inform further development and document how Cozie came to work and how it works today.

## Watch survey
- The submit button at the end of the watch survey is required to allow the user to go back and revise the answer to the last watch survey question.
- The Cozie watch app cannot automatically close after pressing the watch survey. The [Apple iOS Human Interface Guidelines](https://stackoverflow.com/questions/8739178/does-apple-disallow-the-use-of-a-close-button-on-ios-ipad) require that all watch apps be closed by pressing the watch crown.

## Phone survey
- The phone survey allows for longer questions and answers but is more intrusive. Many online survey services, e.g., Qualtrix, Google Forms, and Survey Monkey, are available. These services work well on phones and offer a plethora of answer options, e.g., single choice, multiple choice, sliders, point scales, free text, etc... 
    Various collaborators also requested some of these various answer options.
    Instead of replicating these services, we decided to use them in the app and focus on the watch survey and retrieval of HealthKit data.

- Backup file
    - The backup has two main purposes. Firstly, it serves as a backup for the data sent to the backend. Secondly, it allows the Cozie app to work without the backend in cases where we stop operating the backend, or researchers cannot use our backend, e.g., for local data privacy regulation. Nevertheless, we recommend using the log file as a backup in addition to sending data to the backend.

- In-app data visualization
    - Version 2 of the Cozie app had a data page with some data visualization. For the sake of simplicity, the data insight was reduced to three text fields on the data page.

- User management
    - Cozie v1 used [Firebase Authentication](https://firebase.google.com/docs/auth) for user management. This was removed to reduce dependencies and reduce friction from the onboarding process. 

- ResearchKit
    - Cozie v1 used [ResearchKit](https://developer.apple.com/researchkit/). ResearchKit would allow us to roll out experiments using Cozie globally. However, ResearchKit caused problems during development before we were ready to benefit from it. Hence, it was removed to reduce dependencies and remove friction from the onboarding process. ResearchKit could/should be integrated again once Cozie is more refined, i.e., ready to be used in a country-level experiment.
