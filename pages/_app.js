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
          src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_MEASUREMENT_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){" "}
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', '${env.GA_MEASUREMENT_ID}');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={env.GA_MEASUREMENT_ID} />
    </>
  );
}

export default MyApp;
