import { useLayoutEffect, useState } from "react";

import { mobileBreakpoint, tabletBreakpoint } from "@constants/media";

const useMedia = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const resizeHandler = () => {
            setIsDesktop(false);
            setIsTablet(false);
            setIsMobile(false);

            if (window.innerWidth <= mobileBreakpoint) return setIsMobile(true);

            if (window.innerWidth <= tabletBreakpoint) return setIsTablet(true);

            return setIsDesktop(true);
        };

        resizeHandler();

        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return {
        isDesktop,
        isMobile,
        isTablet,
    };
};

export default useMedia;
