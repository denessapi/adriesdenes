import React from "react";

// Twin macro.
import tw from "twin.macro";

import Header from "../components/Header";
import SEO from "../components/SEO";

import Page from "../components/shared/Page";

const Row = tw.div`
  pt-10
  w-full
`;

const TallRow = tw.div`
  lg:pt-32
  pt-4
  w-full
  relative
  flex
  flex-row
  flex-wrap
`;

const TallRowReverse = tw.div`
  lg:pt-32
  pt-4
  w-full
  relative
  flex
  flex-row
  flex-wrap-reverse
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
  lg:text-3xl
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
  lg:w-2/3
  md:w-3/4
  px-10
  font-cardo
`;

const Divider = tw.div`
  my-4
  md:my-6
  lg:my-8
  md:border-t-2
  border-t
  border-black
  container mx-auto
  lg:w-1/4
  md:w-1/3
  w-1/2
`;

const Paragraph = tw.div`
  pt-4
`;

const ImgBlock = tw.div`
  w-2/3
  md:w-1/2
  lg:w-1/4
  px-16
  py-8
  lg:py-0
  lg:px-4
  mx-auto
`;

const ContentBlock = tw.div`
  w-full
  md:w-2/3
  lg:w-1/2
  mx-auto
`;

const Filler = tw.div`
  hidden
  lg:block
  lg:w-1/4
`;

export default function Home() {
  return (
    <Page>
      <SEO title="Adri & Dénes - 2021. június 5." />
      <main>
        <Header />
        <div>
          <img src="index_header.png" alt="Header" />
        </div>
        <TallRow>
          <ImgBlock>
            <img src="unicorn_left.png" alt="Unicorn" />
          </ImgBlock>
          <ContentBlock>
            <LargeText>Krauszman Adrienn</LargeText>
            <SmallText>és</SmallText>
            <LargeText>Sápi Dénes</LargeText>
          </ContentBlock>
          <Filler />
        </TallRow>
        <TallRowReverse>
          <Filler />
          <ContentBlock>
            <SmallText>helyszín</SmallText>
            <LargeText>
              Budapest,
              <br />
              Városliget Café
            </LargeText>
            <Divider />
            <SmallText>időpont</SmallText>
            <LargeText>2021. június 5.</LargeText>
          </ContentBlock>
          <ImgBlock>
            <img src="cloud_right.png" alt="Header" />
          </ImgBlock>
        </TallRowReverse>
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
    </Page>
  );
}
