import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    align-self: center;
    &:hover {
        cursor: pointer;
        color: #F082AC;
    }
`