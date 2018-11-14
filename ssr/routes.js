module.exports = {
  getRoutes,
};

async function getRoutes() {
  return [
    { url: "/" },
    { url: "/soins" },
    { url: "/tarifs" },
    { url: "/contact" },
  ];
}
