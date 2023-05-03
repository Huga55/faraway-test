import { memo } from "react";

import { Outlet } from "react-router-dom";

import Header from "@organisms/Header";

import styles from "./AppTemplate.module.scss";

const AppTemplate = () => (
    <div className={styles.container}>
        <div className={styles.right}>
            <header className={styles.header}>
                <Header />
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    </div>
);

export default memo(AppTemplate);
