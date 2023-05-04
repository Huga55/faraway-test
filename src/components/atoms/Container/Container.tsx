import clsx from "clsx";

import { IContainer } from "./Container.interface";
import styles from "./Container.module.scss";

const Container: FCC<IContainer> = ({ className, children }) => (
    <div className={clsx(styles.container, className)}>{children}</div>
);

export default Container;
