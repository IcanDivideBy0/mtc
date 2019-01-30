import React from "react";

import { createMuiTheme, Typography } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Fira Sans"', "sans-serif"],
    fontSize: 16,
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
    h1: { fontWeight: 300, fontSize: "2rem" },
    h2: { fontWeight: 300, fontSize: "1.5rem" },
    h3: { fontWeight: 300, fontSize: "1.17rem" },
    h4: { fontWeight: 300, fontSize: "1rem" },
    h5: { fontWeight: 300, fontSize: "0.83rem" },
    h6: { fontWeight: 300, fontSize: "0.67rem" },
  },
  palette: {
    primary: {
      main: "#91c149",
      light: "#9cc94c",
      dark: "#4d9037",
      contrastText: "#fff",
    },
    secondary: {
      main: "#454648",
      light: "#4a4b4d",
      dark: "#252324",
      contrastText: "#fff",
    },
    text: { main: "#ff0000" },
    info: { main: "#00d3ee", contrastText: "#fff" },
    success: { main: "#5cb860", contrastText: "#fff" },
    warning: { main: "#ffa21a", contrastText: "#fff" },
    error: { main: "#f55a4e", contrastText: "#fff" },
  },
  props: {
    MuiGrid: {
      spacing: 16,
    },
  },
  mdxComponents: {
    wrapper: React.Fragment,
    h1: props => <Typography variant="h1" gutterBottom {...props} />,
    h2: props => <Typography variant="h2" gutterBottom {...props} />,
    h3: props => <Typography variant="h3" gutterBottom {...props} />,
    h4: props => <Typography variant="h4" gutterBottom {...props} />,
    h5: props => <Typography variant="h5" gutterBottom {...props} />,
    h6: props => <Typography variant="h6" gutterBottom {...props} />,
    p: props => <Typography paragraph {...props} />,
  },
});
