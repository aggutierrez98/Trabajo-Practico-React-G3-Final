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
import './css/libroPageStyle.css'

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
        
        <div className="estiloLibro">
            <h1>LibroPage</h1>
            <h2> Buscar libro </h2>

            <div className="encabezado">   
                <SearchLibros />
                <button onClick={onModal}>
                    
                    <ion-icon name="person-add"></ion-icon>
                </button>
                {
                    (modalOpen && !id) && (
                        <Modal component={FormAgregarLibros} modalOpen={modalOpen} />
                        )
                    }
            </div>
            <hr />

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Prestado A</th>
                    <th colSpan="4">Acciones</th>
                </tr>
            {
                libros?.map(libro => (
                    <LibroCard
                    key={libro._id}
                    id={libro._id}
                    />
                    ))
                }
            </table>

            <BuscarPorGenero />

        </div>
    )
}
