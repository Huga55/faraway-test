import { memo } from "react";

import { Outlet } from "react-router-dom";

import Footer from "@organisms/Footer";
import Header from "@organisms/Header";

import Container from "@atoms/Container/Container";

import styles from "./AppTemplate.module.scss";

const AppTemplate = () => (
    <div className={styles.wrapper}>
        <Header />

        <main className={styles.main}>
            <Container className={styles.container}>
                <Outlet />
            </Container>
        </main>

        <Footer />
    </div>
);

export default memo(AppTemplate);
