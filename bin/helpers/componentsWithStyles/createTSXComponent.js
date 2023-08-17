const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileName");
const { templateJSXFile } = require("../../templates/templateJSXFile");
const { getStyleImport } = require("../forStyles/getStyleImport");
const { templateStyledComponentsFile } = require("../../templates/templateStyledComponentsFile");
const { templateNoStyledComponentsFile } = require("../../templates/templateNoStyledComponentsFile");
const { getStyleFileFullName } = require("../forStyles/getStyleFileFullName");
const { getHookFileName } = require("../forHook/getHookFileName");

function createTSXComponent(
    pathFile,
    styleMode,
    isHook = false,
    isModule = true,
    isFolder = true,
    isStyleFile = true
) {
    fse.outputFile(
        path.join(process.cwd(), pathFile, `${getFileName(pathFile)}.jsx`),
        templateJSXFile(getFileName(pathFile), getStyleImport(getFileName(pathFile), styleMode)),
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
        console.log("asd");
        fse.outputFile(
            path.join(process.cwd(), pathFile, getHookFileName(getFileName(pathFile))),
            styleMode === "styledComponents"
                ? templateStyledComponentsFile()
                : templateNoStyledComponentsFile(),
            function (err) {
                if (err) throw err;
                console.log("Style file was created!");
            }
        );
    }
}
module.exports = { createTSXComponent };
