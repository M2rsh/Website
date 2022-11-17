import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Twemoji from 'react-twemoji';

console.log(`%c
    __
___( o)>
\\ <_. )
 \`---'       
             Debugging Duck :)
             
`, 'color: #fabd2f;font-weight: bold;')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Twemoji options={{className: 'twemoji'}}>
        <link rel="icon" href="/favicon.svg" />
        <Component {...pageProps} />
      </Twemoji>
    </>
  )
}
