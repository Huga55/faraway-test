import { memo } from "react";

import { Link } from "react-router-dom";

import Container from "@atoms/Container/Container";

import { ROUTES } from "@constants/routes";

import logo from "@images/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link to={ROUTES.MAIN}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
            </Container>
        </header>
    );
};

export default memo(Header);
