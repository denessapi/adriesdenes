import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import SEO from "../components/SEO";
import ImageDivider from "../components/ImageDivider";

import Page from "../components/shared/Page";
import LargeText from "../components/shared/LargeText";
import Story from "../components/shared/Story";

export default function Gyik() {
  return (
    <Page>
      <SEO title="Hasznos információk" />
      <main>
        <Header />
        <ImageDivider />
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
        <ImageDivider />
      </main>
    </Page>
  );
}
