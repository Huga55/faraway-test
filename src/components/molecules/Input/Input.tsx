import { FC } from "react";

import clsx from "clsx";

import { TextField, Typography } from "@mui/material";

import { IInput } from "./Input.interface";
import styles from "./Input.module.scss";

const Input: FC<IInput> = ({ className, error, labelClassName, ...otherProps }) => {
    return (
        <label className={clsx(styles.label, labelClassName)}>
            <TextField {...otherProps} error={!!error} className={clsx(styles.input, className)} />

            {error && (
                <Typography variant="caption" className={styles.error}>
                    {error}
                </Typography>
            )}
        </label>
    );
};

export default Input;
