/** @format */

import type { AppProps } from "next/app";

import "../styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
