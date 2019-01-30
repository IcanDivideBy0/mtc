import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function PageMetaDescription({ description }) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

PageMetaDescription.propTypes = {
  description: PropTypes.string,
};

export default PageMetaDescription;
