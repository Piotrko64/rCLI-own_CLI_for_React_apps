function getFileName(fileName) {
    const arrayPath = fileName.split("/").filter(Boolean);
    return arrayPath[arrayPath.length - 1];
}

module.exports = { getFileName };
