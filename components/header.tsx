import Image from "next/image";
import styles from "../styles/Header.module.scss";
import React from "react";
import Icon from "../public/favicon.svg";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.items}>
            <span style={{ display: "flex" }}>
              <Image src={Icon} alt="icon" height={"50rem"} width={"50rem"} />
              <h2 style={{ paddingLeft: "10%", fontWeight: "300" }}>Welcome!</h2>
            </span>
          </div>
        </div>
      </>
    );
  }
}
