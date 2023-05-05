import { FC, memo } from "react";

import Input from "@molecules/Input";

import Button from "@atoms/Button";

import { IEditCharacterForm } from "./EditCharacterForm.interface";
import styles from "./EditCharacterForm.module.scss";

const EditCharacterForm: FC<IEditCharacterForm> = ({ onApply, onCancel }) => {
    return (
        <form>
            <div className={styles.fields}>
                <Input className={styles.field} label="Name" variant="standard" name="name" />

                <Input
                    className={styles.field}
                    type="number"
                    label="Height"
                    variant="standard"
                    name="height"
                />

                <Input
                    className={styles.field}
                    type="number"
                    label="Mass"
                    variant="standard"
                    name="mass"
                />

                <Input
                    className={styles.field}
                    label="Hair color"
                    variant="standard"
                    name="hairColor"
                />

                <Input
                    className={styles.field}
                    label="Skin Color"
                    variant="standard"
                    name="skinColor"
                />

                <Input
                    className={styles.field}
                    label="Eyye color"
                    variant="standard"
                    name="eyeColor"
                />

                <Input
                    className={styles.field}
                    label="Birth Year"
                    variant="standard"
                    name="birthYear"
                />

                <Input className={styles.field} label="Gender" variant="standard" name="gender" />
            </div>

            <div className={styles.btns}>
                <Button onClick={onCancel} variant="outlined" className={styles.btn}>
                    Cancel
                </Button>

                <Button type="submit" variant="contained" className={styles.btn}>
                    Apply
                </Button>
            </div>
        </form>
    );
};

export default memo(EditCharacterForm);
