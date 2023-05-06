import { Control, ControllerProps, FieldValues, Path } from "react-hook-form";

import { IRadios } from "@molecules/Radios/Radios.interface";

export interface IRadiosControlled<T extends FieldValues>
    extends IRadios,
        Omit<ControllerProps, "control" | "name" | "defaultValue" | "render"> {
    control: Control<T>;
    name: Path<T>;
}
