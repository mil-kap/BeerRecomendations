import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    height: 60px;
    background-color: #00d5d1;
`;

export const StyledHome = styled(Link)`
    position: absolute;
    left: 3rem;
    text-decoration: none;
    color: #000000;
    align-self: center;
    &:hover {
        cursor: pointer;
        color: #F082AC;
    }
`;