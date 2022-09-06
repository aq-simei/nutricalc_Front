import React from "react";
import styled from 'styled-components';
import Link from "../Link";


const NavTitle = styled.h1`
    
    font-family: 'Rubik',sans-serif;
    font-weight: 700;
    background-color: #f56A79;
    color: #002D40;
    border-radius: 15px;
    border: 10px solid #f56A79;

`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color:#002D40;
    height: 3.5vw;
    display: flex;
    align-items: center;
    
`
const Logo = styled.img`
    height: 80px;
    width: 80px;
    margin-left: 20px;
`
const Nav = () => {
    return(
        <>
            
        <Navbar>
            <NavTitle>NUTRI CALC !!</NavTitle>
            <Link>Home</Link>
            <Link>About the project</Link>
            <Link>Calculate my expenditure</Link>
        </Navbar>
        </>
    )
}


export default Nav;