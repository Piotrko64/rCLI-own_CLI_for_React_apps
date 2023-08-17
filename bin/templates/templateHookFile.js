const { getHookFileName } = require("../helpers/forHook/getHookFileName");

function templateHookFile(name, isTS = true) {
    return `
    import {useState} from 'react';

    export function ${getHookFileName(name)}(){
        const [counter,setCounter] = useState${isTS && "<number>"}(0);

        return {counter}
    }
    
    `;
}
module.exports = { templateHookFile };
