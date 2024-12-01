import styled from "styled-components";

export const StyledDescription = styled.ul`
    list-style-type: none;
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    padding-inline-start: 0px;
`;

export const StyledDescriptionItem = styled.li``;

export const StyledDescriptionTitle = styled.li`
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    font-size: ${props => props.theme.typography.fontSize.base};
    height: 5rem;
    overflow: hidden;
`;