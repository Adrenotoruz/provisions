import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegistrationLinkContainer = styled(Link)`
    font-size: 1.3rem;
    margin-top: 2rem;
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #000;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;