import React from "react";
import Head from "next/head";

// Twin macro.
import tw from "twin.macro";
import styled from "@emotion/styled";

import Header from "../components/Header";

const Story = tw.div`
  lg:text-2xl
  md:text-xl
  text-lg
  pt-6
  pb-20
  text-justify
  container mx-auto
  lg:w-2/3
  md:w-2/3
  px-10
  font-cardo
`;

const LargeText = tw.div`
  lg:text-6xl
  md:text-5xl
  text-4xl
  text-center
  font-marckscript
  pb-4
  md:pb-8
  lg:pb-12
`;

const TimeTable = tw.div`
  pb-2
  md:pb-4
  lg:pb-6
  text-center
  lg:text-5xl
  md:text-4xl
  text-3xl
  flex
  flex-row
  font-marckscript
  w-full
  md:w-3/4
  lg:w-2/3
  mx-auto
`;

const Time = styled.div`
  ${tw`
    text-right
    pr-4
    md:pr-6
    lg:pr-8
    w-1/3
  `}
`;

const Event = styled.div`
  ${tw`
  text-left
  pl-4
  md:pl-6
  lg:pl-8
  w-2/3
`}
`;

const Row = tw.div`
  w-full
`;

const Img = tw.img`
  h-16
  w-full
`;

export default function Menetrend() {
  return (
    <div>
      <Head>
        <title>Menetrend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>

        <LargeText>Menetrend</LargeText>
        <Story>
          Az esküvő tervezett programja. A nagy napig még változhat. Légyszi
          nézz vissza pár nappal az esküvő előtt a végleges ütemtervért.
        </Story>

        <TimeTable>
          <Time>16:30</Time>
          <Event>Vendégek érkezése</Event>
        </TimeTable>
        <TimeTable>
          <Time>17:00</Time>
          <Event>Polgári szertartás</Event>
        </TimeTable>
        <TimeTable>
          <Time>18:00</Time>
          <Event>Fotózás</Event>
        </TimeTable>
        <TimeTable>
          <Time>19:00</Time>
          <Event>Vacsora</Event>
        </TimeTable>
        <TimeTable>
          <Time>21:00</Time>
          <Event>Nyitótánc, buli</Event>
        </TimeTable>
        <TimeTable>
          <Time>23:00</Time>
          <Event>Torta</Event>
        </TimeTable>
        <TimeTable>
          <Time>0:00</Time>
          <Event>Éjféli falatok</Event>
        </TimeTable>
        <TimeTable>
          <Time>0:30-</Time>
          <Event>Buli</Event>
        </TimeTable>
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>
      </main>
    </div>
  );
}
