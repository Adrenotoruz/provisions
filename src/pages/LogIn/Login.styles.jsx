import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInLinkContainer = styled(Link)`
    font-size: 1.3rem;
    display: block;
    width: 50%;
    text-align: left;
    float: left;
    margin-top: 3rem;
    text-decoration: none;
    color: #000;

    &:last-child {
        float: right;
        text-align: right;
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;