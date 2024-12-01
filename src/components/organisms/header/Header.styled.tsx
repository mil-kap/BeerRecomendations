
import styled from "styled-components";
import { Link } from "../../atoms/link/Link";

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    font-size: 1.2rem;
    font-weight: 700;
    height: 60px;
    background-color: #00d5d1;
`;

export const StyledNavLink = styled(Link)<{ $active?: boolean; }>`
    margin-right: 1rem;
    color: ${props => props.$active ? "#F082AC" : "#000000"}
`

export const StyledNav = styled.div`
    gap: 2rem;
`