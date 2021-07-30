import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarGeneros } from '../actions/generos';
import { startCargarLibros } from '../actions/libros';
import { startCargarPersonas } from '../actions/personas';
import { abrirModal } from '../actions/ui';
import { BuscarPorGenero } from '../components/genero/BuscarPorGenero';
import { FormAgregarLibros } from '../components/libro/FormAgregarLibros';
import { LibroCard } from '../components/libro/LibroCard';
import { SearchLibros } from '../components/libro/SearchLibros';
import { Modal } from '../components/Modal';


export const LibroPage = () => {

    const dispatch = useDispatch();

    const { modalOpen, id } = useSelector(state => state.ui)

    const { libros } = useSelector(state => state.libro);

    useEffect(() => {
        dispatch(startCargarLibros());
        dispatch(startCargarPersonas());
        dispatch(startCargarGeneros());
    }, [dispatch]);

    const onModal = () => {
        dispatch(abrirModal());
    };

    return (
        <div className="contactForm">

            <SearchLibros />

            <button onClick={onModal}>Agregar Libro</button>
            {
                (modalOpen && !id) && (
                    <Modal component={FormAgregarLibros} modalOpen={modalOpen} />
                )
            }

            <h1>LibroPage</h1>

            {
                libros?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        id={libro._id}
                    />
                ))
            }

            <BuscarPorGenero />

        </div>
    )
}
