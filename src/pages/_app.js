import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";

import { BASE_URL } from "constants";
import * as gtag from "lib/gtag";
import theme from "lib/theme";
import createEmotionCache from "lib/createEmotionCache";
import mdxComponents from "lib/mdx";
import Layout from "components/Layout";

export function reportWebVitals({ id, name, label, value }) {
  gtag.event(name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href={`${BASE_URL}/favicon.ico`} />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
