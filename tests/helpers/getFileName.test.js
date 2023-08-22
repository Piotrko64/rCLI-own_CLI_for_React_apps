import { expect, test } from "vitest";
import { getFileName } from "../../bin/helpers/getFileNameFromPath";

test("should return file name based on path", () => {
    const path = "/folder/name1";

    const correctFileName = getFileName(path);

    expect(correctFileName).toBe("name1");
});

test("should return - 'fileName1' ", () => {
    const path = "/folder/fileName1/";

    const correctFileName = getFileName(path);

    expect(correctFileName).toBe("fileName1");
});
