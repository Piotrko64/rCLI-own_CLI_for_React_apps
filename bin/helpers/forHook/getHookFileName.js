function getHookFileName(nameFile, isTS = true) {
    return `${"use" + nameFile[0].toUpperCase() + nameFile.slice(1)}.${isTS ? "ts" : "js"}`;
}
module.exports = { getHookFileName };
