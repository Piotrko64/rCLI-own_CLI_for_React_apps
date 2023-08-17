#! /usr/bin/env node

const { displayRcliLogo } = require("./helpers/displayRcliLogo");
const fs = require("fs");
const path = require("path");

const { program } = require("commander");

program
    .argument("<name>")
    .option("-j, --jsx", "Create .jsx file instead .tsx")
    .option("-ns, --no-style", "Don't create file for style")
    .action((name, options, command) => {
        if (options.jsx) {
            console.log("CREATE JSX FILE");
        }
        console.log(1, command.name());
        console.log(2, name);
    });

program.parse();

const options = program.args;
console.log(options);

displayRcliLogo();
