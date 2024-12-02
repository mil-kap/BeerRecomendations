import { memo } from "react";
import { StyledLink } from "./Link.styled";

interface ILinkProps {
    to: string;
    title: string;
    className: any;
}
export const Link: React.FC<ILinkProps> = memo(({to, title, className}) => {
    return (
        <StyledLink to={to} className={className}>{title}</StyledLink>
    );
});