import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalStyles, Container, Grid } from "@mui/material";

import { BASE_URL, ADDRESSES, PHONE } from "constants";
import Banner from "components/Banner";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import Footer from "components/Footer";

export default function Layout({ children }) {
  const router = useRouter();

  const url = BASE_URL + router.pathname;

  return (
    <>
      <Head>
        <title>
          Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes.
          Acupuncture, Tuina, Ventouses, Qi-Gong, …
        </title>
        <meta
          property="og:title"
          content="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …"
        />

        <meta
          name="description"
          content="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …"
        />
        <meta
          property="og:description"
          content="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …"
        />

        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta
          property="og:site_name"
          content="Loïse Holive - Praticienne en médecine traditionnelle chinoise à Nantes"
        />

        <meta property="og:image" content={BASE_URL + "/og-image.png"} />

        <meta property="og:type" content="business.business" />
        <meta
          property="business:contact_data:street_address"
          content={ADDRESSES[0].street}
        />
        <meta
          property="business:contact_data:locality"
          content={ADDRESSES[0].locality}
        />
        <meta
          property="business:contact_data:region"
          content={ADDRESSES[0].region}
        />
        <meta
          property="business:contact_data:postal_code"
          content={ADDRESSES[0].postalCode}
        />
        <meta
          property="business:contact_data:country_name"
          content={ADDRESSES[0].country}
        />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: BASE_URL,
            name: "Nantes Médecine Chinoise",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            url: BASE_URL,
            name: "Loïse Holive",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "LocalBusiness",
            name: "Loïse Holive - Praticienne en acupuncture",
            logo: BASE_URL + "/logo.png",
            image: BASE_URL + "/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: ADDRESSES[0].street,
              postalCode: ADDRESSES[0].postalCode,
              addressLocality: ADDRESSES[0].locality,
              addressRegion: ADDRESSES[0].region,
            },
            telephone: PHONE,
            email: "contact@syos.co",
            openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-17:00"],
            url: BASE_URL,
          }),
        }}
      />

      <GlobalStyles
        styles={{
          html: { height: "100%" },
          body: { height: "100%" },
          "#__next": {
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
          },
        }}
      />

      <Banner />
      <NavBar />

      <Container
        fixed
        sx={{
          position: "relative",
          flexGrow: 1,
          p: [2, 3],
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} component="main">
            {children}
          </Grid>

          <Grid item xs={12} md={4} component="aside">
            <SideBar
              sx={{
                position: "sticky",
                top: 48 + 24,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
