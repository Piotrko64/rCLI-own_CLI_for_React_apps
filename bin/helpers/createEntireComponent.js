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
const { createStyleFile } = require("./creatingFiles/createStyleFile");
const { createHookFile } = require("./creatingFiles/createHookFile");

function createEntireComponent(
    pathFile,
    styleMode,
    isHook = false,
    isStyleFile = true,
    isFolder = true,
    isModule = true,
    isTs = true
) {
    createMainFileComponent({ pathFile, styleMode, isTs });
    if (isStyleFile) {
        createStyleFile({ pathFile, styleMode, isModule });
    }

    if (isHook) {
        createHookFile({ pathFile, isTs });
    }
}
module.exports = { createEntireComponent };
