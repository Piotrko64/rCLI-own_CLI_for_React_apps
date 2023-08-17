function createJSXFile(nameFile, importStyle) {
    return `
    ${importStyle}

    export function ${nameFile}(){

        return(
            <>
                <div>hello</div>
            </>
        )
    }
    
    `;
}

module.exports = { createJSXFile };
