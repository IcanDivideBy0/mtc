import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
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
