import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Fira Sans"', "sans-serif"],
    fontSize: 14,
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
  },
  props: {
    MuiGrid: {
      spacing: 2,
    },
  },
  images: {
    genImageSizes: config => {
      const getSizeQuery = breakpoint =>
        theme.breakpoints.up(breakpoint).replace("@media ", "");

      return Array.from(theme.breakpoints.keys)
        .reverse()
        .reduce((acc, breakpoint) => {
          const fn = config[breakpoint];
          if (!fn || typeof fn !== "function") return acc;

          const size = [
            getSizeQuery(breakpoint),
            fn(theme.breakpoints.values[breakpoint]),
          ].join(" ");

          return [...acc, size];
        }, []);
    },
  },
});

export default theme;
