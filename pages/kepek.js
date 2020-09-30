import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Img from "react-optimized-image";

import Header from "../components/Header";
import SEO from "../components/SEO";

import Container from "../components/shared/Container";
import Page from "../components/shared/Page";

import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";
import Img4 from "../images/4.jpg";
import Img5 from "../images/5.jpg";
import Img6 from "../images/6.jpg";
import Img7 from "../images/7.jpg";
import Img8 from "../images/8.jpg";
import Img9 from "../images/9.jpg";

import Img1Lqip from "../images/1.jpg?lqip";
import Img2Lqip from "../images/2.jpg?lqip";
import Img3Lqip from "../images/3.jpg?lqip";
import Img4Lqip from "../images/4.jpg?lqip";
import Img5Lqip from "../images/5.jpg?lqip";
import Img6Lqip from "../images/6.jpg?lqip";
import Img7Lqip from "../images/7.jpg?lqip";
import Img8Lqip from "../images/8.jpg?lqip";
import Img9Lqip from "../images/9.jpg?lqip";

import LazyImage from "../components/LazyImage";

const Images = [
  {
    img: Img1,
    src: <Img src={Img1} />,
    lqSrc: <Img src={Img1Lqip} />,
    aspectRatio: Img1.width / Img1.height,
    width: 4,
    height: 3,
    caption: "Tátrában a jégen csúszva  "
  },
  {
    img: Img2,
    src: <Img src={Img2} />,
    lqSrc: <Img src={Img2Lqip} />,
    aspectRatio: Img2.width / Img2.height,
    width: 4,
    height: 3,
    caption: "Az első közös szelfink"
  },
  {
    img: Img3,
    src: <Img src={Img3} />,
    lqSrc: <Img src={Img3Lqip} />,
    aspectRatio: Img3.width / Img3.height,
    width: 4,
    height: 3,
    caption: "Eilat - Dénes itt még nem tanulta meg hogy kell mosolyogni"
  },
  {
    img: Img4,
    src: <Img src={Img4} />,
    lqSrc: <Img src={Img4Lqip} />,
    aspectRatio: Img4.width / Img4.height,
    width: 5,
    height: 3,
    caption: "Eilat - Delfines búvárkodás előtt"
  },
  {
    img: Img5,
    src: <Img src={Img5} />,
    lqSrc: <Img src={Img5Lqip} />,
    aspectRatio: Img5.width / Img5.height,
    width: 4,
    height: 3,
    caption: "Holt-tenger"
  },
  {
    img: Img6,
    src: <Img src={Img6} />,
    lqSrc: <Img src={Img6Lqip} />,
    aspectRatio: Img6.width / Img6.height,
    width: 4,
    height: 3,
    caption: "Családi szelfi Dusterrel (itt se)"
  },
  {
    img: Img7,
    src: <Img src={Img7} />,
    lqSrc: <Img src={Img7Lqip} />,
    aspectRatio: Img7.width / Img7.height,
    width: 4,
    height: 3,
    caption: "Kevélyhegyi levendulás (itt már alakul)"
  },
  {
    img: Img8,
    src: <Img src={Img8} />,
    lqSrc: <Img src={Img8Lqip} />,
    aspectRatio: Img8.width / Img8.height,
    width: 4,
    height: 3,
    caption: "Balatonboglár"
  },
  {
    img: Img9,
    src: <Img src={Img9} />,
    lqSrc: <Img src={Img9Lqip} />,
    aspectRatio: Img9.width / Img9.height,
    width: 4,
    height: 3,
    caption: "Balatonföldvár"
  }
];

export default function Kepek() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imgWithClick = { cursor: "pointer" };

  const imgRenderer = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left,
    key
  }) => {
    const imgStyle = {
      margin: margin,
      display: "block",
      width: photo.width,
      height: photo.height
    };
    if (direction === "column") {
      imgStyle.position = "absolute";
      imgStyle.left = left;
      imgStyle.top = top;
    }

    const handleClick = event => {
      onClick(event, { photo, index });
    };

    return (
      <div
        key={key}
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        onClick={onClick ? handleClick : null}
      >
        <LazyImage aspectRatio={photo.aspectRatio} alt={photo.caption}>
          {photo.lqSrc}
          {photo.src}
        </LazyImage>
      </div>
    );
  };

  return (
    <Page>
      <SEO title="Képek" />
      <Header />
      <Container>
        <Gallery
          photos={Images}
          onClick={openLightbox}
          renderImage={imgRenderer}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Images.map(x => ({
                  src: x.img.src,
                  srcSet: x.img.srcSet,
                  caption: x.caption
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </Page>
  );
}
