import React from 'react';

import {
    NavbarContainer,
    ContentContainer,
    LeftEdgeLink,
    RightEdgeLink,
    RightSideLink
} from './navbar.styles'

const Navbar = () => {
    return (
        <NavbarContainer>
            
            <LeftEdgeLink to="/">
                <ContentContainer>
                    Logo
                </ContentContainer>
            </LeftEdgeLink>

            <RightEdgeLink to="/registration">
                <ContentContainer>
                    Rejestracja
                </ContentContainer>
            </RightEdgeLink>

            <RightSideLink to="/logIn">
                <ContentContainer>
                    Logowanie
                </ContentContainer>
            </RightSideLink>
            
        </NavbarContainer>
    )
}

export default Navbar;