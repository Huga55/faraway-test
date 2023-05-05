import clsx from "clsx";

import Typography from "@atoms/Typography/Typography";

import { ILineValue } from "./LineValue.interface";
import styles from "./LineValue.module.scss";

const LineValue: FCC<ILineValue> = ({ label, children, className }) => {
    return (
        <div className={clsx(styles.line, className)}>
            <Typography fontWeight="bold" variant="body1">
                {label}:
            </Typography>

            <Typography>{children}</Typography>
        </div>
    );
};

export default LineValue;
