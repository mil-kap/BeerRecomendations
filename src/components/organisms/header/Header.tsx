import { useMemo } from "react";
import { StyledHeader, StyledNav, StyledNavLink } from "./Header.styled";
import { useLocation } from "react-router-dom";

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
                        <StyledNavLink to="/mng" title="All beers" className="left" $active={location.pathname.includes('mng-list')}></StyledNavLink>
                        <StyledNavLink to="/mng/create" title="Add beers" className="left" $active={location.pathname.includes('mng-create')}></StyledNavLink>
                        <StyledNavLink to="/mng/trends" title="Trends" className="left" $active={location.pathname.includes('mng-trends')}></StyledNavLink>
                    </StyledNav>
                    <StyledNavLink to="/" title="User View" className="right"></StyledNavLink>
                </StyledHeader>
            )
    
};