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
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TD6DE47WN3');
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8B79JFS');
  `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-TD6DE47WN3" />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W8B79JFS"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </>
  );
}

export default MyApp;
