import { FC, memo } from "react";

import clsx from "clsx";

import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

import { IRadios } from "./Radios.interface";
import styles from "./Radios.module.scss";

const Radios: FC<IRadios> = ({ elems, className, label, ...otherProps }) => {
    return (
        <label>
            {label && (
                <Typography className={styles.label} variant="body1">
                    {label}
                </Typography>
            )}

            <RadioGroup className={clsx(styles.wrapper, className)} {...otherProps}>
                {elems.map(({ label, value }) => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
                ))}
            </RadioGroup>
        </label>
    );
};

export default memo(Radios);
