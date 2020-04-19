import styled from 'styled-components';

export const InputContainer = styled.input`
    
    margin-top: 1.75rem;

    &{
        font-family: inherit;
        line-height: 2rem;
        font-size: 1.2rem;
        padding: 1rem 2rem;
        border-radius: 4.5rem;
        border: none;
        width: 100%;
        background-color: #f2f2f2;
        transition: all .3s;

        &:focus {
            outline: none;
            box-shadow: 0rem .5rem 1rem rgba(#000, 0.2rem);
        }

        &::placeholder {
            color: #808080;
        }

    }

    :placeholder-shown + label {
        visibility: hidden;
        opacity: 0;
        transform: translateY(-3rem);
    }
`;

export const LabelContainer = styled.label`
    display: block;
    color: #404040;
    font-size: 1.3rem;
    font-family: inherit;
    margin-left: 2rem;
    transform: translateY(-6.25rem);
    transition: all .4s;
    clear: both;
    overflow: hidden;
`;