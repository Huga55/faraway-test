import { format } from "date-fns";

import { getDateForClient, isStringCorrectDate } from "./index";

describe("getDateForClient", () => {
    test("Correct date", () => {
        expect(getDateForClient(new Date())).toBe(format(new Date(), "dd.MM.yyyy"));
    });

    test("Correct date string", () => {
        expect(getDateForClient("01-05-2020")).toBe("05.01.2020");
    });

    test("Empty string", () => {
        expect(getDateForClient("")).toBe(null);
    });

    test("Undefined", () => {
        expect(getDateForClient()).toBe(null);
    });

    test("Correct date with time", () => {
        expect(getDateForClient(new Date(), { withTime: true })).toBe(
            format(new Date(), "dd.MM.yyyy HH:mm"),
        );
    });

    test("Correct date with seconds", () => {
        expect(getDateForClient(new Date(), { withTime: true, withSeconds: true })).toBe(
            format(new Date(), "dd.MM.yyyy HH:mm:ss"),
        );
    });

    test("Incorrect date string", () => {
        expect(getDateForClient("incorrect052020")).toBe(null);
    });
});

describe("isStringCorrectDate", () => {
    test("Correct string", () => {
        expect(isStringCorrectDate("01.02.2023")).toBe(true);
    });

    test("Correct date", () => {
        expect(isStringCorrectDate(new Date())).toBe(true);
    });

    test("Undefined", () => {
        expect(isStringCorrectDate()).toBe(false);
    });

    test("Incorrect string", () => {
        expect(isStringCorrectDate("incorrect")).toBe(false);
    });

    test("Empty string", () => {
        expect(isStringCorrectDate("")).toBe(false);
    });
});
