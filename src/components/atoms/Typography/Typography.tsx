import clsx from "clsx";

import { Typography as TypographyMUI, TypographyProps } from "@mui/material";

import styles from "./Typography.module.scss";

const Typography: FCC<TypographyProps> = ({ children, className, ...otherProps }) => (
    <TypographyMUI {...otherProps} className={clsx(styles.typography, className)}>
        {children}
    </TypographyMUI>
);

export default Typography;
