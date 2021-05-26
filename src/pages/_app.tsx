import { AppProps } from "next/dist/next-server/lib/router/router";
import "../style/global.scss";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
