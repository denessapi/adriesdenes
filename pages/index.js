import React from "react";

import Head from "next/head";

// Twin macro.
import tw from "twin.macro";

import Top from "../components/Top";
import Header from "../components/Header";

const Row = tw.div`
  pt-10
  w-full
`;

const TallRow = tw.div`
  lg:pt-32
  md:pt-20
  pt-16
  w-full
  relative
`;

const LargeText = tw.div`
  text-center
  lg:text-6xl
  md:text-5xl
  text-4xl
  font-marckscript
`;

const SmallText = tw.div`
  text-center
  lg:text-2xl
  md:text-2xl
  text-xl
  font-marckscript
`;

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

const Paragraph = tw.div`
  pt-4
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrienn és Dénes - 2021. június 5.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Top />
        <Header />
        <div>
          <img src="index_header.png" alt="Header" />
        </div>
        <TallRow>
          <div
            style={{
              zIndex: "-30",
              position: "absolute",
              width: "30%",
              top: "0px"
            }}
          >
            <img src="unicorn_left.png" alt="Header" />
          </div>
          <LargeText>Krauszman Adrienn</LargeText>
          <SmallText>és</SmallText>
          <LargeText>Sápi Dénes</LargeText>
        </TallRow>
        <TallRow>
          <div
            style={{
              zIndex: "-30",
              position: "absolute",
              right: "0",
              top: "150px",
              width: "30%"
            }}
          >
            <img src="cloud_right.png" alt="Header" />
          </div>
          <SmallText>helyszín</SmallText>
          <LargeText>
            Budapest,
            <br />
            Városliget Café
          </LargeText>
          <SmallText>időpont</SmallText>
          <LargeText>2021. június 5.</LargeText>
        </TallRow>
        <Row>
          <img src="image_footer.png" alt="Footer" />
        </Row>
        <Row>
          <LargeText>Történetünk</LargeText>
          <Story>
            <Paragraph>
              Az internet hozott minket össze 2019 februárjában. Polli már a
              második randin találkozott Dénessel és egyből elfogadta.
            </Paragraph>
            <Paragraph>
              A kezdeti bizonytalanságok után novemberben fordult komolyra a
              kapcsolatunk. 2020 januári öszeköltözésünket követően kettőnk és
              hármunk kapcsolata is tovább mélyült. Két ideiglenes kutyánk
              (Floppy és Duster) mindannyiunk jellemén fejlesztett és láthattuk,
              hogy egy új családtag érkezésekor jól tudunk együttműködni.
            </Paragraph>
            <Paragraph>
              Több szuperül sikerült közös nyaralást is szerveztünk (Bikal,
              Horvátország, Izrael, Balaton). Ez utóbbi különösen emlékezetes,
              mert itt törtnént meg a lánykérés a balatoni naplementében 2020.
              augusztus 22-én.
            </Paragraph>
          </Story>
        </Row>
        <div>
          <img src="index_footer.png" alt="Footer" />
        </div>
      </main>
    </div>
  );
}
