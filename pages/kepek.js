import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Header from "../components/Header";
import SEO from "../components/SEO";

import Container from "../components/shared/Container";
import Page from "../components/shared/Page";

const img1 = require("../images/1.jpg");
const img2 = require("../images/2.jpg");
const img3 = require("../images/3.jpg");
const img4 = require("../images/4.jpg");
const img5 = require("../images/5.jpg");
const img6 = require("../images/6.jpg");
const img7 = require("../images/7.jpg");
const img8 = require("../images/8.jpg");
const img9 = require("../images/9.jpg");

const Images = [
  {
    src: img1.src,
    srcSet: img1.srcSet,
    imgHeight: img1.height,
    width: 4,
    height: 3,
    caption: "Tátrában a jégen csúszva  "
  },
  {
    src: img2.src,
    srcSet: img2.srcSet,
    width: 4,
    height: 3,
    caption: "Az első közös szelfink"
  },
  {
    src: img3.src,
    srcSet: img3.srcSet,
    width: 4,
    height: 3,
    caption: "Eilat - Dénes itt még nem tanulta meg hogy kell mosolyogni"
  },
  {
    src: img4.src,
    srcSet: img4.srcSet,
    width: 5,
    height: 3,
    caption: "Eilat - Delfines búvárkodás előtt"
  },
  {
    src: img5.src,
    srcSet: img5.srcSet,
    width: 4,
    height: 3,
    caption: "Holt-tenger"
  },
  {
    src: img6.src,
    srcSet: img6.srcSet,
    width: 4,
    height: 3,
    caption: "Családi szelfi Dusterrel (itt se)"
  },
  {
    src: img7.src,
    srcSet: img7.srcSet,
    width: 4,
    height: 3,
    caption: "Kevélyhegyi levendulás (itt már alakul)"
  },
  {
    src: img8.src,
    srcSet: img8.srcSet,
    width: 4,
    height: 3,
    caption: "Balatonboglár"
  },
  {
    src: img9.src,
    srcSet: img9.srcSet,
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

  return (
    <Page>
      <SEO title="Képek" />
      <Header />
      <Container>
        <Gallery photos={Images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Images.map(x => ({
                  ...x
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </Page>
  );
}
