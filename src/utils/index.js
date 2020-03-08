/**
 * Get the web site base url (SSR compatible)
 */

export const getBaseUrl = () => {
  const origin =
    process.env.REACT_APP_LOCATION_ORIGIN || window.location.origin;
  return origin + process.env.PUBLIC_URL;
};
