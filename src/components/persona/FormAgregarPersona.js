import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearpersona } from '../../actions/personas';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

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
        <div>
            <h2>Agregar persona</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={handleInputChange} value={name} placeholder="Ingresar nombre" autoComplete="off"></input>
                <input type="text" name="surname" onChange={handleInputChange} value={surname} placeholder="Ingresar apellido" autoComplete="off"></input>
                <input type="text" name="userTag" onChange={handleInputChange} value={userTag} placeholder="Ingresar alias" autoComplete="off"></input>
                <input type="text" name="email" onChange={handleInputChange} value={email} placeholder="Ingresar email" autoComplete="off"></input>
                <button type="submit"> Hecho </button>
            </form>
        </div>
    )
}
