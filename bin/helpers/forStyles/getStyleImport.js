function getStyleImport({ fileName, styleMode, isModule = true, isTs = true }) {
    const styleName = fileName[0].toLowerCase() + fileName.slice(1);
    if (!isModule) {
        return `import './${styleName}.${styleMode}'`;
    } else if (styleMode === "styledComponents") {
        return `import {Example} from './${styleName}.styled.${isTs ? "ts" : "js"}'`;
    } else {
        return `import styles from './${styleName}.module.${styleMode}'`;
    }
}

module.exports = { getStyleImport };
