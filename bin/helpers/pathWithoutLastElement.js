function pathWithoutLastElement(path, withoutChange) {
    if (!withoutChange) {
        return path;
    }

    const arrayPath = path.split("/");
    arrayPath.pop();

    return arrayPath.join("/");
}

module.exports = { pathWithoutLastElement };
