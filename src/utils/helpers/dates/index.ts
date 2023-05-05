import { format } from "date-fns";

import { IGetDateForClientOptions } from "@schemas/helpers";

export const getDateForClient = (
    date?: Date | string,
    options?: IGetDateForClientOptions,
): string | null => {
    if (!date) return null;

    const { withTime, withSeconds } = options || {};

    const timeFormat = ` HH:mm${withSeconds ? ":ss" : ""}`;

    return date && format(new Date(date), `dd.MM.yyyy${withTime ? timeFormat : ""}`);
};
