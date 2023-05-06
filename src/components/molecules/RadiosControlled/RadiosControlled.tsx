import { ChangeEvent, memo } from "react";

import { Controller, FieldValues } from "react-hook-form";

import Radios from "@molecules/Radios/Radios";

import { IRadiosControlled } from "./RadiosControlled.interface";

const RadiosControlled = <T extends FieldValues>({
    control,
    name,
    onChange,
    ...radioProps
}: IRadiosControlled<T>) => {
    const onChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        currentValue: string,
        controllerOnChange: (event: string) => void,
    ) => {
        onChange?.(e, currentValue);
        controllerOnChange(e.target.value);
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                return (
                    <Radios
                        name={field.name as string}
                        {...radioProps}
                        value={field.value as string}
                        onChange={(e, currentValue) =>
                            onChangeHandler(e, currentValue, field.onChange)
                        }
                    />
                );
            }}
        />
    );
};

export default memo(RadiosControlled) as typeof RadiosControlled;
