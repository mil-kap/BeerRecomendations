import { StyledError } from "./Error.styled";

interface IErrorProps {
    error: string;
}
export const Error: React.FC<IErrorProps> = ({error}) => {
    return (
        <StyledError>{error}</StyledError>
    );
}