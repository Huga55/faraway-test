import { FC, memo } from "react";

import { useForm } from "react-hook-form";

import InputControlled from "@molecules/InputControlled/InputControlled";
import RadiosControlled from "@molecules/RadiosControlled/RadiosControlled";

import Button from "@atoms/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import { editCharacterSchema } from "@utils/validation/schemas/character";

import { editCharactersGenders } from "./EditCharacterForm.constants";
import { IEditCharacterForm, IEditCharacterFormFields } from "./EditCharacterForm.interface";
import styles from "./EditCharacterForm.module.scss";

const EditCharacterForm: FC<IEditCharacterForm> = ({ data, onApply, onCancel }) => {
    const { control, handleSubmit } = useForm<IEditCharacterFormFields>({
        defaultValues: data,
        resolver: yupResolver(editCharacterSchema),
    });

    const onSubmitHandler = (data: IEditCharacterFormFields) => onApply?.(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles.fields}>
                <InputControlled
                    control={control}
                    className={styles.field}
                    label="Name"
                    variant="standard"
                    name="name"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    type="number"
                    label="Height"
                    variant="standard"
                    name="height"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    type="number"
                    label="Mass"
                    variant="standard"
                    name="mass"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    label="Hair color"
                    variant="standard"
                    name="hair_color"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    label="Skin Color"
                    variant="standard"
                    name="skin_color"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    label="Eyye color"
                    variant="standard"
                    name="eye_color"
                />

                <InputControlled
                    control={control}
                    className={styles.field}
                    label="Birth Year"
                    variant="standard"
                    name="birth_year"
                />

                <RadiosControlled
                    label="Gender"
                    control={control}
                    className={styles.field}
                    name="gender"
                    elems={editCharactersGenders}
                />
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
