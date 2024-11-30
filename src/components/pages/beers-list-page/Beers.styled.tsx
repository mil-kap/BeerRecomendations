import styled from "styled-components";

export const StyledBeers = styled.div`
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    row-gap: 3rem;
    column-gap: 3rem;
    overflow: hidden;
`;