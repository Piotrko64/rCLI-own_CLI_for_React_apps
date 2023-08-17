const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileNameFromPath");
const { templateComponentFile } = require("../../templates/templateComponentFile");
const { getStyleImport } = require("../forStyles/getStyleImport");
const chalk = require("chalk");

function createMainFileComponent({ pathFile, styleMode, isModule, isTs }) {
    const fileName = getFileName(pathFile)[0].toUpperCase() + getFileName(pathFile).slice(1);
    const extension = `${isTs ? "t" : "j"}sx`;

    fse.outputFile(
        path.join(process.cwd(), pathFile, `${fileName}.${extension}`),
        templateComponentFile(fileName, getStyleImport({ fileName, styleMode, isModule, isTs })),
        function (err) {
            if (err) throw err;
            console.log(
                chalk.hex("#FFAE42")(`${extension} main file was created! (${fileName}.${extension})`)
            );
        }
    );
}
module.exports = { createMainFileComponent };
