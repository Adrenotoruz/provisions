import React from 'react';

import FormContainer from './custom-form.styles'

const CustomForm = ({children, ...props}) => (
    <FormContainer {...props}>{children}</FormContainer>
)

export default CustomForm;