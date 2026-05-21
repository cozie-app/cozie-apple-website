module.exports = {
  cozieSidebar: [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "overview/introduction",
      },
      items: ["overview/installation", "overview/setup"],
    },
    "customize_cozie_app/customize_cozie",
    {
      type: "category",
      label: "Surveys",
      link: {
        type: "doc",
        id: "surveys/custom_watch_survey_intro",
      },
      items: [
        "surveys/custom_watch_survey",
        "surveys/watch_survey_icons",
        "surveys/custom_phone_survey",
        {
          type: "category",
          label: "Built-in Surveys",
          link: {
            type: "doc",
            id: "surveys/surveys/ws_thermal_short",
          },
          items: [
            "surveys/surveys/ws_thermal_long",
            "surveys/surveys/ws_infection_risk",
            "surveys/surveys/ws_noise_and_privacy",
            "surveys/surveys/ws_movement",
            "surveys/surveys/ws_privacy",
            "surveys/surveys/ws_interaction",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data and Download",
      link: {
        type: "doc",
        id: "download_data/data_download_online",
      },
      items: [
        "download_data/data_download_offline",
        "download_data/data_overview",
        "cozie_python_package/coziepy",
      ],
    },
    "push_notifications/push_notifications",
    {
      type: "category",
      label: "Deployment Guide",
      link: {
        type: "doc",
        id: "deployment/deployment",
      },
      items: ["deployment/qr_code"],
    },
    "troubleshooting",
    "faq",
    "glossary",
    "privacyPolicy",
    "support",
  ],

  ownAppSidebar: [
    "customize_cozie_app/design_decisions",
    "customize_cozie_app/modify_source_code/introduction",
    "customize_cozie_app/app_developer_faq",
    "customize_cozie_app/app_developer_troubleshooting",
    "customize_cozie_app/app_developer_support",
  ],

  ownBackendSidebar: [
    "customize_cozie_app/custom_backend/backend_design_decisions",
    {
      type: "category",
      label: "Cozie Original Backend (AWS + InfluxDB)",
      link: {
        type: "doc",
        id: "customize_cozie_app/custom_backend/custom_backend",
      },
      items: [
        "customize_cozie_app/custom_backend/backend_cozie_to_database",
        "customize_cozie_app/custom_backend/backend_database_to_cozie",
        "customize_cozie_app/custom_backend/backend_retrieving_cozie_data",
        "customize_cozie_app/custom_backend/backend_push_notifications",
      ],
    },
    "customize_cozie_app/custom_backend/backend_faq",
    "customize_cozie_app/custom_backend/backend_troubleshooting",
    "customize_cozie_app/custom_backend/backend_support",
  ],
};
