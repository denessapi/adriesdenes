import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Header from "../components/Header";
import SEO from "../components/SEO";

import Container from "../components/shared/Container";
import Page from "../components/shared/Page";

const Images = [
  {
    large: "/pictures/1.jpg",
    src: "/pictures/thumbnails/1.jpg",
    width: 4,
    height: 3,
    caption: "Tátrában a jégen csúszva  "
  },
  {
    large: "/pictures/2.jpg",
    src: "/pictures/thumbnails/2.jpg",
    width: 4,
    height: 3,
    caption: "Az első közös szelfink"
  },
  {
    large: "/pictures/3.jpg",
    src: "/pictures/thumbnails/3.jpg",
    width: 4,
    height: 3,
    caption: "Eilat - Dénes itt még nem tanulta meg hogy kell mosolyogni"
  },
  {
    large: "/pictures/4.jpg",
    src: "/pictures/thumbnails/4.jpg",
    width: 5,
    height: 3,
    caption: "Eilat - Delfines búvárkodás előtt"
  },
  {
    large: "/pictures/5.jpg",
    src: "/pictures/thumbnails/5.jpg",
    width: 4,
    height: 3,
    caption: "Holt-tenger"
  },
  {
    large: "/pictures/6.jpg",
    src: "/pictures/thumbnails/6.jpg",
    width: 4,
    height: 3,
    caption: "Családi szelfi Dusterrel (itt se)"
  },
  {
    large: "/pictures/7.jpg",
    src: "/pictures/thumbnails/7.jpg",
    width: 4,
    height: 3,
    caption: "Kevélyhegyi levendulás (itt már alakul)"
  },
  {
    large: "/pictures/8.jpg",
    src: "/pictures/thumbnails/8.jpg",
    width: 4,
    height: 3,
    caption: "Balatonboglár"
  },
  {
    large: "/pictures/9.jpg",
    src: "/pictures/thumbnails/9.jpg",
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
                  ...x,
                  src: x.large,
                  srcset: x.srcSet
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </Page>
  );
}
