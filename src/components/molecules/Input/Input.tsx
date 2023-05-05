import { FC } from "react";

import clsx from "clsx";

import { TextField, TextFieldProps } from "@mui/material";

import styles from "./Input.module.scss";

const Input: FC<TextFieldProps> = ({ className, ...otherProps }) => {
    return <TextField {...otherProps} className={clsx(styles.input, className)} />;
};

export default Input;
