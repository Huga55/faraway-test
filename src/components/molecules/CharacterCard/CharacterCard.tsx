import { FC, memo } from "react";

import clsx from "clsx";

import LineValue from "@molecules/LineValue";

import Button from "@atoms/Button";

import { getDateForClient } from "@utils/helpers/dates";
import { getLastElemOfURL } from "@utils/helpers/string";

import { ICharacterCard } from "./CharacterCard.interface";
import styles from "./CharacterCard.module.scss";

const CharacterCard: FC<ICharacterCard> = ({ data, className, onGetInfo }) => {
    const { name, height, mass, created, url } = data;

    const id = getLastElemOfURL(url);

    return (
        <div className={clsx(styles.wrapper, className)}>
            <div className={styles.content}>
                <div className={styles.lines}>
                    <LineValue className={styles.line} label="Name">
                        {name}
                    </LineValue>

                    <LineValue className={styles.line} label="Height">
                        {height}
                    </LineValue>

                    <LineValue className={styles.line} label="Mass">
                        {mass}
                    </LineValue>

                    <LineValue className={styles.line} label="Created">
                        {getDateForClient(created)}
                    </LineValue>
                </div>

                <Button onClick={() => id && onGetInfo(id)} variant="contained">
                    Show more
                </Button>
            </div>
        </div>
    );
};

export default memo(CharacterCard);
