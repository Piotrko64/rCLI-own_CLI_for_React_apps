const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileNameFromPath");
const { templateJSXFile } = require("../../templates/templateJSXFile");
const { getStyleImport } = require("../forStyles/getStyleImport");

function createMainFileComponent({ pathFile, styleMode, isTs }) {
    const fileName = getFileName(pathFile);

    fse.outputFile(
        path.join(process.cwd(), pathFile, `${fileName}.jsx`),
        templateJSXFile(fileName, getStyleImport(fileName, styleMode)),
        function (err) {
            if (err) throw err;
            console.log("JSX file was created!");
        }
    );
}
module.exports = { createMainFileComponent };
