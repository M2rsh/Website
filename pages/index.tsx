import Head from "next/head";
import Image from "next/image";
import React, { useRef } from "react";
import styles from "../styles/index.module.scss";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Home() {
  const ref = useRef<IParallax>(null!);

  return (
    <div className={styles.container}>
      <Head>
        <title>M2rsh</title>
        <meta name="description" content="Parallax Example" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Parallax pages={2} ref={ref} className={styles.parallax}>
          <ParallaxLayer
            className={styles.logo}
            speed={-0.2}
            offset={0}
            style={{ height: "auto" }}
            factor={0.6}
          >
            <Image src="/favicon.svg" alt="Logo" width={240} height={240} />
          </ParallaxLayer>

          <ParallaxLayer
            className={styles.arrow_layer}
            speed={-0.16}
            offset={0.6}
            style={{ height: "auto" }}
          >
            <RiArrowDownSLine
              className={styles.arrow}
              onClick={() => ref.current.scrollTo(0.9)}
            />
          </ParallaxLayer>

          <ParallaxLayer
            className={styles.page_layer}
            speed={0.1}
            offset={0.95}
            style={{ height: "auto" }}
            factor={2.5}
          >
            <div className={styles.page}>
              <div style={{ height: "auto" }}>
                <div className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Diam maecenas sed enim ut. Nullam eget felis eget
                    nunc lobortis mattis aliquam faucibus purus. Risus sed
                    vulputate odio ut enim blandit volutpat maecenas. Curabitur
                    vitae nunc sed velit dignissim sodales ut eu sem. Amet
                    consectetur adipiscing elit pellentesque habitant morbi
                    tristique senectus et. Eu volutpat odio facilisis mauris
                    sit. Volutpat consequat mauris nunc congue nisi vitae
                    suscipit. Auctor augue mauris augue neque gravida in. Vitae
                    tempus quam pellentesque nec nam aliquam. Blandit volutpat
                    maecenas volutpat blandit aliquam etiam erat velit
                    scelerisque. Tortor posuere ac ut consequat semper viverra
                    nam libero. Morbi tristique senectus et netus. Id aliquet
                    lectus proin nibh nisl. Neque viverra justo nec ultrices
                    dui. Et malesuada fames ac turpis egestas. Viverra orci
                    sagittis eu volutpat odio. Tempor orci eu lobortis elementum
                    nibh tellus molestie. Ac auctor augue mauris augue neque
                    gravida in fermentum. Morbi non arcu risus quis.
                  </p>

                  <span
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
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
            </div>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
