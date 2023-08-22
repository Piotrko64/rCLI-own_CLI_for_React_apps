const { getFileName } = require("../getFileNameFromPath");

function getStyleFileFullName({ pathFile, styleMode, isModule = true, isTs = true }) {
    const fileName = getFileName(pathFile)[0].toLowerCase() + getFileName(pathFile).slice(1);

    if (styleMode === "styledComponents") {
        return `${fileName}.styled.${isTs ? "ts" : "js"}`;
    } else {
        return `${fileName}${isModule ? ".module" : ""}.${styleMode}`;
    }
}

module.exports = { getStyleFileFullName };
