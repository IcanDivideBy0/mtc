import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import AppBar from "./AppBar";
import AppFooter from "./AppFooter";
import Router from "./Router";

import theme from "../theme";

const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AppContent = styled.div`
  flex: 1;
`;

function App({ location }) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper className="App">
        <Helmet>
          <title>MTC</title>
          <link
            rel="canonical"
            href={
              // window.location.hostname +
              process.env.PUBLIC_URL + location.pathname + location.search
            }
          />
          <meta name="description" content="Medecine traditionnelle chinoise" />
        </Helmet>

        <AppBar />

        <AppContent>
          <Router />
        </AppContent>

        <AppFooter />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
