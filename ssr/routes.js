export function getRoutes() {
  return [
    { url: "/", priority: 0.8 },
    { url: "/contact" },

    { url: "/soins" },
    { url: "/ma-pratique" },
    { url: "/préparatifs" },
    { url: "/faq" },
    { url: "/tarifs" },
  ].map(route => ({
    priority: 0.5,
    ...route,
  }));
}
