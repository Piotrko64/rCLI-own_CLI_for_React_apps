function templateJSXFile(nameFile, importStyle, isStyledComponents = false) {
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

module.exports = { templateJSXFile };
