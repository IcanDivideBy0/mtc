import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

function Image({ lazy, lazyHeight, alt, src, ...props }) {
  const img = <img src={src} alt={alt} {...props} />;

  if (!lazy) return img;
  if (src.indexOf("data:") === 0) return img;

  return (
    <>
      <LazyLoad height={lazyHeight || 0}>{img}</LazyLoad>
      <noscript>{img}</noscript>
    </>
  );
}

Image.propTypes = {
  lazy: PropTypes.bool,
  lazyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Image.GlobalStyles = () => (
  <noscript>
    <style>{".lazyload-placeholder { display: none; }"}</style>
  </noscript>
);

export default Image;
