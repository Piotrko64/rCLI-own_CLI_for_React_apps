const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("./getFileNameFromPath");
const { templateJSXFile } = require("../templates/templateJSXFile");
const { getStyleImport } = require("./forStyles/getStyleImport");
const { templateStyledComponentsFile } = require("../templates/templateStyledComponentsFile");
const { templateNoStyledComponentsFile } = require("../templates/templateNoStyledComponentsFile");
const { getStyleFileFullName } = require("./forStyles/getStyleFileFullName");
const { getHookFileName } = require("./forHook/getHookFileName");
const { templateHookFile } = require("../templates/templateHookFile");
const { createMainFileComponent } = require("./creatingFiles/createMainFileComponent");

function createEntireComponent(
    pathFile,
    styleMode,
    isHook = false,
    isStyleFile = true,
    isFolder = true,

    isModule = true
) {
    createMainFileComponent({ pathFile, styleMode });

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
module.exports = { createEntireComponent };
