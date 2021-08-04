import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filtrarLibros } from '../../actions/libros';
import { terminarBusqueda } from '../../actions/ui';

export const BuscarPorGenero = () => {

    const [genero, setGenero] = useState("");
    const dispatch = useDispatch();

    const { generos } = useSelector(state => state.genero);

    const { libros } = useSelector(state => state.libro);

    const generoChange = (event) => {
        setGenero(event.target.value);
    };

    const buscarLibros = () => {
        const librosPorGenero = (libros.filter(libro => libro.categoria_id === genero));
        dispatch(filtrarLibros(librosPorGenero));
        dispatch(terminarBusqueda());
    };

    return (
        <div className="search-genero">
            {/* <h2>Buscar libros por genero: </h2> */}

            <select className="generoSelect" value={genero} onChange={generoChange}>
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

            <button
                className="buscar-boton"
                onClick={buscarLibros}>
                Buscar
            </button>
            <button
                id="buscar-lupa"
                onClick={buscarLibros}
            >
                <ion-icon name="search"></ion-icon>
            </button>

        </div>
    )
}
