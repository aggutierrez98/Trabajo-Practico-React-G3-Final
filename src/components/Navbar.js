import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar-position">
            <div className="titulo-nav">
                <Link to='/persona'>  personas  </Link>
            </div>
            <div className="titulo-nav">
                <Link to='/libro'>  libros  </Link>
            </div>
            <div className="titulo-nav">
                <Link to='/genero'>  generos  </Link>
            </div>

            <br></br>
            <hr></hr>
        </div>
    )
}
