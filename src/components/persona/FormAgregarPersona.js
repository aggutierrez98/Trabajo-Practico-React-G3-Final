import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearpersona } from '../../actions/personas';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import '../../pages/css/personaPageStyle.css';

export const FormAgregarPersona = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        surname: "",
        userTag: "",
        email: "",
    });

    const { name, surname, userTag, email } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startCrearpersona(name, surname, userTag, email));
        reset();
        dispatch(cerrarModal());
    }

    return (

        <form id="form" onSubmit={onSubmit}>
            <h2>Agregar persona</h2>
            <p>Ingresar datos de una persona</p>
            <div id="form-label">
                <label>Nombre</label>
                <span> *</span>
            </div>
            <input type="text" name="name" onChange={handleInputChange} value={name} placeholder="Ingresar nombre" autoComplete="off" required pattern="[A-Za-z]{1,15}"></input>
            <div id="form-label">
                <label>Apellido</label>
                <span> *</span>
            </div>
            <input type="text" name="surname" onChange={handleInputChange} value={surname} placeholder="Ingresar apellido" autoComplete="off" required pattern="[A-Za-z]{1,15}"></input>
            <div id="form-label">
                <label>Alias</label>
                <span> *</span>
            </div>
            <input type="text" name="userTag" onChange={handleInputChange} value={userTag} placeholder="Ingresar alias" autoComplete="off" required pattern="[A-Za-z0-9_-]{1,15}"></input>
            <div id="form-label">
                <label>Email</label>
                <span> *</span>
            </div>
            <input type="email" name="email" onChange={handleInputChange} value={email} placeholder="Ingresar email" autoComplete="off" required></input>
            <button id="boton-form">Hecho</button>
            <div id="form-label">
                <span>* </span>
                <label>Los campos son obligatorios</label>
            </div>
        </form>

    )
}
