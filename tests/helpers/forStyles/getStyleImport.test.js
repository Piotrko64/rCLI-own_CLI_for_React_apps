import { describe, expect, test } from "vitest";
import { getStyleImport } from "../../../bin/helpers/forStyles/getStyleImport";

describe("tests for no module imports", () => {
    const nameFile = "NameFile";

    test("should return correct import for styled components", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "styledComponents" });

        expect(importLine).toBe(`import { Example } from "./nameFile.styled"`);
    });

    test("should return correct import for css file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "css", isModule: false });

        expect(importLine).toBe(`import "./nameFile.css"`);
    });

    test("should return correct import for sass file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "sass", isModule: false });

        expect(importLine).toBe(`import "./nameFile.sass"`);
    });
});
