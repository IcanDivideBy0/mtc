import React from "react";
import {
  MuiThemeProvider,
  createGenerateClassName,
  CssBaseline,
  withStyles,
} from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";

import theme from "mtc/theme";

import AutoScroll from "mtc/components/AutoScroll";
import Image from "mtc/components/Image";
import Main from "mtc/components/Main";

const generateClassName = createGenerateClassName();

const styles = theme => ({
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
      color: theme.palette.secondary.main,
    },
  },
});

const GlobalStyles = withStyles(styles)(() => null);

export default function App({
  jssProviderProps,
  muiThemeProviderProps,
  routerComponent: Router,
  routerProps,
}) {
  return (
    <JssProvider generateClassName={generateClassName} {...jssProviderProps}>
      <MuiThemeProvider theme={theme} {...muiThemeProviderProps}>
        <Router basename={process.env.PUBLIC_URL} {...routerProps}>
          <CssBaseline />
          <GlobalStyles />
          <Image.GlobalStyles />
          <AutoScroll />
          <Main />
        </Router>
      </MuiThemeProvider>
    </JssProvider>
  );
}
