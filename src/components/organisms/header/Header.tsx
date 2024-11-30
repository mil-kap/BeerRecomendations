import React from "react";
import { StyledHeader, StyledHome } from "./Header.styled";

export const Header = React.memo(() => {
    return (
        <StyledHeader>
            <StyledHome to="/">Home</StyledHome>
            <h2>Buy beautiful beers with us!</h2>
        </StyledHeader>
    )
})