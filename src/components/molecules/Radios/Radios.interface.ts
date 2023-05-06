import { RadioGroupProps } from "@mui/material";

export interface IRadio {
    label: string;
    value: string;
}

export interface IRadios extends RadioGroupProps {
    elems: IRadio[];
    label?: string;
}
