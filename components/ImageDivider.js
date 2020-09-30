import React from "react";
import tw from "twin.macro";
import Img from "react-optimized-image";

import Divider from "../images/image_divider.png";
import DividerLqip from "../images/image_divider.png?lqip";
import LazyImage from "./LazyImage";

const Row = tw.div`
  w-full
  my-4
`;

const ImageDivider = title => {
  return (
    <Row>
      <LazyImage
        alt="Divider"
        className="h-16 w-full"
        aspectRatio={Divider.width / Divider.height}
      >
        <Img src={DividerLqip} />
        <Img src={Divider} type="original" />
      </LazyImage>
    </Row>
  );
};

export default ImageDivider;
