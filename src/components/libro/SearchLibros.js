import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { LibroCard } from './LibroCard';

export const SearchLibros = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ""
    });

    const { libros } = useSelector(state => state.libro);

    const [librosFiltrados, setLibrosFiltrados] = useState([]);
    const [busquedaTerminada, setBusquedaTerminada] = useState(false);

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.length > 0) {
            const libroBuscado = searchText.toUpperCase();

            // const librosEncontrados = libros.filter(libro => libro.nombre === libroBuscado);
            const librosEncontrados = libros.filter(libro => libro.nombre.includes(libroBuscado));
            setLibrosFiltrados(librosEncontrados);
            setBusquedaTerminada(true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
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
                    type="submit"
                    className="buscar"
                >
                    <ion-icon name="search"></ion-icon>
                </button>
            </form>
            <div>
                {
                    (busquedaTerminada && librosFiltrados.length === 0)
                    && <div>
                        El libro no se encuentra
                    </div>
                }

                {
                    librosFiltrados.map(libro => (
                        <LibroCard
                            key={libro._id}
                            id={libro._id}
                        />
                    ))
                }

            </div>
        </div>
    )
}
