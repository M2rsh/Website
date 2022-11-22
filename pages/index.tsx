import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/index.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Home() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>M2rsh</title>
        <meta name="description" content="Parallax Example" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div
          className={styles.logo}
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        >
          <Image src="/favicon.svg" alt="Logo" width={240} height={240} />

          <ScrollLink
            to="main"
            style={{ transform: `translateY(${offsetY * -0.055}px)` }}
            smooth={true}
            className={styles.link}
          >
            <RiArrowDownSLine />
          </ScrollLink>
        </div>

        <div className={styles.page} id="main">
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              maecenas sed enim ut. Nullam eget felis eget nunc lobortis mattis
              aliquam faucibus purus. Risus sed vulputate odio ut enim blandit
              volutpat maecenas. Curabitur vitae nunc sed velit dignissim
              sodales ut eu sem. Amet consectetur adipiscing elit pellentesque
              habitant morbi tristique senectus et. Eu volutpat odio facilisis
              mauris sit. Volutpat consequat mauris nunc congue nisi vitae
              suscipit. Auctor augue mauris augue neque gravida in. Vitae tempus
              quam pellentesque nec nam aliquam. Blandit volutpat maecenas
              volutpat blandit aliquam etiam erat velit scelerisque. Tortor
              posuere ac ut consequat semper viverra nam libero. Morbi tristique
              senectus et netus. Id aliquet lectus proin nibh nisl. Neque
              viverra justo nec ultrices dui. Et malesuada fames ac turpis
              egestas. Viverra orci sagittis eu volutpat odio. Tempor orci eu
              lobortis elementum nibh tellus molestie. Ac auctor augue mauris
              augue neque gravida in fermentum. Morbi non arcu risus quis.
            </p>

            <span style={{ display: "flex", justifyContent: "space-around" }}>
              <a
                href="https://github.com/M2rsh"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text">Github</p>
              </a>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
