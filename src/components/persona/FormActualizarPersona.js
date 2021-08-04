import React from 'react'
import { useDispatch } from 'react-redux';
import { startActualizarpersona } from '../../actions/personas';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const FormActualizarPersona = ({ id }) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        surname: "",
        userTag: "",
    });

    const { name, surname, userTag } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startActualizarpersona(id, name, surname, userTag));
        reset();
        dispatch(cerrarModal());
    }

    return (
        <form id="form" onSubmit={onSubmit}>
            <h2>Actualizar persona</h2>
            <p>Ingresar datos a actualizar</p>
            <div id="form-label">
                <label>Nombre</label>
                <span> *</span>
            </div>
            <input type="text" name="name" onChange={handleInputChange} value={name} placeholder="Ingresar nombre" autoComplete="off" required></input>
            <div id="form-label">
                <label>Apellido</label>
                <span> *</span>
            </div>
            <input type="text" name="surname" onChange={handleInputChange} value={surname} placeholder="Ingresar apellido" autoComplete="off" required></input>
            <div id="form-label">
                <label>Alias</label>
                <span> *</span>
            </div>
            <input type="text" name="userTag" onChange={handleInputChange} value={userTag} placeholder="Ingresar alias" autoComplete="off" required></input>
            <button id="boton-form">Hecho</button>
            <div id="form-label">
                <span>* </span>
                <label>Los campos son obligatorios</label>
            </div>
        </form>
    )
}
