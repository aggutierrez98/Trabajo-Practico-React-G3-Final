import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startBorrarPersona } from '../../actions/personas';
import { abrirModal } from '../../actions/ui';
import { Modal } from '../Modal';
import { FormActualizarPersona } from './FormActualizarPersona';
import { LibrosPrestados } from './LibrosPrestados';
import '../../pages/css/personaPageStyle.css';

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

        <div >
            <table className="estiloPersona">
            
            <tr> 
            <label>Nombre: </label>{nombre}

            <label>Apellido: </label>{apellido}

            <label>Alias: </label>{alias}

            <label>Email: </label>{email}
            </tr>

            <tr className="estiloPersonaTr">
            <button onClick={onBorrar}> <ion-icon name="trash"></ion-icon></button>

            <button onClick={onModal}> <ion-icon name="reload"></ion-icon></button>

            {
                (modalOpen && uid === id) && (
                    <Modal component={FormActualizarPersona} id={uid} />
                )
            }

            <LibrosPrestados id={uid} />
            </tr>
            </table>
        </div>
    )
}
