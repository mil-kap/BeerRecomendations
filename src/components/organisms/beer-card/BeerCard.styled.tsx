import styled from "styled-components";

export const StyledBeerCard = styled.div`
    border: 2px solid #909090;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
        background-color: #f5ebeb;
    }
`

export const StyledContainer = styled.div`
    display: flex;
    height: 100%;
`
