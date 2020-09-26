import React from "react";
import App from "next/app";
import NoSSR from "react-no-ssr";
import "../css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <NoSSR>
          <Component {...pageProps} />
        </NoSSR>
      </div>
    );
  }
}

export default MyApp;
