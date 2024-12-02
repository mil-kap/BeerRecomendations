import { memo } from "react";
import { StyledButton } from "./Button.styled";

interface IButtonProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    type?: "button" | "submit";
    position?: "left" | "right";
}

export const Button: React.FC<IButtonProps> = memo(({label, onClick, type="button", position="right"}) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <StyledButton onClick={handleClick} type={type} $position={position}>{label}</StyledButton>
    )
});