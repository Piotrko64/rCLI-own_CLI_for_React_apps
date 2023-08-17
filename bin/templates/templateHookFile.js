const { getHookFileName } = require("../helpers/forHook/getHookFileName");

function templateHookFile(name, isTs = true) {
    return `import { useState } from 'react';

export function ${getHookFileName(name)}(initial${isTs ? ": number" : ""}){

    const [counter, setCounter] = useState${isTs && "<number>"}(initial);

    return {counter}
    }
    `.trim();
}
module.exports = { templateHookFile };
