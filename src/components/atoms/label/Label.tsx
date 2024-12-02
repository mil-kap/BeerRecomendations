import { memo } from "react";
import { StyledLabel } from "./Label.styled";

interface ILabelProps {
    name: string;
}

export const Label: React.FC<ILabelProps> = memo(({name}) => {
    return (
        <StyledLabel>{name}: </StyledLabel>
    );
});