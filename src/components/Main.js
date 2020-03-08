import React from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet-async";
import { makeStyles, useTheme, Grid } from "@material-ui/core";

import { getBaseUrl } from "mtc/utils";
import { ADDRESS, PHONE } from "mtc/constants";

import PageMetaTitle from "mtc/components/PageMetaTitle";
import PageMetaDescription from "mtc/components/PageMetaDescription";
import Banner from "mtc/components/Banner";
import NavBar from "mtc/components/NavBar";
import ContentContainer from "mtc/components/ContentContainer";
import SideBar from "mtc/components/SideBar";
import Router from "mtc/components/Router";
import Footer from "mtc/components/Footer";

const useStyles = makeStyles(theme => ({
  content: {
    position: "relative",
    flexGrow: 1,
  },
}));

export default function Main() {
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();

  const baseUrl = getBaseUrl();
  const url = baseUrl + location.pathname + location.search;

  return (
    <>
      <PageMetaTitle title="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />
      <PageMetaDescription description="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />

      <Helmet>
        <html lang="fr" />
        <meta property="og:locale" content="fr" />

        <meta name="theme-color" content={theme.palette.secondary.main} />

        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta
          property="og:site_name"
          content="Loïse Holive - Praticienne en médecine traditionnelle chinoise à Nantes"
        />

        <meta property="og:image" content={baseUrl + "/og-image.png"} />

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
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: baseUrl,
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
            url: baseUrl,
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
            logo: baseUrl + "/logo.png",
            image: baseUrl + "/logo.png",
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
            url: baseUrl,
          }),
        }}
      />

      <Banner />
      <NavBar />

      <ContentContainer padded className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} component="main">
            <Router />
          </Grid>

          <Grid item xs={12} md={4} component="aside">
            <SideBar />
          </Grid>
        </Grid>
      </ContentContainer>

      <Footer />
    </>
  );
}
