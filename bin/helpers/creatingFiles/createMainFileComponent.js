const fse = require("fs-extra");
const path = require("path");
const { getFileName } = require("../getFileNameFromPath");
const { templateComponentFile } = require("../../templates/templateComponentFile");
const { getStyleImport } = require("../forStyles/getStyleImport");
const chalk = require("chalk");

function createMainFileComponent({ pathFile, styleMode, isModule, isTs, isStyleFile: isStyle, isHook }) {
    const nameFile = getFileName(pathFile)[0].toUpperCase() + getFileName(pathFile).slice(1);
    const extension = `${isTs ? "t" : "j"}sx`;

    fse.outputFile(
        path.join(process.cwd(), pathFile, `${nameFile}.${extension}`),
        templateComponentFile({
            nameFile,
            isHook,
            importStyle: getStyleImport({ nameFile, styleMode, isModule, isTs, isStyle }),
            isStyledComponents: styleMode === "styledComponents",
        }),
        function (err) {
            if (err) throw err;
            console.log(
                chalk.hex("#FFAE42")(`${extension} main file was created! (${nameFile}.${extension})`)
            );
        }
    );
}
module.exports = { createMainFileComponent };
