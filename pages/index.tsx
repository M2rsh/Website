import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>👷‍♀️ Under Construction</title>
        <meta name="description" content="404 Not Found" />
        <link rel="icon" href="/favicon-placeholder.png" />
        <meta content="In Development" property="og:title"/>
        <meta content="👷‍♀️ Under Construction" property="og:description"/>
        <meta content="#b54842" data-react-helmet="true" name="theme-color"/>
      </Head>
      <div className={styles.container}>
        <p>Penis</p>
      </div>
    </>
  );
}
