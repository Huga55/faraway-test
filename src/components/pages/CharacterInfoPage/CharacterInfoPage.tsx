import { memo, useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import EditCharacterForm from "@organisms/Forms/EditCharacterForm";

import GoBack from "@molecules/GoBack";
import LineValue from "@molecules/LineValue";
import Modal from "@molecules/Modal";

import Button from "@atoms/Button";
import Loader from "@atoms/Loader";
import Typography from "@atoms/Typography";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    selectIsCharacterInfoLoading,
    setlectCharacterInfo,
} from "@store/slices/character/character.selectors";
import { clearCharacterInfo } from "@store/slices/character/character.slice";
import { getCharacterInfo } from "@store/slices/character/character.thunk";

import useMedia from "@hooks/useMedia";

import { ICharacter, IEditedCharacterData } from "@schemas/characters";

import airplane from "@images/airplane.png";

import styles from "./CharacterInfoPage.module.scss";

const CharacterInfoPage = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const { isMobile } = useMedia();

    const characterInfo = useAppSelector(setlectCharacterInfo);
    const isLoading = useAppSelector(selectIsCharacterInfoLoading);

    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState<ICharacter | null>(null);

    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } =
        currentCharacter || {};

    const onCloseModalHandler = useCallback(() => setOpenEditModal(false), []);
    const onOpenModalHandler = () => setOpenEditModal(true);

    const onApplyEditedHandler = useCallback(
        (data: IEditedCharacterData) => {
            if (!currentCharacter) return;

            onCloseModalHandler();

            setCurrentCharacter({
                ...currentCharacter,
                ...data,
            });
        },
        [onCloseModalHandler, currentCharacter],
    );

    useEffect(() => {
        if (characterInfo) setCurrentCharacter(characterInfo);
    }, [characterInfo]);

    useEffect(() => {
        if (id) dispatch(getCharacterInfo(id));
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch(clearCharacterInfo());
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            {currentCharacter && (
                <Modal onClose={onCloseModalHandler} open={openEditModal} title="Edit character">
                    <EditCharacterForm
                        data={currentCharacter}
                        onCancel={onCloseModalHandler}
                        onApply={onApplyEditedHandler}
                    />
                </Modal>
            )}

            {isLoading && <Loader />}

            <GoBack className={styles.back} />
            {currentCharacter && (
                <>
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
                                disabled={!currentCharacter}
                            >
                                Edit
                            </Button>
                        </div>

                        <img src={airplane} alt="Yoda" className={styles.img} />
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(CharacterInfoPage);
