function getStyleImport({ nameFile: fileName, styleMode, isModule = true, isStyle = true }) {
    if (!isStyle) {
        return "";
    }

    const styleName = fileName[0].toLowerCase() + fileName.slice(1);
    if (!isModule && styleMode !== "styledComponents") {
        return `import "./${styleName}.${styleMode}"`;
    } else if (styleMode === "styledComponents") {
        return `import { Example } from "./${styleName}.styled"`;
    } else {
        return `import styles from "./${styleName}.module.${styleMode}"`;
    }
}

module.exports = { getStyleImport };
