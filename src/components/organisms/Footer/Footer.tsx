import { memo } from "react";

import Container from "@atoms/Container/Container";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>Designed By WimDev</Container>
        </footer>
    );
};

export default memo(Footer);
