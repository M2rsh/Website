import Head from "next/head";
import styles from "../styles/Error.module.scss";
import { useReward } from "react-rewards";

//* Confetti resizes screen width and i have no idea how to fix it (mainly on mobile) *//
//* I WAS USING WRONG FUCKING AXIS ON OVERFLOW WHAT THE FUCK *//
// This comments will stay here to document my absolute fucking stupidity
// Hovever it still doesn't work perfectly bruh

export default function NotFound() {
  const { reward } = useReward("confetti", "emoji", {
    emoji: ["❓", "⁉️", "‼️", "❗"],
    decay: 0.97,
    startVelocity: 20,
    elementCount: 50,
    position: "absolute"
  });

  return (
    <>
      <Head>
        <title>404 | Not Found</title>
        <meta name="description" content="404 | Not Found" />
        <meta content="404 | Not Found" property="og:title" />
        <meta content="Page not found." property="og:description" />
        <meta content="#b54842" data-react-helmet="true" name="theme-color" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <div className={styles.container}>
        <div className={styles.confetti}>
          <p onClick={reward} style={{ margin: "5px" }}>
            <span className={styles.error}>404</span> |&nbsp;
            <span id="confetti" />
            <span className={styles.errorMessage}>Not Found.</span>
          </p>
        </div>
        <p className={styles.errorMessage} style={{ fontSize: "1rem" }}>
          This page doesn&apos;t exist.
        </p>
        <button
          className={styles.returnButton}
          onClick={() => (location.href = "/")}
        >
          Return to existance
        </button>
      </div>
    </>
  );
}
