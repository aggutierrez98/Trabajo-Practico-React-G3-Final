import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { LibroCard } from '../libro/LibroCard';

export const LibrosPrestados = ({ id }) => {

    const { libros } = useSelector(state => state.libro);

    const [librosPersona, setlibrosPersona] = useState([]);

    const [active, setActive] = useState(false);

    const onClick = () => {
        const nuevosLibros = libros.filter(libro => libro.persona_id === id);
        setlibrosPersona(nuevosLibros)
        setActive(true);
    };

    return (
        <div>
            <button
                onClick={onClick}
            >
                Cargar libros de la persona
            </button>
            {
                (active) &&

                librosPersona?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        {...libro}
                    />
                ))
            }

        </div>
    )
}
