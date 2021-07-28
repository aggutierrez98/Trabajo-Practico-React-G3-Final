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
        <div>
            <h2>Actualizar persona</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={handleInputChange} value={name} placeholder="Ingresar nombre" autoComplete="off"></input>
                <input type="text" name="surname" onChange={handleInputChange} value={surname} placeholder="Ingresar apellido" autoComplete="off"></input>
                <input type="text" name="userTag" onChange={handleInputChange} value={userTag} placeholder="Ingresar alias" autoComplete="off"></input>
                <button type="submit"> Hecho </button>
            </form>
        </div>
    )
}
