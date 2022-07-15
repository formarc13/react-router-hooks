import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/carrito">Carrito</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
            </ul> 
        </nav>
    );
}

export default Navbar;
