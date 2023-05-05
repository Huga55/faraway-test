import { MouseEvent, memo } from "react";

import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Link from "@atoms/Link";

import { IGoBack } from "./GoBack.interface";
import styles from "./GoBack.module.scss";

const GoBack: FCC<IGoBack> = ({ children, to, className, ...otherProps }) => {
    const navigate = useNavigate();

    const onLinkClickHandler = (e: MouseEvent<HTMLElement>) => {
        if (to) return;

        e.preventDefault();
        navigate(-1);
    };

    return (
        <Link
            onClick={onLinkClickHandler}
            className={clsx(styles.back, className)}
            to={to || "#"}
            {...otherProps}
        >
            <ArrowBackIcon />

            {children || "Back"}
        </Link>
    );
};

export default memo(GoBack);
