import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
