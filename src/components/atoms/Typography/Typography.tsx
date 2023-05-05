import { Typography as TypographyMUI, TypographyProps } from "@mui/material";

const Typography: FCC<TypographyProps> = ({ children, ...otherProps }) => (
    <TypographyMUI {...otherProps}>{children}</TypographyMUI>
);

export default Typography;
