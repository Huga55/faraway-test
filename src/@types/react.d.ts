import { FC, PropsWithChildren } from "react";

declare global {
    type FCC<T = {}> = FC<PropsWithChildren<T>>;
}
