import Head from "next/head";
import styles from "../styles/Error.module.scss";
import JSConfetti from 'js-confetti'
import React from "react"

//*<meta content="https://embed.com/embedimage.png" property="og:image"/>*//
//*<meta content="https://m2rsh-beta.netlify.app/" property="og:url"/>*//
export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.createParticles = this.createParticles.bind(this);
  }
  createParticles() {
    const jsConfetti = new JSConfetti() 
    jsConfetti.addConfetti({
      emojis: ["❓", "⁉️", "‼️", "❗"],
      emojiSize: 70,
      confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',],
    })
  }
  render() {
    return (
      <>
        <Head>
          <title>404 | Not Found</title>
          <meta name="description" content="404 | Not Found" />
          <link rel="icon" href="/favicon.svg" />
          <meta content="404 | Not Found" property="og:title" />
          <meta content="Page not found." property="og:description" />
          <meta content="#b54842" data-react-helmet="true" name="theme-color" />
        </Head>

        <div className={styles.container}>

          <p onClick={this.createParticles} style={{margin: "5px"}}>
            <span className={styles.error}>404</span> | <span className={styles.errorMessage}>Not Found.</span>
            <p className={styles.errorMessage} style={{ fontSize: "1rem" }}>This page doesn&apos;t exist.</p>
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
}
