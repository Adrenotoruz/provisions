import React from 'react';

import {
    InputContainer,
    LabelContainer
} from './form-input.styles'

const FormInput = ({type, placeholder, name, value, onChange}) => (
    <div>
        <InputContainer 
            type={`${type}`} 
            placeholder={placeholder}
            name={name}
            value={value}  
            onChange={onChange}>
        </InputContainer>
        <LabelContainer>{`${placeholder}:`}</LabelContainer>
    </div>
);

export default FormInput;