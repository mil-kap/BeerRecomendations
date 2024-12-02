import { memo } from "react";
import { StyledError } from "./Error.styled";

interface IErrorProps {
    error: string;
}
export const Error: React.FC<IErrorProps> = memo(({error}) => {
    return (
        <StyledError>{error}</StyledError>
    );
});