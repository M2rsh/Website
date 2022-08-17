import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import React from "react";
import GitHubIcon from "../public/media/github.svg";
import YoutubeIcon from "../public/media/youtube.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.items}>
            <p>Footer</p>
            <span>
            <a href="https://github.com/m2rsh/" style={{ paddingRight: "25px" }}> <Image src={GitHubIcon} alt="Github"/> </a>
            <a href="https://youtube.com/m2rsh/" style={{ paddingRight: "25px" }}> <Image src={YoutubeIcon} alt="Youtube"/> </a>
            </span>
          </div>
        </div>
      </>
    );
  }
}
