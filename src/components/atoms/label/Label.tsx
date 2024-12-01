import { StyledLabel } from "./Label.styled";

interface ILabelProps {
    name: string;
}

export const Label: React.FC<ILabelProps> = ({name}) => {
    return (
        <StyledLabel>{name}: </StyledLabel>
    );
}