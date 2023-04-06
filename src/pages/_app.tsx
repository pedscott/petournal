import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function myApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider session={pageProps.session}>
      <Component {...pageProps} />
    // </Provider>
  );  
}
