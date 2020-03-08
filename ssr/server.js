process.env.NODE_ENV = "production";

const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const express = require("express");
const compression = require("compression");

const paths = require("react-scripts/config/paths");
const publicPath = paths.publicUrlOrPath;
const publicUrl = publicPath.slice(0, -1);

const app = express();

const staticApp = express.static("build", { extensions: ["html"] });

// Simulate GitHub Pages
app.use(compression());
app.use(staticApp);
app.use(publicUrl, staticApp);
app.use((req, res) => {
  readFile("build/404.html").then(content => {
    res.status(404).send(content.toString());
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
