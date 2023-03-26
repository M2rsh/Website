import { Title, useNavigate } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import styles from '~/styles/404.module.scss';
import { IoReturnDownBackSharp } from 'solid-icons/io'


export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div class={styles.main}>
      <Title>Page not found</Title>
      <HttpStatusCode code={404} />
      <div class={styles.maintext}>
        <h2 class={styles.fourofour}>import &lbrace; 404 &rbrace;</h2>
        <h1 class={styles.pagenotfound}>/ Page not found /</h1>
        <p class={styles.shrug}> ¯\\_(ツ)_/¯</p>
      </div>
      <button class={styles.button} onClick={() => navigate('/', {replace: true})}>
        Return <IoReturnDownBackSharp style={{position: "relative", top: "2px"}}/>
      </button>
    </div>
  );
}