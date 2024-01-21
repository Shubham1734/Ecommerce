// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react'; 
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    // const [user, setUser] = useState({
    //     username: 'JohnDoe',
    //     email: 'john@example.com',
    // });
    return (
    <NavbarContainer>
        <Logo>
            <Link to="/">ECart</Link>
        </Logo>
        <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/category">Categories</Link>
            <Link to="/cart">Cart<FaShoppingCart/></Link>
        </NavLinks>
        <Logo>
            <Link to = "/profile"><CgProfile/></Link>
        </Logo>
    </NavbarContainer>
    );
};
const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
`;

const Logo = styled.div`
    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

const NavLinks = styled.div`
    a {
        color: #fff;
        text-decoration: none;
        margin: 0 1rem;
    }
`;

export default Navbar;
