const chalk = require("chalk");

function getStyleMode(options) {
    const { css, scss, sass, styledComponents } = options;

    if (styledComponents && (css || scss || sass)) {
        console.log(chalk.bgRedBright("YOU USED TOO MUCH FLAGS!"));
        return "styledComponents";
    }

    const styles = ["css", "scss", "sass", "styledComponents"];

    const arrayOptions = Object.keys(options);
    for (let i = 0; i <= arrayOptions.length - 1; i++) {
        if (styles.find((style) => style === arrayOptions[i])) {
            return arrayOptions[i];
        }
    }
    return "css";
}
module.exports = { getStyleMode };
