import React from "react";
import { ThemeProvider } from "styled-components";

import App from "components/App";
import Image from "components/Image";

import theme, { ThemeGlobalStyle } from "./theme";

export default (
  <ThemeProvider theme={theme}>
    <>
      <ThemeGlobalStyle />
      <Image.GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);
