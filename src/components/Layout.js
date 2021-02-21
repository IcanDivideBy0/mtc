import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { makeStyles, useTheme, Grid, Container } from "@material-ui/core";

import { BASE_URL, ADDRESS, PHONE } from "constants";
import Banner from "components/Banner";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import Footer from "components/Footer";

const useStyles = makeStyles((theme) => ({
  "@global": {
    html: { height: "100%" },
    body: { height: "100%" },
    "#__next": {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  content: {
    position: "relative",
    flexGrow: 1,

    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  sidebar: {
    position: "sticky",
    top: 48 + 24,
  },
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();

  const url = BASE_URL + router.pathname;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.palette.secondary.main} />

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
          content={ADDRESS.street}
        />
        <meta
          property="business:contact_data:locality"
          content={ADDRESS.locality}
        />
        <meta
          property="business:contact_data:region"
          content={ADDRESS.region}
        />
        <meta
          property="business:contact_data:postal_code"
          content={ADDRESS.postalCode}
        />
        <meta
          property="business:contact_data:country_name"
          content={ADDRESS.country}
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
            name:
              "Loïse Holive - Praticienne en médecine traditionnelle chinoise",
            logo: BASE_URL + "/logo.png",
            image: BASE_URL + "/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: ADDRESS.street,
              postalCode: ADDRESS.postalCode,
              addressLocality: ADDRESS.locality,
              addressRegion: ADDRESS.region,
            },
            telephone: PHONE,
            email: "contact@syos.co",
            openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-17:00"],
            url: BASE_URL,
          }),
        }}
      />

      <Banner />
      <NavBar />

      <Container fixed className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} component="main">
            {children}
          </Grid>

          <Grid item xs={12} md={4} component="aside">
            <SideBar classes={{ root: classes.sidebar }} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
