import { memo } from "react";

import Container from "@atoms/Container/Container";
import Typography from "@atoms/Typography/Typography";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Typography variant="h6">Designed By WimDev</Typography>
            </Container>
        </footer>
    );
};

export default memo(Footer);
