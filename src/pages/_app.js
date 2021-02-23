import React from "react";
import { useRouter } from "next/router";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";

import * as gtag from "lib/gtag";
import { theme } from "lib/theme";
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

export default function App({ Component, pageProps }) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MDXProvider components={mdxComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}
