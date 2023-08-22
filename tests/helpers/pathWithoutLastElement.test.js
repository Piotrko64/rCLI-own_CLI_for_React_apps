import { pathWithoutLastElement } from "../../bin/helpers/pathWithoutLastElement";
import { describe, expect, test } from "vitest";

describe("checking returning paths", () => {
    const examplePath = "/paths/example";

    test("should return path without last element (should return 'paths/')", () => {
        const pathAfterDeleteLastElement = pathWithoutLastElement(examplePath);

        expect(pathAfterDeleteLastElement).toBe("/paths");
    });

    test("should return exactly the same path", () => {
        const newPath = pathWithoutLastElement(examplePath, true);

        expect(newPath).toBe(examplePath);
    });

    test("should return - /1/2/3", () => {
        const path = "/1/2/3/4";

        const pathAfterDeleteLastElement = pathWithoutLastElement(path);

        expect(pathAfterDeleteLastElement).toBe("/1/2/3");
    });
});
