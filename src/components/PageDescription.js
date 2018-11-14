import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function PageDescription({ description }) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

PageDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
