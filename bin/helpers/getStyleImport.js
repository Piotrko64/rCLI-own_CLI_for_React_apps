function getStyleImport(name, modeStyle, isModule = true, isTS = true) {
    const styleName = name[0].toLowerCase() + name.slice(1);
    if (modeStyle === "styled-components") {
        return `import {Example} from './${styleName}.styled.${isTS ? "ts" : "js"}'`;
    } else {
        return `import styles from './${styleName}.module.${modeStyle}'`;
    }
}

module.exports = { getStyleImport };
