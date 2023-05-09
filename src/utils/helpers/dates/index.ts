import { format } from "date-fns";

import { IGetDateForClientOptions } from "@schemas/helpers";

export const isStringCorrectDate = (str?: string | Date) => {
    if (!str) return false;

    return !isNaN(Date.parse(str?.toString()));
};

export const getDateForClient = (
    date?: Date | string,
    options?: IGetDateForClientOptions,
): string | null => {
    if (!date || !isStringCorrectDate(date)) return null;

    const { withTime, withSeconds } = options || {};

    const timeFormat = ` HH:mm${withSeconds ? ":ss" : ""}`;

    return date && format(new Date(date), `dd.MM.yyyy${withTime ? timeFormat : ""}`);
};
