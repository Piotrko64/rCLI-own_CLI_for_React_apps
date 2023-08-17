const { getFileName } = require("../getFileNameFromPath");

function getStyleFileFullName(pathFile, styleMode, isModule, isTs = true) {
    if (styleMode === "styledComponents") {
        return `${getFileName(pathFile)}.styled.${isTs ? "ts" : "js"}`;
    } else {
        return `${getFileName(pathFile)}${isModule ? ".module" : ""}.${styleMode}`;
    }
}

module.exports = { getStyleFileFullName };
