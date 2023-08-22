import { describe, expect, test } from "vitest";
import { getStyleMode } from "../../../bin/helpers/forStyles/getStyleMode";

describe("should return 'styledComponents'", () => {
    test("case when we write also others style mode", () => {
        const options = { styledComponents: true, css: true, scss: true };

        const styleMode = getStyleMode(options);

        expect(styleMode).toBe("styledComponents");
    });

    test("case when we write only styledComponents for options", () => {
        const options = { styledComponents: true };

        const styleMode = getStyleMode(options);

        expect(styleMode).toBe("styledComponents");
    });
});

test("should return css mode", () => {
    const options = { css: true };

    const styleMode = getStyleMode(options);

    expect(styleMode).toBe("css");
});

test("should return sass mode", () => {
    const options = { sass: true };

    const styleMode = getStyleMode(options);

    expect(styleMode).toBe("sass");
});
