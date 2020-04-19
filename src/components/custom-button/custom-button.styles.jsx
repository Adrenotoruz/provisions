import styled from 'styled-components';

const CustomButtonContainer = styled.button`
    display: block;
    text-align: center;
    font-family: inherit;
    font-size: 1.3rem;
    margin: 2rem auto 0;
    line-height: 2rem;
    border-radius: 4.5rem;
    border: none;
    width: 90%;
    padding: 1rem 2rem;
    background-color: #737373;
    color: #fff;
    transition: all .3s;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #808080;
        box-shadow: 0rem .5rem 1rem rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

export default CustomButtonContainer;