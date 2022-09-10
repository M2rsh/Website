import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import lizzyGif from "../public/media/lizzy2.gif";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>M2rsh</title>
          <meta
            name="description"
            content="What sound does monkey make? That's right! It's uuaa AAAAA AAA AAAAAAAAAAAA UUA AAA!!"
          />
          <link rel="icon" href="/favicon.svg" />
          <meta content="In Development" property="og:title" />
          <meta
            content="What sound does monkey make? That's right! It's uuaa AAAAA AAA AAAAAAAAAAAA UUA AAA!!"
            property="og:description"
          />
          <meta
            content="#490b3d;"
            data-react-helmet="true"
            name="theme-color"
          />
        </Head>
        <Header />
        <div className={styles.container}>
          <section className={styles.child}>
            <div className={styles.main} id={styles.sec0}>
              <Image
                src={lizzyGif}
                alt="lizzy"
                width={480}
                height={480}
                className="image"
                unoptimized={true}
              />
              <h1 style={{ marginLeft: "10vw", fontSize: "4vw" }}>
                Rest in peace Lizzy
              </h1>
            </div>
          </section>
          <section className={styles.child} id={styles.sec1}>
            <div className={styles.container}>
              <h2>In Development</h2>
              <h3>
                My name is Walter Hartwell White. I live at 308 Negra Arroyo
                Lane, Albuquerque, New Mexico, 87104.
                <br />
                This is my confession.
              </h3>
            </div>
            <div className={styles.text}>
                <Image
                  unoptimized={true}
                  alt="Walter gif"
                  src="https://media.giphy.com/media/5QlwTKQ3kq3N6/giphy.gif"
                  width={600}
                  height={400}
                  className="image"
                  layout="intrinsic"
                  
                />
                <p style={{ maxWidth: "1000px", textAlign: "left" }}>
                  If you&apos;re watching this tape, I&apos;m probably dead-
                  murdered by my brother-in-law, Hank Schrader. Hank has been
                  building a meth empire for over a year now, and using me as
                  his chemist. Shortly after my 50th birthday, he asked that I
                  use my chemistry knowledge to cook methamphetamine, which he
                  would then sell using connections that he made through his
                  career with the DEA. I was... astounded. I... I always thought
                  Hank was a very moral man, and I was particularly vulnerable
                  at the time - something he knew and took advantage of. I was
                  reeling from a cancer diagnosis that was poised to bankrupt my
                  family. Hank took me in on a ride-along and showed me just how
                  much money even a small meth operation could make. And I was
                  weak. I didn&apos;t want my family to go into financial ruin,
                  so I agreed. Hank had a partner, a businessman named Gustavo
                  Fring. Hank sold me into servitude to this man. And when I
                  tried to quit, Fring threatened my family. I didn&apos;t know
                  where to turn. Eventually, Hank and Fring had a falling-out.
                  Things escalated. Fring was able to arrange - uh, I guess... I
                  guess you call it a &quot;hit&quot; - on Hank, and failed, but
                  Hank was seriously injured. And I wound up paying his medical
                  bills, which amounted to a little over $177,000. Upon
                  recovery, Hank was bent on revenge. Working with a man named
                  Hector Salamanca, he plotted to kill Fring. The bomb that he
                  used was built by me, and he gave me no option in it. I have
                  often contemplated suicide, but I&apos;m a coward. I wanted to
                  go to the police, but I was frightened. Hank had risen to
                  become the head of the Albuquerque DEA. To keep me in line, he
                  took my children. For three months, he kept them. My wife had
                  no idea of my criminal activities, and was horrified to learn
                  what I had done. I was in hell. I hated myself for what I had
                  brought upon my family. Recently, I tried once again to quit,
                  and in response, he gave me this. [Walt points to the bruise
                  on his face left by Hank in &quot;Blood Money.&quot;] I
                  can&apos;t take this anymore. I live in fear every day that
                  Hank will kill me, or worse, hurt my family. All I could think
                  to do was to make this video and hope that the world will
                  finally see this man for what he really is.
                </p>
              </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}
