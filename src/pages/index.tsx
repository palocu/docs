import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { initOrbiter } from "@junobuild/analytics";
import Auth from "@site/src/components/Auth";
import Build from "@site/src/components/Build";
import Developer from "@site/src/components/Developer";
import Features from "@site/src/components/Features";
import Head from "@site/src/components/Head";
import Hero from "@site/src/components/Hero";
import Illustration from "@site/src/components/Illustration";
import Libs from "@site/src/components/Libs";
import Outro from "@site/src/components/Outro";
import Serverless from "@site/src/components/Serverless";
import Layout from "@theme/Layout";
import { useEffect } from "react";

import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const {
    customFields: { dev }
  } = siteConfig;

  useEffect(() => {
    if (dev) {
      return;
    }

    (async () =>
      initOrbiter({
        satelliteId: "ucnx3-aqaaa-aaaal-ab3ea-cai",
        orbiterId: "3iier-sqaaa-aaaal-aczaa-cai"
      }))();
  }, []);

  return (
    <Layout>
      <Head>
        <link href="https://juno.build" rel="canonical" />
      </Head>

      <div className={styles.home}>
        <section className={`${styles.main}`}>
          <div className="container">
            <Hero />

            <Illustration />
          </div>
        </section>

        <section className={`container ${styles.section}`}>
          <Features />
        </section>

        <section className={`container ${styles.section}`}>
          <Build />
        </section>

        <section className={`container ${styles.block}`}>
          <Auth />

          <Libs />

          <Serverless />

          <Developer />
        </section>

        <section className={`container ${styles.block}`}>
          <Outro />
        </section>
      </div>
    </Layout>
  );
}
