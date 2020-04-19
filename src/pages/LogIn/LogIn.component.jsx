import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';

import { LogInLinkContainer } from './Login.styles';
import CustomForm from '../../components/custom-form/custom-form.component';
import FormInput from '../../components/form-input/form-input.component'

const LogIn = () => {
    return (
            <CustomForm>
                <FormInput type='email' placeholder='e-mail' />
                <FormInput type='password' placeholder='hasło' />
                <CustomButton type="submit"> Zaloguj </CustomButton>
                <LogInLinkContainer to="/#">Przypomnij hasło</LogInLinkContainer>
                <LogInLinkContainer to="/registration">Zarejestruj się</LogInLinkContainer>                
            </CustomForm>
    )
}

export default LogIn;