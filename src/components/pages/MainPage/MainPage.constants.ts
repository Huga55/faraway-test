import { NumberParam, StringParam, withDefault } from "use-query-params";

export const charactersPerPage = 10;
export const pageDefault = 1;
export const nameFilterDefault = "";

export const mainPageParam = withDefault(NumberParam, pageDefault);
export const mainNameFilterParam = withDefault(StringParam, nameFilterDefault);
