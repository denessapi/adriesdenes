import React from "react";

import GoogleMapReact from "google-map-react";
import Img from "react-optimized-image";

// Twin macro.
import tw from "twin.macro";
import styled from "@emotion/styled";

import Header from "../components/Header";
import ImageDivider from "../components/ImageDivider";
import SEO from "../components/SEO";

import Page from "../components/shared/LargeText";
import LargeText from "../components/shared/LargeText";
import MediumText from "../components/shared/MediumText";
import SmallText from "../components/shared/SmallText";
import Story from "../components/shared/Story";

import Parking from "../images/parking.png";
import Restaurant from "../images/restaurant.png";

const Map = styled.div`
  ${tw`
    mx-auto
    container
    px-3 lg:px-0
    md:w-3/4
    lg:w-2/3
  `}
  height: 420px
`;

const Marker = styled(Img)`
  ${tw`
    h-16
  `}
  transform: translate(-50%, -100%);
`;

const parking = require("../images/parking.png");
const restaurant = require("../images/restaurant.png");

export default function Helyszin() {
  return (
    <Page>
      <SEO title="Helyszín" />
      <main>
        <Header />
        <ImageDivider />

        <LargeText>Helyszín</LargeText>
        <MediumText>Városliget Café és terasz</MediumText>
        <SmallText>1146 Budapest, Olof Palme sétány 6</SmallText>
        <Map>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDpqPDPIGga2hOOc5pmXBUtuvOycZKrrg4"
            }}
            defaultCenter={{ lat: 47.515503, lng: 19.080133 }}
            defaultZoom={17}
          >
            <Marker lat={47.514503} lng={19.080133} src={Restaurant} />
            <Marker lat={47.516797} lng={19.082977} src={Parking} />
            <Marker lat={47.514365} lng={19.07934} src={Parking} />
          </GoogleMapReact>
        </Map>
        <Story>
          Parkolni az étterem előtt az Olof Palme sétányon lehet. Ezen kívül
          további parkolóhelyek a Városligetben a Konrad-Adenauer úton
          találhatóak pár perc sétára az étteremtől.
        </Story>
        <ImageDivider />
      </main>
    </Page>
  );
}
