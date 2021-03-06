import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LibroCard } from '../libro/LibroCard';
import { LibroCardPrestados } from '../libro/LibroCardPrestados';

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
        <div className="estiloLibro">

            {
                (active)
                    ? (
                        librosPersona?.map(libro => (
                            <>
                                <br></br>
                                <h2>Libros prestados</h2>

                                <table>

                                    <tbody>

                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                        </tr>

                                        <LibroCardPrestados
                                            key={libro._id}
                                            id={libro._id}
                                        />
                                    </tbody>
                                </table>
                            </>
                        ))

                    )
                    :
                    (
                        <>
                            <br></br>
                            <h2>No hay libros prestados a esta persona</h2>
                        </>
                    )
            }
        </div>
    )
}
