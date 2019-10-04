import React from 'react';
import {Link} from 'react-router-dom'

const Registration = () => {
    return (
        <div className="form-container">
            <form className="form">
                <input type="email" className="form__input" placeholder="e-mail" ></input>
                <label className="form__label">e-mail:</label>
                <input type="password" className="form__input" placeholder="hasło"></input>
                <label className="form__label">hasło:</label>
                <input type="password" className="form__input" placeholder="powtórz hasło"></input>
                <label className="form__label">powtórz hasło:</label>
                <button type="submit" className="form__button">Zarejestruj</button>
                <Link className="link" to="/logIn">
                    <label className="form__label--link-registration-form">Zaloguj się</label>
                </Link>
            </form>
        </div>
    )

}

export default Registration;