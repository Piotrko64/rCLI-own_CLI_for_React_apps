function pathWithoutLastElement(path, withoutChange = false) {
    if (withoutChange) {
        return path;
    }

    const arrayPath = path.split("/");
    arrayPath.pop();

    return arrayPath.join("/");
}

module.exports = { pathWithoutLastElement };
