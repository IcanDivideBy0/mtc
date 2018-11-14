module.exports = {
  getRoutes,
};

async function getRoutes() {
  return [
    { url: "/" },
    { url: "/contact" },
    // { url: "/foo" }
  ];
}
