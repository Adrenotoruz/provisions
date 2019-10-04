import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar" to="/logIn">
            
            <Link to="/">
                <div className="navbar__logo margin-left-small">
                    <span className="navbar__content">
                        Logo
                    </span>
                </div>
            </Link>

            <Link to="/registration">
                <div className="navbar__option navbar__option--authorization margin-right-small">
                    <span className="navbar__content">
                        Rejestracja
                    </span>
                </div>
            </Link>

            <Link to="/logIn">
                <div className="navbar__option navbar__option--authorization">
                    <span className="navbar__content">
                        Logowanie
                    </span>
                </div>
            </Link>
            
        </div>
    )
}

export default Navbar;