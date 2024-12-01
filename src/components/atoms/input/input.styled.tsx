import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    padding: 8px 0;
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid ${props => props.theme.colors.gray};
`