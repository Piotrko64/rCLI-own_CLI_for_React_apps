const fse = require("fs-extra");
const path = require("path");
const { templateNoStyledComponentsFile } = require("../../templates/templateNoStyledComponentsFile");
const { templateStyledComponentsFile } = require("../../templates/templateStyledComponentsFile");
const { getStyleFileFullName } = require("../forStyles/getStyleFileFullName");
const chalk = require("chalk");
const { pathWithoutLastElement } = require("../pathWithoutLastElement");

function createStyleFile({ pathFile, styleMode, isModule, isTs, withoutFolder }) {
    fse.outputFile(
        path.join(
            process.cwd(),
            pathWithoutLastElement(pathFile, withoutFolder),
            getStyleFileFullName(pathFile, styleMode, isModule, isTs)
        ),
        styleMode === "styledComponents"
            ? templateStyledComponentsFile()
            : templateNoStyledComponentsFile(styleMode === "sass"),
        function (err) {
            if (err) throw err;
            console.log(chalk.hex("#DA70D6")(`Style file was created! (${styleMode})`));
            withoutFolder && console.log(chalk.bgGrey(`\nComponent was created without folder`));
        }
    );
}

module.exports = { createStyleFile };
