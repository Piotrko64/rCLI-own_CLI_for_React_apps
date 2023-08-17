#! /usr/bin/env node

const { displayRcliLogo } = require("./helpers/displayRcliLogo");
const { getFileName } = require("./helpers/getFileName");
const { createTSXComponent } = require("./helpers/componentsWithStyles/createTSXComponent");
const { templateJSXFile } = require("./templates/templateJSXFile");
const fs = require("fs");
const path = require("path");

const { program } = require("commander");
const { getStyleMode } = require("./helpers/getStyleMode");

program
    .argument("<path>")
    .option("-j, --jsx", "Create .jsx file instead .tsx")
    .option("-ns, --no-style", "Don't create file for style")
    .option("-nm, --no-module", "Create style file without module (for example .css instead .module.css)")
    .option("-sc, --scss", "Create .module.scss or .scss file instead .css")
    .option("-sa, --sass", "Create .module.sass or .sass file instead .css")
    .option("-sty, --styled-components", "Create styled components file for style")
    .option("-h, --hook", "Create also file for hook")
    .option("-ws, --without-style", "Don't create file for style")
    .action((path, options, command) => {
        createTSXComponent(path, getStyleMode(options));
    });
program.parse();

const options = program.args;
console.log(options);

displayRcliLogo();
