import React from 'react';

import {
    InputContainer,
    LabelContainer
} from './form-input.styles'

const FormInput = ({type, placeholder}) => (
    <div>
        <InputContainer type={`${type}`} placeholder={placeholder} ></InputContainer>
        <LabelContainer>{`${placeholder}:`}</LabelContainer>
    </div>
);

export default FormInput;