import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Free and Easy to Use</>,
    imageUrl: "img/undraw_watch_application.svg",
    description: (
      <>
        Building occupants can complete a right-here-right-now survey directly
        from their Apple watch. Without the need of having to open an app on
        their Phone or a survey link.
      </>
    ),
  },
  {
    title: <>Open Source</>,
    imageUrl: "img/undraw_dev_productivity_umsq.svg",
    description: (
      <>
        Cozie is an open-source project and together with{" "}
        <a href={"https://cozie-fitbit.app"}>Cozie Fitbit</a>, allows researchers to
        focus on the data collection. We have taken care of all the programming
        for you!
      </>
    ),
  },
  {
    title: <>Powered by Apple HealthKit</>,
    imageUrl: "img/undraw_drag_5i9w.svg",
    description: (
      <>
        Cozie iOS app uses{" "}
        <a href={"https://developer.apple.com/documentation/healthkit"}>
          Apple's HealthKit
        </a>
        . A software framework for Apple apps that lets researchers physiological data, e.g., heart rate.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        "avatar avatar--vertical col col--4 text--center",
        styles.features
      )}
    >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const contributors = [
  {
    name: <>Federico Tartarini</>,
    imageUrl: "img/federico.jpg",
    role: <>Lead developer</>,
    profession: <>Postdoctoral Scholar at SinBerBEST</>,
    link: "https://federicotartarini.github.io",
  },
  {
    name: <>Clayton Miller</>,
    imageUrl: "img/clayton.png",
    role: <>Project coordinator and supervisor</>,
    profession: <>Assistant Professor at NUS</>,
    link: "https://www.linkedin.com/in/claytonmiller/",
  },
  {
    name: <>Stefano Schiavon</>,
    imageUrl: "img/stefano.jpeg",
    role: <>Project coordinator and supervisor</>,
    profession: <>Associate Professor at UC Berkeley</>,
    link: "https://www.linkedin.com/in/stefanoschiavon/",
  },
  {
    name: <>Mario Frei</>,
    imageUrl: "img/mario.jpeg",
    role: <>Developer</>,
    profession: <>Research Fellow at NUS</>,
    link: "https://sg.linkedin.com/in/mario-frei",
  },
  {
    name: <>Yun Xuan</>,
    imageUrl: "img/yun_xuan.jpeg",
    role: <>Project manager</>,
    profession: <>Research Assistant at NUS</>,
    link: "https://sg.linkedin.com/in/mario-frei",
  },
];

function Contributor({ imageUrl, name, profession, role, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        "avatar avatar--vertical col col--4 text--center",
        styles.features
      )}
    >
      <img
        className="avatar__photo avatar__photo--xl"
        src={imgUrl}
        alt={name}
      />
      <a className="avatar__intro" href={link}>
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{profession}</small>
        <small className="avatar__subtitle">{role}</small>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Cozie - An iOS application for indoor environmental quality satisfaction and physiological data collection."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col", styles.profileImgContainer)}>
              <img
                alt="cozie main question"
                className={styles.mainImage}
                src={useBaseUrl('img/cozie_clock_face_main.png')}  width="500"
              />
            </div>
            <div className={clsx("col", styles.profileHeroContainer)}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>

              <a className={clsx("button button--outline button--active button--secondary button--lg margin--sm")}
                href={"https://github.com/cozie-app/cozie-apple/discussions/78"}>
                Forum
              </a>

              <a className={clsx("button button--outline button--active button--lg margin--sm button-with-image")}
                href={"https://apps.apple.com/sg/app/cozie/id1625029501"}>
                <img className={clsx("button-image")} 
                src="img/app_store_badge_black.svg" />
              </a>

            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <hr />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--3")}>
                <img
                  alt="cozie main question"
                  className={styles.mainImage}
                  src={"img/cozie_clock_face_main.png"}
                />
              </div>
              <div className={clsx("col col--9")}>
                <h1 className="hero__title">Tailor your survey</h1>
                <p className="hero__subtitle">
                  Choose which questions to show to the study participants
                </p>
                <img
                  alt="Cozie flow of questions"
                  src={"img/sequence cozie apple.png"}
                />
              </div>
            </div>
          </div>
        </section>
        <hr />
        {contributors && contributors.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1>Developed and designed by:</h1>
              <div className="row">
                {contributors.map((props, idx) => (
                  <Contributor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <hr />
        <section className={styles.features}>
          <div className="container">
            Please cite us as:<br/>
            <a href="https://arxiv.org/abs/2210.13977" > Tartarini, F., Miller, C. and Schiavon, S., 2022. Cozie Apple: An iOS mobile and smartwatch application for environmental quality satisfaction and physiological data collection. arXiv preprint arXiv:2210.13977.</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
