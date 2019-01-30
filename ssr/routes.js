module.exports = {
  getRoutes,
};

async function getRoutes() {
  return [
    { url: "/", priority: 0.8 },
    { url: "/soins" },
    { url: "/tarifs" },
    { url: "/contact" },
  ].map(route => ({
    priority: 0.5,
    ...route,
  }));
}
