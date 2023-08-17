function templateComponentFile(nameFile, importStyle, isStyledComponents = false) {
    if (!isNaN(+nameFile)) {
        throw new Error("Name of component cannot begin at number");
    }

    return `
    ${importStyle}

    export function ${nameFile}(){

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
    
    `;
}

module.exports = { templateComponentFile };
