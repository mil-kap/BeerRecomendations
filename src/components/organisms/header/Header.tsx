import { useMemo } from "react";
import { StyledHeader, StyledNav, StyledNavLink } from "./Header.styled";
import { useLocation } from "react-router";

enum Views {
    'user',
    'manager'
}

export const Header = () => {
    let location = useLocation();
    
    const view = useMemo(() => {
        return location.pathname.includes('mng') ? Views.manager : Views.user;
    }, [location])

    return view === Views.user ? (
                <StyledHeader>
                    <StyledNavLink to="/" title="Home" className="left"></StyledNavLink>
                    <h3>Craft Beer Emporium</h3>
                    <StyledNavLink to="/mng" title="Manager View" className="right"></StyledNavLink>
                </StyledHeader>
            )
            :
            (
                <StyledHeader>
                    <StyledNav>
                        <StyledNavLink to="/mng" title="All beers" className="left" $active={location.pathname === '/mng'}></StyledNavLink>
                        <StyledNavLink to="/mng/create" title="Add beers" className="left" $active={location.pathname.includes('create')}></StyledNavLink>
                        <StyledNavLink to="/mng/trends" title="Trends" className="left" $active={location.pathname.includes('trends')}></StyledNavLink>
                    </StyledNav>
                    <StyledNavLink to="/" title="User View" className="right"></StyledNavLink>
                </StyledHeader>
            )
    
};