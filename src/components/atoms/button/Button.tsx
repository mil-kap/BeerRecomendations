import { StyledButton } from "./Button.styled";

interface IButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({label, onClick}) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClick();
    }
    return (
        <StyledButton onClick={handleClick}>{label}</StyledButton>
    )
}