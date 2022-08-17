import "../styles/globals.scss";
import Twemoji from "react-twemoji";

function M2rshWebsite({ Component, pageProps }) {
  return (
    <>
      <Twemoji options={{ className: "emoji" }}>
        <Component {...pageProps} />
      </Twemoji>
    </>
  );
}

export default M2rshWebsite;
