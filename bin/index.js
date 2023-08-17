#! /usr/bin/env node

const { displayRcliLogo } = require("./helpers/displayRcliLogo");
const { createEntireComponent } = require("./helpers/createEntireComponent");
const { program } = require("commander");
const { getStyleMode } = require("./helpers/forStyles/getStyleMode");

program
    .argument("<pathFile>")
    .usage("rc <pathFile> [options]")
    .option("-j, --jsx", "Create .jsx file instead .tsx")
    .option("-t, --tsx", "Create .tsx file - default bahavior")
    .option("-ns, --no-style", "Don't create file for style")
    .option("-nm, --no-module", "Create style file without module (for example .css instead .module.css)")
    .option("-sc, --scss", "Create .module.scss or .scss file instead .css")
    .option("-cs, --css", "Create .css/.module.css file - default behavior")
    .option("-sa, --sass", "Create .module.sass or .sass file instead .css")
    .option("-sty, --styled-components", "Create styled components file for style")
    .option("-h, --hook", "Create also file for hook")
    .option("-nf, --no-folder", "Create component files without folder")

    .action((pathFile, options) => {
        const { hook, style, module, jsx, folder } = options;

        displayRcliLogo();

        createEntireComponent({
            pathFile,
            styleMode: getStyleMode(options),
            isHook: hook,
            isStyleFile: style,
            isModule: module,
            isTs: !jsx,
            withoutFolder: !folder,
        });
    });
program.parse();
