import styled from "styled-components";

export const StyledBeerCard = styled.div`
    background-color: ${props => props.theme.colors.white};
    overflow: hidden;
    box-shadow: ${props => props.theme.shadow.medium};
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
