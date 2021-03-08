import React, { useEffect } from "react";
import { useRouter } from "next/router";

import lscache from "lscache";

import Header from "../../components/Header";
import SEO from "../../components/SEO";
import ImageDivider from "../../components/ImageDivider";

import Page from "../../components/shared/Page";
import LargeText from "../../components/shared/LargeText";
import Story from "../../components/shared/Story";

export default function Gyik() {
  const router = useRouter();
  const [isComing, setIsComing] = React.useState(false);

  const rsvpCode = lscache.get("rsvpCode");
  if (rsvpCode !== null) {
    router.push(`/rsvp/${rsvpCode}`);
  }

  return (
    <Page>
      <SEO title="RSVP" />
      <main>
        <Header />
        <ImageDivider />
        <LargeText>RSVP</LargeText>
        <Story>
          Kérjük minél hamarabb jelezz vissza számunkra, hogy ott leszel-e a
          nagy napon. Ha a későbbiekben másképp alakulnak a dolgok, akkor
          természetesen lesz még lehetőséged módosítani rajta. Válaszodat 2021.
          április 30-ig véglegesítsd!
        </Story>
        <Story>
          Visszajelezni a meghívóban kapott link segíségével tudsz. Bármilyen
          probléma vagy kérdés esetén írj nekünk az{" "}
          <a href="mailto:eskuvo@adriesdenes.hu">eskuvo@adriesdenes.hu</a> email
          címre.
        </Story>
        <ImageDivider />
      </main>
    </Page>
  );
}
