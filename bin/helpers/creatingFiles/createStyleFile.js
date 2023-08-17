const fse = require("fs-extra");
const path = require("path");
const { templateNoStyledComponentsFile } = require("../../templates/templateNoStyledComponentsFile");
const { templateStyledComponentsFile } = require("../../templates/templateStyledComponentsFile");
const { getStyleFileFullName } = require("../forStyles/getStyleFileFullName");

function createStyleFile({ pathFile, styleMode, isModule }) {
    fse.outputFile(
        path.join(process.cwd(), pathFile, getStyleFileFullName(pathFile, styleMode, isModule)),
        styleMode === "styledComponents" ? templateStyledComponentsFile() : templateNoStyledComponentsFile(),
        function (err) {
            if (err) throw err;
            console.log("Style file was created!");
        }
    );
}

module.exports = { createStyleFile };
