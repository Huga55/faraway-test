import { memo, useCallback, useState } from "react";

import EditCharacterForm from "@organisms/Forms/EditCharacterForm";

import { characterCardMock } from "@molecules/CharacterCard/CharacterCard.mock";
import GoBack from "@molecules/GoBack";
import LineValue from "@molecules/LineValue";
import Modal from "@molecules/Modal";

import Button from "@atoms/Button";
import Typography from "@atoms/Typography";

import useMedia from "@hooks/useMedia";

import { IEditedCharacterData } from "@schemas/characters";

import airplane from "@images/airplane.png";

import styles from "./CharacterInfoPage.module.scss";

const CharacterInfoPage = () => {
    const { isMobile } = useMedia();

    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState(characterCardMock[0]);

    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
    } = currentCharacter;

    const onCloseModalHandler = useCallback(() => setOpenEditModal(false), []);
    const onOpenModalHandler = () => setOpenEditModal(true);

    const onApplyEditedHandler = useCallback(
        (data: IEditedCharacterData) => {
            onCloseModalHandler();

            setCurrentCharacter({
                ...currentCharacter,
                ...data,
            });
        },
        [onCloseModalHandler, currentCharacter],
    );

    return (
        <div className={styles.wrapper}>
            <Modal onClose={onCloseModalHandler} open={openEditModal} title="Edit character">
                <EditCharacterForm
                    data={currentCharacter}
                    onCancel={onCloseModalHandler}
                    onApply={onApplyEditedHandler}
                />
            </Modal>

            <GoBack className={styles.back} />

            <Typography className={styles.title} variant={isMobile ? "h4" : "h3"}>
                {name}
            </Typography>

            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.list}>
                        <LineValue className={styles.line} label="Height">
                            {height}
                        </LineValue>

                        <LineValue className={styles.line} label="Mass">
                            {mass}
                        </LineValue>

                        <LineValue className={styles.line} label="Hair color">
                            {hair_color}
                        </LineValue>

                        <LineValue className={styles.line} label="Skin color">
                            {skin_color}
                        </LineValue>

                        <LineValue className={styles.line} label="Eye color">
                            {eye_color}
                        </LineValue>

                        <LineValue className={styles.line} label="Birth year">
                            {birth_year}
                        </LineValue>

                        <LineValue className={styles.line} label="Gender">
                            {gender}
                        </LineValue>
                    </div>

                    <Button
                        onClick={onOpenModalHandler}
                        className={styles.edit}
                        variant="contained"
                    >
                        Edit
                    </Button>
                </div>

                <img src={airplane} alt="Yoda" className={styles.img} />
            </div>
        </div>
    );
};

export default memo(CharacterInfoPage);
