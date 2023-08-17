function getHookFileName(nameFile) {
    return `${"use" + nameFile[0].toUpperCase() + nameFile.slice(1)}`;
}
module.exports = { getHookFileName };
