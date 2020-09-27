import React from "react";
import Head from "next/head";
import { PropTypes } from "react-proptypes";

const SEO = props => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="Description"
        content="Krauszman Adrienn és Sápi Dénes esküvői honlapja,
        időpont: 2021. június 5.
        helyszín: Városliget Café, Budapest"
      ></meta>
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired
};

export default SEO;
