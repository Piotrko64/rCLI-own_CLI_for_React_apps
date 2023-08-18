function templateNoStyledComponentsFile(isSass = false) {
    if (isSass) {
        return `.example
    font-size: 2rem;
    padding: 10px;
`;
    }

    return `.example{
    font-size: 2rem;
    padding: 10px;
}
    `.trim();
}
module.exports = { templateNoStyledComponentsFile };
