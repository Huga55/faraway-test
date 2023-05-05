import { ModalProps } from "@mui/material";

export interface IModal extends Omit<ModalProps, "onClose"> {
    title?: string;
    windowClassName?: string;
    onClose(): void;
}
