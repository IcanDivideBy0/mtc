import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";

import { theme } from "lib/theme";
import mdxComponents from "lib/mdx";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
