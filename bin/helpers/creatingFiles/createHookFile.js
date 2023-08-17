const fse = require("fs-extra");
const path = require("path");
const { getHookFileName } = require("../forHook/getHookFileName");
const { getFileName } = require("../getFileNameFromPath");
const { templateHookFile } = require("../../templates/templateHookFile");
const chalk = require("chalk");
const { pathWithoutLastElement } = require("../pathWithoutLastElement");

function createHookFile({ pathFile, isTs = true, withoutFolder }) {
    const fileName = getFileName(pathFile);
    const fileHookName = getHookFileName(getFileName(pathFile)) + `${isTs ? ".tsx" : ".jsx"}`;

    fse.outputFile(
        path.join(process.cwd(), pathWithoutLastElement(pathFile, withoutFolder), fileHookName),
        templateHookFile(fileName, isTs),
        function (err) {
            if (err) throw err;
            console.log(chalk.hex("#7F00FF")(`Hook file was created! (${fileHookName})`));
        }
    );
}

module.exports = { createHookFile };
