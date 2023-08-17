function getStyleMode(options) {
    const styles = ["css", "scss", "sass", "styled-components"];

    const arrayOptions = Object.keys(options);

    for (let i = 0; i <= arrayOptions.length - 1; i++) {
        if (styles.find((style) => style === arrayOptions[i])) {
            return arrayOptions[i];
        }
    }
    return "css";
}
module.exports = { getStyleMode };
