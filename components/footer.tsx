import styles from "../styles/Footer.module.scss";
import React from "react";
import { RiDiscordLine, RiGithubLine, RiYoutubeLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb"
import Link from "next/link";
export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.items}>
          <p>Powered by <Link href="https://nextjs.org/"><a target="_blank" rel="noreferrer"><TbBrandNextjs style={{ top: 2, position: "relative" }} />Next.js</a></Link> </p>
          <div className={styles.redirectIcons}>
            <Link href="https://github.com/m2rsh/"><a target="_blank" rel="noreferrer"><RiGithubLine size={25} /></a></Link>
            <Link href="https://youtube.com/m2rsh/"><a target="_blank" rel="noreferrer"><RiYoutubeLine size={25} /></a></Link>
            <Link href="https://discord.gg/dfKMTx9Eea"><a target="_blank" rel="noreferrer"><RiDiscordLine size={25} /></a></Link>
          </div>
          </div>
        </div>
        <div className={styles.bar} />
      </>
    );
  }
}
