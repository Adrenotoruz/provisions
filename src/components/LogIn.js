import React from 'react';
import {Link} from 'react-router-dom'

const LogIn = () => {
    return (
        <div className="form-container">
            <form className="form">
                <input type="email" className="form__input" placeholder="e-mail" ></input>
                <label className="form__label">e-mail:</label>
                <input type="password" className="form__input" placeholder="hasło"></input>
                <label className="form__label">hasło:</label>
                <button type="submit" className="form__button">Zaloguj</button>
                <label className="form__label--link-login-form">Przypomnij hasło</label>
                <Link className="link" to="/registration">
                    <label className="form__label--link-login-form">Zarejestruj się</label>
                </Link>                
            </form>
        </div>
    )
}

export default LogIn;