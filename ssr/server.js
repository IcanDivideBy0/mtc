const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const express = require("express");

const paths = require("react-scripts/config/paths");
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);

const app = express();

const staticApp = express.static("build", { extensions: ["html"] });

app.use(staticApp);
app.use(publicUrl, staticApp);
app.use((req, res) => {
  readFile("build/200.html").then(content => res.send(content.toString()));
});

app.listen(5000, () => console.log("Running at http://localhost:5000"));
