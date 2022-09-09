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
          <meta name="description" content="What sound does monkey make? That's right! It's uuaa AAAAA AAA AAAAAAAAAAAA UUA AAA!!" />
          <link rel="icon" href="/favicon.svg" />
          <meta content="In Development" property="og:title" />
          <meta content="What sound does monkey make? That's right! It's uuaa AAAAA AAA AAAAAAAAAAAA UUA AAA!!" property="og:description" />
          <meta content="#b54842" data-react-helmet="true" name="theme-color" />
        </Head>
        <Header />
        <div className={styles.container}>
          <br/>
          <div style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center",  }}>
            <Image src={lizzyGif} alt="lizzy" width={480} height={480} className="image" unoptimized={true}/>
            <h1 style={{marginLeft: "10vw"}}>Rest in peace Lizzy</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
