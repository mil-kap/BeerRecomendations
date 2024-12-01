import React, { useEffect, useState } from "react";
import { StyledHeader, StyledNav, StyledNavLink } from "./Header.styled";
import { useLocation } from "react-router-dom";

enum Views {
    'user',
    'manager'
}

export const Header = React.memo(() => {
    let location = useLocation();
    const [view, setView] = useState<Views>(Views.user);

    useEffect(() => {
        const currentView = location.pathname.includes('mng') ? Views.manager : Views.user;
        setView(currentView);
    }, [location]);
    
    return view === Views.user ? (
                <StyledHeader>
                    <StyledNavLink to="/" title="Home" className="left"></StyledNavLink>
                    <h2>Buy beautiful beers with us!</h2>
                    <StyledNavLink to="/mng-list" title="Manager View" className="right"></StyledNavLink>
                </StyledHeader>
            )
            :
            (
                <StyledHeader>
                    <StyledNav>
                        <StyledNavLink to="/mng-list" title="All beers" className="left" $active={location.pathname.includes('mng-list')}></StyledNavLink>
                        <StyledNavLink to="/mng-create" title="Add beers" className="left" $active={location.pathname.includes('mng-create')}></StyledNavLink>
                        <StyledNavLink to="/mng-trends" title="Trends" className="left" $active={location.pathname.includes('mng-trends')}></StyledNavLink>
                    </StyledNav>
                    <StyledNavLink to="/" title="User View" className="right"></StyledNavLink>
                </StyledHeader>
            )
    
});