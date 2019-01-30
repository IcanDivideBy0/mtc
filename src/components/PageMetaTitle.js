import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function PageMetaTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Helmet>
  );
}

PageMetaTitle.propTypes = {
  title: PropTypes.string,
};

export default PageMetaTitle;
