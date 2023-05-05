import clsx from "clsx";
import { LinkProps, Link as RouterLink } from "react-router-dom";

import styles from "./Link.module.scss";

const Link: FCC<LinkProps> = ({ children, className, ...otherProps }) => (
    <RouterLink {...otherProps} className={clsx(styles.link, className)}>
        {children}
    </RouterLink>
);

export default Link;
