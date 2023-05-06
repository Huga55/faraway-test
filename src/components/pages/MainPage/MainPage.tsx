import { memo, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import CharacterCard from "@molecules/CharacterCard/CharacterCard";
import { characterCardMock } from "@molecules/CharacterCard/CharacterCard.mock";

import Typography from "@atoms/Typography/Typography";

import useMedia from "@hooks/useMedia";

import { ROUTES } from "@constants/routes";

import styles from "./MainPage.module.scss";

const MainPage = () => {
    const navigate = useNavigate();

    const { isMobile } = useMedia();

    const getCharacterInfo = useCallback((id: string) => navigate(`${ROUTES.CHARACTER}/${id}`), [
        navigate,
    ]);

    return (
        <div className={styles.wrapper}>
            <Typography className={styles.title} variant={isMobile ? "h5" : "h4"}>
                Star Wars Characters
            </Typography>

            <div className={styles.cards}>
                {characterCardMock.map((card) => (
                    <CharacterCard key={card.name} data={card} onGetInfo={getCharacterInfo} />
                ))}
            </div>
        </div>
    );
};

export default memo(MainPage);
