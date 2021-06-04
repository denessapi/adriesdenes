import React from "react";

// Twin macro.
import tw from "twin.macro";

import Header from "../components/Header";
import SEO from "../components/SEO";
import ImageDivider from "../components/ImageDivider";

import Page from "../components/shared/Page";
import LargeText from "../components/shared/LargeText";
import Story from "../components/shared/Story";

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

const Time = tw.div`
  text-right
  pr-4
  md:pr-6
  lg:pr-8
  w-1/3
`;

const Event = tw.div`
  text-left
  pl-4
  md:pl-6
  lg:pl-8
  w-2/3
`;

export default function Menetrend() {
  return (
    <Page>
      <SEO title="Menetrend" />
      <main>
        <Header />
        <ImageDivider />

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
          <Event>Ajándékozás</Event>
        </TimeTable>
        <TimeTable>
          <Time>19:30</Time>
          <Event>Vacsora</Event>
        </TimeTable>
        <TimeTable>
          <Time>21:00</Time>
          <Event>Nyitótánc, buli</Event>
        </TimeTable>
        <TimeTable>
          <Time>22:00</Time>
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
        <ImageDivider />
      </main>
    </Page>
  );
}
