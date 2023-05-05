import { LinkProps } from "react-router-dom";

export interface IGoBack extends Omit<LinkProps, "to"> {
    to?: string;
}
