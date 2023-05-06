import { TextFieldProps } from "@mui/material";

export interface IInput extends Omit<TextFieldProps, "error"> {
    error?: string;
}
