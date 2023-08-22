import { expect, test } from "vitest";
import { getStyleFileFullName } from "../../../bin/helpers/forStyles/getStyleFileFullName";

test("should return correct name for style file - styled components (ts)", () => {
    const pathFile = "/ui/Button";

    const nameStyledComponentsFile = getStyleFileFullName({ pathFile, styleMode: "styledComponents" });

    expect(nameStyledComponentsFile).toBe("button.styled.ts");
});

test("should return correct name for sass module file", () => {
    const pathFile = "/components/ToggleButton";

    const nameStyledComponentsFile = getStyleFileFullName({ pathFile, styleMode: "sass", isTs: false });

    expect(nameStyledComponentsFile).toBe("toggleButton.module.sass");
});

test("should return correct name for css without module ", () => {
    const pathFile = "/components/mainLayout";

    const nameStyledComponentsFile = getStyleFileFullName({ pathFile, styleMode: "css", isModule: false });

    expect(nameStyledComponentsFile).toBe("mainLayout.css");
});
