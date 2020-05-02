import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  /* text-rendering: optimizeLegibility !important; */
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
`;

const theme = {
  colors: {
    primary: "#ffea00",
    text: " #fff",
    background: "#402b52",
    button: "#3898ec",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <Component {...pageProps} />
        </Background>
      </ThemeProvider>
    );
  }
}
