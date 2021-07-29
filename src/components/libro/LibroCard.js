import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startBorrarLibro } from '../../actions/libros';
import { FormActualizarLibro } from './FormActualizarLibro';
import { abrirModal } from '../../actions/ui';
import { Modal } from '../Modal';
import { PrestarDevolverLibro } from './PrestarDevolverLibro';

export const LibroCard = ({ id: uid }) => {

    const dispatch = useDispatch();

    const { personas } = useSelector(state => state.persona);
    const { libros } = useSelector(state => state.libro);
    const { modalOpen, id } = useSelector(state => state.ui);

    const [libro, setLibro] = useState({});

    const { nombre, descripcion, persona_id } = libro;

    const [persona, setPersona] = useState({});

    const onBorrar = () => {
        dispatch(startBorrarLibro(uid))
    };

    useEffect(() => {

        const libroEncontrado = libros.find(lib => lib._id === uid);
        setLibro(libroEncontrado);

    }, [uid, libros])

    useEffect(() => {

        const personaEncontrada = personas.find(p => p._id === persona_id);
        setPersona(personaEncontrada);

    }, [persona_id, personas])

    const onModal = () => {
        dispatch(abrirModal(uid));
    }

    return (
        <div>
            <h2>Nombre:</h2>
            <p>{nombre}</p>

            <h2>Descripcion: </h2>
            <p>{descripcion}</p>

            {
                persona &&
                (<div>
                    <h2>Prestado a</h2>
                    <p>{persona.nombre}</p>
                </div>
                )
            }

            <PrestarDevolverLibro uid={uid} />

            <br></br>

            <button
                onClick={onBorrar}
            >
                Borrar
            </button>

            <br></br>
            <br></br>

            <button onClick={onModal}>Actualizar Libro</button>
            {
                (modalOpen && uid === id) && (
                    <Modal component={FormActualizarLibro} id={uid} />
                )

            }

            <br></br>
        </div>
    )
}
