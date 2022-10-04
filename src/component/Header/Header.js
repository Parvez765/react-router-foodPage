import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='link bg-slate-500 p-5'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/services">Services</Link>
        </div>
    );
};

export default Header;