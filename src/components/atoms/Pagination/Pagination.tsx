import { FC, memo } from "react";

import clsx from "clsx";

import { Pagination as PaginationMUI, PaginationProps } from "@mui/material";

import styles from "./Pagination.module.scss";

const Pagination: FC<PaginationProps> = ({ className, ...otherProps }) => (
    <PaginationMUI
        variant="outlined"
        color="primary"
        {...otherProps}
        className={clsx(styles.pagination, className)}
    />
);

export default memo(Pagination);
