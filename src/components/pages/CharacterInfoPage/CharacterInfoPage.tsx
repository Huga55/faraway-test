import { memo, useCallback, useState } from "react";

import EditCharacterForm from "@organisms/Forms/EditCharacterForm";

import { characterCardMock } from "@molecules/CharacterCard/CharacterCard.mock";
import GoBack from "@molecules/GoBack";
import LineValue from "@molecules/LineValue";
import Modal from "@molecules/Modal";

import Button from "@atoms/Button";
import Typography from "@atoms/Typography";

import airplane from "@images/airplane.png";

import styles from "./CharacterInfoPage.module.scss";

const CharacterInfoPage = () => {
    const [openEditModal, setOpenEditModal] = useState(true);

    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
    } = characterCardMock[0];

    const onCloseModalHandler = useCallback(() => setOpenEditModal(false), []);
    const onOpenModalHandler = () => setOpenEditModal(true);

    const onApplyEditedHandler = useCallback(() => {
        onCloseModalHandler();
    }, [onCloseModalHandler]);

    return (
        <div className={styles.wrapper}>
            <Modal onClose={onCloseModalHandler} open={openEditModal} title="Edit character">
                <EditCharacterForm
                    data={characterCardMock[0]}
                    onCancel={onCloseModalHandler}
                    onApply={onApplyEditedHandler}
                />
            </Modal>

            <GoBack className={styles.back} />

            <Typography className={styles.title} variant="h3">
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

                    <div className={styles.btns}>
                        <Button
                            onClick={onOpenModalHandler}
                            className={styles.edit}
                            variant="contained"
                        >
                            Edit
                        </Button>
                    </div>
                </div>

                <img src={airplane} alt="Yoda" className={styles.img} />
            </div>
        </div>
    );
};

export default memo(CharacterInfoPage);
