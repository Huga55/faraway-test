import { Control, ControllerProps, FieldValues, Path } from "react-hook-form";

import { IInput } from "@molecules/Input/Input.interface";

export interface IInputControlled<T extends FieldValues>
    extends Omit<IInput, "error" | "name">,
        Omit<ControllerProps, "control" | "name" | "defaultValue" | "render"> {
    control: Control<T>;
    name: Path<T>;
}
