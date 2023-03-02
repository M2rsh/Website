import { Title, useNavigate } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import styles from '~/styles/404.module.scss'; styles;

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>

      </p>
      <button onClick={() => navigate('/', {replace: true})}>
        Return
      </button>
    </main>
  );
}
