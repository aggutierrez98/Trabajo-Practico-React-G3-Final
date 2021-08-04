import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/Navbar.css";

export const Navbar = () => {
    return (
        <>
            <div className="navbar-position">
                <Link className="titulo-nav" to='/'>  libros  </Link>
                <Link className="titulo-nav" to='/persona'>  personas  </Link>
                <Link className="titulo-nav" to='/genero'>  generos  </Link>
                {/* <Link className="titulo-nav home" to='/'> Home </Link> */}
            </div>
            <div className="navbar-responsive"></div>
        </>
    )
}
