"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"web_api_update","metadata":{"permalink":"/blog/web_api_update","editUrl":"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2023-02-07-web_api_update.md","source":"@site/blog/2023-02-07-web_api_update.md","title":"Update - Web API","description":"We have updated the web APi for Cozie data retrieval. The change became necessary as the requests from some users exceeded the current payload limit of 6 MB.","date":"2023-02-07T00:00:00.000Z","formattedDate":"February 7, 2023","tags":[{"label":"cozie-apple","permalink":"/blog/tags/cozie-apple"},{"label":"cozie","permalink":"/blog/tags/cozie"},{"label":"app store","permalink":"/blog/tags/app-store"},{"label":"web API","permalink":"/blog/tags/web-api"}],"readingTime":0.825,"hasTruncateMarker":false,"authors":[{"name":"Mario Frei","title":"Postdoc at BUDS Lab","url":"https://github.com/mariofrei","imageURL":"../img/mario.jpeg"}],"frontMatter":{"slug":"web_api_update","title":"Update - Web API","author":"Mario Frei","author_title":"Postdoc at BUDS Lab","author_url":"https://github.com/mariofrei","author_image_url":"../img/mario.jpeg","tags":["cozie-apple","cozie","app store","web API"]},"nextItem":{"title":"Update - Cozie is now on the App Store","permalink":"/blog/appStore"}},"content":"We have updated the web APi for [Cozie data retrieval](/docs/downloadData). The change became necessary as the requests from some users exceeded the current payload limit of 6 MB. \\n[The example script](/docs/downloadData) was changed in to places:\\n1. The \'shutil\' module needs to be imported at the beginning\\n\\n```\\nimport shutil\\n```\\n\\n2. The new web API doesn\'t serve the data as JSON string. Instead, it is a two-step process. Firstly, a link is provided to a zipped .csv-file containing the data. Hence, the provided link needs to be called to then download the actual data.\\n\\n```\\n# Download zipped CSV file with Cozie data\\nwith requests.get(url, stream=True) as r:\\n    with open(\'cozie.zip\', \'wb\') as f:\\n        shutil.copyfileobj(r.raw, f)\\n\\n# Convert zipped CSV file with Cozie to dataframe\\nwith open(\'cozie.zip\', \'rb\') as f:\\n      df = pd.read_csv(f, compression={\'method\': \'zip\', \'archive_name\': \'sample.csv\'})\\n\\ndf = df.drop(columns=[\'Unnamed: 0\'])\\n```\\n\\nThe initial call of the web API and the timezone manipulation of the dataframe remains the same, as does the resulting Pandas dataframe."},{"id":"appStore","metadata":{"permalink":"/blog/appStore","editUrl":"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2022-12-13-app_store.md","source":"@site/blog/2022-12-13-app_store.md","title":"Update - Cozie is now on the App Store","description":"Cozie is now available on the official Apple App Store. Thank you to all of you who help us test during the development","date":"2022-12-13T00:00:00.000Z","formattedDate":"December 13, 2022","tags":[{"label":"cozie-apple","permalink":"/blog/tags/cozie-apple"},{"label":"cozie","permalink":"/blog/tags/cozie"},{"label":"app store","permalink":"/blog/tags/app-store"}],"readingTime":0.33,"hasTruncateMarker":false,"authors":[{"name":"Mario Frei","title":"Postdoc at BUDS Lab","url":"https://github.com/mariofrei","imageURL":"../img/mario.jpeg"}],"frontMatter":{"slug":"appStore","title":"Update - Cozie is now on the App Store","author":"Mario Frei","author_title":"Postdoc at BUDS Lab","author_url":"https://github.com/mariofrei","author_image_url":"../img/mario.jpeg","tags":["cozie-apple","cozie","app store"]},"prevItem":{"title":"Update - Web API","permalink":"/blog/web_api_update"},"nextItem":{"title":"Update - Latest version","permalink":"/blog/updateLatest"}},"content":"Cozie is now available on the official [Apple App Store](https://apps.apple.com/sg/app/cozie/id1625029501). Thank you to all of you who help us test during the development\\n\\nUntil now, Cozie for Apple has been deployed four times in research experiments with up to 50 participants and counting. \\n\\nWe have updated the documentation for [installation](/docs/installation), [setup](/docs/setup), and [data retrieval](/docs/downloadData). We are still working on updating the documentation for [customization of Cozie](/docs/gettingStarted)."},{"id":"updateLatest","metadata":{"permalink":"/blog/updateLatest","editUrl":"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2022-07-19-latest version.md","source":"@site/blog/2022-07-19-latest version.md","title":"Update - Latest version","description":"Apologies on the lack of updates for some time. The latest version of Cozie is now available for testing!","date":"2022-07-19T00:00:00.000Z","formattedDate":"July 19, 2022","tags":[{"label":"cozie-apple","permalink":"/blog/tags/cozie-apple"},{"label":"cozie","permalink":"/blog/tags/cozie"}],"readingTime":0.38,"hasTruncateMarker":false,"authors":[{"name":"Federico Tartarini","title":"Postdoc at SinBerBEST","url":"https://github.com/FedericoTartarini","imageURL":"https://federicotartarini.github.io/img/profile.jpg"}],"frontMatter":{"slug":"updateLatest","title":"Update - Latest version","author":"Federico Tartarini","author_title":"Postdoc at SinBerBEST","author_url":"https://github.com/FedericoTartarini","author_image_url":"https://federicotartarini.github.io/img/profile.jpg","tags":["cozie-apple","cozie"]},"prevItem":{"title":"Update - Cozie is now on the App Store","permalink":"/blog/appStore"},"nextItem":{"title":"Update - Beta testing","permalink":"/blog/updateBeta"}},"content":"Apologies on the lack of updates for some time. The latest version of Cozie is now available for testing! \\n\\nThank to all of you who help us testing the Alpha and Beta version.\\n\\nPlease use the link in the home page and click on the \'contact us\' button if you are interested and would like to learn more on this project. \\nYou can also proceed to [Installation](/docs/installation) and follow the steps to install the latest version."},{"id":"updateBeta","metadata":{"permalink":"/blog/updateBeta","editUrl":"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2019-09-30-update.md","source":"@site/blog/2019-09-30-update.md","title":"Update - Beta testing","description":"We have successfully tested the Alpha version of Cozie and everything is working fine. We are now started testing the Beta version on the Apple Watch 6 and we are planning to open-source the code very soon.","date":"2019-09-30T00:00:00.000Z","formattedDate":"September 30, 2019","tags":[{"label":"cozie-apple","permalink":"/blog/tags/cozie-apple"},{"label":"cozie","permalink":"/blog/tags/cozie"},{"label":"thermal-comfort","permalink":"/blog/tags/thermal-comfort"},{"label":"ResearchKit","permalink":"/blog/tags/research-kit"}],"readingTime":0.38,"hasTruncateMarker":false,"authors":[{"name":"Federico Tartarini","title":"Postdoc at SinBerBEST","url":"https://github.com/FedericoTartarini","imageURL":"https://federicotartarini.github.io/img/profile.jpg"}],"frontMatter":{"slug":"updateBeta","title":"Update - Beta testing","author":"Federico Tartarini","author_title":"Postdoc at SinBerBEST","author_url":"https://github.com/FedericoTartarini","author_image_url":"https://federicotartarini.github.io/img/profile.jpg","tags":["cozie-apple","cozie","thermal-comfort","ResearchKit"]},"prevItem":{"title":"Update - Latest version","permalink":"/blog/updateLatest"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"We have successfully tested the Alpha version of Cozie and everything is working fine. We are now started testing the Beta version on the Apple Watch 6 and we are planning to open-source the code very soon.\\n\\nThank to all of you who help us testing the Alpha version.\\n\\nPlease use the link in the home page to contact me if you are interested and would like to learn more or to contribute to the project."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/cozie-app/cozie-apple-website/tree/master/blog/2019-05-30-welcome.md","source":"@site/blog/2019-05-30-welcome.md","title":"Welcome","description":"Welcome to Cozie Apple. I am currently working on a Alpha version of Cozie","date":"2019-05-30T00:00:00.000Z","formattedDate":"May 30, 2019","tags":[{"label":"cozie-apple","permalink":"/blog/tags/cozie-apple"},{"label":"cozie","permalink":"/blog/tags/cozie"},{"label":"thermal-comfort","permalink":"/blog/tags/thermal-comfort"},{"label":"ResearchKit","permalink":"/blog/tags/research-kit"}],"readingTime":0.6,"hasTruncateMarker":true,"authors":[{"name":"Federico Tartarini","title":"Postdoc at SinBerBEST","url":"https://github.com/FedericoTartarini","imageURL":"https://federicotartarini.github.io/img/profile.jpg"}],"frontMatter":{"slug":"welcome","title":"Welcome","author":"Federico Tartarini","author_title":"Postdoc at SinBerBEST","author_url":"https://github.com/FedericoTartarini","author_image_url":"https://federicotartarini.github.io/img/profile.jpg","tags":["cozie-apple","cozie","thermal-comfort","ResearchKit"]},"prevItem":{"title":"Update - Beta testing","permalink":"/blog/updateBeta"}},"content":"Welcome to Cozie Apple. I am currently working on a Alpha version of Cozie\\nApple and I am planning to release it by the end of 2020.\\n\\nPlease contact me if you are interested and would like to learn more or to contribute to the project.\\n\\n\x3c!--truncate--\x3e\\n\\nCozie Apple is iOS app for human comfort data collection.\\n\\nCozie Apple complements the [Cozie clock face for Fitbit](https://cozie.app). With Apple\\ndominating the global smartwatch market share we decided to develop Cozie Apple.\\n\\nCozie Apple will include the following functionalities, such as:\\n* The consent procedure will be embedded in the app, using Apple Research Kit.\\n* Push notifications.\\n* Integration with all the Apple watch sensors.\\n* Integration with Apple Health Kit."}]}')}}]);