function getFileName(fileName) {
    const arrayPath = fileName.split("/");
    return arrayPath[arrayPath.length - 1];
}

module.exports = { getFileName };
