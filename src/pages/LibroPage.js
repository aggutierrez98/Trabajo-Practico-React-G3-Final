import React, { useEffect, useState } from 'react'
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
// import "../styles/pages/libro/libro-page.css"
import './css/libroPageStyle.css'

export const LibroPage = () => {

    const dispatch = useDispatch();

    const { modalOpen, id } = useSelector(state => state.ui)

    const { filtered } = useSelector(state => state.ui)
    const { librosFiltrados } = useSelector(state => state.libro);
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
        
        <div className="estiloLibro libro-page">
                {
                (modalOpen && !id) && (
                    <Modal component={FormAgregarLibros} modalOpen={modalOpen} />
                )
                }
            <div className="buscadores">
                <div className="agregar-libro" >
                    <button onClick={onModal}><ion-icon name="add-circle"></ion-icon></button>
                    <p>Agregar</p>
                </div>
                <SearchLibros />
                <BuscarPorGenero />
            </div>

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Prestado A</th>
                    <th colSpan="4">Acciones</th>
                </tr>
                {
                (!filtered) &&
                libros?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        id={libro._id}
                    />
                ))
            }
            {
                (!filtered) &&
                (libros.length === 0) && (
                    <h1>Cargando</h1>
                )
            }

            {
                (filtered) &&
                librosFiltrados?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        id={libro._id}
                    />
                ))
            }
            {
                (filtered) &&
                (librosFiltrados.length === 0) && (
                    <h1>No se encuentra busqueda</h1>
                )
            }
            </table>


        </div>
    )
}
