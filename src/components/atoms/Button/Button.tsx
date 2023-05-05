import clsx from "clsx";

import { Button as ButtonMUI } from "@mui/material";

import { IButton } from "./Button.interface";
import styles from "./Button.module.scss";

const Button: FCC<IButton> = ({ children, className, autoWidth, nonePadding, ...otherProps }) => (
    <ButtonMUI
        {...otherProps}
        className={clsx(styles.button, className, {
            [styles["button_auto-width"]]: autoWidth,
            [styles["button_none-padding"]]: nonePadding,
        })}
    >
        {children}
    </ButtonMUI>
);

export default Button;
