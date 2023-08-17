function pathWithoutLastElement(path) {
    const arrayPath = path.split("/");
    arrayPath.pop();
    return arrayPath.slice(0, -1);
}

module.exports = { pathWithoutLastElement };
