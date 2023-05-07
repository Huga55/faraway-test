import { FC, memo } from "react";

import clsx from "clsx";
import { TailSpin } from "react-loader-spinner";

import { ILoader } from "./Loader.interface";
import styles from "./Loader.module.scss";

const Loader: FC<ILoader> = ({ className, localLoader, transparentBG }) => {
    return (
        <div
            className={clsx(styles.wrapper, className, {
                [styles.wrapper_local]: localLoader,
                [styles.wrapper_transparent]: transparentBG,
            })}
        >
            <TailSpin ariaLabel="loading-indicator" height={40} width={40} />
        </div>
    );
};

export default memo(Loader);
