import { createGlobalStyle, css } from "styled-components";

const devicesSizes = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
};

const devices = Object.entries(devicesSizes).reduce(
  (acc, [deviceName, deviceSize]) => ({
    ...acc,
    [deviceName]: {
      size: deviceSize,
      query: `(min-width: ${deviceSize}px)`,
    },
  }),
  {}
);

export default {
  gridGutter: 16,
  devices,
  clearfix: css`
    &::before,
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  `,
  colors: {
    body: {
      bg: "#fff",
      text: "#353535",
    },
    titles: {
      text: "#F77518",
    },
    appBar: {
      bg: "#A2C5AC",
      text: "#fff",
      highlight: "#F77518",
    },
    appBanner: {
      bg: "#DEF7F1",
      text: "#353535",
      title: "#353535",
      subtitle: "#F77518",
    },
    appMenu: {
      bg: "#A2C5AC",
      text: "#fff",
      highlight: "#F77518",
    },
    appFooter: {
      bg: "#353535",
      text: "#fff",
    },
  },
  fonts: {
    base: "'Alegreya Sans', sans-serif",
    alternate: "'Merienda', cursive",
  },
};

export const ThemeGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Merienda:700');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;

    font-family: ${({ theme }) => theme.fonts.base};
    font-size: larger;
    color: ${({ theme }) => theme.colors.body.text};
    background-color: ${({ theme }) => theme.colors.body.bg};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.titles.text};
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-weight: 700;
  }

  h1 { font-size: 1.4em; }
  h2 { font-size: 1.1em; }
  h3 { font-size: 1em; }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export function imageSizes(config, fallback) {
  return Object.entries(devices)
    .reduce((acc, [deviceName, { size, query }]) => {
      const fn = config[deviceName];
      if (!fn || typeof fn !== "function") return acc;

      return [...acc, `${query} ${fn(size)}`];
    }, [])
    .concat([fallback]);
}
