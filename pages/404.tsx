import Head from "next/head";
import styles from "../styles/Error.module.scss";

//*<meta content="https://embed.com/embedimage.png" property="og:image"/>*//

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 Not Found" />
        <link rel="icon" href="/favicon.ico" />
        <meta content="404 Not Found" property="og:title"/>
        <meta content="Page not found." property="og:description"/>
        <meta content="https://m2rsh-beta.netlify.app/" property="og:url"/>
        <meta content="#b54842" data-react-helmet="true" name="theme-color"/>
      </Head>
      <div className={styles.container}>
        <p>404 Not Found</p>
      </div>
    </>
  );
}
