import React from "react";
import Head from "next/head";

import GoogleMapReact from "google-map-react";

// Twin macro.
import tw from "twin.macro";
import styled from "@emotion/styled";

import Header from "../components/Header";

const Story = tw.div`
  text-lg
  pt-6
  pb-20
  text-justify
  container mx-auto
  lg:w-1/2
  md:w-2/3
  px-10
  font-cardo
`;

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

const LargeText = tw.div`
  text-center
  lg:text-6xl
  md:text-5xl
  text-4xl
  font-marckscript
  pb-4
  md:pb-8
  lg:pb-12
`;

const MediumText = tw.div`
  text-center
  lg:text-5xl
  md:text-4xl
  text-3xl
  font-marckscript
  pb-2
  md:pb-4
  lg:pb-6
`;

const SmallText = tw.div`
  text-center
  lg:text-4xl
  md:text-3xl
  text-2xl
  font-marckscript
  pb-2
  md:pb-4
  lg:pb-6
`;
const Row = tw.div`
  w-full
`;

const Img = tw.img`
  h-16
  w-full
`;

const Marker = styled.img`
  ${tw`
    h-16
  `}
  transform: translate(-50%, -100%);
`;

export default function Helyszin() {
  return (
    <div>
      <Head>
        <title>Helyszín</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>

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
            <Marker lat={47.514503} lng={19.080133} src="restaurant.png" />
            <Marker lat={47.516797} lng={19.082977} src="parking.png" />
            <Marker lat={47.514365} lng={19.07934} src="parking.png" />
          </GoogleMapReact>
        </Map>
        <Story>
          Parkolni az étterem előtt az Olof Palme sétányon lehet. Ezen kívül
          további parkolóhelyek a Városligetben a Konrad-Adenauer úton
          találhatóak pár perc sétára az étteremtől.
        </Story>
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>
      </main>
    </div>
  );
}
