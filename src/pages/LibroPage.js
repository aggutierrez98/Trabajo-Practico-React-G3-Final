import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarGeneros } from '../actions/generos';
import { startCargarLibros } from '../actions/libros';
import { startCargarPersonas } from '../actions/personas';
import { abrirModal } from '../actions/ui';
import { BuscarPorGenero } from '../components/libro/BuscarPorGenero';
import { FormAgregarLibros } from '../components/libro/FormAgregarLibros';
import { LibroCard } from '../components/libro/LibroCard';
import { SearchLibros } from '../components/libro/SearchLibros';
import { Modal } from '../components/Modal';
import './css/libroPageStyle.css'

export const LibroPage = () => {

    const [init, setInit] = useState([])
    const [filtros, setFiltros] = useState([])
    const dispatch = useDispatch();

    const { modalOpen, id } = useSelector(state => state.ui)

    const { filtered } = useSelector(state => state.ui)
    const { librosFiltrados } = useSelector(state => state.libro);
    const { libros } = useSelector(state => state.libro);
    // let { filtros } = useSelector(state => state.libro);
    // setFiltros(libros);
    // useSelector(state => console.log(state))
    useEffect(() => {
        console.log(libros)
        dispatch(startCargarLibros());
        dispatch(startCargarPersonas());
        dispatch(startCargarGeneros());
        setFiltros(libros);
    }, [dispatch]);
    

    const onModal = () => {
        dispatch(abrirModal());
    };

    const buscarLibro = (e) => {
        e.preventDefault()
        let {value} = e.target
        setInit(value)
    }

    const buscarLibroSeleccionado = () => {
        console.log(init)
        console.log(filtros)
        let nombreMayus = init.toUpperCase()
        let nuevosFiltros = filtros.filter((a) => a.nombre === nombreMayus);
        console.log(nuevosFiltros)
        setFiltros(nuevosFiltros);
    }

    return (
        
        <div className="estiloLibro">
            <h1>LibroPage</h1>
            <h2> Buscar libro </h2>

            <div className="encabezado">   
                {/* <SearchLibros /> */}
                <input
                    type="text"
                    onChange={buscarLibro}
                />
                <button
                    onClick={buscarLibroSeleccionado}
                >
                    Buscar
                </button>
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
                filtros.map(libro => (
                    <LibroCard
                    key={libro._id}
                    id={libro._id}
                    />
                    ))
                }
            </table>

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

        </div>
    )
}
