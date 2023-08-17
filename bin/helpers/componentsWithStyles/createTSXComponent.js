const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileName");
const { templateJSXFile } = require("../../templates/templateJSXFile");
const { getStyleImport } = require("../getStyleImport");

function createTSXComponent(pathFile, styleMode, isHook = false, isModule = true, isFolder = true) {
    fse.outputFile(
        path.join(process.cwd(), pathFile, `${getFileName(pathFile)}.tsx`),
        templateJSXFile(getFileName(pathFile), getStyleImport(getFileName(pathFile), styleMode)),
        function (err) {
            if (err) throw err;
            console.log("JSX file was created!");
        }
    );
    fse.outputFile(
        path.join(process.cwd(), pathFile, `${getFileName(pathFile)}.module.${styleMode}`),
        "",
        function (err) {
            if (err) throw err;
            console.log("Style file was created!");
        }
    );
}
module.exports = { createTSXComponent };
