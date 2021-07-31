import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LibroCard } from '../libro/LibroCard';

export const LibrosPrestados = ({ id }) => {

    const { libros } = useSelector(state => state.libro);

    const [librosPersona, setlibrosPersona] = useState([]);

    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    useEffect(() => {
        const nuevosLibros = libros.filter(libro => libro.persona_id === id);
        setlibrosPersona(nuevosLibros)
        setActive(true);
    }, [dispatch, id, libros])

    return (
        <div>
            {
                (active) &&

                librosPersona?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        id={libro._id}
                    />
                ))
            }
        </div>
    )
}
