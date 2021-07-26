import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { LibroCard } from '../libro/LibroCard';

export const BuscarPorGenero = () => {

    const [genero, setGenero] = useState("");

    const [librosPorGenero, setlibrosPorGenero] = useState([]);

    const [mostarLibros, setMostarLibros] = useState(false);

    const { generos } = useSelector(state => state.genero);

    const { libros } = useSelector(state => state.libro);

    const generoChange = (event) => {
        setGenero(event.target.value);
    };

    const buscarLibros = () => {
        setlibrosPorGenero(libros.filter(libro => libro.categoria_id === genero));
        setMostarLibros(true);
    };

    return (
        <div>
            <h2>Buscar libros por genero: </h2>

            <select value={genero} onChange={generoChange}>
                <option hidden> Seleccione un genero </option>
                {
                    generos.map(genero => (
                        <option
                            value={genero._id}
                            key={genero._id}
                            onSelect={generoChange}
                        >
                            {genero.nombre}
                        </option>
                    ))
                }
            </select>

            <button onClick={buscarLibros}>
                Buscar
            </button>

            {
                (mostarLibros) &&
                librosPorGenero.map(libro => (
                    <LibroCard
                        key={libro._id}
                        {...libro}
                    />
                ))
            }

        </div>
    )
}
