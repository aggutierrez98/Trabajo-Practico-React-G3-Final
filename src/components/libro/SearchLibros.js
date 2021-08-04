import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filtrarLibros } from '../../actions/libros';
import { terminarBusqueda } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const SearchLibros = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ""
    });

    const dispatch = useDispatch();

    const { libros } = useSelector(state => state.libro);


    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.length > 0) {
            const libroBuscado = searchText.toUpperCase();

            const librosEncontrados = libros.filter(libro => libro.nombre.includes(libroBuscado));
            dispatch(filtrarLibros(librosEncontrados));
            dispatch(terminarBusqueda());
        }
        // else {

        //     const librosEncontrados = libros;
        //     dispatch(filtrarLibros(librosEncontrados));
        //     dispatch(terminarBusqueda());
        // }
    }

    return (

        <form className="search-libro" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar libro por nombre"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
                className="campoBuscar"

            />

            <button
                className="buscar-boton"
                type="submit"
            >
                Buscar...
            </button>
            <button
                type="submit"
                id="buscar-lupa"
            >
                <ion-icon name="search"></ion-icon>
            </button>
        </form>

    )
}
