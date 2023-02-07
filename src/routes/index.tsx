import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <p
        style={{
          "font-size": "3em",
          "margin-top": "20%",
          "font-weight": "300",
        }}
      >
        Hi, I'm a fucking retard
      </p>
      <Counter />
    </main>
  );
}
