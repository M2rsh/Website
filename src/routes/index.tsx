import styles from '~/styles/index.module.scss'
import SlArrowDown from '~/images/SlArrowDown.svg' 

export default function Index() {
  return (
    <main class={styles.main}>
      <div class={styles.title_container}>
      <h1 class={styles.title}>
        M2rsh
      </h1>
      <img src={SlArrowDown} alt="Down Arrow" />
      </div>
    </main>
  );
}
