#! /usr/bin/env node

const { displayRcliLogo } = require("./helpers/displayRcliLogo");
const { getFileName } = require("./helpers/getFileName");
const { getStyleImport } = require("./helpers/getStyleImport");
const { createJSXFile } = require("./templates/createJSXFile");
const fs = require("fs");
const path = require("path");

const { program } = require("commander");

program
    .argument("<path>")
    .option("-j, --jsx", "Create .jsx file instead .tsx")
    .option("-ns, --no-style", "Don't create file for style")
    .option("-nm, --no-module", "Create style file without module (for example .css instead .module.css)")
    .option("-sc, --scss-style", "Create .module.scss or .scss file instead .css")
    .option("-sa, --sass-style", "Create .module.sass or .sass file instead .css")
    .option("-sty, --styled-components", "Create styled components file for style")
    .option("-h, --hooke", "Create also file for hook")
    .option("-ws, --without-style", "Don't create file for style")
    .action((path, options, command) => {
        if (options.jsx) {
            console.log();
            console.log(createJSXFile(getFileName(path), getStyleImport(getFileName(path), "scss")));
        }
        console.log(1, path);
        console.log(2, path);
    });

program.parse();

const options = program.args;
console.log(options);

displayRcliLogo();
