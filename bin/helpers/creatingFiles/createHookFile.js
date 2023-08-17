const fse = require("fs-extra");
const path = require("path");
const { getHookFileName } = require("../forHook/getHookFileName");
const { getFileName } = require("../getFileNameFromPath");
const { templateHookFile } = require("../../templates/templateHookFile");

function createHookFile({ pathFile, isTs = true }) {
    const fileName = getFileName(pathFile);
    const fileHookName = getHookFileName(getFileName(pathFile)) + `${isTs ? ".tsx" : ".jsx"}`;

    fse.outputFile(
        path.join(process.cwd(), pathFile, fileHookName),
        templateHookFile(fileName),
        function (err) {
            if (err) throw err;
            console.log("Style file was created!");
        }
    );
}

module.exports = { createHookFile };
