import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "env";
import Head from "next/head";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-TD6DE47WN3`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){" "}
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-TD6DE47WN3');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-TD6DE47WN3" />
    </>
  );
}

export default MyApp;
