const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileNameFromPath");
const { templateComponentFile } = require("../../templates/templateComponentFile");
const { getStyleImport } = require("../forStyles/getStyleImport");

function createMainFileComponent({ pathFile, styleMode, isModule, isTs }) {
    const fileName = getFileName(pathFile);

    fse.outputFile(
        path.join(process.cwd(), pathFile, `${fileName}.${isTs ? "t" : "j"}sx`),
        templateComponentFile(fileName, getStyleImport({ fileName, styleMode, isModule, isTs })),
        function (err) {
            if (err) throw err;
            console.warn("Something get wrong!");
        }
    );
}
module.exports = { createMainFileComponent };
