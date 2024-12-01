
import styled from "styled-components";
import { Link } from "../../atoms/link/Link";

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    box-shadow: ${props => props.theme.shadow.small};
    font-size: ${props => props.theme.typography.fontSize.large};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    height: 60px;
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.black}
`;

export const StyledNavLink = styled(Link)<{ $active?: boolean; }>`
    margin-right: 1rem;
    text-transform: uppercase;
    font-size: ${props => props.theme.typography.fontSize.base};
    color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.black}
`

export const StyledNav = styled.div`
    gap: 2rem;
`