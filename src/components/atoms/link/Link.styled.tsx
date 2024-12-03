import { Link } from "react-router";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    align-self: center;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
    }
`