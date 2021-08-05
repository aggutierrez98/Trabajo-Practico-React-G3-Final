import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const LibroCardPrestados = ({ id: uid }) => {

    const { libros } = useSelector(state => state.libro);

    const [libro, setLibro] = useState({});

    const { nombre, descripcion } = libro;

    useEffect(() => {

        const libroEncontrado = libros.find(lib => lib._id === uid);
        setLibro(libroEncontrado);

    }, [uid, libros])

    return (
        <tr className="libro-card">
            <td><p>{nombre}</p></td>
            <td><p>{descripcion}</p></td>
        </tr>
    )
}
