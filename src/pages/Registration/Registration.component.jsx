import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomForm from '../../components/custom-form/custom-form.component'
import FormInput from '../../components/form-input/form-input.component'

import { RegistrationLinkContainer } from './Registration.styles';

const Registration = () => {
    return (
        <CustomForm>
            <FormInput type='email' placeholder='e-mail' />
            <FormInput type='password' placeholder='hasło' />
            <FormInput type='password' placeholder='powtórz hasło' />
            <CustomButton type="submit">Zarejestruj</CustomButton>
            <RegistrationLinkContainer to="/logIn">Zaloguj się</RegistrationLinkContainer>
        </CustomForm>
    )

}

export default Registration;