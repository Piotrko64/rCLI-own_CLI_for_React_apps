const { createMainFileComponent } = require("./creatingFiles/createMainFileComponent");
const { createStyleFile } = require("./creatingFiles/createStyleFile");
const { createHookFile } = require("./creatingFiles/createHookFile");

function createEntireComponent(configInfo) {
    const { isStyleFile, isHook } = configInfo;

    createMainFileComponent(configInfo);

    if (isStyleFile) {
        createStyleFile(configInfo);
    }

    if (isHook) {
        createHookFile(configInfo);
    }
}
module.exports = { createEntireComponent };
