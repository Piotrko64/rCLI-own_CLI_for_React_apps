const { getFileName } = require("../getFileNameFromPath");

function getStyleFileFullName(pathFile, styleMode, isModule, isTS = true) {
    if (styleMode === "styledComponents") {
        return `${getFileName(pathFile)}.styled.${isTS ? "ts" : "js"}`;
    } else {
        return `${getFileName(pathFile)}${isModule ? ".module" : ""}.${styleMode}`;
    }
}

module.exports = { getStyleFileFullName };
