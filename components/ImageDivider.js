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

const ImageDivider = title => {
  return (
    <Row>
      <Img src="image_footer.png" alt="Footer" />
    </Row>
  );
};

export default ImageDivider;
