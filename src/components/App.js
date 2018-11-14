import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import AppBanner from "./AppBanner";
import AppMenu from "./AppMenu";
// import AppBar from "./AppBar";
import AppFooter from "./AppFooter";
import Router from "./Router";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";

const AppContent = styled.main`
  flex: 1 0 auto;
`;

const navItems = [
  { text: "Accueil", to: "/", exact: true },
  {
    text: "Soins",
    to: "/soins",
    items: [
      { text: "Acupuncture", to: "/soins/acupuncture" },
      {
        text: "Tuina",
        to: "/soins/tuina",
        items: [
          { text: "Foo", to: "/soins/tuina/foo" },
          { text: "Bar", to: "/soins/tuina/bar" },
          { text: "Baz", to: "/soins/tuina/baz" },
        ],
      },
      { text: "Ventouses", to: "/soins/ventouses" },
      { text: "Qi-Gong", to: "/soins/qi-gong" },
    ],
  },
  { text: "Tarifs", to: "/tarifs" },
  { text: "Contact", to: "/contact" },
];

const ADDRESS = {
  street: "1 rue bouboubou",
  postalCode: "44000",
  locality: "Nantes",
  region: "Pays de la Loire",
  country: "France",
};

function App({ location }) {
  const origin =
    process.env.REACT_APP_LOCATION_ORIGIN || window.location.origin;
  const baseUrl = origin + process.env.PUBLIC_URL;
  const url = baseUrl + location.pathname + location.search;

  return (
    <>
      <PageTitle title="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />
      <PageDescription description="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes. Acupuncture, Tuina, Ventouses, Qi-Gong, …" />

      <Helmet>
        <html lang="fr" />
        <meta property="og:locale" content="fr_FR" />

        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta
          property="og:site_name"
          content="Loïse Holive praticienne en médecine traditionnelle chinoise à Nantes"
        />

        <meta property="og:image" content={baseUrl + "/og-image.png"} />

        {/* <meta property="fb:app_id" content="193733691137750" /> */}
        {/* <meta property="og:type" content="website" /> */}
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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Person",
            name: "Loïse Holive",
            jobTitle: "Praticienne en médecine traditionnelle chinoise",
            address: {
              "@type": "PostalAddress",
              streetAddress: ADDRESS.street,
              postalCode: ADDRESS.postalCode,
              addressLocality: ADDRESS.locality,
              addressRegion: ADDRESS.region,
            },
            telephone: "+33 6 00 00 00 00",
          })}
        </script>
      </Helmet>

      {/* <AppBar navItems={navItems} /> */}
      <AppBanner />
      <AppMenu navItems={navItems} />

      <AppContent>
        <Router />
      </AppContent>

      <AppFooter />
    </>
  );
}

export default withRouter(App);
