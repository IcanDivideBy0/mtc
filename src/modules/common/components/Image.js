import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

export default function Image({ lazy, lazyHeight, ...props }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  const img = <img {...props} />;

  if (!lazy) return img;

  return (
    <>
      <LazyLoad height={lazyHeight}>{img}</LazyLoad>
      <noscript>{img}</noscript>
    </>
  );
}

Image.propTypes = {
  lazy: PropTypes.bool,
  lazyHeight: PropTypes.number,
  alt: PropTypes.string.isRequired,
};

Image.GlobalStyle = () => (
  <noscript>
    <style>{".lazyload-placeholder { display: none; }"}</style>
  </noscript>
);
