import React from 'react';
import './navbar.scss';
import '../base-scss/grid/grid.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <span className="navbar__content">
                    Logo
                </span>
            </div>
            <div className="navbar__option navbar__option--authorization">
                <span className="navbar__content">
                    Rejestracja
                </span>
            </div>
            <div className="navbar__option navbar__option--authorization">
                <span className="navbar__content">
                    Logowanie
                </span>
            </div>
        </div>
    )
}

export default Navbar;