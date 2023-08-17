const { getHookFileName } = require("../helpers/forHook/getHookFileName");

function templateComponentFile({ nameFile, importStyle, isStyledComponents = false, isHook, isTs }) {
    if (!isNaN(+nameFile)) {
        throw new Error("Name of component cannot begin at number");
    }
    const hookName = getHookFileName(nameFile);

    return `
${importStyle}
${isHook ? `import { ${hookName} } from './${hookName}'` : ""}

export function ${nameFile}(){

${isHook ? `const { counter } = ${hookName}${isTs ? "<number>" : ""}(0)` : ""}

    return(
        <>
            <h1> Hello World </h1>
            ${
                isStyledComponents
                    ? "<Example> Example </Example>"
                    : "<div className={styles.example}> !!! </div>"
            }
        </>
    )
}
    
`.trim();
}

module.exports = { templateComponentFile };
