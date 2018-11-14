const fs = require('fs');
const template = require('lodash.template');

const paths = require('react-scripts/config/paths');
const templateFile = fs.readFileSync(paths.appHtml).toString();

module.exports = template(templateFile);
