import '@/styles/globals.css'

export default function myApp({ Component, pageProps }) {
  return (
    // <Provider session={pageProps.session}>
      <Component {...pageProps} />
    // </Provider>
  );  
}
