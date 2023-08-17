const fse = require("fs-extra");
const path = require("path");
const { templateNoStyledComponentsFile } = require("../../templates/templateNoStyledComponentsFile");
const { templateStyledComponentsFile } = require("../../templates/templateStyledComponentsFile");
const { getStyleFileFullName } = require("../forStyles/getStyleFileFullName");
const chalk = require("chalk");

function createStyleFile({ pathFile, styleMode, isModule, isTs }) {
    console.log(styleMode);
    fse.outputFile(
        path.join(process.cwd(), pathFile, getStyleFileFullName(pathFile, styleMode, isModule, isTs)),
        styleMode === "styledComponents"
            ? templateStyledComponentsFile()
            : templateNoStyledComponentsFile(styleMode === "sass"),
        function (err) {
            if (err) throw err;
            console.log(chalk.hex("#DA70D6")(`Style file was created! (${styleMode})`));
        }
    );
}

module.exports = { createStyleFile };
