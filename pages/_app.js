import React from "react";
import App from "next/app";
import "../css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: "MarckScript-Regular";
            src: url("/fonts/MarckScript-Regular.eot");
            src: url("/fonts/MarckScript-Regular.eot?#iefix")
                format("embedded-opentype"),
              url("/fonts/MarckScript-Regular.otf") format("opentype"),
              url("/fonts/MarckScript-Regular.svg") format("svg"),
              url("/fonts/MarckScript-Regular.ttf") format("truetype"),
              url("/fonts/MarckScript-Regular.woff") format("woff"),
              url("/fonts/MarckScript-Regular.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "Cardo-Regular";
            src: url("./fonts/Cardo-Regular.eot");
            src: url("./fonts/Cardo-Regular.eot?#iefix")
                format("embedded-opentype"),
              url("./fonts/Cardo-Regular.otf") format("opentype"),
              url("./fonts/Cardo-Regular.svg") format("svg"),
              url("./fonts/Cardo-Regular.ttf") format("truetype"),
              url("./fonts/Cardo-Regular.woff") format("woff"),
              url("./fonts/Cardo-Regular.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
