import React from "react";
import { ThemeProvider, CssBaseline, makeStyles } from "@material-ui/core";
import { HelmetProvider } from "react-helmet-async";

import theme from "mtc/theme";
import AutoScroll from "mtc/components/AutoScroll";
import Image from "mtc/components/Image";
import Main from "mtc/components/Main";

const useGlobalStyles = makeStyles(theme => ({
  "@global": {
    html: {
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
    body: {
      height: "100%",
    },
    "#root": {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
    },
    a: {
      color: theme.palette.primary.main,
    },
    strong: {
      fontWeight: 500,
    },
  },
}));

function GlobalStyles() {
  useGlobalStyles();
  return null;
}

export default function App({
  helmetProviderProps,
  themeProviderProps,
  routerComponent: Router,
  routerProps,
}) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <HelmetProvider {...helmetProviderProps}>
      <ThemeProvider theme={theme} {...themeProviderProps}>
        <Router basename={process.env.PUBLIC_URL} {...routerProps}>
          <CssBaseline />
          <GlobalStyles />
          <Image.GlobalStyles />
          <AutoScroll />
          <Main />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
