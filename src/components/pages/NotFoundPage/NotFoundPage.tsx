import { memo } from "react";

import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

import { ROUTES } from "@constants/routes";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => (
    <div className={styles.wrapper}>
        <Typography variant="h3">Not found</Typography>

        <Link to={ROUTES.MAIN}>
            <Typography variant="button">Go To Main page</Typography>
        </Link>
    </div>
);

export default memo(NotFoundPage);
