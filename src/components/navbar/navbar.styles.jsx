import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const navbarOption = css`
    display: table;
    height: 100%;
    width: 12.5rem;
    padding: 0 1rem;
    color: black;
    float: left; 
    cursor: pointer;
    background-image: linear-gradient(150deg,
                                      transparent 0%,
                                      transparent 50%,
                                      #00cc7a 50%);
    background-size: 300%;
    transition: all .4s;
    
    span {
        transition: all .4s;
    }

    &:hover {
        background-position: 100%;
        
        span {
            transition: all .4s;
            color: #fff;
        }
    }
`;

export const NavbarContainer = styled.div`
    width: 100%;
    height: 5rem;
    left: 0;
    top: 0;
    background-color: #99ffd6;
    position: fixed;

    a:link,
    a:visited {
        text-decoration: none;
        color: black;
    }
`;

export const ContentContainer = styled.span`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    font-size: 2rem;
`;

export const LeftEdgeLink = styled(Link)`
    ${navbarOption}

    margin-left: 1.5rem;
`;

export const RightEdgeLink = styled(Link)`
    ${navbarOption}

    float: right;
    margin-right: 1.5rem;
`;

export const RightSideLink = styled(Link)`
    ${navbarOption}

    float: right;
`;