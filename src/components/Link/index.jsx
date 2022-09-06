import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: #002D40;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Rubik' , sans-serif;
    font-weight: 400;
    border: 10px solid #1aa6b7;
    border-radius: 15px;
    background-color: #1aa6b7;
    margin-right: 18px;

    &:hover{
        transition: 0.5s;
        font-size: 22px;
        color: #FF414D;
        
    }
`


export default Link;