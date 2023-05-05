import clsx from "clsx";

import { Button as ButtonMUI, ButtonProps } from "@mui/material";

import styles from "./Button.module.scss";

const Button: FCC<ButtonProps> = ({ children, className, ...otherProps }) => (
    <ButtonMUI {...otherProps} className={clsx(styles.button, className)}>
        {children}
    </ButtonMUI>
);

export default Button;
