import React from "react";
import Head from "next/head";

// Twin macro.
import tw from "twin.macro";
import styled from "@emotion/styled";

import Header from "../components/Header";

const Story = tw.div`
  lg:text-xl
  md:text-lg
  text-lg
  pt-6
  pb-8
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

const Row = tw.div`
  w-full
`;

const Img = tw.img`
  h-16
  w-full
`;

export default function Gyik() {
  return (
    <div>
      <Head>
        <title>Hasznos információk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>
        <LargeText>Hasznos információk</LargeText>
        <Story>
          Mind a szertartás és a vacsora és azt követő buli is a Városliget Café
          teraszán és éttermében lesz megtartva.
        </Story>
        <Story>
          A meghívás természetesen vonatkozik mindenkire, akit szeretnél
          magaddal hozni, hogy velünk együtt ünnepeljen. Kérjük visszajelzéskor
          sorolj fel mindenkit, aki jönni fog.
        </Story>
        <Story>
          Az esküvő 100% kutyabarát. Légyszi a válaszodban add meg, hogy őt is
          hozod, hogy tudjunk elegendő kutyaszitterrel készülni. Mind a
          teraszra, mind az étterembe bejöhetnek majd a kutyák, de a vacsora
          alatt azt javasoljuk, hogy a teraszon tartózkodjanak, hogy mindenki
          önfeledten élvezhesse a vacsorát.
        </Story>
        <Story>
          Az étkezések során készülünk glutén- és laktózmentes opciókkal. De
          amennyiben jelzed egyéb érzékenységedet megpróbáljuk azt is figyelembe
          venni a menü összeállításakor. A glutén- és laktóz érzékenységedet is
          tüntesd fel a válaszodban, hogy biztosan mindenből elegendő
          mennyiséggel készüljünk. Laktáz enzimet azért hozz magaddal.
        </Story>
        <Story>
          Bármilyen egyéb kérdés esetén írj nekünk az{" "}
          <a href="mailto:eskuvo@adriesdenes.hu">eskuvo@adriesdenes.hu</a> email
          címre.
        </Story>
        <Row>
          <Img src="image_footer.png" alt="Footer" />
        </Row>
      </main>
    </div>
  );
}
