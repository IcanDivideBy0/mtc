import React from "react";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core";

import { compose, getBaseUrl } from "mtc/utils";

import PageMetaTitle from "mtc/components/PageMetaTitle";
import PageMetaDescription from "mtc/components/PageMetaDescription";
import Banner from "mtc/components/Banner";
import NavBar from "mtc/components/NavBar";
import Router from "mtc/components/Router";
import Footer from "mtc/components/Footer";

const styles = theme => ({
  main: {
    position: "relative",
    flexGrow: 1,
  },
});

const ADDRESS = {
  street: "1 allée Jean Bart",
  postalCode: "44000",
  locality: "Nantes",
  region: "Pays de la Loire",
  country: "France",
};

const PHONE = "+33 6 84 55 64 44";

function Main({ classes, match, location }) {
  const baseUrl = getBaseUrl();
  const url = baseUrl + location.pathname + location.search;

  return (
    <>
      <PageMetaTitle title="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />
      <PageMetaDescription description="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />

      <Helmet>
        <html lang="fr" />
        <meta property="og:locale" content="fr" />

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

      <main className={classes.main}>
        <Router />
      </main>

      <Footer />
    </>
  );
}

export default compose(
  withRouter,
  withStyles(styles)
)(Main);
