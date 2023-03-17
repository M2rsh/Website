import { Title, useNavigate } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import styles from '~/styles/404.module.scss';

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div class={styles.main}>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <span>
        <h1 class={styles.notfound}>Page Not Found</h1>
        <p class={styles.shrug}>¯\\_(ツ)_/¯</p>
      </span>
      <button class={styles.button} onClick={() => navigate('/', {replace: true})}>
        Return
      </button>
    </div>
  );
}