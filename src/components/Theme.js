import "typeface-passion-one";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  fonts: {
    main: "roboto, sans-serif",
    titles: `'Passion One', cursive`,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#52006b",
    accent: "#e87511",
    success: "#4caf50",
    warning: "#ffc107",
    error: "#f44336",
  },
  opacity: {
    titles: 0.2,
    text: 0.55,
  },
  border: {
    width: ".125em",
    radius: ".25em",
  },
  columns: {
    count: 12,
    gap: ".5em",
  },
  lineHeight: 1.5,
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: ${(p) => p.theme.fonts.main};
  }

  input, textarea, select, button {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.fonts.titles}
  }
`;

const Theme = ({ children, ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
