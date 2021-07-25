import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <span>
                <Link to='/persona'>  personas  </Link>
            </span>
            <span>
                <Link to='/libro'>  libros  </Link>
            </span>
            <span>
                <Link to='/genero'>  generos  </Link>
            </span>

            <br></br>
            <hr></hr>
        </div>
    )
}
