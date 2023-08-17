const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileNameFromPath");
const { templateJSXFile } = require("../../templates/templateJSXFile");
const { getStyleImport } = require("../forStyles/getStyleImport");
const { templateStyledComponentsFile } = require("../../templates/templateStyledComponentsFile");
const { templateNoStyledComponentsFile } = require("../../templates/templateNoStyledComponentsFile");
const { getStyleFileFullName } = require("../forStyles/getStyleFileFullName");
const { getHookFileName } = require("../forHook/getHookFileName");
const { templateHookFile } = require("../../templates/templateHookFile");

function createComponent(
    pathFile,
    styleMode,
    isHook = false,
    isStyleFile = true,
    isFolder = true,

    isModule = true
) {
    const fileName = getFileName(pathFile);

    fse.outputFile(
        path.join(process.cwd(), pathFile, `${fileName}.jsx`),
        templateJSXFile(fileName, getStyleImport(fileName, styleMode)),
        function (err) {
            if (err) throw err;
            console.log("JSX file was created!");
        }
    );
    if (isStyleFile) {
        fse.outputFile(
            path.join(process.cwd(), pathFile, getStyleFileFullName(pathFile, styleMode, isModule)),
            styleMode === "styledComponents"
                ? templateStyledComponentsFile()
                : templateNoStyledComponentsFile(),
            function (err) {
                if (err) throw err;
                console.log("Style file was created!");
            }
        );
    }

    if (isHook) {
        fse.outputFile(
            path.join(process.cwd(), pathFile, getHookFileName(getFileName(pathFile)) + `.tsx`),
            templateHookFile(fileName),
            function (err) {
                if (err) throw err;
                console.log("Style file was created!");
            }
        );
    }
}
module.exports = { createComponent };
