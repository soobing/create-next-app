import withRedux from 'next-redux-wrapper';

import configuredStore from "../store";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withRedux(configuredStore)(MyApp);