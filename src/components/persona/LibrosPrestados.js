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

        if (librosPersona.length === 0) {
            setActive(false);
        } else {
            setActive(true);
        }

    }, [dispatch, id, libros, librosPersona.length])

    return (
        <div className="estiloLibro libro-page">

            {
                (active)
                    ? (
                        librosPersona?.map(libro => (
                            <>
                                <h2>Libros prestados</h2>
                                <br></br>

                                <tbody>

                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Prestado A</th>
                                        <th colSpan="4">Acciones</th>
                                    </tr>

                                </tbody>

                                <LibroCard
                                    key={libro._id}
                                    id={libro._id}
                                />
                            </>
                        ))

                    )
                    :
                    (
                        <h2>No hay libros prestados a esta persona</h2>
                    )
            }
        </div>
    )
}
