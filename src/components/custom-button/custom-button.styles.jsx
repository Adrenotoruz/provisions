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
    background-color: #757575;
    color: #eee;
    transition-timing-function: linear;
    transition: all .1s;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #606060;
        color: #eee;
        cursor: pointer;
    }
`;

export default CustomButtonContainer;