import { ChangeEvent, FocusEvent, memo, useCallback } from "react";

import { Controller, FieldValues } from "react-hook-form";

import Input from "@molecules/Input";

import { IInputControlled } from "./InputControlled.interface";

const InputControlled = <T extends FieldValues>({
    control,
    name,
    onBlur,
    onChange,
    shouldUnregister,
    ...inputProps
}: IInputControlled<T>) => {
    const onBlurHandler = useCallback(
        (
            e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
            controllerOnBLur: () => void,
        ) => {
            onBlur?.(e);
            controllerOnBLur();
        },
        [onBlur],
    );

    const onChangeHandler = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        controllerOnChange: (event: string) => void,
    ) => {
        onChange?.(e);
        controllerOnChange(e.target.value);
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error: { message } = {} } }) => {
                return (
                    <Input
                        error={message}
                        name={field.name as string}
                        {...inputProps}
                        value={field.value as string}
                        onBlur={(e) => onBlurHandler(e, field.onBlur)}
                        onChange={(e) => onChangeHandler(e, field.onChange)}
                    />
                );
            }}
            shouldUnregister={shouldUnregister}
        />
    );
};

export default memo(InputControlled) as typeof InputControlled;
