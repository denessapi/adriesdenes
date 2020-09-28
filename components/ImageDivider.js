import React from "react";
import tw from "twin.macro";

const Row = tw.div`
  w-full
`;

const Img = tw.img`
  h-16
  w-full
  my-4
`;

const divider = require("../images/image_divider.png");

const ImageDivider = title => {
  return (
    <Row>
      <Img
        src={divider.src}
        srcSet={divider.srcSet}
        height={divider.height}
        alt="Footer"
      />
    </Row>
  );
};

export default ImageDivider;
