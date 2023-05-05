import clsx from "clsx";

import { Close } from "@mui/icons-material";
import { Modal as ModalMUI } from "@mui/material";

import Button from "@atoms/Button";
import Typography from "@atoms/Typography";

import { IModal } from "./Modal.interface";
import styles from "./Modal.module.scss";

const Modal: FCC<IModal> = ({ children, windowClassName, className, title, ...otherProps }) => (
    <ModalMUI className={clsx(styles.modal, className)} {...otherProps}>
        <div className={clsx(styles.window, windowClassName)}>
            <Button className={styles.close} autoWidth nonePadding onClick={otherProps.onClose}>
                <Close />
            </Button>

            {title && <Typography className={styles.title}>{title}</Typography>}

            {children}
        </div>
    </ModalMUI>
);

export default Modal;
