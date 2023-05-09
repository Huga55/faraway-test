import { getLastElemOfURL } from ".";

describe("getLastElemOfURL", () => {
    test("Correct url without '/'", () => {
        expect(getLastElemOfURL("https://google.com/id/1")).toBe("1");
    });

    test("Correct url with '/'", () => {
        expect(getLastElemOfURL("https://google.com/id/1/")).toBe("1");
    });

    test("Undefined", () => {
        expect(getLastElemOfURL()).toBe(null);
    });

    test("Empty string", () => {
        expect(getLastElemOfURL("")).toBe(null);
    });
});
