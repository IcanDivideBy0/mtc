// export const GA_TRACKING_ID = "UA-92413001-1";
export const GA_TRACKING_ID = "G-M8R1GVGHFW";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action, args) => {
  window.gtag("event", action, args);
};
