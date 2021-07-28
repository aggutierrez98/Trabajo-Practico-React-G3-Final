import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startBorrarPersona } from '../../actions/personas';
import { abrirModal } from '../../actions/ui';
import { Modal } from '../Modal';
import { FormActualizarPersona } from './FormActualizarPersona';
import { LibrosPrestados } from './LibrosPrestados';

export const PersonaCard = ({ nombre, apellido, alias, email, _id: uid }) => {

    const dispatch = useDispatch();

    const { modalOpen, id } = useSelector(state => state.ui);

    const onBorrar = () => {
        dispatch(startBorrarPersona(uid))
    };

    const onModal = () => {
        dispatch(abrirModal(uid));
    }

    return (

        <div>
            <h2>Nombre :</h2>
            <p>{nombre}</p>

            <h2>Apellido: </h2>
            <p>{apellido}</p>

            <h2>Alias :</h2>
            <p>{alias}</p>

            <h2>Email: </h2>
            <p>{email}</p>

            <h3>Borrar persona</h3>
            <button
                onClick={onBorrar}
            >
                Borrar
            </button>

            <h3>Actualizar</h3>


            <button onClick={onModal}>Actualizar Persona</button>

            {
                (modalOpen && uid === id) && (
                    <Modal component={FormActualizarPersona} id={uid} />
                )

            }

            <LibrosPrestados id={uid} />

            <br></br>
        </div>
    )
}
