import { describe, expect, test } from "vitest";
import { getHookFileName } from "../../../bin/helpers/forHook/getHookFileName";

test("should return 'useAmazingButton'", () => {
    const fileName = "amazingButton";

    const hookName = getHookFileName(fileName);

    expect(hookName).toBe("useAmazingButton");
});
