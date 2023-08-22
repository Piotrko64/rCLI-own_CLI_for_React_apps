import { describe, expect, test } from "vitest";
import { getStyleImport } from "../../../bin/helpers/forStyles/getStyleImport";

const nameFile = "NameFile";

describe("tests for no module imports", () => {
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

    test("should return correct import for scss file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "scss", isModule: false, isStyle: true });

        expect(importLine).toBe(`import "./nameFile.scss"`);
    });
});

describe("tests for module imports", () => {
    test("should return correct import for css module file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "css", isModule: true });

        expect(importLine).toBe(`import styles from "./nameFile.module.css"`);
    });

    test("should return correct import for module sass file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "sass", isModule: true });

        expect(importLine).toBe(`import styles from "./nameFile.module.sass"`);
    });

    test("should return correct import for scss module file", () => {
        const importLine = getStyleImport({ nameFile, styleMode: "scss", isModule: true, isStyle: true });

        expect(importLine).toBe(`import styles from "./nameFile.module.scss"`);
    });
});

test("should return empty string", () => {
    const importLine = getStyleImport({ isStyle: false });

    expect(importLine).toBe("");
});
